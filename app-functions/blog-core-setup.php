<?php
/**
 *  @package    Lazarus
 *  Type:       Blog Core Setup
 */


// ACTIVATE FEATURED IMAGE
function blog_core_setup(){
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme','blog_core_setup');


function blog_post_excerpt_more($more){
  return ' ...';
}
add_filter( 'excerpt_more', 'blog_post_excerpt_more' );


function blog_post_excerpt_length( $length ) {
  return 30;
}
add_filter('excerpt_length', 'blog_post_excerpt_length', 999);