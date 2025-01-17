//Récupérer les différents objets qu'on va avoir besoin pour activé le darkmode et sur lesquels on veut l'appliqué
let boutondarkmode = document.getElementById("boutondarkmode");
let boutonlightmode = document.getElementById("boutonlightmode");
let theme = document.getElementsByClassName("theme");
let boutontranslate = document.getElementById("boutontranslate");



boutondarkmode.addEventListener('click', function() {
    for (let i = 0; i < theme.length; i++) {
        theme[i].classList.remove('darkmode');
    }
    boutondarkmode.classList.add('hidden');
    boutonlightmode.classList.remove('hidden');
    boutontranslate.classList.remove('translate');
    boutontranslate.classList.add('inversetranslate');
    console.log("darkmode cliqué")
})

boutonlightmode.addEventListener('click', function() {
    for (let i = 0; i < theme.length; i++) {
        theme[i].classList.add('darkmode');
    }
    boutondarkmode.classList.remove('hidden');
    boutonlightmode.classList.add('hidden');
    boutontranslate.classList.add('translate');
    boutontranslate.classList.remove('inversetranslate');
    console.log("lightmode cliqué")
})