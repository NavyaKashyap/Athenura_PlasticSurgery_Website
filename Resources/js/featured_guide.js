document.addEventListener("DOMContentLoaded", function () {

    const mythText = document.getElementById("myth-text");

    if (!mythText) return;


    const myths = [

        "Plastic surgery can give you a celebrity's face?",

        "Plastic surgery is only for vanity?",

        "Only for celebrities or wealthy people?",

        "Plastic surgery results never look natural?",

        "And many more..."

    ];


    // Show the FIRST myth immediately
    mythText.textContent = myths[0];


    // Start from the SECOND myth
    let currentMyth = 1;


    function changeMyth() {

        // Current myth moves UP and fades out
        mythText.classList.add("myth-out");


        setTimeout(function () {

            // Change text
            mythText.textContent = myths[currentMyth];


            // Move to next myth
            currentMyth++;


            // Start new myth BELOW the normal position
            mythText.classList.remove("myth-out");
            mythText.classList.add("myth-in");


            // Force browser to recognize the starting position
            requestAnimationFrame(function () {

                requestAnimationFrame(function () {

                    // New myth moves UP into position
                    mythText.classList.remove("myth-in");

                });

            });

            // // Move to next myth
            // currentMyth++;

            // Restart cycle after last myth
            if (currentMyth >= myths.length) {

                currentMyth = 0;

            }

        }, 600);

    }


    // Change myth every 1 seconds
    setInterval(changeMyth, 1800);

});


document.addEventListener("DOMContentLoaded", function () {


    // =================================
    // MYTH DATA
    // =================================

    const myths = [

        {
            number: "MYTH 01",

            title:
                "Plastic surgery can give you a celebrity's face?",

            image:
                "images/articles/myth1.jpeg",

            truthTitle:
                "Plastic surgery is not about becoming someone else.",

            truth: [

                "Plastic surgery cannot simply give you a celebrity's face or turn you into a completely different person. Your bone structure, facial proportions, skin quality and natural features are unique to you.",

                "A skilled plastic surgeon works with your existing anatomy. The aim is usually to improve or refine a particular feature while keeping the result balanced with the rest of your face or body.",

                "Good results should still look like you. The goal is not to copy another person's appearance, but to achieve a result that suits your own features and your personal goals."

            ],

            note:
                "Good plastic surgery enhances your natural features rather than replacing who you are."
        },


        {
            number: "MYTH 02",

            title:
                "Plastic surgery is only for vanity?",

            image:
                "images/articles/myth2.jpeg",

            truthTitle:
                "Plastic surgery can have functional and reconstructive purposes too.",

            truth: [

                "Plastic surgery is not limited to changing someone's appearance. Some procedures can also address physical problems that affect everyday life.",

                "For example, blepharoplasty may sometimes improve vision when excess eyelid skin interferes with the visual field. Rhinoplasty can also be performed to address functional problems with the nose, such as breathing difficulties related to nasal structure or a deviated septum.",

                "Reconstructive plastic surgery can also help patients who have experienced cancer, injuries, burns or congenital conditions. In these situations, surgery can be about restoring function and rebuilding affected areas—not simply changing appearance."

            ],

            note:
                "Plastic surgery can involve appearance, function, reconstruction, or a combination of these goals."
        },


        {
            number: "MYTH 03",

            title:
                "Only for celebrities or wealthy people?",

            image:
                "images/articles/myth3.jpeg",

            truthTitle:
                "People from many different backgrounds consider plastic surgery.",

            truth: [

                "Plastic surgery is not something that is limited to celebrities. People consider procedures for many different personal, functional and reconstructive reasons.",

                "The procedures people choose also vary widely. Some may seek treatment for a concern that has affected their confidence for years, while others may need reconstructive surgery after an injury or medical condition.",

                "The important question is not whether someone is famous or wealthy. It is whether a particular procedure is appropriate for that person's goals, health, anatomy and circumstances."

            ],

            note:
                "Every patient's reason for considering surgery is personal and different."
        },


        {
            number: "MYTH 04",

            title:
                "Plastic surgery is only for women?",

            image:
                "images/articles/myth4.jpeg",

            truthTitle:
                "Men also undergo plastic and aesthetic procedures.",

            truth: [

                "Plastic surgery is not limited to women. Men also consider both surgical and non-surgical procedures for a variety of reasons.",

                "For example, some men undergo treatment for gynecomastia, a condition involving enlarged breast tissue. Others may consider procedures such as abdominal liposuction, rhinoplasty or hair transplantation.",

                "Just like with women, the decision depends on the individual's goals, anatomy and medical situation rather than gender."

            ],

            note:
                "Plastic surgery is about the individual patient's needs—not a particular gender."
        },


        {
            number: "MYTH 05",

            title:
                "Plastic surgery results never look natural?",

            image:
                "images/articles/myth5.jpeg",

            truthTitle:
                "Well-planned results can look natural and balanced.",

            truth: [

                "The idea that every plastic surgery result looks obvious or artificial is a misconception. A major goal of good aesthetic surgery is often to create a balanced result that fits the person's natural features.",

                "A surgeon considers factors such as facial proportions, skin quality, anatomy and the patient's desired outcome when planning treatment.",

                "Of course, results can vary from person to person. A natural-looking result depends on appropriate treatment planning, surgical technique, healing and realistic expectations."

            ],

            note:
                "Natural-looking results depend on good planning, appropriate technique and realistic expectations."
        },


        {
            number: "MYTH 06",

            title:
                "Recovery is always painful and lengthy?",

            image:
                "images/articles/myth6.jpeg",

            truthTitle:
                "Recovery depends on the procedure and the individual.",

            truth: [

                "There is no single recovery experience for every plastic surgery procedure. Recovery depends on the type and extent of surgery, the individual's health and how their body heals.",

                "Some procedures may involve a relatively shorter recovery period, while more extensive operations can require more time. Swelling, bruising, tenderness or temporary limitations can also occur during healing.",

                "Following the surgeon's aftercare instructions, attending follow-up appointments and allowing your body enough time to heal are important parts of recovery."

            ],

            note:
                "Recovery is different for everyone, so your surgeon should explain what to expect for your specific procedure."
        },


        {
            number: "MYTH 07",

            title:
                "Results are immediate and permanent?",

            image:
                "images/articles/myth7.jpeg",

            truthTitle:
                "Results usually develop over time and are not always permanent.",

            truth: [

                "Many surgical results are not visible in their final form immediately after treatment. Swelling, bruising and other temporary changes can make the early result look different from the eventual outcome.",

                "The body also continues to age and change after surgery. This means that even a successful procedure cannot stop the natural aging process or completely prevent future changes.",

                "For example, after liposuction, maintaining healthy habits is still important. Remaining fat cells can enlarge, and the body can continue to change over time."

            ],

            note:
                "Good results can last a long time, but no procedure can permanently stop natural changes in the body."
        },


        {
            number: "MYTH 08",

            title:
                "Liposuction is a weight loss procedure?",

            image:
                "images/articles/myth8.jpeg",

            truthTitle:
                "Liposuction is primarily a body-contouring procedure.",

            truth: [

                "Liposuction is designed to remove localized deposits of fat that can be difficult to reduce through lifestyle changes alone. It is generally used to improve body contour rather than as a general weight-loss treatment.",

                "For example, it may be used to contour areas such as the abdomen, thighs or other specific areas where stubborn fat is present.",

                "It is also important to understand that liposuction does not prevent future weight gain. Maintaining a stable, healthy lifestyle can help preserve the contour achieved through treatment."

            ],

            note:
                "Liposuction shapes specific areas of the body; it is not a substitute for overall weight management."
        },

        {
            number: "MYTH 09",
            title: "Plastic surgery leaves absolutely no scars?",
            image: "images/articles/myth9.jpeg",
            truthTitle: "Any surgical incision results in some degree of scarring.",
            truth: [
                "Wherever skin is incised during a procedure, natural healing processes mean some level of scarring will occur.",
                "However, skilled plastic surgeons strategically place these incisions within natural skin folds, creases, or hidden areas so they remain inconspicuous and largely unnoticeable.",
                "Over time, mature scars also tend to fade significantly, blending smoothly with the surrounding skin tone."
            ],
            note: "Expert placement and careful post-care ensure scars stay hidden, even if complete elimination is biologically impossible."
        },


        {
            number: "MYTH 10",

            title:
                "Minimally invasive surgery is always the best option?",

            image:
                "images/articles/myth10.jpeg",

            truthTitle:
                "The best approach depends on the patient's specific needs.",

            truth: [

                "Minimally invasive procedures can have advantages. Smaller incisions may mean smaller scars, potentially faster recovery and, depending on the procedure, fewer complications.",

                "However, a smaller procedure is not automatically better for every patient. If someone needs significant contouring, removal of loose skin or changes to deeper structures, a more extensive surgical approach may be more appropriate.",

                "The right choice depends on factors such as the patient's anatomy, health history, goals and the amount of correction required."

            ],

            note:
                "The safest and most effective approach is the one that matches the patient's individual needs."
        },


        {
            number: "MYTH 11",

            title:
                "Plastic surgery is too risky?",

            image:
                "images/articles/myth11.jpeg",

            truthTitle:
                "Every surgery has risks, but proper evaluation helps manage them.",

            truth: [

                "Plastic surgery, like any surgical procedure, has potential risks. However, saying that all plastic surgery is simply 'too risky' does not tell the whole story.",

                "A qualified plastic surgeon evaluates the patient's health, medical history, anatomy and goals before recommending a procedure. This assessment helps determine whether surgery is appropriate and which approach may be safest.",

                "Patients should also understand the possible risks, benefits, alternatives and recovery requirements before making a decision. A responsible surgeon should be willing to discuss these openly."

            ],

            note:
                "A proper consultation is an important part of understanding whether a procedure is suitable and what risks may be involved."
        },

        {
            number: "MYTH 12",
            title: "All cosmetic surgeons are plastic surgeons?",
            image: "images/articles/myth12.jpeg",
            truthTitle: "There is a vital distinction between cosmetic doctors and board-certified plastic surgeons.",
            truth: [
                "While any licensed medical doctor can legally perform cosmetic procedures, not all possess specialized, accredited training in plastic and reconstructive surgery.",
                "Board-certified plastic surgeons complete rigorous, multi-year surgical residencies specifically focused on aesthetic and reconstructive techniques, patient safety, and complex tissue management.",
                "Checking your surgeon's formal board certifications ensures they have the highest level of specialized clinical expertise."
            ],
            note: "Credentials matter: always verify that your practitioner is specifically board-certified in plastic surgery."
        }

    ];


    // =================================
    // ELEMENTS
    // =================================

    const mythsGrid =
        document.getElementById("myths-grid");

    const overlay =
        document.getElementById("myth-overlay");

    const modal =
        document.getElementById("myth-modal");

    const closeButton =
        document.getElementById("myth-close");

    const modalImage =
        document.getElementById("modal-myth-image");

    const modalNumber =
        document.getElementById("modal-myth-number");

    const modalTitle =
        document.getElementById("modal-myth-title");

    const modalTruthTitle =
        document.getElementById("modal-truth-title");

    const modalTruthContent =
        document.getElementById("modal-truth-content");

    const modalTruthNote =
        document.getElementById("modal-truth-note");


    // =================================
    // CREATE CARDS
    // =================================

    myths.forEach(function (myth, index) {

        const card =
            document.createElement("article");

        card.className = "myth-card";

        card.innerHTML = `

            <img
                src="${myth.image}"
                alt="${myth.title}"
            >

            <div class="myth-card-content">

                <span class="myth-number">
                    ${myth.number}
                </span>

                <h3>
                    ${myth.title}
                </h3>

            </div>

        `;


        // =================================
        // CARD CLICK
        // =================================

        card.addEventListener("click", function () {

            openMyth(index);

        });


        mythsGrid.appendChild(card);

    });


    // =================================
    // OPEN MYTH
    // =================================

    function openMyth(index) {

        const myth = myths[index];


        modalImage.src = myth.image;

        modalImage.alt = myth.title;

        modalNumber.textContent =
            myth.number;

        modalTitle.textContent =
            myth.title;

        modalTruthTitle.textContent =
            myth.truthTitle;


        modalTruthContent.innerHTML = "";


        myth.truth.forEach(function (paragraph) {

            const p =
                document.createElement("p");

            p.textContent = paragraph;

            modalTruthContent.appendChild(p);

        });


        modalTruthNote.textContent = myth.note;

        overlay.classList.add("active");

        document.body.style.overflow = "hidden";


    }


    // =================================
    // CLOSE MYTH
    // =================================

    function closeMyth() {

        overlay.classList.remove("active");

        document.body.style.overflow = "";

    }


    closeButton.addEventListener(
        "click",
        closeMyth
    );


    // =================================
    // CLICK OUTSIDE MODAL
    // =================================

    // overlay.addEventListener(
    //     "click",
    //     function (event) {

    //         if (event.target === overlay) {

    //             closeMyth();

    //         }

    //     }
    // );


    // =================================
    // ESCAPE KEY
    // =================================

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                overlay.classList.contains("active")
            ) {

                closeMyth();

            }

        }
    );

});