// validamos el correo electrónico
var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;


$(document).ready(function(){
        //cuando hago click en el boton enviar se activa la funcion validar	
    $("#bEnviar") .click(function(){

        var nombre = $("#itNombre").val(); //obtenemos el valor del campo nombre 
        var email = $("#itEmail").val(); //obtenemos el valor del campo email
        var asunto = $("#itAsunto").val(); //obtenemos el valor del campo asunto
        var txtArea = $("#itMensaje").val(); //obtenemos el valor del campo mensaje
        var captcha = $("#ebcaptchainput").val(); //obtenemos el valor del campo captcha

        if(nombre == ""){ //si el campo nombre esta vacio
            Swal.fire({ //mostramos una alerta
                title: "Debe llenar el campo nombre" , //titulo del mensaje
                icon: 'error', //tipo de mensaje
                timer:5000, //tiempo de duracion del mensaje
                timerProgressBar: true //mostramos una barra de progreso
            })
            
            return false; //devolvemos false para que no se envie el formulario
        } else{ //si el campo nombre no esta vacio

            $("#mensaje1").fadeOut(); //ocultamos el mensaje de error
            if(email == "" || !expr.test(email)){ //si el campo email esta vacio o no cumple con el formato
                
                Swal.fire({ //mostramos una alerta
                    title: "Debe llenar el campo email" , //titulo del mensaje
                    icon: 'error', //tipo de mensaje
                    timer:5000, //tiempo de duracion del mensaje
                    timerProgressBar: true //mostramos una barra de progreso     
                })
                return false; //devolvemos false para que no se envie el formulario

            }else{ //si el campo email no esta vacio y cumple con el formato

                $("#mensaje2").fadeOut(); //ocultamos el mensaje de error
                if(asunto == ""){ //si el campo asunto esta vacio
                    Swal.fire({ //mostramos una alerta
                        title: "Debe llenar el tema del mensaje" , //titulo del mensaje
                        icon: 'error', //tipo de mensaje
                        timer:5000, //tiempo de duracion del mensaje
                        timerProgressBar: true //mostramos una barra de progreso
                        
                    })
                    return false; //devolvemos false para que no se envie el formulario
                    

                }else{ //si el campo asunto no esta vacio
                    $("#mensaje3").fadeOut(); //ocultamos el mensaje de error
                    if(txtArea == ""){ //si el campo mensaje esta vacio
                        Swal.fire({ //mostramos una alerta
                            title: "Debe llenar el mensaje", //titulo del mensaje
                            icon: 'error', //tipo de mensaje
                            timer:5000, //tiempo de duracion del mensaje
                            timerProgressBar: true //mostramos una barra de progreso
                            
                        })
                        return false; //devolvemos false para que no se envie el formulario
 
                    }else{ //si el campo mensaje no esta vacio
                        $("mensaje4").fadeOut(); //ocultamos el mensaje de error
                        if(captcha == ""){ //si el campo captcha esta vacio
                            Swal.fire({ //mostramos una alerta
                                title: "Debe llenar el captcha" , //titulo del mensaje
                                icon: 'error', //tipo de mensaje
                                timer:5000, //tiempo de duracion del mensaje
                                timerProgressBar: true //mostramos una barra de progreso
                                
                            })
                            return false; //devolvemos false para que no se envie el formulario

                        } else{ //si el campo captcha no esta vacio
                            Swal.fire({ //mostramos una alerta
                                title: "¿Esta seguro de enviar el mensaje?" , //titulo del mensaje
                                text:"¡No podrá revertir esta acción!", //mensaje del mensaje
                                icon: 'warning', //tipo de mensaje
                                ShowCancelButton: true, //mostramos un boton de cancelar
                                confirmButtonColor: '#3085d6', //color del boton de confirmar
                                cancelButtonColor: '#d33', //color del boton de cancelar
                                confirmButtonText: 'Si, enviar!' //texto del boton de confirmar    
                            }).then((result)=>{ //creamos una funcion para que cuando se presione el boton de confirmar se ejecute la funcion
                                if(result.isConfirmed){ //si se presiona el boton de confirmar
                                    Swal.fire( //mostramos una alerta
                                        'Enviado!', //titulo del mensaje
                                        'Su mensaje ha sido enviado.', //mensaje del mensaje
                                        'success', //tipo de mensaje
                                        formulario.reset() //limpiamos el formulario
                                    )
                                }
                            })
                        
                        } 
                    }
        
                    
                }
            }
        }
    });

});

//validacion del captcha

$(document).ready(function() {
    //el boton es un principio esta desabilitado
    $("#enviar").attr("disabled","disabled");
    //variable 1 inicializada en 0
    var num1=0;
    //variable 2 inicializada en 0
    var num2=0;
    //variable 3 inicializada en 0
    var num3=0;
    //Hacemos que la variable uno tome valores redondeados 
    num1=Math.floor(Math.random()*10);
    //Hacemos que la variable dos tome valores redondeados
    num2=Math.floor(Math.random()*10);
    //sumamos las variables y lo redondemos
    num3=num1+num2;
    //mostramos el resultado en el campo captcha
    $("#ebcaptchatext").text("Cuanto es "+num1+" + "+num2);
    //validamos el campo captcha 
    $("#ebcaptchainput").keyup(function(e){
      //creamos un objeto global para que se pueda acceder a el  
    var total=$(this).val();
    //si el total es igual al resultado redondeado
    if(total==num3){
        
        
        Swal.fire({ //mostramos una alerta
            title: '¡Correcto!' //titulo del mensaje
            ,text: 'No eres un robot', //mensaje del mensaje
            icon: 'success' //tipo de mensaje
        }) 
                }
    else{ //si el total no es igual al resultado redondeado
        $("#enviar").attr("disabled","disabled"); //desactivamos el boton de enviar
        Swal.fire({ //mostramos una alerta
            title: "El captcha no coincide",
            icon: 'error',
            text: 'Por favor, intente de nuevo'
        })
                    }
                });
            });
