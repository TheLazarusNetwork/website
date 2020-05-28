<?php
/**
 * @package     :    LAZARUS
 * @since       :    V 1.0
 * Template Name:    Metamask-Windows-Page-Template
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
                <h3 class="title text-center">How to Setup Metamask Plugin on Windows </h3>
                <p>MetaMask is an extension that you add to your browser in order to connect
                    it to the Ethereum blockchain. It will create a new Ethereum address for you, where you can store
                    Lazarus tokens.Using lazarus token you can purchase premium plans and packages for your account.
                </p>
            </div>
            <div>
                <h4 class="title">Installing Metamask</h4>
                <ol class="list-unstyled">

                    <li>
                        <strong>Step1: </strong> Go to the
                        <a href="https://metamask.io" target="_blank"> Metamask website</a>
                    </li>

                    <li>
                        <strong>Step2:</strong> Click “Get Chrome Extension” to install Metamask.
                    </li>

                    <li>
                        <strong>Step3:</strong> Click “Add to Chrome” in the upper right.
                    </li>
                    <li>
                        <strong>Step4:</strong> Click “Add Extension” to complete the installation
                    </li>
                </ol>
            </div>
            <div>
                <div>
                    <p>You will know Metamask has been installed when you see the fox logo on
                        the upper right hand corner of your browser.
                    </p>
                </div>
                <div class="meta-logo">
                    <img src="<?php echo get_template_directory_uri().'/app-resources/images/documentation-img/metamask-icon.png'; ?>"
                        alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container general-div">
    <div class="row">
        <div class="col-12">
            <div>
                <h4 class="title">How to Use Metamask </h4>
                <p>One of the first tasks you will want to do on Metamask is to install a wallet (or “vault” as Metamask
                    calls it) to hold your cryptocurrencies. To do this, follow the instructions below.
                </p>
            </div>
            <div>
                <ol class="list-unstyled">

                    <li>
                        <strong>Step1:</strong> Click on the Metamask logo in the upper right hand corner of your Google
                        chrome browser.
                    </li>

                    <li>
                        <strong>Step2:</strong> Read and agree to the terms and conditions. You may have to agree to 2
                        to 3 pages worth of terms
                    </li>

                    <!-- <div class="general-img">
                        <img src="<?php echo get_template_directory_uri().'/app-resources/images/documentation-img/metamask-icon.png'; ?>"
                            alt="" class="img-fluid img-center">
                    </div> -->

                    <li>
                        <strong>Step3:</strong> Enter a password and click “Create” to create your wallet.
                    </li>

                    <li>
                        <strong>Step4:</strong> You will see a set of 12 “seed words” for your vault. Click “Save Seed
                        Words
                        as File” and copy the “MetaMask Seed Words” file that is downloaded to a safe place. You will
                        need
                        it to access your vault.
                    </li>

                    <li>
                        <strong>Step5:</strong> Click “I’ve Copied It Somewhere Safe” once your seed words file has been
                        secured. You’ll be taken into your Metamask wallet!
                    </li>
                    <!-- <div class="general-img">
                        <img src="<?php echo get_template_directory_uri().'/app-resources/images/documentation-img/metamask-icon.png'; ?>"
                            alt="" class="img-fluid img-center">
                    </div> -->
                </ol>
            </div>
            <div class="footer-margin">
                <p>You have created an account on the main Lazarus network.</p>

                <p>You are now in the Lazarus main network. To start experimenting with Metamask, you can switch to
                    one of the testnet networks by clicking “Main Network” in the left hand corner of the wallet pop
                    up screen, and selecting one of the testnets such as Ropsten Test Network or Kovan Test Network.
                </p>
            </div>
        </div>
    </div>
</div>

<?php

get_template_part('app-templates/footer/footer'); 

get_footer(); 

?>
