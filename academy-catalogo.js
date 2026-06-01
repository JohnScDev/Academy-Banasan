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
      home: "inicio-aprendizaje.html",
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

  const glowMenuMeta = {
    inicio: {
      icon: '<path d="M3 10.5 12 3l9 7.5"></path><path d="M5 10v10h14V10"></path><path d="M9 20v-6h6v6"></path>',
      gradient: "radial-gradient(circle, rgba(0,92,168,0.18) 0%, rgba(0,92,168,0.07) 50%, rgba(0,92,168,0) 100%)",
      color: "#005ca8",
    },
    consola: {
      icon: '<rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M7 8h6"></path><path d="M7 12h10"></path><path d="M7 16h4"></path>',
      gradient: "radial-gradient(circle, rgba(0,92,168,0.18) 0%, rgba(0,92,168,0.07) 50%, rgba(0,92,168,0) 100%)",
      color: "#005ca8",
    },
    "mis asignaciones": {
      icon: '<path d="M9 4h6"></path><path d="M9 4a2 2 0 0 0-2 2v1h10V6a2 2 0 0 0-2-2"></path><path d="M5 7h14v13H5z"></path><path d="m9 13 2 2 4-5"></path>',
      gradient: "radial-gradient(circle, rgba(8,127,140,0.18) 0%, rgba(8,127,140,0.07) 50%, rgba(8,127,140,0) 100%)",
      color: "#087f8c",
    },
    catalogo: {
      icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"></path><path d="M8 7h8"></path><path d="M8 11h6"></path>',
      gradient: "radial-gradient(circle, rgba(34,197,94,0.16) 0%, rgba(22,163,74,0.07) 50%, rgba(21,128,61,0) 100%)",
      color: "#16823a",
    },
    certificados: {
      icon: '<circle cx="12" cy="8" r="5"></circle><path d="m8.5 13.5-1.2 6 4.7-2.8 4.7 2.8-1.2-6"></path>',
      gradient: "radial-gradient(circle, rgba(245,158,11,0.2) 0%, rgba(217,119,6,0.08) 50%, rgba(180,83,9,0) 100%)",
      color: "#b87500",
    },
    perfil: {
      icon: '<circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path>',
      gradient: "radial-gradient(circle, rgba(239,68,68,0.16) 0%, rgba(220,38,38,0.07) 50%, rgba(185,28,28,0) 100%)",
      color: "#c53030",
    },
    empresas: {
      icon: '<path d="M4 21V5a2 2 0 0 1 2-2h8v18"></path><path d="M14 9h4a2 2 0 0 1 2 2v10"></path><path d="M8 7h2"></path><path d="M8 11h2"></path><path d="M8 15h2"></path>',
      gradient: "radial-gradient(circle, rgba(14,165,233,0.17) 0%, rgba(2,132,199,0.07) 50%, rgba(3,105,161,0) 100%)",
      color: "#0284c7",
    },
    audiencias: {
      icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.9"></path><path d="M16 3.1a4 4 0 0 1 0 7.8"></path>',
      gradient: "radial-gradient(circle, rgba(168,85,247,0.16) 0%, rgba(147,51,234,0.07) 50%, rgba(126,34,206,0) 100%)",
      color: "#7e3fb2",
    },
    usuarios: {
      icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.9"></path><path d="M16 3.1a4 4 0 0 1 0 7.8"></path>',
      gradient: "radial-gradient(circle, rgba(239,68,68,0.16) 0%, rgba(220,38,38,0.07) 50%, rgba(185,28,28,0) 100%)",
      color: "#c53030",
    },
    publicaciones: {
      icon: '<path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path>',
      gradient: "radial-gradient(circle, rgba(249,115,22,0.17) 0%, rgba(234,88,12,0.07) 50%, rgba(194,65,12,0) 100%)",
      color: "#ea580c",
    },
    reportes: {
      icon: '<path d="M4 19V5"></path><path d="M4 19h16"></path><path d="M8 16v-5"></path><path d="M12 16V8"></path><path d="M16 16v-3"></path>',
      gradient: "radial-gradient(circle, rgba(20,184,166,0.17) 0%, rgba(13,148,136,0.07) 50%, rgba(15,118,110,0) 100%)",
      color: "#0f766e",
    },
    gestion: {
      icon: '<path d="M12 3v18"></path><path d="M3 12h18"></path><path d="M5 5h14v14H5z"></path>',
      gradient: "radial-gradient(circle, rgba(100,116,139,0.18) 0%, rgba(71,85,105,0.08) 50%, rgba(51,65,85,0) 100%)",
      color: "#475569",
    },
  };

  function iconForNav(label) {
    const key = label.trim().toLowerCase();
    const meta = glowMenuMeta[key] || glowMenuMeta.inicio;
    return { key, ...meta };
  }

  function enhanceGlowTopnav() {
    document.querySelectorAll(".academy-topnav").forEach((nav) => {
      nav.classList.add("glow-menu");
      const links = Array.from(nav.querySelectorAll("a"));
      links.forEach((link) => {
        const label = link.dataset.label || link.textContent.trim();
        const meta = iconForNav(label);
        link.dataset.label = label;
        link.style.setProperty("--glow-gradient", meta.gradient);
        link.style.setProperty("--glow-icon-color", meta.color);
        if (link.classList.contains("active")) link.setAttribute("aria-current", "page");
        if (!link.querySelector(".glow-menu-icon")) {
          link.innerHTML = `<svg class="glow-menu-icon icon" viewBox="0 0 24 24" aria-hidden="true">${meta.icon}</svg><span>${label}</span>`;
        }
        link.addEventListener("click", () => {
          links.forEach((item) => {
            item.classList.remove("active");
            item.removeAttribute("aria-current");
          });
          link.classList.add("active");
          link.setAttribute("aria-current", "page");
        });
      });
      const activeLink = links.find((link) => link.classList.contains("active"));
      if (activeLink) {
        window.requestAnimationFrame(() => {
          if (nav.scrollWidth <= nav.clientWidth) return;
          const navRect = nav.getBoundingClientRect();
          const activeRect = activeLink.getBoundingClientRect();
          const offset = activeRect.left - navRect.left - ((nav.clientWidth - activeRect.width) / 2);
          nav.scrollLeft += offset;
        });
      }
    });
  }

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
      "login-demo": ["Acceso validado", "Validacion completada. En la aplicacion real se abriria tu sesion."],
      "save-attempt": ["Intento guardado", "Las respuestas quedan en estado borrador dentro de la propuesta."],
      "submit-exam": ["Examen enviado", "Resultado demo actualizado: aprobado y certificado disponible."],
      "reset-demo-form": ["Formulario restaurado", "Los campos vuelven a su estado de demostracion."],
      "logout-demo": ["Sesion cerrada", "Redirigiendo al login corporativo de la propuesta."],
      "send-reminder-demo": ["Recordatorio enviado", "La publicacion conserva trazabilidad por empresa, audiencia y usuario."],
      "export-report-demo": ["Reporte exportado", "El reporte queda listo para mapearse a CSV, Excel o PDF real."],
      "duplicate-content-demo": ["Contenido duplicado", "La copia conserva lecciones, evaluacion y certificado como nueva version editable."],
      "sync-organization-demo": ["Empresa sincronizada", "La organizacion queda disponible para audiencias y publicaciones."],
      "preview-audience-demo": ["Audiencia calculada", "La vista previa muestra alcance, exclusiones y usuarios impactados."],
      "save-content-demo": ["Contenido guardado", "La ficha reusable conserva version, estructura, evaluacion y certificado sin depender de jerarquias internas."],
      "archive-content-demo": ["Contenido archivado", "Las publicaciones activas conservan su version y el catalogo oculta nuevas asignaciones."],
      "certificate-rule-demo": ["Regla validada", "El certificado se emite al completar lecciones requeridas y aprobar la evaluacion."],
    };

    if (action === "logout-demo") {
      showToast(messages[action][0], messages[action][1], "warning");
      window.setTimeout(() => {
        window.location.href = routes.login || "Login/login-corporativo.html";
      }, 650);
      return;
    }

    if (action === "publish-demo") {
      const row = actionElement.closest("tr,.lms-publication-card,.lms-library-card");
      const badge = row?.querySelector(".status-badge");
      if (badge) {
        badge.className = "status-badge state-publicada";
        badge.textContent = "Publicada";
      }
      showToast("Publicacion activada", "El contenido reusable queda disponible para la audiencia seleccionada.", "success");
      return;
    }

    if (action === "create-publication-demo") {
      showModal("Nueva publicacion", `
        <div class="lms-workflow">
          <article class="lms-workflow-step"><span>1</span><strong>Empresa</strong><small>Banasan o empresa externa.</small></article>
          <article class="lms-workflow-step"><span>2</span><strong>Contenido</strong><small>Contenido reusable versionado.</small></article>
          <article class="lms-workflow-step"><span>3</span><strong>Audiencia</strong><small>Area, cargo, grupo o usuario.</small></article>
          <article class="lms-workflow-step"><span>4</span><strong>Regla</strong><small>Obligatorio, recomendado o libre.</small></article>
        </div>
        <div class="course-actions"><button class="btn btn-primary" type="button" data-action="publish-demo">Simular publicacion</button></div>`);
      return;
    }

    if (action === "open-organization-demo") {
      showModal("Detalle de empresa", `
        <div class="lms-card-facts">
          <article><span>Usuarios</span><strong>1.161</strong></article>
          <article><span>Audiencias</span><strong>18</strong></article>
          <article><span>Publicaciones</span><strong>24</strong></article>
          <article><span>Cumplimiento</span><strong>86%</strong></article>
        </div>`);
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
      actionElement.addEventListener("click", () => {
        if (actionElement.dataset.action) return;
        handleTableAction(actionElement);
      });
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

  function enhanceLmsSearch() {
    document.querySelectorAll("[data-lms-search]").forEach((input) => {
      const scopeName = input.dataset.lmsSearch;
      const scope = document.querySelector(`[data-lms-scope="${scopeName}"]`);
      if (!scope) return;
      const rows = scope.querySelectorAll("[data-lms-row], [data-lms-item]");
      input.addEventListener("input", () => {
        const query = input.value.trim().toLowerCase();
        rows.forEach((row) => {
          row.hidden = query && !row.textContent.toLowerCase().includes(query);
        });
      });
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

  enhanceGlowTopnav();
  enhanceProfileMenu();
  enhanceNotifications();
  enhanceTabs();
  enhanceForms();
  enhanceTables();
  enhanceLmsSearch();
  enhanceGenericActions();
})();
