<?php
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  
  // Format the email message
  $to = 'alvinalvaro146@gmail.com';
  $body = "Name: $name\nEmail: $email\nNumber: $email\nSubject: $subject\n\n$message";
  $headers = "From: $email\n";
  
  // Send the email
  if (mail($to, $subject, $body, $headers
};