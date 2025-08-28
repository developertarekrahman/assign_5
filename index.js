// heart icon clicked functionalities

let num = 0;
const count = document.getElementById("count-heart");
const hearts = document.getElementsByClassName("Heart-sign");
for(let heart of hearts){
    heart.addEventListener('click',function(){
        num++;
        count.innerText=num;
    })
}

//coin functionalities


let coin=100;
let coinCount= document.getElementById('coins');
coinCount.innerText=coin;
const numbers=document.getElementsByClassName('number');
const names=document.getElementsByClassName('name');
const callbtn= document.getElementsByClassName('call-button');

for (let i=0; i<callbtn.length;i++){
    callbtn[i].addEventListener('click',function(){
        if (coin>=20){
            alert(`Calling ${names[i].innerText} at ${numbers[i].innerText}`);
            coins=coins-20;
            coinCount.innerText=coin;
        }
        else{
            alert("You have no sufiicient coin to call")
        }
    })
}

