<?php
/**
 * @package     :    LAZARUS
 * @since       :    V 1.0
 * Template Name:    Lazarus-VPN-Page-Template
 */

get_header(); 

?>

<main id="main" class="main main-1">
    <nav class="navbar navbar-1 navbar-expand-lg navbar-light justify-content-center">
        <div class="container">
            <a class="navbar-brand" href="<?php echo get_home_url(); ?>">
                <img src="<?php echo get_template_directory_uri().'/app-resources/images/logo-white.png'; ?>" alt=""
                    class="light">
                <img src="<?php echo get_template_directory_uri().'/app-resources/images/logo.png'; ?>" alt=""
                    class="dark">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto fill-flex justify-content-center">

                    <li class="nav-item">
                        <a class="nav-link" href="<?php echo get_home_url(); ?>">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#vpn">VPN</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#stream">Stream</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#drive">Drive</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Documentation
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="<?php echo get_home_url().'/general'; ?>">General</a>
                            <a class="dropdown-item" href="<?php echo get_home_url().'/vpn'; ?>">Lazarus VPN</a>
                            <a class="dropdown-item" href="<?php echo get_home_url().'/live-stream'; ?>">Live Stream</a>
                            <a class="dropdown-item" href="<?php echo get_home_url().'/ipfs-drive'; ?>">IPFS Drive</a>
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto justify-content-end align-items-start align-items-lg-center">
                    <li class="nav-item">
                        <a class="nav-link nav-link__cta rounded" href="https://app.lazarus.network">Try App</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <section id="subscribe" class="cta-1 section section--padding section--gradient__2 my-img">
        <div class="container my-padding">
        </div>
    </section>
    <main id="main" class="main main-1">

<?php get_template_part('app-templates/header/page-header'); ?>

<section id="subscribe" class="cta-1 section section--padding section--gradient__2 my-img">
    <div class="container my-padding">
    </div>
</section>
</main>

<section id="vpn" class="services services-3 section section--padding">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3 class="title text-center">Lazarus VPN</h3>
                <p class="lead text-justify">
                    Lazarus VPN brings easier access to the Internet Decentralized, secure and
                    100% anonymous VPN tunnelling solution for end users. In the current times where internet is
                    censored and content on it is often manipulated to instill biased perspective on users’ minds, VPN
                    becomes a necessary tool to bring internet freedom and provide secure access to the open internet.
                    Over VPN service is currently available for private clients only. Get in touch to know more.
                </p>
            </div>
        </div>
    </div>
</section>



<?php

get_template_part('app-templates/footer/footer'); 

get_footer(); 

?>
