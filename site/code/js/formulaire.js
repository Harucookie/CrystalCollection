let form = document.querySelector('form');
let email = document.querySelector('#email');
let pseudo = document.querySelector('#pseudo');
let password = document.querySelector('#password')
let conf_password = document.querySelector('#conf_password')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Envoie du form detecté  !');


    //pour toute les 'if' vérifie que les conditions sont remplies, si oui alors on rajoute la classe 'valide' et enlève 'invalide', si non inversement on rajoute 'invalide' et enlève 'invalide'
    if (email.value == ''){
        email.classList.add('invalide');
        email.classList.remove('valide');
    }else{
        email.classList.add('valide');
        email.classList.remove('invalide');
    }

    if (pseudo.value.length < 6) {
        pseudo.classList.add('invalide');
        pseudo.classList.remove('valide');
    } else{
        pseudo.classList.add('valide');
        pseudo.classList.remove('invalide');
    }

    let passcheck = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?]).+$");
    if (password.value.length < 10 || passcheck.test(password.value) == false){
        password.classList.add('invalide');
        password.classList.remove('valide');
    }else{
        password.classList.add('valide');
        password.classList.remove('invalide');   
    }

    if (password.value == conf_password.value) {
        conf_password.classList.add('valide');
        conf_password.classList.remove('invalide');
    } else{
        conf_password.classList.add('invalide');
        conf_password.classList.remove('valide');
    }
})