/*
    var phrase = "La mejor forma de predecir el futuro es creándolo"
    1- saber la cantidad de palabras
    2- saber la cantidad de "a"
    3- crear una nueva frase usando sólo los caracteres que esten en posiciones nones
        "amjrf"
    4- crear una nueva frase usando sólo los caracteres que esten en posiciones pares
*/

var phrase = "La mejor forma de predecir el futuro es creándolo";
var fraseLength = phrase.length;
console.log(fraseLength)

for( var i = 0; i < 49; i ++ ){
    console.log (phrase.charAt(i))
}

var wordsPhrase = phrase.split(" ");
    console.log(`El numero de palabras es:
    ${phrase.split(" ").length} `)

var aMatches = phrase.match(/[aá]/gi)
    console.log(aMatches)


var elimVocales = phrase.replace(/[aeiou]/gi, " ")
    console.log(elimVocales);

/* Nueva frase pares */
var phrasePair = ''

for( var i = 0;  i < phrase.length; i ++){
    //condicional con modulo
    if (i % 2 == 0){
        phrasePair = phrasePair + phrase[i];// concatenacion de variable
    }
}
console.log (phrasePair )

var phraseNones = ''

for( var i = 0;  i < phrase.length; i ++){
    //condicional con modulo
    if (i % 2 == 1){
        phraseNones = phraseNones + phrase[i];// concatenacion de variable
    }
}
console.log (phraseNones)


/*
Segunda parte

Ejercicio 1.- Mostrar la misma frase en snake_case*/
var snakeCase = '';
for (var i = 0; i < phrase.length; i++) {
    snakeCase = phrase.replace(/ /g, '_');    
}
console.log(snakeCase);

/*Ejercicio 2.- Mostrar la misma frase en kebab-case*/

var kebabCase = '';
for (var i = 0; i < phrase.length; i++) {
    kebabCase = phrase.replace(/ /g, '-');    
}
console.log(kebabCase);

/*Ejercicio 3.- Mostrar la misma frase con todas las vocales en mayúscula*/

var mayusculas = phrase.replace(/[aáeéiíoóu]/gi, function (x) {
    return x.toUpperCase();
});
console.log(mayusculas)

/*Ejercicio  4.- Mostrar los primeros 10 caracteres de la frase*/

var firstChar = phrase.slice(0,10)
console.log(firstChar);


/*Ejercicio 5.- Mostrar los últimos 10 caracteres de la frase */
var lastChar = phrase.slice(-10)
console.log(lastChar);
