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
        <h3 class="title">Lazarus Network Services</h3>
        <p class="lead">Enterprise Grade Cybersecurity Solutions for Individuals and Businesses. At Lazarus we leverage AI And Blockchain technologies For cyber defense to protect you and your enterprise from online viruses while you Work From Home.</p>
      </div>
    </div>
  </div>
</section>

<!-- Section 2 Network-->
<section id="services" class="services-1 section section--gradient__1">
  <div class="container">
    <div class="row">
      <div class="preamble preamble--light col-lg-8 offset-lg-2">
        <h3 class="title">Virtual Private Networks</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="feature-card mb-4 mb-lg-0">
          <div style="min-height: 490px;">
            <h3 class="feature-card__title mb-4 mt-4">ANONYMOUS VPN</h3>
            <p>Anonymous VPN uses P2P VPN Solution for bypassing IP Fingerprinting. Get 100% anonymous internet browsing around the world including restricted regions. Lazarus VPN gives you encrypted internet surfing and prevents hackers and malware from accessing your data between your device and the internet.</p>
            <ul class="list-unstyled m-0">
              <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>Secure online browsing</span></li>
              <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>Access to Restricted Content</span></li>
              <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>Network-wide protection</span></li>
              <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>Block in-app advertisements</span></li>
              <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>Improve network performance</span></li>
              <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>Monitor statistics</span></li>
            </ul>
          </div>
          <a href="<?php echo get_home_url().'/pricing/' ?>" class="btn btn--blue btn--lg m-0">Pricing</a>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="feature-card">
          <div style="min-height: 490px;">
            <h3 class="feature-card__title mb-4 mt-4">DEDICATED VPN</h3>
            <p>Lazarus VPN is an encrypted tunneling solution for end users offering WireGuard® Tunneling, secured by Ed25519 Private Key Encryption, Multi Region Network, Peer to Peer network access along with network layer customizable firewall. Get higher bandwidth and optimized performance for enterprise software usages requiring good latency.</p>
            <p>Lazarus Firewall is incorporated on the network layer (DNS Layer) for detecting and eliminating cyber threats which try to attack the application system.</p>
            <ul class="list-unstyled m-0">
              <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>All the features of ANONYMOUS VPN</span></li>
              <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>Dedicated Network - Secure Tunnel</span></li>
              <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>Network Layer Customizable Firewall</span></li>
              <li class="d-flex align-items-center"><i class="feature-card__icon icon icon-Yes"></i><span>Dedicated Bandwidth and Performance - Not Shared</span></li>
            </ul>
          </div>
          <a href="<?php echo get_home_url().'/pricing/' ?>" class="btn btn--blue btn--lg m-0">Pricing</a>
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
        <div class="py-4 mx-auto" style="width: 200px;">
          <img class="img-fluid" src="<?php echo $media_url ?>/Media/lazarus-drive-icon.png">
        </div>
        <h3>Lazarus Drive</h3>
        <p class="lead">Lazarus Drive is a private file storage service on the cloud and the connected devices based on the IPFS - A peer-to-peer hypermedia protocol to Publish files on the private Internet without worrying if they will be tampered with, and share them with others within the network.</p>
      </div>
    </div>
  </div>
</section>

<!-- Section 4 Communication -->
<section id="tour" class="tour-2 section section--padding__bottom section--gradient__5">
  <div class="container pt-5">
    <div class="row">
      <div class="preamble col-lg-8 offset-lg-2 mt-5 pt-3">
        <h2 class="title">Communication</h2>
        <p class="lead">Changing the way you communicate. STake control of your data privacy with end-to-end encryption.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <ul class="nav list-unstyled m-0 no-gutters" id="communication-tab" role="tablist">
          <li class="col">
            <a class="d-flex flex-column align-items-center active" id="com-stream-tab" data-toggle="pill" href="#com-stream" role="tab" aria-controls="com-stream" aria-selected="false">
              <img class="d-block mx-auto rounded shadowed" src="<?php echo $media_url ?>/Media/stream/stream-icon.png" style="height: 80px; filter: contrast(0.8);">
              <span class="d-block text-center mt-0 mt-lg-4">STREAM</span>
            </a>
          </li>
          <li class="col">
            <a class="d-flex flex-column align-items-center" id="com-chat-tab" data-toggle="pill" href="#com-chat" role="tab" aria-controls="com-chat" aria-selected="false">
              <img class="d-block mx-auto rounded shadowed" src="<?php echo $media_url ?>//Media/chat/lazarus-chat-icon.png" style="height: 80px; filter: contrast(0.8);">
              <span class="d-block text-center mt-0 mt-lg-4">CHAT</span>
            </a>
          </li>
          <li class="col">
            <a class="d-flex flex-column align-items-center" id="com-email-tab" data-toggle="pill" href="#com-email" role="tab" aria-controls="com-email" aria-selected="false">
              <img class="d-block mx-auto rounded shadowed" src="<?php echo $media_url ?>//Media/email/lazarus-email-icon.png" style="height: 80px; filter: contrast(0.8);">
              <span class="d-block text-center mt-0 mt-lg-4">EMAIL</span>
            </a>
          </li>
        </ul>
        <div class="tab-content" id="communication-tab-Content">
          <div class=" tab-pane fade show active" id="com-stream" role="tabpanel" aria-labelledby="com-stream-tab">
            <div class="row">
              <div class="col-lg-6">
                <h2>Lazarus Stream</h2>
              </div>
              <div class="col-lg-6">
                <div class="pr-4">
                  <h4>Change the way you Stream</h4>
                  <p class="lead">Lazarus Stream leverages IPFS Network for the content delivery and relay of streams for hosting the video calls within the private network created with Lazarus VPN. It provides a secure and private video streaming service using the private decentralized IPFS network. Your communication is protected from outside attacks, so with our end-to-end encryption your conversations will always be private.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="com-chat" role="tabpanel" aria-labelledby="com-chat-tab">
            <div class="row">
              <div class="col-lg-6">
                <h2>Lazarus Chat</h2>
              </div>
              <div class="col-lg-6">
                <div class="pr-4">
                  <h4>Change the way you Chat</h4>
                  <p class="lead">Lazarus Chat solution is currently based on the network hosted Rocket Chat Solution - Control your communication, manage your data, and have your own collaboration platform to improve team productivity. The Ultimate Communication Hub, Built for businesses with high security standards, Rocket.Chat fits the standards of companies with ultra sensitive information. Keep your conversations secret. State of the art end-to-end encryption ensures that private communication stays private.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="com-email" role="tabpanel" aria-labelledby="com-email-tab">
            <div class="row">
              <div class="col-lg-6">
                <h2>Lazarus Email</h2>
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
        <div class="mx-auto" style="width: 100px;">
          <img src="<?php echo $media_url; ?>/Media/blockchain/blockchain-icon-white.png" class="img-fluid"> 
        </div>        
        <h3 class="title text-center text-white pt-4">Blockchain</h3>
        <h4 class="title text-center text-white pt-5">ETHEREUM</h4>
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
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <ul class="nav list-unstyled m-0 no-gutters" id="application-tabs" role="tablist">
          <li class="col">
            <a class="d-flex flex-column align-items-center active" id="app-net-guard-tab" data-toggle="pill" href="#app-net-guard" role="tab" aria-controls="app-net-guard" aria-selected="false">
              <img class="d-block mx-auto rounded shadowed" src="<?php echo $media_url ?>/Media/gateway/gateway-icon.png" style="height: 80px; filter: contrast(0.8);">
              <span class="d-block text-center mt-0 mt-lg-4">NETGUARD</span>
            </a>
          </li>
          <li class="col">
            <a class="d-flex flex-column align-items-center" id="app-tunnel-tab" data-toggle="pill" href="#app-tunnel" role="tab" aria-controls="app-tunnel" aria-selected="false">
              <img class="d-block mx-auto rounded shadowed" src="<?php echo $media_url ?>/Media/tunnel/tunnel-icon.png" style="height: 80px; filter: contrast(0.8);">
              <span class="d-block text-center mt-0 mt-lg-4">TUNNEL</span>
            </a>
          </li>
        </ul>
        <div class="tab-content" id="application-tabs-Content">
          <div class=" tab-pane fade show active" id="app-net-guard" role="tabpanel" aria-labelledby="app-net-guard-tab">
            <div class="row">
              <div class="col-lg-6 ">
                <h2>Lazarus NetGuard</h2>
              </div>
              <div class="col-lg-6">
                <div class="pr-4">
                  <p class="lead">NetGuard enables customers to preemptively protect their online activities from advanced threats in a collaborative way, with a decentralized and tamper-proof process using blockchain technology. Most current solutions rely on complex AI technology, which may sometimes return false positives and using our decentralized solution this process can be reinforced and weed out the false positives</p>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="app-tunnel" role="tabpanel" aria-labelledby="app-tunnel-tab">
            <div class="row">
              <div class="col-lg-6">
                <h2>Lazarus Tunnel</h2>
              </div>
              <div class="col-lg-6">
                <div class="pr-4">
                  <p class="lead">Lazarus Tunnel Solution allows any system to open ports on the local machine bypassing the firewalls and NAT to the Internet. This is helpful for the device manufacturer in case when the target device is behind NAT/Firewall and it needs remote access to debug and detect software problems. This helps the manufacturer’s support professional to remotely control the device and save costs for a visit to the service center. It supports dynamic DNS connections to the application endpoints to expose the specific port to the internet. It handles Application Endpoint Security, DDoS protection, Custom User profile based firewall controls and lot more. With the help of Lazarus Tunnel, users can send data between devices using a secure and encrypted network and host local networks to a temporary public network.</p>
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
        <h3 class="title text-center pb-5">Nodes</h3>
        <div class="mx-auto" style="width: 100px;">
          <img src="<?php echo $media_url; ?>/Media/gateway/gateway-icon.png" class="img-fluid"> 
        </div>
        <h4 class="title text-center pt-3">GATEWAY</h4>
        <p class="lead">Smart Hardware Device offering secure WiFi and all the above mentioned services. Best suited for Smart Home and Office Users who wish to have the network and data hosted locally.</p>
      </div>
    </div>
  </div>
</section>



<!-- Sub Footer -->
<?php get_template_part('app-templates/sub-footer'); ?>

<!-- Footer -->
<?php get_footer(); ?>