<?php
/**
 * @package     :    LAZARUS
 * @since       :    V 1.0
 * Template Name:    Error-Page-Template
 */

get_header(); 

?>
<section id="thank-you" class="section section--padding section--gradient__1 g-height">
    <div class="container">
        <div class="row">
            <div class="preamble preamble--light col-lg-8 offset-lg-2">
                <h3 class="title">AN ERROR OCCURED</h3>
                <p class="lead">Recaptcha verification failed.</p>
                <p class="lead">Please try one more time.</p>
                <p class="text-center">
                    <a href="<?php echo get_home_url() ; ?>" class="btn btn--red btn--lg mb-0 mt-4 d-inline-flex align-items-center">Back To Home</a>
                </p>
            </div>
        </div>            
    </div>
</section>

<?php get_footer(); ?>