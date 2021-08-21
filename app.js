var btnTranslate = document.querySelector("#btn-translate");4
var outputDiv = document.querySelector("#output");
var txtInput = document.querySelector("#txt-input");

//ar serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
   return  serverURL + "?" + "text"+ text
}

function errorHandler(error){
    console.log("error occoured",error);
    alert("something wrong with the server!")
}

function clickHandler(){
       // outputDiv.innerText = "ajajajajaaj" + txtInput.value;
    var inputText = txtInput.value;//taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
         .then(response => response.json())
         .then(json =>{ 
             var translatedText = json;
            outputDiv.innerText = translatedText;//output
        })
         .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)
