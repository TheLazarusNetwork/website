<?php
/**
 * @package     :    LAZARUS
 * @since       :    V 1.0
 * Template Name:    VPN-apple-ios-Page-Template
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
                <h3 class="title text-center">How to install and configure OVPN on Apple IOS </h3>
                <h4 class="title">Introduction </h4>
                <p>Our VPN for IOS immediately protects your internet privacy and security while giving you full internet freedom and instant access to content streaming.
                </p>
            </div>
            <div>
                <h4 class="title">Requirements</h4>
                <p>In order to set up the OpenVPN on Apple IOS you will need:</p>
                <ol class="list-unstyled">

                    <li>
                        <strong>1: </strong> A Lazarus VPN account. If you don’t have one you can try our services for free.
                    </li>

                    <li>
                        <strong>2:</strong> Your VPN username and password. You can find them in your account on our website, by going to Services and accessing your service details.
                    </li>

                    <li>
                        <strong>3:</strong> you have to download the configuration files from our dashboard. 
                    </li>
                </ol>
                <div>
                    <h4 class="title">Installation</h4>
                    <ol class="list-unstyled">
                        <li>
                            <strong>Step1: </strong> Go to the Lazarus website and click on go to App store. Then you will redirect on the App store.
                        </li>

                        <li>
                            <strong>Step2:</strong> Tap on the search button in the App store and Search for the app called OpenVPN Connect then install it.
                        </li>

                        <li>
                            <strong>Step3:</strong> Open the configuration file that you downloaded. OpenVPN Connect should start and allow you to import the profile. Enter you credentials for your OVPN account and click on Add in the top right corner when you're done.
                        </li>
                        <li>
                            <strong>Step4:</strong> Connect by clicking on the grey toggle that appears next to the profile name.
                        </li>
                        <li>
                            <strong>Step5:</strong> You should now be connected to OVPN and be able to browse the internet safely.
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
