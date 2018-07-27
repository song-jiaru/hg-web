$(function(){
$(".jt-btmline ").find("a").click(function(){
		

		var Nav=$(this).index();
		var Cont=$(".sy-all .P-C").eq(Nav)
		//($(Cont).index())
		$(this).css("background","rgb(35, 26, 106)").siblings().css("background","")
		$(this).css("color","#fff").siblings().css("color","")
		$(Cont).show().siblings().hide()

		return false;

	
	})


$(".index-teach-ul .List").hide();
	$(".index-teach-ul .List").eq(0).show();
	alert($(".index-teach-ul .List").eq(0).html())	
	$(".te-page ul li").click(function(){

		var num=$(this).index();
		var cont_num=$(".index-teach-ul .List").index()
	   
		 //$('.pagelist').find('li').eq(num).show("").siblings().hide();
		 $(" .te-page li").eq(num).css("background","#1a0d7c").siblings().css("background","")
		 $(" .te-page li").eq(num).css("color","#fff").siblings().css("color","")
		 $(".index-teach-ul .List").eq(num).show().siblings().hide();
		// $(".index-teach-ul .List").not($(".index-teach-ul .List").eq(num)).hide()
		 	})