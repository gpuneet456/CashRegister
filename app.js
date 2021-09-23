const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const nextButton = document.querySelector("#next-btn");
const message = document.querySelector("#error-message");
const noOfNotes=document.querySelectorAll(".no-of-notes");
const cashGivenCont=document.querySelector(".cashInput");
const changeReturncont=document.querySelector(".changeReturn");
const availableNotes=[2000,500,100,20,10,5,1];
nextButton.addEventListener("click", function showcash() {
    cashGivenCont.style.display="block";
    nextButton.style.display="none";
});

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hidemessage();
    if (parseInt(billAmount.value) > 0) {
        if (parseInt(cashGiven.value) >= parseInt(billAmount.value)) {
            hidemessage();

            const amountToBeReturned = parseInt(cashGiven.value) - parseInt(billAmount.value);
            calculateChange(amountToBeReturned );
            changeReturncont.style.display="block";



        } else {
            msg = "Do you want to wash dishes";
            showmessage(msg);
        }
    } else {
        msg = "Invalid Amount";
        showmessage(msg);
    }
});

function showmessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function hidemessage() {
    message.style.display = "none";
}

function calculateChange(amount) {
    for(let i=0;i<availableNotes.length;i++){
        const numberOfNotes=Math.trunc(amount/availableNotes[i]);
        amount%=availableNotes[i];
        noOfNotes[i].innerText=numberOfNotes;
    }

}