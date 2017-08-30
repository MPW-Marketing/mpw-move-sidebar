
function jqMoveUpdateSize(){
    // Get the dimensions of the viewport
    var width = jQuery(window).width();
    var height = jQuery(window).height();
    return width;
};
var is_moved = false;
jQuery(document).ready(function(){
    var width = jqMoveUpdateSize();
    if (width < 761){
        console.log('mobile');
         jQuery('.post-content').prepend(jQuery('#conv-buttons'));
    	is_moved = true;
    }
    jQuery(window).resize(function() {
        if (jqMoveUpdateSize() < 761 && !is_moved){
        		 jQuery('.post-content').prepend(jQuery('#conv-buttons'));
    			is_moved = true;
        } else if (jqMoveUpdateSize() > 760 && is_moved){
        		jQuery('aside.right .widget-1').prepend(jQuery('#conv-buttons'));
    			is_moved = false;
        }
    });
});
