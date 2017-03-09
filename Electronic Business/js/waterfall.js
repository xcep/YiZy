/*瀑布流效果js*/
$(document).ready(function(){
	$('.colum').children('span').append(
		"<p class='detail'>blablablablablabla……</p>"
		)
	$('.colum').children('span').before(
		"<p class='habit'><a>oo</a><span>132</span><a>xx</a><span>5</span></p>"
		)
	//为每个盒子的子元素添加段落
	
	$(window).scroll(function(){
		if( $(window).scrollTop()+$(window).height() == $(document).height()){
			var a1 = '<p class="habit"><a>oo</a><span>132</span><a>xx</a><span>5</span></p><span class="item"><p class="detail">blablablablablabla……</p></span>',
				a2 = '<p class="habit"><a>oo</a><span>132</span><a>xx</a><span>5</span></p><span class="item2"><p class="detail">blablablablablabla……</p></span>',
				a3 = '<p class="habit"><a>oo</a><span>132</span><a>xx</a><span>5</span></p><span class="item3"><p class="detail">blablablablablabla……</p></span>'
			$('.colum').eq(0).children('span:last').after(a3).after(a2).after(a1)
			$('.colum').eq(1).children('span:last').after(a2).after(a1).after(a3)
			$('.colum').eq(2).children('span:last').after(a3).after(a2).after(a1)
			$('.colum').eq(3).children('span:last').after(a2).after(a1).after(a3)
			$('.colum').eq(4).children('span:last').after(a3).after(a2).after(a1)
		habitfun()
		};
	});
	//滚动到底部时在每列后面增加元素

	habitfun = function(){
		$('.habit').find('a').click(function(){
			var num = Number($(this).next('span').html());
			num += 1;
			$(this).next('span').html(num);

			$('.box').children().find('span').find('p').click(function(){
				window.location.href='../html/product detail.html'
			})
		})
	}
	habitfun()		
})	