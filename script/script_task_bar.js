function resize() {
    let menu = document.getElementById("liste_pages");
    if (window.innerWidth >= 768) {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function clickMenu() {
    let menu = document.getElementById("liste_pages");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

var darkmode = false
function switchMode() {
    if (darkmode === false) {
        document.body.classList.add('darkmode');
        darkmode = true
    } else {
        document.body.classList.remove('darkmode')
        darkmode = false
    }
}