var canvas_to_img = function() {
    jQuery.each(jQuery('canvas'), function(k, canvas) {
        jQuery('<img src="'+canvas.toDataURL("image/png")+'" />').insertAfter(jQuery(canvas));
        jQuery(canvas).hide();
    });
 };
