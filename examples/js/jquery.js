$(()=>{
    $(".accordion dt").on("click" , function(e) {
    //    $(this).next().show();
    //    $(this).next().toggle();
    //    $(this).next().slideDown();
    //    $(this).next().slideToggle();
       $(this).next().slideDown()
       .siblings("dd").slideUp();
    });

});

$(".tabgroup .tab").on("click", function (e){
    $(this).addClass("active")
    .siblings("dd").remoce("active")
})


