# Sitio madre de Cristian Neira · Revisión 03

## Estado

Versión preparada para producción tras autorización explícita del propietario. No se modifican configuraciones de despliegue ni integraciones. Rama: review/sitio-madre-multimundo. Base: 0ced0e665e6c6f84d6de71918882180c3808f470, de https://github.com/crneirav-code/libros-cristian.

## Cambios

- Nueva portada editorial con las cuatro facetas y retrato multimundo proporcionado para esta revisión.
- Enlace verificado al canal IA El Final del Camino y tres videos reales.
- El index anterior se conserva como libros.html con sus fichas, muestras, compras e interacciones. El blog y sus seis artículos, portadas, muestras y demás activos existentes no se modifican.
- Se mantienen canonical, etiquetas sociales, identidad JSON-LD y seis libros estructurados, Google Analytics G-R5CEBQ8FCX y compatibilidad con #amazon, #sobre y #contacto.
- Sitemap conserva sus ocho URLs y añade libros.html. robots.txt y CNAME no se cambian.

## Verificaciones de publicación

1. Verificar reproducción real de los tres singles en el entorno del visitante antes de publicar. Identidad, títulos, duraciones e incorporación oficial ya verificados; el navegador de prueba no consiguió reproducir audio.
2. Mantener el mecanismo existente de GitHub Pages, sin cambiar DNS, CNAME ni configuración de servicios.
3. Comprobar proyectos en Vercel/Supabase si forman parte del despliegue real. El frontend actual usa un Cloudflare Worker y no hay evidencia de esos servicios en sus HTML principales.
4. Verificar el commit desplegado y las rutas principales de cneirav.cl tras la publicación autorizada.

## Verificación

JavaScript válido; scripts del catálogo conservados sin alteraciones; enlaces internos y recursos nuevos presentes; JSON-LD válido; canonical y GA4 preservados; anclas antiguas conservadas. QA en navegador del equivalente privado: escritorio y móvil 375 px, retrato cargado sin desbordamiento, menú y navegación, blog y ficha de catálogo probados. No se enviaron likes, calificaciones ni formularios al Worker de producción.

La revisión privada desactiva analítica e interacciones remotas y lleva noindex. Estas restricciones de revisión no se aplican a esta candidata de producción. La publicación debe usar el contenido de este checkout, nunca la salida privada de Sites.

## Reversión

Revertir la modificación de index.html y sitemap.xml y retirar los archivos nuevos devuelve la versión base. Los originales existentes permanecen en el historial Git y no se eliminan.

## Música · Revisión 03

Selección exacta solicitada: Llegué Tarde a Tu Abrazo (rb6TprO4W1U, 3:23), Cuando Se Vuelve Al Corazón (PAXf9qPPaMk, 3:18) y Fuiste Mentiras (N5GXpwvHaLM, 3:15). No confundir esta última con Fuiste Mentira, que es otro tema.

Fuentes: canal https://music.youtube.com/channel/UCczNfnshiwCSEid5pRrNjSw y playlist https://music.youtube.com/playlist?list=OLAK5uy_mNqJ3a_vXJj_E26p0Ry1U5UHUW2Prx5_k . Las tres páginas oficiales ofrecen Compartir → Incorporar. Se emplean iframes oficiales de YouTube en modo de privacidad mejorada; no se descarga ni aloja audio.

El reproductor se carga solo al seleccionar una canción. Solo hay un iframe activo, con controles oficiales, cambio de canción, botón Detener, estados accesibles y enlaces alternativos a YouTube Music. La incorporación está sujeta a https://developers.google.com/youtube/terms/api-services-terms-of-service .

QA: los tres iframes cargan títulos/canal/duraciones correctos; selección, cambio y parada comprobados. Pantalla móvil de 375 px sin desbordamiento; reproductor de 330 × 220 px. En este navegador las canciones quedaron cargando en 0:00 o mostraron error genérico en la vista oficial de YouTube. No apareció prohibición expresa del propietario. No se afirma reproducción de audio exitosa. Los errores 101/150 y otros fallos tienen aviso y alternativa directa.
