$(document).ready(function(){
window.onload = function(){
	$('.add').click(function(){
		var num = Number($(this).next('span').text()),
			price = Number($(this).parent('td').prev('td').text());
		num +=1;
		$(this).next('span').text(num);
		var sum = num*price;
		$(this).parent('td').next('td').text(sum);
	});

	$('.minus').click(function(){
		var num = Number($(this).prev('span').text()),
			price = Number($(this).parent('td').prev('td').text());
		if (num>1) {
			num -=1;
		}else{
			num=0
		}
		$(this).prev('span').text(num)
		var sum = num*price;
		$(this).parent('td').next('td').text(sum)
	});
}

	$('#me').find('span').hover(function(){
		var index = $(this).index()
		if ( index == 2) {
			$('hr').animate({left:'595'},100)
		}else if( index == 1){
			$('hr').animate({left:'715'},100)
		}else{
			$('hr').animate({left:'475'},100)
		}
	})
	$('#me').find('span').mouseout(function(){
		$('hr').animate({left:'475'},100)
	})
})	