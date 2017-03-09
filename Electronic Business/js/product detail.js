/*product detail的js*/
//第一页
$(document).ready(function(){
	$('#thumbnail').children('img').hover(function(){
		$('.imgon').removeClass('imgon');
		$(this).addClass('imgon');
		var a = $('.imgon').index();
		$('.d_img').children('img').hide();
		$('.d_img').children('img').eq(a).show()
	})/*缩略图hover事件时切换大图图片*/

	$('#size').children('span').click(function(){
		$('#size').find('#on').removeAttr('id','on');
		$(this).attr('id','on');
	})/*尺寸框点击时改变样式*/

	$('#number').children('span').click(function(){
		var number = $(this).index();/*获取点击元素的位置*/
			num = Number($('#numbertext').text());/*获取数量文本框的内容并转化为数值*/
			if (number == '0') {
				num +=1;
			}else if(number == '2'){
				if (num > 2 ) {
					num -=1;
				}else{
					num = 1
				}
			};
			$('#numbertext').text(num)
	})

//第二页
	$('.bb_detail').children('p').children('span').click(function(){
		var index = $(this).index(),//获取点击元素的位置
			on = $(this).attr('id');//获取点击元素的类名
		$('#bb_on').removeAttr('id','bb_on');
		$(this).attr('id','bb_on')
		if(index == 0 && !on){//点击详情时
			$('#comment').hide();
			$('#information').show()
		}else if(index == 1 && !on){//点击评论时
			$('#information').hide();
			$('#comment').show()
		}		
	})
});;;