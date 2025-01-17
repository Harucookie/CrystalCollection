let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Envoie du form detecté  !');

    let email = document.querySelector('#email');
    if (email.value == ''){
        email.classList.add('invalide');
        email.classList.remove('valide');
        console.log('email not good');
    }else{
        email.classList.add('valide');
        email.classList.remove('invalide');
        console.log('email good');
    }

    let pseudo = document.querySelector('#pseudo');
    if (pseudo.value.length < 6) {
        pseudo.classList.add('invalide');
        pseudo.classList.remove('valide');
        console.log('pseudo not good');
    } else{
        pseudo.classList.add('valide');
        pseudo.classList.remove('invalide');
        console.log('pseudo good');

    }

    let password = document.querySelector('#password')
    let passcheck = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*., ?]).+$"
    );
    if (password.value.length < 10 || passcheck.test(password.value) == false){
        password.classList.add('invalide');
        password.classList.remove('valide');
        console.log('password not good');
    }else{
        password.classList.add('valide');
        password.classList.remove('invalide');
        console.log('password good');
    }

    let conf_password = document.querySelector('#conf_password')
    if (password.value == conf_password.value) {
        conf_password.classList.add('valide');
        conf_password.classList.remove('invalide');
        console.log('password verif good');
    } else{
        conf_password.classList.add('invalide');
        conf_password.classList.remove('valide');
        console.log('password verif not good');
    }
})