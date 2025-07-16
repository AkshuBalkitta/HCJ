let userScore=0;
let compScore=0;
const userChoice=document.querySelectorAll(".list");
const userMsg=document.querySelector("#msg");
const scu=document.querySelector("#you");
const scc=document.querySelector("#comp");
const draw=()=>{
    userMsg.innerText="Draw match";
    userMsg.style.backgroundColor="#d2691e";
};

const compCh=()=>{
    const choice=['rock','paper','scissors'];
    const com=Math.floor(Math.random()*3);
    return choice[com];
};
const playGame=(userChoice)=>{
    
    const compChoice=compCh();
    if(userChoice===compChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWin(userWin);
    }
    
};
const showWin=(userWin)=>{
    if(userWin){
        userScore++;
        scu.innerText=userScore;
        userMsg.style.backgroundColor="#7fff00";
        userMsg.innerText="Congrats! you won";
    }
    else{
        compScore++;
        scc.innerText=compScore;
        userMsg.style.backgroundColor="#a52a2a";
        userMsg.innerText="Sorry!You lost";
    }
};
userChoice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const ch=choice.getAttribute("id");
        playGame(ch);
    });
});
