//Récupérer les différents objets qu'on va avoir besoin
let form = document.querySelector('form');
let email = document.querySelector('#email');
let pseudo = document.querySelector('#pseudo');
let password = document.querySelector('#password');
let conf_password = document.querySelector('#conf_password');
let mailAlerte = document.getElementById('text-mail');
let pseudoAlerte = document.getElementById('text-pseudo');
let passwordAlerte = document.getElementById('text-password');
let password2Alerte = document.getElementById('text-password2');
let alerte = document.getElementById('alerte')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Envoie du form detecté  !');


    //pour toute les 'if' vérifie que les conditions sont remplies, si oui alors on rajoute la classe 'valide' et enlève 'invalide' et rend visible le texte d'erreur, si non inversement on rajoute 'invalide' et enlève 'invalide' et enlève le texte d'erreur
    if (email.value == ''){
        email.classList.add('invalide');
        email.classList.remove('valide');
        mailAlerte.classList.add('active-text');
    }else{
        email.classList.add('valide');
        email.classList.remove('invalide');
        mailAlerte.classList.remove('active-text');
    }

    if (pseudo.value.length < 6) {
        pseudo.classList.add('invalide');
        pseudo.classList.remove('valide');
        pseudoAlerte.classList.add('active-text');
    } else{
        pseudo.classList.add('valide');
        pseudo.classList.remove('invalide');
        pseudoAlerte.classList.remove('active-text');
    }

    let passcheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?]).+$");
    if (password.value.length < 10 || passcheck.test(password.value) == false){
        password.classList.add('invalide');
        password.classList.remove('valide');
        passwordAlerte.classList.add('active-text');
    }else{
        password.classList.add('valide');
        password.classList.remove('invalide');
        passwordAlerte.classList.remove('active-text');   
    }

    if (password.value == conf_password.value) {
        conf_password.classList.add('valide');
        conf_password.classList.remove('invalide');
        password2Alerte.classList.remove('active-text');
        
    } else{
        conf_password.classList.add('invalide');
        conf_password.classList.remove('valide');
        password2Alerte.classList.add('active-text');
    }
    if (email.classList.contains('invalide') || pseudo.classList.contains('invalide') || password.classList.contains('invalide') || conf_password.classList.contains('invalide')){
        alerte.classList.add('active-text');
    }else{
        alerte.classList.remove('active-text');
    }
})

