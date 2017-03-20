$(document).ready(function(){
    $("button4").click(function() {
      $("#like4").html("You like this garden!");
    });
    $("button5").click(function() {
      $("#like5").html("You like this garden!");
    });
    $("#Kinkakuji-answer").click(function() {
      $("#Kinkakuji-q").append("- BLACK PINE (Kuromatsu)");
    });
    $(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$("#scrollToTop").fadeIn();
		} else {
			$("#scrollToTop").fadeOut();
		}
	});
	$("#scrollToTop").click(function(){
		$("html, body").animate({scrollTop : 0},800);
		return false;
	});

});