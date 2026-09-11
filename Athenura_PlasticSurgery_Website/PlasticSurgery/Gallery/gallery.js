document.addEventListener("DOMContentLoaded", () => {

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

    

});
