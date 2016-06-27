
$(function(){
//	alert("函数调用没问题")
	var xIndex = 0;
	$(".signInBoxMain .safeLogin").click(function(e){
		
			if ($.cookie('carts')){
			var carts =$.cookie('carts');
			var goods = JSON.parse(carts);	
			var newname = $(".newclassname").val();
			
			if (newname in goods) {
				location.href = "homePage.html";
			} else{
				alert("无此用户，请重新输入");
				return false;
			}

		}else{
		alert("无cookie，请先注册")
		}
		
	})
	
	
})












































