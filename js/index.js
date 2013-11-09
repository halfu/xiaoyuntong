// Generated by CoffeeScript 1.4.0
(function() {
  var call_fun, re_construct, readys, reg_end_str, reg_mid_str, register, register_fun;

  readys = function() {
    var form_type;
    form_type = 1;


	$('.right').click(function() {
		form_type=2;
		$('.left').css("color", "rgba(255,255,255,0.6)");
		$(".green").animate({
			left: '102px',
		});
		$('.right').css("color", "white");
	});
	$('.left').click(function() {
		form_type=1;
		$('.right').css("color", "rgba(255,255,255,0.6)");
		$(".green").animate({
			left: '0px',
		});
		$('.left').css("color", "white");
	});




//    $('#my_user_form').click(function() {
//      form_type = 1;
//      if ($(this).hasClass('btn-warning') != null) {
//        $('#my_seal_form').removeClass('btn-warning');
//        $('#my_seal_form').addClass('btn-primary');
//        $(this).removeClass('btn-primary');
//        return $(this).addClass('btn-warning');
//      }
//    });
//    $('#my_seal_form').click(function() {
//      form_type = 2;
//      if ($(this).hasClass('btn-warning') != null) {
//        $('#my_user_form').removeClass('btn-warning');
//        $('#my_user_form').addClass('btn-primary');
//        $(this).removeClass('btn-primary');
//        $(this).removeClass('btn-primary');
//        return $(this).addClass('btn-warning');
//      }
//    });
    $("#my_register").click(function() {
      $("div.modal-body").empty();
      $("div.modal-footer").empty();
      $("div.modal-body").append(reg_mid_str);
      $("div.modal-footer").append(reg_end_str);
      $("#reg_submit").click(register);
      return $("#reg_re_construct").click(re_construct);
    });
    return $('#my_submit').click(function() {
      var l_psw, login;
      l_psw = hex_md5($('#user_pwd').val());
      $("#my_submit").attr({
        "disabled": "true"
      });
      $("#my_submit").text("登录中");
      login = {
        l_email: $('#user_email').val(),
        l_psw: l_psw,
        type: form_type,
        token: getTime()
      };
      return $.post("/login", login, call_fun);
    });
  };

  call_fun = function(data) {
    data = data.toJSONString();
    $("#my_submit").attr({
      "disabled": "false"
    });
    $("#my_submit").text("登录");
    $('#user_title').css({
      'color': "#555"
    });
    $('#pwd_title').css({
      'color': "#555"
    });
    if ((data.status != null) && type === 20) {
      return alert("连接服务器超时！");
    } else {
      if (data.status) {
        return window.open();
      } else {
        if (data.type === 1001) {
          $('#user_title').css({
            'color': 'red'
          });
          $('#user_email').val("");
          return $('#user_email').attr({
            'placeholder': "邮箱不存在"
          });
        } else if (data.type === 1002) {
          $('#pwd_title').css({
            "color": "red"
          });
          $('#user_pwd').val("");
          return $('#user_pwd').attr({
            "placeholder": '密码错误'
          });
        } else {
          return alert('异常错误');
        }
      }
    }
  };

  $(document).ready(readys);

  reg_mid_str = '<div class="input-group my_input_css"> <span class="input-group-addon" id="reg_email_ti">Email</span> <input type="text" class="form-control" placeholder="请输入你的Email:" id="reg_email"> </div> <div class="input-group my_input_css"> <span class="input-group-addon" id="reg_pwd_ti">密码&nbsp;&nbsp;</span> <input type="text" class="form-control" id="reg_pwd" placeholder="请输入你的密码:"> </div> <div class="input-group my_input_css"> <span class="input-group-addon" id="reg_pwd_two_ti">确认密码</span> <input type="text" class="form-control" id="reg_pwd_two" placeholder="请输入你的确认密码:"> </div>';

  reg_end_str = '<button type="button" class="btn btn-default"  id="reg_re_construct">重置</button> <button type="button" class="btn btn-primary" id="reg_submit">提交</button>';

  register = function() {
    var password, pwd_again, register_mes;
    password = hex_md5($("#reg_pwd").val());
    pwd_again = hex_md5($("#reg_pwd_two").val());
    $("#reg_pwd_ti").css({
      "color": "#555"
    });
    $("#reg_pwd_two_ti").css({
      "color": "#555"
    });
    if (password !== pwd_again) {
      $("#reg_pwd_ti").css({
        "color": "red"
      });
      $("#reg_pwd_two_ti").css({
        "color": "red"
      });
      $("#reg_pwd").val('');
      $("#reg_pwd_two").val('');
      $("#reg_pwd").attr({
        "placeholder": "两次输入不一致"
      });
      return $("#reg_pwd_two").attr({
        "placeholder": "两次输入不一致"
      });
    } else {
      $("#reg_submit").attr({
        "disabled": "true"
      });
      $("#reg_submit").text("注册中");
      register_mes = {
        r_email: $('#reg_email').val(),
        r_pwd: password,
        r_pwd_again: pwd_again,
        token: getTime()
      };
      return $.post("/register", register_mes, register_fun);
    }
  };

  register_fun = function(data) {
    $("#reg_submit").attr({
      "disabled": "disabled"
    });
    $("#reg_submit").text("注册");
    data = data.toJSONString();
    $("#reg_email_ti").css({
      "color": "#555"
    });
    if ((data.status != null) && type === 20) {
      return alert('服务器请求超时');
    } else {
      if (data.status) {
        $("div.modal-body").empty();
        $("div.modal-footer").empty();
        return $("div.modal-body").append("<h2>恭喜您注册成功</h1>");
      } else if (data.type === 1004) {
        $("#reg_email_ti").css({
          "color": "red"
        });
        $("#reg_email").val("");
        return $("#reg_email").attr({
          "placeholder": "该邮箱已经被注册"
        });
      } else {
        return alert("未知错误");
      }
    }
  };

  re_construct = function() {
    $("#reg_pwd_ti").css({
      "color": "#555"
    });
    $("#reg_pwd_two_ti").css({
      "color": "#555"
    });
    $("#reg_email_ti").css({
      "color": "#555"
    });
    console.log('text');
    $("#reg_pwd").val("");
    $("#reg_pwd").attr({
      "placeholder": "请输入你的密码"
    });
    $("#reg_email").val('');
    $("#reg_email").attr({
      "placeholder": "请输入你的Email"
    });
    $("#reg_pwd_two").val("");
    return $("#reg_pwd_two").attr({
      "placeholder": "请输入你的确认密码"
    });
  };

}).call(this);
