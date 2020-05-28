<?php
/**
* @package     :    LAZARUS
* @since       :    V 1.0
* Template Name:    drive-page template  
*/

get_header(); ?>

<?php get_template_part('app-templates/header/page-header'); ?>

<section id="subscribe" class="cta-1 section section--padding section--gradient__2 my-img">
  <div class="container my-padding">
  </div>
</section>
<section id="drive" class="services services-3 section section--padding">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3 class="title text-center">IPFS Drive</h3>
        <p class="text-justify">Lazarus IPFS Drive to provide seamless data storage and sharing solution to the users. IPFS makes distribution of high volumes of data with high efficiency. The users would be able to host their data on the network of computers reducing the cost of storage. Our stream technology provide control of privacy, over distributed network.</p>
      </div>
    </div>
  </div>
</section>
<section id="cta" class="cta cta-3 section">
  <div class="container">
    <div class="row d-flex align-items-center">
      <div class="col-lg-6 mb-5 mb-lg-0 text-center text-lg-left">
        <img src="<?php echo get_template_directory_uri().'/app-resources/images/step-1.png'; ?>" alt="" class="img-fluid">
      </div>
      <div class="col-lg-6">
        <div class="preamble text-center text-lg-left pr-4 mb-0">
          <h4 class="title">Proposed Solution:</h4>
          <ul class="service__list list-unstyled mb-0">
            <li class="d-flex align-items-center"><i class="icon icon-Right mr-3"></i>Public IPFS Data Streaming</li>
            <li class="d-flex align-items-center"><i class="icon icon-Right mr-3"></i>Private End to End Encrypted IPFS LAZARUS</li>
            <li class="d-flex align-items-center"><i class="icon icon-Right mr-3"></i>Geographically distributed Micro Data-Centres</li>
            <li class="d-flex align-items-center"><i class="icon icon-Right mr-3"></i>Encryption and Decryption of files on the go</li>
            <li class="d-flex align-items-center"><i class="icon icon-Right mr-3"></i>IPNS and dynamic Content Pinning</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<div class="container general-div">
  <!-- Heading -->
  <div class="row">
    <div class="preamble col-lg-8 offset-lg-2">
      <h3 class="title">IPFS Drive Page Documentations</h3>
      <p class="lead">We are updating our documentations.</p>
      <p class="lead text-center">Connect with us, we are here to help.</p>
    </div>
  </div>
</div>
<?php get_template_part('app-templates/footer/footer'); 

get_footer(); ?>