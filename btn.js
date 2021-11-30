// setup
const page = document.getElementById("profilePage");

// when a button is clicked
page.addEventListener("click", btn => {
    const isButton = btn.target.nodeName === "BUTTON";
    if (!isButton) {
        return;
    }

    // choose action
    if(btn.target.id === "project1") window.location = "https://josefpolasek.github.io/atm";
    // if(btn.target.id === "project2") window.location = "";
    // if(btn.target.id === "project3") window.location = "";
    else if (btn.target.id === "project4") window.location = "https://josefpolasek.github.io/loginApp/";
    // else if ... ;
});

// hover image
let counter = 0;
document.getElementById("profilePhoto").onclick = () => {    
    if (counter%2 === 0) {
        document.getElementById("profilePhoto").src="./images/p4.png"; /* "./images/profileLight.png"; */
        document.getElementById("websiteIcon").href="./images/p4.png";
        document.body.style.backgroundColor = "#7f999e";
        document.body.style.fontFamily = "'Arima Madurai', cursive";
    }
    else {
        document.getElementById("profilePhoto").src="./images/profileDark.png";
        document.getElementById("websiteIcon").href="./images/profileDark.png";
        document.body.style.backgroundColor = "#21201e";
        document.body.style.fontFamily = "sans-serif";
    }
    
    counter++;
};