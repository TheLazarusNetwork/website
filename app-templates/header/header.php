<?php
/**
* @package :    LAZARUS
* @since   :    V 1.0
* name     :    page header 
*/
?>

<main id="main" class="main main-1">
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
            <a class="nav-link" href="<?php echo get_home_url().'/vpn-page'; ?>">VPN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<?php echo get_home_url().'/tunnel'; ?>">Tunnel</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<?php echo get_home_url().'/stream-page'; ?>">Stream</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="<?php echo get_home_url().'/drive-page'; ?>">Drive</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Documentation
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="<?php echo get_home_url().'/general'; ?>">
                General
              </a>
              <a class="dropdown-item" href="<?php echo get_home_url().'/vpn'; ?>">
                Lazarus VPN
              </a>
              <a class="dropdown-item" href="<?php echo get_home_url().'/stream'; ?>">
                Live Stream
              </a>
              <a class="dropdown-item" href="<?php echo get_home_url().'/drive'; ?>">
                IPFS Drive
              </a>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto justify-content-end align-items-start align-items-lg-center">
          <li class="nav-item">
            <a class="nav-link nav-link__cta rounded" href="https://app.lazarus.network" target="_blank">Try App</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="main-content">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-10 offset-sm-1 text-center text-lg-left mb-5 mb-lg-0">
          <div class="pr-0 pr-xl-5 pr-lg-0">
            <h1 class="main-content__title mb-3 mb-lg-4 h2">Enterprise Grade Cybersecurity For Smart Homes</h1>
            <p class="main-content__lead lead mb-4">Leveraging AI And Blockchain Technologies For Cyber Defense to protect you from online Viruses while you Work From Home.</p>
            <div class="row d-none d-lg-flex">
              <div class="col-lg-6 col-md-6">
                <ul class="features-list list-unstyled m-0">
                  <li class="features-list__item d-flex align-items-center">
                    <i class="features-list__item--icon mr-2"></i>
                    <span class="features-list__item--text color--white">Surf internet Anonymously</span>
                  </li>
                  <li class="features-list__item d-flex align-items-center">
                    <i class="features-list__item--icon mr-2"></i>
                    <span class="features-list__item--text color--white">Secure Distributed Storage</span>
                  </li>
                  <li class="features-list__item d-flex align-items-center">
                    <i class="features-list__item--icon mr-2"></i>
                    <span class="features-list__item--text color--white">Decentralised Streaming</span>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6 col-md-6">
                <ul class="features-list list-unstyled m-0">
                  <li class="features-list__item d-flex align-items-center">
                    <i class="features-list__item--icon mr-2"></i>
                    <span class="features-list__item--text color--white">Open for all</span>
                  </li>
                  <li class="features-list__item d-flex align-items-center">
                    <i class="features-list__item--icon mr-2"></i>
                    <span class="features-list__item--text color--white">Unlimited Bandwith</span>
                  </li>
                  <li class="features-list__item d-flex align-items-center">
                    <i class="features-list__item--icon mr-2"></i>
                    <span class="features-list__item--text color--white">No restrictions</span>
                  </li>
                </ul>
              </div>
            </div>
            <a href="#" class="btn btn--green btn--lg mb-0 mt-4 d-inline-flex align-items-center">Get in touch<i class="icon icon-Right ml-2"></i></a>
          </div>
        </div>
        <div class="col-lg-6 text-center text-lg-right position-relative">
          <img src="<?php echo get_template_directory_uri().'/app-resources/images/hero-illustration-2.png'; ?>" alt="" class="main-content__img img-fluid">
        </div>
      </div>
    </div>
  </div>
</main>