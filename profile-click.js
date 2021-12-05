
async function changeLogo(counter) {
    if (counter%2 === 0) document.getElementById("websiteIcon").href="./images/profileDark.png";
    else document.getElementById("websiteIcon").href="./images/profileLIGHT.png";
}

// hover image
let counter = 0;
document.getElementById("profilePhoto").onclick = () => { 
    // document.getElementById("arrowClick").classList.remove("move");
    // document.getElementById("arrowClick").style.display = "none";

    if (counter%2 === 0) {
        document.getElementById("profilePhoto").src="./images/profileLIGHT.png"; /* "./images/profileLight.png"; */
        // document.getElementById("profilePage").style.backgroundColor = "white";

        /* ///////// VERY DUMP SOLUTION ///////// */
        document.getElementById("funfact").style.borderColor = "#ddb355";
        document.getElementById("nav").style.borderColor = "hsl(210, 20%, 60%)";
        document.getElementById("myProjects").style.borderColor = "hsl(210, 20%, 60%)";
        document.getElementById("countDown").style.borderColor = "hsl(210, 20%, 60%)";
        document.getElementById("countdownBoard").style.color = "hsl(210, 20%, 50%)";

        document.getElementById("pageLinks").style.color = "hsl(210, 20%, 50%)";
        document.getElementById("josefPolasek").style.color = "hsl(210, 20%, 50%)";
        document.getElementById("skku").style.color = "hsl(210, 20%, 50%)";
        document.getElementById("htmlCSS").style.color = "hsl(210, 20%, 50%)";
        document.getElementById("javascript").style.color = "hsl(210, 20%, 50%)";
        document.getElementById("cpp").style.color = "hsl(210, 20%, 50%)";
        document.getElementById("python").style.color = "hsl(210, 20%, 50%)";
        document.getElementById("git").style.color = "hsl(210, 20%, 50%)";
        document.getElementById("linux").style.color = "hsl(210, 20%, 50%)";
        document.getElementById("copyMail").style.color = "hsl(210, 20%, 50%)";

        /* ///////// END OF DUMP SOLUTION ///////// */

        document.getElementById("nav").style.backgroundColor = "hsl(210,20%, 90%)";
        
        resetFunfact();
        document.getElementById("themeLight").style.display = "block";

        // document.body.style.backgroundColor = "#7f999e";
        document.body.style.backgroundColor = "oldlace";
        document.title = "Profile Page - LIGHT";
        // document.body.style.fontFamily = "'Arima Madurai', cursive";
    }
    else {
        document.getElementById("profilePhoto").src="./images/profileDark.png";
        // document.getElementById("websiteIcon").href="./images/profileDark.png";
        document.title = "Profile Page - DARK";

        document.getElementById("funfact").style.borderColor = "#cb871c";
        document.getElementById("nav").style.borderColor = "hsl(240, 30%, 30%)";
        document.getElementById("nav").style.backgroundColor = "hsl(230, 40%, 80%)";

        /* ///////// VERY DUMP SOLUTION ///////// */
        document.getElementById("funfact").style.borderColor = "#ddb355";
        document.getElementById("nav").style.borderColor = "hsl(240, 30%, 30%)";
        document.getElementById("myProjects").style.borderColor = "hsl(240, 30%, 30%)";
        document.getElementById("countDown").style.borderColor = "hsl(240, 30%, 30%)";
        document.getElementById("countdownBoard").style.color = "hsl(240, 30%, 30%)";

        document.getElementById("pageLinks").style.color = "hsl(240, 30%, 30%)";
        document.getElementById("josefPolasek").style.color = "hsl(240, 30%, 30%)";
        document.getElementById("skku").style.color = "hsl(240, 30%, 30%)";
        document.getElementById("htmlCSS").style.color = "hsl(240, 30%, 30%)";
        document.getElementById("javascript").style.color = "hsl(240, 30%, 30%)";
        document.getElementById("cpp").style.color = "hsl(240, 30%, 30%)";
        document.getElementById("python").style.color = "hsl(240, 30%, 30%)";
        document.getElementById("git").style.color = "hsl(240, 30%, 30%)";
        document.getElementById("linux").style.color = "hsl(240, 30%, 30%)";
        document.getElementById("copyMail").style.color = "hsl(240, 30%, 30%)";

        /* ///////// END OF DUMP SOLUTION ///////// */

        resetFunfact();
        document.getElementById("themeDark").style.display = "block";

        // document.body.style.backgroundColor = "#21201e";
        document.body.style.backgroundColor = "hsl(240, 10%, 10%)";
        document.body.style.fontFamily = "sans-serif";
    } 

    window.setTimeout( () => {
        changeLogo(counter);
    }, 300 );
    counter++;
};

window.setTimeout ( () => {
    document.getElementById("profilePhoto").classList.remove("moveDown");
    document.getElementById("websiteIcon").href="./images/profileDark.png";
    document.title = "Profile Page - DARK";
    
    window.setTimeout( () => {
        document.getElementById("profilePhoto").style.transition = "0.5s";
    }, 100 );
}, 2000);