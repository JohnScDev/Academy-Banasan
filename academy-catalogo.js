(() => {
  const menu = document.querySelector("[data-toggle-menu]");
  if (menu) menu.addEventListener("click", () => document.body.classList.toggle("menu-open"));

  const search = document.getElementById("globalSearch");
  if (search) {
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      document.querySelectorAll(".view-card,.module-card").forEach((card) => {
        card.hidden = q && !card.textContent.toLowerCase().includes(q);
      });
    });
  }
})();

// Academy course catalog filters.
(() => {
  const search = document.getElementById("courseSearch");
  const filters = document.querySelectorAll("[data-course-filter]");
  const cards = document.querySelectorAll("[data-course-card]");
  let activeFilter = "todos";

  function applyCourseFilters() {
    const query = search ? search.value.trim().toLowerCase() : "";
    cards.forEach((card) => {
      const matchesText = !query || card.dataset.text.includes(query);
      const matchesFilter = activeFilter === "todos" || card.dataset.state === activeFilter;
      card.hidden = !(matchesText && matchesFilter);
    });
  }

  if (search && cards.length) search.addEventListener("input", applyCourseFilters);
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      activeFilter = button.dataset.courseFilter;
      applyCourseFilters();
    });
  });
})();

// Academy split login interactions
(() => {
  const visual = document.querySelector("[data-login-visual]");
  if (!visual) return;

  const cards = visual.querySelectorAll("[data-purpose-card]");
  const message = visual.querySelector("[data-purpose-message]");
  const parallaxLayer = visual.querySelector("[data-parallax-layer]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setActive(card) {
    const index = Number(card.dataset.purposeIndex || 0);
    cards.forEach((item) => item.classList.toggle("active", item === card));
    visual.style.setProperty("--route-progress", `${index * 50}%`);
    if (message && card.dataset.purposeMessage) {
      message.style.opacity = "0";
      message.style.transform = "translateY(4px)";
      window.setTimeout(() => {
        message.textContent = card.dataset.purposeMessage;
        message.style.opacity = "1";
        message.style.transform = "translateY(0)";
      }, 120);
    }
  }

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => setActive(card));
    card.addEventListener("focus", () => setActive(card));
  });

  if (!reduceMotion && parallaxLayer) {
    visual.addEventListener("pointermove", (event) => {
      const rect = visual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      visual.style.setProperty("--panel-x", `${x * 10}px`);
      visual.style.setProperty("--panel-y", `${y * 8}px`);
    }, { passive: true });

    visual.addEventListener("pointerleave", () => {
      visual.style.setProperty("--panel-x", "0px");
      visual.style.setProperty("--panel-y", "0px");
    });
  }

  if (cards[0]) setActive(cards[0]);
})();
// End Academy split login interactions
