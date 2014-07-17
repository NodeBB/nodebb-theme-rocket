"use strict";

var Theme = {},
	app;

Theme.defineWidgetAreas = function(areas, callback) {
	areas = areas.concat([
		{
			'name': 'Homepage Sidebar',
			'template': 'home.tpl',
			'location': 'sidebar'
		}
	]);

	callback(null, areas);
};

Theme.init = function(express, middleware, controllers) {
	app = express;
};

module.exports = Theme;