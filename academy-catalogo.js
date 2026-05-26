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

// Academy shared shell, demo actions and interactive patterns.
(() => {
  const role = document.body.dataset.role;
  const module = document.body.dataset.module;
  if (module !== "academy") return;

  const routesByRole = {
    user: {
      profile: "perfil-usuario.html",
      settings: "configuracion.html",
      home: "mis-cursos.html",
      login: "../../Login/login-corporativo.html",
    },
    admin: {
      profile: "../Usuario%20General/perfil-usuario.html",
      settings: "../Usuario%20General/configuracion.html",
      home: "admin.html",
      login: "../../Login/login-corporativo.html",
    },
  };

  const routes = routesByRole[role] || {};

  function iconUser() {
    return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path></svg>';
  }

  function ensureToastStack() {
    let stack = document.querySelector(".academy-toast-stack");
    if (!stack) {
      stack = document.createElement("div");
      stack.className = "academy-toast-stack";
      stack.setAttribute("aria-live", "polite");
      document.body.appendChild(stack);
    }
    return stack;
  }

  function showToast(title, message = "", tone = "success") {
    const toast = document.createElement("div");
    toast.className = `academy-toast ${tone}`;
    toast.innerHTML = `<strong>${title}</strong>${message ? `<span>${message}</span>` : ""}`;
    ensureToastStack().appendChild(toast);
    window.setTimeout(() => toast.remove(), 3800);
  }

  function showModal(title, body) {
    const backdrop = document.createElement("div");
    backdrop.className = "academy-modal-backdrop";
    backdrop.innerHTML = `
      <section class="academy-modal" role="dialog" aria-modal="true" aria-label="${title}">
        <header>
          <div><h2>${title}</h2><p>Vista demostrativa de la libreria Academy.</p></div>
          <button class="icon-btn" type="button" data-modal-close aria-label="Cerrar"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg></button>
        </header>
        ${body}
      </section>`;
    document.body.appendChild(backdrop);
    const close = () => backdrop.remove();
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop || event.target.closest("[data-modal-close]")) close();
    });
    document.addEventListener("keydown", function onKeydown(event) {
      if (event.key === "Escape") {
        close();
        document.removeEventListener("keydown", onKeydown);
      }
    });
  }

  function enhanceProfileMenu() {
    const profileButton = document.querySelector(".profile-btn");
    if (!profileButton || profileButton.closest(".profile-menu") || !routes.profile) return;

    const initials = profileButton.querySelector("span")?.textContent?.trim() || (role === "admin" ? "AD" : "LP");
    const menu = document.createElement("details");
    menu.className = "profile-menu";
    menu.innerHTML = `
      <summary class="profile-btn" aria-label="Menu de perfil">${iconUser()}<span>${initials}</span></summary>
      <div class="profile-menu-panel">
        <small>${role === "admin" ? "Administrador Academy" : "Participante Academy"}</small>
        <a href="${routes.profile}">Perfil <span>Ver</span></a>
        <a href="${routes.settings}">Configuracion <span>Editar</span></a>
        <a href="${routes.home}">Inicio <span>Ir</span></a>
        <button class="danger" type="button" data-action="logout-demo">Cerrar sesion <span>Demo</span></button>
      </div>`;
    profileButton.replaceWith(menu);
  }

  function enhanceNotifications() {
    document.querySelectorAll('.icon-btn[aria-label="Notificaciones"]').forEach((button) => {
      button.addEventListener("click", () => {
        showModal("Notificaciones", `
          <ul class="academy-list">
            <li><strong>Examen habilitado</strong><span>Induccion corporativa estara disponible al completar dos lecciones.</span></li>
            <li><strong>Certificado pendiente</strong><span>Seguridad operativa requiere emision.</span></li>
            <li><strong>Recordatorio</strong><span>SAP para Tesoreria sigue sin iniciar.</span></li>
          </ul>`);
      });
    });
  }

  function handleCertificateAction(actionElement, action) {
    if (action === "view-certificate") {
      showModal("Certificado disponible", `
        <div class="academy-modal-preview">
          <strong>Banasan Academy</strong>
          <span>Certifica que Laura Paola Martinez aprobo el curso Normas para proveedores.</span>
          <small>Codigo demo: BAC-2026-0042</small>
        </div>
        <div class="course-actions"><button class="btn btn-primary" type="button" data-action="download-certificate">Descargar PDF</button></div>`);
      return;
    }

    if (action === "download-certificate") {
      actionElement.textContent = "Descargado";
      showToast("Descarga simulada", "El certificado queda listo para integrar con el PDF real.", "success");
      return;
    }

    if (action === "request-certificate") {
      const scope = actionElement.closest(".certificate-card,.certificate-mini-row");
      const badge = scope?.querySelector(".status-badge");
      if (badge) {
        badge.className = "status-badge state-activo";
        badge.textContent = "Solicitud enviada";
      }
      actionElement.textContent = "Solicitud enviada";
      actionElement.setAttribute("disabled", "disabled");
      showToast("Emision solicitada", "La propuesta muestra el estado posterior a solicitar certificado.", "success");
    }
  }

  function handleTableAction(actionElement) {
    const row = actionElement.closest("tr");
    const badge = row?.querySelector(".status-badge");
    const isDeactivate = actionElement.classList.contains("deactivate");
    const isActivate = actionElement.classList.contains("activate");

    if (isDeactivate && row && badge) {
      row.classList.add("is-deactivated");
      badge.textContent = "Inactivo";
      showToast("Registro desactivado", "La fila conserva contexto y cambia estado visualmente.", "warning");
    } else if (isActivate && row && badge) {
      row.classList.remove("is-deactivated");
      badge.className = "status-badge state-activo";
      badge.textContent = "Activo";
      showToast("Registro activado", "La accion queda reflejada en la tabla demo.", "success");
    }
  }

  function handleDemoAction(actionElement, event) {
    const action = actionElement.dataset.action;
    if (!action) return;
    event.preventDefault();

    if (action.includes("certificate")) {
      handleCertificateAction(actionElement, action);
      return;
    }

    const messages = {
      "download-history": ["Historial generado", "El perfil ya contempla exportacion de avance y certificados."],
      "save-attempt": ["Intento guardado", "Las respuestas quedan en estado borrador dentro de la propuesta."],
      "submit-exam": ["Examen enviado", "Resultado demo actualizado: aprobado y certificado disponible."],
      "reset-demo-form": ["Formulario restaurado", "Los campos vuelven a su estado de demostracion."],
      "logout-demo": ["Sesion cerrada", "Redirigiendo al login corporativo de la propuesta."],
    };

    if (action === "logout-demo") {
      showToast(messages[action][0], messages[action][1], "warning");
      window.setTimeout(() => {
        window.location.href = routes.login || "Login/login-corporativo.html";
      }, 650);
      return;
    }

    const message = messages[action] || ["Accion ejecutada", "La interaccion demo quedo centralizada en academy-catalogo.js."];
    showToast(message[0], message[1], action === "reset-demo-form" ? "warning" : "success");
  }

  function enhanceTabs() {
    document.querySelectorAll("[data-tabs]").forEach((tabsRoot) => {
      tabsRoot.querySelectorAll("[data-tab-target]").forEach((button) => {
        button.addEventListener("click", () => {
          const targetId = button.dataset.tabTarget;
          tabsRoot.querySelectorAll("[data-tab-target]").forEach((item) => item.classList.toggle("active", item === button));
          tabsRoot.querySelectorAll("[data-tab-panel]").forEach((panel) => {
            const active = panel.id === targetId;
            panel.hidden = !active;
            panel.classList.toggle("active", active);
          });
        });
      });
    });
  }

  function enhanceForms() {
    document.querySelectorAll("form").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!form.reportValidity()) return;
        form.classList.add("is-saved");
        const saveState = form.querySelector(".form-save-state");
        if (saveState) saveState.textContent = "Cambios guardados";
        showToast("Cambios guardados", "Formulario funcional dentro de la propuesta estatica.", "success");
      });
    });
  }

  function enhanceTables() {
    document.querySelectorAll(".table-action.activate,.table-action.deactivate").forEach((actionElement) => {
      actionElement.addEventListener("click", () => handleTableAction(actionElement));
    });

    document.querySelectorAll(".course-toolbar").forEach((toolbar) => {
      const table = toolbar.nextElementSibling?.querySelector("tbody");
      if (!table) return;
      const controls = toolbar.querySelectorAll("input,select");
      const rows = Array.from(table.querySelectorAll("tr"));
      const applyFilters = () => {
        const values = Array.from(controls).map((control) => control.value.trim().toLowerCase()).filter((value) => value && !["todos", "todas"].includes(value));
        rows.forEach((row) => {
          const text = row.textContent.toLowerCase();
          row.hidden = values.some((value) => !text.includes(value));
        });
      };
      controls.forEach((control) => control.addEventListener("input", applyFilters));
      controls.forEach((control) => control.addEventListener("change", applyFilters));
    });
  }

  function enhanceGenericActions() {
    document.addEventListener("click", (event) => {
      const disabledLink = event.target.closest("a.disabled,.btn.disabled");
      if (disabledLink) {
        event.preventDefault();
        showToast("No disponible", "Esta accion representa un estado bloqueado.", "warning");
        return;
      }

      const actionElement = event.target.closest("[data-action]");
      if (actionElement) {
        handleDemoAction(actionElement, event);
        return;
      }

      const button = event.target.closest("button");
      if (!button) return;
      const label = button.textContent.trim().toLowerCase();
      if (label === "ver certificado") handleCertificateAction(button, "view-certificate");
      if (label === "descargar") handleCertificateAction(button, "download-certificate");
      if (label === "solicitar emision") handleCertificateAction(button, "request-certificate");
      if (label === "guardar intento") {
        event.preventDefault();
        showToast("Intento guardado", "Las respuestas quedan en estado borrador dentro de la propuesta.", "success");
      }
      if (label === "enviar examen") {
        event.preventDefault();
        showToast("Examen enviado", "Resultado demo actualizado: aprobado y certificado disponible.", "success");
      }
    });
  }

  enhanceProfileMenu();
  enhanceNotifications();
  enhanceTabs();
  enhanceForms();
  enhanceTables();
  enhanceGenericActions();
})();
