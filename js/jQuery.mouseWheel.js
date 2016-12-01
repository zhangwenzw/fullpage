jQuery.fn.extend({
	mouseWheel:function(up,down){
		this.each(function(i,obj){
			if(obj.attachEvent){
				obj.attachEvent("onmousewheel",scrollFn);//IE  opera
			}else if(obj.addEventListener){
				obj.addEventListener("mousewheel",scrollFn,false);//chrome,safari -webkit
				obj.addEventListener("DOMMouseScroll",scrollFn,false);//firefox -moz-
			}
			function scrollFn(e){
				e=e||window.event;
				if(e.preventDefault){
					e.preventDefault();
				}else{
					e.returnValue=false;
				}
				var f=e.detail||e.wheelDelta;
				if(f==-3 || f==120){
					if(up){
						up.call(this);
					}
				}else if(f==3 || f==-120){
					if(down){
						down.call(this);
					}
				}
			//ff：-3：向上	3:向上
			// alert(e.detail);
			//IE: 120：向上	-120：向下
			// alert(e.wheelDelta);
			}
		})

	}
})