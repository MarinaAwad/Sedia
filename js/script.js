$(document).ready(function(){
	var sc = $("#scrol");  // mwgod fe el style bs desplay = none
	$(window).scroll(function(){
		if($(this).scrollTop() >= 400){
			sc.show(300);
		}
		else{
			sc.hide(300);
		}
		
		if($(this).scrollTop() >= 700){
			$("nav").css("background-color","#8B0110");
		}
		else{
			$("nav").css("background-color","rgba(10,0,0,0.1");
		}
	});
	sc.click(function(){
		$("html,body").animate({
			scrollTop : 0
		},1000);
	});
});


		var options = {
		useEasing: true, 
		useGrouping: true, 
		separator: '', 
		decimal: '', 
		};
		var demo = new CountUp('target-no1', 0, 2015, 0, 2.5, options);
		if (!demo.error) {
		demo.start();
		} else {
		console.error(demo.error);
		}
		var demo1 = new CountUp('target-no2', 0, 850, 0, 2.5, options);
		if (!demo1.error) {
		demo1.start();
		} else {
		console.error(demo1.error);
		}
		var demo2 = new CountUp('target-no3', 0, 500, 0, 2.5, options);
		if (!demo2.error) {
		demo2.start();
		} else {
		console.error(demo2.error);
		}
		var demo3 = new CountUp('target-no4', 0, 12, 0, 2.5, options);
		if (!demo3.error) {
		demo3.start();
		} else {
		console.error(demo3.error);
		}

	
