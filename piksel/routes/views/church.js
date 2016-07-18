var keystone = require('keystone'),
	async = require('async');

exports = module.exports = function (req,res){

	var view = new keystone.View(req,res);
	var locals = res.locals;

	locals.section = 'churches';
	locals.filters = {
		post: req.params.church
	};
	locals.data = {
		churches: []
	};

// Load the current post
	view.on('init', function(next) {
		
		var q = keystone.list('Church').model.find().exec( function(err, result){
			console.log('here is result '+ result); 
			locals.data.churches = result;
			next();
		})


		
	});
	
	// Load other posts
	// view.on('init', function(next) {
		
	// 	var q = keystone.list('Post').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit('4');
		
	// 	q.exec(function(err, results) {
	// 		locals.data.posts = results;
	// 		next(err);
	// 	});
		
	// });
	
	// Render the view
	view.render('church');
	
};
