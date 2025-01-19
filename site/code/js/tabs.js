//Récupérer les différents objets qu'on va avoir besoin
let col = [...document.querySelectorAll("li")];
let Alltext = [...document.querySelectorAll("div")];
let home = document.getElementById('Home');
let about = document.getElementById('about');
let Other = document.getElementById('Other');

col.forEach(function (tabs) {
    tabs.onclick = function () {
        //enlève la classe 'tab-active' sur tout les listes
        col.forEach(function (tab){
            tab.classList.remove('tab-active');
        });
        //enlève la classe 'active' sur toute les divisions
        Alltext.forEach(function (text){
            text.classList.remove('active');
        });
        //ajoute la classe 'tab-acrtive' à l'élément cliqué
        this.classList.add('tab-active')


        //ajoute la classe 'active' à la division qui correspond à la liste cliqué
        if (this.classList.contains('tab-Home')){
            home.classList.add('active');
        }
        if (this.classList.contains('tab-about')){
            about.classList.add('active');
        }
        if (this.classList.contains('tab-uyezbuibevi')){
            Other.classList.add('active');
        }
    };
  });