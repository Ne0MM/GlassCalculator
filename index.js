let operationNumber = "";
let operations = [];
let operationCount = 0;
let theme = 0;

const getTotalNumber = (x) => {
    if(x == 10){
        operationNumber = "" + operationNumber + "."
    }
    else{
        operationNumber = "" + operationNumber + x
    }
    operations[operationCount] = operationNumber;
    refreshScreen();
}

// each operation has a number relative

const operation = (x) => {
    if (operationCount >= 2){
        if (operations[1] == "%") {
            operations[0] = Number(operations[0]) * (Number(operations [2]) / 100)
            getNextSignal(x);
        }
        else if (operations[1] == "÷") {
            operations[0] = Number(operations[0]) / Number(operations [2])
            getNextSignal(x);
        }
        else if (operations[1] == "x") {
            operations[0] = Number(operations[0]) * Number(operations [2])
            getNextSignal(x);
        }
        else if (operations[1] == "-") {
            operations[0] = Number(operations[0]) - Number(operations [2])
            getNextSignal(x);
        }
        else if (operations[1] == "+") {
            operations[0] = Number(operations[0]) + Number(operations [2])
            getNextSignal(x);
        }
    }
    else if (x == "=") {
        
    }
    else{
        if (x == 3) {
            operationCount ++;
            operations[operationCount] = "%";
            operationCount ++;
        }
        else if (x == 4) {
            operationCount ++;
            operations[operationCount] = "÷";
            operationCount ++;
        }
        else if (x == 5) {
            operationCount ++;
            operations[operationCount] = "x";
            operationCount ++;
        }
        else if (x == 6) {
            operationCount ++;
            operations[operationCount] = "-";
            operationCount ++;
        }
        else if (x == 7) {
            operationCount ++;
            operations[operationCount] = "+";
            operationCount ++;
        }
    }
    operations[operationCount] = "";
    operationNumber = "";
    refreshScreen();
}

const getNextSignal = (x) => {
    if (x == 3) {
        operations[1] = "%";
    }
    else if (x == 4) {
        operations[1] = "÷";
    }
    else if (x == 5) {
        operations[1] = "x";
    }
    else if (x == 6) {
        operations[1] = "-";
    }
    else if (x == 7) {
        operations[1] = "+";
    }
}

const getResult = () => {
    let result = 0;
    if (operations[1] == "%") {
        result = Number(operations[0]) * (Number(operations [2]) / 100)
    }
    else if (operations[1] == "÷") {
        result = Number(operations[0]) / Number(operations [2])
    }
    else if (operations[1] == "x") {
        result = Number(operations[0]) * Number(operations [2])
    }
    else if (operations[1] == "-") {
        result = Number(operations[0]) - Number(operations [2])
    }
    else if (operations[1] == "+") {
        result = Number(operations[0]) + Number(operations [2])
    }
    else{
        result = operations[0]
    }
    return result;
}

const getOperationString = () => {
    let operationString = "";
    for (i = 0; i <= operationCount; i++){
        operationString = "" + operationString + operations[i];
    }
    return operationString;
}

const reset = () => {
    operationNumber = "";
    operations = [[getResult()]];
    operationCount = 0;
}

const ac = () => {
    operationNumber = "";
    operations = [];
    operationCount = 0;
    window.onload()
}

const bigScreen = () => {
    document.querySelector(".operationContainer").style.height = "0px"
    document.querySelector(".resultContainer").style.height = "100px"
    document.getElementById("result").style.color = "white"
    document.getElementById("result").style.fontSize = "xx-large"
    document.querySelector(".resultContainer").style.height = "100px"
}

const smallScreen = () => {
    document.querySelector(".operationContainer").style.height = "60px"
    document.querySelector(".resultContainer").style.height = "40px"
    document.getElementById("result").style.color = "rgb(190, 190, 190)"
    document.getElementById("result").style.fontSize = "small"
}

const equal = () => {
    refreshScreen();
    document.getElementById("operation").innerHTML = "";
    bigScreen();
    reset();
}

const changeTheme = () => {
    if (theme == 0){
        document.body.style.backgroundImage = "linear-gradient(#1B262C,#0a324d,#1c4764)";
        document.querySelector(".darkModeButton").style.backgroundImage = "linear-gradient(#F67280,#6C5B7B,#355C7D)";
        document.querySelector(".arrow").style.color = "rgba(253, 253, 253, 0)"
    }
    else if (theme == 1){
        document.body.style.backgroundImage = "linear-gradient(#F67280,#6C5B7B,#355C7D)";
        document.querySelector(".darkModeButton").style.backgroundImage = "linear-gradient(#1B262C,#0a324d,#1c4764)";
    }
    if (theme == 0){
        theme = 1;
    }
    else if (theme == 1){
        theme = 0;
    }
} 

window.onload = () => {
    document.getElementById("operation").innerHTML = "";
    document.getElementById("result").innerHTML = 0;
    smallScreen();
}

function refreshScreen () {
    smallScreen();
    document.getElementById("operation").innerHTML = getOperationString();
    document.getElementById("result").innerHTML = getResult();
}