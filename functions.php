<?php
#enable debug mode
define('WP_DEBUG', true);

#The proper way to load the style.css file
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('blocksy-child-style', get_stylesheet_uri());
});

#adding javascript file
function my_custom_scripts()
{
    wp_enqueue_script('custom-js', get_theme_file_uri() . '/scripts/custom.js', array('jquery'), '', true);
}
add_action('wp_enqueue_scripts', 'my_custom_scripts');