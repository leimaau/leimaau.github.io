
$(".popup-trigger").click(function(){
	$(".header-inner").css("opacity","1");
	$(".site-brand-wrapper").css("opacity","0.75");
	$(".site-nav").css("opacity","0.75");
});
    
var onPopupClose = function (e) {
	$('.popup').hide();
	$('#local-search-input').val('');
	$('.search-result-list').remove();
	$('#no-result').remove();
	$(".local-search-pop-overlay").remove();
	$('body').css('overflow', '');
	$(".header-inner").css("opacity","0.75");
};

$('.popup-btn-close').click(function(){
	onPopupClose();
});