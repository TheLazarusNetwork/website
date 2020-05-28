<?php
/**
 * @package     :    LAZARUS
 * @since       :    V 1.0
 * Template Name:    VPN-Windows-Page-Template
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
                <h3 class="title text-center">How to install and configure OVPN on windows 10 </h3>
                <h4 class="title">Introduction </h4>
                <p>This guide is meant for users of the OpenVPN Access Server product that wish to connect their Windows computer using the official OpenVPN Connect Client software. In the steps outlined below we’ll take you through the process of obtaining the OpenVPN Connect Client from your Access Server’s web interface, and installing and using it on the Windows operating system. Aside from some minor differences due to different versions of software used this guide should be accurate and easy to follow. You can follow to go through all the steps.
                </p>
            </div>
            <div>
                <h4 class="title">Requirements</h4>
                <p>In order to set up the OpenVPN on windows 10 you will need:</p>
                <ol class="list-unstyled">

                    <li>
                        <strong>1: </strong> A Lazarus VPN account. If you don’t have one you can try our services for free.
                    </li>

                    <li>
                        <strong>2:</strong> Your VPN username and password. You can find them in your account on our website, by going to Services and accessing your service details.
                    </li>

                    <li>
                        <strong>3:</strong> The configuration files according to the plan your purchased. You can find them on the dashboard page on our website.
                    </li>
                    <li>
                        <strong>4:</strong> The OpenVPN GUI. You can download it from our dashboard.
                    </li>
                </ol>
                <div>
                    <h4 class="title">Installation</h4>
                    <ol class="list-unstyled">
                        <li>
                            <strong>Step1: </strong> Download the official OpenVPN from the Lazarus website.
                        </li>

                        <li>
                            <strong>Step2:</strong> Run the setup with administrator privileges and follow the installation steps. Confirm the Windows security messages.
                        </li>

                        <li>
                            <strong>Step3:</strong> Download the configuration file and unzip it. Copy all files to the OpenVPN configuration folder (by default C:/Program Files/OpenVPN/config/) and confirm the Windows security messages.
                        </li>
                        <li>
                            <strong>Step4:</strong> Click with right on the OpenVPN desktop icon, click on "Settings" and go to the tab "Compatibility". Check "Run the program as administrator".
                        </li>
                        <li>
                            <strong>Step5:</strong> Start OpenVPN with administrator privileges and click with right on the OpenVPN tray icon, select your favorite location and click on "Connect".
                        </li>
                        <li>
                            <strong>Step6:</strong> Once the connection has been successfully established, the OpenVPN icon turns green. You can manage your VPN connection with OpenVPN.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</div>

<?php

get_template_part('app-templates/footer/footer'); 

get_footer(); 

?>
