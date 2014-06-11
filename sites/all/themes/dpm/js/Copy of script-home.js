$(window).load(function() { animate_start(); } );

function animate_start() {
	$(".introblock#t11").fadeIn('slow');
	$("#t12").delay(500).fadeIn( 'slow' );
	$("#t13").delay(1500).fadeIn( 'slow' );
	$("#t21").delay(2500).fadeIn( 'slow' );
	$("#t22").delay(3500).fadeIn( 'slow' );
	$("#t23").delay(4500).fadeIn( 'slow', function() { 
		if ($(window).height() < 768) {
			animate_down_alt();
		}
		else { 
			animate_down();
		}
	});
}

function animate_down() {
	$("#t11").delay(1000).animate( { top: "370px", fontSize: "24px", left: "0px" }, 1000 );
	$("#t12").delay(1000).animate( { top: "370px", fontSize: "24px", left: "205px" }, 1000 );
	$("#t13").delay(1000).animate( { top: "370px", fontSize: "24px", left: "335px" }, 1000 );
	$("#t21").delay(1000).animate( { top: "400px", fontSize: "24px", left: "0px" }, 1000 );
	$("#t22").delay(1000).animate( { top: "400px", fontSize: "24px", left: "223px" }, 1000 );
	$("#t23").delay(1000).animate( { top: "400px", fontSize: "24px", left: "393px" }, 1000 );
	//$('#introtext').delay(3000).queue( function() { animate_industries('go'); } ); 
}

function animate_down_alt() {
	$("#t11").delay(1000).animate( { top: "280px", fontSize: "24px", left: "0px" }, 1000 );
	$("#t12").delay(1000).animate( { top: "280px", fontSize: "24px", left: "205px" }, 1000 );
	$("#t13").delay(1000).animate( { top: "280px", fontSize: "24px", left: "335px" }, 1000 );
	$("#t21").delay(1000).animate( { top: "310px", fontSize: "24px", left: "0px" }, 1000 );
	$("#t22").delay(1000).animate( { top: "310px", fontSize: "24px", left: "223px" }, 1000 );
	$("#t23").delay(1000).animate( { top: "310px", fontSize: "24px", left: "393px" }, 1000 );
	$('#introtext').delay(3000).queue( function() { animate_industries('go'); } ); 
}



function animate_industries(status) {
	intro = 'complete';
	
	if(status == 'stop') {
		$('.container').clearQueue();
	}
	else {
		$('.container').queue(function() { show_industry('academic'); $('#middle').delay(1000).addClass('complete');
$(this).dequeue(); } );
		$('.container').delay(3000).queue(function() { show_industry('hightech'); $(this).dequeue(); } );
		$('.container').delay(3000).queue(function() { show_industry('healthcare'); $(this).dequeue(); } );
		$('.container').delay(3000).queue(function() { show_industry('municipal'); $(this).dequeue(); } );
		$('.container').delay(3000).queue(function() { show_industry('retail'); $(this).dequeue(); } );
		$('.container').delay(3000).queue(function() { show_industry('corporate'); $(this).dequeue(); } );
		$('.container').delay(3000).queue(function() { show_industry('lifesciences'); $(this).dequeue(); } );
		$('.container').delay(3000).queue(function() { show_industry('nonprofit'); $(this).dequeue(); } );
		$('.container').delay(3000).queue(function() { show_industry('industrial'); $(this).dequeue(); } );
		$('.container').delay(3000).queue(function() { show_industry('cafm'); $(this).dequeue(); } );
	}
}

function show_industry(id) {
	$('.industry-nav').removeClass('active');
	$('#middle .industry-main').fadeOut('fast');
	$('#'+id).addClass('active');
	$('#middle #'+id+'-main').fadeIn('fast');
}

var intro = '';
$(document).ready(function() {
	$('.industry-nav').hover(function() {
		if(intro == 'complete') {
			animate_industries('stop');
			tmpid = $(this).attr("id");
			//show_industry(tmpid);
			$('.industry-nav').removeClass('active');
			$('#'+tmpid).addClass('active');
			$('#middle .industry-main').hide();
			$('#middle #'+tmpid+'-main').show();
		}
	}); 
});
