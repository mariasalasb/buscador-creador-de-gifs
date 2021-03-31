/////LOG DE LA RESPUESTA DE TRENDING
 fetch("https://api.giphy.com/v1/gifs/trending?api_key=vdI30nRgf2Wb9P1vmXSmvjrQrfDU1xtR")
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        console.log(data);
    }) 

/* //////TRENDING
const listatrending=document.querySelector('.trendinggif')

fetch("https://api.giphy.com/v1/gifs/trending?api_key=vdI30nRgf2Wb9P1vmXSmvjrQrfDU1xtR&limit=3")
.then( tipoDeDato => tipoDeDato.json())
.then(data => {
    const results=data.data;
    results.forEach( gif => {
        const title = gif.title;
        const slug= gif.slug;
        const img= gif.images.original.url;
        const user = gif.username;
        const url = gif.images.original_mp4.mp4;
        const idd = gif.id;

        const giftr= `
        <img src= " ${img} " class=tr>
        <div class=overlay>
                <div class=user> ${user}</div>
                <div class=titulo> ${title}</div>
            <div class=icns>
                <img src=" ./img/icon-fav.svg " onclick="favv(event)" id="${idd}" class=ics onmouseover=" this.src='./img/icon-fav-hover.svg' " onmouseout="this.src='./img/icon-fav.svg'">

                <img src=" ./img/icon-download.svg "  class=ics onmouseover=" this.src='./img/icon-download-hover.svg' " onmouseout="this.src='./img/icon-download.svg'" onclick=descargar("${img}","${slug}")>

                <img src=" ./img/icon-max-normal.svg " class=ics onmouseover=" this.src='./img/icon-max-hover.svg' " onmouseout="this.src='./img/icon-max-normal.svg'" onclick="enlarge('${img}','${title}','${user}')">
        `;
        
        const listItem = document.createElement('div');
        listItem.classList.add("gif_trending", "col-12", "colu-4");
        listItem.innerHTML=giftr;
        listatrending.appendChild(listItem);     

        });
       
    }); */

/* //////DOWNLOAD
descargar = async (urlimg, titulo) => {
    let a = document.createElement('a');
    let response = await fetch(urlimg);
    let file = await response.blob();
    a.download = titulo;
    a.href = window.URL.createObjectURL(file);
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
    a.click();
}

///////ENLARGE
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var captionText2 = document.getElementById("caption2");

function enlarge(im,titl,us) {
  modal.style.display = "block";
  modalImg.src = im;
  captionText.innerHTML = us ;
  captionText2.innerHTML = titl ;
}

//////CERRAR MODAL
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
 */
/* ///////FAVORITOS A LOCAL STORAGE
const favo=document.querySelector('.misf')
var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
function favv(event) {
        var id = event.target.id,
        item = event.target,
        index = favorites.indexOf(id);
        if (index == -1) {
            favorites.push(id);
            item.classList.add("fav");
          // item ya es favorito
          } else {
            favorites.splice(index, 1);
            location.reload();

          }
        // guardar arreglo local storage
        localStorage.setItem('favorites', JSON.stringify(favorites));
        /*document.getElementById("demi").innerHTML = favorites[0] + ", " + favorites[1];
    };*/
    /*
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
fetch("https://api.giphy.com/v1/gifs?api_key=vdI30nRgf2Wb9P1vmXSmvjrQrfDU1xtR&ids=" +favstring)
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
        <img src= " ${img} " class=se>
        <div class=overlay>
                <div class=user> ${user}</div>
                <div class=titulo> ${title}</div>
            <div class=icns2>
                <img src=" ./img/icon-fav-active.svg " onclick="favv(event)" id="${idd}" class=ics style="background-color: white; opacity: 0.7; border-radius: 20%">

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
var u = document.getElementById("buscador");
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
        // crear_gif.classList.remove('mostrar');
        crear_gif.classList.add('ocultar'); //
        trending_gifs.classList.remove('mostrar');
        trending_gifs.classList.add('ocultar');
    }
}); */

/* ///////MIS GIFOS
var seccion_gif=document.getElementById("misgif");

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
});


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
console.log(misgifostring); */

/* //////MODO NOCTURNO
document.getElementById("boton").addEventListener("click", function() {
    var v = document.getElementById("footer");
    var w = document.getElementsByTagName("header")[0];
    var x = document.getElementsByTagName("h5");
    var y = document.getElementsByTagName("h6");
    var z = document.getElementsByClassName("lin");
    var i = document.getElementsByClassName("ini");
    var ii = document.getElementsByClassName("ini2");
    var o = document.getElementById("gifs");
    var p = document.getElementsByTagName("a");
    var q = document.getElementById("boton");
    var m = document.getElementsByClassName("imgchange");
        if (w.className == 'nocturno') {
            w.className =p[0].className =p[1].className =q.className= 'diurno';
            document.querySelectorAll('#buscador, #misfav, #misgif, #creargif').forEach(el => el.classList.add('diurno'))
            document.querySelectorAll('#buscador, #misfav,#misgif, #creargif').forEach(el => el.classList.remove('nocturno'))
            o.className='gifdiurno';
            v.className  = 'footerdiurno';
            x.color=y.color="#000000";
            z[0].id=z[1].id= 'lindiurno';
            m[0].src= "./img/logo-desktop.svg";
            m[2].src= "./img/button-crear-gifo.svg";
            m[3].src= "./img/icon-search.svg";
            m[4].src= "./img/camara.svg";
            m[5].src= "./img/pelicula.svg";
            m[6].src= "./img/button-slider-left.svg";
            m[7].src= "./img/button-slider-right.svg";
        }
        else {
            v.className =w.className =p[0].className =p[1].className=q.className= 'nocturno';
            document.querySelectorAll('#buscador, #misfav, #misgif, #creargif').forEach(el => el.classList.add('nocturno'))
            document.querySelectorAll('#buscador, #misfav, #misgif, #creargif').forEach(el => el.classList.remove('diurno'))
            o.classList.remove('gifinitial');
            o.classList.add('gifnocturno');
            i[0].classList.remove('ini');
            ii[0].classList.remove('ini2');
            x.color=y.color="#FFFFFF";
            z[0].id=z[1].id='linnocturno';
            m[0].src= "./img/Logo-modo-noc.svg";
            m[2].src= "./img/CTA-crar-gifo-modo-noc.svg";
            m[3].src= "./img/icon-search-modo-noct.svg";
            m[4].src= "./img/camara-modo-noc.svg";
            m[5].src= "./img/pelicula-modo-noc.svg";
            m[6].src= "./img/button-slider-left-md-noct.svg";
            m[7].src= "./img/button-slider-right-md-noct.svg";
        }
}) ; */
//////CREAR GIFS
/* var crear_gif=document.getElementById("creargif");

document.getElementById("botoncreargif").addEventListener("click", function() {
    if(crear_gif.className.includes('mostrar')){
        crear_gif.classList.remove('mostrar');
        crear_gif.classList.add('ocultar');
        u.classList.remove('ocultar');
        u.classList.add('mostrar');
        document.getElementById("botoncreargif").src= "./img/button-crear-gifo.svg";
        trending_gifs.classList.remove('ocultar');
        trending_gifs.classList.add('mostrar');
        document.getElementById("com").classList.remove('ocultar');
        document.getElementById("canv1").classList.remove('ocultar');
        document.getElementById("canv2").classList.add('ocultar');
        document.getElementById("canv2").classList.remove('mostrar');
        document.getElementById("cam").classList.remove('mostrar');
        document.getElementById("cam").classList.add('ocultar');
    }
    else{
        crear_gif.classList.remove('ocultar');
        crear_gif.classList.add('mostrar');
        u.classList.remove('mostrar');
        u.classList.add('ocultar');
        seccion_fav.classList.remove('mostrar');
        seccion_fav.classList.add('ocultar');
        seccion_gif.classList.remove('mostrar');
        seccion_gif.classList.add('ocultar');
        document.getElementById("botoncreargif").src= "./img/CTA-crear-gifo-active.svg";
        trending_gifs.classList.remove('mostrar');
        trending_gifs.classList.add('ocultar');
    }
});

//////CAMARA
document.getElementById("com").addEventListener("click", function() {
    document.getElementById("com").classList.add('ocultar');
    document.getElementById("canv1").classList.add('ocultar');
    document.getElementById("canv2").classList.remove('ocultar');
    document.getElementById("canv2").classList.add('mostrar');
    document.getElementById("uno").classList.remove('diurno');
    document.getElementById("uno").classList.add('lindiurno');

    
        var video = document.querySelector("#video");
        if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function (stream) {
                document.getElementById("grab").classList.remove('ocultar');
                document.getElementById("grab").classList.add('mostrar');
                document.getElementById("canv2").classList.remove('mostrar');
                document.getElementById("canv2").classList.add('ocultar');
                document.getElementById("cam").classList.remove('ocultar');
                document.getElementById("cam").classList.add('mostrar');
                document.getElementById("uno").classList.remove('lindiurno');
                document.getElementById("uno").classList.add('diurno');
                document.getElementById("dos").classList.remove('diurno');
                document.getElementById("dos").classList.add('lindiurno');
                video.srcObject = stream;
            })
            .catch(function (err0r) {
            console.log("Something went wrong!");
            });
        }

}) ;
 */

/* /////////AUTOCOMPLETE
document.getElementById("busca").addEventListener('input', function longitud(){
    const xxx = document.getElementById("busca").value;
    if(xxx.length>0){
        autocomplete();
    }
    else{
    }
})

function autocomplete() {
    var xxx = document.getElementById("busca").value;
    var auto=document.getElementsByClassName("sugerencias");
    
    fetch("https://api.giphy.com/v1/gifs/search/tags?api_key=vdI30nRgf2Wb9P1vmXSmvjrQrfDU1xtR&q=" + xxx + "&limit=3")
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        console.log(data);
        const results=data.data;
        document.querySelectorAll('.sugerencias').forEach(el => el.classList.remove('ocultar'))
        document.querySelectorAll('.sugerencias').forEach(el => el.classList.add('mostrar'))
        document.querySelectorAll('.icon-busc0').forEach(el => el.classList.remove('ocultar'))
        document.querySelectorAll('.icon-busc0').forEach(el => el.classList.add('mostrar'))
        document.getElementById("lupa").src= "./img/close.svg";
        auto[0].innerHTML=`<button onclick="clicksearch(event,1)" id="${results[0].name}"><img src= "./img/icon-search.svg" class="icon-busc2 imgchange" onclick="clicksearch(event,1)" id="${results[0].name}"> ${results[0].name}</button>`;
        auto[1].innerHTML=`<button onclick="clicksearch(event,1)" id="${results[1].name}"><img src= "./img/icon-search.svg" class="icon-busc2 imgchange" onclick="clicksearch(event,1)" id="${results[1].name}"> ${results[1].name}</button>`;
        auto[2].innerHTML=`<button onclick="clicksearch(event,1)" id="${results[2].name}"><img src= "./img/icon-search.svg" class="icon-busc2 imgchange" onclick="clicksearch(event,1)" id="${results[2].name}"> ${results[2].name}</button>`;
        /*        auto[0].innerHTML=`<img src= "./img/icon-search.svg" class="icon-busc2 imgchange" onclick="clicksearch(event)" id="${results[0].name}"> ${results[0].name}`;

    })
}/*

/* /////// CERRAR AUTOCOMPLETE
function cerrar(){
    document.getElementById("lupa").src= "./img/icon-search.svg";
    document.querySelectorAll('.sugerencias').forEach(el => el.classList.remove('mostrar'))
    document.querySelectorAll('.sugerencias').forEach(el => el.classList.add('ocultar'))
    document.querySelectorAll('.icon-busc0').forEach(el => el.classList.remove('mostrar'))
    document.querySelectorAll('.icon-busc0').forEach(el => el.classList.add('ocultar'))
    document.getElementById("busca").value='';
}

/////// SEARCH
var ttt=12;
document.getElementById("mas").addEventListener("click", function(){
    ttt=ttt+12;
    console.log(ttt);
    clicksearch(ttt);
});
function clicksearch(x,y) {
    if(x==0){
        var xxx = document.getElementById("busca").value;
    }
    else{
        var xxx=event.target.id;
    }
    
    const buscador=document.querySelector('.busq')
    var yyy = document.getElementsByTagName("h3")[0];
    var zzz = document.getElementsByTagName("p")[0];
    yyy.innerHTML=xxx;
    zzz.innerHTML='';
    var mmm = document.getElementById("mas");
    mmm.innerHTML='VER MÁS';
    mmm.className='mass';
    
    fetch("https://api.giphy.com/v1/gifs/search?api_key=vdI30nRgf2Wb9P1vmXSmvjrQrfDU1xtR&q=" + xxx + "&limit=" + ttt)
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        console.log(data);
        buscador.innerHTML="";
        const results=data.data;
        results.forEach( gif => {
        const title = gif.title;
        const slug = gif.slug;
        const img= gif.images.original.url;
        const user = gif.username;
        const url = gif.images.original_mp4.mp4;
        const idd = gif.id;

        const gifse= `
        <img src= " ${img} " class=se>
        <div class=overlay>
                <div class=user> ${user}</div>
                <div class=titulo> ${title}</div>
            <div class=icns2>
                <img src=" ./img/icon-fav.svg " onclick="favv(event)" id="${idd}" class=ics onmouseover=" this.src='./img/icon-fav-hover.svg' " onmouseout="this.src='./img/icon-fav.svg'" >

                <img src=" ./img/icon-download.svg "  class=ics onmouseover=" this.src='./img/icon-download-hover.svg' " onmouseout="this.src='./img/icon-download.svg'" onclick=descargar("${img}","${slug}")>

                <img src=" ./img/icon-max-normal.svg " class=ics onmouseover=" this.src='./img/icon-max-hover.svg' " onmouseout="this.src='./img/icon-max-normal.svg'" onclick="enlarge('${img}','${title}','${user}')">
        `;
       
        const listItem = document.createElement('div');
        listItem.classList.add("gif_busc", "col-6", "colu-3");
        listItem.innerHTML=gifse;
        buscador.appendChild(listItem);
        cerrar();
        document.getElementById("busca").value=xxx;
        });
    }); 
}

////////SEARCH CON ENTER
document.getElementById("busca").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     /*document.getElementById("search").click();//
     autocomplete();
    }
  });  */

///////MENU HAMBURGUESA

/*   document.getElementById("burg").addEventListener("click", function() {
    //document.getElementsByTagName("body")[0].className= "bodyfixed";
    document.getElementsByTagName("body")[0].setAttribute("class", "bodyfixed");
    //document.getElementsByTagName("body")[0].classList.add("bodyfixed");

    const element = document.getElementById("menuu");
    element.classList.remove("menu", "col-0");
    element.classList.add("col-12", "menudos");
    document.getElementById("menuhamburguesa").innerHTML="<button id='burg2' ><img src="+ './img/close.svg' +" alt='cerrar_menu_hamburguesa'></img></button>";

    document.getElementById("burg2").addEventListener("click", function() {
        document.getElementById("menuhamburguesa").innerHTML="<button id='burg' ><img src="+ './img/burger.svg' +" class='img-burg imgchange' id='bu' alt='menu_hamburguesa'></img></button>";
        element.classList.remove("col-12", "menudos");
        element.classList.add("menu", "col-0");

        document.getElementsByTagName("body")[0].classList.remove("bodyfixed");
        document.getElementsByTagName("body")[0].removeAttribute("class");
  });
  
}); */

function menuham(){
    const element = document.getElementById("menuu");
    if(element.classList.contains("menu")){
        document.getElementsByTagName("body")[0].setAttribute("class", "bodyfixed");
        element.classList.remove("menu", "col-0");
        element.classList.add("col-12", "menudos");
        document.getElementById("menuhamburguesa").innerHTML="<button onclick='menuham()' id='burg'><img src="+ './img/close.svg' +" alt='cerrar_menu_hamburguesa' class='img-burg imgchange' id='bu2'></img></button>";
        if(localStorage.getItem("nocturno") =="si"){
            document.getElementById("bu2").src="./img/close-modo-noct.svg";
        }
        else if(localStorage.getItem("nocturno") =="no"){
            document.getElementById("bu2").src="./img/close.svg";
        }
        else{
            document.getElementById("bu2").src="./img/close.svg";
        }
    }
    else if (element.classList.contains("menudos") ||element.classList.contains("menudosnoct")){
        document.getElementById("menuhamburguesa").innerHTML="<button onclick='menuham()' id='burg'><img src="+ './img/burger.svg' +" class='img-burg imgchange' id='bu' alt='menu_hamburguesa' id='bu'></img></button>";
        element.classList.remove("col-12", "menudos");
        element.classList.add("menu", "col-0");
        document.getElementsByTagName("body")[0].classList.remove("bodyfixed");
        document.getElementsByTagName("body")[0].removeAttribute("class");
        if(localStorage.getItem("nocturno") =="si"){
            document.getElementById("bu").src="./img/burger-modo-noct.svg";
        }
        else if(localStorage.getItem("nocturno") =="no"){
            document.getElementById("bu").src="./img/burger.svg";
        }
        else{
            document.getElementById("bu").src="./img/burger.svg";
        }
    }
    else{}
};