<?php
/*
Plugin Name: move sidebar sections
Description: move conversion buttons to above content on mobile - must be edited to match each theme
Version: 0.1.1
Author: 
License: GPL2
*/
?>
<?php
/*  Copyright 2015

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as 
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/
?>
<?php

add_action( 'wp_enqueue_scripts', 'enqueue_sidebar_move_styles', 100 );
function enqueue_sidebar_move_styles() {
        wp_register_script(
        'sidebarloc',
        plugins_url( '/js/sidebarloc.js' , __FILE__ ),
        array( 'jquery' ),
        '1.0.3',
        true
    );

    wp_enqueue_script( 'sidebarloc' );
}
