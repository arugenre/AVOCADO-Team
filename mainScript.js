"use strict"
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

function load(){
    $(".aboutTitle").animate({opacity: "1"},1000    );
}

function animated(){
    $("#dragon").animate({left: '+=100px'}, "slow");
    $("#dragon").animate({left: '-=100px'}, "slow");
    $("#dragon2").animate({left: '+=100px'}, "slow");
    $("#dragon2").animate({left: '-=100px'}, "slow");
    // $("#aboutG").animate({top: '+=100px'}, "1000");
    // $("#aboutG").animate({top: '-=100px'}, "slow");


}
setInterval(() => animated(),2000);

$(".modal-button").click(function() {
    var target = $(this).data("target");
    $("html").addClass("is-clipped");
    $(target).addClass("is-active");
 });
 
 $(".modal-close").click(function() {
    $("html").removeClass("is-clipped");
    $(this).parent().removeClass("is-active");
 });

 function openMenu(){
    document.getElementsByClassName('header_burger')[0].classList.toggle('active');
    document.getElementsByClassName('burger_main')[0].classList.toggle('active');
}

//  $('body').css('overflow-x', 'initial');







 document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();

        let error = formValidate(form);
    }


    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for(let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);

            if(input.classList.contains('._email')){
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }else if(input.getAttribute("type")=== "checkbox" && input.checked === false){
                formAddError(input);
                error++;
            } else{
                if(input.value === ' '){
                    formAddError(input);
                    error++;
                }
            }
        }
    }

    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input){
        return !/^w+([\.-]?\w+)*@\w+([\.-]?\w)*(\.\w{2,8})+$/.test(input.value);
    }





} );


