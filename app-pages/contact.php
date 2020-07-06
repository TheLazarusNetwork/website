<?php
/**
 * @package     :    LAZARUS
 * @since       :    V 1.0
 * Template Name:    Contact-Us Template
 */
 
get_header(); 

?>
<style>
#hastech {
    height: 600px;
    width: 100%;
}
.map-sec iframe{width:100%;height:450px}

.map-heading h2 {
color: #464646;
font-size: 21px;
font-weight: bold;
line-height: 32px;
margin: 0 10px 30px;
padding-bottom: 16px;
position: relative;
text-transform: uppercase;
}
.map-heading h2::before{
  border-bottom: 3px solid #068acd;
  bottom: 1px;
  content: "";
  height: 3px;
  position: absolute;
  width: 9%;
}
.map-area {
    position: relative;
}
.map-contact {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
}
.contact-from input {
    background-color: #fff;
    border: none;
    color: #aaaaaa;
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 18px;
    padding: 16px 20px;
    width: 100%;
    transition: all .3s ease 0s;
}
.contact h2 {
color: #464646;
font-size: 20px;
font-weight: bold;
line-height: 32px;
margin: 0 10px 30px;
padding-bottom: 16px;
position: relative;
text-transform: uppercase;
}
.contact h2::before{
  border-bottom: 3px solid #068acd;
  bottom: 10px;
  content: "";
  height: 3px;
  position: absolute;
  width: 17%;
}
.contact-from textarea {
    background-color: #fff;
    border: none;
    color: #aaaaaa;
    font-size: 14px;
    font-weight: normal;
    height: 100px;
    padding: 16px 20px;
    width: 100%;
    transition: all .3s ease 0s;
}
button.submit {
    margin-bottom: 0;
    margin-top: 20px;
    transition: all 0.3s ease 0s;
    background-color: #4a90e2;
    border: 1px solid #4a90e2;
    color: #fff;
    padding: 16px 20px;
    width: 100%;
}
button.submit:hover {
    background: transparent;
    color: #666;
}
.contact-from {
    padding: 50px;
}
.conatct-info {
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 52px;
}
.contact-icon {
    border-radius: 5px;
    display: inline-table;
    height: 54px;
    margin-right: 18px;
    text-align: center;
    transition: all 0.3s ease 0s;
    width: 54px;
    border: 1px solid #f3f3f3;
}
.contact-icon i {
    color: #666666;
    display: table-cell;
    font-size: 30px;
    vertical-align: middle;
}
/*.contact-text {
    display: inline-block;
}*/
.contact-text > span {
    color: #7a7a7a;
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
}
.contact-text > span a {
    color: #7a7a7a;
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
}
.contact-text > span a:hover {
    color: #4a90e2;
}
.contact-from input::-webkit-input-placeholder {
    /* Chrome */
    
    color: #aaaaaa;
    opacity: 1;
}
.contact-from input::-moz-placeholder {
    /* Firefox 19+ */
    
    color: #aaaaaa;
    opacity: 1;
}
.contact-from textarea::-webkit-input-placeholder {
    /* Chrome */
    
    color: #aaaaaa;
    opacity: 1;
}
.contact-from textarea::-moz-placeholder {
    /* Firefox 19+ */
    
    color: #aaaaaa;
    opacity: 1;
}
.contact-from input:focus,
.contact-from textarea:focus {
    border-color: #4a90e2;
    box-shadow: inherit;
    outline: 0 none;
}
.single-contact-info:hover .contact-icon {
    background: #4a90e2;
    background-color: #4a90e2;
}
.single-contact-info:hover .contact-icon i {
    color: #fff;
}
</style>

<main id="main" class="main main-1">

    <?php get_template_part('app-templates/header/page-header'); ?>

    <section id="subscribe" class="cta-1 section section--padding  my-img">
        <div class="container my-padding">
        </div>
    </section>
</main>

<section id="pricing" class="pricing pricing-5 section section--padding section--gradient__5">
  <div class="row">
    <div class="col-md-12">
      <div class="map-heading">
        <h2>Find Us on Google Map</h2>
      </div>
      <div class="map-sec">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7007.882347618485!2d77.06861802525118!3d28.571529129767466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x845ec514fd38c0f3!2sRevotic%20Engineering%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1593940392441!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </div>
  </div>
  <div class="container" id="contact-area">
    <div class="row gray-bg contact-from">
      <div class="col-md-8">
        <div class="contact">
          <h2>Send us a message</h2>
        </div>
        <form id="contact-form" action="mail.php" method="post">
          <input name="name" type="text" placeholder="Name">
          <input name="email" type="text" placeholder="Email">
          <textarea name="message" placeholder="Your message"></textarea>
          <button class="submit" type="submit" value="Send">SUBMIT</button>
        </form>
        <p class="form-messege"></p>
      </div>
      <div class="col-md-4 contact-text">
        <div class="contact">
          <h2>Main Office</h2>
        </div>
        <br>
        <b>Address</b>
        <p>Sector 8, Dwarka
          New Delhi, India 110077
        </p>
        <b>Email</b>
        <br>
        <span>
        <a href="mailto:connect@lazarus.network">connect@lazarus.network</a>
        <br>
        <a href="mailto:connect@lazarus.network">connect@lazarus.network</a>
        </span>
        <br><br>
        <b>Phone</b>
        <br>
        <span>
        +91 895 1415 895
        <br>
        +91 895 1415 895
        </span>
      </div>
    </div>
  </div>
</section>


<?php

get_template_part('app-templates/footer/footer'); 

get_footer(); 

?>
