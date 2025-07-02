<?php
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "evan00hanson@gmail.com";
    $subject = "Contact Form Submission";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $result = mail($to, $subject, $message, $headers);

    if ($result) {
      echo "Your message was sent successfully!";
    } else {
      echo "An error occurred, please try again.";
    }
  }
?>
