document.addEventListener("DOMContentLoaded", function () {
    // Lightbox configuration
    if (typeof lightbox !== "undefined") {
        lightbox.option({
            resizeDuration: 200,
            wrapAround: true,
            albumLabel: "Image %1 of %2",
        });
    }

    // Navbar toggler functionality for mobile view
    const navbarToggler = document.querySelector(".navbar-toggler");
    const wrapper = document.querySelector("#wrapper");

    if (navbarToggler && wrapper) {
        navbarToggler.addEventListener("click", function (e) {
            e.preventDefault();
            wrapper.classList.toggle("toggled");
        });
    }

    // Mobile menu toggle functionality
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", function () {
            mobileMenu.classList.toggle("active");
            hamburger.classList.toggle("is-active");
        });
    }

    // Navbar scroll effect functionality
    const navbar = document.querySelector(".navbar-header");
    const logo = document.querySelector(".nav-center .logo");

    if (navbar && logo) {
        window.addEventListener("scroll", function () {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 50) {
                navbar.classList.add("navbar-fixed");

                // Adjust logo styles for fixed navbar
                logo.style.position = "absolute";
                logo.style.top = "4px";
                logo.style.left = "50%";
                logo.style.transform = "translateX(-50%)";
                logo.style.height = "55px"; // Smaller logo size
            } else {
                navbar.classList.remove("navbar-fixed");

                // Reset logo styles to default
                logo.style.position = "absolute";
                logo.style.top = "-15px";
                logo.style.left = "524px";
                logo.style.transform = "none";
                logo.style.height = "110px"; // Original logo size
            }
        });
    }
});
