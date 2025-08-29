const historyData=[];

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





//call functionalities


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
            coin=coin-20;
            coinCount.innerText=coin;

            const data={
            name: names[i].innerText,
            number: numbers[i].innerText,
            date: new Date().toLocaleTimeString()
        };
        historyData.push(data)

        updateHistory();



        }
        else{
            alert("You have no sufiicient coin to call")
        }
    
        
        

})
}


//copy section

let number = 0;
const counter = document.getElementById("count-copy");
const copies = document.getElementsByClassName("copy-button");
for(let copy of copies){
    copy.addEventListener('click',function(){
        alert(`The number is copied`)
        number++;
        counter.innerText=number;

    })
}


const copyButtons = document.getElementsByClassName('copy-button');
for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].onclick = function() {
    const card = this.closest('.carts');

    const number = card.querySelector('.number').innerText;
    navigator.clipboard.writeText(number)
      .catch(err => console.error('Failed to copy number:', err));
  };
}




//history section

function updateHistory(){
    const historyContainer=document.getElementById('history-container');

    historyContainer.innerHTML="";


    for(const data of historyData){
        const div=document.createElement("div");
        div.className ="bg-[#FAFAFA] p-4 rounded-[8px] mb-2";
        div.innerHTML=`
        <div class="flex justify-between items-center">
                  <div>
                    <h1 class="inter font-semibold text-[18px]">${data.name}</h1>
                    <h1 class="inter">${data.number}</h1>
                </div>
                <h1>${data.date}</h1>
              </div>
        `;
        historyContainer.appendChild(div);
    }
};

document.getElementById('clear-history').addEventListener('click',function(){
    historyData.length=0;
    updateHistory();
});
