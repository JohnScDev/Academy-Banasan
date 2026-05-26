# Banasan Academy - Libreria UI estatica

Catalogo estatico enfocado unicamente en Academy. La propuesta queda como base para aterrizar vistas, componentes y patrones reutilizables del flujo de aprendizaje y la administracion academica.

## Acceso

Abrir `index.html` en la raiz de esta carpeta o desplegar la carpeta completa en Netlify.

## Estructura

- `index.html`: entrada principal de la libreria, mapa de vistas y catalogo de componentes Academy.
- `Login/`: tres propuestas visuales de acceso inicial para Banasan Academy: corporativo limpio, split corporativo y banda institucional.
- `Academy/index.html`: seleccion de experiencia y resumen de componentes Academy.
- `Academy/Usuario General/`: vistas del participante.
- `Academy/Usuario Administrador/`: vistas administrativas.
- `MIGRACION-UI.md`: matriz de reemplazo entre rutas del proyecto base y vistas propuestas.
- `academy-catalogo.css`: entrypoint compatible para todos los HTML actuales.
- `academy-catalogo.js`: interacciones centralizadas de busqueda, filtros, tabs, formularios, menu de perfil, toasts, modales, certificados y acciones de tabla.
- `assets/css/`: base centralizada de estilos reutilizables.

## CSS centralizado

- `academy-catalogo.css`: entrypoint estable usado por todos los HTML actuales.
- `assets/css/00-tokens.css`: variables de color, espaciado, radios, sombras, fuente y reset minimo.
- `assets/css/01-base.css`: reglas base, iconos, utilidades simples y accesibilidad.
- `assets/css/02-layout.css`: shell, header, navegacion superior, selector de libreria, pagina y grillas.
- `assets/css/03-components.css`: botones, cards, formularios, tablas, badges, acciones por icono, filtros y metricas.
- `assets/css/04-patterns.css`: patrones compuestos reutilizables para entidades, cursos, aprendizaje, registros, paneles y listas.
- `assets/css/modules/academy.css`: reglas especificas de Academy, participante y administracion academica.
- `assets/css/05-login.css`: variantes visuales de login Academy.
- `assets/css/06-catalog.css`: catalogo de vistas y componentes.

Los archivos anteriores (`shared-base.css`, `academy-layout.css`, `academy-user.css`, `academy-admin.css`, `academy-catalog.css`, `login.css`) quedan como shims de compatibilidad. No deben recibir nuevas reglas salvo que sea para mantener una ruta heredada. Toda mejora nueva debe entrar en los archivos numerados o en `assets/css/modules/academy.css`.

## Patrones reutilizables Academy

- `section-nav`: navegacion horizontal interna para secciones de una entidad o curso.
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

Estos patrones deben usarse para futuras pantallas de participante o gestion antes de crear clases especificas nuevas.

## Vistas de registro administrativo

- `Academy/Usuario Administrador/admin-modulo-registro.html`
- `Academy/Usuario Administrador/admin-curso-registro.html`
- `Academy/Usuario Administrador/admin-leccion-registro.html`
- `Academy/Usuario Administrador/admin-examen-registro.html`: configuracion del examen asociado al curso, preguntas, respuestas, puntaje, nota minima e intentos.
- `Academy/Usuario Administrador/admin-usuario-activacion.html`: activacion de usuario proveniente de una fuente corporativa, parametrizacion Academy y asignacion de cursos existentes.

## Vistas enriquecidas de participante

- `Academy/Usuario General/perfil-usuario.html`: centraliza identidad, cargos, visibilidad, actividad reciente, progreso, certificados y acciones de cuenta.
- `Academy/Usuario General/configuracion.html`: formulario funcional demo para datos personales, clave, idioma, notificaciones y preferencias.

## Manejo funcional demo

- El menu de perfil se genera desde `academy-catalogo.js` y enlaza perfil, configuracion, inicio y cierre de sesion demo.
- Los formularios no recargan la pagina: muestran estado guardado y toast.
- Las acciones de certificado permiten ver modal, descargar demo y solicitar emision.
- Las acciones de tabla activan o desactivan registros con cambio visual.
- Las tabs de perfil, filtros de cursos y filtros basicos de tablas funcionan sin backend.

## Convencion

- Usar componentes compartidos antes de crear nuevas clases.
- Mantener `academy-catalogo.css` como unico stylesheet en HTML para reducir dependencias por vista.
- Crear reglas nuevas en este orden: tokens, base, layout, componente, patron, modulo Academy.
- Reservar clases especificas de Academy para cursos, lecciones, examenes, certificados y administracion academica.
- Reutilizar `btn`, `card`, `field`, `data-table`, `table-actions`, `status-badge`, `metric`, `entity-*`, `learner-*`, `assignment-*` y `login-*`.
- Evitar nuevas reglas parche al final del CSS; consolidar en el archivo correspondiente.

## Alcance

Las vistas son HTML estatico con datos mock. Incluyen interacciones demo para validar manejo, pero no implementan reglas de negocio, persistencia, autenticacion, autorizacion ni integracion real con APIs.

## Academy

- Academy centraliza capacitaciones, cursos, lecciones, examenes, certificados, usuarios y asignaciones.
- El participante consulta cursos, avanza por lecciones, presenta evaluaciones y descarga certificados.
- El administrador gestiona modulos academicos, cursos, estructura de lecciones, examenes, activacion de usuarios, asignaciones y seguimiento.
- La activacion de usuario se modela desde una fuente corporativa generica para no acoplar la libreria a sistemas externos.
