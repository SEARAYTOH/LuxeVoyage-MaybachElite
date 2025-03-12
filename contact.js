const btnMenu = document.querySelector(".pageEntiere");
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


const form = document.forms[".commande"];
async function envoyerCommande(e){
    e.preventDefault();
    const commande =  {
        nom_client: form["nom-client"].value,
        telephone: form["tel-client"].value,
        adresse: form["email"].value,
        marque: [
          {
            nom: "marque du véhicule",
            quantite: form["marque"].value
          },
          {
            nom: "modele",
            quantite: form["modele"].value
          },
         {
            nom: "annee",
            quantite: form["annee"].value
         }
        ]
      };

   let reponse = await fetch("http://192.168.0.116:3000/commandes",{
        method: "POST",
        body: JSON.stringify(commande),
        headers: {
            "Content-Type":"application/json"
        }
    });
    alert("Votre commande a été envoyée !");
}

form.addEventListener("submit",envoyerCommande);
