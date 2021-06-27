
const timer = document.getElementById("count");
var counter = 10;
setInterval(() => {
    counter --;
    setInterval(() => {
        if (counter >= 0)
            {
                timer.innerHTML = counter;
            }        
        setInterval(() => {
            if (counter === 0)
            {
                timer.innerText = "😍😀🌺 Happy Birthday 🌺😀😍";
                timer.style.fontSize = "7em";
                timer.style.fontFamily = "Arial";
            }            
            
        },0);
        
    },0);
    
}, 1000);