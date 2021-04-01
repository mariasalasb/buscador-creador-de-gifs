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
    //w.className =p[0].className =p[1].className =p[2].className ='diurno';
    w.className='diurno';
    document.querySelectorAll('#buscador, #misfav, #misgif, #creargif').forEach(el => el.classList.add('diurno'))
    document.querySelectorAll('#buscador, #misfav,#misgif, #creargif').forEach(el => el.classList.remove('nocturno'))
    o.className='gifdiurno';
    v.className  = 'footerdiurno';
    q.classList.remove('nocturnoletra');
    x.color=y.color="#000000";
    z[0].id=z[1].id= 'lindiurno';
    i[0].style.color="#000000";
    ii[0].style.color="#000000";
    document.getElementById("botoncreargif").src="./img/button-crear-gifo.svg"
    document.getElementById("myModal").classList.remove("nocturno");
    document.getElementById("myModal").classList.add("diurno");
    document.getElementsByClassName("close").src="./img/close.svg"
    m[0].src= "./img/logo-desktop.svg";
    if(screen.width<800){
        document.getElementById("menuu").style.backgroundColor = "rgba(87,46,229,0.90)";
    }
    else{};

}
function nocturno(){
    //v.className =w.className =p[0].className =p[1].className=p[2].className = 'nocturno';
    v.className =w.className ='nocturno';
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
    m[0].src= "./img/Logo-modo-noc.svg";
    if(screen.width<800){
        document.getElementById("menuu").style.backgroundColor = "#000000";
    }
    else{};
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
            if(screen.width<800){
                document.getElementById("menuu").style.backgroundColor = "#000000";
            }
            else{};
            nocturno();
            localStorage.removeItem("nocturno");
            localStorage.setItem("nocturno", "si");

        }
}) ;