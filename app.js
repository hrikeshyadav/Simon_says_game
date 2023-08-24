let gameseq = [];
let userseq = [];

let btns = ["yellow" , "red" , "purple" , "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function (){
    if (started == false){
        console.log("game is started");
        started = true;

        levelup();

    }
});


function btnflash( btn){
    btn.classList.add("flash");

    setTimeout( function (){
        btn.classList.remove("flash");
    } ,250 );
}

function userflash( btn){
    btn.classList.add("userflash");

    setTimeout( function (){
        btn.classList.remove("userflash");
    } ,250 );
}


function levelup (){
    userseq =[];
    level++;
    h2.innerText = `level ${level}`;
    
    let randIDX = Math.floor(Math.random() *3);
    let randColor = btns[randIDX];
    let randBtn = document.querySelector(`.${randColor}`);


    // console.log(randIDX);
    // console.log(randBtn);
    // console.log(randColor);
    gameseq.push(randColor);
    console.log(gameseq);

    btnflash(randBtn);
}

function checkAns (idx){
    // console.log("current level : " , level);
    

    if(userseq[idx] === gameseq[idx]) {
        if(userseq.length == gameseq.length){
           setTimeout(levelup,1000);
        }

    } else {
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";  
        });
        resizeTo();

    }

}


function btnpress(){
    console.log(this);
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click" , btnpress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}