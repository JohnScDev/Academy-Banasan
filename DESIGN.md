# Banasan Academy Design System

## Visual Register
Aplicacion operativa, clara y corporativa. La UI debe sentirse confiable, densa cuando administra informacion y amable cuando acompana al participante.

## Color Strategy
La base es azul Banasan con superficies claras y acentos semanticos.

| Rol | Token | Uso |
|---|---|---|
| Marca / accion primaria | `--primary` | botones principales, seleccion activa, links clave |
| Obligatorio | `--lms-mandatory` | cursos/publicaciones requeridas |
| Recomendado | `--lms-recommended` | rutas sugeridas |
| Libre | `--lms-free` | catalogo exploratorio |
| Cumplimiento / programado | `--lms-compliance` | vencimientos, programaciones, pendientes controlados |
| Publicado / completado | `--lms-published` | cursos publicados, certificados, exito |
| Borrador / neutro | `--lms-draft` | contenido sin publicar o estados pasivos |
| Externo | `--lms-external` | empresas/proveedores/audiencias externas |
| Riesgo | `--lms-risk` | incumplimiento, usuarios sin avance, errores |

## Typography
Poppins se conserva por continuidad de propuesta. La escala debe ser sobria: headings de 26-34px, labels de 12px con peso alto, cuerpo de 14-16px.

## Component Rules
- Usar cards solo para unidades repetibles o paneles de trabajo.
- El usuario general usa lanes: obligatorio, recomendado, libre, certificados.
- Administracion usa consola con workflow, tablas densas, filtros y acciones de dominio.
- Cada boton iconico debe tener `aria-label`.
- Estados visibles deben combinar texto y color.
- Nuevas vistas deben consumir `academy-catalogo.css` y `academy-catalogo.js`.

## Growth Rules
- Nuevos tokens semanticos van en `00-tokens.css`.
- Nuevos patrones LMS van en `07-lms-library.css`.
- JS de demo se centraliza en `academy-catalogo.js`.
- Vistas admin nuevas deben apuntar al modelo: empresa, catalogo, contenido, audiencia, publicacion, reporte, certificado.
