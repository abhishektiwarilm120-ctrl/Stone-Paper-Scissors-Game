
let userScore=0;
let computerScore=0;


const choices = document.querySelectorAll('.choice');
const msg =document.querySelector('#msg');
const userpara = document.querySelector('#user-score');
const computerpara = document.querySelector('#computer-score')



console.log(msg);


let draw = ()=>{
    console.log("Match Was Draw")

    msg.innerText= "Game was Draw.Play again"
      msg.style.background="#081b31"
   

}



//computer choice
const genCmputerChoice = ()=>{
    const options = ['rock','paper','scissors']

let random = Math.floor(Math.random()*3);

return options[random];

}

let showUserWin =(userWin,userChoice,computerChoice)=>{
if(userWin===true){

    userScore++;
    userpara.innerHTML= userScore;

    console.log("user win ")
    msg.innerText= `You win ! Your ${userChoice}  beats ${computerChoice}   ` 
    msg.style.background="green"
     

}else{
    
    userScore++;
    computerpara.innerHTML= userScore;
    console.log("You lose Match")
    console.log("Computer win")
  msg.innerText= `You loose !  ${computerChoice}  beats your ${userChoice}   ` 
   msg.style.background="red"
  msg.style.backgr

}
}


//userchoice
const playGame = (userChoice)=>{
    console.log("UserChoice is ",userChoice);


    const computerChoice = genCmputerChoice();
    console.log("ComputerChoice is", computerChoice);

//conditon

if(userChoice==computerChoice){
    draw()
}

else{
let userWin=true;

if(userChoice==="rock"){
    //scissor,paper

userWin= computerChoice=="paper"?false:true;
}
else if(userChoice==="paper"){
    //rock,sccisor

    userWin = computerChoice==="scissors"?false:true;
}

else{
    //rock , paper 
    userWin = computerChoice==="rock"?false:true;

}

showUserWin(userWin,userChoice,computerChoice);

}









}



choices.forEach( (choice)=>{
console.log(choice);


choice.addEventListener('click', ()=>{

    const userChoice = choice.querySelector('img').getAttribute('id');
    playGame(userChoice);

})

})

