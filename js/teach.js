$(function(){
	 $(".index-teach-ul .List").hide();
	$(".index-teach-ul .List").eq(0).show();
		
	$(".cont .te-page").find("li").click(function(){

		var num=$(this).index()
		//var cont_num=$(".index-teach-ul .List").index()
		//alert($(cont_num).index())
		 //$('.pagelist').find('li').eq(num).show("").siblings().hide();
		 $(".index-teach-ul .List").eq(num).show().siblings().hide();
		// $(".index-teach-ul .List").not($(".index-teach-ul .List").eq(num)).hide()
		 	})


	
})