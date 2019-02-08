

//creating the mobile responsive menu
function showMobilMenu() {
    if (document.getElementById("responsive").className == "resnavmenu") {
        document.getElementById("responsive").className = "block";
    } else {
        document.getElementById("responsive").className = "resnavmenu"
    }
}

//getting the li tags
var elements = document.getElementById("responsive").firstElementChild.children;

//new function
function newFonk() {
    console.log("newFonk is working");
}

//active class removing and adding new tag
for (let index = 0; index < elements.length; index++) {
    elements[index].onclick = function () {
        for (let j = 0; j < elements.length; j++) {
            elements[j].classList.remove("active");
        }
        elements[index].classList.add("active");
    };
}



