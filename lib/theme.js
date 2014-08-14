"use strict";

var Theme = {},
	app,
	SocketPlugins = module.parent.require('./socket.io/plugins');

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
	SocketPlugins.rocket = require('./sockets');
};

module.exports = Theme;