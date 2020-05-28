<?php
/**
 * @package     :    LAZARUS
 * @since       :    V 1.0
 * Template Name:    Thank-You-Page-Template
 */

get_header(); 

?>
<section id="thank-you" class="section section--padding section--gradient__1 g-height">
    <div class="container">
        <div class="row">
            <div class="preamble preamble--light col-lg-8 offset-lg-2">
                <h3 class="title">THANK YOU FOR CONNECTING WITH US</h3>
                <p class="lead">STAY TUNED FOR MORE UPDATES</p>
                <p class="text-center">
                    <a href="<?php echo get_home_url() ; ?>" class="btn btn--green btn--lg mb-0 mt-4 d-inline-flex align-items-center">Back To Home</a>
                </p>
            </div>
        </div>            
    </div>
</section>

<?php get_footer(); ?>