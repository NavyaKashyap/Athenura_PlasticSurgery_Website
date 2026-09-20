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

    new Swiper(slider, {

        loop: true,

        speed: 650,

        grabCursor: true,

        allowTouchMove: true,

        slidesPerView: "auto",

        /* SPACE BETWEEN CARDS */
        spaceBetween: 30,

        autoplay: {
            delay: 3200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },

        pagination: {
            el: ".before-pagination",
            clickable: true
        },

        navigation: {
            nextEl: ".before-next",
            prevEl: ".before-prev"
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
            image: "image/20.jpg",
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
            image: "image/30.jpg",
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
            image: "image/40.jpg",
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
            image: "image/50.jpg",
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
            image: "image/60.jpg",
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
            image: "image/70.jpg",
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


document.addEventListener("DOMContentLoaded", () => {

    const surgeryCards = document.querySelectorAll(
        ".surgery-section .left-card, .surgery-section .right-card"
    );

    surgeryCards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.boxShadow =
                "0 15px 35px rgba(0, 0, 0, 0.08)";
        });

        card.addEventListener("mouseleave" , () => {
            card.style.boxShadow = "none";
        });

    });

});

/* =========================================================
   BOOK CONSULTATION MODAL
========================================================= */

const consultationModal =
    document.getElementById("consultationModal");


/* OPEN MODAL */

function openConsultationModal() {

    consultationModal.classList.add("active");

    document.body.classList.add("consultation-open");

}


/* CLOSE MODAL */

function closeConsultationModal() {

    consultationModal.classList.remove("active");

    document.body.classList.remove("consultation-open");

}


/* CLOSE WITH ESCAPE */

document.addEventListener("keydown", function (event) {

    if (
        event.key === "Escape" &&
        consultationModal.classList.contains("active")
    ) {

        closeConsultationModal();

    }

});


/* FORM SUBMIT */

document
    .getElementById("consultationForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Thank you for requesting a consultation. " +
            "Our team will contact you shortly."
        );

        this.reset();

        closeConsultationModal();

    });

    /* =========================================================
   BMI CALCULATOR
========================================================= */

const bmiModal = document.getElementById("bmiModal");


/* =========================================================
   OPEN BMI POPUP
========================================================= */

function openBMIModal() {

    bmiModal.classList.add("active");

    document.body.classList.add("bmi-open");

}


/* =========================================================
   CLOSE BMI POPUP
========================================================= */

function closeBMIModal() {

    bmiModal.classList.remove("active");

    document.body.classList.remove("bmi-open");

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener("keydown", function(event) {

    if (
        event.key === "Escape" &&
        bmiModal.classList.contains("active")
    ) {

        closeBMIModal();

    }

});


/* =========================================================
   BMI CALCULATION
========================================================= */

document
    .getElementById("bmiForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const height =
            parseFloat(
                document.getElementById("bmiHeight").value
            );

        const weight =
            parseFloat(
                document.getElementById("bmiWeight").value
            );


        /* Validation */

        if (
            !Number.isFinite(height) ||
            !Number.isFinite(weight) ||
            height <= 0 ||
            weight <= 0
        ) {

            alert("Please enter a valid height and weight.");

            return;

        }


        /* Convert height from cm to meters */

        const heightInMeters = height / 100;


        /* BMI formula */

        const bmi =
            weight /
            (heightInMeters * heightInMeters);


        const roundedBMI =
            bmi.toFixed(1);


        /* Determine category */

        let category = "";


        if (bmi < 18.5) {

            category = "Underweight";

        }
        else if (bmi < 25) {

            category = "Healthy Weight";

        }
        else if (bmi < 30) {

            category = "Overweight";

        }
        else {

            category = "Obesity";

        }


        /* Display */

        document.getElementById("bmiNumber").textContent =
            roundedBMI;

        document.getElementById("bmiCategory").textContent =
            category;

    });

    /* =========================================================
   VIP ACCESS MODAL
========================================================= */

const vipModal = document.getElementById("vipModal");


/* =========================================================
   OPEN
========================================================= */

function openVIPModal() {

    vipModal.classList.add("active");

    document.body.classList.add("vip-open");

}


/* =========================================================
   CLOSE
========================================================= */

function closeVIPModal() {

    vipModal.classList.remove("active");

    document.body.classList.remove("vip-open");

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener("keydown", function(event) {

    if (
        event.key === "Escape" &&
        vipModal.classList.contains("active")
    ) {

        closeVIPModal();

    }

});


/* =========================================================
   VIP FORM
========================================================= */

document
    .getElementById("vipForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you for your interest in the Athenura VIP Plastic Surgery Club. " +
            "Our team will contact you shortly."
        );

        this.reset();

        closeVIPModal();

    });


/* =========================================================
   TREATMENTS POPUP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const treatmentButton =
        document.getElementById("exploreTreatmentsBtn");

    const treatmentModal =
        document.getElementById("treatmentModal");

    const treatmentClose =
        document.getElementById("treatmentClose");

    const treatmentOverlay =
        document.getElementById("treatmentOverlay");


    /* Check elements */

    console.log("Treatment button:", treatmentButton);
    console.log("Treatment modal:", treatmentModal);
    console.log("Treatment close:", treatmentClose);
    console.log("Treatment overlay:", treatmentOverlay);


    /* Stop if popup elements are missing */

    if (!treatmentButton || !treatmentModal) {
        console.error(
            "Treatment popup elements are missing."
        );
        return;
    }


    /* OPEN POPUP */

    treatmentButton.addEventListener("click", function (event) {

        event.preventDefault();

        treatmentModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });


    /* CLOSE WITH X */

    if (treatmentClose) {

        treatmentClose.addEventListener("click", function () {

            treatmentModal.classList.remove("active");

            document.body.style.overflow = "";

        });

    }


    /* CLOSE BY CLICKING OVERLAY */

    if (treatmentOverlay) {

        treatmentOverlay.addEventListener("click", function () {

            treatmentModal.classList.remove("active");

            document.body.style.overflow = "";

        });

    }


    /* CLOSE WITH ESCAPE */

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            treatmentModal.classList.contains("active")
        ) {

            treatmentModal.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

});

/* =========================================================
   SIDE DIRECTION BUTTON
========================================================= */
/* =========================================================
   DIRECTION POPUP
========================================================= */

function openDirectionModal(event) {
    if (event) {
        event.preventDefault();
    }

    const modal = document.getElementById("directionModal");

    if (!modal) {
        console.error("directionModal not found");
        return;
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}


function closeDirectionModal() {

    const modal = document.getElementById("directionModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("active");
    document.body.style.overflow = "";
}


document.addEventListener("DOMContentLoaded", function () {

    const closeButton = document.getElementById("directionClose");
    const overlay = document.getElementById("directionOverlay");

    if (closeButton) {
        closeButton.addEventListener("click", function () {
            closeDirectionModal();
        });
    }

    if (overlay) {
        overlay.addEventListener("click", function () {
            closeDirectionModal();
        });
    }

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeDirectionModal();
        }

    });

});