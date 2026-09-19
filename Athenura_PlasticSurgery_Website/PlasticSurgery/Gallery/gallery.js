document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       GALLERY DATA
    ========================================= */

    const galleryData = {

        face: [
            {
                id: 1,
                procedure: "facelift",
                title: "Facelift Surgery",
                description:
                    "Natural facial rejuvenation with youthful contours and balanced aesthetics.",
                beforeImage: "images/face/facelift/facelift-before.jpeg",
                afterImage: "images/face/facelift/facelift-after.png"
            },

            {
                id: 2,
                procedure: "rhinoplasty",
                title: "Rhinoplasty",
                description:
                    "Refined nasal contours designed to create balanced and harmonious facial proportions.",
                beforeImage: "images/face/rhinoplasty/rhinoplasty-before.jpeg",
                afterImage: "images/face/rhinoplasty/rhinoplasty-after.jpeg"
            },

            {
                id: 3,
                procedure: "lip-chin",
                title: "Lip & Chin Enhancement",
                description:
                    "Subtle facial enhancement designed to improve overall facial balance.",
                beforeImage: "images/face/lip_chin/lipaugmentation-before2.jpg",
                afterImage: "images/face/lip_chin/lipaugmentation-after2.jpg"
            },

            {
                id: 4,
                procedure: "blepharoplasty",
                title: "Blepharoplasty",
                description:
                    "Refreshed eye contours for a more rested and youthful appearance.",
                beforeImage: "images/face/blepharoplasty/blepharoplasty-before1.jpeg",
                afterImage: "images/face/blepharoplasty/blepharoplasty-after1.jpeg"
            },
            {
                id: 5,
                procedure: "facelift",
                title: "Facelift & Necklift Surgery",
                description:
                    "Comprehensive lower face and neck rejuvenation to smooth jowls and tighten sagging skin.",
                beforeImage: "images/face/facelift/facelift-before1.png",
                afterImage: "images/face/facelift/facelift-after1.png"
            },
            {
                id: 6,
                procedure: "facelift",
                title: "Facelift & Necklift Surgery",
                description:
                    "Comprehensive lower face and neck rejuvenation to smooth jowls and tighten sagging skin.",
                beforeImage: "images/face/facelift/facelift-before2.png",
                afterImage: "images/face/facelift/facelift-after2.png"
            },
            {
                id: 7,
                procedure: "facelift",
                title: "Facelift & Necklift Surgery",
                description:
                    "Face rejuvenation to smooth jowls, tighten sagging skin.",
                beforeImage: "images/face/facelift/facelift-before3.png",
                afterImage: "images/face/facelift/facelift-after3.png"
            },
            {
                id: 8,
                procedure: "facelift",
                title: "Facelift & Necklift Surgery",
                description:
                    "Tighten sagging skin, and restore a defined jawline.",
                beforeImage: "images/face/facelift/facelift-before4.png",
                afterImage: "images/face/facelift/facelift-after4.png"
            },
            {
                id: 9,
                procedure: "facelift",
                title: "Facelift & Necklift Surgery",
                description:
                    "Comprehensive lower face rejuvenation.",
                beforeImage: "images/face/facelift/facelift-before5.png",
                afterImage: "images/face/facelift/facelift-after5.png"
            },
            {
                id: 10,
                procedure: "facelift",
                title: "Facelift & Necklift Surgery",
                description:
                    "Comprehensive lower face rejuvenation.",
                beforeImage: "images/face/facelift/facelift-before6.png",
                afterImage: "images/face/facelift/facelift-after6.png"
            },
            {
                id: 11,
                procedure: "facelift",
                title: "Facelift & Necklift Surgery",
                description:
                    "Tighten sagging skin, and restore a defined jawline.",
                beforeImage: "images/face/facelift/facelift-before7.png",
                afterImage: "images/face/facelift/facelift-after7.png"
            },
            {
                id: 12,
                procedure: "rhinoplasty",
                title: "Rhinoplasty",
                description:
                    "Refined nasal contours designed to create balanced and harmonious facial proportions.",
                beforeImage: "images/face/rhinoplasty/rhinoplasty-before1.jpeg",
                afterImage: "images/face/rhinoplasty/rhinoplasty-after1.jpeg"
            },
            {
                id: 13,
                procedure: "rhinoplasty",
                title: "Rhinoplasty",
                description:
                    "Refined nasal contours designed to create balanced and harmonious facial proportions.",
                beforeImage: "images/face/rhinoplasty/rhinoplasty-before2.jpeg",
                afterImage: "images/face/rhinoplasty/rhinoplasty-after2.jpeg"
            },
            {
                id: 14,
                procedure: "rhinoplasty",
                title: "Rhinoplasty",
                description:
                    "Refined nasal contours designed to create balanced and harmonious facial proportions.",
                beforeImage: "images/face/rhinoplasty/rhinoplasty-before3.jpeg",
                afterImage: "images/face/rhinoplasty/rhinoplasty-after3.jpeg"
            },
            {
                id: 15,
                procedure: "rhinoplasty",
                title: "Rhinoplasty",
                description:
                    "Refined nasal contours designed to create balanced and harmonious facial proportions.",
                beforeImage: "images/face/rhinoplasty/rhinoplasty-before4.png",
                afterImage: "images/face/rhinoplasty/rhinoplasty-after4.png"
            },
            {
                id: 16,
                procedure: "rhinoplasty",
                title: "Rhinoplasty",
                description:
                    "Refined nasal contours designed to create balanced and harmonious facial proportions.",
                beforeImage: "images/face/rhinoplasty/rhinoplasty-before5.png",
                afterImage: "images/face/rhinoplasty/rhinoplasty-after5.png"
            },
            {
                id: 17,
                procedure: "rhinoplasty",
                title: "Rhinoplasty",
                description:
                    "Refined nasal contours designed to create balanced and harmonious facial proportions.",
                beforeImage: "images/face/rhinoplasty/rhinoplasty-before6.png",
                afterImage: "images/face/rhinoplasty/rhinoplasty-after6.png"
            },
            {
                id: 18,
                procedure: "rhinoplasty",
                title: "Rhinoplasty",
                description:
                    "Refined nasal contours designed to create balanced and harmonious facial proportions.",
                beforeImage: "images/face/rhinoplasty/rhinoplasty-before7.png",
                afterImage: "images/face/rhinoplasty/rhinoplasty-after7.png"
            },
            {
                id: 19,
                procedure: "blepharoplasty",
                title: "Blepharoplasty",
                description:
                    "Refreshed eye contours for a more rested and youthful appearance.",
                beforeImage: "images/face/blepharoplasty/blepharoplasty-before2.png",
                afterImage: "images/face/blepharoplasty/blepharoplasty-after2.png"
            },
            {
                id: 20,
                procedure: "blepharoplasty",
                title: "Blepharoplasty",
                description:
                    "Refreshed eye contours for a more rested and youthful appearance.",
                beforeImage: "images/face/blepharoplasty/blepharoplasty-before3.png",
                afterImage: "images/face/blepharoplasty/blepharoplasty-after3.png"
            },
            {
                id: 21,
                procedure: "blepharoplasty",
                title: "Blepharoplasty",
                description:
                    "Refreshed eye contours for a more rested and youthful appearance.",
                beforeImage: "images/face/blepharoplasty/blepharoplasty-before4.png",
                afterImage: "images/face/blepharoplasty/blepharoplasty-after4.png"
            },
            {
                id: 22,
                procedure: "blepharoplasty",
                title: "Blepharoplasty",
                description:
                    "Refreshed eye contours for a more rested and youthful appearance.",
                beforeImage: "images/face/blepharoplasty/blepharoplasty-before5.png",
                afterImage: "images/face/blepharoplasty/blepharoplasty-after5.png"
            },
            {
                id: 23,
                procedure: "blepharoplasty",
                title: "Blepharoplasty",
                description:
                    "Lower blephroplasty surgery.",
                beforeImage: "images/face/blepharoplasty/blepharoplasty-before6.png",
                afterImage: "images/face/blepharoplasty/blepharoplasty-after6.png"
            },
            {
                id: 24,
                procedure: "blepharoplasty",
                title: "Blepharoplasty",
                description:
                    "Fixed sagging upper eyelid",
                beforeImage: "images/face/blepharoplasty/blepharoplasty-before7.png",
                afterImage: "images/face/blepharoplasty/blepharoplasty-after7.png"
            },
            {
                id: 25,
                procedure: "lip-chin",
                title: "Lip Reduction",
                description:
                    "Reduced lip size and enhanced the shape.",
                beforeImage: "images/face/lip_chin/lip-before.png",
                afterImage: "images/face/lip_chin/lip-after.png"
            },
            {
                id: 26,
                procedure: "lip-chin",
                title: "Lip Augmentation",
                description:
                    "Used fillers for lip augmentation.",
                beforeImage: "images/face/lip_chin/lipaugmentation-before4.png",
                afterImage: "images/face/lip_chin/lipaugmentation-after4.png"
            }
            
        ],

        body: [
            {
                id: 1,
                procedure: "body-contouring",
                title: "Body Contouring",
                description:
                    "Improved body shape and definition through advanced contouring techniques.",
                beforeImage: "images/body/body_contouring/body-before1.jpeg",
                afterImage: "images/body/body_contouring/body-after1.jpeg"
            },

            {
                id: 2,
                procedure: "liposuction",
                title: "Liposuction",
                description:
                    "Targeted contouring to create smoother and more defined body proportions.",
                beforeImage: "images/body/lipo/liposuction-before.jpeg",
                afterImage: "images/body/lipo/liposuction-after.jpeg"
            },
            {
                id: 3,
                procedure: "liposuction",
                title: "Facial Liposuction",
                description:
                    "Targeted contouring to create smoother and more defined face shape.",
                beforeImage: "images/body/lipo/liposuction-before1.png",
                afterImage: "images/body/lipo/liposuction-after1.png"
            },
            {
                id: 4,
                procedure: "liposuction",
                title: "Liposuction",
                description:
                    "Targeted contouring to create smoother and more defined body proportions.",
                beforeImage: "images/body/lipo/liposuction-before2.png",
                afterImage: "images/body/lipo/liposuction-after2.png"
            },
            {
                id: 5,
                procedure: "liposuction",
                title: "Liposuction",
                description:
                    "Targeted contouring to create smoother and more defined body proportions.",
                beforeImage: "images/body/lipo/liposuction-before3.png",
                afterImage: "images/body/lipo/liposuction-after3.png"
            },
            {
                id: 6,
                procedure: "liposuction",
                title: "Liposuction",
                description:
                    "Targeted contouring to create smoother and more defined body proportions.",
                beforeImage: "images/body/lipo/liposuction-before4.png",
                afterImage: "images/body/lipo/liposuction-after4.png"
            },
            {
                id: 7,
                procedure: "liposuction",
                title: "Liposuction",
                description:
                    "Targeted contouring to create smoother and more defined body proportions.",
                beforeImage: "images/body/lipo/liposuction-before5.png",
                afterImage: "images/body/lipo/liposuction-after5.png"
            },
            {
                id: 8,
                procedure: "liposuction",
                title: "Liposuction",
                description:
                    "Targeted contouring to create smoother and more defined body proportions.",
                beforeImage: "images/body/lipo/liposuction-before6.png",
                afterImage: "images/body/lipo/liposuction-after6.png"
            },
            {
                id: 9,
                procedure: "body-contouring",
                title: "Body Contouring",
                description:
                    "Improved body shape and definition through advanced contouring techniques.",
                beforeImage: "images/body/body_contouring/body-before2.png",
                afterImage: "images/body/body_contouring/body-after2.png"
            },
            {
                id: 10,
                procedure: "body-contouring",
                title: "Body Contouring",
                description:
                    "Improved body shape and definition through advanced contouring techniques.",
                beforeImage: "images/body/body_contouring/body-before3.png",
                afterImage: "images/body/body_contouring/body-after3.png"
            },
            {
                id: 11,
                procedure: "body-contouring",
                title: "Body Contouring",
                description:
                    "Improved body shape and definition through advanced contouring techniques.",
                beforeImage: "images/body/body_contouring/body-before4breast/breast_aug/.png",
                afterImage: "images/body/body_contouring/body-after4breast/breast_aug/.png"
            },
        ],

        breast: [
            {
                id: 1,
                procedure: "breast-augmentation",
                title: "Breast Augmentation",
                description:
                    "Enhanced volume and symmetry with natural-looking proportions.",
                beforeImage: "images/breast/breast_aug/breast-before1.png",
                afterImage: "images/breast/breast_aug/breast-after1.png"
            },

            {
                id: 2,
                procedure: "breast-lift",
                title: "Breast Lift",
                description:
                    "Improved breast shape and position while maintaining natural proportions.",
                beforeImage: "images/breast/breast_lift/breastlift-before1.png",
                afterImage: "images/breast/breast_lift/breastlift-after1.png"
            },
            {
                id: 3,
                procedure: "breast-augmentation",
                title: "Breast Augmentation",
                description:
                    "Enhanced volume and symmetry with natural-looking proportions.",
                beforeImage: "images/breast/breast_aug/breast-before2.png",
                afterImage: "images/breast/breast_aug/breast-after2.png"
            },
            {
                id: 4,
                procedure: "breast-augmentation",
                title: "Breast Augmentation",
                description:
                    "Enhanced volume and symmetry with natural-looking proportions.",
                beforeImage: "images/breast/breast_aug/breast-before3.png",
                afterImage: "images/breast/breast_aug/breast-after3.png"
            },
            {
                id: 5,
                procedure: "breast-augmentation",
                title: "Breast Augmentation",
                description:
                    "Enhanced volume and symmetry with natural-looking proportions.",
                beforeImage: "images/breast/breast_aug/breast-before4.png",
                afterImage: "images/breast/breast_aug/breast-after4.png"
            },
            {
                id: 6,
                procedure: "breast-augmentation",
                title: "Breast Augmentation",
                description:
                    "Enhanced volume and symmetry with natural-looking proportions.",
                beforeImage: "images/breast/breast_aug/breast-before5.png",
                afterImage: "images/breast/breast_aug/breast-after5.png"
            },
            {
                id: 7,
                procedure: "breast-augmentation",
                title: "Breast Augmentation",
                description:
                    "Enhanced volume and symmetry with natural-looking proportions.",
                beforeImage: "images/breast/breast_aug/breast-before6.png",
                afterImage: "images/breast/breast_aug/breast-after6.png"
            },
            {
                id: 8,
                procedure: "breast-augmentation",
                title: "Breast Augmentation",
                description:
                    "Enhanced volume and symmetry with natural-looking proportions.",
                beforeImage: "images/breast/breast_aug/breast-before7.png",
                afterImage: "images/breast/breast_aug/breast-after7.png"
            },
            {
                id: 9,
                procedure: "breast-lift",
                title: "Breast Lift",
                description:
                    "Improved breast shape and position while maintaining natural proportions.",
                beforeImage: "images/breast/breast_lift/breastlift-before2.png",
                afterImage: "images/breast/breast_lift/breastlift-after2.png"
            },
            {
                id: 10,
                procedure: "breast-lift",
                title: "Breast Lift",
                description:
                    "Improved breast shape and position while maintaining natural proportions.",
                beforeImage: "images/breast/breast_lift/breastlift-before4.png",
                afterImage: "images/breast/breast_lift/breastlift-after4.png"
            },
            {
                id: 11,
                procedure: "breast-lift",
                title: "Breast Lift",
                description:
                    "Improved breast shape and position while maintaining natural proportions.",
                beforeImage: "images/breast/breast_lift/breastlift-before5.png",
                afterImage: "images/breast/breast_lift/breastlift-after5.png"
            },
            {
                id: 12,
                procedure: "breast-lift",
                title: "Breast Lift",
                description:
                    "Improved breast shape and position while maintaining natural proportions.",
                beforeImage: "images/breast/breast_lift/breastlift-before6.png",
                afterImage: "images/breast/breast_lift/breastlift-after6.png"
            },
        ],

        aesthetic: [
            {
                id: 1,
                procedure: "skin-rejuvenation",
                title: "Skin Rejuvenation",
                description:
                    "Brighter, smoother, and healthier-looking skin with advanced aesthetic treatments.",
                beforeImage: "images/aesthetic/skin_rejuvenation/skin-before.png",
                afterImage: "images/aesthetic/skin_rejuvenation/skin-after.png"
            },
            {
                id: 2,
                procedure: "skin-rejuvenation",
                title: "Skin Rejuvenation",
                description:
                    "Brighter, smoother, and healthier-looking skin with advanced aesthetic treatments.",
                beforeImage: "images/aesthetic/skin_rejuvenation/skin-before1.png",
                afterImage: "images/aesthetic/skin_rejuvenation/skin-after1.png"
            },
            {
                id: 3,
                procedure: "skin-rejuvenation",
                title: "Skin Rejuvenation",
                description:
                    "Brighter, smoother, and healthier-looking skin with advanced aesthetic treatments.",
                beforeImage: "images/aesthetic/skin_rejuvenation/skin-before2.png",
                afterImage: "images/aesthetic/skin_rejuvenation/skin-after2.png"
            },
            {
                id: 4,
                procedure: "skin-rejuvenation",
                title: "Skin Rejuvenation",
                description:
                    "Brighter, smoother, and healthier-looking skin with advanced aesthetic treatments.",
                beforeImage: "images/aesthetic/skin_rejuvenation/skin-before3.png",
                afterImage: "images/aesthetic/skin_rejuvenation/skin-after3.png"
            },
            {
                id: 5,
                procedure: "skin-rejuvenation",
                title: "Skin Rejuvenation",
                description:
                    "Brighter, smoother, and healthier-looking skin with advanced aesthetic treatments.",
                beforeImage: "images/aesthetic/skin_rejuvenation/skin-before4.png",
                afterImage: "images/aesthetic/skin_rejuvenation/skin-after4.png"
            },
            {
                id: 6,
                procedure: "skin-rejuvenation",
                title: "Skin Rejuvenation",
                description:
                    "Brighter, smoother, and healthier-looking skin with advanced aesthetic treatments.",
                beforeImage: "images/aesthetic/skin_rejuvenation/skin-before5.png",
                afterImage: "images/aesthetic/skin_rejuvenation/skin-after5.png"
            },
            {
                id: 7,
                procedure: "skin-rejuvenation",
                title: "Skin Rejuvenation",
                description:
                    "Brighter, smoother, and healthier-looking skin with advanced aesthetic treatments.",
                beforeImage: "images/aesthetic/skin_rejuvenation/skin-before6.png",
                afterImage: "images/aesthetic/skin_rejuvenation/skin-after6.png"
            }
        ]
    };


    /* =========================================
       ELEMENTS
    ========================================= */

    const galleryGrid = document.getElementById("gallery-grid");
    const subFilters = document.getElementById("sub-filters");
    const loadMoreBtn = document.getElementById("load-more-btn");

    const filterButtons = document.querySelectorAll(".filter-btn");


    /* =========================================
       SETTINGS
    ========================================= */

    const cardsPerLoad = 6;

    let currentFilter = "all";
    let currentSubFilter = "all";
    let visibleCount = cardsPerLoad;


    /* =========================================
       SUBFILTER DATA
    ========================================= */

    const subFilterData = {

        face: [
            {
                value: "all",
                label: "All Face Cases"
            },
            {
                value: "facelift",
                label: "Facelift"
            },
            {
                value: "rhinoplasty",
                label: "Rhinoplasty"
            },
            {
                value: "lip-chin",
                label: "Lip & Chin"
            },
            {
                value: "blepharoplasty",
                label: "Blepharoplasty"
            }
        ],

        body: [
            {
                value: "all",
                label: "All Body Cases"
            },
            {
                value: "body-contouring",
                label: "Body Contouring"
            },
            {
                value: "liposuction",
                label: "Liposuction"
            }
        ],

        breast: [
            {
                value: "all",
                label: "All Breast Cases"
            },
            {
                value: "breast-augmentation",
                label: "Breast Augmentation"
            },
            {
                value: "breast-lift",
                label: "Breast Lift"
            }
        ],

        aesthetic: [
            {
                value: "all",
                label: "All Aesthetic Cases"
            },
            {
                value: "skin-rejuvenation",
                label: "Skin Rejuvenation"
            }
        ]
    };


    /* =========================================
       GET ALL GALLERY ITEMS
    ========================================= */

    function getAllItems() {

        return Object.values(galleryData).flat();

    }


    /* =========================================
       GET FILTERED ITEMS
    ========================================= */

    function getFilteredItems() {

        let items;

        if (currentFilter === "all") {

            items = getAllItems();

        } else {

            items = galleryData[currentFilter] || [];

        }


        if (
            currentSubFilter !== "all" &&
            currentFilter !== "all"
        ) {

            items = items.filter(
                item => item.procedure === currentSubFilter
            );

        }


        return items;
    }


    /* =========================================
       CREATE CARD
    ========================================= */

    function createCard(item, category) {

        const card = document.createElement("div");

        card.className = `compare-card ${category}`;

        card.dataset.id = item.id;
        card.dataset.procedure = item.procedure;


        card.innerHTML = `

            <div class="compare-wrapper">

                <img
                    src="${item.beforeImage}"
                    alt="${item.title} - Before"
                    class="before"
                >

                <img
                    src="${item.afterImage}"
                    alt="${item.title} - After"
                    class="after"
                >

                <span class="label before">
                    Before
                </span>

                <span class="label after">
                    After
                </span>

                <div class="divider">
                    <div class="handle">
                        &#10094;&#10095;
                    </div>
                </div>

            </div>

            <div class="compare-info">

                <h3>${item.title}</h3>

                <p>
                    ${item.description}
                </p>

                <button
                    class="view-case-btn"
                    data-category="${category}"
                    data-id="${item.id}"
                >
                    View Case
                    <span>→</span>
                </button>

            </div>

        `;


        return card;
    }


    /* =========================================
       RENDER GALLERY
    ========================================= */

    function renderGallery() {

        const filteredItems = getFilteredItems();

        galleryGrid.innerHTML = "";


        const itemsToShow = filteredItems.slice(
            0,
            visibleCount
        );


        itemsToShow.forEach(item => {

            let category = currentFilter;

            if (currentFilter === "all") {

                category = Object.keys(galleryData).find(
                    key =>
                        galleryData[key].some(
                            galleryItem =>
                                galleryItem.id === item.id &&
                                galleryItem.title === item.title
                        )
                );

            }


            const card = createCard(item, category);

            galleryGrid.appendChild(card);

        });


        updateLoadMoreButton(
            filteredItems.length
        );


        initializeSliders();

    }


    /* =========================================
       LOAD MORE BUTTON
    ========================================= */

    function updateLoadMoreButton(totalItems) {

        if (!loadMoreBtn) return;


        if (visibleCount >= totalItems) {

            loadMoreBtn.style.display = "none";

        } else {

            loadMoreBtn.style.display = "inline-flex";

        }

    }


    if (loadMoreBtn) {

        loadMoreBtn.addEventListener("click", () => {

            visibleCount += cardsPerLoad;

            renderGallery();

        });

    }


    /* =========================================
       MAIN FILTERS
    ========================================= */

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");


            currentFilter =
                button.dataset.filter;

            currentSubFilter = "all";

            visibleCount = cardsPerLoad;


            renderSubFilters();

            renderGallery();

        });

    });


    /* =========================================
       RENDER SUBFILTERS
    ========================================= */

    function renderSubFilters() {

        subFilters.innerHTML = "";


        if (
            currentFilter === "all" ||
            !subFilterData[currentFilter]
        ) {

            subFilters.classList.remove("show");

            return;

        }


        subFilters.classList.add("show");


        subFilterData[currentFilter].forEach(
            (filter, index) => {

                const button =
                    document.createElement("button");

                button.className =
                    "sub-filter-btn";


                if (index === 0) {

                    button.classList.add("active");

                }


                button.dataset.filter =
                    filter.value;

                button.textContent =
                    filter.label;


                button.addEventListener(
                    "click",
                    () => {

                        document
                            .querySelectorAll(
                                ".sub-filter-btn"
                            )
                            .forEach(btn =>
                                btn.classList.remove(
                                    "active"
                                )
                            );


                        button.classList.add("active");


                        currentSubFilter =
                            filter.value;

                        visibleCount =
                            cardsPerLoad;


                        renderGallery();

                    }
                );


                subFilters.appendChild(button);

            }
        );

    }


    /* =========================================
       BEFORE / AFTER SLIDER
    ========================================= */

    function initializeSliders() {

        const wrappers =
            document.querySelectorAll(
                ".compare-wrapper"
            );


        wrappers.forEach(wrapper => {

            const after =
                wrapper.querySelector(".after");

            const divider =
                wrapper.querySelector(".divider");


            if (!after || !divider) return;


            let isDragging = false;


            function updateSlider(x) {

                const rect =
                    wrapper.getBoundingClientRect();


                let position =
                    x - rect.left;


                position =
                    Math.max(
                        0,
                        Math.min(
                            position,
                            rect.width
                        )
                    );


                const percentage =
                    (position / rect.width) * 100;


                divider.style.left =
                    `${percentage}%`;


                after.style.clipPath =
                    `inset(
                        0 0 0 ${percentage}%
                    )`;

            }


            wrapper.addEventListener(
                "pointerdown",
                event => {

                    isDragging = true;

                    wrapper.setPointerCapture(
                        event.pointerId
                    );

                    updateSlider(
                        event.clientX
                    );

                }
            );


            wrapper.addEventListener(
                "pointermove",
                event => {

                    if (!isDragging) return;

                    updateSlider(
                        event.clientX
                    );

                }
            );


            wrapper.addEventListener(
                "pointerup",
                () => {

                    isDragging = false;

                }
            );


            wrapper.addEventListener(
                "pointercancel",
                () => {

                    isDragging = false;

                }
            );

        });

    }


    /* =========================================
       VIEW CASE
    ========================================= */

    galleryGrid.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    ".view-case-btn"
                );


            if (!button) return;


            const category =
                button.dataset.category;

            const id =
                Number(button.dataset.id);


            const item =
                galleryData[category]?.find(
                    galleryItem =>
                        galleryItem.id === id
                );


            if (!item) return;


            openCaseModal(item, category);

        }
    );


    /* =========================================
       CASE MODAL
    ========================================= */

    function openCaseModal(item, category) {

        const modal =
            document.createElement("div");

        modal.className =
            "case-modal";


        modal.innerHTML = `

            <div class="case-modal-overlay"></div>

            <div class="case-modal-content">

                <button
                    class="case-modal-close"
                    aria-label="Close"
                >
                    <i class="fa-solid fa-xmark"></i>
                </button>

                <div class="case-modal-images">

                    <div class="modal-image">
                        <img
                            src="${item.beforeImage}"
                            alt="${item.title} - Before"
                        >
                        <span>Before</span>
                    </div>

                    <div class="modal-image">
                        <img
                            src="${item.afterImage}"
                            alt="${item.title} - After"
                        >
                        <span>After</span>
                    </div>

                </div>

                <div class="case-modal-details">

                    <span class="case-modal-category">
                        ${category}
                    </span>

                    <h2>${item.title}</h2>

                    <p>
                        ${item.description}
                    </p>

                </div>

            </div>

        `;


        document.body.appendChild(modal);


        requestAnimationFrame(() => {

            modal.classList.add("active");

        });


        const closeModal = () => {

            modal.classList.remove("active");

            setTimeout(() => {

                modal.remove();

            }, 300);

        };


        modal
            .querySelector(".case-modal-close")
            .addEventListener(
                "click",
                closeModal
            );


        modal
            .querySelector(".case-modal-overlay")
            .addEventListener(
                "click",
                closeModal
            );


        document.addEventListener(
            "keydown",
            function escapeHandler(event) {

                if (event.key === "Escape") {

                    closeModal();

                    document.removeEventListener(
                        "keydown",
                        escapeHandler
                    );

                }

            }
        );

    }


    /* =========================================
       INITIAL LOAD
    ========================================= */

    renderSubFilters();

    renderGallery();

});