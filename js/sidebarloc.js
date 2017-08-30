
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
         jQuery('.page-content').prepend(jQuery('#conv-buttons'));
         jQuery('.page-content h2:nth-of-type(1)').prepend(jQuery('#conv-buttons-b'));
            	is_moved = true;
    }
    jQuery(window).resize(function() {
        if (jqMoveUpdateSize() < 761 && !is_moved){
        		 jQuery('.page-content').prepend(jQuery('#conv-buttons'));
                 jQuery('.page-content h2:nth-of-type(1)').prepend(jQuery('#conv-buttons-b'));
    			is_moved = true;
        } else if (jqMoveUpdateSize() > 760 && is_moved){
        		jQuery('aside.right .widget-1').prepend(jQuery('#conv-buttons, #conv-buttons-b'));
    			is_moved = false;
        }
    });
});
