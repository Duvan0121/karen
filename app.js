const METHODS = {
  has: {
    number: '01',
    category: 'Percepción auditiva',
    title: 'Procedimiento de Succión de Amplitud Elevada',
    short: 'High-Amplitude Sucking (HAS)',
    summary: 'Registra cambios en la frecuencia o amplitud de succión mientras el bebé recibe estímulos auditivos contingentes.',
    what: 'Se coloca al bebé en una posición ligeramente inclinada y se le ofrece un chupete conectado a un transductor de presión que registra la actividad de succión. La presentación de sonidos se relaciona con esa respuesta para estudiar discriminación auditiva.',
    measure: 'Se utiliza para analizar la capacidad temprana de discriminar pequeños fragmentos de material auditivo; el procedimiento ha sido empleado durante los primeros meses de vida.',
    quoteWhat: '“permite analizar la capacidad para discriminar pequeños fragmentos de material auditivo”',
    quoteMeasure: '“El computador registra la frecuencia de succión a la vez que controla”',
    quoteSource: 'Barón Birchenall, Müller & Galindo (2014), pp. 76–77.',
    videoSrc: 'media/video-cognicion-temprana.mp4', videoTitle: 'Recurso audiovisual del método',
    esArticle: { title: 'Métodos experimentales de estudio de la percepción temprana del habla', url: 'https://revistas.unal.edu.co/index.php/psicologia/article/view/37716', desc: 'Revisión en español de técnicas para estudiar la percepción temprana del habla.' },
    enArticle: { title: 'High-Amplitude Sucking and Newborns', url: 'https://doi.org/10.1006/jecp.1996.2349', desc: 'Estudio sobre los mecanismos de aprendizaje de la contingencia entre succión y estímulos auditivos.' },
    recommend: { title: 'BCBL · babyLAB', url: 'https://www.bcbl.eu/es/infraestructura-y-equipamiento/babylab', reason: 'Muestra cómo laboratorios infantiles emplean medidas de succión, habituación y preferencia de mirada.' },
    fact: 'La técnica puede emplearse desde el nacimiento y fue diseñada para estudiar percepción auditiva sin requerir lenguaje hablado.',
    sources: [
      ['Lectura base', 'Barón Birchenall, Müller & Galindo (2014)', 'https://doi.org/10.15446/rcp.v23n1.37716'],
      ['Video', 'Oxford Learning Link — actividad sobre métodos con bebés', 'https://learninglink.oup.com/access/content/sedivy-2e-student-resources/sedivy2e-chapter-4-web-activity-7']
    ]
  },
  ipl: {
    number: '02', category: 'Lenguaje temprano', title: 'Paradigma Intermodal de Preferencia de Mirada', short: 'Intermodal Preferential Looking (IPLP)',
    summary: 'Mide cuánto tiempo mira el bebé hacia cada una de dos imágenes mientras escucha una etiqueta lingüística.',
    what: 'Se presentan dos estímulos visuales lado a lado y se nombra uno de ellos. La respuesta observada es la distribución del tiempo de fijación entre ambos estímulos.',
    measure: 'Permite estudiar comprensión emergente en fonología, semántica, sintaxis y morfología, incluso antes de que el bebé produzca lenguaje.',
    quoteWhat: '“se mide el tiempo de fijación de la mirada hacia cada uno de dos estímulos”',
    quoteMeasure: '“sirve para medir el conocimiento floreciente en fonología, semántica, sintaxis y morfología”',
    quoteSource: 'Barón Birchenall, Müller & Galindo (2014).',
    videoSrc: 'media/video-cognicion-temprana.mp4', videoTitle: 'Recurso audiovisual del método',
    esArticle: { title: 'Métodos basados en la duración de la mirada', url: 'https://journals.sagepub.com/doi/10.1174/021093912803758219', desc: 'Revisión en español sobre preferencia visual intermodal y habituación.' },
    enArticle: { title: 'Twenty-Five Years Using the IPLP', url: 'https://doi.org/10.1177/1745691613484936', desc: 'Revisión en inglés sobre el uso del IPLP en la investigación del lenguaje infantil.' },
    recommend: { title: 'BCBL · babyLAB', url: 'https://www.bcbl.eu/es/infraestructura-y-equipamiento/babylab', reason: 'Explica de manera accesible cómo se usa la preferencia de mirada para investigar lenguaje en bebés.' },
    fact: 'La técnica permite investigar aspectos de la comprensión lingüística en niños que todavía no han aprendido a hablar.',
    sources: [
      ['Lectura base', 'Mariscal et al. (2012)', 'https://doi.org/10.1174/021093912803758219'],
      ['Lectura complementaria', 'Golinkoff et al. (2013)', 'https://pubmed.ncbi.nlm.nih.gov/26172975/']
    ]
  },
  hab: {
    number: '03', category: 'Atención y aprendizaje', title: 'Paradigma de Habituación y Deshabituación', short: 'Habituation / Dishabituation',
    summary: 'Presenta repetidamente un estímulo y registra cómo cambia la duración de la mirada hasta introducir una condición nueva.',
    what: 'Durante la familiarización, el estímulo se repite y se registra el tiempo de mirada. Al alcanzar un criterio de habituación, se presenta un estímulo diferente para observar si la respuesta visual aumenta.',
    measure: 'Permite estudiar procesos de percepción, discriminación, memoria y atención, usando la disminución de la respuesta y su recuperación ante un cambio como indicadores conductuales.',
    quoteWhat: '“la habituación (en la variante llamada ‘violación de expectativas’)”',
    quoteMeasure: '“utilizan la mirada de los bebés y niños pequeños como variable dependiente”',
    quoteSource: 'Mariscal et al. (2012).',
    videoSrc: 'media/video-cognicion-temprana.mp4', videoTitle: 'Recurso audiovisual del método',
    esArticle: { title: 'Los métodos basados en la duración de la mirada', url: 'https://dialnet.unirioja.es/servlet/articulo?codigo=4054066', desc: 'Revisión crítica en español sobre habituación, violación de expectativas y preferencia intermodal.' },
    enArticle: { title: 'Using Habituation of Looking Time to Assess Mental Processes in Infancy', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2922773/', desc: 'Guía metodológica en inglés sobre cómo implementar e interpretar la habituación visual.' },
    recommend: { title: 'Developmental Labs · Open resources', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2922773/', reason: 'Ofrece criterios y advertencias metodológicas útiles para diseñar estudios de habituación.' },
    fact: 'Una mayor mirada ante un estímulo nuevo no tiene una única interpretación: familiaridad y novedad pueden competir según el momento de la exposición.',
    sources: [
      ['Lectura base', 'Mariscal et al. (2012)', 'https://doi.org/10.1174/021093912803758219'],
      ['Lectura metodológica', 'Oakes (2010)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2922773/']
    ]
  },
  voe: {
    number: '04', category: 'Expectativas', title: 'Paradigma de Expectativa Violada / Eventos Inesperados', short: 'Violation of Expectation (VoE)',
    summary: 'Contrasta eventos esperados e inesperados y observa cambios en el tiempo de mirada que acompañan la detección de una incongruencia.',
    what: 'Después de una fase en la que el bebé puede formar una expectativa, se presentan eventos que conservan o contradicen esa regularidad. Se compara la conducta visual entre condiciones.',
    measure: 'Se usa para investigar respuestas a resultados que no coinciden con una expectativa, incluyendo procesos perceptivos y representacionales en la cognición temprana.',
    quoteWhat: '“la mayoría de las investigaciones se han llevado a cabo ... utilizando la mirada ... como variable dependiente”',
    quoteMeasure: '“habituation (en la variante llamada ‘violación de expectativas’)”',
    quoteSource: 'Mariscal et al. (2012).',
    videoSrc: 'media/video-cognicion-temprana.mp4', videoTitle: 'Recurso audiovisual del método',
    esArticle: { title: 'Los métodos basados en la duración de la mirada', url: 'https://journals.sagepub.com/doi/10.1174/021093912803758219', desc: 'La revisión analiza la variante de habituación conocida como violación de expectativas.' },
    enArticle: { title: 'Violations of expectation trigger infants to search for explanations', url: 'https://doi.org/10.1016/j.cognition.2021.104942', desc: 'Investigación en inglés sobre exploración posterior a eventos que violan expectativas.' },
    recommend: { title: 'Wiley · Developmental Science', url: 'https://onlinelibrary.wiley.com/doi/full/10.1111/desc.12452', reason: 'Presenta una discusión metodológica sobre cómo interpretar medidas de mirada en estudios de violación de expectativas.' },
    fact: 'La medida de tiempo de mirada ante una violación no siempre separa con facilidad “sorpresa” de una simple preferencia por la novedad; el diseño experimental importa.',
    sources: [
      ['Lectura base', 'Mariscal et al. (2012)', 'https://doi.org/10.1174/021093912803758219'],
      ['Investigación complementaria', 'Perez & Feigenson (2022)', 'https://doi.org/10.1016/j.cognition.2021.104942']
    ]
  },
  fn: {
    number: '05', category: 'Familiaridad y novedad', title: 'Paradigma de Familiaridad vs. Novelty', short: 'Familiarity–Novelty Preference',
    summary: 'Compara la exploración de un estímulo familiar con la de uno novedoso y considera cómo la preferencia cambia con la exposición.',
    what: 'Tras una fase de exposición a un estímulo, se presentan conjuntamente un estímulo familiar y otro nuevo. Se observa la distribución del tiempo de mirada hacia ambos.',
    measure: 'Permite estudiar reconocimiento, aprendizaje y cambios en la exploración visual; la preferencia puede desplazarse de familiaridad hacia novedad a medida que se acumula experiencia.',
    quoteWhat: '“infants prefer to look at novel compared to familiar stimuli”',
    quoteMeasure: '“familiarity and novelty preferences change across multiple timescales”',
    quoteSource: 'Oakes (2010) y Perone & Spencer (2013).',
    videoSrc: 'media/video-cognicion-temprana.mp4', videoTitle: 'Recurso audiovisual del método',
    esArticle: { title: 'Los métodos basados en la duración de la mirada', url: 'https://dialnet.unirioja.es/servlet/articulo?codigo=4054066', desc: 'La revisión discute la lógica de la habituación y las preferencias de mirada.' },
    enArticle: { title: 'Autonomous visual exploration creates developmental change…', url: 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2013.00648/full', desc: 'Artículo en inglés y acceso abierto sobre el cambio de familiaridad hacia búsqueda de novedad.' },
    recommend: { title: 'Frontiers in Psychology', url: 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2013.00648/full', reason: 'Presenta una discusión clara sobre cómo la experiencia puede modificar la preferencia por familiaridad o novedad.' },
    fact: 'En tareas visuales, una preferencia por familiaridad puede aparecer con exposiciones breves y una preferencia por novedad con exposiciones más prolongadas.',
    sources: [
      ['Lectura metodológica', 'Oakes (2010)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2922773/'],
      ['Artículo complementario', 'Perone & Spencer (2013)', 'https://doi.org/10.3389/fpsyg.2013.00648']
    ]
  }
};

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

function articleCard(article, lang) {
  const isSpanish = lang.toLowerCase().startsWith('es');
  const thumb = isSpanish ? 'thumb-es.svg' : 'thumb-en.svg';
  const alt = isSpanish ? 'Miniatura de lectura científica en español' : 'Miniatura de lectura científica en inglés';
  return `<a class="article-card" href="${article.url}" target="_blank" rel="noopener" aria-label="Abrir ${escapeHTML(lang.toLowerCase())}: ${escapeHTML(article.title)}">
    <div class="article-thumb">
      <img src="${thumb}" alt="${alt}" loading="lazy" />
      <span class="thumb-link-label">Abrir ↗</span>
    </div>
    <div class="article-lang">Lectura ${escapeHTML(lang)}</div>
    <strong>${escapeHTML(article.title)}</strong>
    <p>${escapeHTML(article.desc)}</p>
  </a>`;
}

function localVideoMarkup(method) {
  const src = method.videoSrc || 'media/video-cognicion-temprana.mp4';
  const poster = 'media/video-poster.svg';
  return `<div class="video-shell" data-video-shell>
    <video class="video-frame local-video" controls playsinline preload="metadata" poster="${poster}" aria-label="${escapeHTML(method.videoTitle || 'Recurso audiovisual')}">
      <source src="${src}" type="video/mp4" />
      Tu navegador no puede reproducir este video HTML5.
    </video>
    <div class="video-local-fallback" data-video-fallback hidden>
      <div class="video-fallback-icon" aria-hidden="true">▶</div>
      <strong>Video local pendiente de incorporar</strong>
      <p>Coloca el archivo <code>video-cognicion-temprana.mp4</code> dentro de la carpeta <code>media/</code> del proyecto. No depende de YouTube y es compatible con GitHub Pages.</p>
    </div>
    <p class="video-note">Recurso audiovisual local del proyecto. Formato recomendado: MP4 (H.264 + AAC) para una reproducción amplia en navegadores.</p>
  </div>`;
}

function renderMethod(method) {
  document.title = `${method.title} · Métodos Experimentales`;
  const app = document.getElementById('app');
  app.innerHTML = `<main class="method-shell">
    <a class="back-link reveal-up" href="index.html">← Volver a métodos</a>
    <header class="method-hero reveal-up delay-1">
      <span class="chip">${method.number} · ${escapeHTML(method.category)}</span>
      <h1>${escapeHTML(method.title)}</h1>
      <p>${escapeHTML(method.summary)}</p>
    </header>

    <div class="content-stack">
      <section class="block reveal-up delay-1" aria-label="Concepto y multimedia">
        <article class="panel concept-panel">
          <div class="panel-heading">
            <div>
              <span class="mini-kicker">Información esencial</span>
              <h2>01 · Concepto</h2>
            </div>
            <span class="panel-mark" aria-hidden="true">01</span>
          </div>
          <p class="concept-summary">${escapeHTML(method.summary)}</p>
          <div class="concept-info" data-concept-info>
            <div class="action-row">
              <button class="info-trigger" type="button" data-info="what" aria-expanded="false" aria-controls="concept-popover-${method.number}">
                <span>Qué es</span><small>Cómo funciona el método</small>
              </button>
              <button class="info-trigger" type="button" data-info="measure" aria-expanded="false" aria-controls="concept-popover-${method.number}">
                <span>Qué mide</span><small>Qué permite estudiar</small>
              </button>
            </div>
            <section id="concept-popover-${method.number}" class="concept-popover" data-concept-popover hidden aria-live="polite"></section>
          </div>
        </article>
        <article class="panel">
          <h2>02 · Video / recurso audiovisual</h2>
          <p class="video-note">Recurso audiovisual local integrado en el proyecto.</p>
          ${localVideoMarkup(method)}
        </article>
      </section>

      <section class="block reveal-up delay-2" aria-label="Lecturas y lúdica">
        <article class="panel">
          <h2>03 · Lecturas científicas</h2>
          <p>Dos lecturas complementarias, una en español y otra en inglés, enlazadas directamente.</p>
          <div class="article-list">${articleCard(method.esArticle, 'ESPAÑOL')}${articleCard(method.enArticle, 'ENGLISH')}</div>
        </article>
        <article class="panel">
          <h2>04 · Actividad lúdica</h2>
          <div class="dev-box">
            <div><span class="dev-badge">EN DESARROLLO</span><p>Espacio reservado para un juego, quiz o preguntas de debate relacionadas con este método.</p></div>
          </div>
        </article>
      </section>

      <section class="block reveal-up delay-3" aria-label="Datos adicionales">
        <article class="panel">
          <h2>05 · Página web recomendada</h2>
          <p><strong>${escapeHTML(method.recommend.title)}</strong></p>
          <p>${escapeHTML(method.recommend.reason)}</p>
          <a class="recommendation-link" href="${method.recommend.url}" target="_blank" rel="noopener">Visitar recurso ↗</a>
        </article>
        <article class="panel fact-box">
          <div>
            <div class="fact-icon" aria-hidden="true">✦</div>
            <h2 style="margin-top:16px;">06 · Dato curioso</h2>
            <p>${escapeHTML(method.fact)}</p>
          </div>
          <div class="refline">Método: ${escapeHTML(method.short)}</div>
        </article>
      </section>

      <section class="method-sources reveal-up" aria-label="Fuentes del método">
        <h2>Fuentes consultadas para esta ficha</h2>
        <ul>${method.sources.map(item => `<li><strong>${escapeHTML(item[0])}:</strong> <a href="${item[2]}" target="_blank" rel="noopener">${escapeHTML(item[1])}</a></li>`).join('')}</ul>
      </section>
    </div>
  </main>`;
}

const params = new URLSearchParams(window.location.search);
const id = params.get('id');
if (document.body.classList.contains('method-page')) {
  if (METHODS[id]) renderMethod(METHODS[id]);
  else window.location.href = 'index.html';
}

// Concept panel interaction model:
// - Hover a button: show the matching panel.
// - Move from button to the panel: it stays open because both belong to concept-info.
// - Leave the whole concept-info area: closes unless the panel is pinned by click.
// - Click a button: pins that panel; clicking the same button again closes it.
// - Hover another button: switch to that content and release the previous pin.
function setupConceptInfo() {
  document.querySelectorAll('[data-concept-info]').forEach(area => {
    const buttons = [...area.querySelectorAll('.info-trigger')];
    const popover = area.querySelector('[data-concept-popover]');
    if (!popover || !buttons.length) return;

    const method = METHODS[id];
    let activeType = null;
    let pinned = false;

    const content = {
      what: {
        label: 'Descripción preparada para cita',
        quote: method.quoteWhat,
        body: method.what
      },
      measure: {
        label: 'Qué permite estudiar',
        quote: method.quoteMeasure,
        body: method.measure
      }
    };

    function render(type) {
      const data = content[type];
      if (!data) return;
      activeType = type;
      popover.innerHTML = `
        <div class="concept-popover-head">
          <div>
            <span class="quote-label">${escapeHTML(data.label)}</span>
            <h3>${type === 'what' ? 'Qué es' : 'Qué mide'}</h3>
          </div>
          <span class="popover-badge">${method.number}</span>
        </div>
        <p class="quote">${escapeHTML(data.quote)}</p>
        <p class="source-mini">${escapeHTML(method.quoteSource)}</p>
        <p>${escapeHTML(data.body)}</p>`;
      popover.hidden = false;
      buttons.forEach(btn => btn.setAttribute('aria-expanded', String(btn.dataset.info === type)));
    }

    function close() {
      activeType = null;
      pinned = false;
      popover.hidden = true;
      popover.innerHTML = '';
      buttons.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
    }

    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        const type = btn.dataset.info;
        if (activeType !== type || pinned) {
          pinned = false;
          render(type);
        }
      });
      btn.addEventListener('focus', () => render(btn.dataset.info));
      btn.addEventListener('click', () => {
        const type = btn.dataset.info;
        if (pinned && activeType === type) {
          close();
          return;
        }
        pinned = true;
        render(type);
      });
    });

    area.addEventListener('mouseleave', () => {
      if (!pinned) close();
    });
  });
}

function setupLocalVideos() {
  document.querySelectorAll('[data-video-shell]').forEach(shell => {
    const video = shell.querySelector('.local-video');
    const fallback = shell.querySelector('[data-video-fallback]');
    if (!video || !fallback) return;
    video.addEventListener('error', () => {
      video.hidden = true;
      fallback.hidden = false;
    });
  });
}

if (document.body.classList.contains('method-page')) {
  setupConceptInfo();
  setupLocalVideos();
}
