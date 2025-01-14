
let boutondarkmode = document.getElementById("boutondarkmode")
let boutonlightmode = document.getElementById("boutonlightmode")
let theme = document.getElementsByClassName("theme")

boutondarkmode.addEventListener('click', function() {
    for (let i = 0; i < theme.length; i++) {
        theme[i].classList.remove('darkmode')
        boutondarkmode.classList.add('hidden');
        boutonlightmode.classList.remove('hidden');

    }
    console.log("darkmode cliqué")
})


boutonlightmode.addEventListener('click', function() {
    for (let i = 0; i < theme.length; i++) {
        theme[i].classList.add('darkmode')
        boutondarkmode.classList.remove('hidden');
        boutonlightmode.classList.add('hidden');
    }
    console.log("lightmode cliqué")
})