$( document ).ready(function(){
   $(".button-collapse").sideNav();
   $('#fullpage').fullpage();

});
})

var options = [
   {selector: '.first', offset: 200, callback: function() {
        Materialize.fadeInImage(".first");
      } },
 ];
 Materialize.scrollFire(options);
