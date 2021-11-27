/* Scrpipt para crear imágenes aleatorias en la pag de fotos */

let fotos = ['1.jpg','2.jpg','3.jpg','acuerdoFranciaItalia.jpg',
             'banderaHonduras.jpg','curry.jpg','FerAlonso.jpg',
             'FerAlonsoPodio.jpg','Portugal.jpeg','rayo.jpg','rayoAbrazo.jpg',
             'warriors.jpg'];

document.images["imagenes"].src = "img/" + fotos[0];
console.log('numero de fotos: ' +fotos.length);

let cambiaFotos = setInterval(muestraFotos,3000);

function muestraFotos(){
    for (let i = 0; i < fotos.length; i++) {
        let aleatorio = Math.floor(Math.random() * fotos.length);
        document.images["imagenes"].src = "img/" + fotos[aleatorio];  
    }
}
