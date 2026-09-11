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
              <img src="../images/logo/athenura-logo.png" alt="Athenura Logo">
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

                <a href="#" class="cta-button">
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