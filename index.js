
$("#diapositiva > div:gt(0)").hide();

setInterval(function() { 
  $('#diapositiva > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#diapositiva');
},  5000);


$(document).ready(function(){
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#gotopdiv').fadeIn();
        } else {
            $('#gotopdiv').fadeOut();
        }
    });
    
    $('#gotopdiv').click(function(){
        $('html, body').animate({scrollTop : 0},600);
        return false;
    });
    
});


function recogerTestimonios(){
  $.ajax({
      dataType: "json",
      url: "testimonios.json",
      data: "data",
      success: function(response){
          for (let i=0; i<3; i++){
              let random = Math.floor(Math.random() * 7);
              $("label#nombre"+i.toString()).text(response.testimonios[random].nombre);
              $("p#testimonio"+i.toString()).text(response.testimonios[random].texto);
              $("p#fecha"+i.toString()).text(response.testimonios[random].fecha);
          }
      }
  })
  setTimeout(recogerTestimonios, 10000);
}

recogerTestimonios(); 

function mostrarProductos(){
  $.ajax({
      dataType: "json",
      url: "productos.json",
      data: "data",
      success: function(response){
          for (let i=0; i<3; i++){
              $("div#producto"+i.toString()).prepend('<img id="fotosproductos" src="'+response.productos[i].imagen+'" alt="'+response.productos[i].nombre+'"/>');
              $("div#producto"+i.toString()).prepend('<label id="nombreProductos">'+response.productos[i].nombre+'</label>');
              $("div#producto"+i.toString()).prepend('<label id="precioProductos">'+response.productos[i].precio+'</label>');
          }
      }
  })
}

mostrarProductos();

document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.querySelector('#producto > div').offsetTop;
         
     if (isVisible) {
       document.getElementById('producto').classList.add('animate');
    }
});



document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.querySelector('#testimonio > div').offsetTop;
         
     if (isVisible) {
       document.getElementById('testimonio').classList.add('animate');
    }
});