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
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Services
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="<?php echo get_home_url().'/vpn'; ?>">
              Lazarus VPN
              </a>
              <a class="dropdown-item" href="<?php echo get_home_url().'/tunnel'; ?>">
                Lazarus TUNNEL
              </a>
              <a class="dropdown-item" href="<?php echo get_home_url().'/stream'; ?>">
                Live Stream
              </a>
              <a class="dropdown-item" href="<?php echo get_home_url().'/drive'; ?>">
                IPFS Drive
              </a>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="<?php echo get_home_url().'/plans'; ?>">Plans</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="<?php echo get_home_url().'/pricing'; ?>">Pricing</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="<?php echo get_home_url().'/technologies'; ?>">Technologies</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="<?php echo get_home_url().'/contact'; ?>">Contact Us</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto justify-content-end align-items-start align-items-lg-center">
        <li class="nav-item">
         <a class="nav-link nav-link__cta rounded" href="https://app.lazarus.network" target="_blank">Our App</a>
        </li>
      </ul>
    </div>
  </div>
</nav>