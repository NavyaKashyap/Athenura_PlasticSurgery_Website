document.addEventListener("DOMContentLoaded", () => {

  const navbarContainer = document.getElementById("navbar");

  navbarContainer.innerHTML = `
        <nav class="navbar">

            <div class="navbar-container">

                <!-- Athenura Logo -->
                <a href="../index.html" class="navbar-logo">
                    <img src="../images/logo/athenura-logo.png" alt="Athenura">
                </a>


                <!-- Navigation -->
                <div class="navbar-menu">

                    <a href="../index.html" class="nav-link">HOME</a>

                    <a href="../Services/services.html" class="nav-link">
                        SERVICES
                    </a>

                    <a href="../Resources/resources.html" class="nav-link">
                        RESOURCES
                    </a>

                    <a href="../Gallery/gallery.html" class="nav-link">
                        GALLERY
                    </a>

                    <a href="../contact/contact.html" class="nav-link">
                        CONTACT
                    </a>

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

});



/*============
  FOOTER
==============*/

document.addEventListener("DOMContentLoaded", () => {
//   const footerContainer = document.getElementById("footer");

//   if (!footerContainer) return;

//   footerContainer.innerHTML = `
//     <footer class="footer">
//       <div class="footer-container">
        
//         <!-- MAIN CONTENT GRID -->
//         <div class="footer-main">

//           <!-- LEFT COLUMN -->
//           <div class="footer-left">
//             <a href="../index.html" class="footer-logo">
//               <img src="../images/logo/athenura-logo.png" alt="Athenura Logo">
//             </a>

//             <p class="footer-description">
//               We believe in creating a welcoming experience where every patient feels confident, cared for, and valued.
//             </p>

//             <div class="footer-hours-section">
//               <h3 class="footer-title">
//                 <i class="fa-regular fa-hand-point-right"></i> Hours Of Operation
//               </h3>
//               <p class="hours-text">Mon-Fri : 09:00 AM to 05:00 PM</p>
//             </div>

//             <div class="social-links">
//               <a href="https://www.google.com/" target="_blank" aria-label="Google">
//                 <i class="fa-brands fa-google"></i>
//               </a>
//               <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
//                 <i class="fa-brands fa-facebook-f"></i>
//               </a>
//               <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
//                 <i class="fa-brands fa-instagram"></i>
//               </a>
//             </div>
//           </div>

//           <!-- RIGHT COLUMNS SECTION -->
//           <div class="footer-grid">
            
//             <!-- Column 1: About Us & Contact -->
//             <div class="footer-column">
//               <h3 class="footer-title">About Us</h3>
//               <ul>
//                 <li><a href="../about/index.html">About Us</a></li>
//                 <li><a href="#">Meet Our Providers</a></li>
//                 <li><a href="#">Post</a></li>
//                 <li><a href="#">Feedback</a></li>
//                 <li><a href="#">Reviews</a></li>
//               </ul>

//               <h3 class="footer-title subheading">Contact</h3>
//               <ul>
//                 <li><a href="#">Get Direction</a></li>
//                 <li><a href="#">Direction to SmartLipo</a></li>
//                 <li><a href="#">Appointments</a></li>
//                 <li><a href="#">Business Hours</a></li>
//               </ul>
//             </div>

//             <!-- Column 2: Resources & Services -->
//             <div class="footer-column">
//               <h3 class="footer-title">Resources</h3>
//               <ul>
//                 <li><a href="#">Local Resources</a></li>
//                 <li><a href="#">Library</a></li>
//                 <li><a href="#">Social Media</a></li>
//                 <li><a href="#">Newsletter Sign Up</a></li>
//                 <li><a href="#">Content</a></li>
//               </ul>

//               <h3 class="footer-title subheading">Services</h3>
//               <ul>
//                 <li><a href="#">Brazilian Butt Lift (Fat Transfer) Specialist</a></li>
//                 <li><a href="#">Fat Reduction</a></li>
//                 <li><a href="#">Chemical Peel</a></li>
//                 <li><a href="#">CO2 Laser Treatment</a></li>
//                 <li><a href="#">Fat Transfer Surgery</a></li>
//               </ul>

//               <a href="../services/index.html" class="view-all">View All <i class="fa-regular fa-hand-point-right"></i></a>
//             </div>

//           </div>

//         </div>

//         <!-- COPYRIGHT -->
        
//           <div class="footer-bottom">
//             <p>© 2026 Athenura. All Rights Reserved.</p>
//           </div>
       

//       </div>
//     </footer>
//   `;

    const footerContainer = document.getElementById("footer");

    if (!footerContainer) return;


    footerContainer.innerHTML = `

        <footer class="footer">

            <div class="footer-container">

                <div class="footer-main">


                    <!-- =================================
                         COLUMN 1 : BRAND / ABOUT
                    ================================== -->

                    <div class="footer-left">

                        <a href="../index.html" class="footer-logo">

                            <img
                                src="../images/logo/athenura-logo.png"
                                alt="Athenura Logo"
                            >

                        </a>


                        <p class="footer-description">

                            We believe in creating a welcoming
                            experience where every patient feels
                            confident, cared for, and valued.

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


                        <!-- SOCIAL LINKS -->

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



                    <!-- =================================
                         COLUMN 2 : QUICK LINKS
                    ================================== -->

                    <div class="footer-column quick-links">

                        <h3 class="footer-title">

                            Quick Links

                        </h3>


                        <ul>

                            <li>
                                <a href="../index.html">
                                    Home
                                </a>
                            </li>


                            <li>
                                <a href="../service/services.html">
                                    Services
                                </a>
                            </li>


                            <li>
                                <a href="../Resources/resources.html">
                                    Resources
                                </a>
                            </li>


                            <li>
                                <a href="../Gallery/gallery.html">
                                    Gallery
                                </a>
                            </li>


                            <li>
                                <a href="../contact/contact.html">
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </div>



                    <!-- =================================
                         COLUMN 3 : GET IN TOUCH
                    ================================== -->

                    <div class="footer-column get-in-touch">

                        <h3 class="footer-title">

                            Get In Touch

                        </h3>

                        <div class="contact-items">
                        <!-- PHONE -->

                        <div class="contact-item">

                            <div class="contact-icon">

                                <i class="fa-solid fa-phone"></i>

                            </div>


                            <div>

                                <span class="contact-label">
                                    Phone
                                </span>

                                <a
                                    href="tel:+919835051934"
                                    class="contact-value"
                                >
                                    +91 9835051934
                                </a>

                            </div>

                        </div>



                        <!-- EMAIL -->

                        <div class="contact-item">

                            <div class="contact-icon">

                                <i class="fa-solid fa-envelope"></i>

                            </div>


                            <div>

                                <span class="contact-label">
                                    Email
                                </span>

                                <a
                                    href="mailto:official@athenura.in"
                                    class="contact-value"
                                >
                                    official@athenura.in
                                </a>

                            </div>

                        </div>
                        </div>
                        



                        <!-- MAP -->

                        <div class="footer-map">

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.378777777823!2d77.3614601942478!3d28.618407722875563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cb70326146a27db%3A0x39227c4340f97501!2sAthenura!5e0!3m2!1sen!2sin!4v1770454010754!5m2!1sen!2sin"
                                referrerpolicy="no-referrer-when-downgrade"
                                title="Athenura Location"
                            >
                            </iframe>

                        </div>

                    </div>


                </div>



                <!-- =================================
                     COPYRIGHT
                ================================== -->

                <div class="footer-bottom">

                    <p>
                        © 2026 Athenura. All Rights Reserved.
                    </p>

                </div>


            </div>

        </footer>

    `;


/* =================================
   BACK TO TOP
================================= */

const backToTop = document.createElement("button");

backToTop.className = "back-to-top";
backToTop.id = "backToTop";
backToTop.type = "button";
backToTop.setAttribute("aria-label", "Back to top");

backToTop.textContent = "↑";

document.body.appendChild(backToTop);


/* =================================
   SHOW / HIDE BUTTON
================================= */

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


/* =================================
   SCROLL TO TOP
================================= */

backToTop.addEventListener("click", function () {
  
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  
});


});




/* =================================
   CTA Section
================================= */

document.addEventListener("DOMContentLoaded", () => {

    const cta = document.getElementById("cta");

    if (!cta) return;

    cta.className = "cta"
    cta.innerHTML = `
        <!-- CTA BACKGROUND + CONTENT -->
        <div class="cta-container">

            <div class="cta-content">

                <h2>REQUEST A CONSULTATION</h2>

                <p>
                    We are an accomplished group of physician teachers and
                    researchers dedicated to advancing the field of cosmetic
                    medicine.
                </p>

                <a href="#" class="cta-button" onclick="openConsultationModal(); return false;">
                    Book Now
                </a>

            </div>

        </div>


        <!-- WOMAN IMAGE -->
        <img
            src="../images/cta/cta-woman.png"
            alt="Woman"
            class="cta-woman"
        >
    `;
});

/* =================================
   Consultation Modal
================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (document.getElementById("consultationModal")) return;

    const consultationModal = document.createElement("div");

    consultationModal.innerHTML = `

        <!-- =========================================================
             BOOK CONSULTATION POPUP
        ========================================================= -->

        <div class="consultation-modal" id="consultationModal">

            <!-- Dark background -->

            <div class="consultation-overlay"
                 onclick="closeConsultationModal()">
            </div>


            <!-- Popup -->

            <div class="consultation-box">


                <!-- Close -->

                <button
                    type="button"
                    class="consultation-close"
                    onclick="closeConsultationModal()"
                    aria-label="Close consultation form">

                    ×

                </button>


                <!-- Header -->

                <div class="consultation-header">

                    <div class="consultation-tag">
                        SCHEDULE YOUR VISIT
                    </div>

                    <h2>Book Your Consultation</h2>

                    <p>
                        Share a few details and our team will confirm your
                        appointment shortly.
                    </p>

                </div>


                <!-- Form -->

                <form id="consultationForm">


                    <!-- Full Name -->

                    <div class="consultation-form-group full-width">

                        <label for="consultationName">
                            FULL NAME
                        </label>

                        <input
                            type="text"
                            id="consultationName"
                            name="name"
                            placeholder="Your full name"
                            required
                        >

                    </div>


                    <!-- Email + Phone -->

                    <div class="consultation-form-row">

                        <div class="consultation-form-group">

                            <label for="consultationEmail">
                                EMAIL
                            </label>

                            <input
                                type="email"
                                id="consultationEmail"
                                name="email"
                                placeholder="you@example.com"
                                required
                            >

                        </div>


                        <div class="consultation-form-group">

                            <label for="consultationPhone">
                                PHONE NUMBER
                            </label>

                            <input
                                type="tel"
                                id="consultationPhone"
                                name="phone"
                                placeholder="+1 (___) ___-____"
                                required
                            >

                        </div>

                    </div>


                    <!-- Service -->

                    <div class="consultation-form-group full-width">

                        <label for="consultationService">
                            SELECT SERVICE
                        </label>

                        <select
                            id="consultationService"
                            name="service"
                            required>

                            <option value="" disabled selected>
                                Choose a service
                            </option>

                            <option value="Facial Procedures">
                                Facial Procedures
                            </option>

                            <option value="Body Contouring">
                                Body Contouring
                            </option>

                            <option value="Breast Surgery">
                                Breast Surgery
                            </option>

                            <option value="Liposuction">
                                Liposuction
                            </option>

                            <option value="SmartLipo">
                                SmartLipo
                            </option>

                            <option value="Reconstructive Surgery">
                                Reconstructive Surgery
                            </option>

                            <option value="Non-Surgical Procedures">
                                Non-Surgical Procedures
                            </option>

                        </select>

                    </div>


                    <!-- Date + Time -->

                    <div class="consultation-form-row">

                        <div class="consultation-form-group">

                            <label for="consultationDate">
                                PREFERRED DATE
                            </label>

                            <input
                                type="date"
                                id="consultationDate"
                                name="date"
                                required
                            >

                        </div>


                        <div class="consultation-form-group">

                            <label for="consultationTime">
                                PREFERRED TIME
                            </label>

                            <input
                                type="time"
                                id="consultationTime"
                                name="time"
                                required
                            >

                        </div>

                    </div>


                    <!-- Message -->

                    <div class="consultation-form-group full-width">

                        <label for="consultationMessage">
                            MESSAGE / YOUR CONCERN
                        </label>

                        <textarea
                            id="consultationMessage"
                            name="message"
                            rows="4"
                            placeholder="Tell us a little about what you'd like to address..."></textarea>

                    </div>


                    <!-- Submit -->

                    <button
                        type="submit"
                        class="consultation-submit">

                        REQUEST CONSULTATION

                        <span>→</span>

                    </button>

                </form>

            </div>

        </div>
    `;

    document.body.appendChild(consultationModal);

});

/* =========================================================
   BOOK CONSULTATION MODAL FUNCTIONALITY
========================================================= */


/* OPEN MODAL */

function openConsultationModal() {

    const consultationModal =
        document.getElementById("consultationModal");

    if (!consultationModal) return;

    consultationModal.classList.add("active");

    document.body.classList.add("consultation-open");
}


/* CLOSE MODAL */

function closeConsultationModal() {

    const consultationModal =
        document.getElementById("consultationModal");

    if (!consultationModal) return;

    consultationModal.classList.remove("active");

    document.body.classList.remove("consultation-open");
}


/* CLOSE WITH ESCAPE */

document.addEventListener("keydown", function (event) {

    const consultationModal =
        document.getElementById("consultationModal");

    if (!consultationModal) return;

    if (
        event.key === "Escape" &&
        consultationModal.classList.contains("active")
    ) {

        closeConsultationModal();

    }

});

/* =========================================================
   CONSULTATION FORM
========================================================= */

document.addEventListener("submit", function (event) {

    if (event.target.id !== "consultationForm") return;

    event.preventDefault();

    alert(
        "Thank you for requesting a consultation. " +
        "Our team will contact you shortly."
    );

    event.target.reset();

    closeConsultationModal();

});