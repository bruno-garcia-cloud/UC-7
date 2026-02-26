const readline = require('readline-sync')
const gameState = require("../gameState")

function completeSentence() {
    const sentences = [
        {
            text: "I ___ a developer",
            answer: "am",

        },
        {
            text: "She ___ my sister",
            answer: "is"
        }
    ]

    sentences.forEach(s => {
        console.log("Complete: ");
        console.log(s.text)

        let answer = readline.question("Answer: ")
        
        if(answer === s.answer){
            console.log("Correct!")
            gameState.addPoints(100);
          
        } else{
            console.log("Wrong! The correct answer is " + s.answer)
            gameState.loseLife();
        }
    })
}

module.exports = completeSentence