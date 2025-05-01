function afficherMdp() {
    let cb = document.getElementById("afficher");
    let pwd = document.getElementById("mdp");
    if (cb.checked) {
        pwd.type = "text";
    }else{
        pwd.type = "password";
    }
}   



function verifierLogin() {
    const identCorrect = "moi@gmail.com";
    const mdpCorrect = "1234";

    let ident = document.getElementById("login").value;
    let mdp = document.getElementById("mdp").value;

    if (ident === identCorrect && mdp === mdpCorrect) {
        window.location.href = "./pages/cv.html"; // Chemin relatif
    } else {
        alert("Identifiant ou mot de passe incorrect");
    }
}