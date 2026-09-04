/* Catálogo de compras — fuente única: goofish.com
   Agregar un ítem = agregar un objeto a este arreglo. No se toca el HTML.
   Tasa de cambio y metadatos globales en CATALOGO.meta */

window.CATALOGO = {
  meta: {
    tasa_cny_usd: 0.1489,
    tasa_fecha: "2026-09-04",
    tasa_fuente: "https://wise.com/us/currency-converter/cny-to-usd-rate",
    fuente_unica: "https://www.goofish.com/",
    referencias: {
      mando_gamecube: {
        nombre: "Mando Nintendo GameCube (DOL-003)",
        largo: 14.0, ancho: 10.0, alto: 6.5, peso_g: 200,
        fuente: "https://www.dimensions.com/element/gamecube-controller"
      },
      adaptador: {
        nombre: "Adaptador GameCube -> Switch",
        largo: 12.0, ancho: 6.0, alto: 3.0,
        fuente: "medida provista por el usuario"
      }
    }
  },

  categorias: [
    {
      id: "estuche-gamecube",
      nombre: "Estuche rígido — 4 mandos GameCube + adaptador",
      objetivo: "Estuche de interior LIBRE (sin bandeja moldeada), no metálico, no tipo flight case. Contenido: 4 mandos de GameCube (14 x 10 x 6.5 cm c/u) y 1 adaptador GameCube->Switch (12 x 6 x 3 cm). Sin cables.",
      requisito_minimo: "Interior >= 28 x 20 x 7 cm para los 4 en 2x2 plano, o >= 15 x 21 x 13 cm para 2 capas de 2."
    },
    {
      id: "base-xbox",
      nombre: "Base vertical de refrigeración/carga — Xbox Series X",
      objetivo: "Base vertical con ventilación y carga para 2 mandos de Xbox One (no Series X|S). Pendiente de confirmar el modelo exacto de los mandos.",
      requisito_minimo: "Los contactos y la batería recargable deben ser compatibles con la bahía de pilas del mando Xbox One."
    }
  ],

  items: [
    {
      id: "804675975389",
      categoria: "estuche-gamecube",
      estado: "aprobado",
      titulo: "Estuche rígido P8 — interior 40 x 24 x 11 cm",
      titulo_zh: "18元包邮手提大号硬质工具包便携维修包仪器仪表防护包键盘收纳包",
      url: "https://www.goofish.com/item?id=804675975389",
      precio_cny: 18,
      envio: "incluido",
      material: "PU + EVA",
      color: "Negro",
      condicion: "Marcas de uso leve (declarado por el vendedor y visible en la foto 9)",
      interior: [40, 24, 11],
      interior_detalle: "Base 7 cm + tapa 4 cm. Medidas rotuladas por el vendedor sobre la foto 4.",
      vendedor: { nombre: "白白白大爷", ciudad: "Jinhua", antiguedad: "8 años", ventas: 13435, reputacion: "95%" },
      encaje: { layout: "flat2x2", veredicto: "holgado" },
      descripcion: "El mejor encaje y el más barato de la selección. Los 4 mandos entran en 2x2 plano ocupando 28 x 24 cm de los 40 x 24 disponibles: sobra una franja de 12 x 24 cm donde el adaptador entra acostado. Los 6.5 cm de grosor del mando caben en la base de 7 cm, así que nada queda apilado y ningún stick analógico soporta peso. Interior completamente liso, sin bandeja ni espuma moldeada.",
      verificacion: [
        "Interior liso confirmado en las fotos 4 y 5: concha negra lisa, sin molde ni espuma precortada.",
        "Medidas internas rotuladas por el vendedor sobre la propia foto 4 (40 / 24 / base 7 / tapa 4).",
        "El vendedor advierte en la foto 6 que el cierre deja entrar agua: solo resiste salpicaduras.",
        "La foto 9 muestra marcas y roces en el interior de la base. Coincide con la condición declarada."
      ],
      reservas: [
        "No es nuevo: tiene marcas de uso leve.",
        "El cierre no es estanco según el propio vendedor.",
        "Reputación 95%, la más baja de los vendedores seleccionados."
      ],
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01pt4vkr1UbzmYOtWpR_!!53-fleamarket.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01iOXh6s1UbzmbVwsuA_!!53-fleamarket.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01GiBVrn1UbzmVf1KwV_!!53-fleamarket.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01oCoJe91UbzmYMtXQZ_!!53-fleamarket.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01PWcByL1UbzmVexeDk_!!53-fleamarket.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01tFa1zj1UbzmRA3m6x_!!53-fleamarket.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01vb0YVa1UbzmVeyBYE_!!53-fleamarket.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN013e5oah1UbzmZ6VmS3_!!53-fleamarket.heic_220x10000Q90.jpg_.webp"
      ]
    },
    {
      id: "829404094051",
      categoria: "estuche-gamecube",
      estado: "aprobado",
      titulo: "Estuche rígido EVA A3 — interior 32 x 25 x 10 cm",
      titulo_zh: "手提大号硬壳防水耐磨减震工具收纳包五金工具仪器仪表设备防护包",
      url: "https://www.goofish.com/item?id=829404094051",
      precio_cny: 25,
      envio: "incluido",
      material: "EVA",
      color: "Negro o azul (a elección)",
      condicion: "Nuevo",
      interior: [32, 25, 10],
      interior_detalle: "Exterior 33 x 26 x 11. Base 7 cm + tapa 3 cm. Rotulado por el vendedor sobre las fotos 5 y 10.",
      vendedor: { nombre: "货比三家之后的货", ciudad: "Jinhua", antiguedad: "6 años", ventas: 18390, reputacion: "97%" },
      encaje: { layout: "flat2x2", veredicto: "ajustado pero limpio" },
      descripcion: "El encaje más elegante de la selección. Los 4 mandos en 2x2 ocupan 28 x 20 de los 32 x 25 de la base, y los 6.5 cm de grosor entran en los 7 cm de profundidad de la base. El adaptador (12 x 6 x 3) cabe exacto en la tapa, que tiene 3 cm libres y un bolsillo de malla. Interior liso en ambas mitades. Es la única opción nueva con devolución si no coincide con la descripción.",
      verificacion: [
        "Interior liso confirmado en las fotos 5 y 10, con las medidas rotuladas sobre la imagen (32 / 25 / base 7 / tapa 3).",
        "La foto 4 muestra el estuche cargado de herramientas sueltas: base libre y bolsillo de malla en la tapa.",
        "El vendedor aclara que la cáscara es dura pero de rigidez media, no extrema.",
        "Ofrece devolución con envío pagado si el producto no coincide con la descripción."
      ],
      reservas: [
        "Rigidez media según el propio vendedor: protege golpes, no aplastamiento fuerte.",
        "La versión azul lleva marca GOODYEAR estampada; la negra es lisa.",
        "El vendedor declara margen de error de 0.5 a 1.5 cm en la medición manual."
      ],
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i3/O1CN01GBiNM42CIc8aLmXJL_!!53-fleamarket.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01XW2YWR2CIc8ZmMcru_!!53-fleamarket.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN010i5zzo2CIc8Y6uG9l_!!53-fleamarket.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01RR8m7d2CIc8ZmM9nh_!!53-fleamarket.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01T5l73J2CIc8bTZ1FB_!!53-fleamarket.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01w1ZtWi2CIc8d54LbK_!!53-fleamarket.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01B0qsCi2CIc8aLlb6E_!!53-fleamarket.heic_220x10000Q90.jpg_.webp"
      ]
    },
    {
      id: "1045671276496",
      categoria: "estuche-gamecube",
      estado: "aprobado",
      titulo: "Estuche rígido — interior 26.5 x 22.8 x 15 cm (tu referencia)",
      titulo_zh: "手提大号硬质工具包便携维修包仪器仪表防护包键盘收纳包",
      url: "https://www.goofish.com/item?id=1045671276496",
      precio_cny: 25,
      envio: "incluido",
      material: "PU + EVA, con lámina de esponja extraíble",
      color: "Negro",
      condicion: "Nuevo (leves marcas de presión por transporte, declaradas)",
      interior: [26.5, 22.8, 15],
      interior_detalle: "Medida interna declarada por el vendedor en la descripción.",
      vendedor: { nombre: "包你心动", ciudad: "Dongguan", antiguedad: "1 año", ventas: 629, reputacion: "99%" },
      encaje: { layout: "stack2", veredicto: "solo apilado" },
      descripcion: "El estuche que mandaste como referencia. Cumple todas las reglas: cáscara dura PU+EVA, interior completamente libre con un solo divisor de tela, esponja extraíble, asa, negro y sobrio. Pero atención al encaje: con 26.5 cm de largo NO admite los 4 mandos en 2x2 plano, porque esa disposición necesita 28 cm. Solo funciona en 2 capas de 2, aprovechando los 15 cm de altura. El adaptador va en la franja libre de 12.5 x 22.8 cm.",
      verificacion: [
        "Interior libre confirmado en las fotos 4, 6 y 9: concha lisa con un único divisor de cinta, sin molde.",
        "La foto 7 muestra la lámina de esponja saliendo entera: es extraíble.",
        "Medidas internas declaradas en texto por el vendedor, no rotuladas sobre foto.",
        "La foto 1 incluye el diagrama de cotas del propio vendedor."
      ],
      reservas: [
        "No entran los 4 mandos en plano: faltan 1.5 cm de largo. Obliga a apilar en 2 capas.",
        "Al apilar, poné un mando invertido sobre el otro. Encastran por los grips y así ningún stick analógico carga peso. Apilados en la misma orientación, el stick del de abajo queda presionado contra la panza del de arriba.",
        "Vendedor con solo 1 año y 629 ventas: el de menor historial de la selección, aunque con 99% positivo."
      ],
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i1/2220341818241/O1CN01GhXhJe2AkR6yvie7I_!!4611686018427384705-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/2220341818241/O1CN01OZa7Mj2AkR743A5OU_!!4611686018427384705-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/2220341818241/O1CN01W745cE2AkR7439olS_!!4611686018427384705-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/2220341818241/O1CN01nPSppK2AkR6yvfpUL_!!4611686018427384705-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/2220341818241/O1CN015AmLPl2AkR7437P4Y_!!4611686018427384705-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/2220341818241/O1CN01XZN2dv2AkR73uM8qE_!!4611686018427384705-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/2220341818241/O1CN01lrEXlm2AkR75BPFoF_!!4611686018427384705-53-xy_item.heic_220x10000Q90.jpg_.webp"
      ]
    },
    {
      id: "1049512704261",
      categoria: "estuche-gamecube",
      estado: "aprobado",
      titulo: "Estuche rígido camuflado — aprox. 33 x 28 x 11 cm",
      titulo_zh: "大号硬壳收纳包一个尺寸如图",
      url: "https://www.goofish.com/item?id=1049512704261",
      precio_cny: 25.88,
      envio: "incluido",
      material: "EVA",
      color: "Camuflaje militar",
      condicion: "Usado, buen estado",
      interior: [31, 26, 9.5],
      interior_detalle: "El vendedor no declara medidas ('tamaño según la foto'). Estas cifras las leí yo de la cinta métrica en sus fotos 2, 3 y 5: exterior aprox. 33 x 28 x 11 cm. Margen de error de 1 a 2 cm.",
      vendedor: { nombre: "炮兵库存清仓", ciudad: "Chifeng", antiguedad: "5 años", ventas: 19648, reputacion: "98%" },
      encaje: { layout: "flat2x2", veredicto: "entra si las medidas leídas son correctas" },
      descripcion: "Interior completamente libre, solo con una cinta elástica. Los 4 mandos en 2x2 necesitan 28 x 20 y hay unos 31 x 26, así que entran planos y sobra sitio para el adaptador. Vendedor con casi 20 mil ventas y devolución si no coincide. La pega es estética y de precisión: es camuflado, no negro, y las medidas son mi lectura de la cinta, no un dato del vendedor.",
      verificacion: [
        "Interior libre confirmado en la foto 4: concha lisa con una cinta elástica, sin molde ni espuma.",
        "Las fotos 2, 3 y 5 traen cinta métrica sobre el estuche. Las medidas de esta ficha salen de ampliar esas fotos.",
        "La foto 1 muestra varios remaches o perforaciones en la tapa. No están explicados en el anuncio.",
        "Ofrece devolución con envío pagado si no coincide con la descripción."
      ],
      reservas: [
        "El vendedor NO declara medidas. Todo el encaje depende de mi lectura de la cinta métrica: margen de 1 a 2 cm.",
        "Camuflado, no negro. Se aleja del 'básico' que pediste.",
        "Remaches o agujeros visibles en la tapa, sin explicación en el anuncio. Preguntale antes de comprar.",
        "Es usado, no nuevo."
      ],
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i4/2519555912/O1CN01x1Lo7s1tXkg8g0UIJ_!!4611686018427387720-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/2519555912/O1CN01xs4WcJ1tXkg89SqrS_!!4611686018427387720-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/2519555912/O1CN01bRSwAh1tXkg8MHeVW_!!4611686018427387720-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/2519555912/O1CN01fV2Poy1tXkg8mYyFR_!!4611686018427387720-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/2519555912/O1CN016s4roi1tXkg89USp9_!!4611686018427387720-53-xy_item.heic_220x10000Q90.jpg_.webp"
      ]
    },
    {
      id: "1006598143817",
      categoria: "estuche-gamecube",
      estado: "aprobado",
      titulo: "Organizador rígido negro — exterior 37 x 26 x 13 cm",
      titulo_zh: "硬壳收纳包，化妆，工具收纳包，黑色，多功能三层多收纳袋",
      url: "https://www.goofish.com/item?id=1006598143817",
      precio_cny: 25,
      envio: "no especificado",
      material: "Tela Oxford impermeable sobre cáscara dura",
      color: "Negro",
      condicion: "Nuevo",
      interior: [36, 25, 11],
      interior_detalle: "Exterior 37 x 26 x 13. Interior 36 x 25 según el diagrama de cotas del vendedor en la foto 4.",
      vendedor: { nombre: "no declarado en la ficha", ciudad: "-", antiguedad: "-", ventas: 0, reputacion: "-" },
      encaje: { layout: "flat2x2", veredicto: "entra, pero hay que vaciarlo primero" },
      descripcion: "Maletín organizador con divisores de velcro totalmente reconfigurables o extraíbles: sacándolos, el interior queda libre y los 4 mandos entran en 2x2 con margen. Negro, sobrio, tela Oxford impermeable. La contra es que viene pensado como organizador de tres niveles con elásticos en la tapa, así que no es un cajón vacío de fábrica: hay que desmontarlo.",
      verificacion: [
        "La foto 6 declara 'divisores de libre ajuste' y muestra las placas de velcro sueltas: el interior es reconfigurable o vaciable.",
        "La foto 4 trae el diagrama de cotas del fabricante: interior 36 x 25 cm, exterior 37 x 26 x 13 cm.",
        "La foto 8 muestra la prueba de impermeabilidad de la tela.",
        "Fotos 1, 2, 5 y 9 muestran el interior cargado: con divisores puestos, no libre."
      ],
      reservas: [
        "De fábrica NO viene con interior libre: trae divisores y una tapa con elásticos. Hay que quitarlos.",
        "La tapa con portaherramientas elásticos come altura útil.",
        "La ficha no expone datos del vendedor: verificalos antes de comprar.",
        "No aclara si el envío está incluido."
      ],
      imagenes: [
        "https://img.alicdn.com/bao/uploaded/i3/890754579/O1CN01R5peEf1jhEhtyt3pU_!!4611686018427385363-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/890754579/O1CN010sZcjL1jhEhQvWfXA_!!4611686018427385363-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/890754579/O1CN01PTCBFo1jhEhRC0sQY_!!4611686018427385363-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/890754579/O1CN01R6oEk81jhEhQYhTIV_!!4611686018427385363-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/890754579/O1CN01sGl2hv1jhEhQvX4Uf_!!4611686018427385363-53-xy_item.heic_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/890754579/O1CN01oJiqov1jhEhRCFz68_!!4611686018427385363-53-xy_item.heic_220x10000Q90.jpg_.webp"
      ]
    }
  ],

  descartados: [
    { id: "1057346695489", url: "https://www.goofish.com/item?id=1057346695489", titulo: "Estuche EVA 41 x 27 x 10 cm", precio_cny: 49,
      motivo: "El título prometía 'divisores de esponja extraíbles', pero las fotos 3, 4 y 5 muestran un bloque de espuma perforado con decenas de huecos redondos para pilas. Es exactamente el moldeado que descartás. Parece extraíble, pero no hay foto que lo confirme con el fondo a la vista." },
    { id: "1049179949293", url: "https://www.goofish.com/item?id=1049179949293", titulo: "Estuche VR grande 30 x 20 x 15 cm", precio_cny: 45,
      motivo: "Las 6 fotos son solo del exterior, borrosas y tomadas dentro de una caja de cartón. Cero fotos de interior, así que es imposible verificar. Además la silueta está claramente moldeada a la forma de un visor VR." },
    { id: "976261957842", url: "https://www.goofish.com/item?id=976261957842", titulo: "Estuche Vision Pro 33 x 22 x 17 cm", precio_cny: 36,
      motivo: "El propio anuncio dice que 'encaja perfectamente con las gafas VR' y que lleva capa de malla y correas de sujeción. Interior moldeado a un aparato concreto." },
    { id: "974810903058", url: "https://www.goofish.com/item?id=974810903058", titulo: "Estuche 35 x 20 x 14 cm con defecto", precio_cny: 16,
      motivo: "Solo publica 3 fotos y las tres son primeros planos del mismo defecto. No hay foto general ni de interior. Imposible verificar nada." },
    { id: "1068776062728", url: "https://www.goofish.com/item?id=1068776062728", titulo: "KIPYE EVA 38.5 x 28.5 x 6.5 cm", precio_cny: 66,
      motivo: "Solo 6.5 cm de alto. El mando de GameCube mide exactamente 6.5 cm de grosor: entraría a presión contra la tapa, apoyando sobre los sticks. Además es el más caro de todos." },
    { id: "702861413513", url: "https://www.goofish.com/item?id=702861413513", titulo: "Estuche EVA 26 x 23 x 10 cm con divisores", precio_cny: 10,
      motivo: "Demasiado chico por partida doble: para 2x2 plano hacen falta 28 cm de largo y tiene 26; para 2 capas hacen falta 13 cm de alto y tiene 10. No hay disposición que funcione." }
  ]
};
