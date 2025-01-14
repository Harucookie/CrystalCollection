let boutondarkmode = document.getElementById("boutondarkmode")
let theme = document.getElementsByClassName("theme")


let darkmode = localStorage.getItem("darkmode")

const enabledarkmode = () => {
    theme.classList.add("darkmode");
    boutondarkmode.classList.add("darkmode");
    localStorage.setItem("darkmode","enabled");
    for (let i = 0; i < theme.length; i++) {
        theme[i].classList.add('darkmode')
    }
    console.log("darkmode cliqué")
}

const disabledarkmode = () => {
    theme.classList.remove("darkmode");
    boutondarkmode.classList.remove("darkmode");
    localStorage.setItem("darkmode","disable");
    for (let i = 0; i < theme.length; i++) {
        theme[i].classList.remove('darkmode')
    }
    console.log("darkmode cliqué")
}






if (darkmode === "enabled"){
    enabledarkmode();
}

boutondarkmode.addEventListener('click', function() {
    darkmode = localStorage.getItem('darkmode')
    console.log("darkmode cliqué")
    if (darkmode === "disable"){
        enabledarkmode();
    }else{
        disabledarkmode();
    }
})




