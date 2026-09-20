# Métodos Experimentales y Cognición Temprana

Sitio web académico estático en HTML/CSS/JS puro, preparado para publicarse directamente con GitHub Pages. No requiere Node, backend, API ni YouTube.

## Estructura
- `index.html`: página principal.
- `method.html`: plantilla dinámica de las cinco fichas.
- `styles.css`: paleta, layout, fondo, responsive y animaciones.
- `app.js`: contenido de los cinco métodos e interacción.
- `fondo.png`: fondo botánico.
- `thumb-es.svg` / `thumb-en.svg`: miniaturas de lecturas.
- `media/video-cognicion-temprana.mp4`: video local que se reproducirá en todas las fichas.
- `media/video-poster.svg`: portada del reproductor mientras carga el video.
- `.nojekyll`: evita procesamiento innecesario del sitio estático por Jekyll.

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
- Textos y enlaces: editar `METHODS` en `app.js`.
- Colores: editar las variables al inicio de `styles.css`.
- Video: reemplazar `media/video-cognicion-temprana.mp4` por el video del proyecto, conservando el nombre.
- Fondo: reemplazar `fondo.png` conservando ese nombre.
