$(function(){
    $("#fullpage").mousedown(function(e){
        e.preventDefault();
    })
    $("#fullpage").mouseover(function(e){
        e.preventDefault();
    })
    var ch=$(window).height();
    var num=0;
    var flag=true;
    touch.on("body","swipeup","#fullpage",function(){
        if(!flag){
            return;
        }
        num++;
        if(num==$("#fullpage>section").length){
            num=$("#fullpage>section").length-1;
        }
        $("#fullpage").css({marginTop:-num*ch,transition:"margin 1s ease"});
        flag=false;
    })
    touch.on("body","swipedown","#fullpage",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
        }
        $("#fullpage").css({marginTop:-num*ch,transition:"margin 1s ease"});
        flag=false;
    })
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
    })
})