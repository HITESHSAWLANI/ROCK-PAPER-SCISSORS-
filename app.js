let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorep=document.querySelector("#user-score");
const compscorep=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=[ "rock" ,"paper","scissor"];
    const ranindex=Math.floor(Math.random()*3);
    return options[ranindex];
}
const drawGame=()=>{
    console.log("draw game");
     msg.innerText="Game draw Play again "
     msg.style.backgroundColor="#081B31";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin==true){
        console.log("You Win");
        msg.innerHTML=`you win!${userChoice} beats ${compChoice}`;
 
        msg.style.backgroundColor="green";
        userScore++;
        userscorep.innerText=userScore;
    }
    else{
        console.log("You loose");
         msg.innerText=`you loose! ${userChoice} lost to ${compChoice}`
         compScore++;
         compscorep.innerText=compScore;
         msg.style.backgroundColor="red";
    }
}
const playGame=( userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("computers choice =",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin;
        if(userChoice==="rock"){
            if(compChoice==="paper")
                userWin=false;
            else userWin=true;
        }
        if(userChoice==="paper"){
            if(compChoice==="scissor")
                userWin=false;
            else userWin=true;
        }
        if(userChoice==="scissor"){
             if(compChoice==="rock")
                userWin=false;
            else userWin=true;
        }



        
           console.log(userWin);
        showWinner(userWin,userChoice,compChoice);

    }
}
choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);


    })

})