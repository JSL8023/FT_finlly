
$(function(){
	$(".gooDsboxL,.gooDboxB").hover(function(){
		$(".smallGoodsBoxT,.smallGoodsT").stop().animate({width: "300px"},500)
		
	},function(){
		$(".smallGoodsBoxT,.smallGoodsT").stop().animate({width:0},500)
	})
	
})
