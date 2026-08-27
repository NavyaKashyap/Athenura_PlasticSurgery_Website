const urlParams = new URLSearchParams(window.location.search);

const resourceId = Number(urlParams.get("id"));

console.log("Selected resource ID:", resourceId);

const selectedResource = resources.find(function (resource) {
    return resource.id === resourceId;
});

console.log(selectedResource);


const categoryElement = document.getElementById("article-category");
const dateElement = document.getElementById("article-date");
const titleElement = document.getElementById("article-title");
const descriptionElement = document.getElementById("article-description");
const articleHero = document.querySelector(".article-hero");


categoryElement.textContent = selectedResource.category;
dateElement.textContent = selectedResource.date;
titleElement.textContent = selectedResource.title;
descriptionElement.textContent = selectedResource.description;
articleHero.style.backgroundImage = `url("${selectedResource.image}")`;

// Hero of article



// ==============================
// Dynamic Article Content
// ==============================

const articleContentContainer = document.getElementById(
    "article-content-container"
);

const selectedArticle = articleContents[resourceId];


// ==============================
// Dynamic Article Sidebar
// ==============================

const articleNav = document.getElementById("article-nav");


function createArticleNavigation() {

    const sectionNames = Object.keys(selectedArticle).filter(function (sectionName) {

        return selectedArticle[sectionName].content;

    });


    sectionNames.forEach(function (sectionName, index) {

        const section = selectedArticle[sectionName];

        const button = document.createElement("button");

        button.className = "article-nav-item";

        button.dataset.section = sectionName;

        button.textContent = section.title;


        // Make first button active
        if (index === 0) {

            button.classList.add("active");

        }


        // Button click
        button.addEventListener("click", function () {

            const selectedSection = button.dataset.section;


            // Remove active from all buttons
            document
                .querySelectorAll(".article-nav-item")
                .forEach(function (navItem) {

                    navItem.classList.remove("active");

                });


            // Make clicked button active
            button.classList.add("active");


            // Show selected article section
            showArticleSection(selectedSection);

        });


        articleNav.appendChild(button);

    });

}


// ==============================
// Show Article Section
// ==============================

function showArticleSection(sectionName) {

    const section = selectedArticle[sectionName];

    articleContentContainer.innerHTML = `

        <div class="article-panel active" data-content="${sectionName}">

            <h2>
                ${section.title}
            </h2>

            ${section.content}

        </div>

    `;

}


// ==============================
// Initialize Article
// ==============================

if (selectedArticle) {

    createArticleNavigation();

    showArticleSection(
        Object.keys(selectedArticle).find(function (sectionName) {

            return selectedArticle[sectionName].content;

        })
    );

}


// ==============================
// Dynamic Key Takeaways
// ==============================

const keyTakeawaysContainer = document.getElementById(
    "key-takeaways-container"
);


function showKeyTakeaways() {

    const takeaways = selectedArticle.takeaways;

    document.getElementById("takeaways-title").textContent =
        takeaways.title;

    document.getElementById("takeaways-description").textContent =
        takeaways.description;


    keyTakeawaysContainer.innerHTML = `

        <div class="takeaways-grid">

            ${takeaways.cards.map(function (card) {

                return `
                    <div class="takeaway-card">

                        <span class="takeaway-number">
                            ${card.number}
                        </span>

                        <h3>
                            ${card.title}
                        </h3>

                        <p>
                            ${card.description}
                        </p>

                    </div>
                `;

            }).join("")}

        </div>


        <div class="takeaway-note">

            <div class="note-label">
                ${takeaways.note.label}
            </div>

            <div class="note-content">

                <h3>
                    ${takeaways.note.title}
                </h3>

                <p>
                    ${takeaways.note.description}
                </p>

            </div>

        </div>
    `;
}


if (selectedArticle) {
    showKeyTakeaways();
}


// ==============================
// Dynamic Specialist Note
// ==============================

const specialistNoteContainer = document.getElementById(
    "specialist-note-container"
);


function showSpecialistNote() {

    const note = selectedArticle.specialistNote;

    specialistNoteContainer.innerHTML = `

        <div class="specialist-note-content">

            <h2>
                ${note.title}
            </h2>

            ${note.paragraphs.map(function (paragraph) {

                return `
                    <p>
                        ${paragraph}
                    </p>
                `;

            }).join("")}


            <div class="specialist-note-reminder">

                <strong>
                    ${note.reminder.label}
                </strong>

                <span>
                    ${note.reminder.text}
                </span>

            </div>

        </div>
    `;
}


if (selectedArticle) {
    showSpecialistNote();
}



// Related Resources

const relatedContainer = document.getElementById("related-resources-container");


const relatedResources = resources
    .filter(function (resource) {
        return resource.id !== selectedResource.id;
    })
    .sort(function (a, b) {

        const aSameCategory = a.category === selectedResource.category;
        const bSameCategory = b.category === selectedResource.category;

        return bSameCategory - aSameCategory;
    })
    .slice(0, 3);


relatedResources.forEach(function (resource) {

    const card = document.createElement("article");

    card.className = "resource-card";

    card.innerHTML = `
        <div class="card-image">

            <img
                src="${resource.image}"
                alt="${resource.title}"
            >

            <span class="card-category">
                ${resource.category}
            </span>

        </div>

        <div class="card-content">

            <span class="card-date">
                ${resource.date}
            </span>

            <h3>
                ${resource.title}
            </h3>

            <p>
                ${resource.description}
            </p>

            <a
                href="article.html?id=${resource.id}"
                class="read-more"
            >
                Read Article
                <span>→</span>
            </a>

        </div>
    `;

    relatedContainer.appendChild(card);
});