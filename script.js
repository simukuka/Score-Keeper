const p1Button = document.querySelector('#p1button');
const p2Button = document.querySelector("#p2button");
const p1Display = document.querySelector("#p1display");
const p2Display = document.querySelector("#p2display");
const resetButton = document.querySelector("#reset");
const playTo = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;
p1Button.addEventListener('click', ()=>{
    if(!isGameOver){
        p1Score+=1;
        if(p1Score === winningScore){
            isGameOver = true;
            p1Display.classList.add('has-text-success')
            p2Display.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
         p1Display.textContent = p1Score;
        }
    }
)
p2Button.addEventListener('click', ()=>{
    if(!isGameOver){
        p2Score+=1;
        if(p2Score === winningScore){
            isGameOver = true;
            p2Display.classList.add('has-text-success')
            p1Display.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
         p2Display.textContent= p2Score;
        }
    }
)

playTo.addEventListener('change', ()=>{
    winningScore = parseInt(playTo.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent= 0;
    p2Display.textContent= 0;
    p1Display.classList.remove('has-text-danger','has-text-success')
    p2Display.classList.remove('has-text-success', 'has-text-danger')
    p1Button.disabled = false;
    p2Button.disabled = false;
}