//ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias')
const txtHoras = document.querySelector('#txtHoras')
const txtMinutos = document.querySelector('#txtMinutos')
const txtSegundos = document.querySelector('#txtSegundos')
const h1 =document.querySelector('h1')

function dosDigitos(numero)
    {
        if( numero < 10 ){
            numero = '0' + numero
        }

        return numero;
    }

//creamos funcion de control

function countdown(){
    //creamos objetos de fecha
    const ahora = new Date();
    const final = new Date(2023, 9, 13);
    console.log(ahora)
    console.log(final)
    //diferencia de fechas
    let diferencia = final - ahora;
    /*tiempo expresado en milisegundos*/ 
    console.log(diferencia)

    //obtenemos el tiempo expresado en segundos, minutos, horas y dias 
    
    //expresados en segundos 
    let segundos = Math.trunc( diferencia / 1000 );
    console.log(segundos)

    //expresados en minutos 
    let minutos = Math.trunc( segundos / 60 );
    console.log(minutos)

    //expresados en horas 
        let horas = Math.trunc( minutos / 60 );
        console.log(horas)

    // expresado en dias
    let dias = Math.trunc( horas / 24 );
    console.log(dias)

    //calculamos los restantes 
    horas = horas % 24; 
    
     console.log( horas );
    minutos = minutos % 60;
   
     console.log(minutos);
    segundos = segundos % 60;
    
     console.log(segundos);
    
     if( dias <= 0 && horas <= 0  && minutos <= 0 && segundos <= 0 ){
        //dejar de actualizar
        clearInterval( intervalo );
        h1.innerText ='Llego el feriado'
        dias = 0
        horas = 0
        minutos = 0
        segundos = 0
    }

    horas = dosDigitos( horas );
    minutos = dosDigitos( minutos );
    segundos = dosDigitos( segundos );

    //imprimimos los span
    txtSegundos.innerText = segundos;
    txtMinutos.innerText = minutos;
    txtHoras.innerText = horas;
    txtDias.innerText = dias;
}

 //invocamos la funcion
 countdown();

 //actualizamos el llamado a la funcion
 intervalo = setInterval(countdown, 1000)
