
$(function(){

    var dir = -1;
    var interval = 6000000;
    var duration = 700;
    var timer ;

    

    $("#character ul").prepend($("#character li:last-child"));

    $("#character ul").css("left",'-80vw');

    timer = setInterval(slideTimer, interval);

    function slideTimer(){

      if(dir == -1){
        $("#character ul").animate({"left": "-=80vw"}, duration,
        function(){

            $(this).append($("#character li:first-child"));

            $(this).css("left","-80vw");
        });  
      

      }else{

        $("#character ul").animate({"left": "+=80vw"}, duration,
        function(){

            $(this).prepend($("#character li:last-child"));

            $(this).css("left","-80vw");
        })
      }
        
        
    }

    $("#prevBtn").click(function(){

      dir = 1;

      clearInterval(timer);

      timer = setInterval(slideTimer, interval);

      slideTimer();
    })

    $("#nextBtn").click(function(){

      dir = -1;

      clearInterval(timer);

      timer = setInterval(slideTimer, interval);

      slideTimer();

      

    
    });

})


window.onload = function() {
    scrolleffect();
  
    $(window).scroll(function() {
      scrolleffect();
    });
  
    function scrolleffect() {
      $('.animate').each(function() {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100) {
          $(this).addClass('-in');
        }
      });
    }
  };

  $(function(){

    $("#special a").click(function(){

      var specialheight = ($(this).parent()).offset().top;

      $("body").append('<div id="bg">');

      $("body").append('<div id="photo">');

      $("#bg").hide();
      $("#photo").hide();

      $("#photo").html("<img>");

      $("#photo").css("top",specialheight);

      $("#photo img").attr("src",$(this).attr("href"));

      $("#photo img").attr("width","100%");
     
      $("#photo img").attr("alt","Image");

      $("#photo img").css("top",specialheight);



      $("#bg").fadeIn();
      $("#photo").fadeIn();

      $("#bg").click(function(){

        $(this).fadeOut(function(){
          $(this).remove();
        });
        $("#photo").fadeOut(function(){
          $("#photo").remove();
        });


      });
      

      return false;
    })
  })

var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
        $('.site-header').addClass('navhide');
    } else {
        $('.site-header').removeClass('navhide');
    }
    startPos = winScrollTop;
});

function soundbell(n)
{
  // 割り当てるID名（引数のnを連結して指定）
  var id = 'sound-'+n ;
  // 初回の再生以外だったら音声ファイルの再生ポイントを先頭にしておく
  if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
  {
    document.getElementById( id ).currentTime = 0;
  }
  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById( id ).play() ;}