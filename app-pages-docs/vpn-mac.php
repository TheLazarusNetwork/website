<?php
/**
 * @package     :    LAZARUS
 * @since       :    V 1.0
 * Template Name:    VPN-mac-Page-Template
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
                <h3 class="title text-center">How to install and configure OVPN on Mac OS using Tunnelblick </h3>
                <h4 class="title">Introduction </h4>
                <p> The best-known OpenVPN client for the Mac is Tunnelblick, and it’s excellent. Tunnelblick is built specifically for the Mac, and its sleek icon lives quietly in your menu bar, ready to connect to a VPN whenever you’d like.
                </p>
            </div>
            <div>
                <h4 class="title">Requirements</h4>
                <p>In order to set up the OpenVPN on mac os using tunnelblick  you will need:</p>
                <ol class="list-unstyled">

                    <li>
                        <strong>1: </strong> A Lazarus VPN account. If you don’t have one you can try our services for free.
                    </li>

                    <li>
                        <strong>2:</strong> Your VPN username and password. You can find them in your account on our website, by going to Services and accessing your service details.
                    </li>

                    <li>
                        <strong>3:</strong> Install Tunnelblick from our website and install the necessary OpenVPN configuration files from our dashboard.
                    </li>
                </ol>
                <div>
                    <h4 class="title">Installation</h4>
                    <ol class="list-unstyled">
                        <li>
                            <strong>Step1: </strong> Download the OVPN mac setup by Tunnelblick from our website, and install it on your Mac.
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
                </div>
                <h4 class="title">Connecting & Disconnecting</h4>
                <p>In order to set up the OpenVPN on mac os using tunnelblick  you will need:</p>
                <ol class="list-unstyled">

                    <li>
                        <strong>1: </strong> To open a new VPN connection, click on the Tunnelblick menubar icon to and select a configuration.
                    </li>

                    <li>
                        <strong>2:</strong> Enter your username and password for your VPN provider and click “OK.”
                    </li>

                    <li>
                        <strong>3:</strong> A small Growl window will pop up in the upper-right of your monitor showing your connection status. Once the connection is complete, the notification window will go away.
                    </li>
                    
                    <li>
                        <strong>4:</strong> If Tunnelblick’s icon is now black instead of light grey, you’ve connected successfully.
                    </li>
                    
                    <li>
                        <strong>5:</strong> To see your connection status and outside IP address, click the Tunnelblick icon and look at the first line. To disconnect, click that same menu item.
                    </li>
                </ol>
            </div>
        </div>
    </div>
</div>

<?php

get_template_part('app-templates/footer/footer'); 

get_footer(); 

?>
