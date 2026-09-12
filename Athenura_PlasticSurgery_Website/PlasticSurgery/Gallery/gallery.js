document.addEventListener("DOMContentLoaded", () => {

   /* =========================================================
   GALLERY PAGE JAVASCRIPT
========================================================= */


    /* =====================================================
       BEFORE & AFTER SLIDER
    ===================================================== */

    const sliders = document.querySelectorAll(".comparison-slider");


    sliders.forEach(function (slider) {

        const afterContainer =
            slider.querySelector(".comparison-after");

        const divider =
            slider.querySelector(".comparison-line");

        const handle =
            slider.querySelector(".comparison-handle");


        let isDragging = false;


        /* ---------------------------------------------
           SET SLIDER POSITION
        --------------------------------------------- */

        function setPosition(clientX) {

            const rect =
                slider.getBoundingClientRect();

            let position =
                ((clientX - rect.left) / rect.width) * 100;


            // Keep position between 0 and 100
            position =
                Math.max(0, Math.min(100, position));


            // Update after image
            afterContainer.style.width =
                position + "%";


            // Update divider
            divider.style.left =
                position + "%";


            // Save current position
            slider.dataset.position =
                position;
        }


        /* ---------------------------------------------
           MOUSE
        --------------------------------------------- */

        slider.addEventListener("mousedown", function (event) {

            isDragging = true;

            setPosition(event.clientX);

        });


        document.addEventListener("mousemove", function (event) {

            if (!isDragging) return;

            setPosition(event.clientX);

        });


        document.addEventListener("mouseup", function () {

            isDragging = false;

        });


        /* ---------------------------------------------
           TOUCH
        --------------------------------------------- */

        slider.addEventListener(
            "touchstart",
            function (event) {

                isDragging = true;

                setPosition(
                    event.touches[0].clientX
                );

            },
            { passive: true }
        );


        slider.addEventListener(
            "touchmove",
            function (event) {

                if (!isDragging) return;

                setPosition(
                    event.touches[0].clientX
                );

            },
            { passive: true }
        );


        slider.addEventListener(
            "touchend",
            function () {

                isDragging = false;

            }
        );


        /* ---------------------------------------------
           HANDLE CLICK
        --------------------------------------------- */

        if (handle) {

            handle.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                }
            );

        }

    });


    /* =====================================================
       CATEGORY FILTER
    ===================================================== */

    const filterButtons =
        document.querySelectorAll(".gallery-filter");

    const categories =
        document.querySelectorAll(".gallery-category");


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const filter =
                this.dataset.filter;


            /* -----------------------------------------
               ACTIVE BUTTON
            ----------------------------------------- */

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });

            this.classList.add("active");


            /* -----------------------------------------
               SHOW / HIDE CATEGORIES
            ----------------------------------------- */

            categories.forEach(function (category) {

                const categoryName =
                    category.dataset.category;


                if (
                    filter === "all" ||
                    categoryName === filter
                ) {

                    category.style.display = "block";

                    requestAnimationFrame(function () {

                        category.style.opacity = "1";
                        category.style.transform =
                            "translateY(0)";

                    });

                } else {

                    category.style.opacity = "0";
                    category.style.transform =
                        "translateY(15px)";

                    setTimeout(function () {

                        category.style.display = "none";

                    }, 200);

                }

            });

        });

    });


});