<?php
/**
 * @package:    lazarus_network
 * @since:      V 1.0
 * name:        Main Function File
 */

//config file for css and js
require get_template_directory().'/app-config.php';

//enqueue file for css and js
require get_template_directory().'/app-includes/enqueue.php';

//enqueue file for feature image
require get_template_directory().'/app-functions/blog-core-setup.php';
