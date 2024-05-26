const backBtns = document.querySelectorAll("#menu-back");
const menuListCategory = document.querySelector(".menu__list:first-child");
const menuListSubcategory = document.querySelectorAll(".menu__data");
const closeMenu = document.querySelector("#close-menu");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const menu = document.querySelector("#menu");
const menuIcon = document.querySelector("#menu-icon");
let isMenuOpen = true;

closeMenu.addEventListener("click", () => {
    isMenuOpen = true;
    menu.classList.remove("active-menu");
    menuIcon.className = "ri-menu-3-line";
});

menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu")) {
        isMenuOpen = true;
        menu.classList.remove("active-menu");
        menuIcon.className = "ri-menu-3-line";
    }
});

hamburgerMenu.addEventListener("click", () => {
    if (isMenuOpen) {
        isMenuOpen = false;
        menu.classList.add("active-menu");
        menuIcon.className = "ri-close-line";
    } else {
        isMenuOpen = true;
        menu.classList.remove("active-menu");
        menuIcon.className = "ri-menu-3-line";

    }
});

backBtns.forEach(backBtn => {
    backBtn.addEventListener("click", () => {
        menuListCategory.classList.remove("active");

        menuListSubcategory.forEach(menuList => {
            if (menuList.classList.contains("active-left")) {
                menuList.classList.remove("active-left");
            }
        });
    })
});

function openCity(evt, cityName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("menu__data");

    menuListSubcategory.forEach(menuList => {
        if (menuList.id == cityName) {
            menuListCategory.classList.add("active");
            menuList.classList.add("active-left");
        }
    });

    tabLinks = document.getElementsByClassName("menu__link--category");
    for (i = 0; i < tabLinks.length; i++)
        tabLinks[i].className = tabLinks[i].className.replace(" tab-active", "");

    evt.currentTarget.className += " tab-active";
}