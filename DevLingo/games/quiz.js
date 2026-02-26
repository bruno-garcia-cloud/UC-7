const readline = require('readline-sync')
const gameState = require('../gameState')

function quiz(){
    const questions = [
        {
            question: "She ___ my friend",
            options: ["1) are", "2) is", "3) am"],
            answer: "2"
        },
        {
            question: "They ____ students.",
            options: ["1) are", "2) is", "3) am"],
            answer: "1"
        }
    ]
    questions.forEach(q => {
        console.log("Question: " + q.question)
         q.options.forEach(opt => console.log(opt))

         let answer = readline.question("Answer: ")

         if(answer === q.answer){
           console.log("Correct!");
           gameState.addPoints(10);
         } else{
            console.log("Wrong!")
            gameState.loseLife();
         }
    })
}

module.exports = quiz