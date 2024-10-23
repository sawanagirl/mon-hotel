// Carrousel d'images
let currentIndex = 0;
const images = document.querySelectorAll('.gallery-image');
const totalImages = images.length;

// Affiche la première image
function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
}

// Fonction pour changer l'image
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

// Démarrer le carrousel
setInterval(nextImage, 3000); // Change l'image toutes les 3 secondes

// Afficher la première image au chargement
document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);
});

// Afficher un message de confirmation après la soumission du formulaire
const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert("Merci pour votre message ! Nous vous contacterons bientôt.");
            form.reset(); // Réinitialise le formulaire
        } else {
            alert("Une erreur s'est produite lors de l'envoi. Veuillez réessayer.");
        }
    })
    .catch(error => {
        alert("Une erreur s'est produite lors de l'envoi. Veuillez réessayer.");
        console.error('Error:', error);
    });
});

