(function($){
		var plugname = "qresize";
		function detectZoom(){
				  var ratio = 0,
				    screen = window.screen,
				    ua = navigator.userAgent.toLowerCase();
				 
				   if (window.devicePixelRatio !== undefined) {
				      ratio = window.devicePixelRatio;
				  }
				  else if (~ua.indexOf('msie')) {  
				    if (screen.deviceXDPI && screen.logicalXDPI) {
				      ratio = screen.deviceXDPI / screen.logicalXDPI;
				    }
				  }
				  else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
				    ratio = window.outerWidth / window.innerWidth;
				  }
				   if (ratio){
				    ratio =ratio; Math.round(ratio * 100);
				   }
				   return ratio;
		};
		function scaleComponent(ele,scale) {
				ele.css("transform-origin","0 0");
				ele.css("transform","scale("+scale+")");
		};
		var windowMinWidth=960;
		$.fn[plugname] = function() {
			var self=$(this);
			logdata(self);
	  		$(window).resize(function (){
	  			logdata(self);
			});
		};
		function logdata(ele){
			var scale=1;
			if($(window).width()<windowMinWidth){
				scale=$(window).width()/windowMinWidth;
			};
			var str= "windowWidth:"+$(window).width()+"  windowHeight:"+$(window).height();
			var zoom=detectZoom();
			console.log();
			console.log(str);
			ele.html(str+"  <br/>"+"zoom:"+zoom+"scale:"+scale);
			scaleComponent(ele,scale);
		};
})(jQuery);
