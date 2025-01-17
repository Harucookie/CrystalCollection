//récupère tous les objets contenant la classe 'boutton'
let modalBtns = [...document.querySelectorAll(".button")];

//si un des objets récupérés plus haut est cliqué, on récupère l'objet (pop-up) grâce à la classe correspondant au data-modal de l'objet cliqué et on l'affiche
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});

window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};