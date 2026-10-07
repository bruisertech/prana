/* ==========================================================================
   PRANA & APANA - LUXURY ESOTERIC E-COMMERCE CORE APPLICATION
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. PRODUCT DATABASE (25 SPECIFIED ITEMS)
// --------------------------------------------------------------------------
const PRODUCTS = [
    // COLLARES
    {
        id: "col-01",
        name: "Collar Piedra en Bruto - Cuarzo Rosa",
        category: "collares",
        intention: "amor",
        price: 48000,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
        property: "Amor Propio y Sanación Emocional",
        chakra: "Chakra Anahata (Corazón)",
        description: "Mineral en su estado virgen sin pulir, engarzado a mano con filigrana dorada. Fomenta la autocompasión, disuelve heridas del pasado y armoniza vínculos afectivos.",
        cleansing: "Purificar con humo de salvia blanca o sobre disco de selenita. Recargar con la luz suave de la Luna Creciente o Llena (evitar agua prolongada)."
    },
    {
        id: "col-02",
        name: "Collar Péndulo Facetado - Amatista",
        category: "collares",
        intention: "calma",
        price: 52000,
        image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80",
        property: "Transmutación y Claridad Mental",
        chakra: "Chakra Ajna (Tercer Ojo) y Sahasrara (Corona)",
        description: "Péndulo hexagonal de 6 facetas tallado en amatista violeta profunda. Actúa como transmutador de energía densa en vibración elevada y neutraliza el estrés mental.",
        cleansing: "Limpieza con sahumerio de copal o palo santo. Recargar bajo cielo nocturno estrellado (no exponer a la luz solar directa prolongada para proteger el color)."
    },
    {
        id: "col-03",
        name: "Collar en Macramé - Ojo de Tigre",
        category: "collares",
        intention: "proteccion",
        price: 45000,
        image: "https://images.unsplash.com/photo-1611591475852-73a4b670356d?auto=format&fit=crop&w=800&q=80",
        property: "Fuerza de Voluntad y Escudo Áurico",
        chakra: "Chakra Manipura (Plexo Solar)",
        description: "Cabujón de ojo de tigre engastado en tejido artesanal de macramé con nudos sagrados de protección. Aporta coraje, discernimiento y seguridad personal.",
        cleansing: "Limpieza con humo de ruda o romero. Recargar con luz solar matutina de 15 a 20 minutos."
    },
    {
        id: "col-04",
        name: "Collar en Alambrismo Fino - Labradorita",
        category: "collares",
        intention: "proteccion",
        price: 58000,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
        property: "Despertar Místico y Protección Psíquica",
        chakra: "Todos los Chakras / Escudo Áurico",
        description: "Pieza única de labradorita con destellos azules y dorados (labradorescencia), envuelta en alambrismo dorado de alta durabilidad. Crea una barrera contra fugas de energía.",
        cleansing: "Limpieza energética con sonido de cuencos o campana tibetana. Recarga óptima con Luna Llena."
    },
    {
        id: "col-05",
        name: "Collar Medallón Sagrado Ganesha",
        category: "collares",
        intention: "abundancia",
        price: 50000,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
        property: "Disolución de Obstáculos y Prosperidad",
        chakra: "Chakra Muladhara (Raíz) y Corona",
        description: "Medallón protector con el relieve de Ganesha en latón envejecido acompañado de una gota de cuarzo cristal. Consagrado para abrir caminos en nuevos proyectos.",
        cleansing: "Sahumar con mirra o sándalo. Dedicar con una intención clara de apertura y gratitud."
    },

    // PULSERAS Y ANILLOS
    {
        id: "pul-01",
        name: "Pulsera de Alineación 7 Chakras",
        category: "pulseras",
        intention: "calma",
        price: 38000,
        image: "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?auto=format&fit=crop&w=800&q=80",
        property: "Equilibrio Integral de Centros de Energía",
        chakra: "Los 7 Chakras",
        description: "Compuesta por 7 minerales naturales auténticos (Jaspe, Cornalina, Ojo de Tigre, Aventurina, Sodalita, Amatista y Cuarzo Cristal). Regula el flujo constante de Prana y Apana.",
        cleansing: "Pasar por humo de incienso de sándalo durante 1 minuto. Recargar sobre drusa de cuarzo."
    },
    {
        id: "pul-02",
        name: "Pulsera Minimalista de Turmalina Negra",
        category: "pulseras",
        intention: "proteccion",
        price: 42000,
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
        property: "Escudo Protector contra Energías Densas",
        chakra: "Chakra Muladhara (Raíz)",
        description: "Cuentas de turmalina negra pura en acabado mate. Absorbe y transmuta radiaciones electromagnéticas y pensamientos negativos del entorno.",
        cleansing: "Colocar sobre la tierra de una planta viva durante la noche para descargar a tierra."
    },
    {
        id: "ani-01",
        name: "Anillo Ajustable Piedra Luna Natural",
        category: "pulseras",
        intention: "amor",
        price: 46000,
        image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
        property: "Conexión Intuitiva y Ciclos Sagrados",
        chakra: "Chakra Swadhisthana (Sacro) y Tercer Ojo",
        description: "Cabujón de adularia (piedra luna) con resplandor azulado montado en anillo de bronce bañado en oro ajustable. Conecta con el ritmo natural de la introspección.",
        cleansing: "Bañar en la luz de la Luna Llena durante toda la noche."
    },
    {
        id: "are-01",
        name: "Aretes Colgantes Cuarzo Cristal y Oro",
        category: "pulseras",
        intention: "calma",
        price: 36000,
        image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
        property: "Claridad Mental y Amplificación",
        chakra: "Chakra Corona",
        description: "Puntas de cuarzo cristal natural suspendidas en ganchos antialérgicos de tono dorado. Aportan ligereza y claridad al pensamiento cotidiano.",
        cleansing: "Limpieza suave con sahumerio de lavanda o romero."
    },
    {
        id: "lla-01",
        name: "Llavero Amuleto Protector de Bolsillo",
        category: "pulseras",
        intention: "proteccion",
        price: 24000,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
        property: "Protección en Trayectos y Viajes",
        chakra: "Chakra Raíz",
        description: "Combinación de turmalina negra y ojo de tigre en cordón trenzado de alta resistencia. Diseñado para acompañar tus llaves y proteger tus desplazamientos.",
        cleansing: "Dejar reposar sobre sal marina seca en un recipiente de vidrio por 2 horas."
    },

    // CRISTALES MAESTROS SUELTOS
    {
        id: "cri-01",
        name: "Drusa de Amatista Natural del Valle",
        category: "cristales",
        intention: "calma",
        price: 65000,
        image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80",
        property: "Purificación de Espacios y Meditación",
        chakra: "Chakra Corona",
        description: "Cúmulo de cristales de amatista natural sobre matriz de roca. Ideal para mesas de noche, altares o escritorios donde se busca un ambiente de paz y concentración.",
        cleansing: "Autolimpiante por su estructura de drusa. Expóngase a la luz lunar para reactivar su brillo."
    },
    {
        id: "cri-02",
        name: "Cubo Maestro de Pirita Dorada",
        category: "cristales",
        intention: "abundancia",
        price: 32000,
        image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=800&q=80",
        property: "Atracción de Prosperidad y Éxito Material",
        chakra: "Chakra Plexo Solar",
        description: "Bloque mineral con brillo metálico dorado. Tradicionalmente conocido como el imán del dinero y la concreción de negocios y emprendimientos.",
        cleansing: "NUNCA mojar con agua (se oxida por su contenido ferroso). Limpiar exclusivamente con humo de incienso de canela."
    },
    {
        id: "cri-03",
        name: "Vara de Selenita Blanca Marroquí",
        category: "cristales",
        intention: "calma",
        price: 28000,
        image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80",
        property: "Limpiador Universal de Joyas y Cristales",
        chakra: "Chakra Corona y Estrella del Alma",
        description: "Barra de yeso selenítico natural con estrías lumínicas. Al colocar tus collares o anillos sobre ella, descarga y renueva la vibración de las joyas.",
        cleansing: "NUNCA mojar (la selenita es hidrosoluble y se desgasta en agua). Limpieza puramente intencional o con humo."
    },
    {
        id: "cri-04",
        name: "Punta Generadora de Cuarzo Cristal",
        category: "cristales",
        intention: "calma",
        price: 30000,
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
        property: "Programación de Intenciones y Enfoque",
        chakra: "Todos los Chakras",
        description: "Punta de cuarzo transparente que actúa como prisma receptor y transmisor de energía. Es el cristal maestro por excelencia para meditar.",
        cleansing: "Acepta agua corriente y sal marina. Recargar al sol matutino durante 30 minutos."
    },
    {
        id: "cri-05",
        name: "Turmalina Negra en Roca Virgen",
        category: "cristales",
        intention: "proteccion",
        price: 26000,
        image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=800&q=80",
        property: "Enraizamiento Firme y Filtro Energético",
        chakra: "Chakra Raíz",
        description: "Pedazo en bruto con estrías verticales naturales. Colócalo cerca a la puerta principal de tu casa o al lado del router Wi-Fi para dispersar cargas electromagnéticas.",
        cleansing: "Enterrar en una maceta o jardín por 24 horas cada cambio de estación."
    },
    {
        id: "cri-06",
        name: "Citrino Natural Solar de Brasil",
        category: "cristales",
        intention: "abundancia",
        price: 35000,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
        property: "Alegría de Vivir, Confianza y Autoestima",
        chakra: "Chakra Plexo Solar",
        description: "Cuarzo de tonalidades miel y ámbar natural. Fomenta el optimismo, disuelve el miedo a la escasez y estimula el liderazgo creativo.",
        cleansing: "Sahumar con mirra o palo santo. Recargar con sol directo durante la mañana."
    },
    {
        id: "cri-07",
        name: "Jaspe Rojo Terrenal Pulido",
        category: "cristales",
        intention: "proteccion",
        price: 22000,
        image: "https://images.unsplash.com/photo-1611591475852-73a4b670356d?auto=format&fit=crop&w=800&q=80",
        property: "Fuerza Vital, Resistencia y Apana",
        chakra: "Chakra Raíz",
        description: "Mineral opaco de rojo óxido profundo. Vinculado a la energía de Apana (la raíz con la madre tierra), aporta vigor físico y estabilidad ante la incertidumbre.",
        cleansing: "Lavar con agua fría y dejar secar al aire libre sobre madera o piedra natural."
    },
    {
        id: "cri-08",
        name: "Aventurina Verde (Cuarzo Verde)",
        category: "cristales",
        intention: "amor",
        price: 25000,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
        property: "Consuelo Emocional y Oportunidades",
        chakra: "Chakra Corazón",
        description: "Cuarzo con inclusiones de mica que le dan un brillo satinado verde bosque. Calma el ritmo cardíaco acelerado y abre la mente a nuevas oportunidades.",
        cleansing: "Bañar en agua de lluvia o reposar sobre hojas verdes frescas."
    },
    {
        id: "cri-09",
        name: "Obsidiana Negra Espejo Pulida",
        category: "cristales",
        intention: "proteccion",
        price: 28000,
        image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=800&q=80",
        property: "Corte de Lazos Tóxicos y Protección Psíquica",
        chakra: "Chakra Raíz",
        description: "Vidrio volcánico natural de brillo vítreo profundo. Actúa como escudo protector intransigente contra proyecciones externas y vampirismo energético.",
        cleansing: "Descargar con humo de salvia o bajo Luna Menguante para desterrar energías viejas."
    },
    {
        id: "cri-10",
        name: "Cornalina Naranja de Fuego",
        category: "cristales",
        intention: "abundancia",
        price: 24000,
        image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=800&q=80",
        property: "Creatividad, Motivación y Pasión",
        chakra: "Chakra Sacro",
        description: "Ágata translúcida de tonos cálidos encendidos. Reactiva el entusiasmo vital, despierta la energía creativa y combate la pereza mental.",
        cleansing: "Dejar al sol del mediodía por 15 minutos para recargar su fuerza ígnea."
    },

    // DECORACIÓN, AMULETOS & RITUALES
    {
        id: "dec-01",
        name: "Pirámide de Orgón con Espiral de Cobre",
        category: "espacio",
        intention: "proteccion",
        price: 78000,
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
        property: "Filtro Electromagnético y Armonía Espacial",
        chakra: "Alineación Espacial del Hogar",
        description: "Pieza piramidal elaborada con matriz de resina de glicerina, virutas seleccionadas de metales nobles y un cuarzo central comprimido por un vórtice de cobre puro.",
        cleansing: "La orgonita se autolimpia constantemente. Pasa un paño de microfibra seco para mantener su transparencia."
    },
    {
        id: "dec-02",
        name: "Portainciensos Artesanal Fases Lunares",
        category: "espacio",
        intention: "calma",
        price: 32000,
        image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80",
        property: "Santuario de Sahumado en Casa",
        chakra: "Espacio de Paz",
        description: "Elaborado a mano en cerámica esmaltada en negro mate con grabados dorados de las fases de la Luna. Compatible con varitas de incienso y conos aromáticos.",
        cleansing: "Lavar con agua tibia y jabón suave tras cada sesión de sahumado."
    },
    {
        id: "dec-03",
        name: "Pack de Stickers con Geometría Sagrada",
        category: "espacio",
        intention: "proteccion",
        price: 18000,
        image: "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?auto=format&fit=crop&w=800&q=80",
        property: "Consagración de Cuadernos y Objetos",
        chakra: "Armonía Visual",
        description: "Set de 5 vinilos resistentes con diseño exclusivo de Ganesha, flor de loto y geometría del cubo de Metatrón en dorado brillante sobre fondo transparente.",
        cleansing: "Adhesivos resistentes al agua y a la fricción diaria."
    },
    {
        id: "rit-01",
        name: "Kit de Ritual de Abundancia & Apertura",
        category: "rituales",
        intention: "abundancia",
        price: 85000,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
        property: "Atracción Material y Claridad en Proyectos",
        chakra: "Plexo Solar y Raíz",
        description: "Caja de consagración que incluye: 1 cubo maestro de pirita, 1 barra de canela pura, 1 vela dorada de cera de soja consagrada y tarjeta instructiva paso a paso.",
        cleansing: "Seguir el instructivo incluido para realizar el ritual en Luna Creciente o primer día del mes."
    },
    {
        id: "rit-02",
        name: "Kit de Ritual de Protección & Despojo Áurico",
        category: "rituales",
        intention: "proteccion",
        price: 88000,
        image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=800&q=80",
        property: "Purificación Profunda del Campo Energético",
        chakra: "Chakra Raíz y Protección General",
        description: "Caja artesanal que contiene: 1 trozo de turmalina negra virgen, 1 atado de salvia blanca para sahumo, sal de roca rosada y pergamino con decreto de protección.",
        cleansing: "Realizar el ritual en martes o sábado para cerrar ciclos y limpiar el aura."
    }
];

// --------------------------------------------------------------------------
// 2. BLOG ARTICLES DATABASE (3 SPECIFIED FULL-LENGTH ARTICLES)
// --------------------------------------------------------------------------
const BLOG_ARTICLES = [
    {
        id: "blog-01",
        title: "La Fisiología del Alma: Prana, Apana y el Arte de Desprenderse del Ajetreo Cotidiano",
        time: "6 minutos de lectura reflexiva",
        author: "PRANA Editorial Colectiva",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
        summary: "En las antiguas escrituras de la filosofía yóguica, la fuerza que anima cada latido recibe el nombre de Prana, mientras Apana es la fuerza que nos permite soltar...",
        content: `En las antiguas escrituras de la filosofía yóguica, la fuerza que anima cada latido del corazón y cada destello de conciencia recibe el nombre de Prana. Sin embargo, en Occidente se suele cometer el error de reducir el Prana a la simple respiración pulmonar. El Prana es la corriente cósmica que entra: la inspiración, la nutrición, las ideas que recibimos y el combustible vital que nos impulsa a crear.

No obstante, existe una fuerza gemela e indispensable que el ritmo contemporáneo tiende a ignorar o reprimir: Apana. Apana es la energía descendente y eliminatoria; es la fuerza que nos permite soltar lo que ya cumplió su ciclo, excretar toxinas, desprendernos de emociones ajenas y enraizar los pies en la tierra firme de la realidad.

El ser humano moderno vive atrapado en una hiper-inhalación constante: queremos acumular más proyectos, consumir más información, sostener más expectativas ajenas y asumir responsabilidades que no nos corresponden. Al no permitir que Apana actúe, el sistema se intoxica. Nos sentimos dispersos, con la mente nublada, el pecho oprimido y un agotamiento que ningún café puede disipar.

La Pausa Consciente: Ejercicio de 3 minutos
Para restablecer el equilibrio entre Prana y Apana, te invitamos a realizar esta práctica diaria:
1. Siéntate con la columna erguida y sostén tu cristal de enraizamiento (como una Turmalina o un Jaspe Rojo) en la palma de tu mano izquierda.
2. Inhala profundamente por la nariz durante 4 segundos, visualizando cómo una luz dorada asciende desde tu coronilla hasta el centro de tu pecho (nutrición de Prana).
3. Retén el aire durante 2 segundos en quietud absoluta.
4. Exhala lenta y completamente por la boca durante 6 segundos, sintiendo cómo el peso de tus hombros, las tensiones del día y las cargas que no te pertenecen se drenan hacia la tierra a través de la base de tu columna (liberación de Apana).
5. Repite este ciclo durante 3 minutos antes de comenzar tu jornada o al regresar a casa.

Recordar quién eres no requiere abandonar el mundo, sino aprender a respirar dentro de él sin dejar que sus urgencias apaguen tu centro.`
    },
    {
        id: "blog-02",
        title: "El Grimorio de los Minerales: Purificación, Recarga y Programación de Cristales",
        time: "8 minutos de sabiduría mineral",
        author: "Guía de Cuidados de PRANA",
        image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80",
        summary: "Los cristales y minerales son testigos milenarios del tiempo geológico de la Tierra. Descubre las reglas doradas para purificarlos y programarlos adecuadamente...",
        content: `Los cristales y minerales son testigos milenarios del tiempo geológico de la Tierra. Gracias a su red atómica geométrica y ordenada, poseen propiedades piezoeléctricas y vibracionales capaces de interactuar con el campo electromagnético humano. Sin embargo, precisamente porque son receptores y amplificadores, requieren una higiene energética regular.

Regla de Oro: Cristales que NUNCA deben sumergirse en agua
Uno de los errores más comunes es colocar todas las piedras bajo el grifo de agua o en cuencos con sal marina. Existen minerales que sufren daños irreversibles:
- Selenita: Es una variedad de yeso hidrosoluble. Si entra en contacto con agua, pierde su brillo, se vuelve quebradiza y se disuelve con el tiempo.
- Pirita: Su composición química es disulfuro de hierro. El agua y la humedad desencadenan una reacción de oxidación que no solo arruina su color dorado metálico, sino que puede liberar ácido sulfúrico nocivo.
- Malaquita y Lapislázuli: Piedras porosas con contenido de cobre y compuestos sensibles que se decoloran y pueden liberar partículas tóxicas al ser sumergidas.

Métodos Universales y Seguros de Purificación
1. El Sahumado Ancestral: Pasa tus joyas o cristales a través del humo ascendente de salvia blanca, palo santo, copal o ruda. El humo rompe la memoria estática acumulada sin comprometer la materia física de la pieza.
2. La Placa de Selenita: La selenita vibra en una frecuencia tan pura que tiene la cualidad de autolimpiarse y limpiar a las demás piedras. Deja tus collares y pulseras reposando sobre una barra de selenita durante la noche.
3. Sonido Terapéutico: Expón tus piedras a la vibración de un cuenco tibetano, un diapasón de 432 Hz o una campana afinada. La onda acústica reordena la frecuencia interna del mineral en segundos.

El Ciclo Lunar y la Programación de Intenciones
Para reactivar la fuerza de tus piedras, la Luna es la gran aliada. La Luna Llena es el momento culmen para colocarlas en una ventana o terraza protegida donde reciban el resplandor nocturno. Al día siguiente, toma tu cristal entre ambas manos, llévalo a la altura del corazón y pronuncia en voz alta tu intención: 'Consagro este amuleto para que sea mi ancla de paz, mi escudo de protección y el recordatorio diario de mi verdad esencial'. Así, la joya deja de ser un simple accesorio y se convierte en tu aliada de vida.`
    },
    {
        id: "blog-03",
        title: "Ganesha y la Geometría Sagrada: El Arquetipo de la Disolución de Obstáculos",
        time: "7 minutos de filosofía y hogar",
        author: "PRANA Simbología Sagrada",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
        summary: "Ganesha representa la sabiduría cósmica que disuelve los obstáculos del camino y transforma las dificultades en peldaños de evolución personal...",
        content: `En la entrada de muchos hogares conscientes en Oriente descansa la figura venerada de Ganesha, la deidad con cabeza de elefante. Más allá de cualquier creencia religiosa particular, Ganesha representa un poderoso arquetipo psicológico y metafísico: la sabiduría cósmica que disuelve los obstáculos del camino y transforma las aparentes dificultades en peldaños de evolución.

La Anatomía Mística de la Figura
Cada trazo en la representación de Ganesha encierra una instrucción para el vivir diario:
- Las Grandes Orejas: Nos recuerdan la virtud sagrada de saber escuchar el entorno antes de reaccionar impulsivamente.
- La Cabeza de Elefante: Símbolo de una mente amplia, serena e imperturbable ante las pequeñas turbulencias de la rutina.
- El Colmillo Roto: Cuenta la leyenda que Ganesha partió su propio colmillo para usarlo como pluma y transcribir el gran poema épico Mahabharata. Simboliza el sacrificio de la vanidad personal para dar paso a la sabiduría trascendental y la superación de las dualidades (bueno/malo, éxito/fracaso).
- La Trompa curvada a la Izquierda (Vamamukhi): Es la dirección de la calma, el sosiego, el bienestar familiar y la pureza en los negocios honestos.

Armonización del Espacio: El Secreto de las Orgonitas
El hogar moderno está constantemente bombardeado por radiaciones electromagnéticas invisibles emitidas por módems, pantallas y redes inalámbricas. Las Pirámides de Orgón combinan la sabiduría de la geometría sagrada piramidal con la física piezoeléctrica:
Al fundir virutas de metales inorgánicos junto con cuarzos dentro de una matriz de resina orgánica, se genera una presión constante sobre el cristal. Esta compresión emite micro-pulsos de iones negativos que neutralizan los campos electromagnéticos caóticos, restaurando la atmósfera vital en la habitación.

Consejos de Ubicación en tu Casa:
- Frente a la entrada principal: Para filtrar cualquier energía discordante que ingrese del exterior.
- En tu espacio de trabajo o meditación: Para disolver la fatiga mental y favorecer la inspiración fluida.
- Siempre colocado con respeto sobre una superficie limpia y elevada, nunca en el suelo directo ni en lugares desordenados.`
    }
];

// --------------------------------------------------------------------------
// 3. STATE MANAGEMENT
// --------------------------------------------------------------------------
let cart = JSON.parse(localStorage.getItem('prana_cart') || '[]');
let currentShippingMethod = 'cali'; // 'cali' or 'nacional'
let currentCategoryFilter = 'todos';
let currentIntentionFilter = null;

// Oracle State Machine
let oracleState = {
    step: 0, // 0: Start, 1: Q1, 2: Q2, 3: Q3, 4: Loading, 5: Revelation
    answers: {
        intention: null, // 'calma', 'abundancia', 'proteccion', 'amor'
        element: null,
        format: null     // 'collar', 'pulsera', 'cristal'
    }
};

// --------------------------------------------------------------------------
// 4. INITIALIZATION
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Hide Preloader smoothly
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('opacity-0');
            setTimeout(() => preloader.remove(), 700);
        }
    }, 1200);

    // Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Init Particle Canvas Background
    initStarlightCanvas();

    // Render Products and Blog
    renderProducts();
    renderBlogArticles();

    // Update Cart UI
    updateCartUI();

    // Set dynamic current year in footer
    const yrSpan = document.getElementById('year-span');
    if (yrSpan) yrSpan.textContent = new Date().getFullYear().toString();
});

// --------------------------------------------------------------------------
// 5. STARLIGHT CANVAS ANIMATION
// --------------------------------------------------------------------------
function initStarlightCanvas() {
    const canvas = document.getElementById('starlight-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.floor(Math.min(width, 1200) / 12);

    let mouseX = width / 2;
    let mouseY = height / 2;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.8 + 0.3,
            color: Math.random() > 0.4 ? '#D9A05B' : '#F5EFE6',
            alpha: Math.random() * 0.6 + 0.2,
            speedX: (Math.random() - 0.5) * 0.4,
            speedY: (Math.random() - 0.5) * 0.4
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((p) => {
            p.x += p.speedX;
            p.y += p.speedY;

            // Subtle mouse repulsion / attraction
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
                p.x -= (dx / dist) * 0.5;
                p.y -= (dy / dist) * 0.5;
            }

            // Wrap edges
            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// --------------------------------------------------------------------------
// 6. UI & CATALOG FILTERING LOGIC
// --------------------------------------------------------------------------
function filterByCategory(cat) {
    currentCategoryFilter = cat;
    currentIntentionFilter = null; // Clear intention filter when category tab clicked

    // Update active button state
    document.querySelectorAll('.cat-filter-btn').forEach((btn) => {
        if (btn.getAttribute('data-cat') === cat) {
            btn.className = 'cat-filter-btn active px-4 py-2 rounded-full border text-xs uppercase tracking-wider font-medium transition-all duration-300 bg-[#D9A05B] text-[#0C0712] border-[#D9A05B]';
        } else {
            btn.className = 'cat-filter-btn px-4 py-2 rounded-full border border-[#D9A05B]/20 text-[#9E91A8] hover:text-[#F5EFE6] hover:border-[#D9A05B]/50 text-xs uppercase tracking-wider font-medium transition-all duration-300';
        }
    });

    renderProducts();
}

function filterByIntention(intention) {
    currentIntentionFilter = intention;
    renderProducts();

    // Scroll smoothly to catalog
    const catElem = document.getElementById('catalogo');
    if (catElem) {
        catElem.scrollIntoView({ behavior: 'smooth' });
    }

    showToast(`Filtrando amuletos por intención: ${getIntentionLabel(intention)}`);
}

function getIntentionLabel(intention) {
    switch (intention) {
        case 'proteccion': return 'Protección & Escudo';
        case 'abundancia': return 'Abundancia & Prosperidad';
        case 'calma': return 'Paz Mental & Calma';
        case 'amor': return 'Amor Propio & Sanación';
        default: return 'Todas';
    }
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    let filtered = PRODUCTS;

    if (currentIntentionFilter) {
        filtered = filtered.filter((p) => p.intention === currentIntentionFilter);
    } else if (currentCategoryFilter !== 'todos') {
        filtered = filtered.filter((p) => p.category === currentCategoryFilter);
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-16 space-y-4">
                <i data-lucide="sparkles" class="w-10 h-10 text-[#D9A05B] mx-auto opacity-50"></i>
                <p class="text-sm text-[#9E91A8]">No encontramos amuletos para este filtro específico.</p>
                <button onclick="filterByCategory('todos')" class="px-4 py-2 rounded-lg bg-[#D9A05B]/20 border border-[#D9A05B]/40 text-[#F3DEBA] text-xs font-medium">Ver Toda la Colección</button>
            </div>
        `;
        if (window.lucide) lucide.createIcons();
        return;
    }

    grid.innerHTML = filtered.map((product) => `
        <div class="product-card flex flex-col justify-between group">
            <div>
                <!-- Image Container -->
                <div class="relative aspect-square overflow-hidden bg-[#0C0712] cursor-pointer" onclick="openProductDetailModal('${product.id}')">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover img-zoom" loading="lazy" />
                    <div class="absolute inset-0 bg-gradient-to-t from-[#150C20] via-transparent to-transparent opacity-60 pointer-events-none"></div>

                    <!-- Intention Tag Badge -->
                    <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0C0712]/80 backdrop-blur-md border border-[#D9A05B]/30 text-[10px] uppercase font-medium text-[#F3DEBA] flex items-center gap-1">
                        ${getIntentionBadgeIcon(product.intention)}
                        <span>${getIntentionLabel(product.intention)}</span>
                    </span>
                </div>

                <!-- Product Content -->
                <div class="p-5 space-y-2">
                    <span class="text-[10px] tracking-[0.2em] text-[#D9A05B] font-semibold uppercase block">${product.chakra}</span>
                    <h3 class="font-serif text-xl font-medium text-[#F5EFE6] leading-snug cursor-pointer hover:text-[#D9A05B] transition-colors" onclick="openProductDetailModal('${product.id}')">
                        ${product.name}
                    </h3>
                    <p class="text-xs text-[#9E91A8] font-light line-clamp-2">
                        ${product.property}
                    </p>
                </div>
            </div>

            <!-- Card Footer / Actions -->
            <div class="px-5 pb-5 pt-2 border-t border-[#D9A05B]/10 flex items-center justify-between gap-2">
                <div>
                    <span class="text-[10px] text-[#9E91A8] block">Inversión</span>
                    <span class="font-serif text-lg font-bold text-[#F3DEBA]">$${formatCOP(product.price)} COP</span>
                </div>

                <button onclick="addToCart('${product.id}')" class="px-3.5 py-2 rounded-lg bg-[#D9A05B]/15 border border-[#D9A05B]/40 hover:bg-[#D9A05B] hover:text-[#0C0712] text-[#F5EFE6] text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5" aria-label="Añadir al Carrito">
                    <i data-lucide="plus" class="w-4 h-4"></i>
                    <span>Añadir</span>
                </button>
            </div>
        </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
}

function getIntentionBadgeIcon(intention) {
    switch (intention) {
        case 'proteccion': return '<i data-lucide="shield" class="w-3 h-3 text-[#D9A05B]"></i>';
        case 'abundancia': return '<i data-lucide="sparkles" class="w-3 h-3 text-[#D9A05B]"></i>';
        case 'calma': return '<i data-lucide="moon" class="w-3 h-3 text-[#D9A05B]"></i>';
        case 'amor': return '<i data-lucide="heart" class="w-3 h-3 text-[#D9A05B]"></i>';
        default: return '';
    }
}

function formatCOP(num) {
    return num.toLocaleString('es-CO');
}

// --------------------------------------------------------------------------
// 7. PRODUCT DETAIL MODAL ("FICHA HOLÍSTICA")
// --------------------------------------------------------------------------
function openProductDetailModal(productId) {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('product-detail-modal');
    const container = document.getElementById('product-detail-content');
    if (!modal || !container) return;

    container.innerHTML = `
        <div class="relative aspect-square rounded-xl overflow-hidden border border-[#D9A05B]/30 bg-[#0C0712]">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
            <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0C0712]/90 border border-[#D9A05B]/40 text-xs text-[#F3DEBA] font-medium">
                ${getIntentionLabel(product.intention)}
            </span>
        </div>

        <div class="flex flex-col justify-between space-y-4">
            <div class="space-y-3">
                <span class="text-xs uppercase tracking-[0.2em] text-[#D9A05B] font-semibold">${product.chakra}</span>
                <h2 class="font-serif text-3xl font-medium text-[#F5EFE6]">${product.name}</h2>
                <div class="text-2xl font-serif font-bold text-[#F3DEBA] pb-2 border-b border-[#D9A05B]/20">
                    $${formatCOP(product.price)} COP
                </div>

                <div class="space-y-2 pt-2">
                    <p class="text-xs font-semibold text-[#D9A05B] uppercase tracking-wider">Propiedad Metafísica Principal:</p>
                    <p class="text-xs text-[#F5EFE6] italic">${product.property}</p>
                </div>

                <div class="space-y-2 pt-2">
                    <p class="text-xs font-semibold text-[#D9A05B] uppercase tracking-wider">Descripción Alquímica:</p>
                    <p class="text-xs text-[#9E91A8] leading-relaxed font-light">${product.description}</p>
                </div>

                <div class="space-y-2 pt-2 bg-[#0C0712] p-3 rounded-xl border border-[#D9A05B]/20">
                    <p class="text-[11px] font-semibold text-[#F3DEBA] uppercase tracking-wider flex items-center gap-1.5">
                        <i data-lucide="droplet" class="w-3.5 h-3.5 text-[#D9A05B]"></i>
                        <span>Guía de Limpieza & Recarga:</span>
                    </p>
                    <p class="text-xs text-[#9E91A8] font-light leading-relaxed">${product.cleansing}</p>
                </div>
            </div>

            <div class="pt-4 border-t border-[#D9A05B]/20 flex items-center gap-3">
                <button onclick="addToCart('${product.id}'); closeProductDetailModal();" class="w-full py-3.5 rounded-lg bg-[#D9A05B] text-[#0C0712] font-semibold text-xs uppercase tracking-[0.15em] hover:bg-[#F3DEBA] transition-colors shadow-lg flex items-center justify-center gap-2">
                    <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                    <span>Añadir a mi Bolsa de Compras</span>
                </button>
            </div>
        </div>
    `;

    modal.classList.remove('invisible', 'opacity-0');
    document.body.classList.add('modal-open');
    if (window.lucide) lucide.createIcons();
}

function closeProductDetailModal() {
    const modal = document.getElementById('product-detail-modal');
    if (modal) {
        modal.classList.add('invisible', 'opacity-0');
        document.body.classList.remove('modal-open');
    }
}

// --------------------------------------------------------------------------
// 8. BLOG / GRIMORIO LOGIC
// --------------------------------------------------------------------------
function renderBlogArticles() {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;

    grid.innerHTML = BLOG_ARTICLES.map((article) => `
        <article class="bg-[#150C20] border border-[#D9A05B]/20 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-[#D9A05B]/50 transition-colors">
            <div>
                <div class="relative aspect-16/9 overflow-hidden bg-[#0C0712]">
                    <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover img-zoom" loading="lazy" />
                </div>
                <div class="p-6 space-y-3">
                    <div class="flex items-center justify-between text-[10px] text-[#9E91A8] uppercase tracking-wider">
                        <span>${article.author}</span>
                        <span>${article.time}</span>
                    </div>
                    <h3 class="font-serif text-2xl font-medium text-[#F5EFE6] leading-snug group-hover:text-[#D9A05B] transition-colors cursor-pointer" onclick="openBlogReaderModal('${article.id}')">
                        ${article.title}
                    </h3>
                    <p class="text-xs text-[#9E91A8] font-light leading-relaxed line-clamp-3">
                        ${article.summary}
                    </p>
                </div>
            </div>

            <div class="px-6 pb-6 pt-2">
                <button onclick="openBlogReaderModal('${article.id}')" class="text-xs text-[#F3DEBA] font-semibold uppercase tracking-wider hover:text-[#D9A05B] flex items-center gap-1.5 transition-colors">
                    <span>Leer Ensayo Completo</span>
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </button>
            </div>
        </article>
    `).join('');

    if (window.lucide) lucide.createIcons();
}

function openBlogReaderModal(articleId) {
    const article = BLOG_ARTICLES.find((a) => a.id === articleId);
    if (!article) return;

    const modal = document.getElementById('blog-reader-modal');
    const container = document.getElementById('blog-reader-content');
    if (!modal || !container) return;

    // Format paragraphs
    const paragraphs = article.content.split('\n\n').map(p => {
        if (p.startsWith('1.') || p.startsWith('2.') || p.startsWith('3.')) {
            return `<p class="text-xs text-[#F5EFE6] font-light leading-relaxed pl-4 border-l border-[#D9A05B]/30 my-2">${p}</p>`;
        }
        if (p.includes(':') && p.length < 80) {
            return `<h4 class="font-serif text-xl font-semibold text-[#F3DEBA] pt-3">${p}</h4>`;
        }
        return `<p class="text-xs text-[#9E91A8] font-light leading-relaxed my-2">${p}</p>`;
    }).join('');

    container.innerHTML = `
        <div class="space-y-4 border-b border-[#D9A05B]/20 pb-6">
            <span class="text-xs uppercase tracking-[0.25em] text-[#D9A05B] font-semibold">${article.author} &bull; ${article.time}</span>
            <h2 class="font-serif text-3xl sm:text-4xl font-medium text-[#F5EFE6] leading-tight">${article.title}</h2>
        </div>

        <div class="relative aspect-21/9 rounded-xl overflow-hidden border border-[#D9A05B]/30 my-6">
            <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover" />
        </div>

        <div class="prose prose-invert max-w-none space-y-4 font-sans">
            ${paragraphs}
        </div>

        <div class="pt-8 border-t border-[#D9A05B]/20 flex justify-between items-center">
            <button onclick="closeBlogReaderModal()" class="px-6 py-2.5 rounded-lg border border-[#D9A05B]/40 text-[#F5EFE6] hover:bg-[#D9A05B]/10 text-xs font-medium uppercase tracking-wider transition-colors">
                Cerrar Lectura
            </button>
            <a href="#catalogo" onclick="closeBlogReaderModal()" class="px-6 py-2.5 rounded-lg bg-[#D9A05B] text-[#0C0712] font-semibold text-xs uppercase tracking-wider hover:bg-[#F3DEBA] transition-colors">
                Explorar Amuletos Mencionados
            </a>
        </div>
    `;

    modal.classList.remove('invisible', 'opacity-0');
    document.body.classList.add('modal-open');
    if (window.lucide) lucide.createIcons();
}

function closeBlogReaderModal() {
    const modal = document.getElementById('blog-reader-modal');
    if (modal) {
        modal.classList.add('invisible', 'opacity-0');
        document.body.classList.remove('modal-open');
    }
}

// --------------------------------------------------------------------------
// 9. ORÁCULO MÍSTICO (SIMULATED AI CHAT STATE MACHINE)
// --------------------------------------------------------------------------
function openOracleModal() {
    oracleState.step = 0;
    oracleState.answers = { intention: null, element: null, format: null };

    const modal = document.getElementById('oracle-modal');
    if (modal) {
        modal.classList.remove('invisible', 'opacity-0');
        document.body.classList.add('modal-open');
        renderOracleStep();
    }
}

function closeOracleModal() {
    const modal = document.getElementById('oracle-modal');
    if (modal) {
        modal.classList.add('invisible', 'opacity-0');
        document.body.classList.remove('modal-open');
    }
}

function renderOracleStep() {
    const container = document.getElementById('oracle-container');
    if (!container) return;

    switch (oracleState.step) {
        case 0: // Welcome Screen
            container.innerHTML = `
                <div class="text-center space-y-6 py-4">
                    <div class="w-20 h-20 rounded-full bg-[#D9A05B]/10 border border-[#D9A05B]/40 mx-auto flex items-center justify-center glow-gold">
                        <i data-lucide="compass" class="w-10 h-10 text-[#D9A05B] animate-spin-slow"></i>
                    </div>

                    <div class="space-y-2">
                        <span class="text-xs uppercase tracking-[0.25em] text-[#D9A05B] font-semibold">SANTUARIO VIRTUAL</span>
                        <h3 class="font-serif text-3xl font-medium text-[#F5EFE6]">Consulta al Oráculo Místico</h3>
                        <p class="text-xs text-[#9E91A8] max-w-md mx-auto leading-relaxed font-light">
                            Bienvenido al santuario interior. Permíteme sintonizar con la vibración de tu campo áurico para revelarte el amuleto que tu energía reclama hoy.
                        </p>
                    </div>

                    <button onclick="nextOracleStep(1)" class="px-8 py-3.5 rounded-lg bg-[#D9A05B] text-[#0C0712] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#F3DEBA] transition-all shadow-lg">
                        Iniciar la Consulta
                    </button>
                </div>
            `;
            break;

        case 1: // Question 1 (Intention)
            container.innerHTML = `
                <div class="space-y-6">
                    <div class="flex items-center justify-between border-b border-[#D9A05B]/20 pb-3">
                        <span class="text-xs uppercase tracking-[0.2em] text-[#D9A05B]">Pregunta 1 de 3</span>
                        <div class="flex gap-1">
                            <span class="w-2 h-2 rounded-full bg-[#D9A05B]"></span>
                            <span class="w-2 h-2 rounded-full bg-[#D9A05B]/30"></span>
                            <span class="w-2 h-2 rounded-full bg-[#D9A05B]/30"></span>
                        </div>
                    </div>

                    <h3 class="font-serif text-2xl font-medium text-[#F5EFE6]">1. ¿Hacia dónde se inclina el peso de tu energía en este ciclo?</h3>

                    <div class="space-y-3">
                        <button onclick="selectOracleAnswer('intention', 'calma', 2)" class="w-full text-left p-4 rounded-xl bg-[#0C0712] border border-[#D9A05B]/20 hover:border-[#D9A05B] hover:bg-[#D9A05B]/10 transition-colors text-xs text-[#F5EFE6] flex items-center justify-between group">
                            <span>[A] Sobrecarga mental, pensamientos repetitivos y estrés del entorno</span>
                            <i data-lucide="chevron-right" class="w-4 h-4 text-[#D9A05B] group-hover:translate-x-1 transition-transform"></i>
                        </button>
                        <button onclick="selectOracleAnswer('intention', 'abundancia', 2)" class="w-full text-left p-4 rounded-xl bg-[#0C0712] border border-[#D9A05B]/20 hover:border-[#D9A05B] hover:bg-[#D9A05B]/10 transition-colors text-xs text-[#F5EFE6] flex items-center justify-between group">
                            <span>[B] Sensación de estancamiento financiero y deseo de manifestar abundancia</span>
                            <i data-lucide="chevron-right" class="w-4 h-4 text-[#D9A05B] group-hover:translate-x-1 transition-transform"></i>
                        </button>
                        <button onclick="selectOracleAnswer('intention', 'proteccion', 2)" class="w-full text-left p-4 rounded-xl bg-[#0C0712] border border-[#D9A05B]/20 hover:border-[#D9A05B] hover:bg-[#D9A05B]/10 transition-colors text-xs text-[#F5EFE6] flex items-center justify-between group">
                            <span>[C] Vulnerabilidad energética, pesadez ajena y necesidad de protección</span>
                            <i data-lucide="chevron-right" class="w-4 h-4 text-[#D9A05B] group-hover:translate-x-1 transition-transform"></i>
                        </button>
                        <button onclick="selectOracleAnswer('intention', 'amor', 2)" class="w-full text-left p-4 rounded-xl bg-[#0C0712] border border-[#D9A05B]/20 hover:border-[#D9A05B] hover:bg-[#D9A05B]/10 transition-colors text-xs text-[#F5EFE6] flex items-center justify-between group">
                            <span>[D] Cierre de heridas del corazón, necesidad de amor propio y calma</span>
                            <i data-lucide="chevron-right" class="w-4 h-4 text-[#D9A05B] group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </div>
            `;
            break;

        case 2: // Question 2 (Element)
            container.innerHTML = `
                <div class="space-y-6">
                    <div class="flex items-center justify-between border-b border-[#D9A05B]/20 pb-3">
                        <span class="text-xs uppercase tracking-[0.2em] text-[#D9A05B]">Pregunta 2 de 3</span>
                        <div class="flex gap-1">
                            <span class="w-2 h-2 rounded-full bg-[#D9A05B]/30"></span>
                            <span class="w-2 h-2 rounded-full bg-[#D9A05B]"></span>
                            <span class="w-2 h-2 rounded-full bg-[#D9A05B]/30"></span>
                        </div>
                    </div>

                    <h3 class="font-serif text-2xl font-medium text-[#F5EFE6]">2. ¿Qué elemento ancestral clama tu respiración interior?</h3>

                    <div class="space-y-3">
                        <button onclick="selectOracleAnswer('element', 'fuego', 3)" class="w-full text-left p-4 rounded-xl bg-[#0C0712] border border-[#D9A05B]/20 hover:border-[#D9A05B] hover:bg-[#D9A05B]/10 transition-colors text-xs text-[#F5EFE6] flex items-center justify-between group">
                            <span>[A] Fuego transmutador para quemar viejos patrones</span>
                            <i data-lucide="flame" class="w-4 h-4 text-[#D9A05B]"></i>
                        </button>
                        <button onclick="selectOracleAnswer('element', 'tierra', 3)" class="w-full text-left p-4 rounded-xl bg-[#0C0712] border border-[#D9A05B]/20 hover:border-[#D9A05B] hover:bg-[#D9A05B]/10 transition-colors text-xs text-[#F5EFE6] flex items-center justify-between group">
                            <span>[B] Tierra nutricia para enraizar mis pasos con firmeza</span>
                            <i data-lucide="mountain" class="w-4 h-4 text-[#D9A05B]"></i>
                        </button>
                        <button onclick="selectOracleAnswer('element', 'aire', 3)" class="w-full text-left p-4 rounded-xl bg-[#0C0712] border border-[#D9A05B]/20 hover:border-[#D9A05B] hover:bg-[#D9A05B]/10 transition-colors text-xs text-[#F5EFE6] flex items-center justify-between group">
                            <span>[C] Aire sutil para ganar claridad y perspectiva</span>
                            <i data-lucide="wind" class="w-4 h-4 text-[#D9A05B]"></i>
                        </button>
                        <button onclick="selectOracleAnswer('element', 'agua', 3)" class="w-full text-left p-4 rounded-xl bg-[#0C0712] border border-[#D9A05B]/20 hover:border-[#D9A05B] hover:bg-[#D9A05B]/10 transition-colors text-xs text-[#F5EFE6] flex items-center justify-between group">
                            <span>[D] Agua fluida para perdonar, sanar y confiar</span>
                            <i data-lucide="droplet" class="w-4 h-4 text-[#D9A05B]"></i>
                        </button>
                    </div>
                </div>
            `;
            break;

        case 3: // Question 3 (Format)
            container.innerHTML = `
                <div class="space-y-6">
                    <div class="flex items-center justify-between border-b border-[#D9A05B]/20 pb-3">
                        <span class="text-xs uppercase tracking-[0.2em] text-[#D9A05B]">Pregunta 3 de 3</span>
                        <div class="flex gap-1">
                            <span class="w-2 h-2 rounded-full bg-[#D9A05B]/30"></span>
                            <span class="w-2 h-2 rounded-full bg-[#D9A05B]/30"></span>
                            <span class="w-2 h-2 rounded-full bg-[#D9A05B]"></span>
                        </div>
                    </div>

                    <h3 class="font-serif text-2xl font-medium text-[#F5EFE6]">3. ¿De qué manera deseas portar la vibración de la tierra?</h3>

                    <div class="space-y-3">
                        <button onclick="selectOracleAnswer('format', 'collares', 4)" class="w-full text-left p-4 rounded-xl bg-[#0C0712] border border-[#D9A05B]/20 hover:border-[#D9A05B] hover:bg-[#D9A05B]/10 transition-colors text-xs text-[#F5EFE6] flex items-center justify-between group">
                            <span>[A] En un collar cerca del corazón para acompañar mi latido</span>
                            <i data-lucide="chevron-right" class="w-4 h-4 text-[#D9A05B]"></i>
                        </button>
                        <button onclick="selectOracleAnswer('format', 'pulseras', 4)" class="w-full text-left p-4 rounded-xl bg-[#0C0712] border border-[#D9A05B]/20 hover:border-[#D9A05B] hover:bg-[#D9A05B]/10 transition-colors text-xs text-[#F5EFE6] flex items-center justify-between group">
                            <span>[B] En una pulsera o anillo para canalizar mis manos y acciones</span>
                            <i data-lucide="chevron-right" class="w-4 h-4 text-[#D9A05B]"></i>
                        </button>
                        <button onclick="selectOracleAnswer('format', 'cristales', 4)" class="w-full text-left p-4 rounded-xl bg-[#0C0712] border border-[#D9A05B]/20 hover:border-[#D9A05B] hover:bg-[#D9A05B]/10 transition-colors text-xs text-[#F5EFE6] flex items-center justify-between group">
                            <span>[C] En un cristal maestro o amuleto para consagrar mi espacio</span>
                            <i data-lucide="chevron-right" class="w-4 h-4 text-[#D9A05B]"></i>
                        </button>
                    </div>
                </div>
            `;
            break;

        case 4: // Processing State
            container.innerHTML = `
                <div class="text-center py-12 space-y-6">
                    <div class="relative w-24 h-24 mx-auto flex items-center justify-center">
                        <div class="w-24 h-24 border-2 border-t-[#D9A05B] border-r-transparent border-b-[#D9A05B] border-l-transparent rounded-full animate-spin absolute"></div>
                        <i data-lucide="sparkles" class="w-8 h-8 text-[#D9A05B] animate-pulse"></i>
                    </div>

                    <div class="space-y-2">
                        <p class="font-serif italic text-lg text-[#F3DEBA] animate-pulse">
                            Sintonizando la frecuencia de tus centros energéticos...
                        </p>
                        <p class="text-xs text-[#9E91A8]">Alineando Prana & Apana con los minerales del santuario.</p>
                    </div>
                </div>
            `;
            setTimeout(() => {
                oracleState.step = 5;
                renderOracleStep();
            }, 2000);
            break;

        case 5: // Revelation Screen
            const recommendedProduct = getOracleRecommendation();
            const diagnosticText = getOracleDiagnosticText();

            container.innerHTML = `
                <div class="space-y-6">
                    <div class="text-center border-b border-[#D9A05B]/20 pb-4 space-y-1">
                        <span class="text-xs uppercase tracking-[0.25em] text-[#D9A05B] font-semibold">REVELACIÓN DEL ORÁCULO</span>
                        <h3 class="font-serif text-3xl font-medium text-[#F5EFE6]">Tu Diagnóstico Energético</h3>
                    </div>

                    <p class="text-xs text-[#9E91A8] leading-relaxed italic bg-[#0C0712] p-4 rounded-xl border border-[#D9A05B]/20 text-center">
                        "${diagnosticText}"
                    </p>

                    <div class="bg-[#0C0712] p-4 rounded-xl border border-[#D9A05B]/30 flex flex-col sm:flex-row items-center gap-4">
                        <img src="${recommendedProduct.image}" alt="${recommendedProduct.name}" class="w-24 h-24 object-cover rounded-lg border border-[#D9A05B]/30" />
                        <div class="space-y-1 text-center sm:text-left flex-grow">
                            <span class="text-[10px] text-[#D9A05B] font-semibold uppercase">${recommendedProduct.chakra}</span>
                            <h4 class="font-serif text-xl font-medium text-[#F5EFE6]">${recommendedProduct.name}</h4>
                            <p class="text-xs text-[#9E91A8] font-light">${recommendedProduct.property}</p>
                            <p class="font-serif text-base font-bold text-[#F3DEBA] pt-1">$${formatCOP(recommendedProduct.price)} COP</p>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row items-center gap-3 pt-2">
                        <button onclick="addToCart('${recommendedProduct.id}'); closeOracleModal();" class="w-full py-3.5 rounded-lg bg-[#D9A05B] text-[#0C0712] font-semibold text-xs uppercase tracking-[0.15em] hover:bg-[#F3DEBA] transition-colors flex items-center justify-center gap-2">
                            <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                            <span>Añadir Amuleto Recomendado a mi Carrito</span>
                        </button>
                        <button onclick="openOracleModal()" class="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-[#D9A05B]/40 text-[#F5EFE6] text-xs font-medium uppercase tracking-wider hover:bg-[#D9A05B]/10 transition-colors">
                            Realizar otra Consulta
                        </button>
                    </div>
                </div>
            `;
            break;
    }

    if (window.lucide) lucide.createIcons();
}

function nextOracleStep(step) {
    oracleState.step = step;
    renderOracleStep();
}

function selectOracleAnswer(key, val, nextStep) {
    oracleState.answers[key] = val;
    oracleState.step = nextStep;
    renderOracleStep();
}

function getOracleRecommendation() {
    const { intention, format } = oracleState.answers;

    // Filter by intention and format if available
    let matches = PRODUCTS.filter((p) => p.intention === intention);
    if (format) {
        const formatMatches = matches.filter((p) => p.category === format);
        if (formatMatches.length > 0) matches = formatMatches;
    }

    return matches.length > 0 ? matches[0] : PRODUCTS[0];
}

function getOracleDiagnosticText() {
    const { intention } = oracleState.answers;
    switch (intention) {
        case 'calma':
            return 'Tu campo electromagnético muestra un exceso de saturación mental. Tu respiración de Prana requiere espacio de pausa y claridad para disolver pensamientos repetitivos.';
        case 'abundancia':
            return 'Tu energía de manifestación está lista para dar el salto, pero requiere alinear tu chakra de raíz y plexo solar para despejar el miedo a la escasez y permitir el flujo de Apana.';
        case 'proteccion':
            return 'Estás absorbiendo residuos vibracionales de tu entorno cotidiano. Es momento de sellar tu escudo áurico con un mineral de alta densidad y enraizamiento.';
        case 'amor':
            return 'El centro de tu corazón (Anahata) reclama reconexión y suavidad. Necesitas un amuleto que sostenga tu proceso de auto-compasión y sanación de viejas memorias.';
        default:
            return 'Tu energía busca equilibrio integral entre la inspiración de Prana y el asentamiento de Apana.';
    }
}

// --------------------------------------------------------------------------
// 10. CART DRAWER & LOCAL STORAGE PERSISTENCE
// --------------------------------------------------------------------------
function saveCart() {
    localStorage.setItem('prana_cart', JSON.stringify(cart));
}

function addToCart(productId) {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex((item) => item.id === productId);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    openCartDrawer();
    showToast(`" ${product.name} " añadido a tu bolsa.`);
}

function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateQuantity(productId, delta) {
    const index = cart.findIndex((item) => item.id === productId);
    if (index > -1) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        saveCart();
        updateCartUI();
    }
}

function setShippingMethod(method) {
    currentShippingMethod = method;

    const btnCali = document.getElementById('ship-btn-cali');
    const btnNac = document.getElementById('ship-btn-nacional');

    if (method === 'cali') {
        if (btnCali) btnCali.className = 'p-2.5 rounded-lg border text-left text-xs transition-colors bg-[#D9A05B]/20 border-[#D9A05B] text-[#F5EFE6]';
        if (btnNac) btnNac.className = 'p-2.5 rounded-lg border text-left text-xs transition-colors bg-[#0C0712] border-[#D9A05B]/20 text-[#9E91A8]';
    } else {
        if (btnCali) btnCali.className = 'p-2.5 rounded-lg border text-left text-xs transition-colors bg-[#0C0712] border-[#D9A05B]/20 text-[#9E91A8]';
        if (btnNac) btnNac.className = 'p-2.5 rounded-lg border text-left text-xs transition-colors bg-[#D9A05B]/20 border-[#D9A05B] text-[#F5EFE6]';
    }

    updateCartUI();
}

function calculateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let shipping = 0;

    if (currentShippingMethod === 'cali') {
        // Free shipping for Cali if subtotal >= 120,000 COP
        shipping = subtotal >= 120000 || subtotal === 0 ? 0 : 9000;
    } else {
        // National shipping Colombia
        shipping = subtotal === 0 ? 0 : 14000;
    }

    const total = subtotal + shipping;

    return { subtotal, shipping, total };
}

function updateCartUI() {
    // Update badge count
    const badgeCount = document.getElementById('cart-badge-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (badgeCount) {
        badgeCount.textContent = totalItems.toString();
    }

    // Render items list
    const itemsContainer = document.getElementById('cart-items-container');
    if (!itemsContainer) return;

    if (cart.length === 0) {
        itemsContainer.innerHTML = `
            <div class="text-center py-12 space-y-3">
                <i data-lucide="shopping-bag" class="w-10 h-10 text-[#D9A05B] mx-auto opacity-40"></i>
                <p class="text-xs text-[#9E91A8]">Tu bolsa holística está vacía por el momento.</p>
                <button onclick="closeCartDrawer()" class="px-4 py-2 rounded-lg bg-[#D9A05B]/20 text-[#F3DEBA] text-xs font-medium border border-[#D9A05B]/30">
                    Explorar Amuletos
                </button>
            </div>
        `;
    } else {
        itemsContainer.innerHTML = cart.map((item) => `
            <div class="flex items-center justify-between gap-3 bg-[#0C0712] p-3 rounded-xl border border-[#D9A05B]/20">
                <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-cover rounded-lg border border-[#D9A05B]/20" />

                <div class="flex-grow space-y-1">
                    <h4 class="font-serif text-sm font-medium text-[#F5EFE6] line-clamp-1">${item.name}</h4>
                    <p class="text-xs font-serif text-[#F3DEBA] font-semibold">$${formatCOP(item.price)} COP</p>

                    <div class="flex items-center gap-2 pt-1">
                        <button onclick="updateQuantity('${item.id}', -1)" class="w-5 h-5 rounded bg-[#150C20] border border-[#D9A05B]/30 text-[#F5EFE6] text-xs flex items-center justify-center hover:bg-[#D9A05B]/20">-</button>
                        <span class="text-xs font-mono text-[#F5EFE6] px-1">${item.quantity}</span>
                        <button onclick="updateQuantity('${item.id}', 1)" class="w-5 h-5 rounded bg-[#150C20] border border-[#D9A05B]/30 text-[#F5EFE6] text-xs flex items-center justify-center hover:bg-[#D9A05B]/20">+</button>
                    </div>
                </div>

                <button onclick="removeFromCart('${item.id}')" class="p-2 text-[#9E91A8] hover:text-red-400 transition-colors" aria-label="Eliminar item">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
            </div>
        `).join('');
    }

    // Totals
    const { subtotal, shipping, total } = calculateCartTotals();

    const subtotalElem = document.getElementById('cart-subtotal');
    const shippingElem = document.getElementById('cart-shipping-cost');
    const grandTotalElem = document.getElementById('cart-grand-total');

    if (subtotalElem) subtotalElem.textContent = `$${formatCOP(subtotal)} COP`;
    if (shippingElem) shippingElem.textContent = `$${formatCOP(shipping)} COP`;
    if (grandTotalElem) grandTotalElem.textContent = `$${formatCOP(total)} COP`;

    // Free shipping progress bar
    const progressText = document.getElementById('shipping-progress-text');
    const progressBar = document.getElementById('shipping-progress-bar');

    if (progressText && progressBar) {
        if (currentShippingMethod === 'cali') {
            const needed = 120000 - subtotal;
            if (needed <= 0 && subtotal > 0) {
                progressText.textContent = "¡Felicidades! Tienes Envío Local Gratis en Cali.";
                progressBar.style.width = '100%';
            } else if (subtotal === 0) {
                progressText.textContent = "Agrega $120.000 COP para Envío Local Gratis en Cali.";
                progressBar.style.width = '0%';
            } else {
                const percent = Math.min(100, Math.floor((subtotal / 120000) * 100));
                progressText.textContent = `Agrega $${formatCOP(needed)} COP más para Envío Gratis en Cali.`;
                progressBar.style.width = `${percent}%`;
            }
        } else {
            progressText.textContent = "Envío Nacional Tarifa Plana ($14.000 COP a todo el país).";
            progressBar.style.width = '100%';
        }
    }

    if (window.lucide) lucide.createIcons();
}

function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const panel = document.getElementById('cart-drawer-panel');
    if (drawer && panel) {
        drawer.classList.remove('invisible', 'opacity-0');
        panel.classList.remove('translate-x-full');
        document.body.classList.add('modal-open');
    }
}

function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const panel = document.getElementById('cart-drawer-panel');
    if (drawer && panel) {
        panel.classList.add('translate-x-full');
        setTimeout(() => {
            drawer.classList.add('invisible', 'opacity-0');
            document.body.classList.remove('modal-open');
        }, 200);
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const drawer = document.getElementById('mobile-menu-drawer');
    const panel = document.getElementById('mobile-menu-panel');
    if (!drawer || !panel) return;

    if (drawer.classList.contains('invisible')) {
        drawer.classList.remove('invisible', 'opacity-0');
        panel.classList.remove('translate-x-full');
        document.body.classList.add('modal-open');
    } else {
        panel.classList.add('translate-x-full');
        setTimeout(() => {
            drawer.classList.add('invisible', 'opacity-0');
            document.body.classList.remove('modal-open');
        }, 200);
    }
}

// --------------------------------------------------------------------------
// 11. PAYMENT METHOD SELECTOR & CLIPBOARD COPY LOGIC
// --------------------------------------------------------------------------
function onPaymentMethodChange() {
    const select = document.getElementById('payment-method-select');
    const label = document.getElementById('payment-copy-label');
    const val = document.getElementById('payment-copy-val');
    const box = document.getElementById('payment-copy-box');

    if (!select || !label || !val || !box) return;

    switch (select.value) {
        case 'nequi':
            box.style.display = 'flex';
            label.textContent = 'Número Nequi:';
            val.textContent = '3113296313';
            break;
        case 'daviplata':
            box.style.display = 'flex';
            label.textContent = 'Número Daviplata:';
            val.textContent = '3113296313';
            break;
        case 'bre-b':
            box.style.display = 'flex';
            label.textContent = 'Llave Bre-B:';
            val.textContent = '3113296313';
            break;
        case 'contraentrega':
            box.style.display = 'none';
            break;
    }
}

function copyPaymentNumber() {
    const valElem = document.getElementById('payment-copy-val');
    if (!valElem) return;

    const textToCopy = valElem.textContent.trim();
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copiado al portapapeles: ${textToCopy}`);
    }).catch(() => {
        showToast(`Número: ${textToCopy}`);
    });
}

// --------------------------------------------------------------------------
// 12. WHATSAPP CHECKOUT GENERATOR (SPEC SECTION 6.4)
// --------------------------------------------------------------------------
function processWhatsAppCheckout() {
    if (cart.length === 0) {
        showToast('Tu bolsa está vacía. Añade un amuleto antes de continuar.');
        return;
    }

    const nameInput = document.getElementById('cust-name');
    const phoneInput = document.getElementById('cust-phone');
    const cityInput = document.getElementById('cust-city');
    const addressInput = document.getElementById('cust-address');
    const paySelect = document.getElementById('payment-method-select');

    const name = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const city = cityInput ? cityInput.value.trim() : '';
    const address = addressInput ? addressInput.value.trim() : '';
    const paymentMethod = paySelect ? paySelect.value : 'nequi';

    if (!name || !phone || !city || !address) {
        showToast('Por favor completa todos los campos de entrega requeridos.');
        return;
    }

    // Generate Order ID: #PRANA-XXXX
    const orderNum = Math.floor(1000 + Math.random() * 9000);
    const orderId = `#PRANA-${orderNum}`;

    const { subtotal, shipping, total } = calculateCartTotals();

    // Readable Payment Label
    let payLabel = "Nequi";
    if (paymentMethod === "daviplata") payLabel = "Daviplata";
    if (paymentMethod === "bre-b") payLabel = "Llave Bre-B";
    if (paymentMethod === "contraentrega") payLabel = "Pago Contra Entrega Cali";

    // Shipping Method Label
    const shipLabel = currentShippingMethod === 'cali' ? 'Local Cali Express' : 'Envío Nacional Colombia';

    // Format products list
    const productLines = cart.map((item) => `- ${item.quantity}x ${item.name} ($${formatCOP(item.price * item.quantity)} COP)`).join('\n');

    // Compile EXACT text format specified in prompt (Zero emojis, uppercase headers)
    const message = `ORDEN: ${orderId}
CLIENTE: ${name}
TELEFONO: ${phone}
CIUDAD / BARRIO: ${city}
DIRECCION: ${address}

PRODUCTOS:
${productLines}

SUBTOTAL: $${formatCOP(subtotal)} COP
ENVIO: $${formatCOP(shipping)} COP (${shipLabel})
TOTAL A PAGAR: $${formatCOP(total)} COP

METODO DE PAGO: ${payLabel}

Adjunto el comprobante de transferencia por este medio para despachar mi pedido.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/573113296313?text=${encodedMessage}`;

    // 1. Open WhatsApp link in a new tab
    window.open(whatsappUrl, '_blank');

    // 2. Show Order Confirmation Modal
    openOrderConfirmationModal(orderId);

    // 3. Clear cart in localStorage and state
    cart = [];
    saveCart();
    updateCartUI();
    closeCartDrawer();
}

function openOrderConfirmationModal(orderId) {
    const modal = document.getElementById('order-confirmation-modal');
    const orderIdElem = document.getElementById('order-confirm-id');
    if (modal && orderIdElem) {
        orderIdElem.textContent = orderId;
        modal.classList.remove('invisible', 'opacity-0');
        document.body.classList.add('modal-open');
    }
}

function closeOrderConfirmationModal() {
    const modal = document.getElementById('order-confirmation-modal');
    if (modal) {
        modal.classList.add('invisible', 'opacity-0');
        document.body.classList.remove('modal-open');
    }
}

// --------------------------------------------------------------------------
// 13. TOAST NOTIFICATIONS SYSTEM
// --------------------------------------------------------------------------
function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-notice';
    toast.innerHTML = `
        <i data-lucide="sparkles" class="w-4 h-4 text-[#D9A05B]"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
