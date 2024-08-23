const inputValue = document.getElementById("userinput");
 const calculator =  document.querySelectorAll(".operator").forEach(function(item){
    
     item.addEventListener("click", function(e){

        let lastInput = inputValue.innerText.substring(inputValue.innerText.length,
            inputValue.innerText.length - 1);
            let currentValue = parseFloat(inputValue.innerText);

        if(!isNaN(lastInput) && e.target.innerText === "="){
            inputValue.innerText = eval(inputValue.innerText);
        }
        else if(e.target.innerText === "AC"){
            inputValue.innerText = "0";
        }
        else if(e.target.innerText === "%"){
            inputValue.innerText = (currentValue / 100).toString();
        }
        else if(e.target.innerText === "DEL"){
            inputValue.innerText = inputValue.innerText.substring(0, inputValue.innerText.length - 1);
    
        if(inputValue.innerText.length == "0"){
            inputValue.innerText = "0";

        }
    }
        else{
            if(!isNaN(lastInput)){
            inputValue.innerText += e.target.innerText;
        }
    }
       
    });

 });
 
 const numbers = document.querySelectorAll(".numbers").forEach(function(item){
     item.addEventListener("click", function(e){
        if(inputValue.innerText === "0"){
            
            inputValue.innerText = " ";
        }
        inputValue.innerText +=e.target.innerText.trim();
     })
 })