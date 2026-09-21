/* =========================================================
   LUXURY CLINIC PAGE JS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       SCROLL REVEAL ANIMATION
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".luxury-intro-content, " +
        ".luxury-section-heading, " +
        ".luxury-card, " +
        ".luxury-experience-image, " +
        ".luxury-experience-content, " +
        ".luxury-cta-content"
    );

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(function (element) {

            element.classList.add("reveal");

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add("show");

        });

    }


    /* =====================================================
       STAGGER LUXURY CARDS
    ===================================================== */

    const luxuryCards =
        document.querySelectorAll(".luxury-card");

    luxuryCards.forEach(function (card, index) {

        card.style.transitionDelay =
            (index * 0.12) + "s";

    });


    /* =====================================================
       SMOOTH SCROLL FOR INTERNAL LINKS
    ===================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    /* =====================================================
       LUXURY CARD HOVER
    ===================================================== */

    luxuryCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            card.classList.add("active");

        });

        card.addEventListener("mouseleave", function () {

            card.classList.remove("active");

        });

    });


    console.log(
        "Athenura Luxury Clinic page loaded."
    );

});