<?php
	/* Sets a variable to halt processing until we know the submission is valid. */
	$proceed = false;
	
	/* Sets the amount of time allowed to complete the form. 5 minutes seems like a good amount of time. */
	$seconds = 60 * 5;
	
	/* Checkes that the cookie and security token are present. If they are, we continue processing. */
	if (isset($_POST['mms']) && isset($_COOKIE['token']) && $_COOKIE['token'] == md5('abrasax salt'.$_POST['mms'])) {
		$proceed = true;
	}
	
	/* Check all form inputs for possible XSS using strip_tags function. */
	$contactName = clean(strip_tags($_POST['contactName']));
	$contactEmail = clean(strip_tags($_POST['contactEmail']));
	$contactSubject = clean(strip_tags($_POST['contactSubject']));
	$contactComment = strip_tags($_POST['contactComment']);

	/* Add the your and current time information. */
	$yourEmail = base64_decode($_POST['yourEmail']);
	$yourEmail = clean(strip_tags($yourEmail));
	date_default_timezone_set('UTC');
	$now = time();
	
	/* Does the token match the timestamp when run through the md5() function? If not, we know something is up and exit. */
	if (!$proceed) {
		echo 'Error: Form processing halted for suspicious activity!';
	}
	/* Has too much time elapsed? If so, we take the customer to the error page. */
	elseif (((int)$_POST['mms'] + $seconds) < mktime()) {
		echo 'Error: We\'re sorry, there was a problem processing your request. Your session has expired.';
	}
	/* If e-mail is not valid show error message. This is a fail-safe measure in case the script is hit directly by a bot. */
	elseif (!preg_match('/^[_A-z0-9-]+((\.|\+)[_A-z0-9-]+)*@[A-z0-9-]+(\.[A-z0-9-]+)*(\.[A-z]{2,4})$/', $contactEmail)) {
		echo 'Error: You have entered an invalid email address!';
	}
	else {
		/* Let's prepare the message for the e-mail. */
		$message = "<p>Hello Caroline,</p><p><strong>$contactName</strong> has sent you a message via your Porfolio web site.</p><p><strong>Name:</strong> $contactName<br /><strong>E-mail Address:</strong> <a href='mailto:$contactEmail'>$contactEmail</a></p><p><strong>Their Questions or Comments:</strong><br />$contactComment</p>";
		
		/* Is the OS Windows or Mac or Linux? */
		if (strtoupper(substr(PHP_OS, 0, 3) === 'WIN')) {
			$eol = "\r\n";
		}
		elseif (strtoupper(substr(PHP_OS, 0, 3) === 'MAC')) {
			$eol = "\r";
		}
		else {
			$eol = "\n";
		}
		
		/* Set Common Headers */
		$headers = 'From: Portfolio Contact Form <'.$yourEmail.'>'.$eol;
		$headers .= 'Reply-To:'.$contactName.'<'.$contactEmail.'>'.$eol;
		$headers .= 'Return-Path:'.$contactName.'<'.$contactEmail.'>'.$eol;    // These two to set reply address.
		$headers .= "Message-ID: <".$now." TheSystem@".$_SERVER['SERVER_NAME'].">".$eol;
		$headers .= "X-Mailer: PHP v".phpversion().$eol;          // These two are used to help avoid spam-filters.
		$headers .= 'MIME-Version: 1.0'.$eol;
		$headers .= 'Content-Type: text/html; charset=UTF-8' .$eol;
		
		/* Send the message using mail() function */
		mail($yourEmail, $contactSubject, $message, $headers);
		
		/* Notify vistor of success or failue */
		if (mail) {
			echo 'Thank you for your email. We will contact you shortly.';
		}
		else {
			echo 'Error: There was a problem processing your request.';
		}
	}
	
	function clean($string){
		$string = str_replace(array( "\r", "\n", "%0a", "%0d"), '', stripslashes($string));
		return $string;
	}
	
	exit;
?>

<!-- Just a nice gag in case someone can actually visit this page. -->
<p>If you want to "attack" this form, <a href="../php/clearCookie.php">try this demo</a>.</p>
