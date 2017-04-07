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
		function scaleComponent(ele,windowWidth,windowHeight) {
			    //var scale;
			    //ele.attr('style', 'transform:scale(' + scale*detectZoom() + ')');
			    console.log("zoom",detectZoom());
			    console.log("windowWidth:"+windowWidth+"  windowHeight:",windowHeight);
		};
		$.fn[plugname] = function() {
			var self=$(this);
			console.log("zoom",detectZoom());
			console.log("windowWidth:"+$(window).width()+"  windowHeight:",$(window).height());
	  		$(window).resize(function () {
	  		  	scaleComponent(self,$(window).width(),$(window).height());
			});
		}
})(jQuery);
