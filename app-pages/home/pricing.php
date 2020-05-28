<?php
/**
* @package :    hosting
* @since   :    V 1.0
* name     :    get_started template  
*/
?>

<style>
    .image-block-base {
        overflow: hidden;
    }

    .image-block-base .pricing-card__title {
        margin-top: 200px;
    }

    .image-block {
        position: absolute;
        height: 200px;
        width: 100%;
        top: 0;
        left: 0;
        background-size: cover;
        background-position: center;
    }

    p.box-text {
        color: #888;
        text-align: justify;
        margin: 30px 0 40px;
    }
</style>

<section id="pricing" class="pricing pricing-1">
    <div class="container" style="max-width: 850px; margin: 0 auto; padding-bottom: 80px;">
        <div class="row" style="margin-bottom: 330px;">

            <div class="col-lg-6">
                <div class="pricing-card pricing-card-first image-block-base">
                    <div class="image-block"
                        style="background-image: url(<?php echo get_template_directory_uri().'/app-resources/images/vpn.png'; ?>);">
                    </div>
                    <h3 class="pricing-card__title mb-4">VPN</h3>
                    <p class="box-text">Lazarus VPN brings easier access to the Internet Decentralized, secure and 100% anonymous VPN tunnelling solution for end users. In the current times where internet is censored and content on it is often manipulated to instill biased perspective on users’ minds, VPN becomes a necessary tool to bring internet freedom and provide secure access to the open internet. Over VPN service is currently available for private clients only. Get in touch to know more.</p>
                    <div class="text-center mt-4">
                        <a href="https://app.lazarus.network" class="btn btn--blue btn--lg" >Try Now</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="pricing-card image-block-base">
                    <div class="image-block"
                        style="background-image: url(<?php echo get_template_directory_uri().'/app-resources/images/tunnel.png'; ?>);">
                    </div>
                    <h3 class="pricing-card__title mb-4">Tunnel</h3>
                    <p class="box-text">Lazarus tunnel provide seamless data and information route. solution to the users. IPFS makes distribution of high volumes of data with high efficiency. The users would be able to host their data on the network of computers reducing the cost of storage. Our stream technology provide Our stream technology provide control of privacy over distributed network. We are about to launch Lazarus Drive beta version for public testing. Subscribe us, to stay tuned.</p>
                    <div class="text-center mt-4">
                        <a href="https://app.lazarus.network" class="btn btn--blue btn--lg" >Coming Soon</a>
                    </div>
                </div>
            </div>

        </div>
        <div class="row">

            <div class="col-lg-6">
                <div class="pricing-card image-block-base">
                    <div class="image-block"
                        style="background-image: url(<?php echo get_template_directory_uri().'/app-resources/images/stream.png'; ?>);">
                    </div>
                    <h3 class="pricing-card__title mb-4">Live Steaming</h3>
                    <p class="box-text">Lazarus Streaming Service offers Secure and Decentralized Live Video Streaming
                        using IPFS. The stream will be more secure as it uses end to end encryption. The decentralized
                        network allows our users to stream content without any restrictions and also reduce the cost of
                        live Streaming. We will launch Decentralized Live Video Streaming before july. We are currently
                        testing it internally and making it safe and reliable for our users. Subscribe us, to stay
                        tuned.</p>
                    <div class="text-center mt-4">
                        <a  href="https://app.lazarus.network" class="btn btn--blue btn--lg" >Coming Soon</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="pricing-card image-block-base">
                    <div class="image-block"
                        style="background-image: url(<?php echo get_template_directory_uri().'/app-resources/images/drive.png'; ?>);">
                    </div>
                    <h3 class="pricing-card__title mb-4">IPFS Drive</h3>
                    <p class="box-text">Lazarus IPFS Drive to provide seamless data storage and sharing solution to the
                        users. IPFS makes distribution of high volumes of data with high efficiency. The users would be
                        able to host their data on the network of computers reducing the cost of storage. Our stream
                        technology provide control of privacy over distributed network. We are about to launch Lazarus
                        Drive beta version for public testing. Subscribe us, to stay tuned.</p>
                    <div class="text-center mt-4">
                        <a href="https://app.lazarus.network" class="btn btn--blue btn--lg" >Coming Soon</a>
                    </div>
                </div>
            </div>   

        </div>
    </div>
</section>