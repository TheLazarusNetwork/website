<?php
/**
 * @package:        LAZARUS
 * @since:          V 1.0
 * Name:           Blog Page
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

<?php if(have_posts()): while(have_posts()): the_post();
  // Unique ID of a post
  $post_id = get_the_ID();
  
  // Get the category assigned to this post
  $category = (array)get_the_category()[0];
?>

<div style="max-width: 800px;" class="mx-auto pt-5 mt-5">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="post-heading text-center">
          <h1 class=""><?php echo get_the_title(); ?></h1>
        </div>
      </div>
    </div>
  </div>
</div>

<div style="max-width: 1100px;" class="mx-auto">
  <div class="container">
    <div class="row">
      <div class="col-12 p-3">
        <div class="blog-img rounded">
          <img src="<?php echo get_the_post_thumbnail_url($post_id, 'full'); ?>" class="img-fluid rounded" >
        </div>
        <p class="my-3 text-center">
          <span>Date: <?php echo get_the_date(); ?></span>
          <span class="px-2">|</span>
          <span>Posted On: <a href="<?php echo get_home_url().'/category/'.$category['slug']; ?>"><?php echo $category['name']; ?></a></span>
        </p>
      </div>
    </div>
  </div>
</div>

<div style="max-width: 800px;" class="mx-auto pt-5">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div>
          <p><?php echo get_the_content(); ?></p>
        </div>
      </div>
    </div>
  </div>
</div>

<?php endwhile; endif; ?>

<?php

get_template_part('app-templates/footer/footer'); 

get_footer(); 

?>