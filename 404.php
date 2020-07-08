<?php
/**
 * @package:    lazarus_network
 * @since:      V 1.0
 * name:        Application Configuration File
 */

global $media_url; ?>

<!-- Get Header -->
<?php get_header(); ?>

<!-- Loading Spinner -->
<div class='loader'>
  <div class='spinner-grow text-primary' role='status'>
    <span class='sr-only'>Loading...</span>
  </div>
</div>

<!-- Error Page Body -->
<div class="connect-container align-content-stretch d-flex flex-wrap">
  <div class="container d-flex align-content-stretch flex-wrap">
    <div class="row">
      <div class="col-6 mx-auto d-flex align-content-stretch flex-wrap">
        <div class=" error-page-image pt-5 pb-3">
          <img src="<?php echo $media_url; ?>/error-404.jpg;" class="img-fluid">
        </div>
        <div class="error-page-text">
          <h3>Oops.. Something went wrong</h3>
          <p>It seems that the page you are looking for no longer exists.<br>We will try our best to fix this soon.</p>
          <div class="error-page-actions text-center">
            <a href="<?php echo get_home_url(); ?>" class="btn btn-primary d-inline">Back to Homepage</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Footer -->
<?php get_footer(); ?>