// Smooth reveal animation on scroll
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screen = window.innerHeight;
    if (position < screen - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
let menu = document.querySelector('.menu');
let toggle = document.querySelector('.toggle');

toggle.onclick = function(){
  menu.classList.toggle('active');
}
function login(){

  const role = document.querySelector('input[name="role"]:checked');

  if(!role){
    alert("Please select a role");
    return;
  }

  window.location.href = role.value + ".html";
}
function showPassword(){
  document.getElementById("passwordBox").style.display="block";
  document.getElementById("otpBox").style.display="none";
}

function showOTP(){
  document.getElementById("passwordBox").style.display="none";
  document.getElementById("otpBox").style.display="block";
}

function login(){

  const user = document.getElementById("userInput").value;
  const pass = document.getElementById("password").value;
  const otp = document.getElementById("otp").value;
  const role = document.querySelector('input[name="role"]:checked');

  if(user === ""){
    alert("Enter Email or Mobile");
    return;
  }

  if(!role){
    alert("Select a role");
    return;
  }

  // For now demo login
  window.location.href = role.value + ".html";
}