var keystone = require('keystone'),
	async = require('async');

exports = module.exports = function (req, res){

	var view = new keystone.View(req,res);
	var locals = res.locals;
	
	locals.section = 'churches';
	locals.filters = {
		item: req.params.item
	};

	locals.data = {
		church: []
	};
	console.log('line 17, here is locals.filters.review '+ req.params.item);
	// Load the current post
	view.on('init', function(next) {
		
		var q = keystone.list('Church').model.findOne({
			slug: locals.filters.item
		})
		
		q.exec(function(err, result) {
			locals.data.church = result;
			console.log('line 27, here is result '+ locals.data.church);
			next(err);
		});
		
	});


	view.render('item');

};