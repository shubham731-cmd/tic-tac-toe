console.log("Welcome to Tic Tac Toe")
let audioTurn=new Audio("Message Alert.mp3")
//let music=new Audio("Excited Surya.mp3")
let music=new Audio("gameoverr.mp3")
let gameend=new Audio("Game Over.mp3")

let Turn="X"
let gameover=false;
//function to change the turn
const changeTurn = ()=>{
    return Turn  ==="X"?"0": "X"
}
//function to check for Win and concept of the game
const checkWin = ()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0, 1, 2, -14, 5, 0],
        [3, 4, 5, -14, 15, 0],
        [6, 7, 8, -14, 25, 0],
        [0, 3, 6, -24, 15, 90],
        [1, 4, 7, -14, 15, 90],
        [2, 5, 8, -4, 15, 90],
        [0, 4, 8, -14, 15, 45],
        [2, 4, 6, -14, 15, 135],
    ]
     wins.forEach(e =>{
         if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText +" "+"WON"
            music.play();
            gameover=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";

         }
     } )
    }
//game logic, click listner which work on click x,0
    // music.play()
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
     element.addEventListener('click', ()=>{
            if (boxtext.innerText === '') {
                boxtext.innerText = Turn;
                Turn=changeTurn();
                audioTurn.play();
                checkWin();
                if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for"+" "+Turn;
                
                }
            }
        })  
})
//add on click listener to reset button
reset.addEventListener('click', ()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText =""
    });
    Turn="X";
    gameover=false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for"+" "+Turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
   // document.querySelector(".music").style.width = "stop";
     }
    )