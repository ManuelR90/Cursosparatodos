$(document).ready(function () {
    
    //Scroll Bar
    var scroll_Cuerpo = 0;
    
    $(document).on("scroll", function(){
       
       scroll_Cuerpo = $("body").scrollTop();
       if(scroll_Cuerpo > 10){
           $("header").css("background","#ffffff");
           $("#Buscar").css("border-style","solid");
           $("header > ul > li > a").removeClass("TextoColorB1").addClass("TextoColorB2");
           $("header > span").removeClass("Esconder");
           $("#Buscar").addClass("BordeBuscar");
           $("#BtnBuscar").addClass("BordeBuscar");
           $("#Carrito > img").attr("src","IconosProyect/CarritoB.png")
       }
       else{
           $("header").css("background","transparent");
           $("#Buscar").css("border-style","none");
           $("header > ul > li > a").removeClass("TextoColorB2").addClass("TextoColorB1");
           $("header > span").addClass("Esconder");
           $("#Buscar").removeClass("BordeBuscar");
           $("#BtnBuscar").removeClass("BordeBuscar");
           $("#Carrito > img").attr("src","IconosProyect/CarritoW.png")
           
       }
       
        
    });
    
    //Botones Funcion Click
    
    $("#Descubrirmas").click(function(){
        $("#ContenedorFormulario").animate({bottom: "0", top: "0"});
      });
      
    $("#IniciaAhora").click(function(){
        $("#ContenedorFormulario").animate({bottom: "0", top: "0"});
      });
    
    $("#Cerrar").click(function(){
        $("#ContenedorFormulario").animate({bottom: "100%", top: "-100%"});
        $("#ContenedorFormulario").animate({bottom: "0", top: "0"});
      });
      
    $("#Carrito").click(function(){
        $("#FondoCarrito").css("display","block");
        $("#ContenedorCarritoC").animate({width: "450px", right: "0"});
      });
      
    $("#CerrarC").click(function(){
        $("#FondoCarrito").css("display","none");
        $("#ContenedorCarritoC").animate({width: "0px", right: "-450px"});
      });
      
    $("#FondoCarrito").click(function(){
        $("#FondoCarrito").css("display","none");
        $("#ContenedorCarritoC").animate({width: "0px", right: "-450px"});
      });  
      
    
    //Posicionar en el scroll  
      
    $("#IrACursos").click(function(){
        var posicion = $("#ContenedorMenu").offset().top;
    $("html, body").animate({
        scrollTop: posicion - 30
    }, 1000);
        
    });
    
    //Formulario
    
    $("#AceptarFormulario").click(function(){
        
        var valorTexto = $("#Usuario").val();
        
        if($("#Usuario").val() == ""){
            alert("El campo usuario est?? vacio, debes ingresar un nombre de usuario");
        }
        else if($("#Usuario").val().length < 8){
            alert("El campo usuario debe tener m??s de 8 car??cteres");
        }
        else if(valorTexto.indexOf(" ",0)  > 0){
            alert("El campo usuario no debe tener espacios");
        }
        
        else {
            
            var valorCorreo = $("#Correo").val();
        
            if($("#Correo").val() == ""){
                alert("El campo correo est?? vacio, debes ingresar un nombre de usuario");
            }
            else if($("#Correo").val().length < 8){
                alert("El campo correo debe tener m??s de 8 car??cteres");
            }
            else if(valorCorreo.indexOf(" ",0)  > 0){
                alert("El campo correo no debe tener espacios");
            }
            else if(valorCorreo.indexOf("@",0)  < 1){
                alert("El campo correo debe tener @");
            }
            
            else {
                
                var valorPass = $("#Contrase??a").val();

                if($("#Contrase??a").val() == ""){
                    alert("El campo contrase??a est?? vacio, debes ingresar un nombre de usuario");
                }
                else if($("#Contrase??a").val().length < 8){
                    alert("El campo contrase??a debe tener m??s de 8 car??cteres");
                }
                else if(valorPass.indexOf(" ",0)  > 0){
                    alert("El campo contrase??a no debe tener espacios");
                }
                
                else if(
                        valorPass.indexOf("A",0)  === -1   &&
                        valorPass.indexOf("E",0)  === -1   &&
                        valorPass.indexOf("I",0)  === -1   &&
                        valorPass.indexOf("O",0)  === -1   &&
                        valorPass.indexOf("U",0)  === -1   
                        ){
                    alert("El campo contrase??a debe tener al menos una vocal MAY??SCULA");
                }
                else if(
                        valorPass.indexOf("1",0)  === -1   &&
                        valorPass.indexOf("2",0)  === -1   &&
                        valorPass.indexOf("3",0)  === -1   &&
                        valorPass.indexOf("4",0)  === -1   &&
                        valorPass.indexOf("5",0)  === -1   &&
                        valorPass.indexOf("6",0)  === -1   &&
                        valorPass.indexOf("7",0)  === -1   &&
                        valorPass.indexOf("8",0)  === -1   &&
                        valorPass.indexOf("9",0)  === -1   &&
                        valorPass.indexOf("0",0)  === -1   
                        ){
                    alert("El campo contrase??a debe tener al menos un n??mero");
                }
                else if(
                        valorPass.indexOf("+",0)  === -1   &&
                        valorPass.indexOf("-",0)  === -1   &&
                        valorPass.indexOf("*",0)  === -1   &&
                        valorPass.indexOf("/",0)  === -1   
                        ){
                    alert("El campo contrase??a debe tener al menos uno de los siguientes car??cteres especiales (+,-,*,/)");
                }
                else {
                    
                    var valorPassVal = $("#ValContrase??a").val();

                    if(valorPassVal != valorPass){
                        alert("La contrase??a es diferente al compararlas");
                    }
                    else{
                        alert("Usuario " + valorTexto + " aceptado con ??xito");
                        window.open("Cursos.html", '_blank');
                    }
                    
                    
                }
            }
        }
        
        alert(valorPass.indexOf("A",0));
        
        
    });
    
    
    //Agregar HTML
    
    $("#CursoHTML").click(function(){
        $("#ContenidoCarrito").html('<div class="Agregado"><h1>Curso HTML</h1><span>$149.99 mx</span><div class="CerrarPedido"></div></div>')
      });
      
});

