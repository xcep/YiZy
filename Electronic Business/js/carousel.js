//轮播器js
$(document).ready(function(){
	var after,before,
		part = 1,
		bepart = 0;

	timef = setInterval(function()
		{		
		select();
		effect(after,before,part,bepart)
		},5000);

	var effect = function(after,before,part,bepart){
		$(before).fadeOut(2000);
		$(after).fadeIn(2000);
		$('#leader').find('span').eq(part-1).css('opacity','0.8');
		$('#leader').find('span').eq(bepart).css('opacity','0.4');
	}
	//转换效果

	var select = function(){
		switch(part){
			case 1 :before = '.part1' ; after = '.part2' ; bepart = 0 ; part = 2;break
			case 2 :before = '.part2' ; after = '.part3' ; bepart = 1 ; part = 3;break
			case 3 :before = '.part3' ; after = '.part1' ; bepart = 2 ; part = 1
		}
	}
	//判断当前轮播器显示的part，并赋值after、before，before为淡出的元素类，after为淡入的元素类

	$('#leader').find('span').click(function(){
		var order = $(this).index();//点击时获取该元素的位置
		clearInterval(timef);//清空上一个setinterval
		$('#leader').find('span').css('opacity','0.4');//将导航器的样式恢复
		$(this).css('opacity','0.8');//点击元素的样式修改
		switch(order){//根据点击元素的位置选择效果
			case 0 :$('.part1').fadeIn(2000);
					$('.part2,.part3').fadeOut(2000);
					part = 1;
					break
			case 1 :$('.part2').fadeIn(2000);
					$('.part1,.part3').fadeOut(2000);
					part = 2;
					break
			case 2 :$('.part3').fadeIn(2000);
					$('.part1,.part2').fadeOut(2000)
					part = 3
		}
		timef = setInterval(function()
		{		
		select();
		effect(after,before,part,bepart)
		},5000);//重新开始setinterval
	})
})