<?php
/**
 * @package:        lazarus_network
 * @since:          V 1.0
 * Template Name:   Pricing Page
 */
 
global $media_url; ?>

<!-- Get Header -->
<?php get_header(); ?>

<style>
  .pen-styles {
    height: 100%;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }

  .pen-styles>div:first-of-type {
    margin-bottom: 40px;
  }

  .toggle-custom {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
    font-size: 14px;
    margin: 0 auto;
  }

  .toggle-custom input {
    display: none;
  }

  .toggle-custom input:checked+label {
    background-color: #0a9d85;
  }

  .toggle-custom input:checked+label::after {
    left: 17px;
  }

  .toggle-custom input:checked~span:last-of-type {
    color: #1e2532;
    opacity: 1;
  }

  .toggle-custom input:checked~span:first-of-type {
    color: #7e8aa2;
    opacity: 0.6;
  }

  .toggle-custom label {
    position: relative;
    display: inline-block;
    width: 38px;
    height: 23px;
    background-color: #7e8aa2;
    border-radius: 20px;
    margin-bottom: 0;
    cursor: pointer;
    -webkit-box-ordinal-group: 3;
    order: 2;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .toggle-custom label::after {
    content: '';
    width: 17px;
    height: 17px;
    position: absolute;
    top: 3px;
    left: 4px;
    border-radius: 50%;
    background-color: #fff;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .toggle-custom span {
    color: #7e8aa2;
    opacity: 0.6;
    -webkit-transition: opacity 0.2s ease-in-out, color 0.2s ease-in-out;
    transition: opacity 0.2s ease-in-out, color 0.2s ease-in-out;
  }

  .toggle-custom span:first-of-type {
    padding-right: 10px;
    color: #1e2532;
    opacity: 1;
    -webkit-box-ordinal-group: 2;
    order: 1;
  }

  .toggle-custom span:last-of-type {
    padding-left: 10px;
    -webkit-box-ordinal-group: 4;
    order: 3;
  }
</style>

<!-- Header and Hero -->
<main id="main" class="main main-1">
  <?php get_template_part('app-templates/header'); ?>

  <section id="subscribe" class="cta-1 section section--padding  my-img" style="background-image: url(<?php echo get_template_directory_uri(); ?>/app-resources/images/banner.png);">
    <div class="container my-padding">
    </div>
  </section>
</main>

<!-- Lazarus Personal Plans -->
<section id="pricing" class="pricing pricing-5 section section--padding section--gradient__5">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="preamble col-lg-8 offset-lg-2 section--gradient__7 py-3">
          <h3 class="title text-white my-3">Personal Security Plans</h3>
          <p class="lead text-white">Lazarus.network personal cyber security plan, protects your privacy and confidential data Online.</p>
        </div>
      </div>

      <div class="col-12 mb-5">
        <table class="laz-custom-switch mx-auto">
          <tr>
            <td>
              <div class="toggle-custom" style="width: 120px; padding-right: 10px;">
                <input class="currency-toggle" type="checkbox" id="p1-currency-toggle" data-price-element="dynamic-price-element-1" data-period="mo">
                <label for="p1-currency-toggle"></label>
                <span>USD</span>
                <span>INR</span>
              </div>
            </td>
            <td>
              <div class="toggle-custom" style="width: 160px; padding-left: 10px;">
                <input class="duration-toggle" type="checkbox" id="p1-duration-toggle" data-price-element="dynamic-price-element-1" data-currency="usd">
                <label for="p1-duration-toggle"></label>
                <span>Monthly</span>
                <span>Yearly</span>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  
    <div class="row">
      <div class="col-lg-4">
        <div class="pricing-card pricing-card-first dynamic-price-element-1">
          <h5 class="pricing-card__title mb-4">Individual</h5>
          <h3 class="pricing-card__value">
            <span class="pricing-currency" data-inr="₹" data-usd="$"></span>
            <span class="pricing-cost" data-inr-mo="750" data-usd-mo="9.99" data-inr-yr="7500" data-usd-yr="99.99">9.99</span>
            <span class="pricing-period" data-mo="/mo" data-yr="/yr">/mo</span>
          </h3>
          <ul class="pricing-card__list list-unstyled mb-0 pb-1">
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>No Traffic / Request Logs</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Unmetered Data Transfer</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Anonymous VPN</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Block ADs, Trackers and Malware</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Firewall</span>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Support</strong> Email</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Bandwidth</strong> 5 Mbps</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>No. of VPN Clients</strong>2</span>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Multi location Support</strong> 3</span>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Burner IP (VPN Clients)</strong> 2</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__false mr-2"></i>
              <span>Dedicated IP</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
          </ul>
          <div class="text-center mt-4">
            <a href="#" class="btn btn--blue btn--lg">Get Started</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="pricing-card pricing-card-highlighted dynamic-price-element-1">
          <div class="ribbon">
            <h6 class="text-uppercase mb-0">Popular Option</h6>
          </div>
          <h5 class="pricing-card__title mb-4">Family</h5>
          <h3 class="pricing-card__value">
            <span class="pricing-currency" data-inr="₹" data-usd="$">$</span>
            <span class="pricing-cost" data-inr-mo="1850" data-usd-mo="24.99" data-inr-yr="18500" data-usd-yr="249.99">24.99</span>
            <span class="pricing-period" data-mo="/mo" data-yr="/yr">/mo</span>
          </h3>
          <ul class="pricing-card__list list-unstyled mb-0 pb-1">
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>No Traffic / Request Logs</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Unmetered Data Transfer</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Anonymous VPN</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Block ADs, Trackers and Malware</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Firewall</span>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Support</strong> Basic</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Bandwidth</strong>20 Mbps</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>No. of VPN Clients</strong>10</span>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Multi location Support</strong> 5</span>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Burner IP (VPN Clients)</strong> 5</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__false mr-2"></i>
              <span>Dedicated IP</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
          </ul>
          <div class="text-center mt-4">
            <a href="#" class="btn btn--green btn--lg">Get Started</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="pricing-card dynamic-price-element-1">
          <h5 class="pricing-card__title mb-4">Home</h5>
          <h3 class="pricing-card__value">
            <span class="pricing-currency" data-inr="₹" data-usd="$">$</span>
            <span class="pricing-cost" data-inr-mo="3750" data-usd-mo="49.99" data-inr-yr="37500" data-usd-yr="499.99">49.99</span>
            <span class="pricing-period" data-mo="/mo" data-yr="/yr">/mo</span>
          </h3>
          <ul class="pricing-card__list list-unstyled mb-0 pb-1">
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>No Traffic / Request Logs</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Unmetered Data Transfer</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Anonymous VPN</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Block ADs, Trackers and Malware</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Firewall</span>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Support</strong> Direct</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Bandwidth</strong>50 Mbps</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>No. of VPN Clients</strong>20</span>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Multi location Support</strong> 7</span>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Burner IP (VPN Clients)</strong> 10</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Dedicated IP</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
          </ul>
          <div class="text-center mt-4">
            <a href="#" class="btn btn--blue btn--lg">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="pricing" class="pricing pricing-5 section section--padding section--gradient__5">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="preamble col-lg-8 offset-lg-2 section--gradient__7 py-3">
          <h3 class="title text-white my-3">Enterprise Security Plans</h3>
          <p class="lead text-white">Lazarus.network enterprise cyber security plan, protects your business and its confidential data Online.</p>
        </div>
      </div>

      <div class="col-12 mb-5">
        <table class="laz-custom-switch mx-auto">
          <tr>
            <td>
              <div class="toggle-custom" style="width: 120px; padding-right: 10px;">
                <input class="currency-toggle" type="checkbox" id="p2-currency-toggle" data-price-element="dynamic-price-element-2" data-period="mo">
                <label for="p2-currency-toggle"></label>
                <span>USD</span>
                <span>INR</span>
              </div>
            </td>
            <td>
              <div class="toggle-custom" style="width: 160px; padding-left: 10px;">
                <input class="duration-toggle" type="checkbox" id="p2-duration-toggle" data-price-element="dynamic-price-element-2" data-currency="usd">
                <label for="p2-duration-toggle"></label>
                <span>Monthly</span>
                <span>Yearly</span>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    
    <div class="row">
      <div class="col-lg-4">
        <div class="pricing-card pricing-card-first dynamic-price-element-2">
          <h5 class="pricing-card__title mb-4">Startup</h5>
          <h3 class="pricing-card__value">
            <span class="pricing-currency" data-inr="₹" data-usd="$"></span>
            <span class="pricing-cost" data-inr-mo="2250" data-usd-mo="29.99" data-inr-yr="22500" data-usd-yr="299.99">29.99</span>
            <span class="pricing-period" data-mo="/mo" data-yr="/yr">/mo</span>
          </h3>
          <ul class="pricing-card__list list-unstyled mb-0 pb-1">
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>No Traffic / Request Logs</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Unmetered Data Transfer</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Anonymous VPN</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Block ADs, Trackers and Malware</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Firewall</span>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Support</strong> Technical</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Bandwidth</strong> 10 Mbps</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>No. of VPN Clients</strong> 20</span>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Multi location Support</strong> 3</span>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Burner IP (VPN Clients)</strong> 3</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__false mr-2"></i>
              <span>Dedicated IP</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
          </ul>
          <div class="text-center mt-4">
            <a href="#" class="btn btn--blue btn--lg">Get Started</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="pricing-card pricing-card-highlighted dynamic-price-element-2">
          <div class="ribbon">
            <h6 class="text-uppercase mb-0">Popular Option</h6>
          </div>
          <h5 class="pricing-card__title mb-4">Acceler8</h5>
          <h3 class="pricing-card__value">
            <span class="pricing-currency" data-inr="₹" data-usd="$"></span>
            <span class="pricing-cost" data-inr-mo="5650" data-usd-mo="74.99" data-inr-yr="56500" data-usd-yr="749.99">74.99</span>
            <span class="pricing-period" data-mo="/mo" data-yr="/yr">/mo</span>
          </h3>
          <ul class="pricing-card__list list-unstyled mb-0 pb-1">
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>No Traffic / Request Logs</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Unmetered Data Transfer</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Anonymous VPN</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Block ADs, Trackers and Malware</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Firewall</span>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Support</strong> Direct</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Bandwidth</strong> 100 Mbps</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>No. of VPN Clients</strong> 50</span>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Multi location Support</strong> 5</span>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Burner IP (VPN Clients)</strong> 50</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Dedicated IP</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
          </ul>
          <div class="text-center mt-4">
            <a href="#" class="btn btn--green btn--lg">Get Started</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="pricing-card dynamic-price-element-2">
          <h5 class="pricing-card__title mb-4">Corporate</h5>
          <h3 class="pricing-card__value">
            <span class="pricing-currency" data-inr="₹" data-usd="$"></span>
            <span class="pricing-cost" data-inr-mo="11350" data-usd-mo="149.99" data-inr-yr="113500" data-usd-yr="1499.99">149.99</span>
            <span class="pricing-period" data-mo="/mo" data-yr="/yr">/mo</span>
          </h3>
          <ul class="pricing-card__list list-unstyled mb-0 pb-1">
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>No Traffic / Request Logs</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Unmetered Data Transfer</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Anonymous VPN</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Block ADs, Trackers and Malware</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Firewall</span>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Support</strong> Priority</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Bandwidth</strong> 1 Gbps**</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>No. of VPN Clients</strong> Unlimited***</span>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Multi location Support</strong> 7</span>
            </li>
            <li class="d-flex align-items-center">
              <span><strong>Burner IP (VPN Clients)</strong> Unlimited</span>
            </li>
            <li class="d-flex align-items-center">
              <i class="pricing-icon pricing-icon__true mr-2"></i>
              <span>Dedicated IP</span>
              <i data-feather="help-circle" data-toggle="tooltip" data-placement="top" title="Tooltip on top"></i>
            </li>
          </ul>
          <div class="text-center mt-4">
            <a href="#" class="btn btn--blue btn--lg">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Sub Footer -->
<?php get_template_part('app-templates/sub-footer'); ?>

<!-- Footer -->
<?php get_footer(); ?>