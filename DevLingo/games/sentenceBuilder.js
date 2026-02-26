const readline = require('readline-sync')
const gameState = require('../gameState')

function sentenceBuilder(){
   const challenge = [
    {
        words: ["developer", "is", "He", "a"],
        answer: "He is a developer"
    }
   ]
   challenge.forEach(c => {
    console.log("Reorder the words to form a sentence: ");
    console.log(c.words.join(" | "))

    let answer = readline.question("Write the sentence in the right order: ");

    if(answer === c.answer){
      console.log("Correct!")
    } else{
        console.log(`Wrong! The right answer is '${c.answer}'`)
        gameState.loseLife
    }
   })
}

module.exports = sentenceBuilder