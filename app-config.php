<?php
/**
 * @package:    lazarus_network
 * @since:      V 1.0
 * name:        Application Configuration File
 */


// ===================================================
// Resource DIR and Media URL
// ===================================================
$resource_dir = get_template_directory_uri();
global $resource_dir;
$media_url = $resource_dir.'/app-resources/images';
global $media_url;


// ===================================================
// file for site key and secret key for recaptcha
// ===================================================
$api_key='6LcAQqsUAAAAABlnuIQMh3Kg2-sGZ5jHmOzIW3-l';
$api_secret='6LcAQqsUAAAAAETMuAL5E5MU0iQBodI0o6VnVdRZ';
global $api_key;
global $api_secret;