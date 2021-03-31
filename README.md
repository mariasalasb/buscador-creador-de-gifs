Proyecto GIFOS para Acámica

El proyecto GifOS consiste en la realización de una web/app que esté integrada a los endpoints disponibilizados por Giphy para sugerencias, búsquedas y creación de gifs. El look and feel de la web fue diseñada por Acámica.

Secciones del proyecto:

-Buscador de Gif con resultados sugeridos, renderizados en una grilla (desktop) estilada (CSS) que muestra título y usuario creador del gif y permite maximizar el gif, descargarlo o guardarlo en localstorage para visualizarlo en la sección de favoritos. En mobile se visualizan estas opciones al hacer click sobre el gif.

-Trendings: sección que muestra los trendings del momento, para desktop se muestran 3 gifs y para mobile 1. Todos con la misma grilla de la sección anterior.

-Creador de Gif: Implementado con la librería RecordRTC, permite grabar un video desde la webcam del usuario y subirlo al servidor de Giphy con el endpoint correspondiente, estos son guardados en una variable local para inmediatamente añadirlos a la sección 'Mis Gifos'. Dentro de la sección se disponibiliza la opción de descargar el gif creado y copiar su URL.

-Mis Gifos: Muestra los gifs creados en la sección anterior que fueron guardados en localstorage.



URL


Tecnologías utilizadas

-HTML5:
Etiquetas semánticas.
Validación de código.
Principios de diseño UX/UI
Buenas prácticas.

-CSS3:
Responsive design.
Cross browser & display.
Flexbox-Grid.

-Javascript:
Condicionales, arrays, iteraciones.
DOM + Events handler.
APIrest. (http GET and POST requests).
Paradigma asíncrono. Fetch. Async/Await. Promises.
Uso de librerías RecordRTC, JQuery.
