$(document).ready( function(){
	
	setInterval(function(){
		$('.notes h3').toggle();
	},1500);


	$('.grid').isotope({
	   // options
	   itemSelector: '.grid-item',
	   layoutMode: 'fitRows'
	});

	$('#sorts').on( 'click', 'button', function() {
		  	var sortValue = $(this).attr('data-sort-value');
		  	$container.isotope({ sortBy: sortValue });
		});

		// change is-checked class on buttons
		$('.button-group').each( function( i, buttonGroup ) {
		  var $buttonGroup = $( buttonGroup );
		  $buttonGroup.on( 'click', 'button', function() {
		    $buttonGroup.find('.is-checked').removeClass('is-checked');
		    $( this ).addClass('is-checked');
		  });
		});


	var $container = $('.table-like').isotope({
		layoutMode: 'vertical',
		   masonry: {
	            columnWidth: 400,
	            columnHeight: 400,
	            gutterWidth: 10
	        },
	       sortBy: 'name',
		  getSortData: {
		    name: '.name',
		    },
		  sortAscending: {
		  }
		});
	$container.imagesLoaded()
		.progress( function(){
			var result = image.isLoaded ? 'loaded' : 'broken';
    			console.log( 'image is ' + result + ' for ' + image.img.src );
			$container.isotope('reLayout');
	});

});//ends document.ready statement