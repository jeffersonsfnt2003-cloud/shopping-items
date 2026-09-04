/* Catálogo de compras — fuente única: goofish.com
   index.html es solo la vista. Todo dato vive acá.
   Regla de oro de la categoría estuches: gana el VOLUMEN INTERIOR más chico
   que todavía admita 4 mandos + adaptador. */

window.CATALOGO = {
  meta: {
    tasa_cny_usd: 0.1489,
    tasa_fecha: "2026-09-04",
    tasa_fuente: "https://wise.com/us/currency-converter/cny-to-usd-rate",
    fuente_unica: "https://www.goofish.com/",
    barrido: { consultas: 18, items_vistos: 487, con_medidas: 173, que_encajan: 14, verificados: 4 },
    referencias: {
      mando_gamecube: { nombre: "Mando Nintendo GameCube (DOL-003)", largo:14.0, ancho:10.0, alto:6.5, peso_g:200,
        fuente: "https://www.dimensions.com/element/gamecube-controller" },
      adaptador: { nombre: "Adaptador GameCube → Switch", largo:12.0, ancho:6.0, alto:3.0,
        fuente: "medida provista por el dueño" }
    }
  },

  categorias: [
    { id:"estuche-gamecube", nombre:"Estuches", tab:"Estuches",
      objetivo:"El estuche MÁS COMPACTO que admita 4 mandos de GameCube (14×10×6.5 cm c/u) y el adaptador (12×6×3). Interior libre, sin bandeja moldeada. Sin cables. Mínimo teórico: ~5.000 cm³.",
      requisito_minimo:"Volumen interior ≤ 6.500 cm³ y alguna disposición válida de los 4 mandos + adaptador." },
    { id:"base-xbox", nombre:"Bases y coolers", tab:"Bases y coolers",
      objetivo:"Base vertical con ventilación y carga para Xbox Series X, compatible con 2 mandos de Xbox One.",
      requisito_minimo:"Pendiente: modelo exacto de los mandos (1537 / 1697 / 1708)." }
  ],

  items: [
    {
      id:"1025077765759", categoria:"estuche-gamecube", estado:"aprobado",
      titulo:"Bestico — el más compacto",
      titulo_zh:"特价出Bestico数码整理收纳包，便携小号，海绵硬壳，防水防摔",
      url:"https://www.goofish.com/item?id=1025077765759",
      precio_cny:34.90, envio:"incluido",
      material:"Cáscara dura con esponja, tela balística", color:"Negro", condicion:"Nuevo (declarado; casi sin marcas)",
      interior:[28,18,11],
      interior_detalle:"Rotulado por el vendedor sobre la foto 4: 28 / 18 / base 6.5 + tapa 4.5. Precio original ¥108.",
      vendedor:{ nombre:"五金工具箱包清仓特价", ciudad:"Wuxi", antiguedad:"11 años", ventas:3277, reputacion:"93%" },
      encaje:{ layout:"edge4" },
      resumen:"El más chico que existe para esto: 5.544 cm³. Los mandos van de canto, como libros.",
      descripcion:"El volumen interior más chico de todo el barrido y un 39% menor que tu referencia. Los 4 mandos no entran acostados — entran de canto, apoyados sobre su borde como libros en un estante: dos filas de dos, ocupando 28 × 13 cm de los 28 × 18 disponibles. El adaptador entra parado en la franja de 5 cm que sobra. Interior completamente liso, sin molde ni espuma, con una banda elástica y un bolsillo de malla en la tapa.",
      verificacion:[
        "Interior liso confirmado en las fotos 5 y 7: concha negra sin molde, sin espuma precortada, solo una banda elástica y una malla en la tapa.",
        "La foto 4 trae las cotas rotuladas sobre la imagen: 28 de largo, 18 de fondo, base 6.5 y tapa 4.5.",
        "Fotos 2, 3, 6, 9 y 10: el vendedor mide con regla y compara contra una botella, y repite el interior 28×18×11 en cuatro fotos distintas.",
        "Exterior en tela balística negra, asa reforzada, cierre perimetral. Sin desgaste visible."
      ],
      reservas:[
        "AJUSTE AL MILÍMETRO EN EL LARGO: dos mandos de canto suman exactamente 28.0 cm y el interior mide 28.0. No hay holgura en ese eje. Si las esquinas del estuche son redondeadas, van a entrar forzados.",
        "Los mandos quedan de canto, no acostados. Es menos cómodo de sacar y meter que una disposición plana.",
        "Reputación 93%, la más baja de los tres seleccionados, aunque con 11 años y 3.277 ventas.",
        "No acepta devoluciones."
      ],
      imagenes:[
        "https://img.alicdn.com/bao/uploaded/i4/273805928/O1CN01SeiW1u1tf50CLXIZi_!!4611686018427384424-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/273805928/O1CN01VMDTsx1tf50CtE46T_!!4611686018427384424-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/273805928/O1CN01ANmk8y1tf50CEv58y_!!4611686018427384424-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/273805928/O1CN010NrwhW1tf50D6HFRq_!!4611686018427384424-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/273805928/O1CN01q5oP281tf50CwezFB_!!4611686018427384424-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/273805928/O1CN01E7FzjW1tf50CdvNQv_!!4611686018427384424-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/273805928/O1CN01qa6iaq1tf50CZOUvV_!!4611686018427384424-53-xy_item.heic_220x10000Q90.jpg_.webp"
      ]
    },
    {
      id:"684313155412", categoria:"estuche-gamecube", estado:"aprobado",
      titulo:"AOVER SMART — la mejor compra",
      titulo_zh:"26包邮全新硬壳数码收纳包无人机防护盒有格子手撕海绵",
      url:"https://www.goofish.com/item?id=684313155412",
      precio_cny:26, envio:"incluido",
      material:"EVA rígido con espuma troquelada extraíble", color:"Negro", condicion:"Nuevo",
      interior:[31,22,9],
      interior_detalle:"Interior declarado por el vendedor en la descripción: 31×22×9 cm. Precio original ¥39.",
      vendedor:{ nombre:"蚂蚁它家", ciudad:"Jinhua", antiguedad:"8 años", ventas:17548, reputacion:"94%" },
      encaje:{ layout:"flat2x2" },
      resumen:"6.138 cm³ y holgura real en los tres ejes. Más barato que el chico y más fácil de usar.",
      descripcion:"Once por ciento más grande que el Bestico, pero es la compra que recomiendo. Los 4 mandos entran acostados en 2×2 y sobran 3 cm de largo, 2 de ancho y 2.5 de alto: se meten y se sacan sin pelear. El adaptador entra parado en la franja lateral. Trae un bloque de espuma de cubos troquelados que sale entero (foto 7) y deja la concha lisa — o podés arrancar los cubos y hacerle huecos con la forma exacta de tus mandos, que no es un molde de fábrica para otro aparato sino uno que definís vos. Además es ¥9 más barato.",
      verificacion:[
        "La foto 7 muestra el bloque de espuma levantado y saliendo entero: debajo queda la concha lisa, sin molde.",
        "La foto 5 es un primer plano de la espuma: cubos pre-troquelados, del tipo que se arranca a mano para hacer huecos a medida.",
        "Fotos 1, 3, 8 y 10: base libre y bolsillo de malla en la tapa.",
        "Fotos 2, 4, 6 y 9: exterior EVA negro, asa, marca AOVER SMART, con cinta métrica en cuadro."
      ],
      reservas:[
        "Los 9 cm de alto solo permiten UNA capa de mandos. No sirve si algún día querés meter más de cuatro.",
        "Está catalogado como estuche de dron DJI: el vendedor lo describe por ese uso, no por sus medidas libres.",
        "Reputación 94%. Vendedor grande (17.548 ventas) pero no impecable.",
        "Si sacás la espuma perdés la protección contra golpes; si la dejás y no la arrancás, no entran los mandos."
      ],
      imagenes:[
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01gB4h9i1tGLGlIqrjq_!!0-fleamarket.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01FrPTTp1tGLGtkBPh1_!!0-fleamarket.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01r8NfQQ1tGLGkWyiOW_!!0-fleamarket.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01YBSvB91tGLGhVUBlf_!!0-fleamarket.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01GQwuor1tGLGrfLYZC_!!0-fleamarket.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01KSIqzl1tGLGo4ACqp_!!0-fleamarket.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01yrfgNa1tGLGiGLdLJ_!!0-fleamarket.jpg_220x10000Q90.jpg_.webp"
      ]
    },
    {
      id:"1045671276496", categoria:"estuche-gamecube", estado:"aprobado",
      titulo:"Tu referencia",
      titulo_zh:"手提大号硬质工具包便携维修包仪器仪表防护包键盘收纳包",
      url:"https://www.goofish.com/item?id=1045671276496",
      precio_cny:25, envio:"incluido",
      material:"PU + EVA, con lámina de esponja extraíble", color:"Negro", condicion:"Nuevo",
      interior:[26.5,22.8,15],
      interior_detalle:"Interior declarado por el vendedor en la descripción.",
      vendedor:{ nombre:"包你心动", ciudad:"Dongguan", antiguedad:"1 año", ventas:629, reputacion:"99%" },
      encaje:{ layout:"stack2" },
      resumen:"9.063 cm³: el más grande de los tres. Sobrio y bien hecho, pero desperdicia casi la mitad.",
      descripcion:"El que trajiste vos. Cumple todas las reglas y está bien construido, pero es el más voluminoso de la lista: los 4 mandos apilados en 2 capas ocupan 14 × 20 × 13 y el estuche mide 26.5 × 22.8 × 15, o sea que casi la mitad del espacio queda vacío. Lo mantengo porque es el único con 99% de reputación y porque es tu punto de comparación.",
      verificacion:[
        "Interior libre confirmado en las fotos 4, 6 y 9: concha lisa con un único divisor de cinta.",
        "La foto 7 muestra la lámina de esponja saliendo entera.",
        "La foto 1 incluye el diagrama de cotas del propio vendedor.",
        "Medidas internas declaradas en texto, no rotuladas sobre foto."
      ],
      reservas:[
        "Es el más grande de los tres aprobados: 9.063 cm³ contra 5.544 del Bestico.",
        "No admite los 4 mandos acostados (necesita 28 cm de largo y tiene 26.5). Obliga a apilar en 2 capas.",
        "Al apilar, poné un mando invertido sobre el otro: encastran por los grips y ningún stick analógico carga peso.",
        "Vendedor con solo 1 año y 629 ventas, aunque con 99% positivo."
      ],
      imagenes:[
        "https://img.alicdn.com/bao/uploaded/i1/2220341818241/O1CN01GhXhJe2AkR6yvie7I_!!4611686018427384705-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/2220341818241/O1CN01OZa7Mj2AkR743A5OU_!!4611686018427384705-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/2220341818241/O1CN01W745cE2AkR7439olS_!!4611686018427384705-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/2220341818241/O1CN01nPSppK2AkR6yvfpUL_!!4611686018427384705-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/2220341818241/O1CN015AmLPl2AkR7437P4Y_!!4611686018427384705-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/2220341818241/O1CN01XZN2dv2AkR73uM8qE_!!4611686018427384705-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/2220341818241/O1CN01lrEXlm2AkR75BPFoF_!!4611686018427384705-53-xy_item.heic_220x10000Q90.jpg_.webp"
      ]
    }
  ],

  descartados: [
    { id:"804675975389", url:"https://www.goofish.com/item?id=804675975389", titulo:"Estuche P8 — interior 40×24×11", precio_cny:18,
      motivo:"DESCARTADO POR VOLUMEN. 10.560 cm³: casi el doble que el Bestico y más grande que la propia referencia del dueño. Interior libre y barato, pero 40 cm de largo no es compacto. Fue un error de criterio proponerlo." },
    { id:"1006598143817", url:"https://www.goofish.com/item?id=1006598143817", titulo:"Organizador negro — exterior 37×26×13", precio_cny:25,
      motivo:"DESCARTADO POR VOLUMEN. 9.900 cm³, y encima hay que desmontarle los divisores de velcro para dejar el interior libre. Peor en las dos cosas." },
    { id:"829404094051", url:"https://www.goofish.com/item?id=829404094051", titulo:"Estuche EVA A3 — interior 32×25×10", precio_cny:25,
      motivo:"DESCARTADO POR VOLUMEN. 8.000 cm³ frente a 6.138 del AOVER, que además es más barato. Buen estuche, pero superado." },
    { id:"1049512704261", url:"https://www.goofish.com/item?id=1049512704261", titulo:"Estuche camuflado — aprox. 31×26×9.5", precio_cny:25.88,
      motivo:"DESCARTADO. 7.657 cm³ y, peor, el vendedor no declara medidas: las leí yo con lupa de una cinta métrica en sus fotos, con 1-2 cm de error. Comprar a ciegas sobre una medida estimada no vale la pena habiendo alternativas con cotas rotuladas." },
    { id:"1059421800025", url:"https://www.goofish.com/item?id=1059421800025", titulo:"BUBM doble capa 30×24×12", precio_cny:30,
      motivo:"Interior NO libre: tres divisores de tela cosidos a la base y una parrilla de elásticos en la tapa (fotos 2, 3, 7 y 8). No son extraíbles. Además el vendedor declara marcas de uso evidentes." },
    { id:"1075060671689", url:"https://www.goofish.com/item?id=1075060671689", titulo:"Bolso fungoofun 36×16×16", precio_cny:23.8,
      motivo:"No es un estuche rígido: es un bolso de moda bandolera, en amarillo, rojo o crema. Se coló en el filtro por traer tres medidas en el título. Sirve de recordatorio de que el filtro automático no sustituye mirar las fotos." },
    { id:"1057346695489", url:"https://www.goofish.com/item?id=1057346695489", titulo:"Estuche EVA 41×27×10", precio_cny:49,
      motivo:"Bloque de espuma perforado con decenas de huecos redondos para pilas (fotos 3, 4 y 5). Moldeado, caro y enorme." },
    { id:"1049179949293", url:"https://www.goofish.com/item?id=1049179949293", titulo:"Estuche VR 30×20×15", precio_cny:45,
      motivo:"Las 6 fotos son solo del exterior, borrosas y dentro de una caja de cartón. Cero fotos de interior. Silueta moldeada a un visor VR." },
    { id:"976261957842", url:"https://www.goofish.com/item?id=976261957842", titulo:"Estuche Vision Pro 33×22×17", precio_cny:36,
      motivo:"El anuncio dice que encaja perfectamente con las gafas VR y lleva correas de sujeción. Interior moldeado a un aparato concreto." },
    { id:"974810903058", url:"https://www.goofish.com/item?id=974810903058", titulo:"Estuche 35×20×14 con defecto", precio_cny:16,
      motivo:"Solo 3 fotos y las tres son primeros planos del mismo defecto. Sin foto general ni de interior. Imposible verificar." },
    { id:"1068776062728", url:"https://www.goofish.com/item?id=1068776062728", titulo:"KIPYE EVA 38.5×28.5×6.5", precio_cny:66,
      motivo:"Solo 6.5 cm de alto, exactamente el grosor de un mando: entraría a presión contra la tapa, apoyando sobre los sticks. Y es el más caro de todos." },
    { id:"702861413513", url:"https://www.goofish.com/item?id=702861413513", titulo:"Estuche EVA 26×23×10 con divisores", precio_cny:10,
      motivo:"Demasiado chico por partida doble: para 2×2 plano hacen falta 28 cm de largo y tiene 26; para 2 capas hacen falta 13 de alto y tiene 10." }
  ]
};
