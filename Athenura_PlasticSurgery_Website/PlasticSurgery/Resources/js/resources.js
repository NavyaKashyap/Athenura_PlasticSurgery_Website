const resourcesContainer = document.getElementById("resources-container");

resources.forEach(resource => {

    const card = document.createElement("article");

    card.className = "resource-card";

    card.innerHTML = `
        <div class="card-image">

            <img
                src="${resource.image_card}"
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

    resourcesContainer.appendChild(card);
});



/* =================================
   FAQ ACCORDION
================================= */

document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            const isActive = item.classList.contains("active");


            /* Close all FAQ items */
            faqItems.forEach((faqItem) => {
                faqItem.classList.remove("active");
            });

 
            /* Open clicked item */
            if (!isActive) {
                item.classList.add("active");
            }

        });

    });

});