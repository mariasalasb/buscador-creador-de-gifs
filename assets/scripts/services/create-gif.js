//////TRENDING
/* const listatrending=document.querySelector('.trendinggif')

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

//////MODO NOCTURNO
/* document.getElementById("boton").addEventListener("click", function() {
  var v = document.getElementById("footer");
  var w = document.getElementsByTagName("header")[0];
  var x = document.getElementsByTagName("h5");
  var y = document.getElementsByTagName("h6");
  var z = document.getElementsByClassName("lin");
  var i = document.getElementsByClassName("ini");
  var ii = document.getElementsByClassName("ini2");
  //var o = document.getElementById("gifs");//
  var p = document.getElementsByTagName("a");
  var q = document.getElementById("boton");
  var m = document.getElementsByClassName("imgchange");
      if (w.className == 'nocturno') {
          w.className =p[0].className =p[1].className =q.className= 'diurno';
          document.querySelectorAll('#buscador, #misfav, #misgif, #creargif').forEach(el => el.classList.add('diurno'))
          document.querySelectorAll('#buscador, #misfav,#misgif, #creargif').forEach(el => el.classList.remove('nocturno'))
         // o.className='gifdiurno';//
          v.className  = 'footerdiurno';
          x.color=y.color="#000000";
          z[0].id=z[1].id= 'lindiurno';
          m[0].src= "./img/logo-desktop.svg";
          m[2].src= "./img/button-crear-gifo.svg";
          m[3].src= "./img/icon-search.svg";
          m[4].src= "./img/camara.svg";
          m[5].src= "./img/pelicula.svg";
          // m[6].src= "./img/button-slider-left.svg";
          // m[7].src= "./img/button-slider-right.svg";
      }
      else {
          v.className =w.className =p[0].className =p[1].className=q.className= 'nocturno';
          document.querySelectorAll('#buscador, #misfav, #misgif, #creargif').forEach(el => el.classList.add('nocturno'))
          document.querySelectorAll('#buscador, #misfav, #misgif, #creargif').forEach(el => el.classList.remove('diurno'))
         /* o.classList.remove('gifinitial');
          o.classList.add('gifnocturno');//
          i[0].classList.remove('ini');
          ii[0].classList.remove('ini2');
          x.color=y.color="#FFFFFF";
          z[0].id=z[1].id='linnocturno';
          m[0].src= "./img/Logo-modo-noc.svg";
          m[2].src= "./img/CTA-crar-gifo-modo-noc.svg";
          m[3].src= "./img/icon-search-modo-noct.svg";
          m[4].src= "./img/camara-modo-noc.svg";
          m[5].src= "./img/pelicula-modo-noc.svg";
          // m[6].src= "./img/button-slider-left-md-noct.svg";
          // m[7].src= "./img/button-slider-right-md-noct.svg";
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
}); */

///////MIS GIFOS
/* var seccion_gif=document.getElementById("misgif");

document.getElementById("botonmisgif").addEventListener("click", function() {
    if(seccion_gif.className.includes('mostrar')){
        seccion_gif.classList.remove('mostrar');
        seccion_gif.classList.add('ocultar');
        /*u.classList.remove('ocultar');
        u.classList.add('mostrar');//
        trending_gifs.classList.remove('mostrar');
        trending_gifs.classList.add('ocultar');
        crear_gif.classList.remove('ocultar');
        crear_gif.classList.add('mostrar');
    }
    else{
        seccion_gif.classList.remove('ocultar');
        seccion_gif.classList.add('mostrar');
        /*u.classList.remove('mostrar');
        u.classList.add('ocultar');//
        seccion_fav.classList.remove('mostrar');
        seccion_fav.classList.add('ocultar');
        crear_gif.classList.remove('mostrar');
        crear_gif.classList.add('ocultar');
        trending_gifs.classList.remove('ocultar');
        trending_gifs.classList.add('mostrar');
    }
}); */

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
              if (localStorage.getItem("nocturno") =="si") {
            }
            else {
              document.getElementById("uno").classList.add('diurno');

            }
              document.getElementById("dos").classList.remove('diurno');
              document.getElementById("dos").classList.add('lindiurno');
              video.srcObject = stream;
          })
          .catch(function (err0r) {
          console.log("Something went wrong!");
          });
      }

}) ;

let video = document.querySelector("#video");
let buffer = document.querySelectorAll(".buffer-bar-item");

// Para timer de gif
let recording = false;
/* 
function getStream() {
  document.querySelector(".create-gif-section").style.display = "none";
  document.querySelector(".video-recording").style.display = "block";
  const constraints = {
    video: true,
    audio: false
  };
  navigator.mediaDevices
  .getUserMedia(constraints)
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(error => {
    console.error(error);
  });
} */

function startRecording() {

  document.getElementById("grab").classList.remove('mostrar');
  document.getElementById("grab").classList.add('ocultar');
  document.getElementById("fin").classList.remove('ocultar');
  document.getElementById("fin").classList.add('mostrar');

  recording = true;
  recorder = RecordRTC(video.srcObject, {
    type: "gif",
    frameRate: 1,
    quality: 10,
    onGifRecordingStarted: function () {
      console.log("started");
    }
  });

  recorder.startRecording();
  getDuration();

  // document.getElementById("titleBox").innerHTML = "Capturando Tu Guifo";
  // document.getElementById("startRecording").style.display = "none";
  // document.querySelector(".stop").style.display = "block";
}

function stopRecording() {
  document.getElementById("timer").style.display = "none";
  document.getElementById("fin").classList.remove('mostrar');
  document.getElementById("fin").classList.add('ocultar');
  document.getElementById("upload").classList.remove('ocultar');
  document.getElementById("upload").classList.add('mostrar');
  document.getElementById("rep").classList.remove('ocultar');
  document.getElementById("rep").classList.add('mostrar');
  

  video.srcObject.getTracks().forEach(function (track) {
    track.stop();
  });
  recorder.stopRecording(function () {
    recording = false;
    // Se oculta video y muestra el preview del gif
    video.style.display = "none";
    document.querySelector(".gif-preview-container").style.display = "block";
    preview = document.getElementById("gif-preview");
    preview.src = URL.createObjectURL(recorder.getBlob());
    /*document.getElementById("titleBox").innerHTML = "Vista Previa";*/

    // Creamos el formulario para enviarlo por el body a giphy
    let form = new FormData();
    form.append("file", recorder.getBlob(), "myGif.gif");

    document.getElementById("upload").addEventListener("click", () => {
      document.getElementById("upload").classList.remove('mostrar');
      document.getElementById("upload").classList.add('ocultar');
      document.getElementById("rep").classList.remove('mostrar');
      document.getElementById("rep").classList.add('ocultar');
      uploadGif(form);
    });
  });
  /*document.querySelector(".stop").style.display = "none";
  document.querySelector(".btns-upload-gif").style.display = "flex";*/
}

function uploadGif(gif) {
  document.getElementById("dos").classList.remove('lindiurno');
  document.getElementById("tres").classList.remove('diurno');
  document.getElementById("tres").classList.add('lindiurno');
  if (localStorage.getItem("nocturno") =="si") {
  }
  else {
    document.getElementById("dos").classList.add('diurno');

  }

  document.querySelector(".c").style.display = "block";
  document.querySelector('.c').innerHTML = `
    <img src=" ./img/loader.svg " class="loader">
    <p class='subiendo'>Estamos subiendo tu GIFO<p>
  `;
  
  fetch(
    "https://upload.giphy.com/v1/gifs?api_key=vdI30nRgf2Wb9P1vmXSmvjrQrfDU1xtR",
    {
      method: "POST",
      body: gif
    }
  )
    .then(response => {
      if (response.status === 200) {
        console.log('Gif subido!');
        return response.json();
      } else {
        console.log('error.');
      }
    })
    .then(data => {
      console.log(data);
      fetch(
        `https://api.giphy.com/v1/gifs/${data.data.id}?&api_key=vdI30nRgf2Wb9P1vmXSmvjrQrfDU1xtR`
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          /* localStorage.setItem(
            `mygif-${data.data.id}`,
            JSON.stringify(data.data)
          ); */
          const gifo=document.querySelector('.misg')
          var misgifs = JSON.parse(localStorage.getItem("misgifos")) || [];
          var id = data.data.id,
          /*item = event.target,*/
          index = misgifs.indexOf(id);
            if (index == -1) {
            misgifs.push(id);
            /* item.classList.add("fav");*/
            // item ya es favorito
            } else {
            misgifs.splice(index, 1);
            }
            // guardar arreglo local storage
            localStorage.setItem('misgifos', JSON.stringify(misgifs));
            //document.getElementById("demi").innerHTML = misgifos[0] + ", " + misgifos[1];

          const slug= data.data.slug;
          const img= data.data.images.original.url;
          

          /*<img class='gif-modal' src='${data.data.images.original.url}'></img>*/

          document.querySelector('.c').innerHTML = `
          <img src=" ./img/icon-download.svg "  class='ics uno' onmouseover=" this.src='./img/icon-download-hover.svg' " onmouseout="this.src='./img/icon-download.svg'" onclick=descargar("${img}","${slug}")>

          <img src=" ./img/icon-link-normal.svg " onclick=copy("${img}") class=ics onmouseover=" this.src='./img/icon-link-hover.svg' " onmouseout="this.src='./img/icon-link-normal.svg'">

          <img src=" ./img/ok.svg " class="loader">

          <p class='subiendo'>GIFO subido con éxito<p>
          `;
        });
    });
}

//////MOSTRAR MIS GIFOS VACIO O NO
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
const gifo=document.querySelector('.misg');

/* ///////FUNCION PARA ELIMINAR DE MISGIF
var misgifs = JSON.parse(localStorage.getItem("misgifos")) || [];

function giff(event) {
    var id = event.target.id,
    /*item = event.target,//
    index = misgifs.indexOf(id);
    if (index == -1) {
    misgifs.push(id);
    /* item.classList.add("fav");//
    // item ya es favorito
    } else {
    misgifs.splice(index, 1);
    }
    // guardar arreglo local storage
    localStorage.setItem('misgifos', JSON.stringify(misgifs));
    location.reload();
} */

///////LLAMAR A API CON STRING DE MISGIF
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
        <img src= " ${img} " class=se onclick="enlarge('${img}','${title}','${user}')">
        <div class=overlay>
                <div class=user> ${user}</div>
                <div class=titulo> ${title}</div>
            <div class=icns2>
                <img src=" ./img/icon-trash-normal.svg" onmouseover=" this.src='./img/icon-trash-hover.svg' " onmouseout="this.src='./img/icon-trash-normal.svg'" onclick="giff(event)" id="${idd}" class=ics style="background-color: white; opacity: 0.7; border-radius: 20%">

                <img src=" ./img/icon-download.svg "  class=ics onmouseover=" this.src='./img/icon-download-hover.svg' " onmouseout="this.src='./img/icon-download.svg'" onclick=descargar("${img}","${slug}")>

                <img src=" ./img/icon-max-normal.svg " class=ics onmouseover=" this.src='./img/icon-max-hover.svg' " onmouseout="this.src='./img/icon-max-normal.svg'" onclick="enlarge('${img}','${title}','${user}')">
        `;
       
        const listItem = document.createElement('div');
        listItem.classList.add("gif_busc", "col-6", "colu-3");
        listItem.innerHTML=gifse;
        gifo.appendChild(listItem);
        });
    });

//COPIAR

function copy(text) {
  const textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  textarea.value = text;
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert("Se copió la URL del GIFO");
  document.body.removeChild(textarea);
}
//DOWNLOAD
descargar = async (urlimg, titulo) => {
    let a = document.createElement('a');
    let response = await fetch(urlimg);
    let file = await response.blob();
    a.download = titulo;
    a.href = window.URL.createObjectURL(file);
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
    a.click();
}
// Cronometro
function getDuration() {
  let seconds = 0;
  let minutes = 0;
  let timer = setInterval(() => {
    if (recording) {
      if (seconds < 60) {
        if (seconds <= 9) {
          seconds = "0" + seconds;
        }
        document.getElementById("timer").style.display = "block";
        document.getElementById(
          "timer"
        ).innerHTML = `00:00:0${minutes}:${seconds}`;
        seconds++;
      } else {
        minutes++;
        seconds = 0;
      }
    } else {
      clearInterval(timer);
    }
  }, 1000);
}

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
          // item is already favorite
          } else {
            favorites.splice(index, 1);
          }
        // store array in local storage
        localStorage.setItem('favorites', JSON.stringify(favorites));
        /*document.getElementById("demi").innerHTML = favorites[0] + ", " + favorites[1];*/
        location.reload();
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
/*var u = document.getElementById("buscador");*/
var seccion_fav=document.getElementById("misfav");
var trending_gifs=document.getElementById("gifs");
var crear_gif=document.getElementById("creargif");

document.getElementById("botonfav").addEventListener("click", function() {
    if(seccion_fav.className.includes('mostrar')){
        seccion_fav.classList.remove('mostrar');
        seccion_fav.classList.add('ocultar');
        crear_gif.classList.remove('ocultar');
        crear_gif.classList.add('mostrar');
        /* u.classList.remove('ocultar');
        u.classList.add('mostrar');*/
        trending_gifs.classList.remove('mostrar');
        trending_gifs.classList.add('ocultar'); 
    }
    else{
        seccion_fav.classList.remove('ocultar');
        seccion_fav.classList.add('mostrar');
        // u.classList.remove('mostrar');
        // u.classList.add('ocultar');
        seccion_gif.classList.remove('mostrar');
        seccion_gif.classList.add('ocultar');
        crear_gif.classList.remove('mostrar');
        crear_gif.classList.add('ocultar');
        trending_gifs.classList.remove('ocultar');
        trending_gifs.classList.add('mostrar');
    }
});

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
};