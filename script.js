 document.getElementById("form").addEventListener("submit", function(e){

e.preventDefault();

alert("Account Created Successfully!");

});

document.getElementById("mode-toggle").addEventListener("click", function(){

const body = document.body;

const toggle = this;

if(body.classList.contains("night-mode")){

body.classList.remove("night-mode");

body.classList.add("day-mode");

toggle.textContent = "🌙";

}else{

body.classList.remove("day-mode");

body.classList.add("night-mode");

toggle.textContent = "☀️";

}

});
