$(document).ready(function () {
  
    $(".navli").click(function (){
      $(this).addClass("active").siblings().removeClass("active");
    });
  });
  