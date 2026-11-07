# Sitio madre de Cristian Neira · Revisión 02

## Estado

Candidata de revisión en rama de trabajo. No fusionar en main ni publicar en cneirav.cl sin aprobación explícita. Rama: review/sitio-madre-multimundo. Base: 0ced0e665e6c6f84d6de71918882180c3808f470, de https://github.com/crneirav-code/libros-cristian.

## Cambios

- Nueva portada editorial con las cuatro facetas y retrato multimundo proporcionado para esta revisión.
- Enlace verificado al canal IA El Final del Camino y tres videos reales.
- El index anterior se conserva como libros.html con sus fichas, muestras, compras e interacciones. El blog y sus seis artículos, portadas, muestras y demás activos existentes no se modifican.
- Se mantienen canonical, etiquetas sociales, identidad JSON-LD y seis libros estructurados, Google Analytics G-R5CEBQ8FCX y compatibilidad con #amazon, #sobre y #contacto.
- Sitemap conserva sus ocho URLs y añade libros.html. robots.txt y CNAME no se cambian.

## Pendiente antes de producción

1. Confirmar los enlaces oficiales de música CNeira. No se enlazaron homónimos.
2. Confirmar el mecanismo de publicación antes de fusionar. El acceso de escritura a crneirav-code/libros-cristian ya fue confirmado, pero esta revisión no autoriza despliegue ni cambios en main.
3. Comprobar proyectos en Vercel/Supabase si forman parte del despliegue real. El frontend actual usa un Cloudflare Worker y no hay evidencia de esos servicios en sus HTML principales.
4. Revisar y aprobar retrato/textos, y autorizar publicación en cneirav.cl. No hacer push a main ni cambiar DNS antes de ello.

## Verificación

JavaScript válido; scripts del catálogo conservados sin alteraciones; enlaces internos y recursos nuevos presentes; JSON-LD válido; canonical y GA4 preservados; anclas antiguas conservadas. QA en navegador del equivalente privado: escritorio y móvil 375 px, retrato cargado sin desbordamiento, menú y navegación, blog y ficha de catálogo probados. No se enviaron likes, calificaciones ni formularios al Worker de producción.

La revisión privada desactiva analítica e interacciones remotas y lleva noindex. Estas restricciones de revisión no se aplican a esta candidata de producción. La publicación debe usar el contenido de este checkout, nunca la salida privada de Sites.

## Reversión

Revertir la modificación de index.html y sitemap.xml y retirar los archivos nuevos devuelve la versión base. Los originales existentes permanecen en el historial Git y no se eliminan.
