<nav class="navbar navbar-1 navbar-expand-lg navbar-light justify-content-center">
  <div class="container">
    <a class="navbar-brand" href="<?php echo get_home_url(); ?>">
      <img src="<?php echo get_template_directory_uri().'/app-resources/images/logo-white.png'; ?>" alt="" class="light">
      <img src="<?php echo get_template_directory_uri().'/app-resources/images/logo.png'; ?>" alt="" class="dark">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mx-auto fill-flex justify-content-center">
      <li class="nav-item">
        <a class="nav-link" href="<?php echo get_home_url(); ?>">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="<?php echo get_home_url().'/all-services'; ?>">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="<?php echo get_home_url().'/pricing'; ?>">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="<?php echo get_home_url().'/contact'; ?>">Contact Us</a>
      </li>

      </ul>
      <ul class="navbar-nav ml-auto justify-content-end align-items-start align-items-lg-center">
          <li class="nav-item">
            <a class="nav-link nav-link__cta rounded" href="https://app.lazarus.network" target="_blank">Dashboard</a>
          </li>
        </ul>
    </div>
  </div>
</nav>