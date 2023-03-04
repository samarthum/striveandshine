const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".primary-nav__list");

navToggle.addEventListener("click", () => {
    const visibility = navList.getAttribute("data-visible");

    if (visibility === "false") {
        navList.setAttribute("data-visible", "true");
    } else {
        navList.setAttribute("data-visible", "false");
    }
})