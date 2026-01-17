// const container = document.getElementById("portfolio-container");

// Object.entries(projects).forEach(([id, project]) => {
//   const item = document.createElement("div");

//   item.className = `
//     col-lg-6 col-md-6 
//     portfolio-item 
//     isotope-item 
//     ${project.type}
//   `;

//   item.innerHTML = `
//     <div class="portfolio-wrap">
//       <img src="${project.images[0]}" class="img-fluid" alt="${project.title}">
//       <div class="portfolio-info">
//         <div class="content">
//           <span class="category">${project.category}</span>
//           <h4>${project.title}</h4>
//           <div class="portfolio-links">
//             <a href="portfolio-details.html?id=${id}" title="More Details">
//               <i class="bi bi-arrow-right"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;

//   container.appendChild(item);
// });





// console.log("portfolio.js loaded");


// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.getElementById("portfolio-container");

//   if (!container) return;

//   // 1️⃣ Render portfolio items
//   Object.entries(projects).forEach(([id, project]) => {
//     const item = document.createElement("div");

//     item.className = `
//       col-lg-6 col-md-6
//       portfolio-item
//       isotope-item
//       ${project.type}
//     `;

//     item.innerHTML = `
//       <div class="portfolio-wrap">
//         <img src="${project.images[0]}" class="img-fluid" alt="${project.title}">
//         <div class="portfolio-info">
//           <div class="content">
//             <span class="category">${project.category}</span>
//             <h4>${project.title}</h4>
//             <div class="portfolio-links">
//               <a href="portfolio-details.html?id=${id}" title="More Details">
//                 <i class="bi bi-arrow-right"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     `;

//     container.appendChild(item);
//   });

//   // 2️⃣ WAIT FOR IMAGES → THEN INIT ISOTOPE
//   imagesLoaded(container, () => {
//     const iso = new Isotope(container, {
//       itemSelector: ".portfolio-item",
//       layoutMode: "masonry"
//     });

//     // 3️⃣ Filter buttons
//     document
//       .querySelectorAll(".portfolio-filters li")
//       .forEach(btn => {
//         btn.addEventListener("click", function () {
//           document
//             .querySelector(".portfolio-filters .filter-active")
//             ?.classList.remove("filter-active");

//           this.classList.add("filter-active");

//           iso.arrange({
//             filter: this.getAttribute("data-filter")
//           });
//         });
//       });
//   });

//   // 4️⃣ Refresh AOS
//   if (typeof AOS !== "undefined") {
//     AOS.refresh();
//   }
// });


// console.log("portfolio.js loaded");

// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.getElementById("portfolio-container");

//   if (!container) return;

//   // 1️⃣ Render portfolio items
//   Object.entries(projects).forEach(([id, project]) => {
//     const item = document.createElement("div");

//     item.className = `
//       col-lg-6 col-md-6
//       portfolio-item
//       isotope-item
//       filter-${project.type}
//     `;

//     item.innerHTML = `
//       <div class="portfolio-wrap">
//         <img src="${project.images[0]}" class="img-fluid" alt="${project.title}">
//         <div class="portfolio-info">
//           <div class="content">
//             <span class="category">${project.category}</span>
//             <h4>${project.title}</h4>
           
//             <div class="portfolio-links">
//               <!-- Lightbox (Plus Icon) -->
//           <a href="${project.images[0]}"
//              class="glightbox"
//              data-gallery="gallery-${id}"
//              title="${project.title}">
//             <i class="bi bi-plus-lg"></i>
//           </a>

//           <!-- Hidden images for same gallery -->
//           ${project.images
//             .slice(1)
//             .map(
//               (img) =>
//                 `<a href="${img}"
//                     class="glightbox d-none"
//                     data-gallery="gallery-${id}"
//                     title="${project.title}"></a>`,
//             )
//             .join("")}

//           <!-- Details Page -->
//               <a href="portfolio-details.html?id=${id}" title="More Details">
//                 <i class="bi bi-arrow-right"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     `;

//     container.appendChild(item);
//   });

//   // 2️⃣ WAIT FOR IMAGES → THEN INIT ISOTOPE
//   imagesLoaded(container, () => {
//     const iso = new Isotope(container, {
//       itemSelector: ".portfolio-item",
//       layoutMode: "masonry",
//     });

//     // 3️⃣ Filter buttons
//     document
//       .querySelectorAll(".portfolio-filters li")
//       .forEach(btn => {
//         btn.addEventListener("click", function () {
//           document
//             .querySelector(".portfolio-filters .filter-active")
//             ?.classList.remove("filter-active");

//           this.classList.add("filter-active");

//           iso.arrange({
//             filter: this.getAttribute("data-filter"),
//           });
//         });
//       });
//   });

//   // 4️⃣ 🔥 INIT GLIGHTBOX (HERE ONLY)
//     GLightbox({
//       selector: ".glightbox",
//     });
//   });

//   // 4️⃣ Refresh AOS
//   if (typeof AOS !== "undefined") {
//     AOS.refresh();
//   }
// });

// console.log("portfolio.js loaded");

// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.getElementById("portfolio-container");
//   if (!container) return;

//   // 1️⃣ Render portfolio items
//   Object.entries(projects).forEach(([id, project]) => {
//     const item = document.createElement("div");

//     item.className = `
//       col-lg-6 col-md-6
//       portfolio-item
//       isotope-item
//       ${project.type}
//     `;

//     item.innerHTML = `
//       <div class="portfolio-wrap">
//         <img src="${project.images[0]}" class="img-fluid" alt="${project.title}">
//         <div class="portfolio-info">
//           <div class="content">
//             <span class="category">${project.category}</span>
//             <h4>${project.title}</h4>

//             <div class="portfolio-links">
//               <!-- Lightbox -->
//               <a href="${project.images[1]}"
//                  class="glightbox"
//                  data-gallery="gallery-${id}"
//                  title="${project.title}">
//                 <i class="bi bi-plus-lg"></i>
//               </a>

//               ${project.images
//                 .slice(1)
//                 .map(
//                   img => `
//                     <a href="${img}"
//                        class="glightbox d-none"
//                        data-gallery="gallery-${id}"
//                        title="${project.title}">
//                     </a>`
//                 )
//                 .join("")}

//               <!-- Details -->
//               <a href="portfolio-details.html?id=${id}">
//                 <i class="bi bi-arrow-right"></i>
//               </a>
//             </div>

//           </div>
//         </div>
//       </div>
//     `;

//     container.appendChild(item);
//   });

//   // 2️⃣ Wait for images → init Isotope
//   imagesLoaded(container, () => {
//     const iso = new Isotope(container, {
//       itemSelector: ".portfolio-item",
//       layoutMode: "masonry",
//     });

//     // 3️⃣ Filters
//     document.querySelectorAll(".portfolio-filters li").forEach(btn => {
//       btn.addEventListener("click", function () {
//         document
//           .querySelector(".portfolio-filters .filter-active")
//           ?.classList.remove("filter-active");

//         this.classList.add("filter-active");

//         iso.arrange({
//           filter: this.getAttribute("data-filter"),
//         });
//       });
//     });

//     // 4️⃣ GLightbox (MUST be here)
//     GLightbox({
//       selector: ".glightbox",
//     });
//   });

//   // 5️⃣ AOS refresh
//   if (typeof AOS !== "undefined") {
//     AOS.refresh();
//   }
// });

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
     onerror="this.src='assets/img/portfolio/portfolio-7.webp'">
        <div class="portfolio-info">
          <div class="content">
            <span class="category">${project.category}</span>
            <h4>${project.title}</h4>
            <div class="portfolio-links">
              <a href="portfolio-details.html?id=${id}" title="More Details">
                <i class="bi bi-arrow-right"></i>
              </a>
              <a href="${project.images[1]}" class="glightbox" data-gallery="project-${id}">
                <i class="bi bi-plus-lg"></i>
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

