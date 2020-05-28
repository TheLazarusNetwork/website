<?php
/**
 * @package     :    LAZARUS
 * @since       :    V 1.0
 * Name         :    enqueue file
 */


function load_scripts(){

    //  css files
    wp_enqueue_style('bootstrap',get_template_directory_uri().'/app-resources/css/bootstrap.min.css',false,'1.0');
    wp_enqueue_style('iconsmind',get_template_directory_uri().'/app-resources/css/iconsmind.css',false,'1.0');
    wp_enqueue_style('main',get_template_directory_uri().'/app-resources/css/main.css',false,'1.0');
    wp_enqueue_style('socicon',get_template_directory_uri().'/app-resources/css/socicon.css',false,'1.0');
    wp_enqueue_style('main-build-css',get_template_directory_uri().'/app-resources/css/main.build.min.css',false,'1.0');
    
    // js files
    wp_enqueue_script('jquery',get_template_directory_uri().'/app-resources/js/jquery.min.js',array(),'1.0',true);
    wp_enqueue_script('popper',get_template_directory_uri().'/app-resources/js/popper.min.js',array('jquery'),'1.0',true);
    wp_enqueue_script('bootstrap',get_template_directory_uri().'/app-resources/js/bootstrap.min.js',array('jquery'),'1.0',true);
    wp_enqueue_script('feather',get_template_directory_uri().'/app-resources/js/feather.min.js',array('jquery'),'1.0',true);
    wp_enqueue_script('Chart',get_template_directory_uri().'/app-resources/js/Chart.min.js',array('jquery'),'1.0',true);
    wp_enqueue_script('custom',get_template_directory_uri().'/app-resources/js/custom.js',array('jquery'),'1.0',true);

}
add_action('wp_enqueue_scripts','load_scripts');
