/* project-list mouse hover */

$(document).ready(function(){
	// handle the mouseenter functionality
	$(".project-item").mouseenter(function(){
		$(this).addClass("hover");
	})
	// handle the mouseleave functionality
	.mouseleave(function(){
		$(this).removeClass("hover");
	});

	// vertical center the title
	$(".project-img").one("load", function() {
		centerTitle()
	}).each(function() {
		if(this.complete){ $(this).load(); }
	});

	// fade out transistion
	$("a.link").click(function(){
		console.log (window.location.href);
		console.log (this.href);
		event.preventDefault();
		var link = this.href;
		if (window.location.href != link) {
			$('body').fadeOut(800, function(){
				window.location = link;
			});
		}
	});

	// instagram
	$('#instagram').pongstgrm({
	    accessId:     '12930873',
	    accessToken:  '12930873.e09bb38.e9918aa8203e4f98b7e896033e7a1fc6',
  	});

	// fadeloader
  	$('#project-img-list').fadeloader({
		mode: 'children',
		fadeSpeed : 500,
		displayType : 'block',
		easeLoad : 'easeInCubic',
		preloader : false
	});

	$( '.gallery' ).swipebox({
		hideBarsOnMobile : true, // false will show the caption and navbar on mobile devices
		hideBarsDelay : 3000 // delay before hiding bars
	});

	// scroll top button
	scrollTopButton();
});


$(window).load(function() {
	$('.loader').fadeOut(800);
	// $('body').fadeIn(1000);
})


$( window ).resize(function() {
	centerTitle();
});

function centerTitle() {
	var img_height = $(".project-img").height();
	var line_height = parseInt($(".expand").css("line-height"), 10);
	var offset = (img_height - line_height) / 2;
	var padding = ""+offset+"px"+" 5px 0";
	$(".expand").css("padding", padding);
}

function scrollTopButton() {
	var right_offset = $('.container').css('margin-right').replace(/[^-\d\.]/g, '') - $('.scroll-top').css('width').replace(/[^-\d\.]/g, '');
	// $('.scroll-top').css('right', right_offset);
	// console.log(right_offset);

	var offset = 550;
    var duration = 800;
    var counter = 0;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.scroll-top').fadeIn(duration);
        } else {
            $('.scroll-top').fadeOut(duration);
        }
    });
    
    $('.scroll-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
}