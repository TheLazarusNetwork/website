<?php
/**
 * @package     :    LAZARUS
 * @since       :    V 1.0
 * Template Name:    Live-Stream-Page-Template
 */
 
get_header(); 

?>

<main id="main" class="main main-1">

    <?php get_template_part('app-templates/header/page-header'); ?>

    <section id="subscribe" class="cta-1 section section--padding section--gradient__2 my-img">
        <div class="container my-padding">
        </div>
    </section>
</main>

<section id="vpn" class="services services-3 section section--padding">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3 class="title text-center">Live Stream</h3>
                <p class="lead text-justify">
                    Lazarus Streaming Service offers Secure and Decentralized Live Video
                    Streaming using IPFS. The stream will be more secure as it uses end to end encryption. The
                    decentralized network allows our users to stream content without any restrictions and also reduce
                    the cost of live Streaming. We will launch Decentralized Live Video Streaming before july. We are
                    currently testing it internally and making it safe and reliable for our users. Subscribe us, to stay
                    tuned.
                </p>
            </div>
        </div>
    </div>
</section>

<?php

get_template_part('app-templates/footer/footer'); 

get_footer(); 

?>
