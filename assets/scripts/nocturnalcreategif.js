//////MODO NOCTURNO
//localStorage.setItem("nocturno", "");

/* document.getElementsByClassName("modonocturno")[0].addEventListener("click", function() {

    var v = document.getElementById("footer");
    var w = document.getElementsByTagName("header")[0];
    var x = document.getElementsByTagName("h5");
    var y = document.getElementsByTagName("h6");
    var z = document.getElementsByClassName("lin");
    var i = document.getElementsByClassName("ini");
    var ii = document.getElementsByClassName("ini2");
    var p = document.getElementsByTagName("a");
    var q = document.getElementById("boton");
    var m = document.getElementsByClassName("imgchange");
        if (localStorage.getItem("nocturno") =="si") {
            w.className =p[0].className =p[1].className =p[2].className =q.className= 'diurno';
            document.querySelectorAll('#buscador, #misfav, #misgif, #creargif').forEach(el => el.classList.add('diurno'))
            document.querySelectorAll('#buscador, #misfav,#misgif, #creargif').forEach(el => el.classList.remove('nocturno'))
            document.getElementById("uno").classList.remove("nocturno");
            document.getElementById("dos").classList.remove("nocturno");
            document.getElementById("tres").classList.remove("nocturno");
            document.getElementById("uno").classList.add("diurno");
            document.getElementById("dos").classList.add("diurno");
            document.getElementById("tres").classList.add("diurno");
            document.getElementById("com").classList.remove("nocturno");
            document.getElementById("grab").classList.remove("nocturno");
            document.getElementById("fin").classList.remove("nocturno");
            document.getElementById("upload").classList.remove("nocturno");
            v.className  = 'footerdiurno';
            x.color=y.color="#000000";
            z[0].id=z[1].id= 'lindiurno';
            document.getElementById("botoncreargif").src="./img/button-crear-gifo.svg"
            m[0].src= "./img/logo-desktop.svg";
            m[1].src="./img/burger.svg";
            m[2].src= "./img/button-crear-gifo.svg";
            m[3].src= "./img/camara.svg";
            m[4].src= "./img/pelicula.svg";
            localStorage.removeItem("nocturno");
            localStorage.setItem("nocturno", "no");
        }
        else {
            v.className =w.className =p[0].className =p[1].className=p[2].className =q.className= 'nocturno';
            document.querySelectorAll('#buscador, #misfav, #misgif, #creargif').forEach(el => el.classList.add('nocturno'))
            document.querySelectorAll('#buscador, #misfav, #misgif, #creargif').forEach(el => el.classList.remove('diurno'))
            document.getElementById("uno").classList.remove("diurno");
            document.getElementById("dos").classList.remove("diurno");
            document.getElementById("tres").classList.remove("diurno");
            document.getElementById("uno").classList.add("nocturno");
            document.getElementById("dos").classList.add("nocturno");
            document.getElementById("tres").classList.add("nocturno");
            document.getElementById("com").classList.add("nocturno");
            document.getElementById("grab").classList.add("nocturno");
            document.getElementById("fin").classList.add("nocturno");
            document.getElementById("upload").classList.add("nocturno");

            i[0].classList.remove('ini');
            ii[0].classList.remove('ini2');
            x.color=y.color="#FFFFFF";
            z[0].id=z[1].id='linnocturno';
            document.getElementById("botoncreargif").src="./img/CTA-crar-gifo-modo-noc.svg"
            m[0].src= "./img/Logo-modo-noc.svg";
            m[1].src="./img/burger-modo-noct.svg";
            m[2].src= "./img/CTA-crar-gifo-modo-noc.svg";
            m[3].src= "./img/camara-modo-noc.svg";
            m[4].src= "./img/pelicula-modo-noc.svg";
            localStorage.removeItem("nocturno");
            localStorage.setItem("nocturno", "si");
        }
}) ; */

    var v = document.getElementById("footer");
    var w = document.getElementsByTagName("header")[0];
    var x = document.getElementsByTagName("h5");
    var y = document.getElementsByTagName("h6");
    var z = document.getElementsByClassName("lin");
    var i = document.getElementsByClassName("ini");
    var ii = document.getElementsByClassName("ini2");
    var p = document.getElementsByTagName("a");
    var q = document.getElementById("boton");
    var m = document.getElementsByClassName("imgchange");

function diurno(){
    //w.className =p[0].className =p[1].className =p[2].className ='diurno';
    w.className='diurno';
    v.className  = 'footerdiurno';
    q.classList.remove('nocturnoletra');
    document.querySelectorAll('#buscador, #misfav, #misgif, #creargif').forEach(el => el.classList.add('diurno'))
    document.querySelectorAll('#buscador, #misfav,#misgif, #creargif').forEach(el => el.classList.remove('nocturno'))
    document.getElementById("uno").classList.remove("nocturno");
    document.getElementById("dos").classList.remove("nocturno");
    document.getElementById("tres").classList.remove("nocturno");
    document.getElementById("uno").classList.add("diurno");
    document.getElementById("dos").classList.add("diurno");
    document.getElementById("tres").classList.add("diurno");
    document.getElementById("com").classList.remove("nocturno");
    document.getElementById("grab").classList.remove("nocturno");
    document.getElementById("fin").classList.remove("nocturno");
    document.getElementById("upload").classList.remove("nocturno");
    v.className  = 'footerdiurno';
    x.color=y.color="#000000";
    z[0].id=z[1].id= 'lindiurno';
    i[0].style.color="#000000";
    ii[0].style.color="#000000";
    document.getElementById("botoncreargif").src="./img/button-crear-gifo.svg"
    m[0].src= "./img/logo-desktop.svg";
    m[1].src="./img/burger.svg";
    m[2].src= "./img/button-crear-gifo.svg";
    m[3].src= "./img/camara.svg";
    m[4].src= "./img/pelicula.svg";
    localStorage.removeItem("nocturno");
    localStorage.setItem("nocturno", "no");
}
function nocturno(){
    //v.className =w.className =p[0].className =p[1].className=p[2].className = 'nocturno';
    v.className =w.className ='nocturno';
    q.classList.add('nocturnoletra');
    document.querySelectorAll('#buscador, #misfav, #misgif, #creargif').forEach(el => el.classList.add('nocturno'))
    document.querySelectorAll('#buscador, #misfav, #misgif, #creargif').forEach(el => el.classList.remove('diurno'))
    document.getElementById("uno").classList.remove("diurno");
    document.getElementById("dos").classList.remove("diurno");
    document.getElementById("tres").classList.remove("diurno");
    document.getElementById("uno").classList.add("nocturno");
    document.getElementById("dos").classList.add("nocturno");
    document.getElementById("tres").classList.add("nocturno");
    document.getElementById("com").classList.add("nocturno");
    document.getElementById("grab").classList.add("nocturno");
    document.getElementById("fin").classList.add("nocturno");
    document.getElementById("upload").classList.add("nocturno");
    i[0].style.color="#FFFFFF";
    ii[0].style.color="#FFFFFF";
    x.color=y.color="#FFFFFF";
    z[0].id=z[1].id='linnocturno';
    document.getElementById("botoncreargif").src="./img/CTA-crar-gifo-modo-noc.svg"
    m[0].src= "./img/Logo-modo-noc.svg";
    m[1].src="./img/burger-modo-noct.svg";
    m[2].src= "./img/CTA-crar-gifo-modo-noc.svg";
    m[3].src= "./img/camara-modo-noc.svg";
    m[4].src= "./img/pelicula-modo-noc.svg";
    localStorage.removeItem("nocturno");
    localStorage.setItem("nocturno", "si");
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
            diurno();
            localStorage.removeItem("nocturno");
            localStorage.setItem("nocturno", "no");
        }
        else {
            nocturno();
            localStorage.removeItem("nocturno");
            localStorage.setItem("nocturno", "si");
        }
}) ;