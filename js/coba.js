$('.page-scroll').on('click',function(e){

	var tujuan = $(this).attr('href');
	var elemenTujuan= $(href);
	
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	},1000,'swing');
	
	e.preventDefault();
});