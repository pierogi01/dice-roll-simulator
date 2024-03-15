const diceT = document.getElementById("dice-el")
const buttonEl = document.getElementById("btn-el")
const rollEL = document.getElementById("roll")
const diceSave = document.getElementById("number-dice")
const savedRoll = document.getElementById("cont1")
let count = 0
let i=1


buttonEl.addEventListener("click", function(){
    let randNum = Math.floor(Math.random()*6)+1

    if(randNum == 1){
        diceT.innerText = "\u2680"
        save()
    }else if(randNum == 2){
        diceT.innerText = "\u2681"
        save()
    }else if(randNum == 3){
        diceT.innerText = "\u2682"
        save()
    }else if(randNum == 4){
        diceT.innerText = "\u2683"
        save()
    }else if(randNum == 5){
        diceT.innerText = "\u2684"
        save()
    }else if(randNum == 6){
        diceT.innerText = "\u2685"
        save()
    }
})

function save(){
    let rollStr = `Roll ${i}`
    let diceStr = diceT.innerText
    savedRoll.innerHTML += `<div class="container" id="saved-roll">
                            <p id="roll">Roll ${i}</p>
                            <p id="number-dice">${diceStr}</p>
                            </div>`
    i++;
}