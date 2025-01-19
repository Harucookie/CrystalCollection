//Récupérer les différents objets qu'on va avoir besoin pour activé le darkmode et sur lesquels on veut l'appliqué
let boutondarkmode = document.getElementById("boutondarkmode");
let boutonlightmode = document.getElementById("boutonlightmode");
let theme = document.getElementsByClassName("theme");
let boutontranslate = document.getElementById("boutontranslate");


//quand le bouton darkmode est cliquer rajoute la classe 'darkmode' sur toutes les balises contenant la classe 'theme', ajoute respectivement les classes 'hidden' et 'invertranslate' au bonton darkmode et au boutontranslate (qui permet de faire bouger le bouton darkmode) et enlève respectivement 'hidden' et translate au bouton lightmode et au boutontranslate
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
//quand le bouton lightmode est cliquer enlève la classe 'darkmode' sur toutes les balises contenant la classe 'theme', enlève respectivement les classes 'hidden' et 'invertranslate' au bonton lightmode et au boutontranslate et rajoute respectivement 'hidden' et translate au bouton darkmode et au boutontranslate
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