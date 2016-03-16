jQuery(document).ready(function($) {
    var animate = false;
    var navigationTrigger = $('.cd-nav-trigger'),
        transitionsNotSupported = ($('.no-csstransitions').length > 0);

    navigationTrigger.on('click', function(event) {
        event.preventDefault();

        if (animate == false) {
            animate = true;
            if (navigationTrigger.hasClass('nav-visible')) {
                //alert('has');
                navigationTrigger.removeClass('nav-visible');
               
            } else {
                //alert('not has');
                navigationTrigger.addClass('nav-visible');
            }
        }
        if (transitionsNotSupported) animate = false;
        animate=false;
    });
});