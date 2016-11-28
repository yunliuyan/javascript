/**
 * Created by shuojie on 2015/11/13.
 */
var YLyan = function(){
        $(document).ready(function () {
            $(".rope").click(function () {
                $(this).hide("fast");
                $(".rope1").hide();
                $(".rope2").hide();
                $(".rope3").hide();
                $curtainopen = false;
                if ($curtainopen == false) {
                    $(".leftcurtain").stop().animate({width: '50px'}, 1500);
                    $(".rightcurtain").stop().animate({width: '50px'}, 1500);
                    $curtainopen = true;
                } else {
                    $(".leftcurtain").stop().animate({width: '50%'}, 1500);
                    $(".rightcurtain").stop().animate({width: '51%'}, 1500);
                    $curtainopen = false;
                }
                return false;
            });
        });

     return {
         init : function(){
             YLyan();
         }
     }
}();





