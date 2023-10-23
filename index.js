const questions = [
    "Qual foi a melhor parte do seu dia?",
    "O que te aborreceu?",
    "Poderia ter feito algo melhor?",
    "Qual a sua meta para amanhã?"
]

const ask = (index = 0) =>{
    process.stdout.write("\n\n" + questions[index] + " > ")
}


const answers = []


process.stdin.on("data", data =>{

    answers.push(data.toString().trim())

    if(answers.length < questions.length){
        ask(answers.length)
    } 
    else {
        process.exit()
    }
    
}) 

process.on("exit", () =>{
    console.log(
        `
        Show!

        A melhor parte do seu dia foi: ${answers[0]}

        O que te aborreceu foi: ${answers[1]}

        Você poderia ter feito de melhor: ${answers[2]}

        Sua meta para amanhã é: ${answers[3]}

        Volte amanhã para refletir sobre seu dia novamente!
        `
    )
})

ask()


