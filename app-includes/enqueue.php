<?php
/**
 * @package     :    LAZARUS
 * @since       :    V 1.0
 * Name         :    enqueue file
 */


function load_scripts(){
  global $resource_dir;

  //  css files
  wp_enqueue_style('bootstrap',$resource_dir.'/app-resources/css/bootstrap.min.css',false,'1.0');
  wp_enqueue_style('iconsmind',$resource_dir.'/app-resources/css/iconsmind.css',false,'1.0');
  wp_enqueue_style('main',$resource_dir.'/app-resources/css/main.css',false,'1.0');
  wp_enqueue_style('socicon',$resource_dir.'/app-resources/css/socicon.css',false,'1.0');
  wp_enqueue_style('main-build-css',$resource_dir.'/app-resources/css/main.build.min.css',false,'1.0');
  
  // js files
  wp_enqueue_script('jquery',$resource_dir.'/app-resources/js/jquery.min.js',array(),'1.0',true);
  wp_enqueue_script('popper',$resource_dir.'/app-resources/js/popper.min.js',array('jquery'),'1.0',true);
  wp_enqueue_script('bootstrap',$resource_dir.'/app-resources/js/bootstrap.min.js',array('jquery'),'1.0',true);
  wp_enqueue_script('feather',$resource_dir.'/app-resources/js/feather.min.js',array('jquery'),'1.0',true);
  wp_enqueue_script('Chart',$resource_dir.'/app-resources/js/Chart.min.js',array('jquery'),'1.0',true);
  wp_enqueue_script('custom',$resource_dir.'/app-resources/js/custom.js',array('jquery'),'1.0',true);
}
add_action('wp_enqueue_scripts','load_scripts');
