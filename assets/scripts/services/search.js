/////////AUTOCOMPLETE
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
        document.getElementById("lupa").classList.add('lupa');
        if (localStorage.getItem("nocturno") =="si") {
            document.getElementById("lupa").src= "./img/close-modo-noct.svg";
            auto[0].innerHTML=`<button onclick="clicksearch(event,1)" id="${results[0].name}"><img src= "./img/icon-search-modo-noct.svg" class="icon-busc2 imgchange" onclick="clicksearch(event,1)" id="${results[0].name}"> ${results[0].name}</button>`;
            auto[1].innerHTML=`<button onclick="clicksearch(event,1)" id="${results[1].name}"><img src= "./img/icon-search-modo-noct.svg" class="icon-busc2 imgchange" onclick="clicksearch(event,1)" id="${results[1].name}"> ${results[1].name}</button>`;
            auto[2].innerHTML=`<button onclick="clicksearch(event,1)" id="${results[2].name}"><img src= "./img/icon-search-modo-noct.svg" class="icon-busc2 imgchange" onclick="clicksearch(event,1)" id="${results[2].name}"> ${results[2].name}</button>`;
        }
        else{
            document.getElementById("lupa").src= "./img/close.svg";
            auto[0].innerHTML=`<button onclick="clicksearch(event,1)" id="${results[0].name}"><img src= "./img/icon-search.svg" class="icon-busc2 imgchange" onclick="clicksearch(event,1)" id="${results[0].name}"> ${results[0].name}</button>`;
            auto[1].innerHTML=`<button onclick="clicksearch(event,1)" id="${results[1].name}"><img src= "./img/icon-search.svg" class="icon-busc2 imgchange" onclick="clicksearch(event,1)" id="${results[1].name}"> ${results[1].name}</button>`;
            auto[2].innerHTML=`<button onclick="clicksearch(event,1)" id="${results[2].name}"><img src= "./img/icon-search.svg" class="icon-busc2 imgchange" onclick="clicksearch(event,1)" id="${results[2].name}"> ${results[2].name}</button>`;
        }
        
        /*        auto[0].innerHTML=`<img src= "./img/icon-search.svg" class="icon-busc2 imgchange" onclick="clicksearch(event)" id="${results[0].name}"> ${results[0].name}`;
*/
    })
}

/////// CERRAR AUTOCOMPLETE
function cerrar(){
    document.getElementById("lupa").src= "./img/icon-search.svg";
    document.querySelectorAll('.sugerencias').forEach(el => el.classList.remove('mostrar'))
    document.querySelectorAll('.sugerencias').forEach(el => el.classList.add('ocultar'))
    document.querySelectorAll('.icon-busc0').forEach(el => el.classList.remove('mostrar'))
    document.querySelectorAll('.icon-busc0').forEach(el => el.classList.add('ocultar'))
    document.getElementById("lupa").classList.remove('lupa');
    document.getElementById("busca").value='';
    if (localStorage.getItem("nocturno") =="si") {
        document.getElementById("lupa").src="./img/icon-search-modo-noct.svg";
    }
    else{}
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
    
    
    fetch("https://api.giphy.com/v1/gifs/search?api_key=vdI30nRgf2Wb9P1vmXSmvjrQrfDU1xtR&q=" + xxx + "&limit=" + ttt)
    .then( tipoDeDato => tipoDeDato.json())
    .then(data => {
        console.log(data);
        console.log(data.data.length);
        buscador.innerHTML="";
        const results=data.data;
        if(results.length == 0){
            const nada = document.createElement("div");
            nada.innerHTML="<img src=./img/icon-busqueda-sin-resultado.svg alt=favoritos-vacio class=icon-fav-vac></img> <h2>Intenta con otra búsqueda</h2>";
            buscador.appendChild(nada);
            cerrar();
        }
        else{
        var mmm = document.getElementById("mas");
        mmm.classList.remove("ocultar");
        mmm.classList.add("mostrar");
        mmm.innerHTML='VER MÁS';
        mmm.className='mass';
        if (localStorage.getItem("nocturno") =="si") {
            document.getElementById("mas").classList.remove("diurno", "mass");
            document.getElementById("mas").classList.add("nocturno", "massnocturno");
        }
        else {
            document.getElementById("mas").classList.remove("nocturno", "massnocturno");
            document.getElementById("mas").classList.add("diurno", "mass");

        }


        results.forEach( gif => {
            console.log(gif.length);
        
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
                <img src=" ./img/icon-fav.svg " onclick="favv(event)" id="${idd}" class=ics style="background-color: white; opacity: 0.7; border-radius: 20%"  >

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
    }

    }); 
}

////////SEARCH CON ENTER
document.getElementById("busca").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("search").click();
     /*autocomplete();*/
    }
  });

//////MODO NOCTURNO
//localStorage.setItem("nocturno", "");
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

function diurno(){
    //w.className =p[0].className =p[1].className=p[2].className =q.className= 'diurno';
    w.className = 'diurno';
    q.classList.remove('nocturnoletra');
    document.querySelectorAll('#buscador, #misfav, #misgif, #creargif').forEach(el => el.classList.add('diurno'))
    document.querySelectorAll('#buscador, #misfav,#misgif, #creargif').forEach(el => el.classList.remove('nocturno'))
    o.className='gifdiurno';
    v.className  = 'footerdiurno';
    x.color=y.color="#000000";
    z[0].id=z[1].id= 'lindiurno';
    i[0].style.color="#000000";
    ii[0].style.color="#000000";
    document.getElementById("botoncreargif").src="./img/button-crear-gifo.svg"
    document.getElementById("lupa").src="./img/icon-search.svg"
    document.getElementById("myModal").classList.remove("nocturno");
    document.getElementById("myModal").classList.add("diurno");
    document.getElementById("mas").classList.remove("nocturno", "massnocturno");
    document.getElementById("mas").classList.add("diurno", "mass");
    document.getElementsByClassName("close").src="./img/close.svg"
    document.getElementsByTagName("input")[0].className= 'diurno';
    //document.getElementById("bu").src="./img/burger.svg"
    //document.getElementById("bu2").src="./img/close.svg"
    m[0].src= "./img/logo-desktop.svg";
    m[3].src="./img/icon-search.svg"
}
function nocturno(){
    //v.className =w.className =p[0].className =p[1].className=p[2].className=q.className= 'nocturno';
    v.className =w.className = 'nocturno';
    q.classList.add('nocturnoletra');
    document.querySelectorAll('#buscador, #misfav, #misgif, #creargif').forEach(el => el.classList.add('nocturno'))
    document.querySelectorAll('#buscador, #misfav, #misgif, #creargif').forEach(el => el.classList.remove('diurno'))
    o.classList.remove('gifinitial');
    o.classList.add('gifnocturno');
    i[0].style.color="#FFFFFF";
    ii[0].style.color="#FFFFFF";
    x.color=y.color="#FFFFFF";
    z[0].id=z[1].id='linnocturno';
    document.getElementById("botoncreargif").src="./img/CTA-crar-gifo-modo-noc.svg"
    document.getElementById("myModal").classList.remove("diurno");
    document.getElementById("myModal").classList.add("nocturno");
    document.querySelectorAll(".close").forEach(ew=>ew.src="./img/close-modo-noct.svg")
    document.getElementsByTagName("input")[0].className= 'nocturno';
    document.getElementById("mas").classList.remove("diurno", "mass");
    document.getElementById("mas").classList.add("nocturno", "massnocturno");
    //document.getElementById("bu").src="./img/burger-modo-noct.svg";
    //document.getElementById("bu2").src="./img/close-modo-noct.svg";

    if(document.getElementById("lupa").classList.contains("lupa")){
        document.getElementById("lupa").src="./img/close-modo-noct.svg";
    }
    else {
        document.getElementById("lupa").src="./img/icon-search-modo-noct.svg";
    }
    m[0].src= "./img/Logo-modo-noc.svg";
    m[3].src="./img/icon-search-modo-noct.svg";
}
function mantainnoct(){
    if(localStorage.getItem("nocturno") =="si"){
        nocturno();
    }
    else if(localStorage.getItem("nocturno") =="no"){
        diurno();
    }
    else{
        diurno();
    }
};

document.getElementsByClassName("modonocturno")[0].addEventListener("click", function() {

        if (localStorage.getItem("nocturno") =="si") {
            if(screen.width<800){
                document.getElementById("menuu").style.backgroundColor = "rgba(87,46,229,0.90)";
            }
            else{};
            diurno();
            localStorage.removeItem("nocturno");
            localStorage.setItem("nocturno", "no");
        }
        else {
            nocturno();
            localStorage.removeItem("nocturno");
            localStorage.setItem("nocturno", "si");
            if(screen.width<800){
                document.getElementById("menuu").style.backgroundColor = "#000000";
            }
            else{}
        }
}) ;