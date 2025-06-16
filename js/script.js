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
/* === AJAX Contact Form Submission === */
const contactForm = document.getElementById('contact-form');
const formContainer = document.getElementById('form-container');
const thankYouMessage = document.getElementById('thank-you-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        // 1. Prevent the default browser redirection
        event.preventDefault();

        // 2. Get the form data
        var formData = new FormData(contactForm);
        
        // 3. Send the data to Formspree using fetch
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            // 4. Check if the submission was successful
            if (response.ok) {
                // If successful, hide the form and show the thank you message
                if(formContainer) formContainer.style.display = 'none';
                if(thankYouMessage) thankYouMessage.style.display = 'block';
            } else {
                // If there was a server-side error
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert('Oops! There was a problem submitting your form.');
                    }
                })
            }
        }).catch(error => {
            // 5. Catch network errors
            alert('Oops! There was a network error.');
        });
    });
}
