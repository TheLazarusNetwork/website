<?php
/**
* @package :    hosting
* @since   :    V 1.0
* name     :    services-carousel template  
*/

global $media_url;
?>
<style>
  .carousel-indicators li {
    background-color: #0E68AA;
    width: 30px;
    height: 5px;
    margin-bottom: -10px;
  }

  .btn {
    margin-bottom: 30px;
  }

  a.carousel-control-prev,
  a.carousel-control-next {
    filter: brightness(0);
  }

  .carousel-indicators li {
    background-color: #888;
  }

  .carousel-indicators li.active {
    background-color: #0E68AA;
  }

  .carousel-control-next, .carousel-control-prev {
    width: 33px;
  }
  .carousel-control-next{
    right: -10px !important;
  }
  .carousel-control-prev{
    left: -10px !important;
  }
</style>

<section id="pricing" class="pricing pricing-1">
  <div class="container" style=" margin: 0 auto;">
    <div class="row" style="padding-bottom: 120px;">
      <div class="card" style="margin-top: -200px ">
        <div class="col-12 py-2">
          <div id="CarouselTest" class="carousel slide" data-ride="carousel">
            <!-- Carousel start -->
            <ol class="carousel-indicators m-0">
              <li data-target="#CarouselTest" data-slide-to="0" class="active"></li>
              <li data-target="#CarouselTest" data-slide-to="1"></li>
              <li data-target="#CarouselTest" data-slide-to="2"></li>
              <li data-target="#CarouselTest" data-slide-to="3"></li>
              <li data-target="#CarouselTest" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
              <!-- Slide 1 -->
              <div class="carousel-item p-4 active">
                <div class="row">
                  <div class="col-md-7">
                    <h4 class="card-title">Lazarus VPN</h4>
                    <p class="card-text">Lazarus VPN is an encrypted tunneling solution for end users offering WireGuard® Tunneling, secured by Ed25519 Private Key Encryption, Multi Region Network, Peer to Peer network access and a lot more.
                    </p>
                    <ul class="services-vpn">
                    <li>Secure online browsing</li>
                    <li>IP Address Protection</li>
                    <li>Restricted Content</li>
                    <li>Multiple Devices</li>
                    </ul>
                    <!-- <p class="card-text">Made for usage, commonly searched for. Fork, like and use it. Just move the carousel div above the col containing the text for left alignment of images</p>
                    <br> -->
                    <a href="<?php echo get_home_url().'/all-services/'; ?>" class="mt-auto btn btn--green">Read More</a>
                  </div>
                  <div class="col-md-5 m-0 px-5">
                    <img class="d-block img-fluid" src="<?php echo $media_url; ?>/Media/vpn-solid.png" alt="">
                  </div>
                </div>
              </div>

              <!-- Slide 2 -->
              <div class="carousel-item p-4">
                <div class="row">
                  <div class="col-md-7">
                    <h4 class="card-title">Lazarus Drive</h4>
                    <p class="card-text">Lazarus Drive is a private file storage service on the cloud and the connected devices based on the IPFS
                    </p>
                    <ul class="services-drive">
                    <li>Decentralized Cloud Storage</li>
                    <li>Decentralized Cloud Storage</li>
                    <li>Backups</li>
                    </ul>

                    <a href="#" class="mt-auto btn btn--green">Read More</a>
                  </div>
                  <div class="col-md-5 m-0 px-5">
                    <img class="d-block img-fluid" src="<?php echo $media_url; ?>/Media/drive-solid.png" alt="">
                  </div>
                </div>
              </div>

              <!-- Slide 3 -->
              <div class="carousel-item p-4">
                <div class="row">
                  <div class="col-md-7">
                    <h4 class="card-title">Lazarus Stream</h4>
                    <p class="card-text">Lazarus Stream leverages IPFS Network for the content delivery and relay of streams for hosting the video calls within the private network created with Lazarus VPN. 
                    </p>
                    <ul class="services-stream">
                    <li>Change the way you communicate</li>
                    <li>Audio and Video Calls</li>
                    </ul>
                    <a href="#" class="mt-auto btn btn--green">Read More</a>
                  </div>
                  <div class="col-md-5 m-0 px-5">
                    <img class="d-block img-fluid" src="<?php echo $media_url; ?>/Media/stream-solid.png" alt="">
                  </div>
                </div>
              </div>

              <!-- Slide 4 -->
              <div class="carousel-item p-4">
                <div class="row">
                  <div class="col-md-7">
                    <h4 class="card-title">Lazarus Tunnel</h4>
                    <p class="card-text">Lazarus Tunnel Solution allows any system to open ports on the local machine bypassing the firewalls and NAT to the Internet.
                    </p>                    
                    <a href="#" class="mt-auto btn btn-primary btn--green">Read More</a>
                  </div>
                  <div class="col-md-5 m-0 px-5">
                    <img class="d-block img-fluid" src="<?php echo $media_url; ?>/Media/tunnel-solid.png" alt="">
                  </div>
                </div>
              </div>

              <!-- Slide 5 -->
              <div class="carousel-item p-4">
                <div class="row">
                  <div class="col-md-7">
                    <h4 class="card-title">Lazarus Firewall</h4>
                    <p class="card-text">Lazarus Firewall is incorporated on the network layer (DNS Layer) for detecting and eliminating cyber threats which try to attack the application system. 
                    </p>
                    <ul class="services-vpn">
                    <li>Network-wide protection</li>
                    <li>Block in-app advertisements</li>
                    <li>Improve network performance</li>
                    <li>Monitor statistics</li>
                    </ul>
                    <!-- <p class="card-text">Made for usage, commonly searched for. Fork, like and use it. Just move the carousel div above the col containing the text for left alignment of images</p>
                    <br> -->
                    <a href="<?php echo get_home_url().'/all-services/'; ?>" class="mt-auto btn btn--green">Read More</a>
                  </div>
                  <div class="col-md-5 m-0 px-5">
                    <img class="d-block img-fluid" src="<?php echo $media_url; ?>/Media/firewall-solid.png" alt="">
                  </div>
                </div>
              </div>


              <!-- Prev next Buttons -->
              <a class="carousel-control-prev" href="#CarouselTest" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#CarouselTest" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div> <!-- End of carousel -->
        </div>
      </div>
    </div>
  </div>
</section>