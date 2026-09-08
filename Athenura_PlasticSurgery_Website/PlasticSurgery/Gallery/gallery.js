```javascript
document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       NAVBAR SCROLL
    ===================================================== */

    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("open");

    });


    /* =====================================================
       GALLERY FILTER
    ===================================================== */

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


            const filter =
                button.getAttribute("data-filter");


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


    /* =====================================================
       LIGHTBOX
    ===================================================== */

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


    function getVisibleItems() {

        return Array.from(
            document.querySelectorAll(".gallery-item")
        ).filter(item =>
            !item.classList.contains("hide")
        );

    }


    function openLightbox(index) {

        const visibleItems =
            getVisibleItems();

        if (!visibleItems.length) {
            return;
        }

        currentIndex = index;

        const item =
            visibleItems[currentIndex];

        const image =
            item.querySelector("img");

        lightboxImage.src =
            image.src;

        lightboxImage.alt =
            image.alt;

        lightboxTitle.textContent =
            item.dataset.title || image.alt;

        lightbox.classList.add("show");

        document.body.style.overflow = "hidden";

    }


    function closeLightbox() {

        lightbox.classList.remove("show");

        document.body.style.overflow = "";

    }


    function showNext() {

        const visibleItems =
            getVisibleItems();

        if (!visibleItems.length) {
            return;
        }

        currentIndex++;

        if (currentIndex >= visibleItems.length) {
            currentIndex = 0;
        }

        openLightbox(currentIndex);

    }


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


    /* Gallery image click */

    galleryItems.forEach(item => {

        item.addEventListener("click", () => {

            const visibleItems =
                getVisibleItems();

            const index =
                visibleItems.indexOf(item);

            openLightbox(index);

        });

    });


    /* Buttons */

    closeButton.addEventListener(
        "click",
        closeLightbox
    );

    nextButton.addEventListener(
        "click",
        showNext
    );

    prevButton.addEventListener(
        "click",
        showPrevious
    );


    /* Click outside image */

    lightbox.addEventListener("click", event => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });


    /* Keyboard controls */

    document.addEventListener("keydown", event => {

        if (!lightbox.classList.contains("show")) {
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

});
```
