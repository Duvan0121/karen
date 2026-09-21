# Métodos Experimentales y Cognición Temprana

Sitio web académico estático en HTML/CSS/JS puro, preparado para publicarse directamente con GitHub Pages. No requiere Node, backend, API ni YouTube.

## Estructura
- `index.html`: página principal.
- `method.html`: plantilla dinámica de las cinco fichas.
- `styles.css`: paleta, layout, fondo, responsive y animaciones.
- `app.js`: contenido de los cinco métodos (`METHODS`), lista de referencias (`REFERENCES`) e interacción.
- `fondo.png`: fondo botánico.
- `media/`: imágenes oficiales por método y SVG de respaldo (ver «Imágenes por método»).
- `media/video-cognicion-temprana.mp4`: video local que se reproducirá en todas las fichas.
- `media/video-poster.svg`: portada del reproductor mientras carga el video.
- `.nojekyll`: evita procesamiento innecesario del sitio estático por Jekyll.

## Contenido
Todo el texto de las cinco fichas (descripción, «Qué es», «Qué mide», lecturas en español e inglés, sitio recomendado y dato curioso) proviene del documento Word «Página Web (psicología del desarrollo)». La lista completa de referencias aparece al final de la página principal.

- **Actividad interactiva (04):** en las cinco fichas es una imagen que abre otra página al hacer clic. La URL de cada método está en `activityUrl` dentro de `METHODS` (por ahora `https://www.reto01.com` … `https://www.reto05.com`).
- **Video de referencia:** cada ficha muestra el video local y, debajo, el enlace al video de YouTube indicado en el Word.
- **Dato curioso:** el Word no trae este apartado; cada dato se redactó con frases del propio Word.

## Imágenes por método
Todas viven en `media/` y se nombran `<número><TIPO>.<extensión>`, donde el número es el del método (01–05):

| Archivo | Se usa en |
|---|---|
| `01ES` | 03 · Lectura en español |
| `01EN` | 03 · Lectura en inglés |
| `01WEB` | 05 · Miniatura de la página web recomendada |
| `01RETO` | 04 · Imagen de la actividad interactiva |

La extensión puede ser `jpg`, `png`, `jpeg` o `webp` (se prueban en ese orden), y las mayúsculas del nombre importan en GitHub Pages. Mientras una imagen no exista se muestra un SVG de respaldo (`media/thumb-es.svg`, `media/thumb-en.svg`, `media/thumb-web.svg`, `media/reto-placeholder.svg`).

## Video local
El sitio ya no usa YouTube. Coloca tu video en `media/video-cognicion-temprana.mp4`. El reproductor usa HTML5 `<video>`, por lo que funciona en GitHub Pages como un recurso estático.

Se recomienda MP4 con video H.264 y audio AAC. Mantén el archivo por debajo de 100 MiB para evitar el límite duro de tamaño de archivo de GitHub. GitHub recomienda además mantener los repositorios y sitios de Pages relativamente pequeños.

## Ventana “Qué es / Qué mide”
La información ya no depende de un scroll interno. Hay una única ventana dinámica debajo de los dos botones: al abrirse crece automáticamente según la cantidad de texto, sin una altura máxima fija, y la página completa se puede desplazar.

- Hover sobre un botón: muestra su contenido.
- Mover el cursor desde el botón al panel: el contenido permanece abierto.
- Salir del área completa: se cierra si no estaba fijado.
- Clic en un botón: fija el contenido.
- Clic otra vez en el mismo botón: lo cierra.
- Hover sobre el otro botón: cambia al otro contenido y libera la fijación anterior.

## Publicar en GitHub Pages
1. Sube el contenido de esta carpeta al repositorio.
2. Ve a **Settings → Pages**.
3. Selecciona la rama que contiene estos archivos y la carpeta raíz (`/`).
4. Guarda la configuración y espera a que GitHub Pages publique el sitio.

No se requieren pasos de compilación porque es un sitio estático. GitHub Pages puede publicar directamente archivos HTML, CSS y JavaScript desde un repositorio.

## Personalización rápida
- Textos y enlaces: editar `METHODS` (fichas, incluido `activityUrl` de cada reto) y `REFERENCES` (referencias completas) en `app.js`.
- Colores: editar las variables al inicio de `styles.css`.
- Video: reemplazar `media/video-cognicion-temprana.mp4` por el video del proyecto, conservando el nombre.
- Fondo: reemplazar `fondo.png` conservando ese nombre.
