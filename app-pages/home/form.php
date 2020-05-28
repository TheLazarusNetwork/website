<?php
/**
* @package :    LAZARUS
* @since   :    V 1.0
* name     :    form template  
*/

    // Add Essential Resources
    require_once WP_PLUGIN_DIR.'/we-core-engine/engine/form/init.php';
    require_once WP_PLUGIN_DIR.'/we-core-engine/engine/form/filter.php';

    // Start Session
    if(session_status() == PHP_SESSION_NONE) session_start();

    $form         = 'contact_form';
    $form_action  = 'contact_action';
    $form_error   = array();
    $api_key      = '6LcAQqsUAAAAABlnuIQMh3Kg2-sGZ5jHmOzIW3-l';
    $api_secret   = '6LcAQqsUAAAAAETMuAL5E5MU0iQBodI0o6VnVdRZ';
    // ---------------------------------------------------------
    // User Subscribe Form
    // ---------------------------------------------------------
    
    if(is_valid_req($form, $form_action)){

        // Check Google Recaptcha
        if(!check_recaptcha($_POST["g-recaptcha-response"], $api_secret)){
            $error = 'Recaptcha verification failed';

            // Redirect
            $url = get_home_url().'/error';
            wp_redirect($url);
            exit;
        }
        
        // Get username
        $person_name  = $_POST['f-name'];
        if(!empty($person_name)){
            // Sanitize Name
            $person_name = filter_var($person_name, FILTER_SANITIZE_STRING);
        }

        // Get user email
        $user_input = $_POST['email'];

        //Verifying user email
        $temp_email = we_email_verify($user_input);

        // Check Validation of Email and set email value
        if($temp_email[0]) $user_email = $temp_email[1];
        else {
            $error = 'Your email address is not correct.';
            array_push($form_error, $error);
        }

        // Registration - All Value Set with no errors
        if(!count($form_error)){


            // Email of header
            $headers = array('Content-Type: text/html; charset=UTF-8');
        
            // Subject of email
            $subject = 'Thank you for connecting with Lazarus Network';
        
            // Email Body
            $message = '<ul>
                <li>Name: '.$person_name.'</li>
                <li>Email: '.$user_email.'</li>
            </ul>';

            echo $user_email;
        
            // Use Wordpress default function to send email to user
            wp_mail('connect@lazarus.com', $subject, $message, $headers);


            // Redirect
            $url = get_home_url().'/thank-you';
            wp_redirect($url);
            exit;
        }
        else{
            // Redirect
            $url = get_home_url().'/home';
            wp_redirect($url);
            exit;
        }  
    } else {
        // Form Init - Starting
        $form_token = we_form_token($form);
    } 
?>
<section id="subscribe" class="cta-1 section section--padding section--gradient__2">
    <div class="container">
        <div class="row">
            <div class="preamble preamble--light col-lg-8 offset-lg-2 mb-5">
                <h3 class="title">Subscribe</h3>
                <p class="lead">Subscribe and get updates via email</p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <form action="<?php echo get_permalink(); ?>" method="post" class="footer-form mb-0">
                    <div class="form-group">
                        <input type="text" class="form-control footer-form__input" id="name" name="f-name" aria-describedby="name" placeholder="Your Name">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control footer-form__input" id="email" name="email" aria-describedby="email" required placeholder="Email Address">
                    </div>
                    <div class="form-group justify-content-center mt-4">
                    <?php
                    /**
                     * API Key
                     * Form Token
                     * Form Action
                     * Button Name
                     * Button Class for CSS Styling */
                    echo we_recaptcha_submit_button($api_key, $form_token, $form_action, 'Subscribe', 'button form-button btn btn--blue btn--lg w-100'); 
                    ?>
                    </div>
                    <style>
                    .g-recaptcha{
                        display: block;
                        margin: 20px auto;
                    }
                    .g-recaptcha >div{
                        margin: 0 auto;
                    }
                    </style>
                    <small class="d-block text-center text-light">We don't use our users email for marketing</small>
                </form>
            </div>
        </div>
    </div>
</section>
