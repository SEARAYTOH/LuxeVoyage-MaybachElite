// Récupérer les éléments du DOM
const form = document.getElementById('commandeForm');
const successMessage = document.getElementById('successMessage');

// Fonction pour valider le formulaire
function validateForm(event) {
    event.preventDefault(); // Empêcher la soumission du formulaire

    // Récupérer les valeurs des champs
    const nom = document.getElementById('nom').value;
    const téléphone = document.getElementById('téléphone').value;
    const email = document.getElementById('email').value;
    const marque = document.getElementById('marque').value;
    const modèle = document.getElementById('modele').value;
    const annee = document.getElementById('annee').value;

    // Validation simple
    if (nom === "" || téléphone === "" || email === "" || marque === "" || modèle === "" || annee === "") {
        alert('Tous les champs doivent être remplis !');
        return;
    }

    // Validation du téléphone
    if (téléphone.length !== 10) {
        alert('Le numéro de téléphone doit comporter 10 chiffres.');
        return;
    }

    // Afficher le message de succès avec une animation
    successMessage.style.display = 'block';
    successMessage.classList.add('fadeIn');

    // Réinitialiser le formulaire après 3 secondes
    setTimeout(() => {
        form.reset(); // Réinitialiser les champs du formulaire
        successMessage.style.display = 'none'; // Cacher le message de succès
    }, 3000);
}

// Ajouter un écouteur d'événements pour la soumission du formulaire
form.addEventListener('submit', validateForm);

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
