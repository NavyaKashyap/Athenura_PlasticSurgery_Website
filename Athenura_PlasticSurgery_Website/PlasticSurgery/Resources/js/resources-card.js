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