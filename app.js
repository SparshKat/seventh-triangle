var bigButton = document.getElementById("bsize-btn");
var smallButton = document.querySelector("#ssize-btn");
var payButton = document.getElementById("pay");
var displayArea = document.getElementById("display-score");
var incBtn = document.querySelector("#more");
var decBtn = document.querySelector("#less");
var displayQuantity = document.querySelector("#quant");


var bigBtn = false;
var totalAmount = 209;
var quantity = 1;
currentAmount = 209;

bigButton.addEventListener("click" , function(){
    if(bigBtn === false){
        bigButton.classList.toggle('btn-success');
        smallButton.classList.remove('btn-success')
        bigBtn = true;
        currentAmount = 399;
        totalAmount = 399;
        quantity = 1;
        reset();
    }
});

smallButton.addEventListener("click" , function(){
    if(bigBtn === true){
        bigButton.classList.remove('btn-success');
        smallButton.classList.toggle('btn-success');
        bigBtn = false;
        currentAmount = 209;
        totalAmount = 209;
        quantity = 1;
        reset();
    }
});

incBtn.addEventListener("click" , () => {
    quantity+=1;
    displayQuantity.innerHTML = quantity;
    totalAmount = currentAmount * quantity;
    console.log("Increased");
})

decBtn.addEventListener("click" , () => {
    if(quantity > 0){
        quantity-=1;
        displayQuantity.innerHTML = quantity;
        totalAmount = currentAmount * quantity;
        console.log("Decreased");
    }
})


payButton.addEventListener("click" , ()=>{
    console.log("Pay button clicked" + totalAmount);
    displayArea.innerHTML = totalAmount;
})

function reset(){
    quantity =1;
    displayQuantity.innerHTML = quantity;
}