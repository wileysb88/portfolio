$( document ).ready(function(){
   $(".button-collapse").sideNav();
   $('.slider').slider({full_width: true});
});


var options = [
   {selector: '.first', offset: 200, callback: function() {
        Materialize.fadeInImage(".first");
      } },
 ];
 Materialize.scrollFire(options);
