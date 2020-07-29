<?php
/**
 * @package:        LAZARUS
 * @since:          V 1.0
 * Template Name:   All News Page
 */

get_header(); ?>

<style>
 .post-heading h1 {
    color: #464646;
    font-size: 30px;
    font-weight: bold;
    line-height: 32px;
    margin: 0 10px 30px;
    padding-bottom: 16px;
    position: relative;
    text-transform: uppercase;
  }

  .post-heading h1::after {
    display: block;
    border-bottom: 3px solid #068acd;
    content: "";
    width: 9%;
    margin: 0 auto;
    margin-top: 25px;
  }
  .blog-img{
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.2);
  }
</style>

<main id="main" class="main main-1">

  <?php get_template_part('app-templates/header'); ?>

  <section id="subscribe" class="cta-1 section section--padding my-img" style="background-image: url(<?php echo get_template_directory_uri(); ?>/app-resources/images/banner.png);">
    <div class="container my-padding">
    </div>
  </section>
</main>

<div style="max-width: 800px;" class="mx-auto pt-5 mt-5">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="post-heading text-center">
          <h1 class="">ALL NEWS</h1>
        </div>
      </div>
    </div>
  </div>
</div>

<div style="max-width: 800px;" class="mx-auto py-5">
  <div class="container">
    <div class="row">
      
      <?php
        // This argument is used to get WordPress Posts
        $args = array(
          'post_status'       => 'publish',     // Status means post is published or not. We need only published post
          'post_type'         => 'post',        // Post type can be page or post. Here we need post not page
          'orderby'           => 'modified',    // This is ordered by - So that we can get latest post first
          'order'             => 'DESC',        // This is post ordering - ascending or descending 
          'posts_per_page'    => 10,            // This is for number of post we want in one page
          'paged'             => $paged         // This is the variable we used to target the page
        );

        // Now we will query post using WP function
        $query = new WP_Query($args); // args - arguments we have defined previously

        // We need to loop through the news post and create a list
        if($query->have_posts()): while($query->have_posts()): $query->the_post();
      
        include get_template_directory().'/app-pages/all-news/post-template.php';

        endwhile; endif;
      ?>

    </div>
  </div>
</div>

<?php

get_template_part('app-templates/footer/footer'); 

get_footer(); 

?>