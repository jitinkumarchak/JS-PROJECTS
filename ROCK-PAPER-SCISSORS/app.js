let userScore = 0;
let cpuScore =0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#compscore");
const genCompChoice = () =>{

    const choices = ["rock", "paper", "scissors"];
    const rdmchoice = Math.floor(Math.random() * 3);
    return choices[rdmchoice];
}; 

const drawGame = () => {
    msg.innerText = "Game was draw, Play again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compchoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `You Won! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else {
        cpuScore++;
        compScorePara.innerText = cpuScore;
        msg.innerText = `You lost. ${compchoice} beats  Your ${userChoice}` ;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) =>{
    //Generate computer choice
    const compchoice = genCompChoice();

    if(userchoice === compchoice){
        //Draw Game
        drawGame();
    }else {
        let userWin = true;
        if(userchoice === "rock"){
            //scissors,paper
           userWin = compchoice === " paper" ? false : true;
        }else if (userchoice === "paper"){
            //rock,scissors
           userWin = compchoice === "scissors" ? false : true;
        }else {
            //paper,rock
           userWin = compchoice === "rock" ? false : true;
        } 
        showWinner(userWin, userchoice, compchoice);
    }
   

};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });

}); 