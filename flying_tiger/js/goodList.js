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





/*
 * 最上的选 项卡选择
 */
$(function(){
	var $chioce_left = $("#chioce_left"),
		$chioce_right = $("#chioce_right"),
		$first_box = $("#first_box"),
		$second_box = $("#second_box");
	
	$chioce_left.click(function(){
		$second_box.hide();
		$first_box.show();
		$chioce_left.css("background-image","url(../img/goodList/all_pro_curr.png)").css("color","#fff");
		$chioce_right.css("background-image","url(../img/goodList/all_pinpai.png)").css("color","#333");
	});
	
	$chioce_right.click(function(){
		$first_box.hide();
		$second_box.show();
		$chioce_left.css("background-image","url(../img/goodList/all_pinpai.png)").css("color","#333");
		$chioce_right.css("background-image","url(../img/goodList/all_pro_curr.png)").css("color","#fff");
	});

});

	
/*
 * 字母中的选项卡选择
 */
$(function(){
	var $bs = $("#letter").children();
	var $brands = $(".brands_name");
	var index=0;
	var lastIndex = 0;
	
	$bs.click(function(){
		$bs.eq(lastIndex).css("background-image","url(../img/goodList/search.png)");
		$(this).css("background-image","url(../img/goodList/search_curr.png)");
		index = $(this).index();
		$brands.eq(lastIndex).css("display","none");
		$brands.eq(index).css("display","block");
		lastIndex = index;
	});

});


