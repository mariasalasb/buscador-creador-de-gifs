//////DOWNLOAD
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

function enlarge(im,titl,us,id,slug) {
  //modal.style.display = "block";
  modal.classList.remove("ocultar");
  modal.classList.add("mostrar");
  modalImg.src = im;
  captionText.innerHTML = us ;
  captionText2.innerHTML = titl ;
  if(window.location.pathname==='/favorites.html'){
    const iconos= `
                <img src=" ./img/icon-fav-active.svg " onclick="favv(event)" id="${id}" class="ics fav" style="background-color: white; opacity: 0.7; border-radius: 20%"  >

                <img src=" ./img/icon-download.svg "  class=ics onmouseover=" this.src='./img/icon-download-hover.svg' " onmouseout="this.src='./img/icon-download.svg'"  onclick=descargar("${im}","${slug}")>
        `;
        document.getElementById("iconos").innerHTML=iconos;

}
else if (window.location.pathname==='/misgifs.html'){
  const iconos= `
                <img src=" ./img/icon-trash-normal.svg " onclick="borr(event)" id="${id}" class=ics style="background-color: white; opacity: 0.7; border-radius: 20%"  >

                <img src=" ./img/icon-download.svg "  class=ics onmouseover=" this.src='./img/icon-download-hover.svg' " onmouseout="this.src='./img/icon-download.svg'"  onclick=descargar("${im}","${slug}")>
        `;
        document.getElementById("iconos").innerHTML=iconos;

}
else{
  const iconos= `
                <img src=" ./img/icon-fav.svg " onclick="favv(event)" id="${id}" class=ics style="background-color: white; opacity: 0.7; border-radius: 20%"  >

                <img src=" ./img/icon-download.svg "  class=ics onmouseover=" this.src='./img/icon-download-hover.svg' " onmouseout="this.src='./img/icon-download.svg'"  onclick=descargar("${im}","${slug}")>
        `;
        document.getElementById("iconos").innerHTML=iconos;

}
       
        //const listItem = document.createElement('div');
        //listItem.innerHTML=gifse;
}

//////CERRAR MODAL
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  //modal.style.display = "none";
  modal.classList.remove("mostrar");
  modal.classList.add("ocultar");
}
