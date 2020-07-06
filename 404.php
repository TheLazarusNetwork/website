<?php
/**
 * @package     :    LAZARUS
 * @since       :    V 1.0
 * Template Name:   404 Page 
 */
?>
<!DOCTYPE html>
<html lang="en">

<!-- Header -->
<?php get_header(); ?>

<body class="error-page error-404">

  <div class='loader'>
    <div class='spinner-grow text-primary' role='status'>
      <span class='sr-only'>Loading...</span>
    </div>
  </div>
  <div class="connect-container align-content-stretch d-flex flex-wrap">
    <div class="container d-flex align-content-stretch flex-wrap">
      <div class="row">
        <div class="col-6 mx-auto d-flex align-content-stretch flex-wrap">
          <div class=" error-page-image pt-5 pb-3">
            <img src="<?php echo get_template_directory_uri(); ?>/app-resources/images/error-404.jpg;" class="img-fluid">
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

</body>

</html>