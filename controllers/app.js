var config = require('../config');

module.exports = function(req, res, next) {
	res.render('app', {
		config: config
	})
}
