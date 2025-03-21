function toggleMenu(){
    nav.classList.toggle("cache");
  
    }
    btnMenu.addEventListener("click" ,toggleMenu);
  
    nav.addEventListener("click" ,toggleMenu);
    navUl.addEventListener("click" ,(e)=>{
        e.stopPropagation()
    });


/* Effet d’apparition progressive au scroll */
window.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".enTete, .partieMain1, .partieMain2, .partieMain3, .partieMain4, .footer");
    elements.forEach((el) => {
        let position = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (position < windowHeight - 50) {
            el.classList.add("show");
        }
    });
});

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

/* Script pour l'effet d'apparition au scroll */

    document.addEventListener("DOMContentLoaded", function() {
        const elements = document.querySelectorAll(".reveal");

        function checkVisibility() {
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 50) {
                    el.classList.add("visible");
                }
            });
        }

        window.addEventListener("scroll", checkVisibility);
        checkVisibility();
    });

