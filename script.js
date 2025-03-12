const btnMenu = document.querySelector(".totalePage");
 const nav = document.querySelector(".enTete");
 const navUl = document.querySelector(".btnBox");


 function toggleMenu(){
 nav.classList.toggle("cache");

 }
 btnMenu.addEventListener("click" ,toggleMenu);

 nav.addEventListener("click" ,toggleMenu);
 navUl.addEventListener("click" ,(e)=>{
     e.stopPropagation()
 });

