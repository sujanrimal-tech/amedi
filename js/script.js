document.addEventListener("DOMContentLoaded", function() {

    // On-scroll animation observer
    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("is-visible");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("is-visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } 
            // Optional: uncomment the else block to make animations replay
            // else {
            //     hideScrollElement(el);
            // }
        })
    }

    // Initial check and event listener
    handleScrollAnimation();
    window.addEventListener("scroll", handleScrollAnimation);

});
/* === ADD THIS CODE TO THE END of script.js === */

// Mobile Navigation Toggle
const menuToggle = document.getElementById('mobile-menu-toggle');
const navLinks = document.getElementById('nav-links-list');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        // Toggle the 'nav-open' class on the navigation links container
        navLinks.classList.toggle('nav-open');

        // Toggle the 'is-active' class on the button itself for the X icon
        menuToggle.classList.toggle('is-active');
    });
}