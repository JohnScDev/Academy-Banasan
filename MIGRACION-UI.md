# Migracion UI - Banasan Academy

Esta propuesta reemplaza la interfaz visual del proyecto base sin tocar su logica. El objetivo es que cada ruta actual tenga una vista Academy mejorada, con componentes centralizados y comportamiento demo suficiente para validar manejo antes de integrar React/API.

## Mapa de reemplazo

| Ruta base | Vista propuesta | Mejora esperada |
| --- | --- | --- |
| `/` | `Login/login-corporativo.html` | Acceso institucional, copy claro y estados de entrada. |
| `/home` | `Academy/Usuario General/inicio-aprendizaje.html` | Dashboard LMS con pendientes, obligatorios, recomendados, catalogo libre, continuidad y certificados. |
| `/courses` | `Academy/Usuario General/mis-cursos.html` | Mis asignaciones por prioridad: obligatorio, recomendado, certificable y libre. |
| `/catalog` | `Academy/Usuario General/listado-cursos.html` | Catalogo libre con filtros por contenido, duracion, certificado y catalogo tematico. |
| `/course-details/:id` | `Academy/Usuario General/detalle-curso.html` | Resumen, avance, lecciones, examen y certificado en un flujo continuo. |
| `/course-details/:id/video/:idVideo` | `Academy/Usuario General/lecciones-curso.html` | Reproductor, sidebar de lecciones y controles de avance. |
| `/course-details/:id/evaluation` | `Academy/Usuario General/examen.html` | Intento, resultado, nota minima y salida a certificado. |
| `/profile` | `Academy/Usuario General/perfil-usuario.html` | Perfil enriquecido con identidad, accesos, actividad, progreso y certificados. |
| `/settings` | `Academy/Usuario General/configuracion.html` | Cuenta, clave, notificaciones y preferencias en un formulario unico. |
| `/panel-admin` | `Academy/Usuario Administrador/admin.html` | Consola LMS multiempresa con flujo empresa, catalogo, contenido, audiencia, publicacion y reportes. |
| `/panel-admin/empresas` | `Academy/Usuario Administrador/admin-empresas.html` | Organizaciones internas/externas y estado multiempresa. |
| `/panel-admin/catalogo` | `Academy/Usuario Administrador/admin-catalogo.html` | Contenido reusable, versionado y publicable. |
| `/panel-admin/catalogo/:id` | `Academy/Usuario Administrador/admin-curso-detalle.html` | Ficha reusable con versiones, lecciones, evaluacion, certificado, audiencias, publicaciones e impacto. |
| `/panel-admin/catalogo/nuevo` | `Academy/Usuario Administrador/admin-curso-registro.html` | Registro de contenido reusable sin dependencia de jerarquias internas. |
| `/panel-admin/audiencias` | `Academy/Usuario Administrador/admin-audiencias.html` | Segmentacion por empresa, area, grupo, cargo o usuario. |
| `/panel-admin/publicaciones` | `Academy/Usuario Administrador/admin-publicaciones.html` | Instancia de contenido + audiencia + obligatoriedad + vigencia. |
| `/panel-admin/reportes` | `Academy/Usuario Administrador/admin-reportes.html` | Cumplimiento, progreso, certificados y riesgos por empresa/publicacion. |
| `/panel-admin/cursos` | `Academy/Usuario Administrador/admin-cursos.html` | Ruta legacy que redirige hacia catalogo reusable. |
| `/panel-admin/usuarios` | `Academy/Usuario Administrador/admin-usuarios.html` | Gestion de usuarios y estados de activacion. |
| `/panel-admin/aplicativos` | `Academy/Usuario Administrador/admin-modulos.html` | Gestion de modulos/aplicativos academicos. |
| `/panel-admin/roles` | `Academy/Usuario Administrador/admin-usuario-activacion.html` | Base para asignacion de accesos por audiencia, cargo o usuario. |

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
- Acciones LMS: publicar, crear publicacion, recordar audiencia, exportar reporte, sincronizar empresa y previsualizar audiencia.

## Cambio de modelo recomendado

La UI objetivo ya no debe depender de `aplicativo > area > subarea > curso`. La propuesta queda orientada a:

1. Empresa u organizacion.
2. Catalogo.
3. Contenido reusable.
4. Lecciones, recursos y evaluacion.
5. Audiencia.
6. Publicacion como obligatorio, recomendado o libre.
7. Reportes, progreso y certificados.

## Criterio para integrar al proyecto React

1. Migrar tokens y clases base a componentes React reutilizables.
2. Reemplazar pantallas por flujo, empezando por `Header`, `Home`, `CourseCard`, `UserProfile` y `ConfigurationPanel`.
3. Mantener la logica actual de hooks/API y sustituir solo la presentacion.
4. Convertir acciones demo en llamadas reales donde ya existan endpoints.
