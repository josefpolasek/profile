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
    // else if ... ;
});