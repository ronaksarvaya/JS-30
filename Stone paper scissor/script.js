let computerScoreDisp= document.getElementById("computer-score")
let userScoreDisp= document.getElementById("user-score")
let gameInfo=document.getElementById("gameinfo")

let updateComp=document.getElementById("computer-played")
let updateUser=document.getElementById("user-played")

let stoneBTN=document.getElementById("stone")
let paperBTN=document.getElementById("paper")
let scissorBTN=document.getElementById("scissor")
let reset=document.getElementById("reset")

let stone="&#9994;"
let paper="&#9995;"
let scissor="&#9996;"

let currComp;
let currUser;

let compCtr=0;
let userCtr=0;

function compPlays(){
    let result= Math.floor(Math.random()*3)+1;
    
    let move = result === 1?stone:result === 2?paper:scissor;
    let movestr = result === 1?"stone":result === 2?"paper":"scissor";

   updateComp.innerHTML=move;

   currComp=movestr


    
}
function logRes(){
    console.log(currComp)
    console.log(currUser)
}

function winCheck(){
   let didWin=false;
    if (currUser===currComp) {
        gameDraw();
        return
    } 
    
    if(currUser==="stone"){
        didWin = currComp==="scissor"?true:false
    }
    if(currUser==="paper"){
        didWin = currComp==="stone"?true:false
    }
    if(currUser==="scissor"){
        didWin = currComp==="paper"?true:false
    }



    if(didWin){
        gameInfo.innerText="you Win"
        console.log("win")
        userCtr=userCtr+1
        userScoreDisp.innerText=userCtr
    }
    else{
         gameInfo.innerText="you Loose";
         console.log("loose")
         compCtr=compCtr+1
         computerScoreDisp.innerText=compCtr;
    }
    if(compCtr===10 || userCtr===10){
        if(compCtr===10){
            gameInfo.innerText="Comp Won the Match"
           
        }
        else{
             gameInfo.innerText="Comp Won the Match"
             
        }
        setInterval(() => {
            resetFn();
        }, 2000);
    }
    }



function gameDraw(){
    gameInfo.innerText="draw"
    console.log("draw")
}
let resetFn=()=>{
    userCtr=0;
    userScoreDisp.innerText=userCtr
    compCtr=0;
    computerScoreDisp.innerText=compCtr;
    gameInfo.innerText="Choose"
}
reset.addEventListener("click",resetFn);
stoneBTN.addEventListener("click",()=>{
    currUser="stone"
    updateUser.innerHTML=stone;
    compPlays(); logRes();winCheck();printt()
})
paperBTN.addEventListener("click",()=>{
    currUser="paper"
    updateUser.innerHTML=paper;
    compPlays();logRes(); winCheck();printt()
})
scissorBTN.addEventListener("click",()=>{
    currUser="scissor"
    updateUser.innerHTML=scissor;
    compPlays(); logRes(); winCheck();printt()
})
