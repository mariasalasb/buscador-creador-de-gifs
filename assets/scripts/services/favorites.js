///////FAVORITOS A LOCAL STORAGE
const favo=document.querySelector('.misf')
var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function favv(event) {
        var id = event.target.id,
        item = event.target,
        index = favorites.indexOf(id);
        if (index == -1) {
            favorites.push(id);
            item.classList.add("fav");
            //document.getElementById(id).src="./img/icon-fav-active.svg";
            item.src="./img/icon-fav-active.svg";

          // item ya es favorito
          } 
        else {
            favorites.splice(index, 1);
            item.classList.remove("fav");
            //document.getElementById(id).src="./img/icon-fav.svg";
            item.src="./img/icon-fav.svg";

            if(window.location.pathname==='/favorites.html'){
                location.reload();
            }
            else{}
          }
        // guardar arreglo local storage
        localStorage.setItem('favorites', JSON.stringify(favorites));
        /*document.getElementById("demi").innerHTML = favorites[0] + ", " + favorites[1];*/
    };



///////CONSTRUIR STRING DE FAVORITOS
let favstring = "";
if(favorites.length == 0){
    const nada = document.createElement("div");
    nada.innerHTML="<img src=./img/icon-fav-sin-contenido.svg alt=favoritos-vacio class=icon-fav-vac></img> <h2>¡Guarda tu primer GIFO en Favoritos para que se muestre aquí!</h2>";
    favo.appendChild(nada);
}
else{
    
    favorites.forEach((id,index)=>{
        if(index>0){
            favstring+= "," + id;
        }
        else{
            favstring+= id;
        }
    })
};
console.log(favstring);

///////LLAMAR A API CON STRING DE FAVORITOS
var ttt=12;
document.getElementById("mas").addEventListener("click", function(){
    ttt=ttt+12;
    console.log(ttt);
    clicksearch(ttt);
});

fetch("https://api.giphy.com/v1/gifs?api_key=vdI30nRgf2Wb9P1vmXSmvjrQrfDU1xtR&ids=" +favstring + "&limit=" + ttt)
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
        var mmm = document.getElementById("mas");
        /*mmm.innerHTML='VER MÁS';
        mmm.className='mass';*/
        const gifse= `
        <img src= " ${img} " class=se onclick="enlarge('${img}','${title}','${user}','${idd}','${slug}')">
        <div class=overlay>
                <div class=user> ${user}</div>
                <div class=titulo> ${title}</div>
            <div class=icns2>
                <img src=" ./img/icon-fav-active.svg " onclick="favv(event)" id="${idd}" class="ics fav" style="background-color: white; opacity: 0.7; border-radius: 20%">

                <img src=" ./img/icon-download.svg "  class=ics onmouseover=" this.src='./img/icon-download-hover.svg' " onmouseout="this.src='./img/icon-download.svg'" onclick=descargar("${img}","${slug}")>

                <img src=" ./img/icon-max-normal.svg " class=ics onmouseover=" this.src='./img/icon-max-hover.svg' " onmouseout="this.src='./img/icon-max-normal.svg'" onclick="enlarge('${img}','${title}','${user}')">
        `;
       
        const listItem = document.createElement('div');
        listItem.classList.add("gif_busc", "col-6", "colu-3");
        listItem.innerHTML=gifse;
        favo.appendChild(listItem);
        });
    });

///////MOSTRAR FAVORITOS
/* var u = document.getElementById("buscador");
var seccion_fav=document.getElementById("misfav");
var trending_gifs=document.getElementById("gifs");

document.getElementById("botonfav").addEventListener("click", function() {
    if(seccion_fav.className.includes('mostrar')){
        seccion_fav.classList.remove('mostrar');
        seccion_fav.classList.add('ocultar');
        u.classList.remove('ocultar');
        u.classList.add('mostrar');
        trending_gifs.classList.remove('ocultar');
        trending_gifs.classList.add('mostrar');
    }
    else{
        seccion_fav.classList.remove('ocultar');
        seccion_fav.classList.add('mostrar');
        u.classList.remove('mostrar');
        u.classList.add('ocultar');
        seccion_gif.classList.remove('mostrar');
        seccion_gif.classList.add('ocultar');
        /* crear_gif.classList.remove('mostrar');
        crear_gif.classList.add('ocultar'); //
        trending_gifs.classList.remove('mostrar');
        trending_gifs.classList.add('ocultar');
    
    })  */