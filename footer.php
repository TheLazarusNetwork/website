<?php
/**
 * @package:    lazarus_network
 * @since:      V 1.0
 * name:        Main Footer File
 */

 ?>

<footer id="footer" class="footer-1">
  <div class="container">
    <div class="row d-block d-md-flex align-items-center fill-flex">
      <div class="col-6 justify-content-center justify-content-md-start d-flex mb-3 mb-md-0">
        <div class="footer__contact d-flex align-items-center">
          <p class="mb-0 ml-3"><a href="<?php echo get_home_url().'/terms-conditions'; ?>">Terms</a> | <a href="<?php echo get_home_url().'/privacy-policy'; ?>">Privacy</a></p>
        </div>
      </div>
      <div class="col-6 justify-content-center justify-content-md-center d-flex mb-3 mb-md-0">
        <p class="footer__copyrights mb-0">&#169; Copyright 2020 Lazarus Network</p>
      </div>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>