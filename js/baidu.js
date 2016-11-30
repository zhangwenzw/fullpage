$(function(){
    var ch=$(window).height();
    var cw=$(window).width();
    var num=0;
    var flag=true;
    //导航
    var flag2=true;
    $(".menu-option").click(function(){
        $(".menu").css({display:"block"});
        if(flag2){
            //菜单变化
            $(".menu-option-uline").css({
                transform:"translate(0,5px) rotate(45deg)"
            })
            $(".menu-option-bline").css({
                transform:"translate(0,-4px) rotate(-45deg)"
            })
            //导航变化
            $(".menu a").each(function(i,obj){
                $(obj).css({
                    opacity:0,
                    animation:"menu .5s linear forwards "+i*0.2+"s"
                })
            })
            flag2=false;
        }else{
            //菜单变化
            $(".menu-option-uline").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".menu-option-bline").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            //导航变化
            $(".menu a").each(function(i,obj){
                $(obj).css({
                    opacity:1,
                    animation:"menu1 .5s linear forwards "+(1.4-i*0.2)+"s"
                })
            })
            flag2=true;
            setTimeout(function(){
                $(".menu").css({display:"none"});
            },6000)
        }
    })

    //全屏
    $("#fullpage").mousedown(function(e){
        e.preventDefault();
    })
    $("#fullpage").mouseover(function(e){
        e.preventDefault();
    })

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
        if(num==0){
            $("section").not($("section").eq(num)).find(".sleft-con").css({
                opacity:0,transform:"translateX(-50px)"
            })
            $("section").not($("section").eq(num)).find(".sright-con").css({
                opacity:0,transform:"translateX(50px)"
            })
        }
        //$("section").each(function(i,obj){
        //    if(i==0){
        //        return;
        //    }
        //    if(i==num){
        //        $(obj).find(".sleft-con").css({opacity:1,transform:"translate(0,0)",transition:"transform 1s ease"});
        //        $(obj).find(".sright-con").css({opacity:1,transform:"translate(0,0)",transition:"transform 1s ease"});
        //
        //    }else{
        //
        //        $(obj).find(".sleft-con").css({opacity:0,transform:"translate(-50px,0)"});
        //        $(obj).find(".sright-con").css({opacity:0,transform:"translate(50px,0)"});
        //    }
        //})
        $("#fullpage").css({marginTop:-num*ch,transition:"margin 1s ease"});
        flag=false;
    })

    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
        $("section").not($("section").eq(num)).find(".sleft-con").css({
            opacity:0,transform:"translateX(-50px)"
        })
        $("section").not($("section").eq(num)).find(".sright-con").css({
            opacity:0,transform:"translateX(50px)"
        })
        if(num==0){
            return;
        }else{
            $("section").eq(num).find(".sleft-con").css({
                opacity:1,transform:"translateX(0px)"
            })
            $("section").eq(num).find(".sright-con").css({
                opacity:1,transform:"translateX(0px)"
            })
        }
    },false)

    //监测浏览器宽度
    $(window).resize(function(){
        ch=$(window).height();
        $("#fullpage>section").height(ch);
        $("#fullpage").css({marginTop:-num*ch,transition:"margin 1s ease"});
        cw=$(window).width();
        if(cw>1000){
            $(".menu a").css({
                animation:"none",
                opacity:0
            })
            $(".menu-option-uline,.menu-option-bline").css({
                transform:"translate(0,0) rotate(0deg)"
            })
        }
    })


})