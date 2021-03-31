/* const CONSTANTS = {
    APIKEY: "vdI30nRgf2Wb9P1vmXSmvjrQrfDU1xtR",
    BASE_PATH: 'https://api.giphy.com/v1/gifs',
    TRENDING: '/trending'
}

class GiphyService {

    static get(url, callback) {
        fetch(url + '?api_key=' + CONSTANTS.APIKEY )
        .then( dataType => dataType.json() )
        .then( data => callback(data) );
    }
    
    static trendingHandler = (data) => {
        console.log(data);
    }

    static trending() {
        this.get(CONSTANTS.BASE_PATH + CONSTANTS.TRENDING, this.trendingHandler);
    }
}

export default GiphyService; */


//si lo defino como static puedo llamarlo despues sin necesidad de crear una constante para llamar algun valor de la clase

