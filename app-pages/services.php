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
  /* .blockchain-sec{
    background-color: #3E3362;
  
  } */
</style>

<!-- Header and Hero -->
<main id="main" class="main main-1">
  <?php get_template_part('app-templates/header'); ?>

  <section id="subscribe" class="cta-1 section section--padding my-img" style="background-image: url(<?php echo get_template_directory_uri(); ?>/app-resources/images/banner.png);">
    <div class="container my-padding">
    </div>
  </section>
</main>

<!-- Section 1 Services -->
<section id="tour" class="tour-2 section  section--padding__top">
  <div class="container">
    <div class="row">
      <div class="preamble col-lg-8 offset-lg-2">
        <h3 class="title">What We Offer.</h3>
        <p class="lead">Demonstrating core competencies to in turn innovate. Create stakeholder engagement so that we gain traction.</p>
      </div>
    </div>
  </div>
</section>

<!-- Section 2 Network-->
<section id="services" class="services-1 section section--gradient__1">
  <div class="container">
    <div class="row">
      <div class="preamble preamble--light col-lg-8 offset-lg-2">
        <h3 class="title">Networks</h3>
        <p class="lead">Demonstrating core competencies to in turn innovate. Create stakeholder engagement so that we gain traction.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="feature-card mb-4 mb-lg-0">
          <i class="icon icon-University icon--md icon--color"></i>
          <h4 class="feature-card__title mb-4 mt-4">DEDICATED VPN</h4>
          <ul class="list-unstyled m-0">
            <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>Communicate securely</span></li>
            <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>Stay in touch with your clients</span></li>
            <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>Time entry and billing</span></li>
            <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>Document Automation</span></li>
            <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>Flexible Payout Schedule</span></li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="feature-card">
          <i class="icon icon-MaleFemale icon--md icon--color"></i>
          <h4 class="feature-card__title mb-4 mt-4">ANONYMOUS VPN</h4>
          <ul class="list-unstyled m-0">
            <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>Get your payment via wire transfer</span></li>
            <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>Contact your account manager for more</span></li>
            <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>Legal Departments</span></li>
            <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>5GB of total file storage for the team</span></li>
            <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>$14,50 per month cheaper</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Section 3 Storage -->
<section id="tour" class="tour-2 section section--padding__top">
  <div class="container">
    <div class="row">
      <div class="preamble col-lg-8 offset-lg-2">
        <h2 class="title">Storage</h2>
        <h3>DRIVE</h3>
        <p class="lead">Lazarus Drive is a private file storage service on the cloud and the connected devices based on the IPFS - A peer-to-peer hypermedia protocol to Publish files on the private Internet without worrying if they will be tampered with, and share them with others within the network.</p>
      </div>
    </div>
  </div>
</section>

<!-- Section 4 Communication -->
<section id="tour" class="tour-2 section section--padding__bottom section--gradient__5">
  <div class="container">
    <div class="row">
      <div class="preamble col-lg-8 offset-lg-2 mt-5 pt-3">
        <h2 class="title">Communication</h2>
        <p class="lead">Demonstrating core competencies to in turn innovate. Create stakeholder engagement so that we gain traction.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <ul class="nav list-unstyled m-0 no-gutters" id="pills-tab" role="tablist">
          <li class="col">
            <a class="d-flex flex-column align-items-center" id="pills-video-tab" data-toggle="pill" href="#pills-video" role="tab" aria-controls="pills-video" aria-selected="false">
              <i class="icon icon-Video-Photographer icon--lg d-none d-md-block"></i>
              <span class="d-block text-center mt-0 mt-lg-4">STREAM</span>
            </a>
          </li>
          <li class="col">
            <a class="d-flex flex-column align-items-center" id="pills-customization-tab" data-toggle="pill" href="#pills-customization" role="tab" aria-controls="pills-customization" aria-selected="false">
              <i class="icon icon-Gears icon--lg d-none d-md-block"></i>
              <span class="d-block text-center mt-0 mt-lg-4">CHAT</span>
            </a>
          </li>
          <li class="col">
            <a class="d-flex flex-column align-items-center" id="pills-engineers-tab" data-toggle="pill" href="#pills-engineers" role="tab" aria-controls="pills-engineers" aria-selected="false">
              <i class="icon icon-Neutron icon--lg d-none d-md-block"></i>
              <span class="d-block text-center mt-0 mt-lg-4">EMAIL</span>
            </a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class=" tab-pane fade" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
            <div class="row">
              <div class="col-lg-6">
                <h4>Lazarus Stream leverages IPFS Network for the content delivery and relay of streams for hosting the video calls within the private network created with Lazarus VPN.</h4>
              </div>
              <div class="col-lg-6">
                <div class="pr-4">
                  <h4>Change the way you communicate.</h4>
                  <p class="lead">Lazarus Stream provides a secure and private video streaming service using the private decentralized IPFS network. Your communication is protected from outside attacks, so with our end-to-end encryption your conversations will always be private, also making you the sole owner of the data and you get to choose what to do with it.</p>
                  <h4>Change the way you communicate.</h4>
                  <p class="lead">Lazarus Stream provides a secure and private video streaming service using the private decentralized IPFS network. Your communication is protected from outside attacks, so with our end-to-end encryption your conversations will always be private, also making you the sole owner of the data and you get to choose what to do with it.</p>

                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-customization" role="tabpanel" aria-labelledby="pills-customization-tab">
            <div class="row">
              <div class="col-lg-6">
                <h4>What is a hamburger menu mmm, exactly like that, but different yet make it look like Apple.</h4>
              </div>
              <div class="col-lg-6">
                <div class="pr-4">
                  <p class="lead">Lazarus Chat solution is currently based on the network hosted Rocket Chat Solution - Control your communication, manage your data, and have your own collaboration platform to improve team productivity. The Ultimate Communication Hub, Built for businesses with high security standards, Rocket.Chat fits the standards of companies with ultra sensitive information.
                    Keep your conversations secret. State of the art end-to-end encryption ensures that private communication stays private. </p>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-engineers" role="tabpanel" aria-labelledby="pills-engineers-tab">
            <div class="row">
              <div class="col-lg-6">
                <h4>What is a hamburger menu mmm, exactly like that, but different yet make it look like Apple.</h4>
              </div>
              <div class="col-lg-6">
                <div class="pr-4">
                  <p class="lead">Lazarus Email allows hosting email services for the registered domain for your business. Control and monitor the emails sent, manage email groups, automate sending emails and do a lot more with the private email hosting solution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- Section 5 Blockchain -->
<section id="tour" class="tour-2 section section--padding__bottom section--padding__top section--gradient__6">
  <div class="container">
    <div class="row">
      <div class="col-12 mx-auto">
        <div class="" >
          <img src="<?php echo $media_url; ?>/Media/blockchain/blockchain-icon-white.png" class="img-fluid blockchain-img" style=""> 
        </div>        
        <h3 class="title text-center text-white">Blockchain</h3>
        <h4 class="title text-center text-white">ETHEREUM</h4>
        <p class="lead text-center text-white">Blockchain Network is based on Ethereum private blockchain network using PoA as a Consensus Algorithm. The Smart Contracts used are for Token creation, domain/network registration, VPN management and Firewall rule management. Based on the enterprise needs a separate blockchain network can be deployed on their dedicated network to integrate the business requirements.</p>
        <p class="lead text-center text-white">The public network currently in use is Görli Testnet - The first proof-of-authority cross-client testnet, synching Parity Ethereum, Geth, Nethermind, Hyperledger Besu (formerly Pantheon), and EthereumJS. This testnet is a community-based project, completely open-source, naturally.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Section 6 Application Security -->
<section id="tour" class="tour-2 section section--padding__bottom section--padding__top section--gradient__5">
  <div class="container">
    <div class="row">
      <div class="preamble col-lg-8 offset-lg-2 mt-5 pt-3">
        <h2 class="title">Application Security</h2>
        <p class="lead">Demonstrating core competencies to in turn innovate. Create stakeholder engagement so that we gain traction.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <ul class="nav list-unstyled m-0 no-gutters" id="pills-tab" role="tablist">
          <li class="col">
            <a class="d-flex flex-column align-items-center" id="pills-netguard-tab" data-toggle="pill" href="#pills-netguard" role="tab" aria-controls="pills-netguard" aria-selected="false">
              <i class="icon icon-Video-Photographer icon--lg d-none d-md-block"></i>
              <span class="d-block text-center mt-0 mt-lg-4">NETGUARD</span>
            </a>
          </li>
          <li class="col">
            <a class="d-flex flex-column align-items-center" id="pills-tunnel-tab" data-toggle="pill" href="#pills-tunnel" role="tab" aria-controls="pills-tunnel" aria-selected="false">
              <i class="icon icon-Gears icon--lg d-none d-md-block"></i>
              <span class="d-block text-center mt-0 mt-lg-4">TUNNEL</span>
            </a>
          </li>
          <li class="col">
            <a class="d-flex flex-column align-items-center" id="pills-monitor-tab" data-toggle="pill" href="#pills-monitor" role="tab" aria-controls="pills-monitor" aria-selected="false">
              <i class="icon icon-Neutron icon--lg d-none d-md-block"></i>
              <span class="d-block text-center mt-0 mt-lg-4">MONITOR</span>
            </a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class=" tab-pane fade" id="pills-netguard" role="tabpanel" aria-labelledby="pills-netguard-tab">
            <div class="row">
              <div class="col-lg-6 ">
                <h4 class="">What is a hamburger menu mmm, exactly like that, but different yet make it look like Apple.</h4>
              </div>
              <div class="col-lg-6">
                <div class="pr-4">
                  <p class="lead">NetGuard enables customers to preemptively protect their online activities from advanced threats in a collaborative way, with a decentralized and tamperproof process using blockchain technology. Most current solutions rely on complex AI technology, which may sometimes return false positives and using our decentralised solution this process can be reinforced and weed out the false positives</p>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-tunnel" role="tabpanel" aria-labelledby="pills-tunnel-tab">
            <div class="row">
              <div class="col-lg-6">
                <h4>What is a hamburger menu mmm, exactly like that, but different yet make it look like Apple.</h4>
              </div>
              <div class="col-lg-6">
                <div class="pr-4">
                  <p class="lead">Lazarus Tunnel Solution allows any system to open ports on the local machine bypassing the firewalls and NAT to the Internet. This is helpful for the device manufacturer in case when the target device is behind NAT/Firewall and it needs remote access to debug and detect software problems. This helps the manufacturer’s support professional to remotely control the device and save costs for a visit to the service center. It supports dynamic DNS connections to the application endpoints to expose the specific port to the internet. It handles Application Endpoint Security, DDoS protection, Custom User profile based firewall controls and lot more.</p>
                  <p class="lead">With the help of Lazarus Tunnel, users can send data between devices using a secure and encrypted network and host local networks to a temporary public network.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-monitor" role="tabpanel" aria-labelledby="pills-monitor-tab">
            <div class="row">
              <div class="col-lg-6">
                <h4>What is a hamburger menu mmm, exactly like that, but different yet make it look like Apple.</h4>
              </div>
              <div class="col-lg-6">
                <div class="pr-4">
                  <p class="lead">
                    <p class="lead">Lazarus Tunnel Solution allows any system to open ports on the local machine bypassing the firewalls and NAT to the Internet. This is helpful for the device manufacturer in case when the target device is behind NAT/Firewall and it needs remote access to debug and detect software problems. This helps the manufacturer’s support professional to remotely control the device and save costs for a visit to the service center. </p>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
     </div>
    </div>
  </div>
</section>

<!-- Section 7 Nodes -->
<section id="tour" class="tour-2 section section--padding__bottom section--padding__top section--gradient__5">
  <div class="container">
    <div class="row">
      <div class="preamble col-lg-8 offset-lg-2">
        <h3 class="title">Nodes</h3>
        <h5 class="title">GATEWAY</h5>
        <p class="lead">Smart Hardware Device offering secure WiFi and all the above mentioned services. Best suited for Smart Home and Office Users who wish to have the network and data hosted locally.</p>
      </div>
    </div>
  </div>
</section>



<!-- Sub Footer -->
<?php get_template_part('app-templates/sub-footer'); ?>

<!-- Footer -->
<?php get_footer(); ?>