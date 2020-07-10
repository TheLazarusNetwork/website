<?php
/**
 * @package:        lazarus_network
 * @since:          V 1.0
 * Template Name:   All Services Page
 */
 
global $media_url; ?>

<!-- Get Header -->
<?php get_header(); ?>

<style>
}
  
</style>

<!-- Header and Hero -->
<main id="main" class="main main-1">
  <?php get_template_part('app-templates/header'); ?>
  
  <section id="subscribe" class="cta-1 section section--padding my-img" style="background-image: url(<?php echo get_template_directory_uri(); ?>/app-resources/images/banner.png);">
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
                    <p class="lead">All of us are vulnerable to opportunistic online predators.  We provide a way to attack the attack before it happens.  We solve the challenge of data overload through our unique delivery of customized threat intelligence, investigation, and analysis.  We work directly with you or join the team already helping.</p>
                    
                </div>
            </div>
            <div class="col-xl-6 col-lg-7 order-1 order-lg-2 mb-5 mb-lg-0">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="feature-card">
                            <img src="<?php echo $media_url; ?>/Media/vpn-logo1.png" class="img-fluid" style="height: auto; width: 75px;">
                            <h5 class="mb-3">VPN</h5>
                            <p class="mb-0">Lazarus VPN is an encrypted tunneling solution for end users offering WireGuard® Tunneling, secured by Ed25519 Private Key Encryption, Multi Region Network, Peer to Peer network access and a lot more.</p>
                        </div>
                        <div class="feature-card">
                            <img src="<?php echo $media_url; ?>/Media/firewall-icon-dark.png" class="img-fluid" style="height: auto; width: 75px;">
                            <h5 class="mb-3">FIREWALL</h5>
                            <p class="mb-0">Lazarus Firewall is incorporated on the network layer (DNS Layer) for detecting and eliminating cyber threats which try to attack the application system.</p>
                        </div>
                    </div>
                    <div class="col-sm-6 with--margin">
                        <div class="feature-card">
                            <img src="<?php echo $media_url; ?>/Media/stream-logo - dark.png" class="img-fluid" style="height: auto; width: 75px;">
                            <h5 class="mb-3">STREAM</h5>
                            <p class="mb-0">Lazarus Stream leverages IPFS Network for the content delivery and relay of streams for hosting the video calls within the private network created with Lazarus VPN. </p>
                        </div>
                        <div class="feature-card">
                            <img src="<?php echo $media_url; ?>/Media/drive-logo -dark.png" class="img-fluid" style="height: auto; width: 75px;">
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
            <div class="preamble preamble--light col-12 mx-auto ">
                <h3 class="title">Enterprise Security</h3>
                <p class="lead">We provide customizable consulting services built on proven methodology to strengthen your business cyber security defenses. Once we have determined your cyber health from every angle, we then take this vital, accurate assessment, to create a cyber defense. At any point, Fortalice can present board briefings, create webinars, and establish executive coaching to take your new defense to every level of your business across various platforms. Our goal is to keep your company abreast of modern cyber threats and create a defensive strategy with practical solutions to strengthen your key business objectives.</p>
            </div>
        </div>
        <div class="row">
            <div class="service col-lg-3 col-md-6 col-sm-6 text-center my-5">                
                <img src="<?php echo $media_url; ?>/Media/CPN/cpn-logo-icon-white.png" class="img-fluid" style="height: auto; width: 75px;">                
                <h5 class="service__header">CPN</h5>
                <p class="service__description">Lazarus CPN (Corporate Private Network) works similar to the Lazarus VPN but is more focused on enterprise grade security level configurations and comes packaged with connections directly linking with Lazarus Blockchain’s Smart Contract. </p>
            </div>
            <div class="service col-lg-3 col-md-6 col-sm-6 text-center my-5">
                <img src="<?php echo $media_url; ?>/Media/firewall-shield/firewall-icon-white.png" class="img-fluid" style="height: auto; width: 75px;"> 
                <h5 class="service__header">FIREWALL SHIELD </h5>
                <p class="service__description">Lazarus Firewall Shield allows further configurations to the Firewall in case there are a few applications running within the network which need to accessed over the public internet. It supports dynamic DNS connections </p>
            </div>
            <div class="service col-lg-3 col-md-6 col-sm-6 text-center my-5">
                <img src="<?php echo $media_url; ?>/Media/email/lazarus-email-icon-white.png" class="img-fluid" style="height: auto; width: 75px;"> 
                <h5 class="service__header">EMAIL</h5>
                <p class="service__description">Lazarus Email allows hosting email services for the registered domain for your business. Control and monitor the emails sent, manage email groups, automate sending emails and do a lot more with the private email hosting solution.</p>
            </div>
            <div class="service col-lg-3 col-md-6 col-sm-6 text-center my-5">
                <img src="<?php echo $media_url; ?>/Media/chat/lazarus-chat-icon-white.png" class="img-fluid" style="height: auto; width: 75px;">          
                <h5 class="service__header">CHAT</h5>
                <p class="service__description">Lazarus Chat solution is currently based on the network hosted Riot.IM Application - A universal secure chat app entirely under your control. Communicate the way you want from casual chat to high powered collaboration. </p>
            </div>
        </div>
        <div class="row">
            <div class="service col-lg-3 col-md-6 col-sm-6 text-center">
                <img src="<?php echo $media_url; ?>/Media/stream/stream-icon-white.png" class="img-fluid" style="height: auto; width: 75px;">         
                <h5 class="service__header">STREAM</h5>
                <p class="service__description">Lazarus Stream solution is currently based on the network hosted Jitsi Meet. Supports video chat with the whole team.Lazarus Stream leverages IPFS Network for the content delivery and relay of streams for hosting the video calls within the private network created with Lazarus VPN. </p>
            </div>
            <div class="service col-lg-3 col-md-6 col-sm-6 text-center">
                <img src="<?php echo $media_url; ?>/Media/blockchain/blockchain-icon-white.png" class="img-fluid" style="height: auto; width: 75px;"> 
                <h5 class="service__header">BLOCKCHAIN</h5>
                <p class="service__description">Lazarus Blockchain is currently based on Ethereum private blockchain network using PoA as a Consensus Algorithm. The Smart Contracts used are for Token creation, domain/network registration, VPN management and Firewall rule management.</p>
            </div>
            <div class="service col-lg-3 col-md-6 col-sm-6 text-center">
                <img src="<?php echo $media_url; ?>/Media/tunnel/tunnel-icon-white.png" class="img-fluid" style="height: auto; width: 75px;">  
                <h5 class="service__header">TUNNEL</h5>
                <p class="service__description">Lazarus Tunnel Solution allows any system to open ports on the local machine bypassing the firewalls and NAT to the Internet. With Lazarus Tunnel, users can send data between devices using a secure and encrypted network and host local networks to a temporary public network.</p>
            </div>
            <div class="service col-lg-3 col-md-6 col-sm-6 text-center">
                <img src="<?php echo $media_url; ?>/Media/gateway/gateway-icon-white.png" class="img-fluid" style="height: auto; width: 75px;"> 
                <h5 class="service__header">GATEWAY</h5>
                <p class="service__description">Smart Hardware Device offering secure WiFi and all the above mentioned services. Best suited for Home and Office Users who wish to have the network and data hosted locally. Thanks to gateways, we are able to communicate and send data back and forth.</p>
            </div>
        </div>
    </div>
</section>

<!-- Sub Footer -->
<?php get_template_part('app-templates/sub-footer'); ?>

<!-- Footer -->
<?php get_footer(); ?>
