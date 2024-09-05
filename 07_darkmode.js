let header=document.querySelector("header")
let main=document.querySelector("main")
let btn=document.querySelector("#toggler")

btn.addEventListener("click",()=>{
  if(btn.classList.contains("dark-mode-btn")){
    btn.classList.remove("dark-mode-btn");
    header.classList.remove("dark-header")
    main.classList.remove("dark-main");
    btn.textContent="Dark mode"
  }else{
    btn.classList.add("dark-mode-btn");
    header.classList.add("dark-header")
    main.classList.add("dark-main");
    btn.textContent="Light mode"
  }
    
})

//build an image slider with html css and js


let slideIndex = 1; // This sets the initial slide to be the first one
slideShow(slideIndex); // Display the first slide initially

// Shifts slide based on the value of x
function shiftSlide(x) {
  slideShow(slideIndex += x); // Update slideIndex and call slideShow with the new value
}

// Directly set a specific slide
function slideOne(x) {
  slideShow(slideIndex = x);
}

function slideShow(x) {
  let slides = document.querySelectorAll(".images"); //  should use querySelectorAll to select all slides
  let btns = document.querySelectorAll(".buttons"); // should use querySelectorAll to select all buttons

  if (x > slides.length) {
    slideIndex = 1; // Loop back to the first slide
  }
  if (x < 1) {
    slideIndex = slides.length; // Loop back to the last slide
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove "active" class from all buttons
  for (let i = 0; i < btns.length; i++) {
    btns[i].className = btns[i].className.replace("active", "");
  }

  // Show the current slide and mark the corresponding button as active
  slides[slideIndex - 1].style.display = "block";
  btns[slideIndex - 1].className += " active";
}

setTimeout( function (){
  document.getElementById("sign-in").classList.remove("hidden")
},4000)

document.getElementById("close").addEventListener("click",()=>{
  document.getElementById("sign-in").classList.add("hidden")
})
