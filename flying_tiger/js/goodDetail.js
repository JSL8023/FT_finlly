//三级菜单


$(function(){
	
	$(".allGoods").hover(function(){
		$(".menu_23dao").show()
	},function(){
		$(".menu_23dao").hide()
	}
	)
	
	
	$(".menu_23dao div").hover(function(){
			$(this).children(".third_menu").addClass("dispblock").parent().siblings().children(".third_menu").removeClass("dispblock")
			$(this).find("li").addClass("menu_firstBorder").parent().siblings().find("li").removeClass("menu_firstBorder")
	},function(){
			$(this).children(".third_menu").removeClass("dispblock")
			$(this).find("li").removeClass("menu_firstBorder")
	})
	
	
	$(".close_menu").click(function(){
			$(".menu_23dao").hide()
	})
	
	
	
	
	
})



//加入购物车
$(function(){
	$(".btncar").click(function(){

		
//		取商品信息加入cookie
				var goodId = $(".goodNaMe").text();
				var goodName =  $(".goodNaMe").text();
				var goodPrice = $(".goodMoN").text();
				var goodNum = $(".buy_it .ui_quantity_txt").val();
				var goodImg = $(".goodImG").attr("src");
				//判断购物车是否有商品
				var commodity = $.cookie('commodity') ? $.cookie('commodity') : "{}";
				var goods = JSON.parse(commodity);
				var allGoodsNum = 0;
				
				
				
				if(goodId in goods){
					goods[goodId].num =  parseInt(goods[goodId].num)+ parseInt(goodNum)
				} else {
					goods[goodId] = {
						id : goodId,
						name : goodName,
						price : goodPrice,
						num : goodNum,
						img : goodImg
					}
				}
//				清空购物车内容
				var zhongjiaArr=[];
				var shpZJG=0;
				$(".appenddl").html("")
//				购物车所有商品数量
				for(var j in goods){
						allGoodsNum = allGoodsNum +parseInt(goods[j].num);
						zhongjiaArr[j]=goods[j].num*goods[j].price;
						$(".appenddl").append("<dl class=\"shoppingDl\"><dt class=\"imgstyle\"><img src=\""+goods[j].img+"\"/></dt><dd><div class=\"shopingName\">"+goods[j].name+"</div><div class=\"shopingNameB\"><span>￥</span><span class=\"shoppingmony\">"+goods[j].price+"</span>x<em class=\"shoppingNum\">"+goods[j].num+"</em></div></dd></dl>")		
					}
					$(".car_num").text(allGoodsNum);
				//	商品总价
				for (var w in zhongjiaArr) {
					shpZJG+=zhongjiaArr[w]
				}
				$(".shoppingZJ").text(shpZJG);
				
				
				$.cookie("commodity", JSON.stringify(goods), {expires:7,path:'/'});
				var jinoGoi = confirm("加入购物车成功,是否跳转至结算页？");
					if (jinoGoi) {
						location.href = "shopCar.html"
					}else{
						$(".car_num").text(allGoodsNum);
					}
	
	
	
	
	
	
	
	})
	
//	加入购物车结束
	
	
	
	
	
	
	
	
	
	
	
	
		
})



$(function(){
//	地址点击事件
//	点击显隐事件
	var index = 0;/*判断或者toggle都行*/
	$(".kuchun .lbc .dizhi span").click(function(){
		if (index==0) {
			$(".kuchun .lbc .dizhi").addClass("adddizhi")
			$(".kuchun .lbc .dizhi span").addClass("addspan")
			index=1
		}else if(index==1){
			
			$(".kuchun .lbc .dizhi").removeClass("adddizhi")
			$(".kuchun .lbc .dizhi span").removeClass("addspan")
			index=0
		}

		$(".kuchun .lbc .huoxing").slideToggle(100)
	})
	
//	点击空白隐藏!!!!
$("body").on("click",function(event){ 
	if (index==1) {	
//	alert(event.target.className)
	/*||event.target.className.indexOf("huoxing")<=-1*/
		if(event.target.className.indexOf("addspan")<=-1&&event.target.className.indexOf("huoxing")<=-1&&event.target.className.indexOf("benkuidekonbai")<=-1){
//			if (event.target.className.indexOf("huoxing")<=-1&&event.target.className.indexOf("benkuidekonbai")<=-1) {
				index=0
				$(".kuchun .lbc .dizhi").removeClass("adddizhi")
				$(".kuchun .lbc .dizhi span").removeClass("addspan")
				$(".kuchun .lbc .huoxing").css({"display":"none"})
//			}				
		}
	}
}); 
	
		
//	点击内容隐藏事件
	$(".kuchun .lbc .huoxing span").click(function(){
		index=0
		$(".kuchun .lbc .dizhi").removeClass("adddizhi")
		$(".kuchun .lbc .dizhi span").removeClass("addspan")
		$(".kuchun .lbc .huoxing").css({"display":"none"})
	})
//加入收藏	
	$(".btnbox .jion_shouchang").click(function(){
		
		$(".btnbox .jion_shouchang").css({"display":"none"});
		$(".btnbox .over_shouchang").css({"display":"block"});
		return false;
	})
	
	
//	商品选择
$(".choseColor li").click(function(){	
	$(this).addClass("selected").siblings().removeClass("selected");
	$(".yanshe strong").eq(0).text($(this).text());
	return false;
})
$(".choseSize li").click(function(){	
	$(this).addClass("selected").siblings().removeClass("selected");
	$(".yanshe strong").eq(1).text($(this).text())
	return false;
})	

//总价钱
var mony = parseInt($(".yanshe .money_69").text());
var num = parseInt($(".buy_it .ui_quantity_txt").val());
var zhongjia = mony*num;
$(".buy_it .ui_quantity_redu").click(function(){
	if (num==1) {
		alert("商品数量不可小于1")
	} else{
		num--;
		$(".yanshe .money_69").text(mony*num)
		$(".buy_it .ui_quantity_txt").val(num)
	}
})


$(".buy_it .ui_quantity_plus").click(function(){
	if (num==5) {
		alert("商品数量不可大于5")
	} else{
		num++;
		$(".yanshe .money_69").text(mony*num)
		$(".buy_it .ui_quantity_txt").val(num)
	}
})





//返回顶部	
$(".back_top").click(function(){
	$("html,body").animate({"scrollTop":0},500)  
})
	
//选项卡
$(".xuan_ul li").mouseover(function(){
	$(this).css({"background":"#c7012c","color":"#fff"}).siblings().css({"background":"#ccc","color":"#000"})
	$(this).addClass("shuijiao").siblings().removeClass("shuijiao")
	$(".XXallgood ul").eq($(this).index()).addClass("showUl").siblings().removeClass("showUl")
	
})

$(".xuanxiangka .XXallgood ul li").mouseover(function(){
	$(this).children(".wenzhi").addClass("hidediv").parent().siblings().children(".wenzhi").removeClass("hidediv")
	$(this).find("dl").addClass("showUl").parent().parent().siblings().find("dl").removeClass("showUl")
})
	
	
//动态加载图片
var jasonNum=0;
$(window).scroll(function(){
//	console.log($(window).scrollTop()+"盒子高度"+$(".centerAll .top2_l").offset().top)
	if ($(window).scrollTop()>$(".centerAll .top2_l").offset().top) {
		
		$(".back_top").fadeIn(500)
		
		$.get("../json/goodDetail.json",function(msg){
			var goods = msg;
			for(var i in goods)
			{	
				if (jasonNum==0) {
					if (goods[i].num!=1) {
						$(".AjaximgBox").append("<img src=\""+goods[i].img+"\"/>");
					}else{
						$(".AjaximgBox").append("<img src=\""+goods[i].img+"\"/>");
						jasonNum++
					}
				}

			}
		});
	}else{
		$(".back_top").fadeOut(500)
	}
			
})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
