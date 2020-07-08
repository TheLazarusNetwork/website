<?php
/**
 * @package:        lazarus_network
 * @since:          V 1.0
 * Template Name:   Home Page
 */

global $media_url; ?>

<!-- Get Header -->
<?php get_header(); ?>

<!-- Header and Hero -->
<main id="main" class="main main-1">
  <?php get_template_part('app-templates/header'); ?>
  <?php get_template_part('app-templates/hero/main-hero'); ?>
</main>

<?php get_template_part('app-pages/home/services-carousel'); ?>

<?php get_template_part('app-pages/home/pricing-section'); ?>

<?php get_template_part('app-pages/home/video'); ?>

<?php get_template_part('app-pages/home/location'); ?>

<?php get_template_part('app-pages/home/form'); ?>

<!-- Sub Footer -->
<?php get_template_part('app-templates/sub-footer'); ?>

<!-- Footer -->
<?php get_footer(); ?>