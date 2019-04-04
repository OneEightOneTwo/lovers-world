$(function(){

    //获取本地存储
    let key = JSON.parse(localStorage.getItem('user'));
    console.log(key.user)

    $('#user').html(key.user);


    $(".meun-item").click(function () {
        $(".meun-item").removeClass("meun-item-active");
        $(this).addClass("meun-item-active");
        var itmeObj = $(".meun-item").find("img");
        itmeObj.each(function () {
            var items = $(this).attr("src");
            items = items.replace("_grey.png", ".png");
            items = items.replace(".png", "_grey.png")
            $(this).attr("src", items);
        });
        var attrObj = $(this).find("img").attr("src");
        ;
        attrObj = attrObj.replace("_grey.png", ".png");
        $(this).find("img").attr("src", attrObj);
    });


    //点击切换页面
    $(".meun-item").click(function(){
        let index=$(this).index()-3;
        $(".tab-pane").attr("class","tab-pane");
        $(".tab-pane").eq(index).attr("class","tab-pane active");
    })

    //点击添加
    $(".listtian").click(function(){
        $(".listtiantan").css("display","block");
    })

    //点击修改
    $(".listgai").click(function(){
        $(".listgaitan").css("display","block");
    })

    //点击删除
    $(".listsan").click(function(){
        var index=$(this).index()-1;
        $(".listsantan").css("display","block");
        $(".baocun").click(function(){
        $(".list").eq(index).remove();   
        })
    })

     //添加用户
     $(".usertian").click(function(){
        $(".usertiantan").css("display","block");
    })

    //修改用户
    $(".usergai").click(function(){
        $(".usergaitan").css("display","block");
    })

    //删除用户
    $(".usersan").click(function(){
        var index=$(this).index()-1;
        $(".usersantan").css("display","block");
        $(".baocun").click(function(){
            $(".list").eq(index).remove();   
        })
    })

    //点击取消
    $(".quxiao").click(function(){
        $(this).parent().parent().parent().parent().css("display","none");
    })

    //点击XX
    $(".xx").click(function(){
        console.log(1);
        $(this).parent().parent().parent().parent().parent().css("display","none");
    })

        //点击保存
        $(".baocun").click(function(){
            $(this).parent().parent().parent().parent().css("display","none");
        })

   
    //修改密码
    $('.btn-green').click(()=>{
        let 
    })

})