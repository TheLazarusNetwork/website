<?php
/**
 * @package     :    LAZARUS
 * @since       :    V 1.0
 * Template Name:    IPFS-Drive-Page-Template
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
                <h3 class="title text-center">IPFS Drive</h3>
                <p class="lead text-justify">
                    Lazarus IPFS Drive to provide seamless data storage and sharing solution to the users. IPFS makes
                    distribution of high volumes of data with high efficiency. The users would be able to host their
                    data on the network of computers reducing the cost of storage. Our stream technology provide control
                    of privacy over distributed network. We are about to launch Lazarus Drive beta version for public
                    testing. Subscribe us, to stay tuned.
                </p>
            </div>
        </div>
    </div>
</section>

<?php

get_template_part('app-templates/footer/footer'); 

get_footer(); 

?>
