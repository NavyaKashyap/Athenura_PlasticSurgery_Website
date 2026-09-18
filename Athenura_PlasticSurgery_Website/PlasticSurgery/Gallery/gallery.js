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
                beforeImage: "images/facelift-before.jpeg",
                afterImage: "images/facelift-after.png"
            },

            {
                id: 2,
                procedure: "rhinoplasty",
                title: "Rhinoplasty",
                description:
                    "Refined nasal contours designed to create balanced and harmonious facial proportions.",
                beforeImage: "images/rhinoplasty-before.jpeg",
                afterImage: "images/rhinoplasty-after.jpeg"
            },

            {
                id: 3,
                procedure: "lip-chin",
                title: "Lip & Chin Enhancement",
                description:
                    "Subtle facial enhancement designed to improve overall facial balance.",
                beforeImage: "images/lipaugmentation-before2.jpg",
                afterImage: "images/lipaugmentation-after2.jpg"
            },

            {
                id: 4,
                procedure: "blepharoplasty",
                title: "Blepharoplasty",
                description:
                    "Refreshed eye contours for a more rested and youthful appearance.",
                beforeImage: "images/blepharoplasty-before1.jpeg",
                afterImage: "images/blepharoplasty-after1.jpeg"
            },
            {
                id: 5,
                procedure: "facelift",
                title: "Facelift & Necklift Surgery",
                description:
                    "Comprehensive lower face and neck rejuvenation to smooth jowls, tighten sagging skin, and restore a defined jawline.",
                beforeImage: "images/facelift-before1.png",
                afterImage: "images/facelift-after1.png"
            },
            {
                id: 6,
                procedure: "facelift",
                title: "Facelift & Necklift Surgery",
                description:
                    "Comprehensive lower face and neck rejuvenation to smooth jowls, tighten sagging skin, and restore a defined jawline.",
                beforeImage: "images/facelift-before2.png",
                afterImage: "images/facelift-after2.png"
            },
            {
                id: 7,
                procedure: "facelift",
                title: "Facelift & Necklift Surgery",
                description:
                    "Face rejuvenation to smooth jowls, tighten sagging skin.",
                beforeImage: "images/facelift-before3.png",
                afterImage: "images/facelift-after3.png"
            },
            {
                id: 8,
                procedure: "facelift",
                title: "Facelift & Necklift Surgery",
                description:
                    "Tighten sagging skin, and restore a defined jawline.",
                beforeImage: "images/facelift-before4.png",
                afterImage: "images/facelift-after4.png"
            },
            {
                id: 9,
                procedure: "facelift",
                title: "Facelift & Necklift Surgery",
                description:
                    "Comprehensive lower face rejuvenation.",
                beforeImage: "images/facelift-before5.png",
                afterImage: "images/facelift-after5.png"
            }
        ],

        body: [
            {
                id: 1,
                procedure: "body-contouring",
                title: "Body Contouring",
                description:
                    "Improved body shape and definition through advanced contouring techniques.",
                beforeImage: "images/body-before1.jpeg",
                afterImage: "images/body-after1.jpeg"
            },

            {
                id: 2,
                procedure: "liposuction",
                title: "Liposuction",
                description:
                    "Targeted contouring to create smoother and more defined body proportions.",
                beforeImage: "images/liposuction-before.jpeg",
                afterImage: "images/liposuction-after.jpeg"
            }
        ],

        breast: [
            {
                id: 1,
                procedure: "breast-augmentation",
                title: "Breast Augmentation",
                description:
                    "Enhanced volume and symmetry with natural-looking proportions.",
                beforeImage: "images/breast-before1.png",
                afterImage: "images/breast-after1.png"
            },

            {
                id: 2,
                procedure: "breast-lift",
                title: "Breast Lift",
                description:
                    "Improved breast shape and position while maintaining natural proportions.",
                beforeImage: "images/breastlift-before1.png",
                afterImage: "images/breastlift-after1.png"
            },
            {
                id: 3,
                procedure: "breast-augmentation",
                title: "Breast Augmentation",
                description:
                    "Enhanced volume and symmetry with natural-looking proportions.",
                beforeImage: "images/breast-before2.png",
                afterImage: "images/breast-after2.png"
            },
            {
                id: 4,
                procedure: "breast-augmentation",
                title: "Breast Augmentation",
                description:
                    "Enhanced volume and symmetry with natural-looking proportions.",
                beforeImage: "images/breast-before3.png",
                afterImage: "images/breast-after3.png"
            },
            {
                id: 5,
                procedure: "breast-augmentation",
                title: "Breast Augmentation",
                description:
                    "Enhanced volume and symmetry with natural-looking proportions.",
                beforeImage: "images/breast-before4.png",
                afterImage: "images/breast-after4.png"
            },
            {
                id: 6,
                procedure: "breast-augmentation",
                title: "Breast Augmentation",
                description:
                    "Enhanced volume and symmetry with natural-looking proportions.",
                beforeImage: "images/breast-before5.png",
                afterImage: "images/breast-after5.png"
            },
            {
                id: 7,
                procedure: "breast-augmentation",
                title: "Breast Augmentation",
                description:
                    "Enhanced volume and symmetry with natural-looking proportions.",
                beforeImage: "images/breast-before6.png",
                afterImage: "images/breast-after6.png"
            }
        ],

        aesthetic: [
            {
                id: 1,
                procedure: "skin-rejuvenation",
                title: "Skin Rejuvenation",
                description:
                    "Brighter, smoother, and healthier-looking skin with advanced aesthetic treatments.",
                beforeImage: "images/skin-before.png",
                afterImage: "images/skin-after.png"
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