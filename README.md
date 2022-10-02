# This is the Character counter app 
## This is created by Salman Sheriff. A 



![](salmancharactercounter.png)

```javascript
function updateCounter() {
    totalCounterEl.innerHTML = textarea.value.length
    remainingCounterEl.innerText =  textarea.getAttribute("maxLength") - textarea.value.length;
} 
    

```