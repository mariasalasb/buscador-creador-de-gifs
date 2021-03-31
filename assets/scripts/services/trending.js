//////TRENDING
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
        <img src= " ${img} " class=tr onclick="enlarge('${img}','${title}','${user}','${idd}','${slug}')">
        <div class=overlay>
                <div class=user> ${user}</div>
                <div class=titulo> ${title}</div>
            <div class=icns>
                <img src=" ./img/icon-fav.svg " onclick="favv(event)" id="${idd}" class=ics style="background-color: white; opacity: 0.7; border-radius: 20%">

                <img src=" ./img/icon-download.svg "  class=ics onmouseover=" this.src='./img/icon-download-hover.svg' " onmouseout="this.src='./img/icon-download.svg'" onclick=descargar("${img}","${slug}")>

                <img src=" ./img/icon-max-normal.svg " class=ics onmouseover=" this.src='./img/icon-max-hover.svg' " onmouseout="this.src='./img/icon-max-normal.svg'" onclick="enlarge('${img}','${title}','${user}')">
        `;
        
        const listItem = document.createElement('div');
        listItem.classList.add("gif_trending", "col-12", "colu-4");
        listItem.innerHTML=giftr;
        listatrending.appendChild(listItem);     

        });
       
    });