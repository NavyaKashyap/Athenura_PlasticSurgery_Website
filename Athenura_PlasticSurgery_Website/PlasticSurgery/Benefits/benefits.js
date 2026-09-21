/* =========================================================
   ATHENURA — BENEFITS PAGE JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".intro, .benefit-card, .smartlipo-image, .smartlipo-content, .area-card, .cta"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =====================================================
       2. ACTIVE NAVIGATION
    ===================================================== */

    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        const linkPage = link.getAttribute("href")
            ?.split("/")
            .pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });


    /* =====================================================
       3. AREA CARD CLICK
    ===================================================== */

    const areaCards = document.querySelectorAll(".area-card");

    areaCards.forEach(card => {

        card.addEventListener("click", () => {

            areaCards.forEach(item => {
                item.classList.remove("selected");
            });

            card.classList.add("selected");

        });

    });


    /* =====================================================
       4. SMOOTH CTA
    ===================================================== */

    const consultationButton =
        document.querySelector(".cta-button");

    if (consultationButton) {

        consultationButton.addEventListener("mouseenter", () => {
            consultationButton.classList.add("hovered");
        });

        consultationButton.addEventListener("mouseleave", () => {
            consultationButton.classList.remove("hovered");
        });

    }


    /* =====================================================
       5. SCROLL TO TOP
    ===================================================== */

    const scrollTopButton = document.createElement("button");

    scrollTopButton.className = "benefits-scroll-top";

    scrollTopButton.innerHTML = "↑";

    scrollTopButton.setAttribute(
        "aria-label",
        "Scroll to top"
    );

    document.body.appendChild(scrollTopButton);


    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollTopButton.classList.add("visible");

        } else {

            scrollTopButton.classList.remove("visible");

        }

    });


    scrollTopButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


});