document.addEventListener("DOMContentLoaded", () => {

    /* =================================
       NAVBAR
    ================================= */

    const navbarContainer = document.getElementById("navbar");

    if (navbarContainer) {

        navbarContainer.innerHTML = `
            <nav class="navbar">

                <div class="navbar-container">

                    <!-- Athenura Logo -->
                    <a href="../index.html" class="navbar-logo">
                        <img 
                            src="../Resources/images/logo/athenura-logo.png" 
                            alt="Athenura"
                        >
                    </a>

                    <!-- Navigation -->
                    <div class="navbar-menu">

                        <a href="../index.html" class="nav-link">
                            HOME
                        </a>

                        <a href="../services.html" class="nav-link">
                            SERVICES
                        </a>

                        <a href="../Resources/resources.html" class="nav-link">
                            RESOURCES
                        </a>

                        <a href="../Gallery/gallery.html" class="nav-link">
                            GALLERY
                        </a>

                        <a href="../contact.html" class="nav-link">
                            CONTACT
                        </a>

                        <a href="../offers/index.html" class="nav-link">
                            OFFERS
                        </a>

                        <!-- Search -->
                        <button 
                            class="search-button" 
                            aria-label="Search"
                            type="button"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="11"
                                    cy="11"
                                    r="7"
                                    stroke="currentColor"
                                    stroke-width="2"
                                />

                                <path
                                    d="M16.5 16.5L21 21"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </button>

                    </div>

                    <!-- Mobile Menu -->
                    <button 
                        class="menu-toggle" 
                        aria-label="Open menu"
                        type="button"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>

            </nav>
        `;


        /* =================================
           SCROLL EFFECT
        ================================= */

        const navbar = document.querySelector(".navbar");

        if (navbar) {

            window.addEventListener("scroll", () => {

                if (window.scrollY > 30) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }

            });

        }


        /* =================================
           MOBILE MENU
        ================================= */

        const menuToggle = document.querySelector(".menu-toggle");
        const navbarMenu = document.querySelector(".navbar-menu");

        if (menuToggle && navbarMenu) {

            menuToggle.addEventListener("click", () => {

                navbarMenu.classList.toggle("active");
                menuToggle.classList.toggle("active");

            });

        }

    }


    /* =================================
       BACK TO TOP
    ================================= */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });


        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =================================
       GALLERY FILTER
    ================================= */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const galleryItems =
        document.querySelectorAll(".gallery-item");


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            /* Remove active class */
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            /* Add active class */
            button.classList.add("active");

            /* Get filter */
            const filter =
                button.getAttribute("data-filter");


            /* Filter gallery */
            galleryItems.forEach(item => {

                if (
                    filter === "all" ||
                    item.classList.contains(filter)
                ) {

                    item.classList.remove("hide");

                } else {

                    item.classList.add("hide");

                }

            });

        });

    });


    /* =================================
       LIGHTBOX
    ================================= */

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxTitle =
        document.getElementById("lightboxTitle");

    const closeButton =
        document.getElementById("lightboxClose");

    const prevButton =
        document.getElementById("lightboxPrev");

    const nextButton =
        document.getElementById("lightboxNext");


    let currentIndex = 0;


    /* =================================
       GET VISIBLE ITEMS
    ================================= */

    function getVisibleItems() {

        return Array.from(
            document.querySelectorAll(".gallery-item")
        ).filter(item => {

            return !item.classList.contains("hide");

        });

    }


    /* =================================
       OPEN LIGHTBOX
    ================================= */

    function openLightbox(index) {

        if (!lightbox || !lightboxImage) {
            return;
        }


        const visibleItems =
            getVisibleItems();


        if (!visibleItems.length) {
            return;
        }


        currentIndex = index;


        const item =
            visibleItems[currentIndex];


        if (!item) {
            return;
        }


        const image =
            item.querySelector("img");


        if (!image) {
            return;
        }


        lightboxImage.src =
            image.src;

        lightboxImage.alt =
            image.alt;


        if (lightboxTitle) {

            lightboxTitle.textContent =
                item.dataset.title || image.alt;

        }


        lightbox.classList.add("show");

        document.body.style.overflow =
            "hidden";

    }


    /* =================================
       CLOSE LIGHTBOX
    ================================= */

    function closeLightbox() {

        if (!lightbox) {
            return;
        }


        lightbox.classList.remove("show");

        document.body.style.overflow =
            "";

    }


    /* =================================
       NEXT IMAGE
    ================================= */

    function showNext() {

        const visibleItems =
            getVisibleItems();


        if (!visibleItems.length) {
            return;
        }


        currentIndex++;


        if (
            currentIndex >=
            visibleItems.length
        ) {

            currentIndex = 0;

        }


        openLightbox(currentIndex);

    }


    /* =================================
       PREVIOUS IMAGE
    ================================= */

    function showPrevious() {

        const visibleItems =
            getVisibleItems();


        if (!visibleItems.length) {
            return;
        }


        currentIndex--;


        if (currentIndex < 0) {

            currentIndex =
                visibleItems.length - 1;

        }


        openLightbox(currentIndex);

    }


    /* =================================
       GALLERY IMAGE CLICK
    ================================= */

    galleryItems.forEach(item => {

        item.addEventListener("click", () => {

            const visibleItems =
                getVisibleItems();


            const index =
                visibleItems.indexOf(item);


            openLightbox(index);

        });

    });


    /* =================================
       LIGHTBOX BUTTONS
    ================================= */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeLightbox
        );

    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            showNext
        );

    }


    if (prevButton) {

        prevButton.addEventListener(
            "click",
            showPrevious
        );

    }


    /* =================================
       CLICK OUTSIDE LIGHTBOX
    ================================= */

    if (lightbox) {

        lightbox.addEventListener("click", event => {

            if (event.target === lightbox) {

                closeLightbox();

            }

        });

    }


    /* =================================
       KEYBOARD CONTROLS
    ================================= */

    document.addEventListener("keydown", event => {

        if (
            !lightbox ||
            !lightbox.classList.contains("show")
        ) {

            return;

        }


        if (event.key === "Escape") {

            closeLightbox();

        }


        if (event.key === "ArrowRight") {

            showNext();

        }


        if (event.key === "ArrowLeft") {

            showPrevious();

        }

    });


    /* =================================
       FOOTER
    ================================= */

    const footerContainer =
        document.getElementById("footer");


    if (footerContainer) {

        footerContainer.innerHTML = `

            <footer class="footer">

                <div class="footer-container">

                    <!-- MAIN CONTENT GRID -->
                    <div class="footer-main">

                        <!-- LEFT COLUMN -->
                        <div class="footer-left">

                            <a 
                                href="../index.html" 
                                class="footer-logo"
                            >
                                <img 
                                    src="../Resources/images/logo/athenura-logo.png" 
                                    alt="Athenura Logo"
                                >
                            </a>


                            <p class="footer-description">
                                We believe in creating a welcoming experience 
                                where every patient feels confident, cared for, 
                                and valued.
                            </p>


                            <div class="footer-hours-section">

                                <h3 class="footer-title">
                                    <i class="fa-regular fa-hand-point-right"></i>
                                    Hours Of Operation
                                </h3>

                                <p class="hours-text">
                                    Mon-Fri : 09:00 AM to 05:00 PM
                                </p>

                            </div>


                            <div class="social-links">

                                <a 
                                    href="https://www.google.com/" 
                                    target="_blank"
                                    aria-label="Google"
                                >
                                    <i class="fa-brands fa-google"></i>
                                </a>


                                <a 
                                    href="https://www.facebook.com/" 
                                    target="_blank"
                                    aria-label="Facebook"
                                >
                                    <i class="fa-brands fa-facebook-f"></i>
                                </a>


                                <a 
                                    href="https://www.instagram.com/" 
                                    target="_blank"
                                    aria-label="Instagram"
                                >
                                    <i class="fa-brands fa-instagram"></i>
                                </a>

                            </div>

                        </div>


                        <!-- RIGHT COLUMNS -->
                        <div class="footer-grid">

                            <!-- ABOUT -->
                            <div class="footer-column">

                                <h3 class="footer-title">
                                    About Us
                                </h3>

                                <ul>

                                    <li>
                                        <a href="../about/index.html">
                                            About Us
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            Meet Our Providers
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            Post
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            Feedback
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            Reviews
                                        </a>
                                    </li>

                                </ul>


                                <h3 class="footer-title subheading">
                                    Contact
                                </h3>

                                <ul>

                                    <li>
                                        <a href="#">
                                            Get Direction
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            Direction to SmartLipo
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            Appointments
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            Business Hours
                                        </a>
                                    </li>

                                </ul>

                            </div>


                            <!-- RESOURCES -->
                            <div class="footer-column">

                                <h3 class="footer-title">
                                    Resources
                                </h3>

                                <ul>

                                    <li>
                                        <a href="#">
                                            Local Resources
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            Library
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            Social Media
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            Newsletter Sign Up
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            Content
                                        </a>
                                    </li>

                                </ul>


                                <h3 class="footer-title subheading">
                                    Services
                                </h3>

                                <ul>

                                    <li>
                                        <a href="#">
                                            Brazilian Butt Lift 
                                            (Fat Transfer) Specialist
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            Fat Reduction
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            Chemical Peel
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            CO2 Laser Treatment
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            Fat Transfer Surgery
                                        </a>
                                    </li>

                                </ul>


                                <a 
                                    href="../services/index.html" 
                                    class="view-all"
                                >
                                    View All 
                                    <i class="fa-regular fa-hand-point-right"></i>
                                </a>

                            </div>

                        </div>

                    </div>


                    <!-- COPYRIGHT -->
                    <div class="footer-bottom">

                        <p>
                            © 2026 Athenura. All Rights Reserved.
                        </p>

                    </div>

                </div>

            </footer>

        `;

    }
/*=========================================
    BEFORE & AFTER COMPARISON SLIDER
=========================================*/

document.querySelectorAll(".compare-wrapper").forEach((wrapper) => {

    const after = wrapper.querySelector(".after");
    const divider = wrapper.querySelector(".divider");

    let isDragging = false;

    // Update slider position
    function updateSlider(x) {

        const rect = wrapper.getBoundingClientRect();

        let position = x - rect.left;

        if (position < 0) position = 0;
        if (position > rect.width) position = rect.width;

        const percentage = (position / rect.width) * 100;

        divider.style.left = percentage + "%";

        after.style.clipPath = `inset(0 0 0 ${percentage}%)`;
    }

    /* Desktop */

    wrapper.addEventListener("mousedown", () => {
        isDragging = true;
    });

    window.addEventListener("mouseup", () => {
        isDragging = false;
    });

    window.addEventListener("mousemove", (e) => {

        if (!isDragging) return;

        updateSlider(e.clientX);

    });

    /* Mobile */

    wrapper.addEventListener("touchstart", () => {
        isDragging = true;
    });

    window.addEventListener("touchend", () => {
        isDragging = false;
    });

    window.addEventListener("touchmove", (e) => {

        if (!isDragging) return;

        updateSlider(e.touches[0].clientX);

    });

});

    /* =================================
       CTA SECTION
    ================================= */

    const cta =
        document.getElementById("cta");


    if (cta) {

        cta.className = "cta";


        cta.innerHTML = `

            <!-- CTA CONTAINER -->
            <div class="cta-container">

                <div class="cta-content">

                    <h2>
                        REQUEST A CONSULTATION
                    </h2>


                    <p>
                        We are an accomplished group of physician 
                        teachers and researchers dedicated to advancing 
                        the field of cosmetic medicine.
                    </p>


                    <a href="#" class="cta-button">
                        Book Now
                    </a>

                </div>

            </div>


            <!-- WOMAN IMAGE -->
            <img
                src="Resources/images/cta/cta-woman.png"
                alt="Woman"
                class="cta-woman"
            >

        `;

    }

});
