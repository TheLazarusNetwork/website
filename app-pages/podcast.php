<?php
/**
 * @package:        lazarus_network
 * @since:          V 1.0
 * Template Name:   Podcast Page
 */
 
global $media_url; ?>

<!-- Get Header -->
<?php get_header(); ?>

<style>
  .pen-styles {
    height: 100%;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }

  .pen-styles>div:first-of-type {
    margin-bottom: 40px;
  }

  .toggle-custom {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
    font-size: 14px;
    margin: 0 auto;
  }

  .toggle-custom input {
    display: none;
  }

  .toggle-custom input:checked+label {
    background-color: #0a9d85;
  }

  .toggle-custom input:checked+label::after {
    left: 17px;
  }

  .toggle-custom input:checked~span:last-of-type {
    color: #1e2532;
    opacity: 1;
  }

  .toggle-custom input:checked~span:first-of-type {
    color: #7e8aa2;
    opacity: 0.6;
  }

  .toggle-custom label {
    position: relative;
    display: inline-block;
    width: 38px;
    height: 23px;
    background-color: #7e8aa2;
    border-radius: 20px;
    margin-bottom: 0;
    cursor: pointer;
    -webkit-box-ordinal-group: 3;
    order: 2;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .toggle-custom label::after {
    content: '';
    width: 17px;
    height: 17px;
    position: absolute;
    top: 3px;
    left: 4px;
    border-radius: 50%;
    background-color: #fff;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .toggle-custom span {
    color: #7e8aa2;
    opacity: 0.6;
    -webkit-transition: opacity 0.2s ease-in-out, color 0.2s ease-in-out;
    transition: opacity 0.2s ease-in-out, color 0.2s ease-in-out;
  }

  .toggle-custom span:first-of-type {
    padding-right: 10px;
    color: #1e2532;
    opacity: 1;
    -webkit-box-ordinal-group: 2;
    order: 1;
  }

  .toggle-custom span:last-of-type {
    padding-left: 10px;
    -webkit-box-ordinal-group: 4;
    order: 3;
  }
</style>

<!-- Header and Hero -->
<main id="main" class="main main-1">
  <?php get_template_part('app-templates/header'); ?>

  <section id="subscribe" class="cta-1 section section--padding  my-img" style="background-image: url(<?php echo get_template_directory_uri(); ?>/app-resources/images/banner.png);">
    <div class="container my-padding">
    </div>
  </section>
</main>

<!-- Lazarus Personal Plans -->
<section id="pricing" class="pricing pricing-5 section section--padding section--gradient__5">
    <div class="container d-flex align-content-stretch flex-wrap">
      <div class="row">
        <div class="col-6 mx-auto d-flex align-content-stretch flex-wrap">
          <div class=" error-page-image pt-5 pb-3">
            <img src="<?php echo $media_url; ?>/coming-soon.jpg;" class="img-fluid">
          </div>
          <div class="error-page-text col-12">
            <h3>Stay tuned....Podcasts coming soon. </h3>
            <p></p>
            <div class="error-page-actions text-center">
              <a href="<?php echo get_home_url(); ?>" class="btn btn-primary d-inline">Back to Homepage</a>
            </div>
          </div>
        </div>
      </div>
    </div>

</section>


<!-- Sub Footer -->
<?php get_template_part('app-templates/sub-footer'); ?>

<!-- Footer -->
<?php get_footer(); ?>