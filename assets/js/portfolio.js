

const typeClassMap = {
  data: "filter-data",
  development: "filter-dev",
  design: "filter-web"
};

console.log("portfolio.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("portfolio-container");
  if (!container || typeof projects === "undefined") return;

  // 1️⃣ Render projects
  Object.entries(projects).forEach(([id, project]) => {
    const item = document.createElement("div");

    // 🔒 IMPORTANT: type must already be like "filter-data"
    item.className = `
      col-lg-6 col-md-6
      portfolio-item
      isotope-item
      // ${project.type}
      ${typeClassMap[project.type] || ""}

    `;

    item.innerHTML = `
      <div class="portfolio-wrap">
      <img src="${project.images[0]}" class="img-fluid" alt="${project.title}" loading="lazy"
     onerror="this.src='assets/img/portfolio/noimg.avif'">
        <div class="portfolio-info">
          <div class="content">
            <span class="category">${project.category}</span>
            <h4>${project.title}</h4>
            <div class="portfolio-links">
             <a href="${project.images[1]}" class="glightbox" data-gallery="project-${id}">
                <i class="bi bi-plus-lg"></i>
              </a>
              <a href="portfolio-details.html?id=${id}" title="More Details">
                <i class="bi bi-arrow-right"></i>
              </a>
              </div>
          </div>
        </div>
      </div>
    `;

    container.appendChild(item);
  });

  // 2️⃣ Wait for images → init Isotope
  imagesLoaded(container, () => {
    const iso = new Isotope(container, {
      itemSelector: ".portfolio-item",
      layoutMode: "masonry"
    });

    iso.arrange({ filter: "*" });

    // 3️⃣ Filters
    document.querySelectorAll(".portfolio-filters li").forEach(btn => {
      btn.addEventListener("click", function () {
        document
          .querySelector(".portfolio-filters .filter-active")
          ?.classList.remove("filter-active");

        this.classList.add("filter-active");

        const filterValue = this.getAttribute("data-filter");
        iso.arrange({ filter: filterValue });
      });
    });
  });

  // 4️⃣ GLightbox re-init (dynamic)
  if (typeof GLightbox !== "undefined") {
    GLightbox({ selector: ".glightbox" });
  }

  // 5️⃣ AOS refresh
  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
});

