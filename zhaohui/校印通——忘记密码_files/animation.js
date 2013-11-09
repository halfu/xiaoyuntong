$(document).ready(function () {
    $('#nav_flag').mouseenter(function () {
        $("#nav_flag").animate({
            top: '0'
        });
    });
    $('#nav_flag').mouseleave(function () {
        $("#nav_flag").animate({
            top: '-32px'
        }, "fast");
    });
});
var method = $("#method>input");
var place_l = $("#place>label");
var place = $('#place>input');
var message = $('.message_holder');
var mico = method.eq(0).val();

$(document).ready(function () {
    message.eq(0).removeClass('display');
    change_o();
    $('#place').removeClass('display');
    $('#song').click(function () {
        change_o();
        $('#place').removeClass('display');

    });
    $('#qu').click(function () {
        change_p();
        $('#place').removeClass('display');
    });
    for (var p = 0; p < 4; p++) {
        change_i(p);
    }
});
function change_i(p) {

    place.eq(p).click(function () {

        $('.message_holder').addClass("display");

        message.eq(p).removeClass('display');




    });
}

function change_o() {
    place.eq(0).css('display', '');
    place_l.eq(0).css('display', '');
    for (var i = 1; i < 4; i++) {
        place.eq(i).css('display', 'none');
        place_l.eq(i).css('display', 'none');
    }
}
function change_p() {
    place.eq(0).css('display', 'none');
    place_l.eq(0).css('display', 'none');
    for (var j = 1; j < 4; j++) {
        place.eq(j).css('display', '');
        place_l.eq(j).css('display', '');
    }
}

$(document).ready(function () {
    $('#button4').click(function () {
        var mic = $('#add_choose').val();
        if (mis) {
            if (mic == "") {
                alert("您还没有选择地址！");
                return false;
            }
        } else {
            alert("您还没有上传任何文件！");
            return false;
        }
    });
});
var mis;
function filesize(ele) {
    mis = (ele.files[0].size / 1024).toFixed(2);
}
$(document).ready(function () {
    $("#file").blur(function () {
        var filepath = $("#file").val();
        var extStart = filepath.lastIndexOf(".");
        var ext = filepath.substring(extStart, filepath.length).toUpperCase();
        if (ext == ".EXE" || ext == ".RAR") {
            $("#fileshang").html("<p class='error_mes' >文件格式不正确！将无法打印！</p>");

            return false;
        } else {
            $("#fileshang").html("");

            return false;
        }
    });
});
function checkSubmit() {
    
    var passWord = document.getElementById('password1').value;
    var passWordDemo = document.getElementById('password2').value;
    var email = document.getElementById('mailbox').value;
    var form1 = document.getElementById('password_forget');
    var re = /^[a-zA-Z0-9_-]+[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

    // if (userName != 0) {
    if (passWord != 0) {
        if (passWordDemo != 0) {
            if (email != 0) {
                if (re.test(email)) {
                    if (passWord.length < 21 && passWord.length > 5) {
                        if (passWordDemo == passWord) {
                            document.form1.submit();
                        } else {
                            alert("两次输入的密码不一致！"); return false;
                        }
                    } else {
                        alert("密码长度必须在6-20个字符之间！"); return false;
                    }

                    // } else {
                    //   alert("用户名长度必须在5-20个字符之间！")
                    // }
                } else {
                    alert("请您确认您的邮箱是否填写正确！"); return false;
                }
            } else {
                alert("请您先填写邮箱地址！"); return false;
            }
        } else {
            alert("您还没有填写确认密码!"); return false;
        }
    } else {
        alert("请您先填写要注册的用户密码！"); return false;
    }



}
$(document).ready(function () {
    $("#submit_change").click(function (e) {
        e.preventDefault() ;
        var newVal = $("#mailbox").val();
        $("#mailbox1").val(newVal);

        $("#mailto").submit();
        $(this).attr("disabled", "true").removeClass("pointer_b").addClass("pointer");
    });
});
(function ($) {
    $.fn.extend({ leanModal: function (options) {
        var defaults = { top: 100, overlay: 0.5 };
        var overlay = $("<div id='lean_overlay'></div>");
        $("body").append(overlay);
        options = $.extend(defaults, options);
        return this.each(function () {
            var o = options;
            
            $(this).click(function () {
                if(mis){var modal_id = $(this).attr("href");

                var modal_height = $(modal_id).outerHeight();
                var modal_width = $(modal_id).outerWidth();
                $("#lean_overlay").css({ "display": "block", opacity: 0 });
                $("#lean_overlay").fadeTo(200, o.overlay);
                $(modal_id).css({ "display": "block", "position": "fixed", "opacity": 0, "z-index": 11000, "left": 50 + "%", "margin-left": -(modal_width / 2) + "px", "top": o.top + "px" });
                $(modal_id).fadeTo(200, 1);
                
                $("#cori").submit();
            }})
        });

    } 
    })
})(jQuery);
$(function () {


    $('#button4').leanModal({ top: 200, overlay: 0.45 });
}); 
