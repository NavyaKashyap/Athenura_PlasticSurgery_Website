document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       GALLERY FILTER
    ========================================= */

    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            // Remove active class
            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            // Add active class
            button.classList.add("active");

            // Get selected filter
            const filter = button.dataset.filter;


            // Show / hide items
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


    /* =========================================
       LIGHTBOX
    ========================================= */

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxTitle = document.getElementById("lightboxTitle");

    const closeButton = document.getElementById("lightboxClose");
    const prevButton = document.getElementById("lightboxPrev");
    const nextButton = document.getElementById("lightboxNext");


    let currentIndex = 0;


    /* -----------------------------------------
       GET VISIBLE GALLERY ITEMS
    ----------------------------------------- */

    function getVisibleItems() {

        return Array.from(
            document.querySelectorAll(".gallery-item")
        ).filter(item => {
            return !item.classList.contains("hide");
        });

    }


    /* -----------------------------------------
       OPEN LIGHTBOX
    ----------------------------------------- */

    function openLightbox(index) {

        const visibleItems = getVisibleItems();

        if (!visibleItems.length) {
            return;
        }


        currentIndex = index;

        const item = visibleItems[currentIndex];

        const image = item.querySelector("img");


        if (!image) {
            return;
        }


        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightboxTitle.textContent =
            item.dataset.title || image.alt;


        lightbox.classList.add("show");

        document.body.style.overflow = "hidden";

    }


    /* -----------------------------------------
       CLOSE LIGHTBOX
    ----------------------------------------- */

    function closeLightbox() {

        lightbox.classList.remove("show");

        document.body.style.overflow = "";

    }


    /* -----------------------------------------
       NEXT IMAGE
    ----------------------------------------- */

    function showNext() {

        const visibleItems = getVisibleItems();

        if (!visibleItems.length) {
            return;
        }


        currentIndex++;

        if (currentIndex >= visibleItems.length) {
            currentIndex = 0;
        }


        openLightbox(currentIndex);

    }


    /* -----------------------------------------
       PREVIOUS IMAGE
    ----------------------------------------- */

    function showPrevious() {

        const visibleItems = getVisibleItems();

        if (!visibleItems.length) {
            return;
        }


        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = visibleItems.length - 1;
        }


        openLightbox(currentIndex);

    }


    /* =========================================
       CLICK GALLERY IMAGE
    ========================================= */

    galleryItems.forEach(item => {

        item.addEventListener("click", () => {

            const visibleItems = getVisibleItems();

            const index = visibleItems.indexOf(item);

            openLightbox(index);

        });

    });


    /* =========================================
       LIGHTBOX BUTTONS
    ========================================= */

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


    /* =========================================
       CLICK OUTSIDE LIGHTBOX
    ========================================= */

    if (lightbox) {

        lightbox.addEventListener("click", event => {

            if (event.target === lightbox) {

                closeLightbox();

            }

        });

    }


    /* =========================================
       KEYBOARD CONTROLS
    ========================================= */

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