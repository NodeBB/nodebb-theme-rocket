"use strict";
/*global RELATIVE_PATH, app, utils*/

$(document).ready(function () {
    $(window).on('action:ajaxify.end', function(err, data) {
    	var url = data.url,
    		menuItem;

    	if (url === '') {
    		menuItem = 'feed';
    	} else if (url.match('recent')) {
    		menuItem = 'recent';
    	} else if (url.match('popular')) {
    		menuItem = 'popular';
    	}
    	
    	$('.main-menu li').removeClass('active');
    	$('.main-menu .menu-' + menuItem).addClass('active');
    });
});