// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
let cards = []
let sum =0
// console.log(cards)
let hasBlackjack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
//console.log(messageEl)
let cardsEl = document.getElementById("cards-el")
//let sumEl = document.getElementById("sum-el")
let sumEl= document.querySelector(".sum-el")

let playerName = "Darshan"
let playerChips = 145

let player = {
    name : "Darshan",
    chips: 145,
    sayHello : function()
    {
        console.log("Hiii")
    }
}

let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name +": $" + player.chips

function getRandomCard()
{
    let i = Math.floor(Math.random()*13) + 1
    
    if(i===1)
    {
     return 11
    }
    else if(i>10)
    {
       return 10
    }
    else 
    {
    return i
    }
}

function startGame()
{    
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard ,  secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
     cardsEl.textContent = "Cards : " 
     
     for(let i=0; i<cards.length; i++)
     {
         cardsEl.textContent += cards[i]
         cardsEl.textContent += " "
     }
     sumEl.textContent = "Sum : " + sum
    if(sum < 21)
{
    message="Do you want to draw a new card?"
}
else if(sum === 21)
{
    message="Wohoo ! You've got Blackjack!"
    hasBlackjack = true
}
else{
    message= "You're out of the game !"
    isAlive = false
}
  messageEl.textContent = message
}
function newCard()
{    
    //console.log("Drawing a new card from the deck")
    if(isAlive === true && hasBlackjack === false)
    {
    let card = getRandomCard()
    sum += card
    cards.push(card)
renderGame()
    }
}

