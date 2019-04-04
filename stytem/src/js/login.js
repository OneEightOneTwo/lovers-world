$(function(){

    $('#login-button').click(function (event) {

        // event.preventDefault();  //点击登录改变样式
        // $('form').fadeOut(500);
        // $('.wrapper').addClass('form-success');

        var text=$("#text").val();  //点击登录获取内容
        var psw=$("#psw").val();

        $.ajax({
            type:'POST',
            data:{
                text,
                psw
            },
            url:"../api/router/login",
            success:function(str){
                console.log(str);
            }
        })
    });




})