const display = document.getElementById("showResult");

function addToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
}

function cleaResult(){
    display.value = "";
}