const SCENE_MEDIA = {
  f1_inicio: { src: "img/f1-inicio.jpg", caption: "Fase 1 · Inicios y S.H.I.E.L.D." },
  f1_base_descontrolada: { src: "img/f1-mistico.jpg", caption: "Anomalía energética en la base" },
  f1_emergencia_calle: { src: "img/f1-calle.jpg", caption: "Alerta urbana en la ciudad" },
  f1_exclusivo_callejero: { src: "img/f1-calle.jpg", caption: "Ruta Callejera · Los barrios" },
  f1_exclusivo_mutante: { src: "img/f1-mutante.jpg", caption: "Ruta Mutante · El gen X" },
  f1_exclusivo_mistico: { src: "img/f1-mistico.jpg", caption: "Ruta Mística · Arte arcano" },
  f2_expansion: { src: "img/f2-ultron.jpg", caption: "Fase 2 · Ultrón y expansión" },
  f2_post_ultron_grieta: { src: "img/f2-ultron.jpg", caption: "Secuelas de la crisis" },
  f2_varada_cuantica: { src: "img/f2-cosmico.jpg", caption: "Desvío en el Reino Cuántico" },
  f2_cosmica_cuantica: { src: "img/f2-cosmico.jpg", caption: "Frontera cósmica y cuántica" },
  f3_encrucijada: { src: "img/f3-civilwar.jpg", caption: "Fase 3 · Civil War y fractura" },
  f3_escombros_titan: { src: "img/f3-endgame.jpg", caption: "Tras el golpe de Infinity War" },
  f3_titan_asalto: { src: "img/f3-endgame.jpg", caption: "Infinity War y Endgame" },
  f4_grietas: { src: "img/f4-multiverso.jpg", caption: "Fase 4 · Grietas del Multiverso" },
  f4_exclusivo_mistico: { src: "img/f4-multiverso.jpg", caption: "Nexo entre dimensiones" },
  f4_exclusivo_mutante: { src: "img/f4-multiverso.jpg", caption: "Variantes y gen X" },
  f4_exclusivo_antiheroe: { src: "img/f4-multiverso.jpg", caption: "Jugada fuera de regla" },
  f5_multiverso_cruce: { src: "img/f5-incursion.jpg", caption: "Fase 5 · Choques multiversales" },
  f5_incursion_alerta: { src: "img/f5-incursion.jpg", caption: "Alerta de incursión" },
  f6_doomsday: { src: "img/f6-doomsday.jpg", caption: "Fase 6 · Los 4 Fantásticos y Doomsday" },
  f6_doomsday_emergencia: { src: "img/f6-doomsday.jpg", caption: "Reagrupamiento en Doomsday" },
  f6_dilema_nucleo_frente: { src: "img/f6-secretwars.jpg", caption: "Decisión límite antes del cierre" },
  f6_secret_wars: { src: "img/f6-secretwars.jpg", caption: "Avengers: Secret Wars" }
};

const EVENTS = {
  f1_inicio: {
    saga: "Saga del Infinito (2008–2019)",
    stage: "Fase 1 · 2008–2012",
    title: "Primeros pasos y S.H.I.E.L.D.",
    text: "Arrancás en calles calientes, anomalías y el radar de S.H.I.E.L.D.",
    options: [
      {
        label: "Ir a los muelles y bajos fondos",
        tags: ["callejero", "elite_tec", "antiheroe"],
        requires: "none",
        successChance: 0.72,
        nextOnSuccess: "f1_exclusivo_callejero",
        nextOnFail: "f1_emergencia_calle",
        onSuccess: { ovr: 3, fama: 8, energia: -7, msg: "Frenaste un contrabando y ganaste calle." },
        onFail: { ovr: -2, energia: -11, fama: -5, msg: "La emboscada te dejó golpeado." }
      },
      {
        label: "Investigar una base con anomalías",
        tags: ["alterado", "mistico", "global"],
        requires: "none",
        successChance: 0.64,
        nextOnSuccess: "f1_exclusivo_mistico",
        nextOnFail: "f1_base_descontrolada",
        onSuccess: { ovr: 4, fama: 5, energia: -8, msg: "Leíste la señal y tomaste ventaja." },
        onFail: { ovr: -3, energia: -12, fama: -4, msg: "La descarga te sacudió fuerte." }
      },
      {
        label: "Observar desde las sombras",
        tags: ["mutante", "antiheroe"],
        requires: "none",
        successChance: 0.74,
        nextOnSuccess: "f1_exclusivo_mutante",
        nextOnFail: "f1_emergencia_calle",
        onSuccess: { ovr: 2, fama: -2, energia: 9, msg: "Guardaste aire y leíste el tablero." },
        onFail: { ovr: -2, fama: -6, energia: -8, msg: "Llegaste tarde cuando se armó lío." }
      },
      {
        label: "Mostrar tu presencia al mundo",
        tags: ["cosmico", "global", "elite_tec"],
        requires: "none",
        successChance: 0.68,
        nextOnSuccess: "f2_expansion",
        nextOnFail: "f1_emergencia_calle",
        onSuccess: { fama: 14, ovr: 3, equipo: -3, energia: -7, msg: "Todos te miran, pero el grupo pide orden." },
        onFail: { ovr: -3, fama: -9, equipo: -5, msg: "La exposición trajo críticas rápidas." }
      }
    ]
  },

  f1_base_descontrolada: {
    saga: "Saga del Infinito (2008–2019)",
    stage: "Fase 1 · Contención",
    title: "El reactor inestable",
    text: "El núcleo amenaza con reventar la base en segundos.",
    options: [
      {
        label: "Desviar la carga a un ducto seguro",
        tags: ["elite_tec", "alterado", "global"],
        requires: "energy",
        successChance: 0.7,
        nextOnSuccess: "f2_expansion",
        nextOnFail: "f1_emergencia_calle",
        onSuccess: { ovr: 3, equipo: 9, energia: -8, msg: "Evitaste el estallido en la base." },
        onFail: { ovr: -2, energia: -12, fama: -5, msg: "El ducto cedió y tocó evacuar." }
      },
      {
        label: "Disipar el pulso con tu poder",
        tags: ["mistico", "cosmico", "mutante"],
        requires: "energy",
        successChance: 0.62,
        nextOnSuccess: "f2_cosmica_cuantica",
        nextOnFail: "f1_emergencia_calle",
        onSuccess: { ovr: 5, fama: 7, energia: -10, msg: "Domaste el pulso y abriste pista cósmica." },
        onFail: { ovr: -3, energia: -13, fama: -4, msg: "La descarga te dejó cansado." }
      },
      {
        label: "Evacuar al personal técnico",
        tags: ["callejero", "global"],
        requires: "team",
        successChance: 0.78,
        nextOnSuccess: "f2_expansion",
        nextOnFail: "f2_expansion",
        onSuccess: { fama: 9, equipo: 10, energia: 7, msg: "Todos salieron a salvo y recuperaste aire." },
        onFail: { ovr: -2, fama: -6, energia: -9, msg: "La salida fue tensa." }
      },
      {
        label: "Llevarte el núcleo y salir",
        tags: ["antiheroe", "elite_tec"],
        requires: "none",
        successChance: 0.68,
        nextOnSuccess: "f2_cosmica_cuantica",
        nextOnFail: "f1_emergencia_calle",
        onSuccess: { ovr: 4, fama: 6, equipo: -6, msg: "Te quedaste con datos clave pero perdiste respaldo." },
        onFail: { ovr: -3, fama: -8, equipo: -6, msg: "Disparaste todas las alarmas." }
      }
    ]
  },

  f1_emergencia_calle: {
    saga: "Saga del Infinito (2008–2019)",
    stage: "Fase 1 · Emergencia",
    title: "Fuga en plena avenida",
    text: "Un convoy armado intenta escapar con tecnología robada.",
    options: [
      {
        label: "Cortarles el paso en la avenida",
        tags: ["callejero", "antiheroe", "mutante"],
        requires: "energy",
        successChance: 0.7,
        nextOnSuccess: "f2_expansion",
        nextOnFail: "f2_expansion",
        onSuccess: { ovr: 4, fama: 8, energia: -7, msg: "Frenaste la fuga de frente." },
        onFail: { ovr: -2, energia: -11, fama: -5, msg: "Se escaparon parte del botín." }
      },
      {
        label: "Cerrar el cerco con apoyo táctico",
        tags: ["global", "elite_tec"],
        requires: "team",
        successChance: 0.76,
        nextOnSuccess: "f2_expansion",
        nextOnFail: "f2_expansion",
        onSuccess: { equipo: 11, ovr: 3, msg: "Buen cierre en equipo." },
        onFail: { ovr: -2, equipo: -6, energia: -8, msg: "El cerco llegó tarde." }
      },
      {
        label: "Frenar los motores a distancia",
        tags: ["alterado", "mistico", "cosmico"],
        requires: "energy",
        successChance: 0.68,
        nextOnSuccess: "f2_expansion",
        nextOnFail: "f2_expansion",
        onSuccess: { ovr: 4, energia: -6, msg: "Golpe limpio a distancia." },
        onFail: { ovr: -2, energia: -11, msg: "Te exigió más de lo esperado." }
      },
      {
        label: "Rastrear su base sin apuro",
        tags: ["antiheroe", "callejero"],
        requires: "none",
        successChance: 0.74,
        nextOnSuccess: "f2_expansion",
        nextOnFail: "f2_expansion",
        onSuccess: { ovr: 2, fama: -3, energia: 10, msg: "Ahorraste energía y hallaste pista." },
        onFail: { ovr: -2, fama: -7, equipo: -5, msg: "Te criticaron por no frenarlos ya." }
      }
    ]
  },

  f1_exclusivo_callejero: {
    saga: "Saga del Infinito (2008–2019)",
    stage: "Fase 1 · Ruta Callejera",
    title: "El pulso del barrio",
    text: "La gente de la zona confía en que protejas las calles.",
    options: [
      {
        label: "Desarmar la red local y cuidar vecinos",
        tags: ["callejero", "global"],
        requires: "none",
        successChance: 0.76,
        nextOnSuccess: "f2_expansion",
        nextOnFail: "f2_expansion",
        onSuccess: { fama: 12, ovr: 3, equipo: 6, msg: "Ganaste respeto real en el barrio." },
        onFail: { ovr: -2, fama: -6, energia: -9, msg: "Fue una noche pesada." }
      },
      {
        label: "Buscar datos con informantes",
        tags: ["callejero", "antiheroe"],
        requires: "none",
        successChance: 0.7,
        nextOnSuccess: "f2_expansion",
        nextOnFail: "f2_expansion",
        onSuccess: { ovr: 3, fama: 6, energia: 6, msg: "Conseguiste información clave." },
        onFail: { ovr: -2, fama: -7, equipo: -5, msg: "Hubo desconfianza en la calle." }
      },
      {
        label: "Mejorar tu equipo con piezas útiles",
        tags: ["elite_tec", "callejero"],
        requires: "energy",
        successChance: 0.74,
        nextOnSuccess: "f2_expansion",
        nextOnFail: "f2_expansion",
        onSuccess: { ovr: 3, energia: 7, msg: "Ajustaste tu equipo a tu medida." },
        onFail: { ovr: -2, energia: -9, msg: "Perdiste tiempo probando piezas." }
      },
      {
        label: "Mantener perfil bajo y descansar",
        tags: ["antiheroe", "mutante"],
        requires: "none",
        successChance: 0.76,
        nextOnSuccess: "f2_expansion",
        nextOnFail: "f2_expansion",
        onSuccess: { ovr: 2, fama: -3, energia: 11, msg: "Llegaste entero a la Fase 2." },
        onFail: { ovr: -2, fama: -5, energia: -7, msg: "Un descuido llamó la atención." }
      }
    ]
  },

  f1_exclusivo_mutante: {
    saga: "Saga del Infinito (2008–2019)",
    stage: "Fase 1 · Ruta Mutante",
    title: "El despertar del gen X",
    text: "Tu mutación pide control mientras el mundo observa.",
    options: [
      {
        label: "Entrenar el control de tu poder",
        tags: ["mutante", "alterado"],
        requires: "none",
        successChance: 0.74,
        nextOnSuccess: "f2_expansion",
        nextOnFail: "f2_expansion",
        onSuccess: { ovr: 4, energia: 8, msg: "Subiste el control de tu don." },
        onFail: { ovr: -2, energia: -9, msg: "El impulso te cansó." }
      },
      {
        label: "Apoyar a otros mutantes aislados",
        tags: ["mutante", "global"],
        requires: "team",
        successChance: 0.7,
        nextOnSuccess: "f2_expansion",
        nextOnFail: "f2_expansion",
        onSuccess: { equipo: 12, fama: 8, energia: -4, msg: "Sumaste aliados leales." },
        onFail: { ovr: -2, fama: -7, equipo: -6, msg: "Generó miradas de sospecha." }
      },
      {
        label: "Actuar por libre sin pedir permiso",
        tags: ["mutante", "antiheroe"],
        requires: "none",
        successChance: 0.68,
        nextOnSuccess: "f2_expansion",
        nextOnFail: "f2_expansion",
        onSuccess: { ovr: 4, fama: 8, equipo: -5, msg: "Marcaste tu propio camino." },
        onFail: { ovr: -3, fama: -8, energia: -9, msg: "Te expusiste de más." }
      },
      {
        label: "Probar tu límite ante energías externas",
        tags: ["mutante", "cosmico_multi"],
        requires: "none",
        successChance: 0.66,
        nextOnSuccess: "f2_expansion",
        nextOnFail: "f2_expansion",
        onSuccess: { ovr: 4, energia: 5, msg: "Descubriste un nuevo margen." },
        onFail: { ovr: -3, energia: -10, msg: "La prueba te exigió mucho." }
      }
    ]
  },

  f1_exclusivo_mistico: {
    saga: "Saga del Infinito (2008–2019)",
    stage: "Fase 1 · Ruta Mística",
    title: "Ecos del arte arcano",
    text: "Símbolos y grietas anticipan fuerzas más allá de lo normal.",
    options: [
      {
        label: "Sellar la grieta con disciplina",
        tags: ["mistico", "global"],
        requires: "energy",
        successChance: 0.72,
        nextOnSuccess: "f2_expansion",
        nextOnFail: "f2_expansion",
        onSuccess: { ovr: 4, fama: 7, energia: -7, msg: "Cerraste el paso sin caos." },
        onFail: { ovr: -2, energia: -11, fama: -5, msg: "Te costó energía contenerlo." }
      },
      {
        label: "Leer una reliquia dimensional",
        tags: ["mistico", "cosmico_multi"],
        requires: "none",
        successChance: 0.66,
        nextOnSuccess: "f2_cosmica_cuantica",
        nextOnFail: "f2_expansion",
        onSuccess: { ovr: 5, energia: 6, msg: "Abriste una ruta cósmica." },
        onFail: { ovr: -3, energia: -10, msg: "Las señales llegaron confusas." }
      },
      {
        label: "Poner a salvo a quienes tocaron el objeto",
        tags: ["mistico", "callejero"],
        requires: "none",
        successChance: 0.78,
        nextOnSuccess: "f2_expansion",
        nextOnFail: "f2_expansion",
        onSuccess: { fama: 10, equipo: 9, energia: 6, msg: "Evitaste un accidente mayor." },
        onFail: { ovr: -2, fama: -6, energia: -8, msg: "Costó estabilizar el efecto." }
      },
      {
        label: "Tomar un filo de energía oculta",
        tags: ["mistico", "antiheroe"],
        requires: "energy",
        successChance: 0.62,
        nextOnSuccess: "f2_cosmica_cuantica",
        nextOnFail: "f2_expansion",
        onSuccess: { ovr: 5, fama: 9, equipo: -6, msg: "Ganaste potencia arcana." },
        onFail: { ovr: -3, energia: -12, fama: -7, msg: "El poder te dejó agotado." }
      }
    ]
  },

  f2_expansion: {
    saga: "Saga del Infinito (2008–2019)",
    stage: "Fase 2 · 2013–2015",
    title: "Ultrón y nuevos frentes",
    text: "Amenazas de IA, tensión global y rutas cuánticas o cósmicas.",
    options: [
      {
        label: "Liderar la defensa contra la IA",
        tags: ["global", "elite_tec", "alterado"],
        requires: "team",
        successChance: 0.7,
        nextOnSuccess: "f3_encrucijada",
        nextOnFail: "f2_post_ultron_grieta",
        onSuccess: { ovr: 4, equipo: 10, energia: -8, msg: "Frenaste el avance y uniste al grupo." },
        onFail: { ovr: -3, energia: -11, equipo: -6, msg: "Hubo desgaste en el choque." }
      },
      {
        label: "Explorar el Reino Cuántico",
        tags: ["alterado", "cosmico_multi"],
        requires: "none",
        successChance: 0.68,
        nextOnSuccess: "f2_cosmica_cuantica",
        nextOnFail: "f2_varada_cuantica",
        onSuccess: { ovr: 4, energia: 7, msg: "Hallaste datos cuánticos clave." },
        onFail: { ovr: -3, energia: -10, msg: "El retorno fue desordenado." }
      },
      {
        label: "Actuar sin protocolos",
        tags: ["antiheroe", "callejero", "mutante"],
        requires: "energy",
        successChance: 0.66,
        nextOnSuccess: "f3_encrucijada",
        nextOnFail: "f2_post_ultron_grieta",
        onSuccess: { ovr: 4, fama: 9, equipo: -5, energia: -7, msg: "Golpeaste a tu manera." },
        onFail: { ovr: -3, fama: -8, energia: -10, msg: "Te ganó el cansancio." }
      },
      {
        label: "Sostener la moral del equipo",
        tags: ["global", "mistico"],
        requires: "none",
        successChance: 0.76,
        nextOnSuccess: "f3_encrucijada",
        nextOnFail: "f3_encrucijada",
        onSuccess: { equipo: 11, fama: 8, energia: 8, msg: "El grupo salió firme y con aire." },
        onFail: { ovr: -2, equipo: -6, fama: -5, msg: "Quedaron roces internos." }
      }
    ]
  },

  f2_post_ultron_grieta: {
    saga: "Saga del Infinito (2008–2019)",
    stage: "Fase 2 · Secuelas",
    title: "Reconstruir tras el choque",
    text: "La crisis deja preguntas sobre cómo seguir.",
    options: [
      {
        label: "Reforzar defensas y plan del grupo",
        tags: ["global", "elite_tec"],
        requires: "none",
        successChance: 0.74,
        nextOnSuccess: "f3_encrucijada",
        nextOnFail: "f3_encrucijada",
        onSuccess: { equipo: 10, ovr: 3, energia: 7, msg: "Cerraron filas a tiempo." },
        onFail: { ovr: -2, equipo: -6, energia: -8, msg: "Entrenamiento duro." }
      },
      {
        label: "Buscar pistas en el espacio",
        tags: ["cosmico", "cosmico_multi", "mistico"],
        requires: "none",
        successChance: 0.66,
        nextOnSuccess: "f2_cosmica_cuantica",
        nextOnFail: "f3_encrucijada",
        onSuccess: { ovr: 4, fama: 6, msg: "Encontraste señales cósmicas." },
        onFail: { ovr: -3, energia: -10, fama: -5, msg: "Búsqueda sin premio rápido." }
      },
      {
        label: "Ayudar en las zonas afectadas",
        tags: ["callejero", "antiheroe"],
        requires: "none",
        successChance: 0.76,
        nextOnSuccess: "f3_encrucijada",
        nextOnFail: "f3_encrucijada",
        onSuccess: { fama: 11, ovr: 3, energia: 6, msg: "Recuperaste respaldo popular." },
        onFail: { ovr: -2, fama: -6, energia: -8, msg: "Trabajo largo y pesado." }
      },
      {
        label: "Entrenar en silencio y recuperarte",
        tags: ["mutante", "alterado"],
        requires: "none",
        successChance: 0.74,
        nextOnSuccess: "f3_encrucijada",
        nextOnFail: "f3_encrucijada",
        onSuccess: { ovr: 3, fama: -2, energia: 12, msg: "Volviste afilado y con aire." },
        onFail: { ovr: -2, energia: -8, msg: "Te exigiste de más." }
      }
    ]
  },

  f2_varada_cuantica: {
    saga: "Saga del Infinito (2008–2019)",
    stage: "Fase 2 · Desvío Cuántico",
    title: "Entre escalas",
    text: "La transición cuántica te desvía y tenés que volver.",
    options: [
      {
        label: "Calcular el retorno con calma",
        tags: ["elite_tec", "alterado", "cosmico_multi"],
        requires: "none",
        successChance: 0.74,
        nextOnSuccess: "f3_encrucijada",
        nextOnFail: "f3_encrucijada",
        onSuccess: { ovr: 3, energia: 10, msg: "Saliste limpio y recuperado." },
        onFail: { ovr: -2, energia: -9, msg: "Saliste con lo justo." }
      },
      {
        label: "Forzar el salto con potencia",
        tags: ["mutante", "mistico", "cosmico"],
        requires: "energy",
        successChance: 0.64,
        nextOnSuccess: "f3_titan_asalto",
        nextOnFail: "f3_encrucijada",
        onSuccess: { ovr: 5, fama: 7, energia: -9, msg: "Rompiste la barrera directo a la acción." },
        onFail: { ovr: -3, energia: -12, fama: -5, msg: "El salto te dejó cansado." }
      },
      {
        label: "Adaptarte al entorno y sobrevivir",
        tags: ["antiheroe", "callejero"],
        requires: "none",
        successChance: 0.72,
        nextOnSuccess: "f3_encrucijada",
        nextOnFail: "f3_encrucijada",
        onSuccess: { ovr: 3, energia: 8, msg: "Buen instinto de supervivencia." },
        onFail: { ovr: -2, energia: -8, equipo: -4, msg: "Perdiste señal un rato." }
      },
      {
        label: "Pedir apoyo calculado al equipo",
        tags: ["global", "elite_tec"],
        requires: "team",
        successChance: 0.78,
        nextOnSuccess: "f3_encrucijada",
        nextOnFail: "f3_encrucijada",
        onSuccess: { equipo: 10, ovr: 3, energia: 7, msg: "Te trajeron de vuelta a tiempo." },
        onFail: { ovr: -2, equipo: -6, energia: -8, msg: "La señal tardó en llegar." }
      }
    ]
  },

  f2_cosmica_cuantica: {
    saga: "Saga del Infinito (2008–2019)",
    stage: "Fase 2 · Frontera Cósmica",
    title: "Más allá de la Tierra",
    text: "Batallas espaciales y señales de amenazas mayores.",
    options: [
      {
        label: "Pelear contra una flota hostil",
        tags: ["cosmico", "cosmico_multi", "global"],
        requires: "energy",
        successChance: 0.68,
        nextOnSuccess: "f3_titan_asalto",
        nextOnFail: "f3_encrucijada",
        onSuccess: { ovr: 5, fama: 9, energia: -9, msg: "Gran batalla espacial." },
        onFail: { ovr: -3, energia: -12, fama: -6, msg: "El choque espacial fue duro." }
      },
      {
        label: "Estudiar la energía sin exponerte",
        tags: ["elite_tec", "mistico", "alterado"],
        requires: "none",
        successChance: 0.74,
        nextOnSuccess: "f3_encrucijada",
        nextOnFail: "f3_encrucijada",
        onSuccess: { ovr: 4, energia: 9, msg: "Lectura limpia y con energía." },
        onFail: { ovr: -2, energia: -9, msg: "Interferencia en los sensores." }
      },
      {
        label: "Aprovechar el choque entre bandos",
        tags: ["antiheroe", "cosmico"],
        requires: "none",
        successChance: 0.62,
        nextOnSuccess: "f3_titan_asalto",
        nextOnFail: "f3_encrucijada",
        onSuccess: { ovr: 5, fama: 10, equipo: -6, msg: "Sacaste ventaja del cruce." },
        onFail: { ovr: -3, fama: -8, energia: -10, msg: "Quedaste en el medio del fuego." }
      },
      {
        label: "Proteger a inocentes en el sector",
        tags: ["callejero", "global", "mutante"],
        requires: "team",
        successChance: 0.76,
        nextOnSuccess: "f3_encrucijada",
        nextOnFail: "f3_encrucijada",
        onSuccess: { fama: 10, equipo: 9, energia: 7, msg: "Salvaste a todos en el sector." },
        onFail: { ovr: -2, fama: -6, energia: -8, msg: "Defensa exigente." }
      }
    ]
  },

  f3_encrucijada: {
    saga: "Saga del Infinito (2008–2019)",
    stage: "Fase 3 · 2016–2019",
    title: "Civil War y la fractura",
    text: "Debate, bandos divididos y la sombra de una guerra mayor.",
    options: [
      {
        label: "Defender la autonomía de cada héroe",
        tags: ["mutante", "antiheroe", "callejero"],
        requires: "none",
        successChance: 0.7,
        nextOnSuccess: "f3_titan_asalto",
        nextOnFail: "f3_escombros_titan",
        onSuccess: { ovr: 4, fama: 9, equipo: -5, msg: "Postura firme en el cruce." },
        onFail: { ovr: -3, fama: -8, equipo: -8, msg: "El choque dejó grietas." }
      },
      {
        label: "Sostener la unidad del grupo",
        tags: ["global", "elite_tec"],
        requires: "team",
        successChance: 0.7,
        nextOnSuccess: "f3_titan_asalto",
        nextOnFail: "f3_escombros_titan",
        onSuccess: { equipo: 12, ovr: 3, fama: -3, energia: 6, msg: "Salvaste lazos clave." },
        onFail: { ovr: -3, equipo: -8, energia: -8, msg: "La división golpeó al grupo." }
      },
      {
        label: "Preparar estrategia para lo que viene",
        tags: ["alterado", "mistico", "cosmico_multi"],
        requires: "none",
        successChance: 0.74,
        nextOnSuccess: "f3_titan_asalto",
        nextOnFail: "f3_escombros_titan",
        onSuccess: { ovr: 4, energia: 8, msg: "Te adelantaste a la tormenta." },
        onFail: { ovr: -2, energia: -10, equipo: -5, msg: "Te aislaste un poco." }
      },
      {
        label: "Ir por libre y guardar aire",
        tags: ["antiheroe", "callejero"],
        requires: "none",
        successChance: 0.76,
        nextOnSuccess: "f3_titan_asalto",
        nextOnFail: "f3_escombros_titan",
        onSuccess: { ovr: 3, fama: -4, energia: 11, msg: "Conservaste fuerzas." },
        onFail: { ovr: -2, fama: -7, equipo: -7, msg: "Cuestionaron tu distancia." }
      }
    ]
  },

  f3_escombros_titan: {
    saga: "Saga del Infinito (2008–2019)",
    stage: "Fase 3 · Golpe de Infinity War",
    title: "Entre las ruinas",
    text: "Golpe duro y reagrupamiento antes de Endgame.",
    options: [
      {
        label: "Reorganizar al grupo para Endgame",
        tags: ["elite_tec", "global", "alterado"],
        requires: "team",
        successChance: 0.74,
        nextOnSuccess: "f4_grietas",
        nextOnFail: "f4_grietas",
        onSuccess: { equipo: 11, ovr: 3, energia: 8, msg: "Armaron el contragolpe." },
        onFail: { ovr: -3, energia: -10, equipo: -6, msg: "Golpe anímico fuerte." }
      },
      {
        label: "Buscar una vía temporal o dimensional",
        tags: ["mistico", "cosmico_multi", "alterado"],
        requires: "none",
        successChance: 0.66,
        nextOnSuccess: "f4_grietas",
        nextOnFail: "f4_grietas",
        onSuccess: { ovr: 5, fama: 8, msg: "Encontraste una pista decisiva." },
        onFail: { ovr: -3, energia: -11, msg: "Búsqueda pesada." }
      },
      {
        label: "Volver al frente sin retroceder",
        tags: ["cosmico", "mutante", "antiheroe"],
        requires: "energy",
        successChance: 0.62,
        nextOnSuccess: "f4_grietas",
        nextOnFail: "f4_grietas",
        onSuccess: { ovr: 5, fama: 9, energia: -9, msg: "Resististe en primera línea." },
        onFail: { ovr: -4, energia: -13, fama: -6, msg: "Cierre con cansancio." }
      },
      {
        label: "Cuidar a los civiles y heridos",
        tags: ["callejero", "global"],
        requires: "none",
        successChance: 0.78,
        nextOnSuccess: "f4_grietas",
        nextOnFail: "f4_grietas",
        onSuccess: { fama: 11, equipo: 9, energia: 8, msg: "Sostuviste lo más humano." },
        onFail: { ovr: -2, fama: -6, energia: -8, msg: "Crisis muy amplia." }
      }
    ]
  },

  f3_titan_asalto: {
    saga: "Saga del Infinito (2008–2019)",
    stage: "Fase 3 · Infinity War / Endgame",
    title: "El choque por las Gemas",
    text: "La batalla define el cierre de la Saga del Infinito.",
    options: [
      {
        label: "Enfrentar el combate frente a frente",
        tags: ["cosmico", "alterado", "global"],
        requires: "energy",
        successChance: 0.62,
        nextOnSuccess: "f4_grietas",
        nextOnFail: "f3_escombros_titan",
        onSuccess: { ovr: 5, fama: 10, energia: -10, msg: "Aguantaste un golpe enorme." },
        onFail: { ovr: -4, energia: -13, fama: -6, msg: "Quedaste entre escombros." }
      },
      {
        label: "Coordinar la misión de Endgame",
        tags: ["elite_tec", "cosmico_multi"],
        requires: "team",
        successChance: 0.74,
        nextOnSuccess: "f4_grietas",
        nextOnFail: "f3_escombros_titan",
        onSuccess: { ovr: 4, equipo: 10, energia: 7, msg: "Plan certero en Endgame." },
        onFail: { ovr: -3, energia: -10, equipo: -7, msg: "Hubo un contratiempo." }
      },
      {
        label: "Desplegar poder en el instante clave",
        tags: ["mistico", "mutante", "cosmico"],
        requires: "energy",
        successChance: 0.64,
        nextOnSuccess: "f4_grietas",
        nextOnFail: "f3_escombros_titan",
        onSuccess: { ovr: 5, fama: 9, energia: -9, msg: "Golpe que marcó la batalla." },
        onFail: { ovr: -3, energia: -12, msg: "Te dejó sin aire." }
      },
      {
        label: "Golpear por sorpresa",
        tags: ["antiheroe", "callejero"],
        requires: "none",
        successChance: 0.68,
        nextOnSuccess: "f4_grietas",
        nextOnFail: "f3_escombros_titan",
        onSuccess: { ovr: 4, fama: 9, energia: -7, msg: "Movida astuta y decisiva." },
        onFail: { ovr: -3, energia: -10, fama: -6, msg: "Apuesta ajustada." }
      }
    ]
  },

  f4_grietas: {
    saga: "Saga del Multiverso (2021–2027)",
    stage: "Fase 4 · 2021–2022",
    title: "Grietas en el multiverso",
    text: "Realidades alternativas y variantes sacuden el mundo.",
    options: [
      {
        label: "Contener una anomalía de realidad",
        tags: ["mistico", "cosmico_multi", "alterado"],
        requires: "energy",
        successChance: 0.7,
        nextOnSuccess: "f4_exclusivo_mistico",
        nextOnFail: "f5_multiverso_cruce",
        onSuccess: { ovr: 4, fama: 8, energia: -8, msg: "Estabilizaste la fisura." },
        onFail: { ovr: -3, energia: -11, fama: -5, msg: "La realidad tiró fuerte." }
      },
      {
        label: "Guiar a la nueva generación",
        tags: ["global", "elite_tec", "mutante"],
        requires: "team",
        successChance: 0.76,
        nextOnSuccess: "f4_exclusivo_mutante",
        nextOnFail: "f5_multiverso_cruce",
        onSuccess: { equipo: 11, ovr: 3, energia: 8, msg: "Buen respaldo a los nuevos." },
        onFail: { ovr: -2, equipo: -6, energia: -8, msg: "Transición movida." }
      },
      {
        label: "Resolver el choque en silencio",
        tags: ["callejero", "antiheroe"],
        requires: "none",
        successChance: 0.72,
        nextOnSuccess: "f4_exclusivo_antiheroe",
        nextOnFail: "f5_multiverso_cruce",
        onSuccess: { ovr: 4, fama: 9, energia: 7, msg: "Lo resolviste sin ruido." },
        onFail: { ovr: -2, fama: -7, energia: -9, msg: "Quedaste sin apoyo visible." }
      },
      {
        label: "Rastrear variantes de otras líneas",
        tags: ["cosmico", "cosmico_multi"],
        requires: "none",
        successChance: 0.66,
        nextOnSuccess: "f5_multiverso_cruce",
        nextOnFail: "f5_multiverso_cruce",
        onSuccess: { ovr: 5, energia: 8, msg: "Detectaste señales claras." },
        onFail: { ovr: -3, energia: -10, msg: "Interferencia dimensional." }
      }
    ]
  },

  f4_exclusivo_mistico: {
    saga: "Saga del Multiverso (2021–2027)",
    stage: "Fase 4 · Nexo Místico",
    title: "Cruce de dimensiones",
    text: "Dos realidades se tocan en un punto inestable.",
    options: [
      {
        label: "Anclar el nexo con firmeza",
        tags: ["mistico", "global"],
        requires: "energy",
        successChance: 0.76,
        nextOnSuccess: "f5_multiverso_cruce",
        nextOnFail: "f5_multiverso_cruce",
        onSuccess: { ovr: 4, equipo: 8, energia: 6, msg: "Nexo asegurado." },
        onFail: { ovr: -2, energia: -10, fama: -5, msg: "Presión dimensional." }
      },
      {
        label: "Consultar saber oculto",
        tags: ["mistico", "cosmico_multi"],
        requires: "none",
        successChance: 0.66,
        nextOnSuccess: "f5_multiverso_cruce",
        nextOnFail: "f5_multiverso_cruce",
        onSuccess: { ovr: 5, energia: 8, msg: "Advertencia clave del multiverso." },
        onFail: { ovr: -3, energia: -11, fama: -6, msg: "Consulta exigente." }
      },
      {
        label: "Rescatar a los atrapados",
        tags: ["mistico", "callejero"],
        requires: "none",
        successChance: 0.78,
        nextOnSuccess: "f5_multiverso_cruce",
        nextOnFail: "f5_multiverso_cruce",
        onSuccess: { fama: 11, equipo: 8, energia: 8, msg: "Todos de vuelta a salvo." },
        onFail: { ovr: -2, energia: -9, fama: -6, msg: "Rescate ajustado." }
      },
      {
        label: "Absorber un fragmento arcano",
        tags: ["mistico", "antiheroe"],
        requires: "energy",
        successChance: 0.62,
        nextOnSuccess: "f5_multiverso_cruce",
        nextOnFail: "f5_multiverso_cruce",
        onSuccess: { ovr: 5, fama: 9, equipo: -6, msg: "Sumaste poder singular." },
        onFail: { ovr: -3, energia: -12, equipo: -6, msg: "Inestable por momentos." }
      }
    ]
  },

  f4_exclusivo_mutante: {
    saga: "Saga del Multiverso (2021–2027)",
    stage: "Fase 4 · Horizonte Mutante",
    title: "Variantes y gen X",
    text: "Nuevos cruces ponen a prueba a los mutantes.",
    options: [
      {
        label: "Armar refugio y red de apoyo",
        tags: ["mutante", "global"],
        requires: "team",
        successChance: 0.76,
        nextOnSuccess: "f5_multiverso_cruce",
        nextOnFail: "f5_multiverso_cruce",
        onSuccess: { equipo: 11, fama: 9, energia: 8, msg: "Respaldo sólido." },
        onFail: { ovr: -2, equipo: -6, fama: -6, msg: "Presión externa." }
      },
      {
        label: "Medirte con una variante fuerte",
        tags: ["mutante", "cosmico_multi"],
        requires: "energy",
        successChance: 0.66,
        nextOnSuccess: "f5_multiverso_cruce",
        nextOnFail: "f5_multiverso_cruce",
        onSuccess: { ovr: 5, fama: 8, energia: -8, msg: "Subiste tu techo." },
        onFail: { ovr: -3, energia: -11, msg: "Duelo duro." }
      },
      {
        label: "Defender a los tuyos con dureza",
        tags: ["mutante", "antiheroe", "callejero"],
        requires: "none",
        successChance: 0.7,
        nextOnSuccess: "f5_multiverso_cruce",
        nextOnFail: "f5_multiverso_cruce",
        onSuccess: { ovr: 4, fama: 8, energia: 6, msg: "Respuesta sin dudar." },
        onFail: { ovr: -3, fama: -7, energia: -9, msg: "Choque con secuelas." }
      },
      {
        label: "Compartir datos tácticos",
        tags: ["mutante", "elite_tec"],
        requires: "team",
        successChance: 0.78,
        nextOnSuccess: "f5_multiverso_cruce",
        nextOnFail: "f5_multiverso_cruce",
        onSuccess: { ovr: 3, equipo: 9, energia: 9, msg: "Grupo más fuerte." },
        onFail: { ovr: -2, equipo: -5, energia: -7, msg: "Datos incompletos." }
      }
    ]
  },

  f4_exclusivo_antiheroe: {
    saga: "Saga del Multiverso (2021–2027)",
    stage: "Fase 4 · Fuera de Regla",
    title: "Sin manual multiversal",
    text: "Sin reglas rígidas, jugás con tus propios códigos.",
    options: [
      {
        label: "Golpe rápido y pista clave",
        tags: ["antiheroe", "callejero"],
        requires: "none",
        successChance: 0.72,
        nextOnSuccess: "f5_multiverso_cruce",
        nextOnFail: "f5_multiverso_cruce",
        onSuccess: { ovr: 4, fama: 9, energia: 7, msg: "Ventaja limpia." },
        onFail: { ovr: -2, fama: -8, energia: -9, msg: "Salió torcido." }
      },
      {
        label: "Trato gris pero útil",
        tags: ["antiheroe", "cosmico_multi"],
        requires: "none",
        successChance: 0.64,
        nextOnSuccess: "f5_multiverso_cruce",
        nextOnFail: "f5_multiverso_cruce",
        onSuccess: { ovr: 4, energia: 9, equipo: -5, msg: "Margen de acción." },
        onFail: { ovr: -3, equipo: -8, fama: -6, msg: "Desconfianza del grupo." }
      },
      {
        label: "Salvar gente a tu manera",
        tags: ["antiheroe", "callejero", "global"],
        requires: "none",
        successChance: 0.76,
        nextOnSuccess: "f5_multiverso_cruce",
        nextOnFail: "f5_multiverso_cruce",
        onSuccess: { fama: 11, ovr: 3, energia: 7, msg: "Respondiste cuando tocó." },
        onFail: { ovr: -2, fama: -7, energia: -8, msg: "Rescate caótico." }
      },
      {
        label: "Guardar fuerzas para la Fase 5",
        tags: ["antiheroe", "mutante"],
        requires: "none",
        successChance: 0.72,
        nextOnSuccess: "f5_multiverso_cruce",
        nextOnFail: "f5_multiverso_cruce",
        onSuccess: { ovr: 3, fama: -3, energia: 11, msg: "Aire listo para lo que viene." },
        onFail: { ovr: -2, energia: -8, msg: "Perdiste ritmo." }
      }
    ]
  },

  f5_multiverso_cruce: {
    saga: "Saga del Multiverso (2021–2027)",
    stage: "Fase 5 · 2023–2025",
    title: "Choques de realidades",
    text: "Incursiones, variantes y reacomodos antes del gran choque.",
    options: [
      {
        label: "Incursión táctica cuántica",
        tags: ["alterado", "elite_tec", "cosmico_multi"],
        requires: "energy",
        successChance: 0.7,
        nextOnSuccess: "f5_incursion_alerta",
        nextOnFail: "f6_doomsday",
        onSuccess: { ovr: 4, equipo: 8, energia: 6, msg: "Paso preciso." },
        onFail: { ovr: -3, energia: -11, msg: "Desgaste cuántico." }
      },
      {
        label: "Aliarte con una variante explosiva",
        tags: ["antiheroe", "mutante"],
        requires: "none",
        successChance: 0.64,
        nextOnSuccess: "f5_incursion_alerta",
        nextOnFail: "f6_doomsday",
        onSuccess: { ovr: 5, fama: 10, equipo: -6, energia: -8, msg: "Dúo de alto impacto." },
        onFail: { ovr: -3, equipo: -8, fama: -6, msg: "Cruce desordenado." }
      },
      {
        label: "Ordenar el liderazgo del equipo",
        tags: ["global", "cosmico"],
        requires: "team",
        successChance: 0.76,
        nextOnSuccess: "f6_doomsday",
        nextOnFail: "f6_doomsday",
        onSuccess: { fama: 10, equipo: 10, energia: 9, msg: "Frente firme." },
        onFail: { ovr: -2, fama: -8, equipo: -6, msg: "Etapa exigente." }
      },
      {
        label: "Frenar una incursión peligrosa",
        tags: ["mistico", "callejero", "cosmico"],
        requires: "energy",
        successChance: 0.64,
        nextOnSuccess: "f6_doomsday",
        nextOnFail: "f6_doomsday",
        onSuccess: { ovr: 5, energia: -8, msg: "Avance contenido." },
        onFail: { ovr: -3, energia: -12, fama: -6, msg: "Choque pesado." }
      }
    ]
  },

  f5_incursion_alerta: {
    saga: "Saga del Multiverso (2021–2027)",
    stage: "Fase 5 · Antesala de Doomsday",
    title: "Alerta de incursión",
    text: "Las señales apuntan directo a Avengers: Doomsday.",
    options: [
      {
        label: "Enlace con Los 4 Fantásticos y ciencia",
        tags: ["elite_tec", "alterado", "global"],
        requires: "team",
        successChance: 0.76,
        nextOnSuccess: "f6_doomsday",
        nextOnFail: "f6_doomsday",
        onSuccess: { ovr: 4, equipo: 10, energia: 8, msg: "Red científica y táctica lista." },
        onFail: { ovr: -2, equipo: -6, energia: -8, msg: "Ajustes de último minuto." }
      },
      {
        label: "Reforzar núcleo o armadura",
        tags: ["cosmico", "mutante", "mistico"],
        requires: "none",
        successChance: 0.68,
        nextOnSuccess: "f6_doomsday",
        nextOnFail: "f6_doomsday",
        onSuccess: { ovr: 4, energia: 11, msg: "Listo para impactos fuertes." },
        onFail: { ovr: -2, energia: -9, msg: "Preparación dura." }
      },
      {
        label: "Preparar evacuación en ciudades",
        tags: ["callejero", "global"],
        requires: "none",
        successChance: 0.78,
        nextOnSuccess: "f6_doomsday",
        nextOnFail: "f6_doomsday",
        onSuccess: { fama: 11, equipo: 8, energia: 9, msg: "Plan claro para la gente." },
        onFail: { ovr: -2, fama: -6, energia: -8, msg: "Despliegue pesado." }
      },
      {
        label: "Guardar un as bajo la manga",
        tags: ["antiheroe", "cosmico_multi"],
        requires: "none",
        successChance: 0.68,
        nextOnSuccess: "f6_doomsday",
        nextOnFail: "f6_doomsday",
        onSuccess: { ovr: 4, fama: 8, energia: 8, msg: "Carta guardada para el final." },
        onFail: { ovr: -2, fama: -7, equipo: -6, msg: "Generó dudas." }
      }
    ]
  },

  f6_doomsday: {
    saga: "Saga del Multiverso (2021–2027)",
    stage: "Fase 6 · Avengers: Doomsday",
    title: "Los 4 Fantásticos y Doomsday",
    text: "Los mundos chocan y Doomsday pone todo a prueba.",
    options: [
      {
        label: "Coordinar con Los 4 Fantásticos",
        tags: ["elite_tec", "alterado", "global"],
        requires: "team",
        successChance: 0.72,
        nextOnSuccess: "f6_dilema_nucleo_frente",
        nextOnFail: "f6_doomsday_emergencia",
        onSuccess: { ovr: 5, equipo: 11, fama: 9, energia: 7, msg: "Contuvieron el golpe inicial." },
        onFail: { ovr: -3, energia: -11, equipo: -7, msg: "Doomsday pegó duro." }
      },
      {
        label: "Chocar de frente contra Doomsday",
        tags: ["cosmico", "mutante", "mistico"],
        requires: "energy",
        successChance: 0.62,
        nextOnSuccess: "f6_dilema_nucleo_frente",
        nextOnFail: "f6_doomsday_emergencia",
        onSuccess: { ovr: 6, fama: 11, energia: -10, msg: "Aguantaste un choque brutal." },
        onFail: { ovr: -4, energia: -13, fama: -6, msg: "Quedaste al límite." }
      },
      {
        label: "Abrir paso entre realidades",
        tags: ["cosmico_multi", "antiheroe"],
        requires: "energy",
        successChance: 0.66,
        nextOnSuccess: "f6_dilema_nucleo_frente",
        nextOnFail: "f6_doomsday_emergencia",
        onSuccess: { ovr: 4, energia: 10, msg: "Buen margen táctico." },
        onFail: { ovr: -3, energia: -11, equipo: -6, msg: "Salto turbulento." }
      },
      {
        label: "Sostener evacuación y moral",
        tags: ["callejero", "global"],
        requires: "none",
        successChance: 0.78,
        nextOnSuccess: "f6_dilema_nucleo_frente",
        nextOnFail: "f6_doomsday_emergencia",
        onSuccess: { fama: 12, equipo: 10, energia: 9, msg: "Salvaste vidas en medio del caos." },
        onFail: { ovr: -2, fama: -7, energia: -9, msg: "Impacto enorme." }
      }
    ]
  },

  f6_doomsday_emergencia: {
    saga: "Saga del Multiverso (2021–2027)",
    stage: "Fase 6 · Reagrupamiento",
    title: "Rumbo a Secret Wars",
    text: "Reagrupate y abrí camino hacia Secret Wars.",
    options: [
      {
        label: "Reunir aliados y armar defensa",
        tags: ["global", "elite_tec", "callejero"],
        requires: "team",
        successChance: 0.76,
        nextOnSuccess: "f6_dilema_nucleo_frente",
        nextOnFail: "f6_secret_wars",
        onSuccess: { equipo: 11, ovr: 3, energia: 9, msg: "Frente recompuesto." },
        onFail: { ovr: -2, energia: -9, equipo: -6, msg: "Reagrupamiento duro." }
      },
      {
        label: "Usar potencia para abrir paso",
        tags: ["cosmico", "mutante", "mistico", "alterado"],
        requires: "energy",
        successChance: 0.64,
        nextOnSuccess: "f6_secret_wars",
        nextOnFail: "f6_secret_wars",
        onSuccess: { ovr: 5, fama: 9, energia: -9, msg: "Rompiste el cerco." },
        onFail: { ovr: -3, energia: -12, msg: "Avance cansado." }
      },
      {
        label: "Buscar brecha hacia Secret Wars",
        tags: ["cosmico_multi", "antiheroe"],
        requires: "none",
        successChance: 0.68,
        nextOnSuccess: "f6_secret_wars",
        nextOnFail: "f6_secret_wars",
        onSuccess: { ovr: 4, fama: 9, energia: 7, msg: "Acceso directo encontrado." },
        onFail: { ovr: -2, fama: -7, energia: -9, msg: "Paso movido." }
      },
      {
        label: "Golpear en silencio",
        tags: ["antiheroe", "callejero"],
        requires: "none",
        successChance: 0.7,
        nextOnSuccess: "f6_secret_wars",
        nextOnFail: "f6_secret_wars",
        onSuccess: { ovr: 4, fama: 9, energia: 8, msg: "Golpe inesperado." },
        onFail: { ovr: -2, energia: -9, fama: -6, msg: "Alto riesgo." }
      }
    ]
  },

  f6_dilema_nucleo_frente: {
    saga: "Saga del Multiverso (2021–2027)",
    stage: "Fase 6 · Decisión Límite",
    title: "¿Frente aliado o tu núcleo?",
    text: "Dos urgencias al mismo tiempo antes de Secret Wars.",
    options: [
      {
        label: "Sostener el frente aliado",
        tags: ["global", "callejero", "mutante"],
        requires: "energy",
        minigame: true,
        successChance: 0.68,
        nextOnSuccess: "f6_secret_wars",
        nextOnFail: "f6_secret_wars",
        onSuccess: { equipo: 11, fama: 10, ovr: 4, energia: -9, msg: "Salvaste el frente." },
        onFail: { ovr: -3, energia: -12, equipo: -5, msg: "Sostuviste pero cansado." }
      },
      {
        label: "Proteger tu núcleo y energía",
        tags: ["elite_tec", "antiheroe", "alterado"],
        requires: "none",
        minigame: true,
        successChance: 0.76,
        nextOnSuccess: "f6_secret_wars",
        nextOnFail: "f6_secret_wars",
        onSuccess: { ovr: 4, energia: 16, equipo: -5, msg: "Llegás con núcleo fuerte." },
        onFail: { ovr: -2, equipo: -8, fama: -6, msg: "Hubo reproches." }
      },
      {
        label: "Dividir energía en ambos puntos",
        tags: ["mistico", "cosmico", "cosmico_multi"],
        requires: "energy",
        minigame: true,
        successChance: 0.62,
        nextOnSuccess: "f6_secret_wars",
        nextOnFail: "f6_secret_wars",
        onSuccess: { ovr: 6, equipo: 9, fama: 9, energia: -10, msg: "Jugada de altísimo nivel." },
        onFail: { ovr: -3, energia: -13, fama: -6, msg: "Ambos lados al límite." }
      },
      {
        label: "Armar trampa sin gastar núcleo",
        tags: ["antiheroe", "callejero", "elite_tec"],
        requires: "none",
        minigame: true,
        successChance: 0.7,
        nextOnSuccess: "f6_secret_wars",
        nextOnFail: "f6_secret_wars",
        onSuccess: { ovr: 4, fama: 9, energia: 10, msg: "Ganaste tiempo con astucia." },
        onFail: { ovr: -2, fama: -7, energia: -9, msg: "No frenó del todo." }
      }
    ]
  },

  f6_secret_wars: {
    saga: "Saga del Multiverso (2021–2027)",
    stage: "Fase 6 · Avengers: Secret Wars",
    title: "El cierre en Secret Wars",
    text: "Mundos chocan y tu última jugada sella tu leyenda.",
    options: [
      {
        label: "Unir héroes de distintas realidades",
        tags: ["cosmico_multi", "global", "cosmico"],
        requires: "team",
        minigame: true,
        successChance: 0.7,
        nextOnSuccess: null,
        nextOnFail: null,
        onSuccess: { ovr: 5, equipo: 11, fama: 11, energia: 8, msg: "Unión épica en Secret Wars." },
        onFail: { ovr: -3, equipo: -8, energia: -10, msg: "Choque entre mundos." }
      },
      {
        label: "Desatar tu máximo potencial",
        tags: ["mutante", "mistico", "alterado"],
        requires: "energy",
        minigame: true,
        successChance: 0.62,
        nextOnSuccess: null,
        nextOnFail: null,
        onSuccess: { ovr: 6, fama: 12, energia: -11, msg: "Cierre inolvidable." },
        onFail: { ovr: -4, energia: -13, fama: -7, msg: "Esfuerzo extremo." }
      },
      {
        label: "Golpe preciso en el momento justo",
        tags: ["elite_tec", "callejero"],
        requires: "none",
        minigame: true,
        successChance: 0.76,
        nextOnSuccess: null,
        nextOnFail: null,
        onSuccess: { ovr: 4, fama: 10, equipo: 9, energia: 10, msg: "Decisión certera." },
        onFail: { ovr: -2, energia: -9, fama: -6, msg: "Margen mínimo." }
      },
      {
        label: "Romper las reglas del tablero",
        tags: ["antiheroe", "cosmico_multi"],
        requires: "none",
        minigame: true,
        successChance: 0.64,
        nextOnSuccess: null,
        nextOnFail: null,
        onSuccess: { ovr: 5, fama: 12, equipo: -6, energia: -8, msg: "Giros que cambian el final." },
        onFail: { ovr: -3, fama: -8, equipo: -8, msg: "Apuesta arriesgada." }
      }
    ]
  }
};

const ORIGIN_LABELS = {
  elite_tec: "Humanos de élite y tecnología",
  mutante: "Mutantes",
  alterado: "Alterados por ciencia o accidentes",
  mistico: "Místicos y sobrenaturales",
  cosmico: "Cósmicos, divinos y alienígenas"
};

const SCALE_LABELS = {
  callejero: "Callejero",
  global: "Global o de equipo",
  cosmico_multi: "Cósmico y multiversal",
  antiheroe: "Antihéroe"
};

const STORAGE_KEY = "cronicas_multiverso_runs_v1";

// =========================================================================
// MOTOR DE AUDIO INSPIRADO EN "THE AVENGERS", "PORTALS" Y "LIVE TO RISE"
// =========================================================================
const SoundEngine = (() => {
  let ctx = null;
  let timerId = null;
  let step = 0;
  let enabled = true;
  let currentTrack = "avengers";

  const N = {
    D2: 73.42, F2: 87.31, G2: 98.00, A2: 110.00, Bb2: 116.54, C3: 130.81, D3: 146.83,
    E3: 164.81, F3: 174.61, G3: 196.00, A3: 220.00, Bb3: 233.08, C4: 261.63, D4: 293.66,
    E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00
  };

  const ARRANGEMENTS = {
    avengers: {
      label: "Inspirado en The Avengers",
      tempoMs: 360,
      steps: [
        { bass: N.D2, lead: N.D4, chord: [N.F3, N.A3] },
        { bass: N.D2, lead: N.A4, chord: [N.F3, N.A3] },
        { bass: N.D2, lead: N.G4, chord: [N.F3, N.A3] },
        { bass: N.D2, lead: N.F4, chord: [N.F3, N.A3] },
        { bass: N.Bb2, lead: N.E4, chord: [N.D3, N.G3] },
        { bass: N.Bb2, lead: N.D4, chord: [N.D3, N.G3] },
        { bass: N.C3, lead: N.E4, chord: [N.G3, N.C4] },
        { bass: N.A2, lead: N.A3, chord: [N.E3, N.A3] }
      ],
      leadType: "triangle",
      bassType: "sine",
      gainLead: 0.05,
      gainBass: 0.055
    },
    portals: {
      label: "Inspirado en Portals",
      tempoMs: 430,
      steps: [
        { bass: N.D2, lead: N.A3, chord: [N.D4, N.F4] },
        { bass: N.D2, lead: N.D4, chord: [N.F4, N.A4] },
        { bass: N.Bb2, lead: N.Bb3, chord: [N.D4, N.F4] },
        { bass: N.Bb2, lead: N.F4, chord: [N.G4, N.Bb3] },
        { bass: N.G2, lead: N.G3, chord: [N.Bb3, N.D4] },
        { bass: N.G2, lead: N.D4, chord: [N.G4, N.A4] },
        { bass: N.A2, lead: N.E4, chord: [N.A3, N.C4] },
        { bass: N.A2, lead: N.A4, chord: [N.E4, N.G4] }
      ],
      leadType: "sine",
      bassType: "sine",
      gainLead: 0.055,
      gainBass: 0.05
    },
    liveToRise: {
      label: "Inspirado en Live to Rise",
      tempoMs: 250,
      steps: [
        { bass: N.G2, lead: N.G3, chord: [N.D3, N.G3] },
        { bass: N.G2, lead: N.Bb3, chord: [N.D3, N.G3] },
        { bass: N.G2, lead: N.C4, chord: [N.D3, N.G3] },
        { bass: N.G2, lead: N.D4, chord: [N.D3, N.G3] },
        { bass: N.F2, lead: N.C4, chord: [N.C3, N.F3] },
        { bass: N.F2, lead: N.A3, chord: [N.C3, N.F3] },
        { bass: N.Bb2, lead: N.Bb3, chord: [N.F3, N.Bb3] },
        { bass: N.A2, lead: N.A3, chord: [N.E3, N.A3] }
      ],
      leadType: "sawtooth",
      bassType: "triangle",
      gainLead: 0.032,
      gainBass: 0.055
    }
  };

  function ensureContext() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) ctx = new AudioCtx();
    }
    if (ctx && ctx.state === "suspended" && enabled) {
      ctx.resume().catch(() => {});
    }
  }

  function triggerVoice(freq, type, startTime, duration, peakGain, cutoff) {
    if (!ctx || !freq) return;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(cutoff, startTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(peakGain, startTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.02);
  }

  function playStep(item, cfg) {
    if (!ctx || !enabled || ctx.state !== "running") return;
    const now = ctx.currentTime;
    const dur = (cfg.tempoMs / 1000) * 1.15;

    triggerVoice(item.bass, cfg.bassType, now, dur * 1.1, cfg.gainBass, 320);
    triggerVoice(item.lead, cfg.leadType, now, dur, cfg.gainLead, cfg.leadType === "sawtooth" ? 880 : 1200);
    item.chord.forEach((cFreq) => {
      triggerVoice(cFreq, "sine", now, dur * 1.2, cfg.gainLead * 0.45, 900);
    });
  }

  function playSfx(kind) {
    ensureContext();
    if (!ctx || !enabled || ctx.state !== "running") return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    if (kind === "success") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.15);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    } else if (kind === "fail") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(246.94, now);
      osc.frequency.exponentialRampToValueAtTime(164.81, now + 0.18);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
    } else {
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, now);
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.1);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
    }

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.22);
  }

  function scheduleLoop() {
    clearInterval(timerId);
    const cfg = ARRANGEMENTS[currentTrack] || ARRANGEMENTS.avengers;
    timerId = setInterval(() => {
      if (!enabled) return;
      const item = cfg.steps[step % cfg.steps.length];
      playStep(item, cfg);
      step += 1;
    }, cfg.tempoMs);
  }

  function updateBadge() {
    const moodEl = document.getElementById("music-mood");
    const btnEl = document.getElementById("btn-music");
    const cfg = ARRANGEMENTS[currentTrack] || ARRANGEMENTS.avengers;
    if (moodEl) {
      moodEl.textContent = enabled ? `Tema: ${cfg.label}` : "Tema: Silenciado";
    }
    if (btnEl) {
      btnEl.textContent = enabled ? "Música: ON" : "Música: OFF";
    }
  }

  function setTrack(trackKey) {
    const next = ARRANGEMENTS[trackKey] ? trackKey : "avengers";
    const changed = next !== currentTrack;
    currentTrack = next;
    if (changed) step = 0;
    updateBadge();
    if (enabled) scheduleLoop();
  }

  function setMood(mood) {
    if (mood === "epico") return setTrack("portals");
    if (mood === "tenso") return setTrack("liveToRise");
    return setTrack("avengers");
  }

  function setMoodForEvent(eventId) {
    if (!eventId) return setTrack("avengers");
    if (eventId === "f3_titan_asalto" || eventId.startsWith("f6_")) {
      return setTrack("portals");
    }
    if (eventId.startsWith("f2_") || eventId.startsWith("f4_") || eventId.startsWith("f5_")) {
      return setTrack("liveToRise");
    }
    return setTrack("avengers");
  }

  function toggle() {
    enabled = !enabled;
    if (enabled) {
      ensureContext();
      scheduleLoop();
    } else {
      clearInterval(timerId);
    }
    updateBadge();
  }

  function kickOnUserGesture() {
    ensureContext();
    if (enabled && !timerId) {
      scheduleLoop();
    }
  }

  return { setMood, setMoodForEvent, playSfx, toggle, kickOnUserGesture, updateBadge };
})();

let state = {};
let pendingMinigame = null;
let animFrameId = null;
let cursorPos = 50;
let cursorDir = 1.65;

const hud = document.getElementById("hud");
const screens = {
  start: document.getElementById("screen-start"),
  event: document.getElementById("screen-event"),
  minigame: document.getElementById("screen-minigame"),
  result: document.getElementById("screen-result"),
  end: document.getElementById("screen-end")
};

function clamp(val, min = 0, max = 100) {
  return Math.max(min, Math.min(max, val));
}

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.add("hidden"));
  screens[name].classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function getFormLabel() {
  const score = state.ovr * 0.6 + state.energia * 0.4;
  if (score >= 82) return "Imparable";
  if (score >= 66) return "En forma";
  if (score >= 48) return "Estable";
  if (score >= 30) return "Tocado";
  return "Al límite";
}

function updateHud() {
  document.getElementById("stat-forma").textContent = getFormLabel();
  document.getElementById("stat-fama").textContent = state.fama;
  document.getElementById("stat-energia").textContent = state.energia;
  document.getElementById("stat-equipo").textContent = state.equipo;
}

function getHeroBonus(tags = []) {
  let bonus = 0;
  if (tags.includes(state.origin)) bonus += 0.08;
  if (tags.includes(state.scale)) bonus += 0.07;
  return bonus;
}

function isOptionBlocked(opt) {
  if (opt.requires === "energy" && state.energia < 25) {
    return "Energía < 25";
  }
  if (opt.requires === "team" && state.equipo < 25) {
    return "Equipo < 25";
  }
  return null;
}

function getConditionAlert() {
  const notes = [];
  if (state.energia < 25) notes.push("Energía baja (<25): algunas jugadas pesadas se bloquean.");
  if (state.equipo < 25) notes.push("Equipo bajo (<25): jugadas de grupo bloqueadas.");
  return notes.join(" ");
}

function loadRuns() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveRun(runEntry) {
  const runs = loadRuns();
  runs.unshift(runEntry);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(runs.slice(0, 6)));
  } catch {}
  renderRecords();
}

function clearRuns() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
  renderRecords();
}

function renderRecords() {
  const runs = loadRuns();
  const bestEl = document.getElementById("record-best");
  const listEl = document.getElementById("records-list");
  listEl.innerHTML = "";

  if (!runs.length) {
    bestEl.textContent = "Mejor OVR: —";
    const li = document.createElement("li");
    li.textContent = "Sin partidas guardadas todavía.";
    listEl.appendChild(li);
    return;
  }

  const bestOvr = Math.max(...runs.map((r) => r.ovr));
  bestEl.textContent = `Mejor OVR: ${bestOvr}`;

  runs.slice(0, 4).forEach((r) => {
    const li = document.createElement("li");
    li.textContent = `${r.name} · OVR ${r.ovr} · ${r.verdict}`;
    listEl.appendChild(li);
  });
}

function startMinigame(opt, baseChance, ev) {
  SoundEngine.setMood("tenso");
  pendingMinigame = { opt, baseChance, ev };
  cursorPos = 5;
  cursorDir = 1.65;
  document.getElementById("minigame-choice-label").textContent = opt.label;
  showScreen("minigame");

  cancelAnimationFrame(animFrameId);
  function step() {
    cursorPos += cursorDir;
    if (cursorPos >= 96) {
      cursorPos = 96;
      cursorDir *= -1;
    } else if (cursorPos <= 4) {
      cursorPos = 4;
      cursorDir *= -1;
    }
    document.getElementById("cursor-marker").style.left = `${cursorPos}%`;
    animFrameId = requestAnimationFrame(step);
  }
  animFrameId = requestAnimationFrame(step);
}

function finishMinigame() {
  if (!pendingMinigame) return;
  cancelAnimationFrame(animFrameId);
  SoundEngine.playSfx("minigameHit");

  const distFromCenter = Math.abs(cursorPos - 50);
  let mod = -0.1;
  let bonusText = "Fuera de centro (-10%)";
  let energyRecover = 0;

  if (distFromCenter <= 10) {
    mod = 0.16;
    bonusText = "Zona dorada (+16% y +6 Energía)";
    energyRecover = 6;
  } else if (distFromCenter <= 22) {
    mod = 0.07;
    bonusText = "Buen timing (+7%)";
  }

  const finalChance = clamp((pendingMinigame.baseChance + mod) * 100, 20, 92) / 100;
  const { opt, ev } = pendingMinigame;
  pendingMinigame = null;

  handleChoice(opt, finalChance, ev, bonusText, energyRecover);
}

function startGame() {
  const rawName = document.getElementById("hero-name").value.trim();
  const origin = document.getElementById("hero-origin").value;
  const scale = document.getElementById("hero-scale").value;

  state = {
    name: rawName || "Héroe sin alias",
    origin,
    scale,
    currentEventId: "f1_inicio",
    pendingNextId: null,
    stepCount: 1,
    ovr: 50,
    fama: 50,
    energia: 80,
    equipo: 55,
    history: []
  };

  hud.classList.remove("hidden");
  updateHud();
  renderEvent();
  showScreen("event");
}

function renderSceneMedia(eventId, ev) {
  const wrap = document.getElementById("event-image-wrap");
  const img = document.getElementById("event-image");
  const caption = document.getElementById("event-image-caption");
  const media = SCENE_MEDIA[eventId];

  if (!media || !media.src) {
    wrap.classList.add("hidden");
    return;
  }

  wrap.classList.remove("hidden");
  caption.textContent = media.caption || ev.stage;
  img.onerror = () => {
    img.style.display = "none";
  };
  img.onload = () => {
    img.style.display = "block";
  };
  img.src = media.src;
}

function renderEvent() {
  const ev = EVENTS[state.currentEventId];
  SoundEngine.setMoodForEvent(state.currentEventId);

  document.getElementById("event-stage").textContent = `${ev.saga} · ${ev.stage}`;
  document.getElementById("event-progress").textContent = `Escena ${state.stepCount}`;
  document.getElementById("event-title").textContent = ev.title;

  renderSceneMedia(state.currentEventId, ev);

  const alertEl = document.getElementById("event-alert");
  const alertText = getConditionAlert();
  if (alertText) {
    alertEl.textContent = alertText;
    alertEl.classList.remove("hidden");
  } else {
    alertEl.textContent = "";
    alertEl.classList.add("hidden");
  }

  document.getElementById("event-text").textContent = ev.text;

  const list = document.getElementById("options-list");
  list.innerHTML = "";

  ev.options.forEach((opt) => {
    const blockedReason = isOptionBlocked(opt);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn";

    if (blockedReason) {
      btn.disabled = true;
      btn.textContent = `${opt.label} [${blockedReason}]`;
    } else {
      const chance = clamp((opt.successChance + getHeroBonus(opt.tags)) * 100, 20, 90) / 100;
      btn.textContent = opt.minigame ? `${opt.label} · [Minijuego]` : opt.label;
      btn.addEventListener("click", () => {
        if (opt.minigame) {
          startMinigame(opt, chance, ev);
        } else {
          handleChoice(opt, chance, ev, null, 0);
        }
      });
    }
    list.appendChild(btn);
  });
}

function handleChoice(opt, finalChance, ev, bonusText, energyRecover) {
  const succeeded = Math.random() <= finalChance;
  const outcome = succeeded ? opt.onSuccess : opt.onFail;

  SoundEngine.playSfx(succeeded ? "success" : "fail");
  state.pendingNextId = succeeded ? opt.nextOnSuccess : opt.nextOnFail;

  state.history.push({
    stage: ev.stage,
    title: ev.title,
    choice: opt.label,
    succeeded
  });

  const keys = ["ovr", "fama", "energia", "equipo"];
  const changesEl = document.getElementById("result-changes");
  changesEl.innerHTML = "";

  if (bonusText) {
    const liBonus = document.createElement("li");
    liBonus.textContent = bonusText;
    changesEl.appendChild(liBonus);
  }

  keys.forEach((k) => {
    let delta = outcome[k] || 0;
    if (k === "energia") delta += energyRecover;
    if (delta !== 0) {
      state[k] = clamp(state[k] + delta, k === "energia" ? 15 : 0, 100);
      if (k !== "ovr") {
        const li = document.createElement("li");
        const sign = delta > 0 ? `+${delta}` : delta;
        const label = k.charAt(0).toUpperCase() + k.slice(1);
        li.textContent = `${label}: ${sign}`;
        changesEl.appendChild(li);
      }
    }
  });

  if (changesEl.children.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Sin cambios visibles";
    changesEl.appendChild(li);
  }

  updateHud();
  document.getElementById("result-tag").textContent = succeeded ? "ÉXITO" : "REVÉS";
  document.getElementById("result-title").textContent = succeeded
    ? "¡Jugada acertada!"
    : "Se complicó";
  document.getElementById("result-text").textContent = outcome.msg;
  showScreen("result");
}

function nextStep() {
  if (state.pendingNextId && EVENTS[state.pendingNextId]) {
    state.currentEventId = state.pendingNextId;
    state.stepCount += 1;
    renderEvent();
    showScreen("event");
  } else {
    renderEnd();
    showScreen("end");
  }
}

function renderEnd() {
  SoundEngine.setMood("epico");

  const avg = Math.round((state.ovr + state.fama + state.energia + state.equipo) / 4);
  const lowEnergy = state.energia < 25;

  let verdict = "Héroe en formación";
  if (state.ovr >= 88 && (state.fama >= 75 || state.equipo >= 75)) {
    verdict = lowEnergy
      ? "Leyenda Absoluta del Multiverso (Cierre cansado)"
      : "Leyenda Absoluta del Multiverso";
  } else if (state.ovr >= 74 || avg >= 62) {
    verdict = lowEnergy
      ? "Ícono de las Guerras Secretas (Cierre cansado)"
      : "Ícono de las Guerras Secretas";
  } else if (avg >= 45) {
    verdict = "Superviviente del Multiverso";
  }

  const originName = ORIGIN_LABELS[state.origin] || state.origin;
  const scaleName = SCALE_LABELS[state.scale] || state.scale;

  saveRun({ name: state.name, ovr: state.ovr, verdict, originLabel: originName });

  const resumeItems = state.history
    .map(
      (h) =>
        `<li><strong>${h.stage}:</strong> ${h.choice} <em>(${h.succeeded ? "Éxito" : "Revés"})</em></li>`
    )
    .join("");

  document.getElementById("end-summary").innerHTML = `
    <strong>${state.name}</strong> (${originName} · ${scaleName}) cerró como
    <strong>"${verdict}"</strong> en <strong>${state.stepCount} escenas</strong>.
    <ul style="margin-top:10px; padding-left:18px; display:flex; flex-direction:column; gap:5px; font-size:13px;">
      ${resumeItems}
    </ul>
  `;

  document.getElementById("end-stats").innerHTML = `
    <div class="stat"><span>OVR Final</span><strong>${state.ovr}</strong></div>
    <div class="stat"><span>Fama Final</span><strong>${state.fama}</strong></div>
    <div class="stat"><span>Energía Final</span><strong>${state.energia}</strong></div>
    <div class="stat"><span>Equipo Final</span><strong>${state.equipo}</strong></div>
  `;

  const shareLines = [
    `CRÓNICAS DEL MULTIVERSO · BALANCE`,
    `Héroe: ${state.name} (${originName} / ${scaleName})`,
    `Veredicto: ${verdict}`,
    `OVR Final: ${state.ovr} | Fama: ${state.fama} | Energía: ${state.energia} | Equipo: ${state.equipo}`,
    `Escenas recorridas: ${state.stepCount}`
  ];
  document.getElementById("share-text").textContent = shareLines.join("\n");
  document.getElementById("copy-feedback").textContent = "";
}

document.getElementById("btn-start").addEventListener("click", startGame);
document.getElementById("btn-stop-minigame").addEventListener("click", finishMinigame);
document.getElementById("btn-next").addEventListener("click", nextStep);
document.getElementById("btn-clear-records").addEventListener("click", clearRuns);
document.getElementById("btn-music").addEventListener("click", () => SoundEngine.toggle());

document.addEventListener("click", () => SoundEngine.kickOnUserGesture(), { once: false });

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && pendingMinigame && !screens.minigame.classList.contains("hidden")) {
    e.preventDefault();
    finishMinigame();
  }
});

document.getElementById("btn-copy").addEventListener("click", async () => {
  const text = document.getElementById("share-text").textContent;
  const feedback = document.getElementById("copy-feedback");
  try {
    await navigator.clipboard.writeText(text);
    feedback.textContent = "¡Resumen copiado!";
  } catch {
    feedback.textContent = "Copiá el texto del recuadro manualmente.";
  }
});

document.getElementById("btn-restart").addEventListener("click", () => {
  hud.classList.add("hidden");
  renderRecords();
  showScreen("start");
});

renderRecords();