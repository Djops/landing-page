





let menuItem = document.getElementById("menu__dispaly-block")
let menuToggle = document.getElementById("menu__toggle");
let menu = document.getElementById("menu");
let buttonHome = document.getElementById("buttonHome")
let menuItemLink = document.querySelectorAll(".Menu__item_link")



menuToggle.addEventListener("click", function () {
    if (menuItem.style.display != "block") {
        menuItem.style.display = "block"
        console.log("j")
    } else if (menuItem.style.display = "block") {
        menuItem.style.display = "none"
    }
});




window.addEventListener('resize', function () {
    if (document.documentElement.clientWidth > 600) {
        menuItem.style.display = "block"
    } else if (document.documentElement.clientWidth < 617) {
        menuItem.style.display = "none"
    }
});







