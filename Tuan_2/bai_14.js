const poll = { 
    question: "What is your favourite programming language?", 
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"], 
    // This generates [0, 0, 0, 0]. More in the next section! 
    answers: new Array(4).fill(0), 
};


const displayResults = (type)=>{

    console.log(`Poll results are ${poll.answers.join(", ")}`);

}


const registerNewAnswer = ()=>{
    const divBox = document.getElementById("box");
    const html = `        
        <h3>${poll.question}</h3>
        <ul>
            <li>${poll.options[0]}</li>
            <li>${poll.options[1]}</li>
            <li>${poll.options[2]}</li>
            <li>${poll.options[3]}</li>
        </ul>`
    divBox.innerHTML = html;

    const btn = document.getElementsByClassName("btn");
    btn[0].addEventListener("click", ()=>{
        const answer = prompt("What is your favourite programming language?");
        if(answer != null && answer.length > 0){
            const number = parseInt(answer);
            if(number >= 0 && number <= 3){
                poll.answers[number]++;
                displayResults(poll.answers);
            }
        }
        
    });
    
}

registerNewAnswer();