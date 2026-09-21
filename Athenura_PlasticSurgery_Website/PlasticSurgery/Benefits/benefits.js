/* =========================================================
   ATHENURA — BENEFITS PAGE JAVASCRIPT
   Only for Benefits page interactions
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".intro, .benefit-card, .smartlipo-image, .smartlipo-content, .area-card"
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

        /* Fallback for older browsers */

        revealElements.forEach(function (element) {
            element.classList.add("show");
        });

    }


    /* =====================================================
       2. BENEFIT CARD INTERACTION
    ===================================================== */

    const benefitCards = document.querySelectorAll(".benefit-card");

    benefitCards.forEach(function (card) {

        card.addEventListener("click", function () {

            benefitCards.forEach(function (item) {
                item.classList.remove("selected");
            });

            card.classList.add("selected");

        });

    });


    /* =====================================================
       3. BODY AREA INTERACTION
    ===================================================== */

    const areaCards = document.querySelectorAll(".area-card");

    areaCards.forEach(function (card) {

        card.addEventListener("click", function () {

            areaCards.forEach(function (item) {
                item.classList.remove("selected");
            });

            card.classList.add("selected");

        });

    });


    /* =====================================================
       4. BACK TO TOP BUTTON
    

    const backToTop = document.createElement("button");

    backToTop.type = "button";

    backToTop.className = "benefits-scroll-top";

    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );

    backToTop.innerHTML = "↑";

    document.body.appendChild(backToTop);


    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            backToTop.classList.add("visible");

        } else {

            backToTop.classList.remove("visible");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =====================================================
       5. CTA CHECK
       CTA itself is handled by components.js
    ===================================================== */

    document.addEventListener("click", function (event) {

        const consultationButton =
            event.target.closest("#cta a");

        if (!consultationButton) return;

        console.log("Consultation CTA clicked");

    });


    /* =====================================================
       6. PAGE LOAD CHECK
    ===================================================== */

    console.log("Athenura Benefits JS loaded.");

});