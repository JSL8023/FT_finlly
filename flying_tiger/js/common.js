//登陆  cookie
var carts;
$(function(){
	if ($.cookie('carts')) {
//	alert($.cookie("carts"));
	var carts =$.cookie('carts');
	var goods = JSON.parse(carts);	
	for(var i in goods) {
		$(".usernew_left .theUser").text(goods[i].name);
	}
	$(".noUser_left").hide()
	$(".usernew_left").show()
	}else{
		$(".usernew_left").hide()
		$(".noUser_left").show()
	}
	
	
	
	
	$(".tuichu").click(function(){
		$(".usernew_left").hide();
		$(".noUser_left").show();
		$.cookie("carts", "", {expires:-1,path:'/'});
		$.cookie("commodity", "", {expires:-1,path:'/'});
	})
})





$(function(){	
	if ($.cookie('commodity')) {
	var commodity =$.cookie('commodity');
	var goods = JSON.parse(commodity);	
	var allGoodNum =0;
//	alert($.cookie('commodity'))
	var zhongjiaArr=[];
	var shpZJG=0;


	for(var i in goods){
	//	所有商品数量
		allGoodNum = allGoodNum+parseInt(goods[i].num);			
		zhongjiaArr[i]=goods[i].num*goods[i].price;
		$(".appenddl").append("<dl class=\"shoppingDl\"><dt class=\"imgstyle\"><img src=\""+goods[i].img+"\"/></dt><dd><div class=\"shopingName\">"+goods[i].name+"</div><div class=\"shopingNameB\"><span>￥</span><span class=\"shoppingmony\">"+goods[i].price+"</span>x<em class=\"shoppingNum\">"+goods[i].num+"</em></div></dd></dl>")
		
		}
	$(".car_num").text(allGoodNum);
	
//	商品总价
	for (var w in zhongjiaArr) {
		shpZJG+=zhongjiaArr[w]
	}
	$(".shoppingZJ").text(shpZJG);
	
	
	
	
	
	
	
	
	}else{
	$(".car_num").text(0);	
		
	}
	
	
})
