<?php
/**
 * @package     :    LAZARUS
 * @since       :    V 1.0
 * Template Name:    vpn-Page-Template
 */
?>


<?php

get_header(); 


?>

<main id="main" class="main main-1">

    <?php get_template_part('app-templates/header/page-header'); ?>

    <section id="subscribe" class="cta-1 section section--padding section--gradient__2 my-img">
        <div class="container my-padding">
        </div>
    </section>
</main>

<?php get_template_part('app-pages-docs/vpn/body'); ?>

<?php get_template_part('app-templates/footer/footer'); 

get_footer(); ?>
