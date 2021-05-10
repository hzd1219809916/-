//按钮显示与隐藏
		/*$(".box").hover(function(){
			$(".prev").css("display","block");
			$(".next").css("display","block");
		},function(){
			$(".prev").css("display","none");
			$(".next").css("display","none");
		});*/

		//放上去显示
		var i=0;
		$(".nav ul li").hover(function(){
			i=$(this).index();
			$(".con ul li").eq(i).fadeIn(500).siblings().fadeOut(500);//淡入//找到除了当前这个其他所有//淡出
			$(this).addClass("bg").siblings().removeClass("bg");//添加背景
		});
		
		//点击右边箭头切换
		$(".next").click(function(){
			i++;//i=i+1
			if(i>5)
			i=0;
			$(".con ul li").eq(i).fadeIn(300).siblings().fadeOut(300);
			$(".nav ul li").eq(i).addClass("bg").siblings().removeClass("bg");
		});

		$(".prev").click(function(){
			i--;//i=i-1
			if(i<0)
			i=5;
			$(".con ul li").eq(i).fadeIn(300).siblings().fadeOut(300);
			$(".nav ul li").eq(i).addClass("bg").siblings().removeClass("bg");
		});
		function auto(){
			i++;//i=i+1
			if(i>5)
			i=0;
			$(".con ul li").eq(i).fadeIn(500).siblings().fadeOut(500);
			$(".nav ul li").eq(i).addClass("bg").siblings().removeClass("bg");
		}
		setInterval("auto()",5000);