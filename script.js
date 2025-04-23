var screen = document.getElementById("display");

function btnClick(value) {
  screen.value += value;
}

function clrScreen() {
    screen.value="";
}
function onDelete(){
    screen.value= screen.value.toString().slice(0,-1);
}

function findResult() {
   var result = eval(screen.value);
   screen.value = result;
}