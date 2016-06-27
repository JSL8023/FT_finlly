$(function(){
	
var	$password = $("[name='password']"),
	$password2 = $("[name='password2']"),
	$email = $("[name='email']"),
	$referee = $("[name='daxiaoxie']"),
	$activity_code = $("[name='dama']"),
	$id_code=$("[name='yanzhengma']"),
	yhm =mima=quermm=yzma=xy=0;
//	获得光标后出现td3
	$(".boxMain .td2B").focusin(function(){
		$(this).next(".td3A").css({"visibility":"visible"})	
	})
	
	
	/*$(this).parent().next(".td3A").text("用户名不能为空")*/
//	这网站没有.change功能
		/*$("[name='user']").change(function(){
		if () {
			
		}
		$(this).parent().next(".td3A").text("用户名不能为空")
	})*/
	
	
	
//用户名	
	$("[name='user']").focusin(function(){
		$(this).parent().next(".td3A").text("4-20位字符，可以由英文、数字组成")
	})
	
	
	
	$("[name='user']").blur(function(){		
		if($("[name='user']").val().length<4||$("[name='user']").val().length>20){
			if($("[name='user']").val().length==0){
				$(this).parent().next().text("用户名不能为空");
			}else{
				$(this).parent().next().text("请输入4-20位有效字符");
			}
		}else{
			if(/^\w{4,20}$/.test($("[name='user']").val())){
				$(this).parent().next().text("");
				yhm=1;
			}else{
				$(this).parent().next().text("格式错误");
			}
		}	
	})
	
	
	
	
//密码
$password.keyup(function(){
	if($password.val().length<6||$password.val().length>16){
		if($password.val().length==0){
			$(this).parent().next().text("密码不能为空");
		}else{
			$(this).parent().next().text("请输入6-16位有效字符");
		}
	}else{
		if(/^[0-9]+$/.test($password.val()) || /^[a-z]+$/.test($password.val()) || /^[A-Z]+$/.test($password.val())){
			$(this).parent().next().text(""); 
		}
		if(/\d+/.test(this.value) && (/[a-z]+/.test(this.value) || /[A-Z]+/.test(this.value)) ){
			$(this).parent().next().text("");
		}
		if(/\d+/.test(this.value)  && /[a-zA-Z]+/.test(this.value) && /[^\w]+/.test(this.value)){
			$(this).parent().next().text("");
		}
		mima =1;
	}
	if(this.value != $password2.val()&&$password2.val().length!=0){
		$password2.parent().next().text("两次输入的密码不一致");
	}
	if(this.value == $password2.val()){
		$password2.parent().next().text("");
	}
	
});


//确认密码
$password2.blur(function(){
	if(this.value != $password.val()&&$password2.val().length!=0){
		$password2.parent().next().text("两次输入的密码不一致");
	}
	if($password2.val().length==0){
		$password2.parent().next().text("请再次输入密码");
	}
	if(this.value == $password.val()&&$password2.val().length!=0){
		$password2.parent().next().text("");
		quermm=1;
	}
});

//邮箱change
$email.blur(function(){
	if(this.value.length==0){
		$email.parent().next().text("请输入常用邮箱，用来找回密码等")
	}else{
		if(!/^\w+@[a-zA-Z0-9]+(\.[a-z]{2,}){1,}$/.test(this.value)){
			$email.parent().next().text("邮箱格式不正确");
		}else{
			$email.parent().next().text("");
		}
	}
});

//推荐人
$referee.blur(function(){
	$(this).parent().next().css("visibility","hidden");
});

//活动代码
$activity_code.blur(function(){
	$(this).parent().next().css("visibility","hidden");
});

function yAnZM(){
	var imgYZMNum = parseInt(Math.random()*9)
 	$(".yZMBox img").eq(imgYZMNum).addClass("img_the_show").siblings().removeClass("img_the_show")
}
//网页刷新换图
yAnZM()

//点击换图

$(".huanImg").click(function(){
	yAnZM()
})

//验证码
$id_code.keyup(function(){
    var imgYzm=parseInt($(".img_the_show").attr("name"));    
	if(this.value.length==0){
		$id_code.parent().next().text("请输入下面中的数字");
	}else{
		if(this.value == imgYzm){
			$id_code.parent().next().text("验证码正确");
			yzma=1;
		}else{
			$id_code.parent().next().text("验证码输入不正确");
		}
	}
});

$("#checkbox").click(function(){
	if ($("#checkbox").prop("checked")) {
		xy=1;
	} else{
		xy=0
	}
})




//用户名加入cookies	
$(".boxMain .tijiao").click(function(e){
	var goodId = $("#yonghuming").val();
	var goodName = $("#yonghuming").val();
	//判断购物车是否有商品
	var carts = $.cookie('carts') ? $.cookie('carts') : "{}";
	var goods = JSON.parse(carts);
	if(goodId in goods){
		alert("用户名已被注册,请更换用户名");
		return false;
	}else{
		goods[goodId] ={
			name : goodName
		}
	}
	
	
	if (yhm==1&&mima==1&&quermm==1&&yzma==1&&xy==1) {
				
								
				$.cookie("carts", JSON.stringify(goods), {expires:7,path:'/'});
				alert("恭喜您注册成功！");
	}else{
		if (yhm!=1){
			alert("用户名错误，请重新输入");
		} else if(mima!=1){
			alert("密码有误，请重新输入");
		}else if(quermm!=1){
			alert("两次密码不一致，请重新输入");
		}else if(yzma!=1){
			alert("验证码错误，请重新输入");
			yAnZM()
		}else if(xy!=1){			
			alert("请阅读并同意飞虎乐购用户协议");
			yAnZM();
			yzma=0;
			
		}
//		 e.preventDefault(); 
		return false;
	}
})
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
 