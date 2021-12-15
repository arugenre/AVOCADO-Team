$(document).ready(function(){

    var sectionIds = $('a.nav-link');
  
      $(document).scroll(function(){
          sectionIds.each(function(){
  
              var container = $(this).attr('href');
              var containerOffset = $(container).offset().top;
              var containerHeight = $(container).outerHeight();
              var containerBottom = containerOffset + containerHeight;
              var scrollPosition = $(document).scrollTop();
      
              if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                  $(this).addClass('active');
              } else{
                  $(this).removeClass('active');
              }
      
      
          });
      });
     
  
  
  });

// function load(){
//     $(".aboutTitle").animate({opacity: "1"},1000    );
// }

function animated(){
    $("#dragon").animate({left: '+=100px'}, "slow");
    $("#dragon").animate({left: '-=100px'}, "slow");
    $("#dragon2").animate({left: '+=100px'}, "slow");
    $("#dragon2").animate({left: '-=100px'}, "slow");

}
setInterval(() => animated(),2000);


