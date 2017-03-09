/*登陆注册框的js*/
$(document).ready(function(){
	var html = $("<div id='topbg'><div id='top'><a href='home page.html'>Yizy</a><span><span id='reglog'><a>登陆</a><a>注册</a></span><a id='buy'>个人中心</a><a id='shopping'><img src='../img/shopping cart.jpg'>购物车</a></span></div></div><!--顶部登陆注册栏--><div class='reg-log'><div class='regbg'></div><div class='reg_log'><p><span>登陆</span><span >注册</span></p><div class='reg'><dt>账号</dt><dd>					<input type='text' id='account' class='textinput' autocomplete='off' placeholder='邮箱或手机号码'></dd>	<dt>密码</dt><dd><input type='password' id='password' class='textinput'></dd><dd><input type='button' value='登陆' class='button'></dd></div><!--登陆框--><div class='log'>	<dt>手机/邮箱</dt><dd>					<input type='text' id='tellmail' class='textinput' autocomplete='off' placeholder='手机号码或者邮箱号码'></dd><div class='message'><p class='mes'>可用于登陆和密码找回</p><p class='wrong'><img src='../img/wrong.jpg'>请输入正确的账号格式</p><p class='right'><img src='../img/right.jpg'></p></div><dt>密码</dt><dd><input type='password' id='passwordset' class='textinput' autocomplete='off'></dd><div class='message'><p class='mes'>6-14位字符</p>	<p class='wrong'><img src='../img/wrong.jpg'>请输入正确的密码格式</p><p class='right'><img src='../img/right.jpg'></p></div><dt>验证码</dt>	<dd><input type='text' id='check' class='textinput' autocomplete='off'><img src='../img/check.jpg'>	</dd><div class='message'><p class='mes'>输入图片中的字符</p><p class='wrong'><img src='../img/wrong.jpg'>验证码错误</p></div><dd><input type='button' value='注册' class='button'></dd></div></div></div>")
	$('.out').append(html);

	$('#reglog').children('a').click(function(){
		var regnum = $(this).index();//获取点击的位置
		$('.reg-log').show();//显出注册登陆框		
		if (regnum == 0) {
			regclick()
		}else{
			logclick()
		}
	});

	$('.regbg').click(function(){
		$('.reg-log').hide()
	})//登陆框背景点击时隐藏登陆框

	$('.reg_log').children('p').children('span').click(function(){
		var reglognum = $(this).index();
		if(reglognum == 0){
			regclick()
		}else{
			logclick()
		}
	})//登陆框内登陆注册被点击时切换登陆注册

	$('.log').find('.textinput').focus(function(){
		$(this).parent().next('.message').find('.wrong,.right').hide().end()
										 .find('.mes').show();
	})//input框获取焦点时隐藏wrong、right块，并显示mes块

	$('.log').find('.textinput').blur(function(){
		$(this).parent().next('.message').find('.mes,.wrong,.right').hide().end()
		if($(this).val() != ''){
			if(check(this)){
				$(this).parent().next('.message').find('.right').show()				
			}else{
				$(this).parent().next('.message').find('.wrong').show()
			}
		}
	});//input框失去焦点时验证input框输入的字符串

	$('.log').find('.button').click(function(){
		if($('.log').find('#tellmail').val() == '' || $('.log').find('#passwordset').val() == '' || $('.log').find('#check').val() == ''){
			alert('请将信息填写完整')
		}else{
			if(check($('.log').find('#tellmail').get(0)) && check($('.log').find('#passwordset').get(0)) && check($('.log').find('#check').get(0))){
			    	alert('注册成功');
			    	var account = $('.log').find('#tellmail').val(),
			    		password = $('.log').find('#passwordset').val()
			    	localStorage.setItem('YiZy.account',account);//账户保存到本地
			    	localStorage.setItem('YiZy.password',password);//密码保存到本地
			    	$('.reg-log').hide();//隐藏登陆注册框			    	
			    	$('#reglog').html(account)//将登陆注册的信息换成用户名
			   }else{
			   		alert('信息填写错误')
			   }
		}
	})

	$('.reg').find('.button').click(function(){
		var accountInput = $('.reg').find('#account').val(),
			passwordInput = $('.reg').find('#password').val(),
			account = localStorage.getItem('YiZy.account'),//获取本地存储的账户
			password = localStorage.getItem('YiZy.password');//获取本地存储的密码
		if (accountInput != '' && passwordInput != '') {//判断input框的值是否为空	
			if( accountInput == account){//判断账户
				if( passwordInput == password){//判断密码
					$('#reglog').html(account);
					$('.reg-log').hide();
				}else{
					alert('密码错误')
				}
			}else{
			alert('账号不存在')
			}
		}else{
			alert('请将信息填写完整')
		}
	})

		$('#buy,#shopping,.buy,.collect').click(function(){
			var reglogname = $('#reglog').text()
			if (reglogname != "登陆注册") {
				window.location.href='../html/myself.html'
			}else{
				alert('你还未登录')
			}
		})

	var regclick = function(){
		$('.log').hide();
		$('.reg_log').children('p').children('span').eq(1).removeClass('on')
		$('.reg').show();
		$('.reg_log').children('p').children('span').eq(0).addClass('on');
		$('#account').focus()
	}//注册被点击时调用的函数

	var logclick = function(){
		$('.reg').hide();
		$('.reg_log').children('p').children('span').eq(0).removeClass('on')
		$('.log').show();
		$('.reg_log').children('p').children('span').eq(1).addClass('on')
		$('#tellmail').focus()
	}//登陆被点击时调用的函数


	var check = function(ele){
		if($(ele).attr('id') == 'tellmail'){
			return /^1\d{10}$/.test(ele.value) || /^(\w)*@(\w)*\.(com|cn)$/.test(ele.value);
		}else if($(ele).attr('id') == 'passwordset'){
			return /^(\w){6,14}$/.test(ele.value)                              	
		}else{
			return ele.value == 'uwv6'
		}
	}//正则函数


});