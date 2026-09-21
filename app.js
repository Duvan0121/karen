// Contenido tomado del documento “Página Web (psicología del desarrollo)”.
// Texto de cada método: descripción, qué es, qué mide, video, lecturas,
// sitio recomendado y enlace de la actividad.



// Imágenes oficiales por método, en media/:  <número><TIPO>.<ext>
//   01ES   → miniatura de la lectura en español
//   01EN   → miniatura de la lectura en inglés
//   01WEB  → miniatura de la página web recomendada
//   01RETO → imagen de la actividad interactiva
//
// La extensión puede ser jpg, png, jpeg o webp.
// Si todavía no existe la imagen, se muestra un SVG de respaldo.

const MEDIA_EXTS = ['jpg', 'png', 'jpeg', 'webp'];


const METHODS = {

  // =========================================================
  // MÉTODO 01 — HAS
  // =========================================================

  has: {
    number: '01',
    category: 'Percepción auditiva',
    title: 'Procedimiento de Succión de Amplitud Elevada',
    short: 'High-Amplitude Sucking (HAS)',

    summary:
      'El procedimiento de succión de amplitud elevada (High-Amplitude Sucking - HAS) se basa en la medición de la tasa de succión no nutritiva del infante.',

    description:
      'Se le proporciona al bebé un chupete especial conectado a un traductor de presión que registra la fuerza y frecuencia de cada movimiento del chupete aprovechando la tendencia natural del bebé al modificar su conducta en función del estímulo. " (Barón Birchenall et al., 2014, p. 77)',

    what:
      'Para entenderlo más fácil, le damos un chupete especial a un bebé, normalmente de no más de 4 meses; este chupón debe estar conectado a una computadora. Cada vez que el bebé chupe con más fuerza de la normal, el computador produce un sonido (por ejemplo, la sílaba “ma”). Al principio el bebé chupa con más fuerza de la normal porque el sonido es nuevo y esto llama su atención. Pero como el sonido se repite, la fuerza del chupete baja, ya que ha perdido el interés. En ese momento se le cambia el sonido (por ejemplo, a “la”). Si el bebé se da cuenta de este cambio, nuevamente empezará a ejercer fuerza sobre el chupete y su interés habrá vuelto. Así es como científicamente se sustenta la diferenciación de sonidos de habla en recién nacidos.',

    measure:
      'De manera teórica, este procedimiento permite estudiar las capacidades discriminativas tempranas del infante frente a los sonidos del habla. Su principal objetivo es determinar si los bebés son capaces de notar diferencias sutiles entre estímulos acústicos y fonéticos, lo cual constituye una oportunidad para comprender cómo procesan la información lingüística antes de aprender a hablar (Barón Birchenall et al., 2014, p. 78).',

    videoId: 'WvM5bqUsbu8',
    videoTitle: 'Recurso audiovisual del método',

    videoRef: {
      url: 'https://www.youtube.com/watch?v=WvM5bqUsbu8',
      label: 'Tuning In to Speech Sounds'
    },

    esArticle: {
      title: 'Métodos experimentales de estudio de la percepción temprana del habla',
      url: 'https://revistas.unal.edu.co/index.php/psicologia/article/view/37716/45634',
      desc: 'Barón Birchenall, Müller & Galindo (2014) · Revista Colombiana de Psicología, 23(1), 73–94.'
    },

    enArticle: {
      title: 'Attention control in preterm and term 5-month-old infants: Cross-task stability increases with gestational age',
      url: 'https://onlinelibrary.wiley.com/doi/pdf/10.1111/infa.12574',
      desc: 'Perra, Winstanley, Sperotto & Gattis (2024) · Infancy, 29(3), 437–458.'
    },

    recommend: {
      title: 'ZERO TO THREE · Early Brain Development',
      url: 'https://www.zerotothree.org/early-brain-development/',
      reason:
        'Conecta la teoría con la práctica: descubre por qué los primeros días de vida son cruciales para el desarrollo del cerebro y cómo lo miden los científicos.'
    },

    fact:
      'Los bebés succionan con más fuerza si escuchan el idioma de su madre que uno extranjero. Investigaciones con este método demostraron que los recién nacidos (con solo horas de vida) pueden discriminar su lengua materna de otros idiomas porque recuerdan el ritmo y la melodía musical de las voces que oyeron desde el útero materno.',

    activityUrl:
      'https://es.educaplay.com/recursos-educativos/30668483-has_succion_de_amplitud_elevada.html'
  },


  // =========================================================
  // MÉTODO 02 — IPL
  // =========================================================

  ipl: {
    number: '02',
    category: 'Lenguaje temprano',
    title: 'Paradigma Intermodal de Preferencia de Mirada',
    short: 'Intermodal Preferential Looking (IPLP)',

    summary:
      'Presenta al bebé dos estímulos visuales simultáneos, acompañados de un estímulo auditivo central, y registra hacia cuál dirige su mirada.',

    description:
      'De acuerdo con Barón Birchenall et al. (2014), el paradigma intermodal de preferencia de mirada “consiste en presentar al infante dos estímulos visuales simultáneos, generalmente en dos pantallas o a izquierda y derecha de una pantalla única, acompañados de un estímulo auditivo central”, evaluando su capacidad de integración audiovisual al medir si su atención visual se dirige preferentemente hacia la opción congruente con el sonido reproducido.',

    what:
      'Este paradigma experimental se centra en la presentación simultánea de estímulos visuales emparejados con una fuente sonora común. De acuerdo con Barón Birchenall et al. (2014, p. 83), el método “consiste en presentar al bebé dos estímulos visuales simultáneos, generalmente en dos pantallas o a izquierda y derecha de una pantalla única, acompañados de un estímulo auditivo central”, lo cual permite presentar una situación controlada donde se observa la reacción natural del bebé ante la sincronía o asincronía de los estímulos del entorno.',

    measure:
      'A través del registro del tiempo que el bebé fija su mirada en cada opción, la técnica evalúa de manera indirecta el procesamiento cognitivo y lingüístico temprano. Según Barón Birchenall et al. (2014, p. 83), el objetivo principal es determinar si el bebé es capaz de realizar una “integración audiovisual”, midiendo su preferencia visual hacia el estímulo que resulta congruente con el sonido que está percibiendo en ese preciso instante.',

    videoId: 'T_SkGjh4YH4',
    videoTitle: 'Recurso audiovisual del método',

    videoRef: {
      url: 'https://www.youtube.com/watch?v=T_SkGjh4YH4',
      label: 'Labvanced (2025) · The Preferential Looking Paradigm | Quick Overview'
    },

    esArticle: {
      title: 'Desarrollo de la percepción intersensorial',
      url: 'https://www.aacademica.org/mauricio.martinez/20.pdf',
      desc: 'Documento alojado en Aacademica.org.'
    },

    enArticle: {
      title: 'Developmental changes in audio-visual speech integration during the first year of life in infants at elevated and typical likelihood of autism',
      url: 'https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0347046',
      desc: 'Capelli et al. (2026) · PLOS ONE.'
    },

    recommend: {
      title: 'MIT Early Childhood Cognition Laboratory (Baby Lab)',
      url: 'https://eccl.mit.edu/journal-publications',
      reason:
        'Descubre de forma visual cómo la ciencia descifra los misterios de la mente infantil a través del juego y la observación.'
    },

    fact:
      'En un experimento clásico, se les dio a chupar un chupón con texturas (con relieve) sin dejar que lo vieran. Al quitarles el chupón y mostrarles dos imágenes (uno liso y uno con relieve), los bebés miraron significativamente más tiempo el chupón con relieve. Ya sabían cómo se "veía" lo que habían sentido.',

    activityUrl:
      'https://es.educaplay.com/recursos-educativos/30668631-paradigma_intermodal_de_preferencia_de_mirada.html'
  },


  // =========================================================
  // MÉTODO 03 — HAB
  // =========================================================

  hab: {
    number: '03',
    category: 'Atención y aprendizaje',
    title: 'Paradigma de Habituación y Deshabituación',
    short: 'Habituation–Dishabituation',

    summary:
      'El método de habituación y deshabituación presenta repetidamente un estímulo hasta que disminuye la atención visual y luego introduce uno nuevo.',

    description:
      'El método de habituación y deshabituación presenta repetidamente un estímulo hasta que disminuye la atención visual y luego introduce uno nuevo. “La atención visual a un estímulo disminuirá con la presentación repetida y reiterada del mismo” y, ante la novedad, “la atención se renovará” (Mariscal et al., 2012, p. 279).',

    what:
      'En este paradigma, la primera fase corresponde a la habituación, durante la cual el bebé observa repetidamente un estímulo hasta que disminuye su atención hacia él. Posteriormente se presenta un estímulo diferente durante la fase de deshabituación o prueba. En la variante denominada Paradigma de Violación de Expectativas, el artículo señala que “la fase de deshabituación de los experimentos suele incluir estímulos que difieren ligeramente de los de la fase de habituación pero que violan las leyes físicas de los objetos” (Mariscal et al., 2012, p. 279). De esta manera, el aumento del tiempo de mirada hacia el estímulo nuevo o inesperado puede utilizarse para estudiar la respuesta del bebé ante una situación diferente a la previamente observada.',

    measure:
      'Por tanto, el método mide principalmente la conducta visual del bebé, especialmente los cambios en la duración de la mirada o fijación ante los estímulos. Las diferencias en la fijación de la mirada, según describen los autores al revisar este tipo de investigaciones, se han interpretado como “sorpresa, creencia, expectativa, darse cuenta o éxito” (Mariscal et al., 2012, p. 279). En particular, el paradigma de violación de expectativas “suele tener como objeto el estudio de la comprensión temprana de las propiedades físicas de los objetos” (Mariscal et al., 2012, p. 279). Por ello, mediante la comparación de la atención durante la habituación y la deshabituación, se busca determinar si el bebé detecta diferencias entre los estímulos y, dependiendo del diseño experimental, estudiar aspectos de su comprensión temprana de los objetos y sus propiedades físicas.',

    videoId: 'dlilZh60qdA',
    videoTitle: 'Recurso audiovisual del método',

    videoRef: {
      url: 'https://www.youtube.com/watch?v=dlilZh60qdA',
      label: 'powerbabies (2011) · Infant Looking Time Habituation'
    },

    esArticle: {
      title: 'Los métodos basados en la duración de la mirada: ¿una ventana a la cognición temprana?',
      url: 'https://doi.org/10.1174/021093912803758219',
      desc: 'Mariscal, Casla, Rujas & Aguado-Orea (2012) · Studies in Psychology, 33(3), 277–292.'
    },

    enArticle: {
      title: 'Individual differences in processing speed and curiosity explain infant habituation and dishabituation performance',
      url: 'https://onlinelibrary.wiley.com/doi/epdf/10.1111/desc.13460',
      desc: 'Poli et al. (2024) · Developmental Science, 27, e13460.'
    },

    recommend: {
      title: 'Open Yale Courses · PSYC 110, Lección 5',
      url: 'https://oyc.yale.edu/psychology/psyc-110/lecture-5',
      reason:
        'Clase del curso PSYC 110 de Open Yale Courses: “¿Cómo es ser un bebé? El desarrollo del pensamiento”.'
    },

    fact:
      'El dato: Es el "detector de mentiras" del aburrimiento visual en bebés. Este método reveló que los bebés no solo se aburren (habituación), sino que si les muestras una categoría nueva (por ejemplo, pasar de ver fotos de perros a ver la de un gato) su ritmo cardíaco cambia y vuelven a mirar fijamente (deshabituación). Gracias a esto sabemos que los bebés de pocos meses ya categorizan el mundo de forma lógica.',

    activityUrl:
      'https://es.educaplay.com/recursos-educativos/30668656-paradigma_habituacion_deshabituacion.html'
  },


  // =========================================================
  // MÉTODO 04 — VoE
  // =========================================================

  voe: {
    number: '04',
    category: 'Expectativas',
    title: 'Paradigma de Expectativa Violada / Eventos Inesperados',
    short: 'Violation of Expectation (VoE)',

    summary:
      'El Paradigma de Expectativa Violada (Violation of Expectation, VoE) evalúa la reacción de los bebés ante acontecimientos que contradicen una expectativa previamente formada.',

    description:
      'El Paradigma de Expectativa Violada (Violation of Expectation, VoE) evalúa la reacción de los bebés ante acontecimientos que contradicen una expectativa previamente formada. Se basa en que una mayor atención ante un evento inesperado puede indicar que el bebé detectó una diferencia entre lo esperado y lo observado (Mariscal et al., 2012).',

    what:
      'El procedimiento consiste en presentar al bebé una situación que permite generar una expectativa y posteriormente mostrar un evento que la confirma o la viola. Si el bebé dedica más tiempo a mirar el acontecimiento inesperado, se interpreta como evidencia de que ha detectado la diferencia. Como señalan Mariscal et al. (2012), estos métodos utilizan la “duración de la mirada como medida de los procesos cognitivos”.',

    measure:
      'Este paradigma permite estudiar principalmente la comprensión temprana de acontecimientos físicos, sociales y causales, así como las expectativas que los bebés construyen sobre los objetos y las personas. En particular, la respuesta de mirada ante el evento inesperado puede utilizarse para investigar si el bebé discrimina entre situaciones conformes e inconformes y posee determinadas expectativas sobre lo que debería ocurrir (Mariscal et al., 2012).',

    videoId: 'lXPM6gBF1Zc',
    videoTitle: 'Recurso audiovisual del método',

    videoRef: {
      url: 'https://www.youtube.com/watch?v=lXPM6gBF1Zc',
      label: 'Psy vs. Psy (2021) · Violation of Expectations Experiments'
    },

    esArticle: {
      title: 'Inferencias y prácticas gravitacionales en el niño en el segundo semestre de vida',
      url: 'https://www.redalyc.org/pdf/213/21300806.pdf',
      desc: 'Puche Navarro (2001) · Psicología desde el Caribe, (8), 63–93.'
    },

    enArticle: {
      title: 'Object permanence in five-month-old infants',
      url: 'https://doi.org/10.1016/0010-0277(85)90008-3',
      desc: 'Baillargeon, Spelke & Wasserman (1985) · Cognition, 20(3), 191–208.'
    },

    recommend: {
      title: 'Center on the Developing Child · Brain-Building Through Play',
      url: 'https://developingchild.harvard.edu/resources/handouts-tools/brainbuildingthroughplay/',
      reason:
        'Actividades para bebés, niños pequeños y niños que promueven el desarrollo cerebral a través del juego, del Center on the Developing Child de la Universidad de Harvard.'
    },

    fact:
      'El dato: Los bebés tienen nociones de física cuántica ("mágica") básica. Si un juguete pasa detrás de una pantalla y "desaparece" o flota en el aire sin soporte, los bebés fijan la mirada muchísimo más tiempo con una expresión de sorpresa. Esto demostró que nacemos con una "física intuitiva": los bebés saben que los objetos sólidos no pueden atravesar a otros y que las cosas caen por gravedad.',

    activityUrl:
      'https://wordwall.net/es/resource/119480466?wwmethod=link&wwshareintent=student'
  },


  // =========================================================
  // MÉTODO 05 — FN
  // =========================================================

  fn: {
    number: '05',
    category: 'Familiaridad y novedad',
    title: 'Paradigma de Familiaridad vs. Novelty',
    short: 'Familiarity vs. Novelty',

    summary:
      'El paradigma de Familiaridad vs. Novedad consiste en presentar al bebé un estímulo conocido y uno nuevo, registrando hacia cuál dirige su mirada durante más tiempo.',

    description:
      'El paradigma de Familiaridad vs. Novedad consiste en presentar al bebé un estímulo conocido y uno nuevo, registrando hacia cuál dirige su mirada durante más tiempo. La comparación permite estudiar cómo responde ante estímulos familiares y novedosos.',

    what:
      'Es un procedimiento experimental basado en la preferencia visual, en el que se presentan dos estímulos de manera simultánea: uno previamente conocido o familiar y otro novedoso. La atención visual del bebé hacia cada estímulo se compara mediante la duración de la mirada. La lógica del procedimiento parte de que los bebés pueden mostrar una preferencia por la novedad después de haber tenido experiencia con un estímulo. En este sentido, se ha señalado que “los bebés muestran una tendencia a cambiar su preferencia de estímulos familiares a novedosos con una exposición creciente al estímulo familiar” (Houston-Price & Nakai, 2004, p. 341). Esta respuesta permite utilizar la dirección y duración de la mirada como indicadores de procesos de atención y reconocimiento.',

    measure:
      'Este paradigma permite estudiar principalmente la memoria de reconocimiento visual, la discriminación entre estímulos y las preferencias atencionales del bebé. Si el bebé observa durante más tiempo el estímulo novedoso, puede interpretarse que distingue ese estímulo del familiar y que reconoce este último como previamente presentado. Por ello, la diferencia en el tiempo de mirada permite obtener información sobre procesos de reconocimiento y sobre cómo la experiencia previa modifica la atención. Como señalan Houston-Price y Nakai (2004), “la atención preferencial del bebé es dinámica” y puede cambiar en función de la exposición previa a los estímulos (p. 341). Así, no solo interesa saber qué estímulo mira más, sino también cómo la familiaridad y la novedad influyen en la distribución de su atención.',

    videoId: 'sqYgU6CjGds',
    videoTitle: 'Recurso audiovisual del método',

    videoRef: {
      url: 'https://www.youtube.com/watch?v=sqYgU6CjGds',
      label: 'University of Minnesota (2009) · What babies teach us about perception'
    },

    esArticle: {
      title: 'La rotación mental y la comprensión de palabras en infantes de 12 meses de edad',
      url: 'https://www.iztacala.unam.mx/carreras/psicologia/psiclin/vol25num4/Vol25No4Art4.pdf',
      desc: 'Peyrot Negrete & Alva Canto (2022) · Revista Electrónica de Psicología Iztacala, 25(4), 1292–1311.'
    },

    enArticle: {
      title: 'Distinguishing novelty and familiarity effects in infant preference procedures',
      url: 'https://doi.org/10.1002/icd.364',
      desc: 'Houston-Price & Nakai (2004) · Infant and Child Development, 13(4), 341–348.'
    },

    recommend: {
      title: 'ZERO TO THREE',
      url: 'https://www.zerotothree.org/',
      reason:
        'Organización dedicada a liderar el camino en el desarrollo de la primera infancia.'
    },

    fact:
      'Los bebés prefieren lo viejo cuando procesan información difícil, y lo nuevo cuando es fácil. Un descubrimiento reciente muestra que la preferencia no es aleatoria: si al bebé le cuesta entender un estímulo (un rostro complejo), preferirá mirar lo familiar para "terminar de procesarlo". Si el estímulo es simple, lo ignorará de inmediato para buscar la novedad.',

    activityUrl:
      'https://wordwall.net/es/resource/119480971?wwmethod=link&wwshareintent=student'
  }
};


// =========================================================
// REFERENCIAS
// =========================================================

const REFERENCES = [
  {
    html: 'Barón Birchenall, L. F., Müller, O., &amp; Galindo, O. (2014). Métodos experimentales de estudio de la percepción temprana del habla. <i>Revista Colombiana de Psicología, 23</i>(1), 73–94.',
    url: 'https://doi.org/10.15446/rcp.v23n1.37716'
  },
  {
    html: 'Mariscal, S., Casla, M., Rujas, I., &amp; Aguado-Orea, J. (2012). Los métodos basados en la duración de la mirada: ¿una ventana a la cognición temprana? <i>Studies in Psychology, 33</i>(3), 277–292.',
    url: 'https://doi.org/10.1174/021093912803758219'
  },
  {
    html: 'Reading Rockets. (2014b, 16 de abril). <i>Tuning In to Speech Sounds</i> [Vídeo]. YouTube.',
    url: 'https://www.youtube.com/watch?v=WvM5bqUsbu8'
  },
  {
    html: 'Perra, O., Winstanley, A., Sperotto, R., &amp; Gattis, M. (2024). Attention control in preterm and term 5-month-old infants: Cross-task stability increases with gestational age. <i>Infancy, 29</i>(3), 437–458.',
    url: 'https://doi.org/10.1111/infa.12574'
  },
  {
    html: 'ZERO TO THREE. (2026, 23 de enero). <i>Early Brain Development | ZERO TO THREE</i>.',
    url: 'https://www.zerotothree.org/early-brain-development/'
  },
  {
    html: 'Labvanced. (2025, 4 de octubre). <i>The Preferential Looking Paradigm | Quick Overview in Labvanced</i> [Vídeo]. YouTube.',
    url: 'https://www.youtube.com/watch?v=T_SkGjh4YH4'
  },
  {
    html: '<i>Desarrollo de la percepción intersensorial</i>. (s. f.). Aacademica.org. Recuperado el 16 de septiembre de 2026, de',
    url: 'https://www.aacademica.org/mauricio.martinez/20.pdf'
  },
  {
    html: 'Capelli, E., Cassa, M. I., Riboldi, E. M., Beretta, C., Siri, E., Cantiani, C., Molteni, M., &amp; Riva, V. (2026). Developmental changes in audio-visual speech integration during the first year of life in infants at elevated and typical likelihood of autism. <i>PLOS ONE</i>, e0347046.',
    url: 'https://doi.org/10.1371/journal.pone.0347046'
  },
  {
    html: '<i>Journal publications — MIT Early Childhood Cognition Lab</i>. (s. f.). MIT Early Childhood Cognition Lab.',
    url: 'https://eccl.mit.edu/journal-publications'
  },
  {
    html: 'powerbabies. (2011, 24 de marzo). <i>Infant Looking Time Habituation. Activity 2 from «What Babies Can Do» DVD</i> [Vídeo]. YouTube.',
    url: 'https://www.youtube.com/watch?v=dlilZh60qdA'
  },
  {
    html: 'Poli, F., Ghilardi, T., Beijers, R., de Weerth, C., Hinne, M., Mars, R. B., &amp; Hunnius, S. (2024). Individual differences in processing speed and curiosity explain infant habituation and dishabituation performance. <i>Developmental Science, 27</i>, e13460.',
    url: 'https://doi.org/10.1111/desc.13460'
  },
  {
    html: '<i>PSYC 110 - Lecture 5 - What Is It Like to Be a Baby: The Development of Thought | Open Yale Courses</i>. (s. f.).',
    url: 'https://oyc.yale.edu/psychology/psyc-110/lecture-5'
  },
  {
    html: 'Psy vs. Psy. (2021, 4 de agosto). <i>Violation of Expectations Experiments: Babies know more than you think!</i> [Vídeo]. YouTube.',
    url: 'https://www.youtube.com/watch?v=lXPM6gBF1Zc'
  },
  {
    html: 'Puche Navarro, R. (2001). Inferencias y prácticas gravitacionales en el niño en el segundo semestre de vida. <i>Psicología desde el Caribe</i>, (8), 63–93.',
    url: 'https://www.redalyc.org/pdf/213/21300806.pdf'
  },
  {
    html: 'Baillargeon, R., Spelke, E. S., &amp; Wasserman, S. (1985). Object permanence in five-month-old infants. <i>Cognition, 20</i>(3), 191–208.',
    url: 'https://doi.org/10.1016/0010-0277(85)90008-3'
  },
  {
    html: '<i>Brain-Building Through Play: Activities for Infants, Toddlers, and Children</i> - Center on the Developing Child at Harvard University. (2026, 11 de febrero). Center on the Developing Child at Harvard University.',
    url: 'https://developingchild.harvard.edu/resources/handouts-tools/brainbuildingthroughplay/'
  },
  {
    html: 'Houston-Price, C., &amp; Nakai, S. (2004). Distinguishing novelty and familiarity effects in infant preference procedures. <i>Infant and Child Development, 13</i>(4), 341–348.',
    url: 'https://doi.org/10.1002/icd.364'
  },
  {
    html: 'University of Minnesota. (2009, 20 de octubre). <i>What babies teach us about perception</i> [Vídeo]. YouTube.',
    url: 'https://www.youtube.com/watch?v=sqYgU6CjGds'
  },
  {
    html: 'Peyrot Negrete, I., &amp; Alva Canto, E. A. (2022). La rotación mental y la comprensión de palabras en infantes de 12 meses de edad. <i>Revista Electrónica de Psicología Iztacala, 25</i>(4), 1292–1311.',
    url: 'https://www.iztacala.unam.mx/carreras/psicologia/psiclin/vol25num4/Vol25No4Art4.pdf'
  },
  {
    html: 'ZERO TO THREE. (2026b, 2 de septiembre). <i>Zero To Three | Leading the Way in Early Childhood Development</i>.',
    url: 'https://www.zerotothree.org/'
  }
];


// =========================================================
// UTILIDADES
// =========================================================

function escapeHTML(value) {
  return String(value).replace(
    /[&<>'"]/g,
    char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[char])
  );
}


// <img> que prueba jpg → png → jpeg → webp
// y si no existe ninguna usa el SVG de respaldo.

function mediaImage(base, fallback, alt) {
  return `
    <img
      src="${base}.${MEDIA_EXTS[0]}"
      alt="${escapeHTML(alt)}"
      loading="lazy"
      data-media-base="${base}"
      data-media-step="0"
      data-media-fallback="${fallback}"
    />
  `;
}


// =========================================================
// FALLBACK DE IMÁGENES
// =========================================================

document.addEventListener('error', event => {
  const img = event.target;

  if (!(img instanceof HTMLImageElement) || !img.dataset.mediaBase) {
    return;
  }

  const step = Number(img.dataset.mediaStep) + 1;

  if (step < MEDIA_EXTS.length) {
    img.dataset.mediaStep = String(step);
    img.src = `${img.dataset.mediaBase}.${MEDIA_EXTS[step]}`;
  } else if (step === MEDIA_EXTS.length) {
    img.dataset.mediaStep = String(step);
    img.src = img.dataset.mediaFallback;
  }
}, true);


// =========================================================
// TARJETAS DE ARTÍCULOS
// =========================================================

function articleCard(article, lang, number) {
  const isSpanish = lang.toLowerCase().startsWith('es');

  const suffix = isSpanish ? 'ES' : 'EN';
  const fallback = isSpanish
    ? 'media/thumb-es.svg'
    : 'media/thumb-en.svg';

  const alt = isSpanish
    ? 'Miniatura de lectura científica en español'
    : 'Miniatura de lectura científica en inglés';

  return `
    <a
      class="article-card"
      href="${article.url}"
      target="_blank"
      rel="noopener"
      aria-label="Abrir ${escapeHTML(lang.toLowerCase())}: ${escapeHTML(article.title)}"
    >
      <div class="article-thumb">
        ${mediaImage(
          `media/${number}${suffix}`,
          fallback,
          alt
        )}

        <span class="thumb-link-label">Abrir ↗</span>
      </div>

      <div class="article-lang">
        Lectura ${escapeHTML(lang)}
      </div>

      <strong>${escapeHTML(article.title)}</strong>

      <p>${escapeHTML(article.desc)}</p>
    </a>
  `;
}


// =========================================================
// REFERENCIA DEL VIDEO
// =========================================================

function videoRefMarkup(method) {
  const ref = method.videoRef;

  if (!ref) return '';

  const note = ref.note
    ? ` <span>${escapeHTML(ref.note)}</span>`
    : '';

  return `
    <p class="video-ref">
      Video de referencia del método:
      <a
        class="secondary-link"
        href="${ref.url}"
        target="_blank"
        rel="noopener"
      >
        ${escapeHTML(ref.label)} ↗
      </a>
      ${note}
    </p>
  `;
}


// =========================================================
// VIDEO DE YOUTUBE (incrustado)
// =========================================================
// Requiere que la página se abra desde un servidor (GitHub Pages,
// localhost, etc.). Desde file:// YouTube no recibe el Referer y
// puede mostrar el "Error 153".
//
// Subtítulos: cc_load_policy=1 + cc_lang_pref=es piden los subtítulos
// en español, siempre que el video tenga esa pista disponible.

function youtubeVideoMarkup(method) {
  const params = new URLSearchParams({
    rel: '0',
    playsinline: '1',
    cc_load_policy: '1',
    cc_lang_pref: 'es',
    hl: 'es'
  });

  const embedUrl =
    `https://www.youtube.com/embed/${encodeURIComponent(method.videoId)}?${params.toString()}`;

  return `
    <div class="video-shell">

      <iframe
        class="video-frame youtube-video"
        src="${escapeHTML(embedUrl)}"
        title="${escapeHTML(method.videoTitle || 'Recurso audiovisual')}"
        style="width:100%;height:auto;aspect-ratio:16/9;border:0;display:block;"
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowfullscreen
      ></iframe>

      ${videoRefMarkup(method)}

    </div>
  `;
}


// =========================================================
// ACTIVIDAD
// =========================================================

function activityMarkup(method) {
  return `
    <p>
      Haz clic en la imagen para ir al reto de este método.
    </p>

    <a
      class="activity-link"
      href="${escapeHTML(method.activityUrl)}"
      target="_blank"
      rel="noopener"
      aria-label="Ir a la actividad interactiva del método ${method.number}"
    >

      ${mediaImage(
        `media/${method.number}RETO`,
        'media/reto-placeholder.jpeg',
        `Imagen de la actividad interactiva del método ${method.number}`
      )}

      <span class="thumb-link-label">
        Ir al reto ↗
      </span>

    </a>
  `;
}


// =========================================================
// RENDERIZAR MÉTODO
// =========================================================

function renderMethod(method) {
  document.title =
    `${method.title} · Métodos Experimentales`;

  const app = document.getElementById('app');

  app.innerHTML = `

    <main class="method-shell">

      <a
        class="back-link reveal-up"
        href="index.html"
      >
        ← Volver a métodos
      </a>


      <header class="method-hero reveal-up delay-1">

        <span class="chip">
          ${method.number} · ${escapeHTML(method.category)}
        </span>

        <h1>
          ${escapeHTML(method.title)}
        </h1>

        <p>
          ${escapeHTML(method.summary)}
        </p>

      </header>


      <div class="content-stack">


        <!-- =================================================
             CONCEPTO + VIDEO
             ================================================= -->

        <section
          class="block reveal-up delay-1"
          aria-label="Concepto y multimedia"
        >

          <article class="panel concept-panel">

            <div class="panel-heading">

              <div>

                <span class="mini-kicker">
                  Información esencial
                </span>

                <h2>
                  01 · Concepto
                </h2>

              </div>

              <span
                class="panel-mark"
                aria-hidden="true"
              >
                01
              </span>

            </div>


            <p class="concept-summary">
              ${escapeHTML(method.description)}
            </p>


            <div
              class="concept-info"
              data-concept-info
            >

              <div class="action-row">

                <button
                  class="info-trigger"
                  type="button"
                  data-info="what"
                  aria-expanded="false"
                  aria-controls="concept-popover-${method.number}"
                >

                  <span>
                    Qué es
                  </span>

                  <small>
                    Cómo funciona el método
                  </small>

                </button>


                <button
                  class="info-trigger"
                  type="button"
                  data-info="measure"
                  aria-expanded="false"
                  aria-controls="concept-popover-${method.number}"
                >

                  <span>
                    Qué mide
                  </span>

                  <small>
                    Qué permite estudiar
                  </small>

                </button>

              </div>


              <section
                id="concept-popover-${method.number}"
                class="concept-popover"
                data-concept-popover
                hidden
                aria-live="polite"
              ></section>

            </div>

          </article>


          <article class="panel">

            <h2>
              02 · Video / recurso audiovisual
            </h2>

            ${youtubeVideoMarkup(method)}

          </article>

        </section>


        <!-- =================================================
             LECTURAS + ACTIVIDAD
             ================================================= -->

        <section
          class="block reveal-up delay-2"
          aria-label="Lecturas y actividad interactiva"
        >

          <article class="panel">

            <h2>
              03 · Lecturas científicas
            </h2>

            <p>
              Dos lecturas complementarias, una en español y otra en inglés,
              enlazadas directamente.
            </p>

            <div class="article-list">

              ${articleCard(
                method.esArticle,
                'ESPAÑOL',
                method.number
              )}

              ${articleCard(
                method.enArticle,
                'ENGLISH',
                method.number
              )}

            </div>

          </article>


          <article class="panel">

            <h2>
              04 · Actividad interactiva
            </h2>

            ${activityMarkup(method)}

          </article>

        </section>


        <!-- =================================================
             DATOS ADICIONALES
             ================================================= -->

        <section
          class="block reveal-up delay-3"
          aria-label="Datos adicionales"
        >

          <article class="panel">

            <h2>
              05 · Página web recomendada
            </h2>


            <a
              class="web-thumb"
              href="${method.recommend.url}"
              target="_blank"
              rel="noopener"
              aria-label="Visitar ${escapeHTML(method.recommend.title)}"
            >

              ${mediaImage(
                `media/${method.number}WEB`,
                'media/thumb-web.svg',
                `Miniatura de la página web recomendada: ${method.recommend.title}`
              )}

              <span class="thumb-link-label">
                Abrir ↗
              </span>

            </a>


            <p>
              <strong>
                ${escapeHTML(method.recommend.title)}
              </strong>
            </p>

            <p>
              ${escapeHTML(method.recommend.reason)}
            </p>


            <a
              class="recommendation-link"
              href="${method.recommend.url}"
              target="_blank"
              rel="noopener"
            >
              Visitar recurso ↗
            </a>

          </article>


          <article class="panel fact-box">

            <div>

              <div
                class="fact-icon"
                aria-hidden="true"
              >
                ✦
              </div>

              <h2 style="margin-top:16px;">
                06 · Dato curioso
              </h2>

              <p>
                ${escapeHTML(method.fact)}
              </p>

            </div>


            <div class="refline">
              Método:
              ${escapeHTML(method.short)}
            </div>

          </article>

        </section>

      </div>

    </main>
  `;
}


// =========================================================
// IDENTIFICAR MÉTODO
// =========================================================

const params =
  new URLSearchParams(window.location.search);

const id = params.get('id');


// =========================================================
// CARGAR MÉTODO
// =========================================================

if (
  document.body.classList.contains('method-page')
) {
  if (METHODS[id]) {
    renderMethod(METHODS[id]);
  } else {
    window.location.href = 'index.html';
  }
}


// =========================================================
// INTERACCIÓN DEL PANEL "QUÉ ES / QUÉ MIDE"
// =========================================================

function setupConceptInfo() {

  document
    .querySelectorAll('[data-concept-info]')
    .forEach(area => {

      const buttons =
        [...area.querySelectorAll('.info-trigger')];

      const popover =
        area.querySelector('[data-concept-popover]');

      if (!popover || !buttons.length) {
        return;
      }


      const method = METHODS[id];

      if (!method) {
        return;
      }


      let activeType = null;
      let pinned = false;


      const content = {

        what: {
          label: 'Cómo funciona el método',
          body: method.what
        },

        measure: {
          label: 'Qué permite estudiar',
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

              <span class="quote-label">
                ${escapeHTML(data.label)}
              </span>

              <h3>
                ${type === 'what' ? 'Qué es' : 'Qué mide'}
              </h3>

            </div>

            <span class="popover-badge">
              ${method.number}
            </span>

          </div>

          <p>
            ${escapeHTML(data.body)}
          </p>
        `;


        popover.hidden = false;


        buttons.forEach(btn => {

          btn.setAttribute(
            'aria-expanded',
            String(btn.dataset.info === type)
          );

        });

      }


      function close() {

        activeType = null;
        pinned = false;

        popover.hidden = true;
        popover.innerHTML = '';

        buttons.forEach(btn => {

          btn.setAttribute(
            'aria-expanded',
            'false'
          );

        });

      }


      buttons.forEach(btn => {

        btn.addEventListener(
          'mouseenter',
          () => {

            const type = btn.dataset.info;

            if (
              activeType !== type ||
              pinned
            ) {

              pinned = false;

              render(type);
            }

          }
        );


        btn.addEventListener(
          'focus',
          () => {
            render(btn.dataset.info);
          }
        );


        btn.addEventListener(
          'click',
          () => {

            const type = btn.dataset.info;


            if (
              pinned &&
              activeType === type
            ) {

              close();

              return;
            }


            pinned = true;

            render(type);

          }
        );

      });


      area.addEventListener(
        'mouseleave',
        () => {

          if (!pinned) {
            close();
          }

        }
      );

    });
}


// =========================================================
// REFERENCIAS DE LA PÁGINA PRINCIPAL
// =========================================================

function renderReferences() {

  const list =
    document.querySelector(
      '[data-references-list]'
    );

  if (!list) return;


  list.innerHTML =
    REFERENCES
      .map(ref => `
        <li>
          ${ref.html}

          <a
            href="${ref.url}"
            target="_blank"
            rel="noopener"
          >
            ${escapeHTML(ref.url)}
          </a>
        </li>
      `)
      .join('');

}


// =========================================================
// INICIALIZACIÓN
// =========================================================

// Página principal
if (
  document.body.classList.contains('home-page')
) {
  renderReferences();
}


// Página de método
if (
  document.body.classList.contains('method-page')
) {

  setupConceptInfo();

}