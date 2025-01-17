let col = [...document.querySelectorAll("li")];
let Alltext = [...document.querySelectorAll("div")];
let home = document.getElementById('Home');
let about = document.getElementById('about');
let Other = document.getElementById('Other');

col.forEach(function (tabs) {
    tabs.onclick = function () {
        col.forEach(function (tab){
            tab.classList.remove('tab-active');
        });
        Alltext.forEach(function (text){
            text.classList.remove('active');
        });
        this.classList.add('tab-active')
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