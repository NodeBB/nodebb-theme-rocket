"use strict";
/*global RELATIVE_PATH, app, utils*/

function adjustSubMenu() {
	if ($(document).scrollTop() > 90) {
		$('.sub-header').addClass('fixed');
		$('body').addClass('subHeader-fixed');
	} else {
		$('.sub-header').removeClass('fixed');
		$('body').removeClass('subHeader-fixed');
	}
}

$(document).ready(function () {
    $(window).on('action:ajaxify.end', function(err, data) {
    	var url = data.url,
    		menuItem;

    	if (url === '') {
    		menuItem = 'feed';
    	} else if (url.match(/^recent/)) {
    		menuItem = 'recent';
    	} else if (url.match(/^popular/)) {
    		menuItem = 'popular';
    	}

    	$('.main-menu li').removeClass('active');
    	$('.main-menu .menu-' + menuItem).addClass('active');

    	$(document).on('scroll', adjustSubMenu);
    	adjustSubMenu();


        buildBreadcrumbs(data.url);
    });
});


function buildBreadcrumbs(url) {
    var breadcrumb = '<a href="{path}" class="btn btn-default btn-breadcrumb-page">{title}</a>';
    $('.btn-breadcrumb-page').remove();

    var obj;

    if (url.match(/^category/)) {
        obj = {
            title: ajaxify.variables.get('category_name'),
            path: ajaxify.variables.get('category_slug')
        };
    }


    if (obj) {
        $('.btn-breadcrumb #btn-home').after(templates.parse(breadcrumb, obj));
    }
}