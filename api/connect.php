<?php
/**
 * @package:        LAZARUS
 * @since:          V 1.0
 * Template Name:   API - Connect 
 */

// Add Essential Resources
require_once WP_PLUGIN_DIR.'/we-core-engine/engine/form/init.php';
require_once WP_PLUGIN_DIR.'/we-core-engine/engine/form/filter.php';

// Start Session
if(session_status() == PHP_SESSION_NONE) session_start();

function success_response($result, $description = NULL){
  header('Content-type: application/json; charset=utf-8');
  echo json_encode(array(
    'status' => TRUE,
    'result' => $result,
    'description' => $description
  ));
  exit;
}

function error_response($description){
  header('Content-type: application/json; charset=utf-8');
  echo json_encode(array(
    'status' => FALSE,
    'description' => $description,
  ));
  exit;
}

// Get User ID
if(!is_user_logged_in()) error_response('Unauthorized Access! User not logged in.');

if(!isset($_POST['name-field']) && empty($_POST['name-field'])) error_response('Invalid request');
if(!isset($_POST['email-field']) && empty($_POST['email-field'])) error_response('Invalid request');
if(!isset($_POST['message-field']) && empty($_POST['message-field'])) error_response('Invalid request');

$user_input = $_POST['email-field'];
//Verifying user email
$temp_email = we_email_verify($user_input);
// Check Validation of Email and set email value
if($temp_email[0]) $email = $temp_email[1];
else error_response('Invalid request');

$name = $_POST['name-field'];
$message = $_POST['message-field'];

// Email of header
$headers = array('Content-Type: text/html; charset=UTF-8');

// Subject of email
$subject = 'New user connected with Lazarus Network';

// Email Body
$message = '<ul>
    <li>Name: '.$name.'</li>
    <li>Email: '.$email.'</li>
    <li>Message: '.$email.'</li>
</ul>';

// Use WordPress default function to send email to user
wp_mail('connect@lazarus.com', $subject, $message, $headers);

success_response('Message Sent');