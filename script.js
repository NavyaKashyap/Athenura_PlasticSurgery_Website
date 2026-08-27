// ==================================================
// OFFER POPUP
// ==================================================

const closeOffer = document.getElementById("closeOffer");
const offerPopup = document.querySelector(".offer-popup");

if (closeOffer && offerPopup) {

    closeOffer.addEventListener("click", function () {

        offerPopup.style.display = "none";

    });

}


const navbarContainer = document.getElementById("navbar");

  navbarContainer.innerHTML = `
        <nav class="navbar">

            <div class="navbar-container">

                <!-- Athenura Logo -->
                <a href="index.html" class="navbar-logo">
                    <img src="Resources/images/logo/athenura-logo.png" alt="Athenura">
                </a>


                <!-- Navigation -->
                <div class="navbar-menu">

                    <a href="../index.html" class="nav-link">HOME</a>

                    <a href="services.html" class="nav-link">
                        SERVICES
                    </a>

                    <a href="Resources/resources.html" class="nav-link">
                        RESOURCES
                    </a>

                    <a href="../gallery/index.html" class="nav-link">
                        GALLERY
                    </a>

                    <a href="../contact/index.html" class="nav-link">
                        CONTACT
                    </a>

                    <a href="../offers/index.html" class="nav-link">
                        OFFERS
                    </a>

                    <!-- Search -->
                    <button class="search-button" aria-label="Search">
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


                <!-- Mobile Menu Button -->
                <button class="menu-toggle" aria-label="Open menu">
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

  window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

  });


  /* =================================
     MOBILE MENU
  ================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");

  menuToggle.addEventListener("click", () => {

    navbarMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");

  });



// ==================================================
// CARD SCROLL ANIMATION
// ==================================================

const cards = document.querySelectorAll(".card");

if (cards.length > 0) {

    const cardObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    cardObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.2
        }
    );


    cards.forEach(function (card) {

        card.style.opacity = "0";

        card.style.transform = "translateY(40px)";

        card.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        cardObserver.observe(card);

    });

}


// ==================================================
// ABOUT US SCROLL ANIMATION
// ==================================================

const aboutSection = document.querySelector(".about-section");

if (aboutSection) {

    const aboutImage =
        aboutSection.querySelector(".about-image");

    const aboutContent =
        aboutSection.querySelector(".about-content");

    const aboutIntro =
        aboutSection.querySelector(".about-intro");


    const aboutObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    if (aboutIntro) {
                        aboutIntro.classList.add("show");
                    }

                    if (aboutImage) {
                        aboutImage.classList.add("show");
                    }

                    if (aboutContent) {
                        aboutContent.classList.add("show");
                    }

                    aboutObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.2
        }
    );


    aboutObserver.observe(aboutSection);

}


// ==================================================
// ABOUT BUTTON
// ==================================================

const aboutButton =
    document.querySelector(".about-btn");

if (aboutButton) {

    aboutButton.addEventListener("click", function (event) {

        event.preventDefault();

        window.location.href = "about.html";

    });

}


// ==================================================
// BACK TO TOP
// ==================================================

const backToTop =
    document.getElementById("backToTop");

if (backToTop) {

    // Show / hide button while scrolling

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    // Scroll to top when clicked

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
// ==================================================
// TESTIMONIAL SWIPER
// ==================================================

document.addEventListener("DOMContentLoaded", function () {

    // Check if Swiper library is loaded
    if (typeof Swiper === "undefined") {
        console.error("Swiper library is not loaded.");
        return;
    }

    // Check if testimonial slider exists
    const testimonialElement = document.querySelector(".testimonialSwiper");

    if (!testimonialElement) {
        return;
    }

    const testimonialSwiper = new Swiper(".testimonialSwiper", {

        slidesPerView: 1,
        spaceBetween: 30,

        loop: true,
        speed: 1000,

        grabCursor: true,
        centeredSlides: true,

        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        pagination: {
            el: ".testimonialSwiper .swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".testimonialSwiper .swiper-button-next",
            prevEl: ".testimonialSwiper .swiper-button-prev",
        },

        keyboard: {
            enabled: true,
        },

        mousewheel: {
            forceToAxis: true,
        },

        breakpoints: {

            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },

            768: {
                slidesPerView: 1,
                spaceBetween: 25,
            },

            1024: {
                slidesPerView: 1,
                spaceBetween: 30,
            }

        }

    });

});
/*=====================================================
BEFORE & AFTER SWIPER
=====================================================*/

document.addEventListener("DOMContentLoaded", function () {

    if (typeof Swiper === "undefined") {
        console.error("Swiper is not loaded.");
        return;
    }

    const slider = document.querySelector(".beforeAfterSwiper");

    if (!slider) {
        return;
    }

    new Swiper(".beforeAfterSwiper", {

        /* ================================
           BASIC SETTINGS
        ================================= */

        loop: true,

        speed: 650,

        grabCursor: true,

        allowTouchMove: true,

        watchOverflow: true,


        /* ================================
           SLIDES
        ================================= */

        slidesPerView: 1,

        spaceBetween: 22,


        /* ================================
           AUTOPLAY
        ================================= */

        autoplay: {
            delay: 3200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },


        /* ================================
           PAGINATION
        ================================= */

        pagination: {
            el: ".before-pagination",
            clickable: true
        },


        /* ================================
           NAVIGATION
        ================================= */

        navigation: {
            nextEl: ".before-next",
            prevEl: ".before-prev"
        },


        /* ================================
           RESPONSIVE
        ================================= */

        breakpoints: {

            768: {
                slidesPerView: 2,
                spaceBetween: 22
            },

            1100: {
                slidesPerView: 3,
                spaceBetween: 25
            }

        }

    });

});
// TREATMENTS BY AGE
// ==================================================

document.addEventListener("DOMContentLoaded", function () {

    const ageButtons = document.querySelectorAll(".age-nav");
    const ageFeatureImage = document.getElementById("ageFeatureImage");

    if (!ageButtons.length || !ageFeatureImage) {
        return;
    }

    const ageImageNumber =
        document.querySelector(".age-image-number");

    const ageBigNumber =
        document.querySelector(".age-big-number");

    const ageFeatureLabel =
        document.querySelector(".age-content-label");

    const ageFeatureTitle =
        document.getElementById("ageFeatureTitle");

    const ageFeatureText =
        document.getElementById("ageFeatureText");

    const treatmentLinks =
        document.querySelectorAll(".age-treatment-list a");


    const ageData = {

        20: {
            image: "image/20s.jpg",
            number: "01",
            alt: "Treatments in your 20s",

            label: "THE FOUNDATION YEARS",

            title: "Enhance what<br>makes you <em>you.</em>",

            text:
                "Focus on prevention, skin health and subtle enhancements that keep your natural features looking fresh.",

            treatments: [
                "Skin Rejuvenation",
                "Acne & Scar Treatment",
                "Lip Enhancement",
                "Preventive Care"
            ]
        },


        30: {
            image: "images/treatment-30s.jpg",
            number: "02",
            alt: "Treatments in your 30s",

            label: "THE REFINEMENT YEARS",

            title: "Refine your<br>natural <em>beauty.</em>",

            text:
                "Subtle, carefully considered treatments designed to refresh your appearance while maintaining your individuality.",

            treatments: [
                "Botox",
                "Dermal Fillers",
                "Skin Rejuvenation",
                "Rhinoplasty"
            ]
        },


        40: {
            image: "images/treatment-40s.jpg",
            number: "03",
            alt: "Treatments in your 40s",

            label: "THE RESTORATION YEARS",

            title: "Restore your<br>natural <em>confidence.</em>",

            text:
                "Refresh and restore your features with treatments that address changing skin quality, volume and definition.",

            treatments: [
                "Facelift",
                "Blepharoplasty",
                "Dermal Fillers",
                "Neck Lift"
            ]
        },


        50: {
            image: "images/treatment-50s.jpg",
            number: "04",
            alt: "Treatments in your 50s",

            label: "THE REJUVENATION YEARS",

            title: "Refresh.<br>Restore. <em>Renew.</em>",

            text:
                "Thoughtful rejuvenation treatments designed to restore definition and create a naturally refreshed appearance.",

            treatments: [
                "Facelift",
                "Neck Lift",
                "Blepharoplasty",
                "Skin Tightening"
            ]
        },


        60: {
            image: "images/treatment-60s.jpg",
            number: "05",
            alt: "Treatments in your 60s",

            label: "THE RESTORATION YEARS",

            title: "Age with<br><em>confidence.</em>",

            text:
                "Comprehensive treatments focused on restoring facial harmony, definition and a refreshed appearance.",

            treatments: [
                "Deep Plane Facelift",
                "Neck Lift",
                "Eyelid Surgery",
                "Facial Rejuvenation"
            ]
        },


        70: {
            image: "images/treatment-70s.jpg",
            number: "06",
            alt: "Treatments in your 70s",

            label: "THE TIMELESS YEARS",

            title: "Your beauty<br>has no <em>age.</em>",

            text:
                "Personalized rejuvenation options designed around your features, goals and individual sense of confidence.",

            treatments: [
                "Facelift",
                "Neck Lift",
                "Eyelid Surgery",
                "Facial Rejuvenation"
            ]
        }

    };


    // ==================================================
    // CHANGE AGE
    // ==================================================

    function changeAge(age) {

        const data = ageData[age];

        if (!data) {
            return;
        }


        // Remove active state

        ageButtons.forEach(function (button) {

            button.classList.remove("active");

        });


        // Activate selected button

        const activeButton =
            document.querySelector(
                '.age-nav[data-age="' + age + '"]'
            );

        if (activeButton) {

            activeButton.classList.add("active");

        }


        // Fade image out

        ageFeatureImage.style.opacity = "0";


        setTimeout(function () {

            ageFeatureImage.src = data.image;
            ageFeatureImage.alt = data.alt;

            ageFeatureImage.style.opacity = "1";

        }, 200);


        // Update numbers

        if (ageImageNumber) {
            ageImageNumber.textContent = data.number;
        }

        if (ageBigNumber) {
            ageBigNumber.textContent = age + "s";
        }


        // Update content

        if (ageFeatureLabel) {
            ageFeatureLabel.textContent = data.label;
        }

        if (ageFeatureTitle) {
            ageFeatureTitle.innerHTML = data.title;
        }

        if (ageFeatureText) {
            ageFeatureText.textContent = data.text;
        }


        // Update treatments

        treatmentLinks.forEach(function (link, index) {

            const number =
                link.querySelector("span");

            if (number) {

                number.textContent =
                    "0" + (index + 1);

            }

            if (data.treatments[index]) {

                link.childNodes[
                    link.childNodes.length - 1
                ].textContent =
                    " " + data.treatments[index];

            }

        });

    }


    // ==================================================
    // BUTTON EVENTS
    // ==================================================

    ageButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const age =
                this.getAttribute("data-age");

            changeAge(age);

        });

    });

});
/*============
FOOTER
==============*/

document.addEventListener ("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer");

  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="footer">
      <div class="footer-container">
        
        <!-- MAIN CONTENT GRID -->
        <div class="footer-main">

          <!-- LEFT COLUMN -->
          <div class="footer-left">
            <a href="../index.html" class="footer-logo">
              <img src="Resources/images/logo/athenura-logo.png" alt="Athenura Logo">
            </a>

            <p class="footer-description">
              We believe in creating a welcoming experience where every patient feels confident, cared for, and valued.
            </p>

            <div class="footer-hours-section">
              <h3 class="footer-title">
                <i class="fa-regular fa-hand-point-right"></i> Hours Of Operation
              </h3>
              <p class="hours-text">Mon-Fri : 09:00 AM to 05:00 PM</p>
            </div>

            <div class="social-links">
              <a href="https://www.google.com/" target="_blank" aria-label="Google">
                <i class="fa-brands fa-google"></i>
              </a>
              <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          <!-- RIGHT COLUMNS SECTION -->
          <div class="footer-grid">
            
            <!-- Column 1: About Us & Contact -->
            <div class="footer-column">
              <h3 class="footer-title">About Us</h3>
              <ul>
                <li><a href="../about/index.html">About Us</a></li>
                <li><a href="#">Meet Our Providers</a></li>
                <li><a href="#">Post</a></li>
                <li><a href="#">Feedback</a></li>
                <li><a href="#">Reviews</a></li>
              </ul>

              <h3 class="footer-title subheading">Contact</h3>
              <ul>
                <li><a href="#">Get Direction</a></li>
                <li><a href="#">Direction to SmartLipo</a></li>
                <li><a href="#">Appointments</a></li>
                <li><a href="#">Business Hours</a></li>
              </ul>
            </div>

            <!-- Column 2: Resources & Services -->
            <div class="footer-column">
              <h3 class="footer-title">Resources</h3>
              <ul>
                <li><a href="#">Local Resources</a></li>
                <li><a href="#">Library</a></li>
                <li><a href="#">Social Media</a></li>
                <li><a href="#">Newsletter Sign Up</a></li>
                <li><a href="#">Content</a></li>
              </ul>

              <h3 class="footer-title subheading">Services</h3>
              <ul>
                <li><a href="#">Brazilian Butt Lift (Fat Transfer) Specialist</a></li>
                <li><a href="#">Fat Reduction</a></li>
                <li><a href="#">Chemical Peel</a></li>
                <li><a href="#">CO2 Laser Treatment</a></li>
                <li><a href="#">Fat Transfer Surgery</a></li>
              </ul>

              <a href="../services/index.html" class="view-all">View All <i class="fa-regular fa-hand-point-right"></i></a>
            </div>

          </div>

        </div>

        <!-- COPYRIGHT -->
        
          <div class="footer-bottom">
            <p>© 2026 Athenura. All Rights Reserved.</p>
          </div>
       

      </div>
    </footer>
  `;})
  
/* =================================
   CTA Section
================================= */

document.addEventListener("DOMContentLoaded", () => {

    const cta = document.getElementById("cta");

    if (!cta) return;

    cta.className = "cta";

    cta.innerHTML = `
        <!-- CTA CONTAINER -->
        <div class="cta-container">

            <!-- VECTOR BACKGROUND 
            <img
                src="image/vector2.png"
                alt=""
                class="cta-vector"
            >-->

            <!-- CTA CONTENT -->
            <div class="cta-content">

                <h2>REQUEST A CONSULTATION</h2>

                <p>
                    We are an accomplished group of physician teachers and
                    researchers dedicated to advancing the field of cosmetic
                    medicine.
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
});