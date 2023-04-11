const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0
let activePlayer = 0
let score = [0,0]
let gameOver = true
let audio = new Audio("sound/sound__music.mp3")

const  switPlayer = ()=>{
    currentScore = 0
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
        activePlayer = activePlayer === 0 ? 1 : 0
        document.querySelector(".player--0").classList.toggle('player--active');
        document.querySelector(".player--1").classList.toggle('player--active');
}



const diceImg = document.querySelector(".dice");
diceImg.style.display = 'none'

btnRoll.addEventListener("click", ()=> {
   if(gameOver) {
    diceImg.style.display = 'block'
    
    const random = Math.floor(Math.random()* 6 + 1)
    diceImg.src = `./dice-${random}.png`
    if(random !=1 ) {
        currentScore += random
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    }  else{
        switPlayer()
    }
   }
      
});

btnHold.addEventListener("click",()=>{
    if(gameOver) {
    score[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]
    
    if(score[activePlayer] >=20){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        let audio = new Audio ("sound/sound__music.mp3")
        audio.play().textContent = '🏆'
        diceImg.style.display = 'none'
        gameOver = false
     } else{
        switPlayer()
    }
}
});
 

btnNew.addEventListener("click",()=>{
    currentScore = 0
     score = [0,0]
     activePlayer = 0
     gameOver = true
     audio = stop()
     document.getElementById(`current--0`).textContent = 0
     document.getElementById(`current--1`).textContent = 0
     document.getElementById(`score--0`).textContent = 0
     document.getElementById(`score--1`).textContent = 0 
     document.querySelector('.player--0').classList.remove('player--winner')
     document.querySelector('.player--1').classList.remove('player--winner')
     document.querySelector('.player--1').classList.remove('player--active')
     document.querySelector('.player--0').classList.add('player--active')



     
})