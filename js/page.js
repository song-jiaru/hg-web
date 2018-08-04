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
                   if(strs==0)
                   {
                   	$(" .first .List ").eq(0).show().siblings().hide();
	                   	$(" .te-page ul li").click(function(){

							var num=$(this).index();
							
							 $(" .te-page li").eq(num).css("background","#1a0d7c").siblings().css("background","")
							 $(" .te-page li").eq(num).css("color","#fff").siblings().css("color","")
							 //
							  $(".firstly  li").eq(num).css("background","#1a0d7c").siblings().css("background","")
							 $(".firstly  li").eq(num).css("color","#fff").siblings().css("color","")
							 $(" .first .List ").eq(num).show().siblings().hide();
						
							 //console.log($(" .third .List  ").eq(num).html());
						});
			

                   }

		                   var Cont=$(".sy-all .P-C").eq(strs)
				
							//($(Cont).index())
							//alert(Cont.index())
							$(".jt-btmline a").eq(strs).css("background","rgb(35, 26, 106)").siblings().css("background","")
							$(".jt-btmline  a").eq(strs).css("color","#fff").siblings().css("color","")
							//$(Cont).show().siblings().hide();
							$(" .first .List ").eq(0).show().siblings().hide();
							$(" .second .List ").eq(0).show().siblings().hide();
							$(" .third .List ").eq(0).show().siblings().hide();
							$(" .fourth .List ").eq(0).show().siblings().hide();
							

							
		 	   }

   			}		

				GetRequest();


	//$(".sy-all  .P-C").hide()  $(".sy-all .P-C").eq(0).show()
		//侧导航
	/*$(".jt-btmline ").find("a").click(function(){
		

		var Nav=$(this).index();
		console.log(Nav)
		var Cont=$(".sy-all .P-C").eq(Nav)
		
		//($(Cont).index())
		//alert(Cont.index())
		$(this).css("background","rgb(35, 26, 106)").siblings().css("background","")
		$(this).css("color","#fff").siblings().css("color","")
		$(Cont).show().siblings().hide();
		$(" .first .List ").eq(0).show().siblings().hide();
		$(" .second .List ").eq(0).show().siblings().hide();
		$(" .third .List ").eq(0).show().siblings().hide();
		$(" .fourth .List ").eq(0).show().siblings().hide();


			
						return false;

	})*/
			

				$(" .te-page ul li").click(function(){

						var num=$(this).index();
						//console.log(num)

						//var cont_num=$(".index-teach-ul .List").index()
					   	 //console.log(cont_num)
						 //$('.pagelist').find('li').eq(num).show("").siblings().hide();
						 //(".third .index-teach-ul").prev().hide();
						 //(".third .index-teach-ul").eq(0).show();
						 $(" .te-page li").eq(num).css("background","#1a0d7c").siblings().css("background","")
						 $(" .te-page li").eq(num).css("color","#fff").siblings().css("color","")
						 //
						  $(".firstly  li").eq(num).css("background","#1a0d7c").siblings().css("background","")
						 $(".firstly  li").eq(num).css("color","#fff").siblings().css("color","")
						 //
						  $(".secondly  li").eq(num).css("background","#1a0d7c").siblings().css("background","")
						 $(".secondly  li").eq(num).css("color","#fff").siblings().css("color","")
						 //
						  $(".thirdly  li").eq(num).css("background","#1a0d7c").siblings().css("background","")
						 $(".thirdly li").eq(num).css("color","#fff").siblings().css("color","")
						 //
						  $(".fourthly  li").eq(num).css("background","#1a0d7c").siblings().css("background","")
						 $(".fourthly  li").eq(num).css("color","#fff").siblings().css("color","")

						 $(" .first .List ").eq(num).show().siblings().hide();
						 $(" .second .List ").eq(num).show().siblings().hide();
						 $(" .third .List ").eq(num).show().siblings().hide();
						 $(" .fourth .List ").eq(num).show().siblings().hide();
						 //console.log($(" .third .List  ").eq(num).html());
				});
			




	


	//$(".index-teach-ul .List").hide();
	//$(".index-teach-ul .List").eq(0).show();
	//alert($(".index-teach-ul .List").eq(0).html())

	 



	
})