$(function(){
	//$(".ami-left-cont .ami-left-spn").addClass(".ami-logo-past");
	//$(".ami-left-cont .ami-left-spn").click(function(){

	$(".ami-left-spn ul").hide();
	//$(".ami-left-spn ul").first().delay(400).slideDown(700);
			$('body').on('click','.ami-left-cont .ami-left-spn',function(){
				var num=$(this).index();
				//console.log(num);

					if ($(this).hasClass("ami-logo-active")) {
						$(this).removeClass("ami-logo-active");
						$(this).addClass("ami-logo-past");

					}
					else{
						$(this).addClass("ami-logo-active");
						$(this).removeClass("ami-logo-past");
					}

					$(".ami-left-cont .ami-left-spn ul").eq(num).slideToggle().siblings('ul').slideUp();
					//$(".ami-left-spn ul").eq(num).slideToggle()
					//$(this).css("background","url(./icon2.png) no-repeat").siblings().css("background","")
					//$(this).css("background-position","90% 35%").siblings().css("background-position","")
	})
			

})