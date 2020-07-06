<?php
/**
 * @package     :    LAZARUS
 * @since       :    V 1.0
 * Template Name:  All Services Template
 */
 
get_header(); 

?>
<style>
  
</style>

<main id="main" class="main main-1">

    <?php get_template_part('app-templates/header/page-header'); ?>

    <section id="subscribe" class="cta-1 section section--padding  my-img">
        <div class="container my-padding">
        </div>
    </section>
</main>

<!-- Section 1 -->
<section id="features" class="features-7 section section--padding section--gradient__5">
  <div class="container m-0 p-y10">
      <div class="row">
        <div class="col-12">
          <h3 class="title text-center"></h3>          
        </div>
      </div>
    </div>
    <div class="container">
        <div class="row d-flex align-items-center">
            <div class="col-xl-6 col-lg-5 order-2 order-lg-1">
                <div class="preamble text-left pr-4 mb-0">
                    <h3 class="title">Personal Security</h3>
                    <p class="lead"></p>
                    
                </div>
            </div>
            <div class="col-xl-6 col-lg-7 order-1 order-lg-2 mb-5 mb-lg-0">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="feature-card">
                            <i class="icon-Data-Refresh icon--color icon--md mb-3"></i>
                            <h5 class="mb-3">VPN</h5>
                            <p class="mb-0">Lazarus VPN is an encrypted tunneling solution for end users offering WireGuard® Tunneling, secured by Ed25519 Private Key Encryption, Multi Region Network, Peer to Peer network access and a lot more.</p>
                        </div>
                        <div class="feature-card">
                            <i class="icon-SSL icon--color icon--md mb-3"></i>
                            <h5 class="mb-3">FIREWALL</h5>
                            <p class="mb-0">Lazarus Firewall is incorporated on the network layer (DNS Layer) for detecting and eliminating cyber threats which try to attack the application system.</p>
                        </div>
                    </div>
                    <div class="col-sm-6 with--margin">
                        <div class="feature-card">
                            <i class="icon-Headset icon--color icon--md mb-3"></i>
                            <h5 class="mb-3">STREAM</h5>
                            <p class="mb-0">Lazarus Stream leverages IPFS Network for the content delivery and relay of streams for hosting the video calls within the private network created with Lazarus VPN. </p>
                        </div>
                        <div class="feature-card">
                            <i class="icon-Chrome icon--color icon--md mb-3"></i>
                            <h5 class="mb-3">DRIVE</h5>
                            <p class="mb-0">Lazarus Drive is a private file storage service on the cloud and the connected devices based on the IPFS - A peer-to-peer hypermedia protocol</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Section 2 -->
<section id="services" class="services-4 section section--padding__wmargin section--gradient__3">
    <div class="container">
        <div class="row">
            <div class="preamble preamble--light col-lg-8 offset-lg-2">
                <h3 class="title">Enterprise Security</h3>
                <p class="lead">Demonstrating core competencies to in turn innovate. Create stakeholder engagement so that we gain traction.</p>
            </div>
        </div>
        <div class="row">
            <div class="service col-lg-3 col-md-6 col-sm-6 text-center">
                <!-- <i class="service__icon icon-Mail-Send icon--md"></i> -->
                <h5 class="service__header">CPN</h5>
                <p class="service__description">Lorem ipsum dolor sit amet, consectetur tate.</p>
            </div>
            <div class="service col-lg-3 col-md-6 col-sm-6 text-center">
                <!-- <i class="service__icon icon-Fountain-Pen icon--md"></i> -->
                <h5 class="service__header">FIREWALL SHIELD </h5>
                <p class="service__description">Lorem ipsum dolor sit amet, consectetur tate.</p>
            </div>
            <div class="service col-lg-3 col-md-6 col-sm-6 text-center">
                <!-- <i class="service__icon icon-Environmental icon--md"></i> -->
                <h5 class="service__header">EMAIL</h5>
                <p class="service__description">Lorem ipsum dolor sit amet, consectetur tate.</p>
            </div>
            <div class="service col-lg-3 col-md-6 col-sm-6 text-center">
                <!-- <i class="service__icon icon-Wifi-2 icon--md"></i>-->
                <h5 class="service__header">CHAT</h5>
                <p class="service__description">Lorem ipsum dolor sit amet, consectetur tate.</p>
            </div>
        </div>
        <div class="row">
            <div class="service col-lg-3 col-md-6 col-sm-6 text-center">
                <!-- <i class="service__icon icon-Medal icon--md"></i> -->
                <h5 class="service__header">STREAM</h5>
                <p class="service__description">Lorem ipsum dolor sit amet, consectetur tate.</p>
            </div>
            <div class="service col-lg-3 col-md-6 col-sm-6 text-center">
                <!-- <i class="service__icon icon-Laptop-Phone icon--md"></i> -->
                <h5 class="service__header">BLOCKCHAIN</h5>
                <p class="service__description">Lorem ipsum dolor sit amet, consectetur tate.</p>
            </div>
            <div class="service col-lg-3 col-md-6 col-sm-6 text-center">
                <!-- <i class="service__icon icon-Dashboard icon--md"></i> -->
                <h5 class="service__header">TUNNEL</h5>
                <p class="service__description">Lorem ipsum dolor sit amet, consectetur tate.</p>
            </div>
            <div class="service col-lg-3 col-md-6 col-sm-6 text-center">
                <!-- <i class="service__icon icon-Statistic icon--md"></i> -->
                <h5 class="service__header">GATEWAY</h5>
                <p class="service__description">Lorem ipsum dolor sit amet, consectetur tate.</p>
            </div>
        </div>
    </div>
</section>



<?php

get_template_part('app-templates/footer/footer'); 

get_footer(); 

?>
