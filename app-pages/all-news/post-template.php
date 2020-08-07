<?php
  $post_id = get_the_ID();
?>

<!-- see this is the template of post -->
<div class="col-md-6 col-12">
  <div class="card mx-3 my-3">
    <a href="<?php the_permalink(); ?>">
      <img src="<?php the_post_thumbnail_url($post_id, 'small_image'); ?>" class="card-img-top">
    </a>
    <div class="card-body">
      <h5 class="card-title m-0"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h5>
      <p class="mb-3">
        <small>
        <span>Date: <?php echo get_the_date(); ?></span>
        </small>
      </p>
      <p class="card-text"><?php the_excerpt(); ?></p>
      <a href="<?php the_permalink(); ?>" class="btn btn-primary">Read More</a>
    </div>
  </div>
</div>


<!-- value return or print
the: print / echo
get_the: return -->