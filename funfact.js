// reset funfact box
function resetFunfact () {
    document.querySelectorAll(".factText").forEach(function(el) {
        el.style.display = "none";
     });
}

/* ///////////// NAVIGATION BAR ///////////// */
const nav = document.getElementById("nav");
nav.addEventListener("click", elem => {   
    
    const isfunLink = elem.target.className === "funLink";
    if (!isfunLink) {
        return;
    }

    resetFunfact();
    if (elem.target.id === "josefPolasek") { 
        document.getElementById("josefPolasekClicked").style.display = "block";
    } else if (elem.target.id === "cv") { 
        window.open("./CV/CV - December 2021.pdf", "_blank");
        document.getElementById("CVopened").style.display = "block";
    } else if (elem.target.id === "projectsLink") {
        document.querySelector("#myProjects").scrollIntoView({behavior: 'smooth'});
        document.getElementById("projectsScrolled").style.display = "block";
    } else if (elem.target.id === "copyMailNav") {
        document.getElementById("mailCopied").style.display = "block";
        navigator.clipboard.writeText("josefpolasek12@gmail.com");
    } else if (elem.target.id === "returnNav") {
        document.querySelector("#countDown").scrollIntoView({behavior: 'smooth'});
        document.getElementById("returnScrolled").style.display = "block";
    }

});


/* ///////////// MAIL AND LAGUAGES ///////////// */
const hello = document.getElementById("hello");
hello.addEventListener("click", elem => {    
    const isfunLink = elem.target.className === "funLink";
    console.log(isfunLink);
    if (!isfunLink) {
        return;
    }

    resetFunfact();
    if (elem.target.id === "skku") document.getElementById("skkuVisited").style.display = "block";
    else if (elem.target.id === "htmlCSS") document.getElementById("htmlShow").style.display = "block";
    else if (elem.target.id === "javascript") document.getElementById("javaScriptShow").style.display = "block";
    else if (elem.target.id === "cpp") document.getElementById("cppShow").style.display = "block";
    else if (elem.target.id === "python") document.getElementById("pythonShow").style.display = "block";
    else if (elem.target.id === "git") document.getElementById("gitShow").style.display = "block";
    else if (elem.target.id === "linux") document.getElementById("linuxShow").style.display = "block";
    else if (elem.target.id === "copyMail") {
        document.getElementById("mailCopied").style.display = "block";
        navigator.clipboard.writeText("josefpolasek12@gmail.com");
    }
});

/* ///////////// PROFILES ///////////// */
const profiles = document.getElementById("profiles");
profiles.addEventListener("click", elem => {
    
    const isfunLink = elem.target.className === "funLink";
    console.log(isfunLink);
    if (!isfunLink) {
        return;
    }

    resetFunfact();
    if (elem.target.id === "visitGithub" || elem.target.id === "linkLogo1") document.getElementById("gitVisited").style.display = "block";
    else if (elem.target.id === "visitStack" || elem.target.id === "linkLogo2") document.getElementById("stackVisited").style.display = "block";
    else if (elem.target.id === "visitCode" || elem.target.id === "linkLogo3") document.getElementById("codeVisited").style.display = "block";
});


/* ///////////// RUN THE CODE ///////////// */
resetFunfact();
document.getElementById("initialText").style.display = "block";
