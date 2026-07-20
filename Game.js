let endgame = document.querySelector(".endgame");
let newgame = document.querySelector(".newgame");
let level = document.querySelector("#level");
let score = document.querySelector("#score");
let fruits = document.querySelector(".fruits");
let apple = document.querySelector("#apple");
let apple2 = document.querySelector('#banana');
let lemon = document.querySelector('#lemon');
let watermelon = document.querySelector("#watermelon");
let bomb1 = document.querySelector("#bomb1");
let bomb2 = document.querySelector('#bomb2');
let reset = document.querySelector(".reset");
let endscore = document.querySelector('#endscore');

let i=0;
gameon();
function gameover(){
    endgame.classList.remove('hide');
    endscore.textContent='Game Over!!!!....You Scored: '+i;
    apple.setAttribute('style','animation-duration: 0s;');
apple2.setAttribute('style','animation-duration: 0s;');
lemon.setAttribute('style','animation-duration: 0s;');
watermelon.setAttribute('style','animation-duration: 0s;');
bomb1.setAttribute('style','animation-duration: 0s;');
bomb2.setAttribute('style','animation-duration: 0s;');
}
function offapple(){
    apple.classList.add('hide');
    setTimeout(() => {
        apple.classList.remove('hide');
    }, 2000);
    i++;    score.innerText=i;
}
apple.addEventListener('click',offapple);

function offapple2(){
    apple2.classList.add('hide');
    setTimeout(() => {
        apple2.classList.remove('hide');
    }, 2000);
    i++;    score.innerText=i;
}
apple2.addEventListener('click',offapple2);

function offlemon(){
    lemon.classList.add('hide');
    setTimeout(() => {
        lemon.classList.remove('hide');
    }, 2000);
    i++; score.innerText=i;
}
lemon.addEventListener('click',offlemon);

function offwatermelon(){
    watermelon.classList.add('hide');
    setTimeout(() => {
        watermelon.classList.remove('hide');
    }, 2000);
    i++; score.innerText=i;
}
watermelon.addEventListener('click',offwatermelon);

function level5(){
    setTimeout(()=>{
        apple.setAttribute('style','animation-duration: 3s;');
apple2.setAttribute('style','animation-duration: 3s;');
lemon.setAttribute('style','animation-duration: 3s;');
watermelon.setAttribute('style','animation-duration: 3s;');
bomb1.setAttribute('style','animation-duration: 4s;');
bomb2.setAttribute('style','animation-duration: 4s;');
level.innerText='5';
setTimeout(gameover,15000);
    },20000);
    
}

function level4(){
    setTimeout(()=>{
        apple.setAttribute('style','animation-duration: 4s;');
apple2.setAttribute('style','animation-duration: 3.5s;');
lemon.setAttribute('style','animation-duration: 3.5s;');
watermelon.setAttribute('style','animation-duration: 4s;');
bomb1.setAttribute('style','animation-duration: 5s;');
bomb2.setAttribute('style','animation-duration: 5s;');
level.innerText='4';
level5();
    },20000);
}

function level3(){
    setTimeout(()=>{
        apple.setAttribute('style','animation-duration: 5s;');
apple2.setAttribute('style','animation-duration: 4s;');
lemon.setAttribute('style','animation-duration: 4s;');
watermelon.setAttribute('style','animation-duration: 5s;');
bomb1.setAttribute('style','animation-duration: 6s;');
bomb2.setAttribute('style','animation-duration: 6s;');
level.innerText='3';
level4();
    },20000);
}

function level2(){
    setTimeout(()=>{
        apple.setAttribute('style','animation-duration: 7s;');
apple2.setAttribute('style','animation-duration: 5s;');
lemon.setAttribute('style','animation-duration: 5s;');
watermelon.setAttribute('style','animation-duration: 7s;');
bomb1.setAttribute('style','animation-duration: 8s;');
bomb2.setAttribute('style','animation-duration: 8s;');
level.innerText='2';
level3();
    },20000);
}
function gameon(){
    setTimeout(()=>{
        apple.setAttribute('style','animation-duration: 8s;');
apple2.setAttribute('style','animation-duration: 6s;');
lemon.setAttribute('style','animation-duration: 6s;');
watermelon.setAttribute('style','animation-duration: 8s;');
bomb1.setAttribute('style','animation-duration: 10s;');
bomb2.setAttribute('style','animation-duration: 10s;');
level.innerText='1'; i=0; score.innerText=0; 
level2();
    },0);
}
function resetting(){
    gameon();
}
function newgamefunc(){
    gameon();
    endgame.classList.add('hide');
}

reset.addEventListener('click',resetting);
newgame.addEventListener('click',newgamefunc);
bomb1.addEventListener('click',gameover);
bomb2.addEventListener('click',gameover);