const readline = require("readline-sync")
const gameState = require("../gameState")
const input = require("readline-sync")

function sentenceTransformer(){
let frase = "She is happy"

console.log("Affirmative sentence:", frase)
console.log("")

let negativa = input.question("\nturn it into negative: ")
if(negativa === "She is not happy"){
    console.log("Negative: Correct!")
    gameState.addPoints(10)
} else {
    console.log("Negative: Wrong!")
    gameState.loseLife()
}

let pergunta = input.question("\nturn it into a question: ")
if(pergunta === "Is she happy?"){
    console.log("Question: Correct!")
    gameState.addPoints(10)
} else{
    console.log("Question: Wrong!")
    gameState.loseLife()
}

let contraida = input.question("\ntransform into contracted: ")
if(contraida === "She's happy"){
    console.log("Contracted: Correct!")
    gameState.addPoints(10)
}else{
    console.log("Contracted: Wrong!")
    gameState.loseLife()
}}

module.exports = sentenceTransformer