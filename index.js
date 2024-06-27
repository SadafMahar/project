// let display = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');
// let buttonsArray = Array.from(buttons);
// let string = '';
// buttonsArray.forEach(btn => {
//     btn.addEventListener('click',(e) => {
//         if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0, string. length-1);
//             display.value = string;

//         }else if(e.target.innerHTML == 'AC'){
//             string = '';
//             display.value = string;

//         }else if(e.target.innerHTML == '='){
//             string = eval(string);
//             display.value = string;
//         }else{
//             string = e.target.innerHTML;
//             display.value = string;
//         }








      
//     });
// });

const display = document.getElementById("display");
function appendtodisplay(input){
display.value += input;
}
function clearDisplay(){
display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error"
    }
  

}