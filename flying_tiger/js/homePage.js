	$(function(){

	/*banner图轮播*/
	var index = 0;
	function show(){
		index++;
		if (index == $(".banner ul li").size()){
						index =0
		}
		
//	改变css属性方法 	$(".banner ul li").eq(index).addClass("lunbo").siblings().removeClass("lunbo");
		$(".hd ul li").eq(index).addClass("on").siblings().removeClass("on");
	/*淡入淡出*/	$(".banner ul li").eq(index).fadeIn(300).siblings().fadeOut(0);
	
	}
	var time=setInterval(show,1000);
	
	
	$(".banner ul li,.dingwei,.hd ul li").mouseover(function(){
		clearInterval(time);
	})
	
	
	$(".hd ul li").click(function(){		
		$(this).addClass("on").siblings().removeClass("on");
		index = $(this).index();
		$(".banner ul li").eq(index).fadeIn(300).siblings().fadeOut(0);
//		$(".banner ul li").eq(index).addClass("lunbo").siblings().removeClass("lunbo");
		index--;
	})
	
	
	
	$(".banner ul li,.dingwei,.hd ul li").mouseout(function(){
		clearInterval(time);
		time = setInterval(show,2000);
	})
	
	
	/*$(".hd ul li").mouseover(function(){
		clearInterval(time);
	})
	

	
	$(".hd ul li").mouseout(function(){
		time = setInterval(show,1000);
	})*/
	
//	左右点击事件
	$(".prev").click(function(){
		clearInterval(time);
		index-=2;
		show();
	})
	$(".next").click(function(){
		clearInterval(time);
		show();
	})
	
	
	
     /*定时/倒计时*/

    function displayTime(){
        var elt = document.getElementById("clock");
        if(leftTime<0){
            elt.innerHTML = "Over";
        }
        else{
            var endTime = new Date("2016/06/9 10:00:00");
            var now = new Date();
            var leftTime = endTime.getTime() -now.getTime();
            var ms = parseInt(leftTime%1000).toString();
            leftTime = parseInt(leftTime/1000);
			 var d = Math.floor(leftTime / 3600 /24 );
            var o = Math.floor(leftTime /3600%24 );
            
            var m = Math.floor(leftTime/60%60);
            var s = leftTime%60;
			if (d <= 9) minute = '0' + d;
	       if (o <= 9) second = '0' + o;
		    if (m <= 9) second = '0' + m;
			 if (s <= 9) second = '0' + s;
		   
            elt.innerHTML =d + "天:"+ o + "小时:" + m + "分:" + s + "秒";
            if(s<0){document.getElementById('clock').innerHTML='0 天:0 时:0 分:0秒';return;};
            setTimeout(displayTime,100);
        }
    }
    displayTime();

	
	
//	小轮播图  方法一  后动方块
	/*var index2=0;
	function lunbo2(){
		$(".home_groupbuy_bd ul").delay(1000).animate({"left":"-227px"},500,function(){
			index2++;
			$(".example2 ol li").eq(index2).addClass("seleted").siblings().removeClass("seleted");
		}).delay(1000).animate({"left":"0px"},500,function(){
			index2--;
			$(".example2 ol li").eq(index2).addClass("seleted").siblings().removeClass("seleted");
		})
	}
	var timeSmall = setInterval(lunbo2,1500);
	
	$(".example2 ul li").mouseover(function(){
		clearInterval(timeSmall);
		if (index2==0) {
			$(".home_groupbuy_bd ul").delay(1000).animate({"left":"-227px"},100).stop();
		} else{
			$(".home_groupbuy_bd ul").delay(1000).animate({"left":"0"},100).stop();
		}
	})
	
	$(".example2 ul li").mouseout(function(){
		clearInterval(timeSmall);
		timeSmall = setInterval(lunbo2,1500);
	})*/
	
//	小轮播图  方法一  先动方块
	var index2=0;
	function lunbo2(){
		if (index2==0) {
			$(".example2 ol li").eq(index2).addClass("seleted").siblings().removeClass("seleted");
			$(".home_groupbuy_bd ul").animate({"left":"0px"},500).delay(1000);
			index2++;
		} else if(index2==1){
			$(".example2 ol li").eq(index2).addClass("seleted").siblings().removeClass("seleted");
			$(".home_groupbuy_bd ul").animate({"left":"-227px"},500).delay(1000);
			index2--;
		}	
		
	}	
	
	var timeSmall = setInterval(lunbo2,1500);
	
	$(".example2 li").mouseover(function(){
		clearInterval(timeSmall);
	})
	
	$(".example2 ul li,.example2 ol li").mouseout(function(){
		clearInterval(timeSmall);
		timeSmall = setInterval(lunbo2,1500);
	})
	
	$(".example2 ol li").mouseover(function(){
//		alert(index2)
		index2=$(this).index();
		if (index2==0) {
			$(".example2 ol li").eq(index2).addClass("seleted").siblings().removeClass("seleted");
			$(".home_groupbuy_bd ul").animate({"left":"0px"},500);
			index2++;
		} else if(index2==1){
			$(".example2 ol li").eq(index2).addClass("seleted").siblings().removeClass("seleted");
			$(".home_groupbuy_bd ul").animate({"left":"-227px"},500);
			index2--;
		}
	})
	
	
	
	

		
//楼梯

		// 开关是否是点击，默认是否
		var isclick = false;
		// 左侧楼梯导航点击
		$("#xiding ul li:not(:first)").click(function() {
			isclick = true;			
			//计算top
			var li = $("#xiding ul li").eq($(this).index());
			var num_index = $(this).index();
			var _top = $(".wid_1210").eq($(this).index()).offset().top;
			$("html, body").stop().animate({scrollTop: _top}, 500, function() {
				isclick = false;
//				下边的绿色span出现
				li.children().children().addClass("newbgd").parent().parent().siblings().children().children().removeClass("newbgd");
			});
		})
		// 返回顶部
		$("#xiding ul li").eq(0).click(function() { 
			$("html, body").animate({scrollTop: 0},600); 
		})
		
		
		// 右侧滚动条滚动，左部导航改变,改变span背景
		$(window).scroll(function() {
			if(!isclick){
				var height = $(window).scrollTop();
				$(".wid_1210").each(function() {
					if(height >= ($(this).offset().top+$(this).outerHeight()/2)) {
						var li = $("#xiding ul li").eq($(this).index());
						var num_index = $(this).index();
						
						li.children().children().addClass("newbgd").parent().parent().siblings().children().children().removeClass("newbgd");
					}
				})
			} 	
		})




//	吸顶
	
	$(window).scroll(function(){
		var wid = $(".wid_1210").eq(1).offset().top;
		var wid1 = parseInt($(".wid_1210").eq(0).outerHeight())  ;
		var scrollTop = parseInt($(window).scrollTop());
		var itop = $("#xiding").offset().top;
		var xidingtop = $("#xiding").outerHeight();
		var imgtop =parseInt($(".wid_1210").eq($(".wid_1210").size()-1).offset().top) ;
		var imgotop = parseInt($(".wid_1210").eq($(".wid_1210").length-1).outerHeight());

		if (scrollTop>wid-wid1) {
			$("#xiding").addClass("xiding_fixed").fadeIn(1000);
						
			if (scrollTop>=imgtop+xidingtop) {
				$("#xiding").removeClass("xiding_fixed");
				$("#side_8 span").removeClass("newbgd");;
				
				
				
			}else{
				$("#xiding").addClass("xiding_fixed").fadeIn(1000);
			}
						
		} else{
			$("#xiding").removeClass("xiding_fixed");
		}
	
	
	})
//	以上      吸顶结束	
		

//cookie样式加入共用js里了
/*var carts =  $.cookie('carts') ? $.cookie('carts'):"{}";
var goods = JSON.parse(carts);
alert($.cookie("carts"));	
var	goodId = "#yonghuming"

for(i in goods) {	
	$(".usernew_left a").text(goods[i].name);
}*/


/*if ($.cookie('carts')) {
	var carts =$.cookie('carts');
	var goods = JSON.parse(carts);	
	for(i in goods) {	
		$(".usernew_left .theUser").text(goods[i].name);
	}
	$(".noUser_left").hide()
	$(".usernew_left").show()
} else{
	$(".usernew_left").hide()
	$(".noUser_left").show()
}
	
$(".tuichu").click(function(){
	$(".usernew_left").hide()
	$(".noUser_left").show()
	$.cookie("carts", "", {expires:-1,path:'/'})
})*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})


