const promise = new Promise( function(resolve,reject){
    reject("error"); //segun el que este primero se ejecutara primero
    resolve("Hola mundo");
});

promise.then(function(value){
    console.log(value); //si la promesa se cumple ejecuta then
}).catch(function(value){
    console.log(value); //si la promesa no se cumple se ejecuta catch
})

fetch("https://pokeapi.co/api/v2/pokemon")
.then((tipoDeDato)=> tipoDeDato.json()) //* nota inferior
.then((data)=>{
    //console.log(data.results);

    data.results.forEach(function(pokemon){
        fetch(pokemon.url)
        .then(t=> t.json())
        .then((data_2)=>{
            console.log(data_2);
            console.log(pokemon.name);

        })
    })
})

//*parseamos el dato proveniente de una API porque de la API obtenemos texto plano

const mock='{"nombre":"Lucas"}' //al estar entre comillas simples es texto plano, no json
console.log(mock.name); //trae undefined porque al no ser json no trae nombre

const parsed=JSON.parse(mock);
console.log(parsed.name); //ahora si muestra el nombre correctamente por ser json