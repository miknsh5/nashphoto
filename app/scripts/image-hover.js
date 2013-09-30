jQuery(document).ready(function(){
 
	 jQuery('.title-wrap, .subtitle-wrap').each(function() {
        jQuery(this).data('wrapping', jQuery(this).width());
        jQuery(this).css('width', 0);
     });

      jQuery('div.images').bind('mouseover', function() {
        jQuery(this).find('.title-wrap').stop().each(function() {
          jQuery(this).animate({
            width: jQuery(this).data('wrapping')
          }, 300);
      	});
        jQuery(this).find('.subtitle-wrap').stop().each(function() {
          jQuery(this).animate({
            width: jQuery(this).data('wrapping')
          }, 300);
        });
      });

      jQuery('div.images').bind('mouseout', function() {
        jQuery(this).delay(250).find('.title-wrap').stop().each(function() {
          jQuery(this).animate({
            width: 0
          }, 300);
      	});
        jQuery(this).find('.subtitle-wrap').stop().each(function() {
          jQuery(this).animate({
            width: 0
          }, 300);
        });
      });
});