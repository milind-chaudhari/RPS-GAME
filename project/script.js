var userScore=0;
var compScore=0;

const choices = document.querySelectorAll(".chocies");
const msg = document.getElementById("msg");
const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");

// get computer choice
 const getCompChocie=()=>{
    const option =["rock","paper","scissor"];
    const indx=Math.floor(Math.random()*3);
   return (option[indx]);
 }

//  show winer
const showWinner = (userwin,userchoice,compchoice)=>{
    if(userwin){
        console.log("You Win");
        msg.innerText = `You Win,${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userscore.innerText=userScore;
        
    }
    else{
        console.log("You Lose");
        msg.innerText=`You Lose, ${compchoice} beats ${userchoice}`;;
        compScore++;
        compscore.innerText=compScore;
        msg.style.backgroundColor="red";
    }
}

//  game draw function
const gameDraw=()=>{
    console.log("game was draw");
    msg.innerText="Game Was Draw";
    msg.style.backgroundColor="blueviolet";
}
// main game logoc
const playGamme=(userchoice)=>{
    console.log(`User choice is =${userchoice}`)
    compchoice=getCompChocie();
    console.log(`Comp choice is =${compchoice}`);
    //game logic
    if(userchoice===compchoice){
          gameDraw();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
             userwin=compchoice==="scissor"?false:true;
        }
        else if(userchoice==="scissor"){
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGamme(userchoice);
    })
})