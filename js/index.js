$(function(){
	var Currindex=0;
	var IsView=false;
	var Ttimeout=null
	//导航栏
    $(".menu .menu_cont_a").each(function(index, element) {
        $(element).hover(function(t){

			if(Ttimeout!=null)  //清除定时器
				clearTimeout(Ttimeout);
			$(".menu .sub-menu").each(function(a, b) {
                if(a!=index){
					$(b).find(".sub-menu").stop(true,true).slideUp(300);
				}


            });
			Isview=true;
			Currindex=index;

			$(this).find(".sub-menu").stop(true,true).slideDown(300).show();//显示

		});

		$(this).mouseleave(function(t){   //
			Ttimeout=setTimeout(function(){
					$(".menu .sub-menu ").slideUp(400);
			},100);
		});
    });
    		
    	
    	   $(".menu li").click(function() {
         $(".menu li").eq($(this).index()).addClass("change").siblings();
 })
 function lun() {
            var container = $('#container');
            var list = $('#list');
            var prev = $('.prev');
            var next = $('.next');
            var index = 1;
            var len = 3;
            var interval = 3600;
            var timer;
            container.mouseover(function(){
               prev.css({'opacity':2,'fiflt':'alpha(opacity=200)'});
               next.css({'opacity':2,'fiflt':'alpha(opacity=200)'});
            });
              container.mouseout(function(){
               prev.css({'opacity':0,'fiflt':'alpha(opacity=100)'});
               next.css({'opacity':0,'fiflt':'alpha(opacity=100)'});
            });
            function animate (offset) {
                var left = parseInt(list.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                list.animate({'left': offset}, 632, function () {
                    if(left > -200){
                        list.css('left', -1264 * len);
                    }
                    if(left < (-1264 * len)) {
                        list.css('left', -1264);
                    }
                });
            }

            function showButton() {
                $("#buttons span").eq(index-1).addClass('on').siblings().removeClass('on');
            }
            function play() {
                timer = setTimeout(function () {
                    next.trigger('click');
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 3) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-1264);
                 showButton();
            });

            prev.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 1) {
                    index = 3;
                }
                else {
                    index -= 1;
                }
                animate(1264);
                 showButton();
            });

            $("#buttons span").each(function () {
                 $(this).bind('click', function () {
                     if (list.is(':animated') || $(this).attr('class')=='on') {
                         return;
                     }
                     var myIndex = parseInt($(this).attr('index'));
                     var offset = -1264 * (myIndex - index);

                     animate(offset);
                     index = myIndex;
                     showButton();
                 })
            });

            container.hover(stop, play);
            play();//轮播图


  };
  lun();
});