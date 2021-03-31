///////MIS GIFOS
/* var seccion_gif=document.getElementById("misgif");

document.getElementById("botonmisgif").addEventListener("click", function() {
    if(seccion_gif.className.includes('mostrar')){
        seccion_gif.classList.remove('mostrar');
        seccion_gif.classList.add('ocultar');
        u.classList.remove('ocultar');
        u.classList.add('mostrar');
        trending_gifs.classList.remove('ocultar');
        trending_gifs.classList.add('mostrar');
    }
    else{
        seccion_gif.classList.remove('ocultar');
        seccion_gif.classList.add('mostrar');
        u.classList.remove('mostrar');
        u.classList.add('ocultar');
        seccion_fav.classList.remove('mostrar');
        seccion_fav.classList.add('ocultar');
        /* crear_gif.classList.remove('mostrar');
        crear_gif.classList.add('ocultar'); //
        trending_gifs.classList.remove('mostrar');
        trending_gifs.classList.add('ocultar');
    }
}); */

///////BORRAR GIF CREADO
var mygifs = JSON.parse(localStorage.getItem("misgifos")) || [];

function borr(event) {
        var id = event.target.id,
        item = event.target,
        index = favorites.indexOf(id);
        mygifs.splice(index, 1);
        localStorage.setItem('misgifos', JSON.stringify(mygifs));
        location.reload();
    };

var misgifos = JSON.parse(localStorage.getItem("misgifos")) || [];

let misgifostring = "";
if(misgifos.length == 0){
    const nada = document.createElement("div");
    nada.innerHTML="<img src=./img/icon-mis-gifos-sin-contenido.svg alt=mis-gifos-vacio class=icon-fav-vac></img> <h2>¡Anímate a crear tu primer GIFO!</h2>";
    document.querySelector('.misg').appendChild(nada);
}
else{
    
    misgifos.forEach((id,index)=>{
        if(index>0){
            misgifostring+= "," + id;
        }
        else{
            misgifostring+= id;
        }
    })
};
console.log(misgifostring);

///////LLAMAR A API CON STRING DE MIS GIFOS
fetch("https://api.giphy.com/v1/gifs?api_key=vdI30nRgf2Wb9P1vmXSmvjrQrfDU1xtR&ids=" +misgifostring)
.then( tipoDeDato => tipoDeDato.json())
.then(data => {
    const results=data.data;
    results.forEach( gif => {
        const title = gif.title;
        const slug = gif.slug;
        const img= gif.images.original.url;
        const user = gif.username;
        const url = gif.images.original_mp4.mp4;
        const idd = gif.id;

        const gifse= `
        <img src= " ${img} " class=se onclick="enlarge('${img}','${title}','${user}','${idd}','${slug}')">
        <div class=overlay>
                <div class=user> ${user}</div>
                <div class=titulo> ${title}</div>
            <div class=icns2>
                <img src=" ./img/icon-trash-normal.svg " onmouseover=" this.src='./img/icon-trash-hover.svg' " onmouseout="this.src='./img/icon-trash-normal.svg'" onclick="borr(event)" id="${idd}" class="ics" style="background-color: white; opacity: 0.7; border-radius: 20%">

                <img src=" ./img/icon-download.svg "  class=ics onmouseover=" this.src='./img/icon-download-hover.svg' " onmouseout="this.src='./img/icon-download.svg'" onclick=descargar("${img}","${slug}")>

                <img src=" ./img/icon-max-normal.svg " class=ics onmouseover=" this.src='./img/icon-max-hover.svg' " onmouseout="this.src='./img/icon-max-normal.svg'" onclick="enlarge('${img}','${title}','${user}')">
        `;
       
        const listItem = document.createElement('div');
        listItem.classList.add("gif_busc", "col-6", "colu-3");
        listItem.innerHTML=gifse;
        document.querySelector('.misg').appendChild(listItem);
        });
    });