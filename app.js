//Método para selector 
//JAVA + HTML
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';

let numeroSecreto=0;
let numeroDeintentos=0;
let listaNumeroSorteado=[];
let numeroMaximo=10;


function asignaTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    //Se asigna un titulo al juego
    elementoHTML.innerHTML = texto;
    //retorno de la funcion
    return;
}


function VerificarIntento(){
   // let numeroDeUsuario = document.querySelector('input');
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto); 
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    //si es igual en valor y en tipo
    //console.log(numeroDeUsuario=== numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignaTextoElemento('p', `Acertaste el numero secreto en ${numeroDeintentos} ${(numeroDeintentos === 1) ? 'vez'  : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
   
    } else{
        if(numeroDeUsuario > numeroSecreto){
        asignaTextoElemento('P', 'El numero secreto es menor ');
        }else{
            asignaTextoElemento('P', 'El numero secreto es mayor ');    

        }   
        numeroDeintentos++;  
        console.log('intentos'+ numeroDeintentos);
        limpiarCaja();
    }
    return;
    //alert('Click desde función');
} 


function limpiarCaja(){
     document.querySelector('#valorUsuario').value='';
    //valorCaja.value='';
}


function generarNumeroSecreto() {

//return Math.floor(Math.random()*10)+1;
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
console.log(numeroGenerado);
console.log(listaNumeroSorteado);
//si ya se sortearon todos los numeros se muestra un mesaje en pantalla

if (listaNumeroSorteado.length == numeroMaximo){
    asignaTextoElemento('p', 'Ya se sortearon todos los numeros!')
    
}else{

//si el numero generado esta incluido en la lista 
if (listaNumeroSorteado.includes(numeroGenerado)){
    return generarNumeroSecreto();

}else{
    listaNumeroSorteado.push(numeroGenerado);
    return numeroGenerado;
}
}
}


function condicionesIniciales(){
    asignaTextoElemento('h1', 'Juego del numero secreto!');
    asignaTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo} :) `);
    numeroSecreto = generarNumeroSecreto();
    numeroDeintentos=1;
    console.log(numeroSecreto);
    document.getElementById('reiniciar').removeAttribute('disabled');
}


function  reiniciarJuego(){
limpiarCaja();
condicionesIniciales();
document.querySelector('#reiniciar').setAttribute('disabled','true');
}



condicionesIniciales();
//Se crea la funcion paea evitar estar declarando los elementos de texto visuales
//Esta funcion estara sustityundo la parte del parrafo y texto
