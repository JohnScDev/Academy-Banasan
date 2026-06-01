# Banasan Academy - Libreria UI estatica

Catalogo estatico enfocado unicamente en Academy. La propuesta queda como base para aterrizar vistas, componentes y patrones reutilizables del flujo de aprendizaje y la administracion academica.

## Acceso

Abrir `index.html` en la raiz de esta carpeta o desplegar la carpeta completa en Netlify.

## Estructura

- `index.html`: entrada principal de la libreria, mapa de vistas y catalogo de componentes Academy.
- `Login/`: tres vistas de inicio de sesion para Banasan Academy: acceso por correo, SSO y codigo temporal.
- `Academy/index.html`: seleccion de experiencia y resumen de componentes Academy.
- `Academy/Usuario General/`: vistas del participante.
- `Academy/Usuario Administrador/`: vistas administrativas.
- `MIGRACION-UI.md`: matriz de reemplazo entre rutas del proyecto base y vistas propuestas.
- `academy-catalogo.css`: entrypoint compatible para todos los HTML actuales.
- `academy-catalogo.js`: interacciones centralizadas de busqueda, filtros, tabs, formularios, menu de perfil, toasts, modales, certificados y acciones de tabla.
- `assets/css/`: base centralizada de estilos reutilizables.
- `PRODUCT.md`: contexto de producto para tratar Academy como LMS corporativo multiempresa.
- `DESIGN.md`: sistema visual, semantica de color y reglas de crecimiento.
- `ACADEMY-LMS-LIBRARY.md`: blueprint de entidades, capas, vistas y criterios de escalabilidad.

## CSS centralizado

- `academy-catalogo.css`: entrypoint estable usado por todos los HTML actuales.
- `assets/css/00-tokens.css`: variables de color, espaciado, radios, sombras, fuente y reset minimo.
- `assets/css/01-base.css`: reglas base, iconos, utilidades simples y accesibilidad.
- `assets/css/02-layout.css`: shell, header, navegacion superior, selector de libreria, pagina y grillas.
- `academy-topnav.glow-menu`: menu superior tipo MenuBar con iconos, glow por item, estado activo y centrado automatico en movil desde `academy-catalogo.js`.
- `assets/css/03-components.css`: botones, cards, formularios, tablas, badges, acciones por icono, filtros y metricas.
- `assets/css/04-patterns.css`: patrones compuestos reutilizables para entidades, cursos, aprendizaje, registros, paneles y listas.
- `assets/css/modules/academy.css`: reglas especificas de Academy, participante y administracion academica.
- `assets/css/05-login.css`: variantes visuales de login Academy.
- `assets/css/06-catalog.css`: catalogo de vistas y componentes.
- `assets/css/07-lms-library.css`: patrones LMS multiempresa: inicio de aprendizaje, consola, workflow, audiencias, publicaciones, reportes y estados semanticos.

Los archivos anteriores (`shared-base.css`, `academy-layout.css`, `academy-user.css`, `academy-admin.css`, `academy-catalog.css`, `login.css`) quedan como shims de compatibilidad. No deben recibir nuevas reglas salvo que sea para mantener una ruta heredada. Toda mejora nueva debe entrar en los archivos numerados o en `assets/css/modules/academy.css`.

## Patrones reutilizables Academy

- `section-nav`: navegacion horizontal interna para secciones de una entidad o contenido.
- `entity-overview`: resumen operativo de una entidad administrable.
- `entity-main`: informacion principal, estado y acciones primarias.
- `entity-facts`: datos clave en tarjetas compactas.
- `entity-metrics`: indicadores cuantitativos alineados.
- `entity-section`: seccion administrativa con titulo, acciones, tabla o lista.
- `entity-split`: dos paneles relacionados con separacion y altura consistente.
- `table-actions`: acciones de tabla con tres iconos estandar: activar, editar y desactivar.
- `learner-overview`: resumen de curso para participante.
- `learner-section`: bloque del flujo de aprendizaje con contenido, accion o estado.
- `learner-step-list`: lista de lecciones o pasos con progreso alineado.
- `learner-split`: paneles relacionados del participante, por ejemplo examen y certificado.
- `profile-hero`, `profile-tabs`, `profile-card`: perfil enriquecido con identidad, progreso, certificados, actividad y accesos.
- `settings-layout`: configuracion de cuenta, clave, notificaciones y preferencias.
- `academy-toast`, `academy-modal`: respuesta visible para acciones funcionales demo.
- `login-shell`, `login-card`, `login-visual`, `login-band`: variantes de acceso inicial para Academy sin afectar vistas internas.
- `lms-command`, `lms-lane-grid`, `lms-workflow`, `lms-quick-actions`, `lms-publication-layout`, `lms-report-grid`: patrones nuevos para operar Academy como LMS multiempresa.
- `admin-curso-detalle.html`: ficha de contenido reusable con resumen, estructura, versiones, evaluacion, certificado, audiencias, publicaciones e impacto.

Estos patrones deben usarse para futuras pantallas de participante o gestion antes de crear clases especificas nuevas.

## Vistas de registro administrativo

- `Academy/Usuario Administrador/admin-modulo-registro.html`
- `Academy/Usuario Administrador/admin-curso-registro.html`: registro de contenido reusable, version inicial, propietario, certificado y criterios sugeridos.
- `Academy/Usuario Administrador/admin-leccion-registro.html`
- `Academy/Usuario Administrador/admin-examen-registro.html`: configuracion de la evaluacion asociada al contenido, preguntas, respuestas, puntaje, nota minima e intentos.
- `Academy/Usuario Administrador/admin-usuario-activacion.html`: activacion de usuario proveniente de una fuente corporativa, parametrizacion Academy y asignacion de cursos existentes.

## Vistas enriquecidas de participante

- `Academy/Usuario General/inicio-aprendizaje.html`: inicio LMS con pendientes, obligatorios, recomendados, catalogo libre, continuidad y certificados.
- `Academy/Usuario General/mis-cursos.html`: mis asignaciones por publicacion, prioridad, avance, evaluacion y certificado.
- `Academy/Usuario General/listado-cursos.html`: catalogo libre de contenidos reutilizables con filtros.
- `Academy/Usuario General/perfil-usuario.html`: centraliza identidad, cargos, visibilidad, actividad reciente, progreso, certificados y acciones de cuenta.
- `Academy/Usuario General/configuracion.html`: formulario funcional demo para datos personales, clave, idioma, notificaciones y preferencias.

## Vistas LMS multiempresa

- `Academy/Usuario Administrador/admin.html`: consola guiada por empresa, catalogo, contenido, audiencia, publicacion y reportes.
- `Academy/Usuario Administrador/admin-empresas.html`: organizaciones internas/externas, usuarios y cumplimiento por empresa.
- `Academy/Usuario Administrador/admin-catalogo.html`: contenido reusable, versionado y publicable.
- `Academy/Usuario Administrador/admin-curso-detalle.html`: detalle operativo de contenido reusable con versiones, lecciones, evaluacion, certificado, audiencias, publicaciones e impacto.
- `Academy/Usuario Administrador/admin-audiencias.html`: constructor de audiencias por empresa, area, cargo, grupo o usuario.
- `Academy/Usuario Administrador/admin-publicaciones.html`: instancia de contenido + audiencia + obligatoriedad + vigencia.
- `Academy/Usuario Administrador/admin-reportes.html`: cumplimiento, progreso, certificados y riesgos.

## Manejo funcional demo

- El menu de perfil se genera desde `academy-catalogo.js` y enlaza perfil, configuracion, inicio y cierre de sesion demo.
- Los formularios no recargan la pagina: muestran estado guardado y toast.
- Las acciones de certificado permiten ver modal, descargar demo y solicitar emision.
- Las acciones de tabla activan o desactivan registros con cambio visual.
- Las tabs de perfil, filtros de cursos y filtros basicos de tablas funcionan sin backend.
- Las acciones LMS `publish-demo`, `create-publication-demo`, `send-reminder-demo`, `export-report-demo`, `sync-organization-demo` y `preview-audience-demo` validan manejo de dominio sin API.
- Los tres login comparan entradas completas, no solo una tarjeta: correo, SSO y codigo temporal, con recuperacion de acceso y soporte.

## Convencion

- Usar componentes compartidos antes de crear nuevas clases.
- Mantener `academy-catalogo.css` como unico stylesheet en HTML para reducir dependencias por vista.
- Crear reglas nuevas en este orden: tokens, base, layout, componente, patron, modulo Academy.
- Reservar clases especificas de Academy para contenidos, lecciones, evaluaciones, certificados y administracion academica.
- Reutilizar `btn`, `card`, `field`, `data-table`, `table-actions`, `status-badge`, `metric`, `entity-*`, `learner-*`, `assignment-*` y `login-*`.
- Evitar nuevas reglas parche al final del CSS; consolidar en el archivo correspondiente.

## Alcance

Las vistas son HTML estatico con datos mock. Incluyen interacciones demo para validar manejo, pero no implementan reglas de negocio, persistencia, autenticacion, autorizacion ni integracion real con APIs.

## Academy

- Academy centraliza empresas, catalogos, contenidos reutilizables, lecciones, examenes, audiencias, publicaciones, reportes, certificados, usuarios y asignaciones.
- El participante inicia en un dashboard de aprendizaje: pendientes, obligatorios, recomendados, catalogo libre, continuidad y certificados.
- El administrador gestiona empresa, catalogo, contenido, audiencia, publicacion, reportes y certificados desde una consola guiada.
- La activacion de usuario se modela desde una fuente corporativa generica para no acoplar la libreria a sistemas externos.
