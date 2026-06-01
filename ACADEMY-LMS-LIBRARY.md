# Academy LMS Library Blueprint

## Objetivo
Convertir la propuesta en una libreria UI complementaria y reusable para reemplazar la interfaz del proyecto base con una plataforma LMS multiempresa.

## Entidades de producto
- Organizacion: empresa interna, externa o grupo empresarial.
- Catalogo: agrupador tematico para navegar contenidos reutilizables.
- Contenido: curso reusable con lecciones, recursos, evaluacion y certificado.
- Audiencia: empresa, area, grupo, cargo o usuario puntual.
- Publicacion: instancia que toma un contenido y lo asigna como obligatorio, recomendado o libre.
- Progreso: avance por publicacion, curso, audiencia y usuario.
- Certificado: resultado emitido, pendiente, revocado o descargable.

## Capas de la libreria
- `00-tokens.css`: marca, semantica LMS, spacing, radios, sombras.
- `01-base.css`: reset y base tipografica.
- `02-layout.css`: shell, grid y navegacion general.
- `03-components.css`: botones, cards, tablas, formularios.
- `04-patterns.css`: patrones compuestos reutilizables.
- `modules/academy.css`: reglas especificas del modulo Academy.
- `07-lms-library.css`: patrones LMS multiempresa.
- `academy-catalogo.js`: comportamiento demo centralizado.

## Vistas nuevas clave
- Login: `login-corporativo.html`, `login-split.html`, `login-banda.html` como tres propuestas pre-auth sin datos de usuario, rol, permisos ni contenido interno.
- Participante: `inicio-aprendizaje.html`.
- Participante asignado: `mis-cursos.html`.
- Participante exploracion: `listado-cursos.html`.
- Administracion: `admin.html` como consola LMS.
- Empresas: `admin-empresas.html`.
- Catalogo/contenido: `admin-catalogo.html`.
- Detalle de contenido: `admin-curso-detalle.html` como ficha reusable con versiones, estructura, evaluacion, certificado, audiencias, publicaciones e impacto.
- Registro de contenido: `admin-curso-registro.html` como alta inicial sin dependencia de jerarquias internas.
- Audiencias: `admin-audiencias.html`.
- Publicaciones: `admin-publicaciones.html`.
- Reportes: `admin-reportes.html`.

## Principio de crecimiento
Cuando se agregue una vista, primero definir si necesita un token, un componente o un patron. Solo crear clase de pagina si la necesidad no puede resolverse con la libreria existente.
