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
