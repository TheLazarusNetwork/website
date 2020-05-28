<?php
/**
 * @package     :    LAZARUS
 * @since       :    V 1.0
 * Template Name:    VPN-ubuntu-Page-Template
 */

get_header(); 

?>

<main id="main" class="main main-1">

    <?php get_template_part('app-templates/header/page-header'); ?>

    <section id="subscribe" class="cta-1 section section--padding section--gradient__2 my-img">
        <div class="container my-padding">
        </div>
    </section>
</main>

<div class="container general-div">
    <div class="row">
        <div class="col-12">
            <div>
                <h3 class="title text-center">How to install and configure OVPN on Ubuntu 18 </h3>
                <h4 class="title">Introduction </h4>
                <p> OpenVPN is a full-featured, open-source Secure Socket Layer (SSL) VPN solution that accommodates a wide range of configurations. In this tutorial, you will set up an OpenVPN server on an Ubuntu 18.04 server.
                </p>
            </div>
            <div>
                <h4 class="title">Requirements</h4>
                <p>In order to set up the OpenVPN on Ubuntu 18 you will need:</p>
                <ol class="list-unstyled">

                    <li>
                        <strong>1: </strong> A Lazarus VPN account. If you don’t have one you can try our services for free.
                    </li>

                    <li>
                        <strong>2:</strong> Your VPN username and password. You can find them in your account on our website, by going to Services and accessing your service details.
                    </li>

                    <li>
                        <strong>3:</strong> You have to download the configuration files from our dashboard.
                    </li>
                </ol>
                <div>
                    <!-- <h4 class="title">Installation</h4>
                    <ol class="list-unstyled">
                        <li>
                            <strong>Step1: </strong> Download the OVPN ubuntu 18 setup from our website, and install it on your Linux.
                        </li>

                        <li>
                            <strong>Step2:</strong> The first time you open Tunnelblick it will pop up a message saying that you’ll need VPN configuration files. Click on “I have configuration files.”
                        </li>

                        <li>
                            <strong>Step3:</strong> The next window explains how to install VPN configuration files. Click “OK.”
                        </li>
                        <li>
                            <strong>Step4:</strong> The above-mentioned configuration files are shown in the form of a list of files with the .ovpn extension. These files include all the data about your VPN services that Tunnelblick will need to get the connection functioning.
                        </li>
                        <li>
                            <strong>Step5:</strong> After you’ve downloaded the files, open Tunnelblick’s configuration screen by clicking on its icon in the menu bar and selecting “VPN Details…”
                        </li>
                        <li>
                            <strong>Step6:</strong> To add configuration files to Tunnelblick, drag and drop the .ovpn files into the left-side menu pane from Finder. Do not drag over any other files, like .crt or .pem files.
                        </li>
                        <li>
                            <strong>Step7:</strong> Tick “Apply to All” and click “Only Me” in the next window.
                        </li>
                        <li>
                            <strong>Step8:</strong> The configurations will automatically be added to the system and available for connection.
                        </li>
                    </ol>
                </div> -->
            </div>
        </div>
    </div>
</div>

<?php

get_template_part('app-templates/footer/footer'); 

get_footer(); 

?>
