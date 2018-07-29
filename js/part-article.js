$(function(){
	$(".art-text p").css("font-size","14px")
	$(".part-text .icon_js_c").click(function(){
		var Anum=$(this).index();
		if (Anum==0) {
			$(".art-text p").css("font-size","18px")
		}
		else if (Anum==1) {
			$(".art-text p").css("font-size","14px")
		}
		else{
			$(".art-text p").css("font-size","12px")
		}
		
	})
})