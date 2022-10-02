const textarea = document.getElementById("text"); 
const totalCounterEl  = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");


textarea.addEventListener("keyup", function() {
    updateCounter(); 
}); 

function updateCounter() {
    totalCounterEl.innerHTML = textarea.value.length
    remainingCounterEl.innerText =  textarea.getAttribute("maxLength") - textarea.value.length;
} 