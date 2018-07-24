$(function(){
//主导航
	 $('.P-C').hide();
	 
   function GetRequest() {
   var url = location.search; //获取url中"?"符后的字串
//alert(url)
   if (url.indexOf("?") != -1) {    //判断是否有参数
   var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
   strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）     
   $('.P-C').eq(strs[0]).show();
   //var title=['实验实训','科研设施','实验室','实习基地','学生实训室','科研|实验|实训活动'];
  //$("#changing").text(title[strs[0]]);
}
}
GetRequest();
	//$(".sy-all  .P-C").hide()
	//$(".sy-all .P-C").eq(0).show()
	//侧导航
	$(".jt-btmline ").find("a").click(function(){

		var Nav=$(this).index();
		var Cont=$(".sy-all .P-C").eq(Nav)
		$(this).css("background","rgb(35, 26, 106)").siblings().css("background","")
		$(this).css("color","#fff").siblings().css("color","")
		$(Cont).show().siblings().hide()

		return false;

	})

})