$(document).ready(function(){
  $('.checkbox0').change(function(){
        if(this.checked) {
            $('.localpharmacy').fadeIn('slow');
             $('.bigboxstore').fadeIn('slow');
             $('.comcenter').fadeIn('slow');
             $('.hospital').fadeIn('slow');
        }
  
    });
    $('.checkbox1').change(function(){
        if(this.checked) {
            $('.localpharmacy').fadeIn('slow');
             $('.bigboxstore').fadeOut('slow');
             $('.comcenter').fadeOut('slow');
             $('.hospital').fadeOut('slow');
        }
        else{
             
              $('.bigboxstore').fadeIn('slow');
              $('.comcenter').fadeIn('slow');
             $('.hospital').fadeIn('slow');
}
    });
    $('.checkbox2').change(function(){
        if(this.checked){
            $('.bigboxstore').fadeIn('slow');
            $('.localpharmacy').fadeOut('slow');
            $('.comcenter').fadeOut('slow');
            $('.hospital').fadeOut('slow');
        }
        else{
             $('.localpharmacy').fadeIn('slow');
             $('.comcenter').fadeIn('slow');
            $('.hospital').fadeIn('slow');
        }


    });
    $('.checkbox3').change(function(){
        if(this.checked){
            $('.hospital').fadeIn('slow');
            $('.localpharmacy').fadeOut('slow');
            $('.bigboxstore').fadeOut('slow');
            $('.comcenter').fadeOut('slow');
        }
        else{
             $('.localpharmacy').fadeIn('slow');
             $('.bigboxstore').fadeIn('slow');
             $('.comcenter').fadeIn('slow');
        }


    });
    $('.checkbox4').change(function(){
        if(this.checked){
            $('.comcenter').fadeIn('slow');
           $('.localpharmacy').fadeOut('slow');
            $('.bigboxstore').fadeOut('slow');
            $('.hospital').fadeOut('slow');
        }
        else{
             $('.localpharmacy').fadeIn('slow');
             $('.bigboxstore').fadeIn('slow');
             $('.hospital').fadeIn('slow');
        }


    });
});
