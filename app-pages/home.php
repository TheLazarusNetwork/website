<?php
/**
 * @package     :    LAZARUS
 * @since       :    V 1.0
 * Template Name:    Home-Page-Template
 */

get_header(); 

get_template_part('app-templates/header/header'); 

get_template_part('app-pages/home/pricing'); 

get_template_part('app-pages/home/clients'); 

get_template_part('app-pages/home/integrations');

get_template_part('app-pages/home/location');

get_template_part('app-pages/home/streaming');

get_template_part('app-pages/home/drive');

get_template_part('app-pages/home/drive-features');

get_template_part('app-pages/home/form');

get_template_part('app-templates/footer/footer'); 

get_footer(); 
