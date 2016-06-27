//获取cookie并动态加载
$(function(){	
	if ($.cookie('commodity')) {
//	alert($.cookie("commodity"));
	var commodity =$.cookie('commodity');
	var goods = JSON.parse(commodity);	
		for(var i in goods){
			var qian = goods[i].num*goods[i].price
			$(".appendTr").append("<tr class=\"tr2\"><td class=\"td1\"><input type=\"checkbox\" value=\"\" /></td><td class=\"td2\"><a href=\""+"goodDetail.html"+"\"><img src=\""+goods[i].img+"\"\"><span></span></a></td><td class=\"td3\"><a href=\"\" class=\"deleteNaMe\">"+goods[i].name+"</a><em></em></td><td class=\"td4\"><input type=\"text\" value=\""+goods[i].num+"\" /><button class=\"add\">+</button><button class=\"minus\">-</button></td><td class=\"td5\">￥"+goods[i].price+"</td><td class=\"td6\">￥"+qian+"</td><td class=\"td7\"><a href=\"\" class=\"del\">删除</a>|<a href=\"\">收藏</a></td></tr>")	
	
		}
	}else{
		
		$("#empty_box").show();
		$(".goodPage,.yes_or").hide();
		
		
	}
	
		
})

$(function(){
	
	/*
	 * 点击消失---我挑选的商品
	 */
	$("#tips_btn").click(function(){
		$("#tips_btn").parents(".tips").hide();
	});
	
	/*
	 * 增加数量
	 */
	$(".add").click(function(){
		var val = $(this).prev().val();
		val = parseInt(val)+1;
		$(this).prev().val(val)
	});
	
	/*
	 * 减少数量
	 */
	$(".minus").click(function(){
		var val = $(this).siblings("input").val();
		val = parseInt(val)-1;
		if(val>=0){
			$(this).siblings("input").val(val);
			
		}
	});
	
//	更新num值  出入cookie  封装未成功  改用原始方案
	/*function gengxinNum(){
			var commodity =$.cookie('commodity');
			var goods = JSON.parse(commodity);
			var deleteName=$(this).parents("tr").find(".deleteNaMe").text();
			for (var q in goods) {
				if (goods[q].id==deleteName) {
					goods[q].num = $(this).val();
					alert($(this).val())
					$.cookie("commodity",JSON.stringify(goods),{expires: 7, path: '/'})
				}
			}
		}*/
	
	
	
	
	/*
	 * 计算价格
	 */

	
//	1多选按钮 2图 3名称      4数量 5单价 6总价    7操作(删除/收藏)
	$(".td4").find("input").keyup(function(){
		var theMony = 0;
		var allMony = new Array();
		for (var i=1;i<$("tr").size();i++) {			
			var price = $(".td5").eq(i).text().substr(1),
			    num = $(".td4").find("input").eq(i-1).val()
			$(".td6").eq(i).text("￥"+price*num)
			allMony[i] = price*num;
		}
		for (var j in allMony) {
			theMony +=allMony[j]
		}		
		$("#all_money").find("i").text(theMony)	
//		动态更新数量
			var commodity =$.cookie('commodity');
			var goods = JSON.parse(commodity);
			var deleteName=$(this).parents("tr").find(".deleteNaMe").text();
			for (var q in goods) {
				if (goods[q].id==deleteName) {
					goods[q].num = $(this).val();
//					alert($(this).val())
					$.cookie("commodity",JSON.stringify(goods),{expires: 7, path: '/'})
				}
			}
	})
	
	
	
	$(".add,.minus").click(function(){
		var theMony = 0;
		var allMony = new Array();
		for (var i=1;i<$("tr").size();i++) {
			var price = $(".td5").eq(i).text().substr(1),
			    num = $(".td4").find("input").eq(i-1).val()
				
			$(".td6").eq(i).text("￥"+price*num)
			allMony[i] = price*num			
		}
		
		for (var j in allMony) {
			theMony +=allMony[j]
		}
		
		$("#all_money").find("i").text(theMony)
		
//		动态更新数量
			var commodity =$.cookie('commodity');
			var goods = JSON.parse(commodity);
			var deleteName=$(this).parents("tr").find(".deleteNaMe").text();
			for (var q in goods) {
				if (goods[q].id==deleteName) {
					goods[q].num =$(this).siblings("input").val();
//					alert($(this).siblings("input").val())
					$.cookie("commodity",JSON.stringify(goods),{expires: 7, path: '/'})
				}
			}
			
	})
	
	var theMony = 0;
	for (var i=1;i<$("tr").size();i++) {
		theMony+= parseInt($(".td6").eq(i).text().substr(1))      
	}
	$("#all_money").find("i").text(theMony)
	
	/*
	 * 删除商品
	 */
	$(".del").click(function(e){
		e.preventDefault();
		var deleteName=$(this).parents("tr").find(".deleteNaMe").text();
		
		var flag = confirm("确定删除该商品吗？");
		
		if(flag){
			var commodity =$.cookie('commodity');
			var goods = JSON.parse(commodity);
//		清除此件商品cookie   老师教的  先取不同新建jason 再重新存入cookie
			var delectAftergoods = {};
			for (var c in goods) {
				if (goods[c].id!=deleteName) {
					delectAftergoods[goods[c].id]={
						id :goods[c].id,
						name:goods[c].name,
						price : goods[c].price,
						num : goods[c].num,
						img : goods[c].img
					}
					$.cookie("commodity",JSON.stringify(delectAftergoods),{expires: 7, path: '/'})
//					alert($.cookie('commodity'))	
				} 
			}
						
//			移除此行
			$(this).parents("tr").remove();						
//			为0清空购物车
			if($(".my_goods tr").size() == 1){
			$("table,#all_money,.yes_or,#empty_box").toggle();
			$.cookie("commodity", "", {expires: -1, path: '/'});
			}
//		删除后更新总价		
		var theMony = 0;
		for (var i=1;i<$("tr").size();i++) {
			theMony+= parseInt($(".td6").eq(i).text().substr(1))      
		}
		$("#all_money").find("i").text(theMony)
		return false;
			
			
			
			
		}	
	});
	
	/*
	 * 清空购物车  
	 */
	$("#clear_car").click(function(){
		var flag = confirm("确定清空购物车吗？");
		if(flag){
			$("table,#all_money,.yes_or,#empty_box").toggle();
			$.cookie("commodity", "", {expires: -1, path: '/'});
		}
		
	});
	
	
	/*
	 * 全选
	 */
	$("#all_btn").click(function(){
//		当全选被点击时
		if($(this).prop("checked")){/*prop==attr 获取全选按钮的状态数值*/
			$(".td1 :checkbox").not("#all_btn").prop("checked",true);
		}else{
			$(".td1 :checkbox").not("#all_btn").prop("checked",false);
		}
	});
	
	$(".td1 :checkbox").not("#all_btn").click(function(){
		var flag = true;
		$(".td1 :checkbox").not("#all_btn").each(function(){
			if(!$(this).prop("checked")){
				flag = false;
				return false;
			}
		});
		if(flag){
			$("#all_btn").prop("checked",true)
		}else{
			$("#all_btn").prop("checked",false)
		}
	});
	
	
	
	
	
})
