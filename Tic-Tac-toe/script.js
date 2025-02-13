let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#new-game");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");




let turnO=true;
let count=0;
 
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnO){
        box.innerText="O";
        turnO=false;
       }
       else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true; 
       count++;

    let isWinner = checkwinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
    msg.innerText = `Draw!`;
    msgcontainer.classList.remove("hide");
    disableboxes();
  };
    

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};


const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};



const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();

}


const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !=="" && pos2val !=="" && pos3val !==""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
                return true;
            }
        }

    }
    return false;
    
};
newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(boxes===9){
            console.log("Draw");

        }
    

 })})