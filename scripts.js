let textToNumMap = {
    "a": "2",
    "b": "22",
    "c": "222",
    "d": "3",
    "e": "33",
    "f": "333",
    "g": "4",
    "h": "44",
    "i": "444",
    "j": "5",
    "k": "55",
    "l": "555",
    "m": "6",
    "n": "66",
    "o": "666",
    "p": "7",
    "q": "77",
    "r": "777",
    "s": "7777",
    "t": "8",
    "u": "88",
    "v": "888",
    "w": "9",
    "x": "99",
    "y": "999",
    "z": "9999",
    " ": "0",
    ".": "1",
    ",": "11",
    "?": "111",
    "!": "1111",
    "'": "11111"
}

let numToTextMap = {
    "2" : "a",
    "22" : "b",
    "222" : "c",
    "3" : "d",
    "33" : "e",
    "333" : "f",
    "4" : "g",
    "44" : "h",
    "444" : "i",
    "5" : "j",
    "55" : "k",
    "555" : "l",
    "6" : "m",
    "66" : "n",
    "666" : "o",
    "7" : "p",
    "77" : "q",
    "777" : "r",
    "7777" : "s",
    "8" : "t",
    "88" : "u",
    "888" : "v",
    "9" : "w",
    "99" : "x",
    "999" : "y",
    "9999" : "z",
    "0" : " ",
    "1" : ".",
    "11" : ",",
    "111" : "?",
    "1111" : "!",
    "11111" : "'"
}

let textToDummy = true;
let darkMode = false;

let isDark = localStorage.getItem("darkModeEnabled")

function hello(){
    console.log("It's working!")
}

function produceOutputTextToDummy(){
    let inputText = document.getElementById("input-field").value;
    let outputText = "";
    for(let letter of inputText){
        let lowerLetter = letter.toLowerCase();
        if(lowerLetter in textToNumMap){
            outputText += textToNumMap[lowerLetter] + " ";
        }else{
            outputText += "#" + letter + " ";
        }
    }
    document.getElementById("output-field").value = 
    outputText;
}
function produceOutputDummyToText(){
    let inputText = document.getElementById("input-field").value.split(" ");
    let outputText = "";
    for(let num of inputText){
        if(num in numToTextMap){
            outputText += numToTextMap[num];
        }else{
            len = num.length;
            ind = 0;
            if(num[ind] == "#"){
                ind += 1;
                while(ind < len){
                    outputText += num[ind];
                    ind += 1;
                }
            }
        }
    }
    document.getElementById("output-field").value = 
    outputText;
}
function produceOutput(){
    if(textToDummy){
        produceOutputTextToDummy();
    }else{
        produceOutputDummyToText();
    }
}
function copyText(component){
    let textToCopy = component.value;
    navigator.clipboard.writeText(textToCopy);
}
function clearText(component){
    component.value = "";
}
function changeToDummyToText(){
    if(textToDummy){
        textToDummy = false;
        document.getElementById("text-to-dummy-select").style.border = "none";
        document.getElementById("dummy-to-text-select").style.borderBottom = "3px solid var(--select)";
    }
}
function changeToTextToDummy(){
    if(!textToDummy){
        textToDummy = true;
        document.getElementById("dummy-to-text-select").style.border = "none";
        document.getElementById("text-to-dummy-select").style.borderBottom = "3px solid var(--select)";
    }
}
function changeToDarkMode(){
    document.body.classList.add("darkMode");
    darkMode = true;
    localStorage.setItem("darkModeEnabled", "true");
}
function changeToLightMode(){
    document.body.classList.remove("darkMode");
    darkMode = false;
    localStorage.removeItem("darkModeEnabled")
}
function changeMode(){
    if(darkMode){
        changeToLightMode();
        document.getElementById("dark-mode-toogle").value = "light_mode"
    }else{
        changeToDarkMode();
        document.getElementById("dark-mode-toogle").value = "dark_mode"
    }
}
function reverse(){
    for(let i in textToNumMap){
        console.log('"' + textToNumMap[i] + '"' + " : " + '"' + i + '"' + ",")
    }
}
if(localStorage.getItem("darkModeEnabled")){
    changeToDarkMode();
}
