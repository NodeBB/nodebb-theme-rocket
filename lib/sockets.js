var Rocket = {},
	fs = require('fs'),
	path = require('path'),
	crypto = require('crypto'),
	nconf = module.parent.parent.require('nconf'),
	async = module.parent.parent.require('async'),
	mkdirp = module.parent.parent.require('mkdirp'),
	user = module.parent.parent.require('./user');

Rocket.cover = {};

Rocket.cover.get = function(socket, data, callback) {
	user.getUserFields(socket.uid, ['rocket:cover:url', 'rocket:cover:position'], callback);
};

Rocket.cover.update = function(socket, data, callback) {
	var assetsPath = path.join(nconf.get('base_dir'), 'public/theme-rocket/cover');

	async.parallel({
		position: async.apply(user.setUserField, socket.uid, 'rocket:cover:position', data.position),
		path: function(next) {
			if (data.imageData) {
				async.waterfall([
					function(next) {
						// Create assets directory if not exists
						fs.exists(assetsPath, function(exists) {
							if (exists) return next(null, '');
							else mkdirp(assetsPath, next);
						});
					},
					function(assetsDir, next) {
						user.getUserField(socket.uid, 'rocket:cover:url', function(err, imagePath) {
							if (!err && imagePath) {
								imagePath = path.join(assetsPath, imagePath);
								if (fs.existsSync(imagePath)) {
									fs.unlink(imagePath, next);
								} else {
									next();
								}
							} else {
								next();
							}
						});
					},
					function(next) {
						// Calculate md5sum of image
						// This is required because user data can be private
						var sum = crypto.createHash('md5');
						sum.update(data.imageData);
						next(null, sum.digest('hex'));
					},
					function(md5sum, next) {
						// Save image
						var imagePath = path.join(assetsPath, md5sum),
							buffer = new Buffer(data.imageData.slice(data.imageData.indexOf('base64') + 7), 'base64');

						fs.writeFile(imagePath, buffer, {
							encoding: 'base64'
						}, function(err) {
							next(err, md5sum);
						});
					},
					function(md5sum, next) {
						user.setUserField(socket.uid, 'rocket:cover:url', md5sum, function(err) {
							next(err, md5sum);
						});
					}
				], function(err, md5sum) {
					next(err, md5sum);
				});
			} else {
				next();
			}
		}
	}, function(err, results) {
		setTimeout(function() {
			callback(err, results.path);
		}, 1000);
	});
};

module.exports = Rocket;