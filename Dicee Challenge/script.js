//Dice1
var randomNumber1=Math.floor(Math.random()*6)+1
var randomImage1='images/dice'+randomNumber1+".png"
var player1=document.querySelectorAll('img')[0]
player1.setAttribute('src',randomImage1)
//Dice2
var randomNumber2=Math.floor(Math.random()*6)+1
var randomImage2='images/dice'+randomNumber2+".png"
var player2=document.querySelectorAll('img')[1]
player2.setAttribute('src',randomImage2)
//Conditions
if(randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML='Player 2 Won 🚩'
}
else if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML='🚩 Player 1 Won'
}
else{
    document.querySelector('h1').innerHTML='Draw'
}


