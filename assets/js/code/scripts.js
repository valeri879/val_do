$(document).ready(function(){

	// show sub menu
	$('.mn-li-do').on('click', function () {

		if( !($('.mn-li-do').children('.sub-ul').is(':visible')) )
		{
			$('.mn-li-do .mn-txt-do').removeClass('active');
		}

		$(this).children(':first').toggleClass('active');
		$(this).children('.sub-ul').toggle();
	});

	//prevent toggle function from child element
	$('.sub-ul').on('click', function(e){
		e.stopPropagation();
	});

	//active effect sub menu
	$('.sub-ul .mn-txt-do').on('click', function(){

		$('.sub-ul .mn-txt-do').removeClass('active');
		$(this).addClass('active');
	});


	//

	 $(".mn-txt-do").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 300,'swing');
     });

    //
    var cnt = $('.row-mr').width();
    var cnt_width = $('.row-mr conent-do-3').width() + 40 ;

    $(window).scroll(function () {
	
	var cnt = $('.row-mr').width();
    var cnt_width = $('.row-mr .conent-do-3').width() + 40 ;
    var mn = cnt - cnt_width;
	var mrg = $('.row-mr').offset().left;

    if ($(window).scrollTop() > 574) {
    	var menu = $('.menu-do').width();
    	console.log(menu);
    	console.log(mrg);

    	$('.menu-do').addClass('fixed');
    	$('.fixed').css({'right':mrg+'px', 'width': mn + 'px'});
    } else {
    	$('.menu-do').removeClass('fixed');
    }
	});

    $(window).resize(function () {
	
	var cnt = $('.row-mr').width();
    var cnt_width = $('.row-mr .conent-do-3').width() + 40 ;
    var mn = cnt - cnt_width;
	var mrg = $('.row-mr').offset().left;

    if ($(window).scrollTop() > 574) {
    	var menu = $('.menu-do').width();
    	console.log(menu);
    	console.log(mrg);

    	$('.menu-do').addClass('fixed');
    	$('.fixed').css({'right':mrg+'px', 'width': mn + 'px'});
    } else {
    	$('.menu-do').removeClass('fixed');
    }
	});

});