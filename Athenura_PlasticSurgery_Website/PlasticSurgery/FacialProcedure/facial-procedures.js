/* =========================================================
   FACIAL PROCEDURES PAGE JS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       SCROLL REVEAL ANIMATION
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".facial-intro-content, " +
        ".facial-section-heading, " +
        ".facial-card, " +
        ".facial-care-content"
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
       FACIAL PROCEDURE CARD INTERACTION
    ===================================================== */

    const facialCards =
        document.querySelectorAll(".facial-card");


    facialCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            card.classList.add("active");

        });


        card.addEventListener("mouseleave", function () {

            card.classList.remove("active");

        });

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


    console.log(
        "Athenura Facial Procedures page loaded."
    );

});