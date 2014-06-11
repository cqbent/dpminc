// JavaScript Document

$(document).ready(function() {
	$('ul.nice-menu liXX').hover( 
		function() { $('ul.nice-menu ul').css('left',-9999); $('ul', this).css('left', 0);  },
		function() { $('ul', this).css('left', -9999); }
		
	);
	$('ul.nice-menuXX').mouseout( 
		function() { $('ul.nice-menu li.active-trail ul').css('left',0);
	}
	);

});

$(document).ready(function() {
	$('.view-bio-display .views-row-1 .mtdesc').addClass('active');
	$('.mtnav').hover(function() {
		var uid = $(this).attr('id');
		$('.mtdesc').removeClass('active');
		$('.mtdesc#'+uid).addClass('active');
	});

});