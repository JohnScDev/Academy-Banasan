# Migracion UI - Banasan Academy

Esta propuesta reemplaza la interfaz visual del proyecto base sin tocar su logica. El objetivo es que cada ruta actual tenga una vista Academy mejorada, con componentes centralizados y comportamiento demo suficiente para validar manejo antes de integrar React/API.

## Mapa de reemplazo

| Ruta base | Vista propuesta | Mejora esperada |
| --- | --- | --- |
| `/` | `Login/login-corporativo.html` | Acceso institucional, copy claro y estados de entrada. |
| `/home` | `Academy/Usuario General/mis-cursos.html` | Listado con busqueda, filtros, estados y CTA de continuidad. |
| `/course-details/:id` | `Academy/Usuario General/detalle-curso.html` | Resumen, avance, lecciones, examen y certificado en un flujo continuo. |
| `/course-details/:id/video/:idVideo` | `Academy/Usuario General/lecciones-curso.html` | Reproductor, sidebar de lecciones y controles de avance. |
| `/course-details/:id/evaluation` | `Academy/Usuario General/examen.html` | Intento, resultado, nota minima y salida a certificado. |
| `/profile` | `Academy/Usuario General/perfil-usuario.html` | Perfil enriquecido con identidad, accesos, actividad, progreso y certificados. |
| `/settings` | `Academy/Usuario General/configuracion.html` | Cuenta, clave, notificaciones y preferencias en un formulario unico. |
| `/panel-admin` | `Academy/Usuario Administrador/admin.html` | Dashboard operativo con indicadores, alertas y prioridades. |
| `/panel-admin/cursos` | `Academy/Usuario Administrador/admin-cursos.html` | Tabla con filtros y acciones iconicas reutilizables. |
| `/panel-admin/usuarios` | `Academy/Usuario Administrador/admin-usuarios.html` | Gestion de usuarios y estados de activacion. |
| `/panel-admin/aplicativos` | `Academy/Usuario Administrador/admin-modulos.html` | Gestion de modulos/aplicativos academicos. |
| `/panel-admin/roles` | `Academy/Usuario Administrador/admin-usuario-activacion.html` | Base para asignacion de accesos por area/subarea. |

## Componentes centralizados

- `academy-topbar`, `academy-topnav`, `profile-menu`: navegacion comun por rol.
- `learner-overview`, `learner-section`, `learner-step-list`: flujo del participante.
- `profile-hero`, `profile-tabs`, `profile-card`, `settings-layout`: perfil y cuenta.
- `entity-overview`, `entity-section`, `entity-facts`, `entity-split`: administracion.
- `table-actions`, `status-badge`, `course-toolbar`: tablas, estados y filtros.
- `academy-toast`, `academy-modal`: respuesta visible para acciones demo.

## Manejo funcional en la propuesta

`academy-catalogo.js` centraliza:

- Menu de perfil con enlaces a perfil, configuracion, inicio y cierre de sesion demo.
- Notificaciones en modal.
- Tabs de perfil.
- Formularios con guardado demo y estado visual.
- Acciones de tabla para activar/desactivar registros.
- Acciones de certificado: ver, descargar y solicitar emision.
- Filtros de cursos y filtros basicos de tablas.

## Criterio para integrar al proyecto React

1. Migrar tokens y clases base a componentes React reutilizables.
2. Reemplazar pantallas por flujo, empezando por `Header`, `Home`, `CourseCard`, `UserProfile` y `ConfigurationPanel`.
3. Mantener la logica actual de hooks/API y sustituir solo la presentacion.
4. Convertir acciones demo en llamadas reales donde ya existan endpoints.
