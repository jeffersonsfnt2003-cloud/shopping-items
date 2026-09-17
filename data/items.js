/* Catálogo de compras — index.html es solo la vista. Todo dato vive acá.
   2026-09-17: catálogo reiniciado. Se eliminaron las categorías Estuches,
   Desk pads, Casas contenedor y Bases y coolers junto con sus referencias.
   Queda una sola categoría: Gimnasio.

   NOTA DE COSTOS: los equipos de gimnasio pesan 54–200 kg y quedan fuera del
   motor EUB de Superbuy (límite 2.000 g y US$130). Todos van con sb:"na" y
   carga_pesada:true — el flete se cotiza aparte, marítimo, y no se calcula acá. */

window.CATALOGO = {
  meta: {
    "tasa_cny_usd": 0.1491,
    "tasa_fecha": "2026-09-17",
    "tasa_fuente": "https://www.foreignexchange.org.uk/fx-rates/conversion/1/CNY/USD",
    "fuente_unica": "https://www.goofish.com/",
    "barrido": {
      "consultas": 23,
      "items_vistos": 0,
      "con_medidas": 0,
      "que_encajan": 34,
      "verificados": 6
    },
    "proxy": {
      "nombre": "Superbuy",
      "verificado": "2026-09-04",
      "destino": "El Salvador",
      "bodega": "Guangdong",
      "comision_cny": 20,
      "comision_nota": "Tarifa plana por ÍTEM para plataformas de segunda mano (闲鱼/Goofish). Leída en la propia ficha de Superbuy: 'Service Fee CN ¥20 / item'.",
      "eub": {
        "g1000": 324, "g2000": 578, "dias": "15-28",
        "limite_peso_g": 2000, "limite_lado_cm": 60, "limite_suma_cm": 90, "limite_valor_usd": 130
      },
      "expres": { "desde_cny": 721, "dias": "8-11", "nota": "Cobra por peso volumétrico, no real." },
      "carga_pesada": {
        "servicio": "Customized Logistics Service",
        "desde_kg": 30,
        "modo": "marítimo o ferroviario",
        "respuesta": "3 días hábiles",
        "nota": "Superbuy no publica tarifas para carga pesada: hay que pedir cotización con el peso bruto embalado y los metros cúbicos. Su servicio de carga es SOLO transporte, con inspección visual del exterior."
      },
      "nota": "Tarifas leídas de la calculadora oficial de Superbuy con destino El Salvador el 2026-09-04. El flete definitivo lo fija la factura del transportista."
    }
  },

  categorias: [
    {
      "id": "gimnasio",
      "nombre": "Gimnasio",
      "tab": "Gimnasio",
      "icono": "pesa",
      "objetivo": "Equipo completo de fuerza para casa: jaula, máquina Smith y estación de poleas. Bien equipado sin llegar a nivel gimnasio comercial. El precio del anuncio es lo de menos — el peso decide el costo real.",
      "requisito_minimo": "Que cubra jalón alto, extensión de tríceps, remo bajo y curl sin reanclar nada. Ningún vendedor chino publica el peso bruto embalado: es la primera pregunta antes de cotizar flete.",
      "busquedas": [
        { "zh": "史密斯综合训练架", "en": "Smith machine combo rack" },
        { "zh": "多功能深蹲架史密斯", "en": "multifunction squat rack with Smith" },
        { "zh": "三合一综合训练架", "en": "3-in-1 training rack" },
        { "zh": "单边龙门架", "en": "single-side cable crossover" },
        { "zh": "小飞鸟训练器", "en": "compact cable crossover" },
        { "zh": "高低拉训练器", "en": "high/low pulley trainer" },
        { "zh": "壁挂式综合训练器", "en": "wall-mounted trainer" },
        { "zh": "墙体龙门架", "en": "wall cable tower" },
        { "zh": "靠墙综合训练器", "en": "against-the-wall trainer" },
        { "zh": "墙体小飞鸟", "en": "wall compact crossover" },
        { "zh": "商用高位下拉", "en": "commercial lat pulldown" },
        { "zh": "迈宝赫高位下拉", "en": "MBH lat pulldown" }
      ]
    }
  ],

  items: [
    {
      id: "gym-muro-wengrutaishan", categoria: "gimnasio",
      titulo: "Estación de pared «Estable como una montaña»",
      titulo_zh: "墙体飞鸟龙门架 高位下拉不翘头",
      tienda: "Goofish", precio_cny: 469, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Estación de muro · 2 funciones · sin torre de pesas",
      material: "Acero, espesor no publicado", color: "No publicado", condicion: "Nuevo, fábrica directa",
      funciones: ["Cruces de polea (飞鸟)", "Jalón alto (高位下拉)"],
      resumen: "Lo más liviano y barato de la lista. Estructura de muro sin contrapeso: cargas tus propios discos.",
      descripcion: "Estructura de pared de fábrica, sin torre de pesas. El vendedor la publicita como que «no cabecea» al cargar, que es justamente el defecto típico de los soportes de pared baratos. Al no traer contrapeso ni accesorios, es la opción de menor peso de embarque de todo el catálogo — y por eso la más barata de traer.",
      verificacion: ["El anuncio declara dos funciones: cruces y jalón alto", "Vendedor marcado 信用优秀 (reputación buena)"],
      reservas: ["No publica espesor de tubo ni carga máxima", "No publica peso ni dimensiones", "No incluye discos"],
      vendedor: { nombre: "军健健身器材配件", ciudad: "China", ventas: 0, reputacion: "信用优秀" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01gAiPOjLwiKB12CrO~livephoto~_!!4611686018427383125-0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=1076928423418"
    },
    {
      id: "gym-kus-muro", categoria: "gimnasio",
      titulo: "KUS — Columna de pared con cruces alto y bajo",
      titulo_zh: "KUS 墙体大飞鸟小飞鸟高位下拉宽背肩夹胸肱三头肌综合健身肌肉训练器",
      tienda: "Goofish", precio_cny: 484, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Estación de muro · 6 funciones · sin discos por defecto",
      material: "Acero", color: "No publicado", condicion: "Nuevo",
      funciones: ["Cruces alto (大飞鸟)", "Cruces bajo (小飞鸟)", "Jalón alto (高位下拉)", "Espalda en agarre ancho (宽背)", "Apertura de hombro y pecho (肩夹胸)", "Tríceps (肱三头肌)"],
      resumen: "Del vendedor con más ventas verificadas del catálogo: 4.071 ventas y 96% de valoraciones.",
      descripcion: "Columna de pared nueva, de una fábrica con 9 años en la plataforma. Cubre seis ejercicios nombrados en el propio título del anuncio. No trae discos por defecto. Va cubierta por la garantía 描述不符包邮退, que devuelve con flete pagado si el producto no coincide con la descripción — protección poco común en Goofish.",
      verificacion: ["Fábrica con 9 años en la plataforma y 4.071 ventas", "96% de valoraciones positivas", "Garantía 描述不符包邮退 activa en la ficha", "155 personas marcaron interés"],
      reservas: ["No publica espesor de tubo ni carga", "Sin torre de pesas: hay que sumar discos", "No publica peso de embarque"],
      vendedor: { nombre: "泰诺健源头厂家", ciudad: "金华", ventas: 4071, reputacion: "96% positivas · 9 años" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01OlmYfM1rGE02ru5Rs_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01MVihLr1rGE04YPyqs_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01Elqq711rGE007CLaC_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01YuKYgZ1rGE0ALZCbn_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01aqvinF1rGE1WVyFUE_!!53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01vHtLvk1rGE1WWBfr5_!!53-fleamarket.heic_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=720826913170"
    },
    {
      id: "gym-3en1-800", categoria: "gimnasio",
      titulo: "Rack tres en uno multifunción",
      titulo_zh: "全新三合一多功能训练架",
      tienda: "Goofish", precio_cny: 800, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Rack 3 en 1 · el más barato de su categoría",
      material: "Acero, espesor no publicado", color: "No publicado", condicion: "Nuevo",
      funciones: ["Rack de sentadilla (深蹲架)", "Máquina Smith (史密斯)", "Estación de cruces (小飞鸟)"],
      funciones_origen: "三合一 estándar",
      resumen: "El rack completo más barato de la lista. 70 personas marcaron interés.",
      descripcion: "Rack tres en uno nuevo. El vendedor no publica espesor de tubo, carga ni dimensiones, así que las tres funciones son la decodificación estándar de 三合一 en el mercado chino (sentadilla, Smith y cruces), no una lista que él haya escrito. Todo lo estructural queda como pregunta antes de pagar.",
      verificacion: ["70 personas marcaron interés", "Publicado como nuevo"],
      reservas: ["Las 3 funciones son decodificación del formato 三合一, no texto del vendedor", "No publica espesor, carga, dimensiones ni peso", "Sin datos del vendedor en la ficha"],
      vendedor: { nombre: "拱辰街跑步的荷叶", ciudad: "China", ventas: 0, reputacion: "信用优秀" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01vDDEhi1QIyyRnrQ1z_!!4611686018427380034-0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=998922818995"
    },
    {
      id: "gym-weifeng", categoria: "gimnasio",
      titulo: "Weifeng — Smith con rack de sentadilla, grado comercial",
      titulo_zh: "伟丰 史密斯深蹲架多功能综合训练器",
      tienda: "Goofish", precio_cny: 968, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Rack + Smith · 3 funciones · grado comercial declarado",
      material: "Acero", color: "No publicado", condicion: "Nuevo",
      funciones: ["Sentadilla (深蹲)", "Press de banca (卧推)", "Máquina Smith (史密斯)"],
      resumen: "De los pocos en este rango que se posiciona como comercial y no doméstico.",
      descripcion: "Marca 伟丰, con estructura descrita como de grado comercial y apta para gimnasio, estudio o casa. En este rango de precio casi todo se vende como doméstico, así que el posicionamiento comercial es la diferencia — aunque el vendedor no lo respalde con números de espesor ni carga.",
      verificacion: ["El anuncio declara grado comercial", "Declara uso en gimnasio, estudio y casa"],
      reservas: ["«Grado comercial» sin espesor ni carga publicados es una afirmación, no un dato", "No publica peso ni dimensiones"],
      vendedor: { nombre: "伟丰", ciudad: "山东", ventas: 0, reputacion: "No publicada" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01jbr9yD1m2PmurZBZs_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01Az9lik1MxV9gepZtY_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01DbD5r41mwI5bs6HOt_!!0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=1057768406724"
    },
    {
      id: "gym-aichen", categoria: "gimnasio",
      titulo: "Aichen — Estación de poleas «calidad de exportación»",
      titulo_zh: "爱宸 出口品质单边飞鸟100kg配重龙门架高位下拉综合训练器引体向上",
      tienda: "Goofish", precio_cny: 970, peso_txt: "125 kg", peso_nota: "equipo completo", sb: "na", carga_pesada: true,
      spec: "Estación de poleas · 5 funciones · 11 alturas · doble polea · 125 kg",
      material: "Acero", color: "No publicado", condicion: "Nuevo",
      funciones: ["Cruces de polea (飞鸟训练)", "Jalón alto (高位下拉)", "Remo bajo (低拉划船)", "Tirón de pie (站姿提拉)", "Dominadas (引体向上)"],
      variantes_tipo: "sku",
      variantes_campo: "规格 (especificación)",
      variantes: [
        { nombre: "Contrapeso 70 kg", precio_cny: 970, base: true },
        { nombre: "Contrapeso 100 kg", precio_cny: 1150 }
      ],
      resumen: "11 posiciones de altura y doble polea: cubre alto y bajo sin reanclar nada. Envío gratis con devolución pagada.",
      descripcion: "Estación de polea de pie de «calidad de exportación». Las 11 posiciones de altura con doble polea son lo que la separa de las estaciones de altura fija: cubre jalón alto, remo bajo, curl y cruces sin volver a taladrar ni mover anclajes. Incluye agarres de cruces y barra de dominadas. No nombra cuerda de tríceps ni barra de jalón, así que eso hay que preguntarlo. Envío gratis hasta la puerta dentro de China, con devolución de flete pagado si sale defectuosa.",
      verificacion: ["Fábrica con 3 años, 2.188 ventas y 97% positivas", "Publica peso total: 125 kg", "Publica 11 posiciones de altura y doble polea", "Enumera sus 5 funciones en el texto", "156 interesados y 5.996 visitas"],
      reservas: ["No nombra cuerda de tríceps ni barra de jalón entre los accesorios", "No publica espesor de tubo", "El peso de 125 kg es del equipo, no el bruto embalado"],
      vendedor: { nombre: "专业工厂生产", ciudad: "南通", ventas: 2188, reputacion: "97% positivas · 3 años" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01IjPIWC1sszMOOWeK8_!!4611686018427383759-53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01RHGQbz1sszMMab3h4_!!4611686018427383759-53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01dYrR691sszMMHMNcO_!!4611686018427383759-53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01FxtCmU1sszMMngkh1_!!4611686018427383759-53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01Vwuvg71sszMLi26bC_!!4611686018427383759-53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01n5HYa51sszMNgKYEl_!!4611686018427383759-53-fleamarket.heic_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=946610216693"
    },
    {
      id: "gym-hoist", categoria: "gimnasio",
      titulo: "Hoist — Estación individual (marca EE. UU.)",
      titulo_zh: "美国汉臣 单人站综合训练器",
      tienda: "Goofish", precio_cny: 988, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Estación individual · marca premium usada · al 38% del precio de compra",
      material: "No publicado", color: "No publicado", condicion: "Casi nueva",
      funciones: [],
      funciones_origen: "sin enumerar",
      resumen: "La única marca occidental real del catálogo, casi nueva y al 38% de lo que costó.",
      descripcion: "Estación individual de Hoist, marca estadounidense de gama alta. Es la única marca occidental real de todo el catálogo. Casi nueva y vendida al 38% de su precio de compra. El anuncio no enumera funciones ni especificaciones: una 单人站 de Hoist típicamente cubre jalón, remo, cruces y press, pero eso es lo que sé de la marca, no lo que dice esta ficha. Confírmalo antes de comprar.",
      verificacion: ["Marca Hoist / 汉臣, fabricante estadounidense real", "Estado declarado: casi nueva", "Precio al 38% del de compra según la ficha"],
      reservas: ["El anuncio no enumera ninguna función", "No publica peso, dimensiones ni modelo exacto", "Sin historial de ventas del vendedor visible"],
      vendedor: { nombre: "喜欢吃玉米", ciudad: "China", ventas: 0, reputacion: "No publicada" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01IfWowu1TSXaRtYthG_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/6000000001809/TB2GK.UsS0jpuFjy0FlXXc0bpXa_!!0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=993119597766"
    },
    {
      id: "gym-smith-deep-999", categoria: "gimnasio",
      titulo: "Combo Smith + sentadilla + cruces con polea alta y baja",
      titulo_zh: "小飞鸟史密斯深蹲组合训练架 三合一 高低拉一体机",
      tienda: "Goofish", precio_cny: 999, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Rack 3 en 1 · 5 funciones · alta y baja polea integradas",
      material: "Acero", color: "No publicado", condicion: "No especificado",
      funciones: ["Estación de cruces (小飞鸟)", "Máquina Smith (史密斯)", "Sentadilla (深蹲)", "Polea alta (高拉)", "Polea baja (低拉)"],
      resumen: "De los pocos en este precio que declara las dos alturas de polea por separado. Vendedor con 100% positivas.",
      descripcion: "Tres en uno con polea alta y baja integradas en un solo cuerpo — el vendedor lo llama 高低拉一体机. La mayoría en este rango solo dice «三合一» y deja las poleas ambiguas; este las separa, que es lo que importa para saber si podés hacer remo bajo sin reanclar.",
      verificacion: ["Vendedor con 100% de valoraciones positivas", "Declara explícitamente polea alta y baja como funciones separadas", "6 personas marcaron interés"],
      reservas: ["No publica espesor, carga ni dimensiones", "No declara estado (nuevo o usado)", "No publica peso"],
      vendedor: { nombre: "Vendedor de 山东", ciudad: "山东", ventas: 0, reputacion: "100% positivas" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01pRLYAI20L6wHsQrGk_!!4611686018427381424-0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/6000000003749/TB2GiRLauGSBuNjSspbXXciipXa_!!0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=861262389762"
    },
    {
      id: "gym-smith-comercial-999", categoria: "gimnasio",
      titulo: "Smith multifunción grado comercial, negro y naranja",
      titulo_zh: "史密斯深蹲多功能综合训练架 商用级别",
      tienda: "Goofish", precio_cny: 999, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Rack + Smith · 3 funciones · grado comercial declarado",
      material: "Acero", color: "Negro con naranja", condicion: "Nuevo",
      funciones: ["Máquina Smith (史密斯)", "Sentadilla (深蹲)", "Dominadas (引体向上)"],
      resumen: "Estructura descrita como estable y de recorridos variados, apta para gimnasio, estudio y casa.",
      descripcion: "Cuerpo negro con accesorios naranjas y estructura descrita como de grado comercial. El vendedor destaca 结构稳固 (estructura firme) y variedad de movimientos, pero sin ningún número que lo respalde. En este precio, «comercial» es posicionamiento, no certificación.",
      verificacion: ["Declara grado comercial", "Declara dominadas además de Smith y sentadilla", "Color y acabado publicados"],
      reservas: ["«结构稳固» sin espesor ni carga es adjetivo, no dato", "No publica peso ni dimensiones"],
      vendedor: { nombre: "Vendedor de 山东", ciudad: "山东", ventas: 0, reputacion: "No publicada" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01k2YqqX1EgzsqAlrEO_!!0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=1041668940894"
    },
    {
      id: "gym-3en1-accesorios", categoria: "gimnasio",
      titulo: "Rack tres en uno con accesorios completos",
      titulo_zh: "全新三合一综合训练架 配件全 到手直接用",
      tienda: "Goofish", precio_cny: 1000, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Rack 3 en 1 · accesorios completos declarados",
      material: "Acero", color: "No publicado", condicion: "Nuevo",
      funciones: ["Rack de sentadilla (深蹲架)", "Máquina Smith (史密斯)", "Estación de cruces (小飞鸟)"],
      funciones_origen: "三合一 estándar",
      resumen: "Dice explícitamente 配件全，到手直接用: accesorios completos, listo al recibirlo. Eso lo separa de los que venden el marco pelado.",
      descripcion: "De los pocos anuncios que aclara por escrito que los accesorios van incluidos y el equipo llega listo para usar. En una categoría donde los dos mejores vendedores publican el precio del marco pelado y cotizan todo lo demás por chat, esa frase vale dinero. Precio negociable y admite recoger en persona o envío por logística.",
      verificacion: ["Declara 配件全，到手直接用 (accesorios completos, listo para usar)", "Precio negociable", "Admite recogida o envío por logística", "7 personas marcaron interés"],
      reservas: ["No lista cuáles son esos accesorios", "Las 3 funciones son decodificación del formato 三合一", "No publica espesor, carga ni peso"],
      vendedor: { nombre: "Vendedor de 山东", ciudad: "山东", ventas: 0, reputacion: "No publicada" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01gNr8ZUEd7OG2LWWW~livephoto~_!!4611686018427385288-0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01PSFUdm25QDVN1gDvm_!!4611686018427384640-0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=1072748640824"
    },
    {
      id: "gym-3en1-carbono", categoria: "gimnasio",
      titulo: "Rack tres en uno de acero al carbono",
      titulo_zh: "三合一综合训练架 碳钢材质 方管",
      tienda: "Goofish", precio_cny: 1000, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Rack 3 en 1 · 4 funciones · publica agujeros y medidas",
      material: "Acero al carbono, tubo cuadrado", color: "No publicado", condicion: "Nuevo",
      funciones: ["Sentadilla (深蹲)", "Press de banca (卧推)", "Cruces de polea (飞鸟)", "Máquina Smith (史密斯)"],
      resumen: "Publica diámetro y separación de agujeros. Señal de que le vende a gente que compara fichas, no fotos.",
      descripcion: "Acero al carbono con tubo cuadrado. Es de los pocos de este rango que publica diámetro de agujero, paso entre agujeros y las tres medidas del equipo. Ese detalle importa: define qué accesorios de terceros le calzan después.",
      verificacion: ["Publica diámetro y separación de agujeros", "Publica largo, ancho y alto", "Enumera 4 funciones en el texto"],
      reservas: ["No publica espesor de pared del tubo", "No publica carga máxima ni peso"],
      vendedor: { nombre: "Vendedor de 上海", ciudad: "上海", ventas: 0, reputacion: "No publicada" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i1/O1CN012A5Fef1ge4yskvfUm_!!0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=1037341870451"
    },
    {
      id: "gym-longmen-smith", categoria: "gimnasio",
      titulo: "Torre de poleas + Smith + sentadilla, tubo reforzado",
      titulo_zh: "龙门架史密斯三合一 加厚钢管 配重单边",
      tienda: "Goofish", precio_cny: 1000, peso_txt: "No publicado", sb: "na", carga_pesada: true, envio: "incluido",
      spec: "Rack 3 en 1 · tubo reforzado · contrapeso de un lado",
      material: "Acero, tubo reforzado (加厚钢管)", color: "No publicado", condicion: "Nuevo",
      funciones: ["Torre de poleas (龙门架)", "Rack de sentadilla (深蹲架)", "Estación de cruces (小飞鸟)"],
      resumen: "Precio a firme con logística incluida dentro de China. Contrapeso de un lado; hay versión de dos.",
      descripcion: "Combinación de torre de poleas, rack de sentadilla y estación de cruces, con tubo reforzado. El precio base trae contrapeso de un solo lado y existe versión de dos lados por más. Vendido como 实价 — precio firme, sin regateo — con la logística dentro de China ya incluida.",
      verificacion: ["Precio a firme (实价) con logística incluida en China", "Declara tubo reforzado", "Contrapeso de un lado incluido, doble disponible"],
      reservas: ["No publica espesor exacto ni carga", "No publica peso ni dimensiones", "El contrapeso doble cuesta aparte"],
      vendedor: { nombre: "Vendedor de 陕西", ciudad: "陕西", ventas: 0, reputacion: "No publicada" },
      imagenes: [],
      url: "https://www.goofish.com/item?id=1083853648249"
    },
    {
      id: "gym-smith-plata", categoria: "gimnasio",
      titulo: "Smith tres en uno plateado, cuerpo integrado",
      titulo_zh: "银色史密斯三合一肌肉训练器械 家用飞鸟多功能龙门架一体",
      tienda: "Goofish", precio_cny: 1019, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Rack 3 en 1 · cuerpo integrado · acabado plateado",
      material: "Acero", color: "Plateado", condicion: "No especificado",
      funciones: ["Máquina Smith (史密斯)", "Estación de cruces (飞鸟)", "Torre de poleas (龙门架)"],
      funciones_origen: "三合一 estándar",
      resumen: "45 interesados. El acabado plateado es raro en esta categoría, casi todo es negro.",
      descripcion: "Cuerpo integrado de Smith, cruces y torre de poleas para casa, con acabado plateado. El anuncio no publica especificaciones estructurales; la demanda sugiere que el precio es competitivo para lo que ofrece, no que el producto esté documentado.",
      verificacion: ["45 personas marcaron interés", "Acabado y formato publicados"],
      reservas: ["Cero especificaciones estructurales en la ficha", "Las 3 funciones son decodificación del formato 三合一", "No declara estado ni peso"],
      vendedor: { nombre: "小星西区", ciudad: "China", ventas: 0, reputacion: "No publicada" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01Ctqb8l1FT5RphupM3_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/6000000007636/TB2vyN5nkyWBuNjy0FpXXassXXa_!!0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=1034107708056"
    },
    {
      id: "gym-rep-hongbo", categoria: "gimnasio",
      titulo: "REP tres en uno — excedente de exportación (Guangzhou)",
      titulo_zh: "劲爆价全新REP三合一框架训练架 一架多用 史密斯 小飞鸟 深蹲 外贸尾货清仓",
      tienda: "Goofish", precio_cny: 1188, peso_txt: "No publicado", sb: "na", carga_pesada: true, envio: "incluido",
      spec: "Jaula + Smith + cruces · 17 modos · Q235 3 mm · 75×75 mm · 1000 kg",
      material: "Acero Q235 grado exportación, pared 3 mm, tubo 75×75 mm", color: "12 colores a elegir", condicion: "Nuevo",
      funciones: ["Sentadilla (深蹲)", "Press de banca (卧推)", "Apertura de pecho (飞鸟夹胸)", "Dominadas (引体向上)", "Cuerda de batalla (战绳训练)"],
      funciones_origen: "5 nombradas de 17 declaradas",
      variantes_tipo: "chat",
      variantes_campo: "cinco modelos mencionados sin precio publicado",
      variantes: [
        { nombre: "Marco pelado (precio publicado)", precio_cny: 1188, base: true },
        { nombre: "Los otros 4 modelos", nota: "el vendedor no publica sus precios" }
      ],
      resumen: "OJO: el precio publicado es del MARCO PELADO. Q235 de 3 mm y tubo de 75×75 — grado comercial de verdad.",
      descripcion: "Excedente de exportación de REP. Es de los dos únicos anuncios del catálogo que publica acero, espesor de pared, sección de tubo y carga estática — y los números son de grado comercial, no doméstico. El anuncio declara 17 modos de entrenamiento pero solo nombra cinco. Tiene cinco modelos distintos que el vendedor cotiza por chat sin publicar precios, así que no aparecen como variantes acá: no invento renglones que la ficha no sostiene. Lo crítico está en la letra chica: 标价为框架价格 — ese precio es solo el marco.",
      verificacion: ["Publica acero Q235, pared de 3 mm y tubo de 75×75 mm", "Publica carga estática de 1000 kg", "Contrapeso de 70 kg de acero con capa antigolpe", "12 colores a elegir y guía de armado gratis", "Vendedor con 3 años, 1.549 ventas y 97% positivas"],
      reservas: ["El precio publicado es del marco pelado: Smith, contrapeso y accesorios se cotizan aparte", "Los 5 modelos no tienen precio publicado", "Declara 17 modos pero solo nombra 5", "No publica peso ni metros cúbicos de embalaje"],
      vendedor: { nombre: "宏博体育", ciudad: "广州", ventas: 1549, reputacion: "97% positivas · 3 años" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01wvMIdT29AskBDzACM_!!4611686018427386636-0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01UJGhxl29AskB27Yjc_!!4611686018427386636-0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01nPmPsx29AskBLIhG2_!!4611686018427386636-0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01FqQQJ729AskBDwgL5_!!4611686018427386636-0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01KYPenU29AskBLIthy_!!4611686018427386636-0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01pGib1S29AskBL6mc6_!!4611686018427386636-0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=1032606900399"
    },
    {
      id: "gym-rep-comercial", categoria: "gimnasio",
      titulo: "REP — Rack comercial con Smith para casa",
      titulo_zh: "REP综合训练架龙门架健身器材商用史密斯家用多功能深蹲卧推架",
      tienda: "Goofish", precio_cny: 1200, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Rack + Smith · 4 funciones · 111 interesados",
      material: "Acero", color: "No publicado", condicion: "No especificado",
      funciones: ["Torre de poleas (龙门架)", "Máquina Smith (史密斯)", "Sentadilla (深蹲)", "Press de banca (卧推)"],
      resumen: "Alta demanda para lo poco que publica: señal de precio agresivo, no de ficha completa.",
      descripcion: "Rack REP comercial adaptado a uso doméstico. 111 personas marcaron interés, que es mucho para un anuncio que no publica ni espesor ni carga ni peso. Eso suele significar precio agresivo más que producto documentado.",
      verificacion: ["111 personas marcaron interés", "Vendedor marcado 信用极好 (reputación excelente)", "Declara 4 funciones en el título"],
      reservas: ["No publica ninguna especificación estructural", "No declara estado ni peso", "La demanda alta no sustituye a la ficha técnica"],
      vendedor: { nombre: "健身器材", ciudad: "China", ventas: 0, reputacion: "信用极好" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01LdyLVh1tFseGeQLX6_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01koi9nF1nL1QlFp3Fc_!!0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=1076686814727"
    },
    {
      id: "gym-rep-shangyi", categoria: "gimnasio",
      titulo: "REP medio rack tres en uno — excedente de exportación (Shandong)",
      titulo_zh: "REP半框深蹲架三合一史密斯机小飞鸟综合训练器家用商用健身房龙门架卧推架",
      tienda: "Goofish", precio_cny: 1300, peso_txt: "120 kg", peso_nota: "solo el marco, armado sube", sb: "na", carga_pesada: true, envio: "incluido",
      spec: "Jaula o medio rack · 7 funciones · Q235 3 mm · 75×75 mm · 1200×1200×2200 mm · 1000 kg",
      material: "Acero Q235 grado exportación, pared 3 mm, tubo 75×75 mm, resiste 3 t de impacto", color: "Casi cualquiera, accesorios a la carta", condicion: "Nuevo",
      funciones: ["Dominadas (引体向上)", "Sentadilla (深蹲训练)", "Press plano (平板卧推)", "Apertura de pecho (飞鸟夹胸)", "Bíceps (二头)", "Tríceps (三头)", "Máquina Smith (史密斯锻炼)"],
      variantes_tipo: "chat",
      variantes_campo: "cinco configuraciones descritas en el texto del anuncio",
      variantes: [
        { nombre: "Marco desnudo (precio publicado)", precio_cny: 1300, base: true },
        { nombre: "① Jaula completa, doble seguro antideslizamiento", nota: "a cotizar" },
        { nombre: "② Medio rack, cierre de competición", nota: "a cotizar" },
        { nombre: "③ Riel Smith con limitador ±15°", nota: "a cotizar" },
        { nombre: "④ Estación de cruces, contrapeso de acero", nota: "a cotizar" },
        { nombre: "⑤ Torre multifuncional de 17 modos", precio_cny: 4480 }
      ],
      resumen: "El más completo del catálogo, y el precio publicado es del marco pelado. Rango real ¥1300–4480.",
      descripcion: "Excedente de exportación de REP, quedan 51 juegos. Es el único anuncio que declara resistencia al impacto y que aclara que no es la versión recortada de 950 mm que abunda en el mercado — un detalle que solo escribe quien sabe que el comprador lo va a comparar. Las cinco configuraciones se cotizan por chat dentro del rango ¥1300–4480 y el vendedor manda un PDF con la lista de accesorios. La letra chica dice 标价为裸机全框全国包邮价格: el precio es del marco desnudo.",
      verificacion: ["Publica acero Q235, pared de 3 mm, tubo de 75×75 mm y resistencia a 3 t de impacto", "Publica dimensiones 1200×1200×2200 mm y aclara que no es la versión recortada de 950", "Publica peso del marco: 120 kg", "Contrapeso de 70 kg de acero con capa de silicona antigolpe", "Compatible con barras olímpicas, mancuernas y cuerdas de batalla", "Vendedor con 7 años, 1.286 ventas y 98% positivas", "Garantía 描述不符包邮退 activa", "233 interesados y 4.879 visitas"],
      reservas: ["El precio publicado es del marco desnudo, no del equipo armado", "Cuatro de las cinco configuraciones no tienen precio publicado", "Los 120 kg son del marco, no el bruto embalado", "Marca declarada MBH/迈宝赫: es de las más clonadas de China, pide foto de la placa"],
      vendedor: { nombre: "山东尚亿健身器材", ciudad: "汕尾", ventas: 1286, reputacion: "98% positivas · 7 años" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01d2Kqpr1EtpRKYpjuK_!!4611686018427383770-53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01zJLsbj1EtpRMwRo7f_!!4611686018427383770-53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01bQCR9K1EtpRLiOeqQ_!!4611686018427383770-53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01HNJY7i1EtpRMKWTt1_!!4611686018427383770-53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/O1CN0151NnER1EtpRJvTvrt_!!4611686018427383770-53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01wv7A7S1EtpRMKZuKy_!!4611686018427383770-53-fleamarket.heic_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=919687558085"
    },
    {
      id: "gym-junxia", categoria: "gimnasio",
      titulo: "Junxia — Entrenador multifunción casi nuevo",
      titulo_zh: "军霞 多功能综合训练器 家用健身神器 龙门架 史密斯机 卧推",
      tienda: "Goofish", precio_cny: 1470, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Torre + Smith + press · marca conocida · casi nueva",
      material: "Acero", color: "No publicado", condicion: "Casi nueva",
      funciones: ["Torre de poleas (龙门架)", "Máquina Smith (史密斯机)", "Press de banca (卧推)"],
      resumen: "Marca reconocida del mercado chino de gimnasio, de uso particular. Marca usada suele rendir más que genérico nuevo.",
      descripcion: "军霞 es de las marcas reconocidas en el mercado chino de equipo de gimnasio. Esta unidad es casi nueva y de uso particular. En esta categoría, comprar marca conocida usada suele dar mejor construcción por el mismo dinero que un genérico nuevo — es el mismo razonamiento que aplica a herramienta o a bicicletas.",
      verificacion: ["Marca 军霞 reconocida en el mercado chino", "Estado: casi nueva, de uso particular", "Declara 3 estaciones"],
      reservas: ["No publica especificaciones estructurales", "No publica peso ni dimensiones", "Sin historial del vendedor visible"],
      vendedor: { nombre: "Particular", ciudad: "China", ventas: 0, reputacion: "No publicada" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i1/6000000003044/TB2L1QNb4wlyKJjSZFNXXcOlpXa_!!0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=1080030735517"
    },
    {
      id: "gym-3en1-morado", categoria: "gimnasio",
      titulo: "Rack tres en uno negro y morado, sin estrenar",
      titulo_zh: "三合一综合训练架 磨砂黑紫配色 商用级碳钢 加厚管材",
      tienda: "Goofish", precio_cny: 1500, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Rack 3 en 1 · carbono comercial · tubo reforzado · nuevo sin usar",
      material: "Acero al carbono de grado comercial, tubo reforzado", color: "Negro mate con morado", condicion: "Nuevo sin estrenar",
      funciones: ["Rack de sentadilla (深蹲架)", "Máquina Smith (史密斯架)", "Estación de cruces (小飞鸟)"],
      resumen: "Nuevo sin estrenar, con recorridos descritos como fluidos y acabado mate.",
      descripcion: "Carbono de grado comercial con tubo reforzado y acabado negro mate con morado. Nuevo sin usar. El vendedor describe los recorridos como fluidos, aunque sin publicar el tipo de polea ni si lleva rodamiento — que es de dónde viene esa sensación.",
      verificacion: ["Declara carbono de grado comercial y tubo reforzado", "Estado: nuevo sin estrenar", "3 interesados"],
      reservas: ["No publica espesor exacto ni carga", "No publica tipo de polea ni si tiene rodamiento", "No publica peso"],
      vendedor: { nombre: "Vendedor de 山东", ciudad: "山东", ventas: 0, reputacion: "No publicada" },
      imagenes: [],
      url: "https://www.goofish.com/item?id=1039140483739"
    },
    {
      id: "gym-yl-yulong", categoria: "gimnasio",
      titulo: "YL Yulong — Estación comercial con los 4 accesorios",
      titulo_zh: "全新商用小飞鸟、单边飞鸟、高位下拉机 YL/豫龙",
      tienda: "Goofish", precio_cny: 1549, peso_txt: "130 kg", peso_nota: "peso neto", sb: "na", carga_pesada: true,
      spec: "Estación de poleas · 4 funciones · 130 kg · tubo 50×100 mm pared 2.0 mm",
      material: "Acero, tubo principal 50×100 mm, pared 2.0 mm", color: "Personalizable", condicion: "Nuevo",
      funciones: ["Polea alta (高拉)", "Polea baja (低拉)", "Dominadas (引体向上)", "Apertura de pecho (飞鸟夹胸)"],
      resumen: "El ÚNICO que nombra sus accesorios uno por uno: barra larga, barra corta, agarres y cuerda de tríceps.",
      descripcion: "Es el único anuncio de todo el catálogo que lista sus accesorios por nombre: barra larga de jalón, barra corta, agarres de cruces y cuerda de tríceps — exactamente los cuatro que buscabas desde el primer kit. También es de los pocos que publica espesor de pared. El contrapeso es de 70 kg de acero macizo, no cemento. Ojo con el flete: el precio es de fábrica y el envío dentro de China va aparte, aunque la ficha muestre 包邮.",
      verificacion: ["Lista sus accesorios por nombre: barra larga, barra corta, agarres y cuerda de tríceps", "Publica peso neto de 130 kg", "Publica tubo de 50×100 mm con pared de 2.0 mm", "Publica dimensiones 80×82×230 cm", "Contrapeso de 70 kg de acero macizo (精钢)", "Vendedor con 7 años, 2.582 ventas y 98% positivas", "Garantía 描述不符包邮退"],
      reservas: ["El precio es de fábrica: el flete dentro de China se cobra aparte según provincia", "La pared de 2.0 mm es doméstica, no comercial como el REP de 3 mm", "Los 130 kg son netos, no el bruto embalado"],
      vendedor: { nombre: "老铁健身器材", ciudad: "深圳", ventas: 2582, reputacion: "98% positivas · 7 años" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i4/O1CN018Wbdnq1wLmri0tDeW_!!53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01zgnVPL1wLmrg3aU1z_!!53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01jb8MFK1wLmrmHUjbk_!!53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01tgkU4H1wLmrkMP1Ge_!!53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01NU0BOP1wLmrc2XczM_!!53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01BILFmj1wLmrg3aU20_!!53-fleamarket.heic_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=706710842091"
    },
    {
      id: "gym-smith-3en1-1666", categoria: "gimnasio",
      titulo: "Smith tres en uno con cruces, liquidación por mudanza",
      titulo_zh: "史密斯三合一综合训练架 小飞鸟 开放式深蹲架 可定制",
      tienda: "Goofish", precio_cny: 1666, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Rack abierto 3 en 1 · personalizable en medidas · 76 interesados",
      material: "Acero", color: "No publicado", condicion: "Nuevo",
      funciones: ["Rack de sentadilla (深蹲架)", "Máquina Smith (史密斯)", "Estación de cruces (小飞鸟)"],
      funciones_origen: "三合一 estándar",
      resumen: "Rack abierto personalizable en medidas y paso de agujeros. El vendedor lo describe como venta a pérdida.",
      descripcion: "Liquidación por mudanza de nave industrial. Lo interesante no es el descuento sino que el rack es abierto y personalizable en medidas y paso de agujeros — si tenés una altura de techo justa, eso resuelve un problema que el precio no resuelve.",
      verificacion: ["Rack abierto (开放式深蹲架) personalizable en medidas y paso de agujeros", "76 personas marcaron interés", "Estado: nuevo"],
      reservas: ["«Venta a pérdida» es argumento de venta, no verificable", "No publica espesor, carga ni peso"],
      vendedor: { nombre: "Vendedor de 山东", ciudad: "山东", ventas: 0, reputacion: "No publicada" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01xJCyxy1T2RYSfrhcg_!!4611686018427385524-0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01c4hMoK1T2RYRj34mq_!!4611686018427385524-0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=988283208260"
    },
    {
      id: "gym-inox", categoria: "gimnasio",
      titulo: "Tres en uno en ACERO INOXIDABLE",
      titulo_zh: "不锈钢三合一综合训练架 史密斯飞鸟深蹲架卧推架小飞鸟",
      tienda: "Goofish", precio_cny: 1850, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Rack 3 en 1 · 5 funciones · acero INOXIDABLE, no carbono pintado",
      material: "Acero inoxidable", color: "Acabado inox", condicion: "Liquidación, nuevo",
      funciones: ["Máquina Smith (史密斯)", "Cruces de polea (飞鸟)", "Sentadilla (深蹲架)", "Press de banca (卧推架)", "Estación de cruces baja (小飞鸟)"],
      resumen: "El único en inoxidable de todo el catálogo. Para El Salvador, con humedad, eso no es detalle menor.",
      descripcion: "El único del catálogo en acero inoxidable en vez de carbono pintado, y el vendedor lo posiciona precisamente como ventaja frente al resto del mercado. Es relevante si el equipo va a un espacio húmedo o semiabierto: el carbono pintado se oxida donde se raya, y en un rack se raya siempre — con los discos, con la barra, con los ganchos. En el trópico eso se paga.",
      verificacion: ["Material declarado: acero inoxidable", "Enumera 5 estaciones en el título", "Vendido como liquidación"],
      reservas: ["No publica espesor ni carga", "«Inoxidable» sin serie (304, 201) puede ser inox de baja calidad", "No publica peso"],
      vendedor: { nombre: "Vendedor de 湖南", ciudad: "湖南", ventas: 0, reputacion: "No publicada" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01YiZVGY1RuMqF0jZS5_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01iuvv5z1RuMq6Ll3Z6_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01P1o4Bg1RuMqDIZIAM_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01NzEdMN1RuMqDIX97U_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN015pSecz1RuMqHDTWHd_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01BIcBZa1vXOxaxmRZx_!!0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=826332742014"
    },
    {
      id: "gym-jinsmith", categoria: "gimnasio",
      titulo: "Jin Smith — Entrenador casi nuevo, con discos aparte",
      titulo_zh: "金史密斯 史密斯综合训练器 配重铁片 片单可出",
      tienda: "Goofish", precio_cny: 1888, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Máquina Smith de marca · casi nueva · 217 interesados",
      material: "Acero", color: "No publicado", condicion: "Casi nueva",
      funciones: [],
      funciones_origen: "sin enumerar",
      resumen: "La usada de mayor demanda del catálogo: 217 interesados. Movimiento descrito como suave.",
      descripcion: "Máquina Smith de marca 金史密斯, casi nueva y con movimiento descrito como suave. Los discos de contrapeso se pueden comprar por separado. Es la usada con más demanda de todo el catálogo, lo que en Goofish suele significar que el precio está por debajo de mercado — o que las fotos están bien hechas.",
      verificacion: ["Marca 金史密斯", "Estado: casi nueva", "217 personas marcaron interés", "Vendedor marcado 信用极好"],
      reservas: ["El anuncio no enumera ninguna función", "No publica especificaciones ni peso", "Los discos se cotizan aparte"],
      vendedor: { nombre: "一只会后空翻的", ciudad: "China", ventas: 0, reputacion: "信用极好" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01JX9AbF2JmZGUA0LVx_!!53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01jUFMor1f96lFk6QdQ~livephoto~_!!4611686018427381355-53-fleamarket.heic_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=1071563427618"
    },
    {
      id: "gym-fabrica-2180", categoria: "gimnasio",
      titulo: "Cuatro estaciones de fábrica, acero de alta resistencia",
      titulo_zh: "小飞鸟龙门架深蹲架史密斯综合训练架 高强度钢 加厚管材 精钢配重",
      tienda: "Goofish", precio_cny: 2180, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "4 estaciones · acero alta resistencia · tratamiento anticorrosión · contrapeso de acero",
      material: "Acero de alta resistencia, tubo reforzado, tratamiento anticorrosión", color: "No publicado", condicion: "Nuevo",
      funciones: ["Estación de cruces (小飞鸟)", "Torre de poleas (龙门架)", "Rack de sentadilla (深蹲架)", "Máquina Smith (史密斯)"],
      resumen: "Despacho directo de fábrica, con tratamiento anticorrosión en superficie y contrapeso de acero macizo.",
      descripcion: "Acero de alta resistencia con tubo reforzado y tratamiento anticorrosión en superficie, más contrapeso de acero macizo en vez de cemento. El tratamiento anticorrosión es de los pocos detalles de acabado que alguien menciona en esta categoría, y para clima húmedo cuenta.",
      verificacion: ["Declara acero de alta resistencia y tubo reforzado", "Declara tratamiento anticorrosión en superficie", "Contrapeso de acero macizo (精钢)", "Despacho directo de fábrica"],
      reservas: ["No publica espesor exacto ni carga", "«Alta resistencia» sin designación de acero es adjetivo", "No publica peso ni dimensiones"],
      vendedor: { nombre: "Fábrica de 山东", ciudad: "山东", ventas: 0, reputacion: "No publicada" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01E0gxHJ26AT27ub6WN_!!0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=1041970691875"
    },
    {
      id: "gym-smith-inclinado", categoria: "gimnasio",
      titulo: "Smith INCLINADO con estación de cruces",
      titulo_zh: "史密斯综合训练架 倾斜款史密斯 小飞鸟 源头工厂",
      tienda: "Goofish", precio_cny: 2200, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Smith de riel inclinado + cruces · fábrica de origen · quedan 3",
      material: "Acero", color: "No publicado", condicion: "Nuevo",
      funciones: ["Máquina Smith inclinada (倾斜款史密斯)", "Estación de cruces (小飞鸟)"],
      resumen: "El riel inclinado sigue la trayectoria natural de la sentadilla y el press. Es diferencia de biomecánica, no de marketing.",
      descripcion: "Versión de Smith inclinado. Esto sí es una diferencia real y no un adjetivo: el riel vertical obliga a que la barra suba en línea recta, que no es como se mueve tu cuerpo en una sentadilla o un press. El riel inclinado sigue mejor esa trayectoria. Fábrica de origen, quedan tres unidades.",
      verificacion: ["Riel de Smith inclinado, no vertical", "Fábrica de origen (源头工厂)", "78 personas marcaron interés", "Quedan 3 unidades"],
      reservas: ["Solo 2 funciones: no trae rack de sentadilla independiente", "No publica ángulo de inclinación", "No publica espesor, carga ni peso"],
      vendedor: { nombre: "源头工厂", ciudad: "China", ventas: 0, reputacion: "信用极好" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01BYh0Gr25ghcaC8vyX_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/O1CN014uOC9l1pNt8regK6g_!!0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=1043785790897"
    },
    {
      id: "gym-fabrica-jiangsu", categoria: "gimnasio",
      titulo: "Rack comercial de nave propia, tamaño para casa",
      titulo_zh: "综合训练架龙门架健身器材商用史密斯家用多功能深蹲卧推架 自家厂房直产",
      tienda: "Goofish", precio_cny: 2200, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "5 funciones · producción propia sin intermediarios · tamaño mediano",
      material: "Acero", color: "No publicado", condicion: "Nuevo",
      funciones: ["Sentadilla (深蹲)", "Press de banca (卧推)", "Dominadas (引体向上)", "Torre de poleas (龙门架)", "Máquina Smith (史密斯)"],
      resumen: "El vendedor recalca que el tamaño mediano es el que de verdad cabe en casa. Casi nadie menciona eso.",
      descripcion: "Producción propia sin intermediarios. Lo que lo distingue no es el precio sino que el vendedor recalca que el tamaño mediano es el que funciona en casa — no todos los racks comerciales caben en una habitación de techo normal, y es un punto que prácticamente ningún otro anuncio del catálogo menciona.",
      verificacion: ["Producción en nave propia, sin intermediarios", "Declara 5 estaciones", "Dimensionado explícitamente para uso doméstico", "43 personas marcaron interés"],
      reservas: ["No publica las medidas concretas de ese «tamaño mediano»", "No publica espesor, carga ni peso"],
      vendedor: { nombre: "Fábrica de 江苏", ciudad: "江苏", ventas: 0, reputacion: "No publicada" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01xXBV8V1RfFviBWLsb_!!4611686018427387498-53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01XBxG4Y1RfFvi24jX8_!!4611686018427387498-53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01G5Iup01RfFvdVwQAS_!!4611686018427387498-53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01lPBrch1RfFvhr6x9w_!!4611686018427387498-53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01JjiqtY1RfFviBVY1H_!!4611686018427387498-53-fleamarket.heic_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01TzI5yP1RfFviF55U1_!!4611686018427387498-53-fleamarket.heic_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=1056147805392"
    },
    {
      id: "gym-head", categoria: "gimnasio",
      titulo: "HEAD — Torre de poleas doméstica",
      titulo_zh: "海德 HEAD 龙门架 家用健身房",
      tienda: "Goofish", precio_cny: 2480, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Torre de poleas · marca deportiva internacional",
      material: "No publicado", color: "No publicado", condicion: "No especificado",
      funciones: [],
      funciones_origen: "sin enumerar",
      resumen: "Uno de los pocos nombres reconocibles fuera de China, pero la ficha no detalla nada.",
      descripcion: "Torre de poleas de HEAD, marca deportiva internacional. Es de los pocos nombres reconocibles fuera de China en este catálogo, lo que da cierta tranquilidad sobre el respaldo. Pero el anuncio no detalla funciones ni estructura, así que la marca es todo lo que estás comprando hasta que le pidas la ficha al vendedor.",
      verificacion: ["Marca 海德 / HEAD, deportiva internacional", "Uso doméstico declarado", "Vendedor marcado 信用极好"],
      reservas: ["No enumera funciones", "No publica ninguna especificación estructural", "No declara estado ni peso"],
      vendedor: { nombre: "专业健身器材", ciudad: "China", ventas: 0, reputacion: "信用极好" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01Uuy3jO1G2oN19Ez0v_!!0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=1081339598700"
    },
    {
      id: "gym-smith-custom", categoria: "gimnasio",
      titulo: "Smith tres en uno personalizable, últimas unidades",
      titulo_zh: "史密斯综合训练架 小飞鸟 三合一 史密斯二合一 开放式深蹲架 可定制",
      tienda: "Goofish", precio_cny: 2499, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Rack abierto 3 en 1 · personalizable · últimas unidades por mudanza",
      material: "Acero", color: "No publicado", condicion: "Nuevo",
      funciones: ["Rack de sentadilla (深蹲架)", "Máquina Smith (史密斯)", "Estación de cruces (小飞鸟)"],
      funciones_origen: "三合一 estándar",
      resumen: "Rack abierto personalizable en medidas. Últimas unidades por mudanza de nave.",
      descripcion: "Últimas unidades por mudanza de nave industrial. Rack abierto que se puede personalizar en medidas. El vendedor lo describe como venta por debajo de costo, lo que en Goofish aparece en la mitad de los anuncios y conviene tomar como estilo, no como dato.",
      verificacion: ["Rack abierto personalizable en medidas", "9 personas marcaron interés", "Estado: nuevo"],
      reservas: ["«Por debajo de costo» no es verificable", "No publica espesor, carga, dimensiones ni peso"],
      vendedor: { nombre: "Vendedor de 上海", ciudad: "上海", ventas: 0, reputacion: "No publicada" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i4/6000000008032/TB2ix2WrJhvOuFjSZFBXXcZgFXa_!!0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=1014790549535"
    },
    {
      id: "gym-morado-serie", categoria: "gimnasio",
      titulo: "Rack morado equipado de serie",
      titulo_zh: "多功能综合训练架 标配J形挂钩 深蹲保护杠 引体横梁 飞鸟配重 底板 滑轮",
      tienda: "Goofish", precio_cny: 2500, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Rack multifunción · equipamiento de serie enumerado · tubo reforzado",
      material: "Acero, tubo reforzado", color: "Morado", condicion: "Nuevo",
      funciones: ["Sentadilla con barra de seguridad (深蹲保护杠)", "Dominadas (引体横梁)", "Cruces de polea (飞鸟配重)"],
      resumen: "De los pocos que enumera lo que trae de serie en vez de venderlo aparte.",
      descripcion: "Enumera su equipamiento de serie: ganchos en J, barra de seguridad para sentadilla, travesaño de dominadas, contrapeso de cruces, plataforma de piso y juego de poleas. En una categoría donde los dos mejores anuncios publican el precio del marco pelado, que este liste seis piezas incluidas cambia la comparación real de precio.",
      verificacion: ["Enumera 6 piezas de serie: ganchos en J, barra de seguridad, travesaño de dominadas, contrapeso de cruces, plataforma y poleas", "Declara tubo reforzado", "Apto comercial y doméstico", "11 personas marcaron interés"],
      reservas: ["Enumera piezas, no funciones: las 3 funciones son mi lectura de esas piezas", "No publica espesor exacto ni carga", "No publica peso"],
      vendedor: { nombre: "Vendedor de 山东", ciudad: "山东", ventas: 0, reputacion: "No publicada" },
      imagenes: [],
      url: "https://www.goofish.com/item?id=1054123048478"
    },
    {
      id: "gym-garvee", categoria: "gimnasio",
      titulo: "Garvee Power Cage 2000LB — doble polea independiente",
      titulo_zh: "",
      tienda: "Amazon", moneda_origen: "USD", precio_origen: 429.99, precio_cny: 2884,
      peso_txt: "54.4 kg", peso_nota: "120 lb", sb: "na", carga_pesada: true,
      spec: "Medio rack · 10 funciones · 54.4 kg · doble polea 1:1 · 204 kg de carga en polea",
      material: "Acero, columna 2\" × 2\" (≈50 × 50 mm)", color: "Naranja", condicion: "Nuevo",
      funciones: ["Rack de sentadilla", "Cruces de polea", "Jalón al pecho", "Fondos", "Dominadas", "Remo bajo", "Landmine", "Ancla de cuerda de batalla", "Entrenador de core", "Estación de pierna"],
      resumen: "El mejor ajuste a lo que buscás: 10 funciones, 54 kg y devolución de 30 días. Sin barra Smith.",
      descripcion: "Medio rack con doble polea independiente de ratio 1:1 — el peso que cargás es el que trabajás, y permite series combinadas en ambos lados a la vez. Ocupa un tercio menos de espacio que una jaula completa. No trae barra Smith, y ese es todo el ahorro frente al GAOMON: $370 y 98 kg menos de flete. A 54.4 kg es el equipo más liviano con 10 funciones de todo el catálogo, que en flete marítimo a El Salvador es la diferencia entre unos $200 y unos $600.",
      verificacion: ["Publica capacidad de polea: 450 lb / 204 kg — dato que ningún vendedor chino da", "Publica carga del rack: 2000 lb / 907 kg", "Publica columna de 2\" × 2\" y 20 alturas cada 8 cm, numeradas", "Publica dimensiones 149 × 118 × 211 cm y peso 54.4 kg", "Enumera las 10 funciones una por una", "Devolución de 30 días de Amazon"],
      reservas: ["4.8★ pero sobre solo 6 reseñas: no es muestra suficiente para equipo que sostiene peso sobre tu cuerpo", "No trae barra Smith", "Columna de 50 × 50 mm: es grado doméstico, no comercial", "El peso de 54.4 kg es del artículo, no el bruto embalado"],
      vendedor: { nombre: "Garvee", ciudad: "Amazon US", ventas: 0, reputacion: "4.8★ sobre 6 reseñas · 30 días de devolución" },
      imagenes: [
        "https://m.media-amazon.com/images/I/41Htj94nXdL.jpg",
        "https://m.media-amazon.com/images/I/51I3IfhaNSL.jpg",
        "https://m.media-amazon.com/images/I/51jZSg55NsL.jpg",
        "https://m.media-amazon.com/images/I/51jW7Srq1BL.jpg",
        "https://m.media-amazon.com/images/I/51GM+rcz8vL.jpg",
        "https://m.media-amazon.com/images/I/51ZQQejfFxL.jpg"
      ],
      url: "https://www.amazon.com/dp/B0G6DJL255/"
    },
    {
      id: "gym-4en1-2980", categoria: "gimnasio",
      titulo: "Torre + cruces + Smith + sentadilla, precio firme",
      titulo_zh: "龙门架 小飞鸟龙门架综合训练架健身史密斯深蹲 实价",
      tienda: "Goofish", precio_cny: 2980, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "4 estaciones · precio a firme sin regateo",
      material: "Acero", color: "No publicado", condicion: "No especificado",
      funciones: ["Torre de poleas (龙门架)", "Estación de cruces (小飞鸟)", "Máquina Smith (史密斯)", "Sentadilla (深蹲)"],
      resumen: "Conjunto de cuatro estaciones vendido a precio firme (实价), sin regateo.",
      descripcion: "Conjunto de torre de poleas, estación de cruces, Smith y rack de sentadilla, vendido a precio firme. En Goofish el regateo es la norma, así que un 实价 suele significar que el margen ya está ajustado.",
      verificacion: ["Precio a firme (实价)", "Declara 4 estaciones", "37 personas marcaron interés", "Vendedor marcado 信用极好"],
      reservas: ["No publica especificaciones estructurales", "No declara estado ni peso"],
      vendedor: { nombre: "西安电视安装丿健身器械", ciudad: "西安", ventas: 0, reputacion: "信用极好" },
      imagenes: [],
      url: "https://www.goofish.com/item?id=1043023533061"
    },
    {
      id: "gym-xuebao-f121", categoria: "gimnasio",
      titulo: "Xuebao F121 — Reelifefitness, con torre de pesas integrada",
      titulo_zh: "占地小颜值高家用小飞鸟多功能单边龙门架底座壁挂式靠贴墙体健身综合训练器材 雪豹F121",
      tienda: "Goofish", precio_cny: 3280, peso_txt: "No publicado", sb: "na", carga_pesada: true, envio: "incluido",
      spec: "Estación de muro o con base · torre de pesas 50/70/100 kg · 6 variantes con precio publicado",
      material: "Acero", color: "No publicado", condicion: "Nuevo",
      funciones: [],
      funciones_origen: "sin enumerar",
      variantes_tipo: "sku",
      variantes_campo: "规格 (especificación)",
      variantes: [
        { nombre: "Pared, contrapeso 50 kg", precio_cny: 3280, base: true },
        { nombre: "Base, contrapeso 50 kg", precio_cny: 3480 },
        { nombre: "Pared, contrapeso 70 kg", precio_cny: 3780 },
        { nombre: "Base, contrapeso 70 kg", precio_cny: 4080 },
        { nombre: "Pared, contrapeso 100 kg", precio_cny: 4280 },
        { nombre: "Base, contrapeso 100 kg", precio_cny: 4480 }
      ],
      resumen: "El único con torre de pesas integrada Y precios de variante publicados. Vendedor con 100% de valoraciones.",
      descripcion: "Estación de cruces de una sola columna, nueva, con envío incluido y del único vendedor con 100% de valoraciones de todo el catálogo. La versión 壁挂 se ancla a la pared; la 底座 lleva base propia y cuesta ¥200 más. El banco de entrenamiento se vende aparte por ¥399. Es el salto a categoría de gimnasio, con el precio y el peso que eso implica — y con la torre de acero que casi ningún otro trae de fábrica.",
      verificacion: ["Único del catálogo con las 6 variantes y sus precios publicados uno por uno", "Marca Reelifefitness / 锐飞, modelo 雪豹 F121", "Torre de pesas integrada de 50, 70 o 100 kg", "Envío incluido dentro de China", "Vendedor con 100% de valoraciones positivas y 213 ventas", "179 personas marcaron interés"],
      reservas: ["El anuncio no enumera ninguna función", "El banco se vende aparte por ¥399 (US$ 59)", "No publica espesor de tubo, carga ni peso", "Con torre de 100 kg, el peso de embarque se dispara"],
      vendedor: { nombre: "应有尽有", ciudad: "济南", ventas: 213, reputacion: "100% positivas · 4 años" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i2/O1CN017RJZIW26Q2qqVvOx5_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01nDdtdy26Q2qvAATue_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN014CswtR1KtiVixWsHh_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01zZV8gv29hOPmfn0Mh_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01WXKfoy1T3Lj0ywXQr_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01pCDj7A1E6MBerv910_!!0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=810515183885"
    },
    {
      id: "gym-3en1-liquidacion", categoria: "gimnasio",
      titulo: "Tres en uno, lote por incumplimiento de cliente",
      titulo_zh: "三合一综合训练架最后清仓 客户违约 亏本出",
      tienda: "Goofish", precio_cny: 3398, peso_txt: "No publicado", sb: "na", carga_pesada: true, envio: "incluido",
      spec: "Rack 3 en 1 · lote de liquidación · envío incluido",
      material: "Acero", color: "No publicado", condicion: "Nuevo",
      funciones: ["Rack de sentadilla (深蹲架)", "Máquina Smith (史密斯)", "Estación de cruces (小飞鸟)"],
      funciones_origen: "三合一 estándar",
      resumen: "Lote fabricado de más porque un cliente incumplió el pedido. Precio firme con envío incluido.",
      descripcion: "Lote fabricado de más porque un cliente incumplió el pedido; se venden a pérdida según el anuncio. Precio firme con envío incluido dentro de China. La historia es plausible y explica por qué hay stock parado, pero no cambia que la ficha no publique nada estructural.",
      verificacion: ["Envío incluido dentro de China", "Precio a firme", "Estado: nuevo"],
      reservas: ["La historia del incumplimiento no es verificable", "Las 3 funciones son decodificación del formato 三合一", "No publica espesor, carga ni peso"],
      vendedor: { nombre: "Vendedor de 广西", ciudad: "广西", ventas: 0, reputacion: "No publicada" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01euf0ui1RuMo93Mi9T_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01mid84m1RuMo92qUHP_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01QVEjPq1RuMoBaaJEu_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01BpOFib1RuMoBaa6la_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01YQTpuU1RuMo6cqTlK_!!0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01YYIk1J1RuMoBaYV0D_!!0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=785280685804"
    },
    {
      id: "gym-smith-upgrade", categoria: "gimnasio",
      titulo: "Cruces + Smith versión mejorada, tres en uno",
      titulo_zh: "品质小飞鸟 升级款史密斯三合一 龙门架综合训练架",
      tienda: "Goofish", precio_cny: 3440, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Rack 3 en 1 · Smith versión mejorada",
      material: "Acero", color: "No publicado", condicion: "Nuevo",
      funciones: ["Estación de cruces (小飞鸟)", "Máquina Smith mejorada (升级款史密斯)", "Torre de poleas (龙门架)"],
      resumen: "Versión mejorada del Smith combinada con cruces y torre. Vendido como conjunto de cuerpo completo.",
      descripcion: "Versión mejorada de la máquina Smith combinada con estación de cruces y torre de poleas, vendida como conjunto para entrenar todo el cuerpo. El anuncio no dice en qué consiste la mejora, que es justo lo que habría que preguntar antes de pagar la diferencia sobre los de ¥2.500.",
      verificacion: ["Declara Smith en versión mejorada", "Vendedor marcado 信用极好", "3 estaciones declaradas"],
      reservas: ["No explica en qué consiste la «mejora» del Smith", "No publica espesor, carga ni peso"],
      vendedor: { nombre: "菲菲健身小铺", ciudad: "China", ventas: 0, reputacion: "信用极好" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01LdPa5n1lYC3dx6Ucf_!!4611686018427384734-0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01jatnxL1lYC3dx8Acc_!!4611686018427384734-0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01VKP1lg1lYC3fHyNnZ_!!4611686018427384734-0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01J7ZvE61lYC3ehJL3B_!!4611686018427384734-0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01HVKGSf1lYC3eDCExZ_!!4611686018427384734-0-fleamarket.jpg_Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01179Xjt1lYC3d6HbAX_!!4611686018427384734-0-fleamarket.jpg_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=931811434279"
    },
    {
      id: "gym-gaomon", categoria: "gimnasio",
      titulo: "GAOMON 2400 Lbs Power Cage — jaula completa con Smith",
      titulo_zh: "",
      tienda: "Amazon", moneda_origen: "USD", precio_origen: 799.99, precio_cny: 5365,
      peso_txt: "152.6 kg", peso_nota: "336.4 lb", sb: "na", carga_pesada: true,
      spec: "Jaula completa · 4 estaciones · barra Smith incluida · 152.6 kg · 1089 kg de carga",
      material: "Acero, sección de columna no publicada", color: "Rojo y negro", condicion: "Nuevo",
      funciones: ["Jaula de sentadilla (power cage)", "Barra Smith", "Cruces de polea", "Jalón al pecho"],
      resumen: "El equipo exacto de tu foto. Trae barra Smith, que es toda la diferencia de $370 frente al Garvee.",
      descripcion: "Jaula completa con barra Smith incluida más sistema de cruces y jalón alto. Vendido desde bodega en Estados Unidos por un vendedor chino, lo que significa que el flete marítimo China–Miami ya está pagado dentro del precio. No publica sección de columna ni capacidad de polea, y todavía no tiene ninguna reseña — dos huecos que pesan en un equipo que sostiene carga sobre tu cuerpo. A 152.6 kg, casi triplica el peso del Garvee.",
      verificacion: ["Publica carga del rack: 2400 lb / 1089 kg", "Publica espacio interior de 67\" / 170 cm", "Publica peso: 336.4 lb / 152.6 kg", "Barra Smith incluida, confirmada en el título y las fotos", "Devolución de 30 días de Amazon"],
      reservas: ["Cero reseñas: nadie ha reportado cómo llega ni cómo se arma", "No publica sección de columna ni espesor", "No publica capacidad de polea, que es el límite real de entrenamiento", "152.6 kg: el flete marítimo se dispara frente al Garvee"],
      vendedor: { nombre: "QitongxinX", ciudad: "Bodega EE. UU.", ventas: 0, reputacion: "Sin reseñas · 30 días de devolución" },
      imagenes: [
        "https://m.media-amazon.com/images/I/51AmMc2w3aL.jpg",
        "https://m.media-amazon.com/images/I/51Xe8a-RKoL.jpg",
        "https://m.media-amazon.com/images/I/519murmvaJL.jpg",
        "https://m.media-amazon.com/images/I/519INQU1YAL.jpg",
        "https://m.media-amazon.com/images/I/51lNtOXMPgL.jpg",
        "https://m.media-amazon.com/images/I/51KNS4vzVSL.jpg"
      ],
      url: "https://www.amazon.com/GAOMON-Crossover-Strength-Training-Equipment/dp/B0H6ZG34D5/"
    },
    {
      id: "gym-zerog", categoria: "gimnasio",
      titulo: "Smith de gravedad cero, tres en uno — tope de gama",
      titulo_zh: "终极飞鸟 零重力史密斯架 三合一综合训练",
      tienda: "Goofish", precio_cny: 5500, peso_txt: "No publicado", sb: "na", carga_pesada: true,
      spec: "Rack 3 en 1 · Smith de gravedad cero · lo más caro del catálogo",
      material: "Acero", color: "No publicado", condicion: "No especificado",
      funciones: ["Máquina Smith de gravedad cero (零重力史密斯)", "Estación de cruces (终极飞鸟)", "Torre de poleas (龙门架)"],
      resumen: "Lo más caro de la lista. Es el escalón donde ya compite con equipo de gimnasio comercial de verdad.",
      descripcion: "Smith de «gravedad cero» con estación de cruces. Es el escalón donde el equipo ya compite con máquinas de gimnasio comercial — y donde, para una casa, deja de tener sentido económico: a este precio más el flete marítimo, estás pagando lo que cuesta una membresía de varios años.",
      verificacion: ["Vendedor marcado 信用极好", "Declara Smith de gravedad cero"],
      reservas: ["No explica qué significa «gravedad cero» en su implementación", "No publica ninguna especificación estructural", "No declara estado ni peso", "A este precio más flete, conviene comparar contra una membresía"],
      vendedor: { nombre: "不会的美工", ciudad: "China", ventas: 0, reputacion: "信用极好" },
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01zIyjm72LISiC0y0dO~livephoto~_!!4611686018427382021-53-fleamarket.heic_Q90.jpg_.webp"
      ],
      url: "https://www.goofish.com/item?id=1068050646149"
    }
  ],

  descartados: []
};
