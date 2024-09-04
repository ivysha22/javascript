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