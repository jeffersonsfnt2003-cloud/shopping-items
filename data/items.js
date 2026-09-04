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
      busquedas:[
        {zh:"硬壳收纳包",        en:"hard shell storage case"},
        {zh:"硬质收纳包海绵",     en:"rigid case with foam"},
        {zh:"手提硬质工具包",     en:"rigid tool case with handle"},
        {zh:"仪器仪表收纳包",     en:"instrument / equipment case"},
        {zh:"硬壳收纳盒内尺寸",   en:"hard case, internal dimensions"},
        {zh:"双层硬壳收纳包",     en:"double-layer hard case"},
        {zh:"EVA硬壳收纳包手提",  en:"EVA hard case with handle"},
        {zh:"数码收纳包硬壳小号", en:"small digital hard case"},
        {zh:"耳机收纳包硬壳大号", en:"large headphone hard case"},
        {zh:"无人机收纳包硬壳",   en:"drone hard case"},
        {zh:"相机内胆包硬壳",     en:"camera insert hard case"},
        {zh:"游戏机收纳包硬壳",   en:"game console hard case"},
        {zh:"小号硬壳工具包",     en:"small hard tool bag"},
        {zh:"便携收纳盒EVA加厚",  en:"portable thick EVA box"}
      ],
      requisito_minimo:"Volumen interior ≤ 6.500 cm³ y alguna disposición válida de los 4 mandos + adaptador." },
    { id:"base-xbox", nombre:"Bases y coolers", tab:"Bases y coolers",
      objetivo:"Cargar 4 mandos de Xbox One (micro USB) y, si se puede, refrigerar la Series X. NO interesa el almacenaje de discos.",
      busquedas:[
        {zh:"xbox手柄充电座",         en:"xbox controller charging dock"},
        {zh:"xboxone手柄充电座",      en:"xbox ONE controller dock (micro USB)"},
        {zh:"xbox散热底座充电",       en:"xbox cooling base with charging"},
        {zh:"xbox多功能底座散热充电", en:"xbox multifunction cooling + charging stand"},
        {zh:"xbox series x 散热支架", en:"series x cooling stand"},
        {zh:"xbox手柄四充",           en:"xbox 4-controller charger"},
        {zh:"手柄座充4座",            en:"4-bay controller dock"},
        {zh:"xbox座充四座",           en:"xbox 4-bay dock"},
        {zh:"xbox手柄电池充电套装",   en:"xbox controller battery + charger kit"},
        {zh:"手柄充电座 四个",        en:"controller dock, four"}
      ],
      requisito_minimo:"Compatible con Xbox One: conector micro USB o contactos de batería. Las bases USB-C son solo para mandos Series X|S y NO sirven." }
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
    },
    {
      id:"1077229995123", categoria:"base-xbox", estado:"aprobado",
      titulo:"Wirelessor — carga doble",
      titulo_zh:"全新未使用的Xbox One双手柄充电底座 Wirelessor",
      url:"https://www.goofish.com/item?id=1077229995123",
      precio_cny:13, envio:"incluido",
      material:"Plástico", color:"Negro", condicion:"Nuevo, sin abrir",
      spec:"2 mandos · micro USB · con adaptador de corriente",
      vendedor:{ nombre:"厨房胸有大志的薯片", ciudad:"Beijing", antiguedad:"1 año", ventas:931, reputacion:"95%" },
      resumen:"El único con conector micro USB confirmado en foto. Comprá dos y tenés tus 4 mandos por ¥26.",
      descripcion:"La caja dice literalmente 'Dual Charge Base for Xbox One Controllers' y 'Suitable for XBOX ONE'. La foto 4 muestra el conector del soporte de cerca: es micro USB, el que llevan tus mandos. Trae adaptador de corriente y cable, o sea que funciona solo, sin depender de la consola. Es la pieza más barata y más segura de toda la categoría: dos unidades cubren tus cuatro mandos por ¥26 (US$ 3.87).",
      verificacion:[
        "Caja rotulada en inglés: 'Dual Charge Base for Xbox One Controllers', con el sello 'Suitable for XBOX ONE' en la esquina (fotos 1 y 10).",
        "La foto 4 es un primer plano del conector del soporte: micro USB, no USB-C.",
        "La foto 2 muestra el contenido completo: base, adaptador de corriente y cable USB.",
        "Fotos 7, 8 y 9: cajas selladas apiladas y etiquetas de fábrica. Es stock nuevo, no un usado."
      ],
      reservas:[
        "IMPORTANTE: cargar por micro USB solo funciona si el mando lleva dentro una batería recargable (pack Play & Charge o pilas AA recargables). Con pilas alcalinas desechables NO carga nada.",
        "No refrigera. Es solo cargador.",
        "Para tus 4 mandos hacen falta dos unidades.",
        "Vendedor con 1 año y 95%. Aceptable pero no de los mejores."
      ],
      imagenes:[
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01Ja5lskdqigH2vHAO_!!4611686018427383026-0-fleamarket.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/O1CN01WhQ064AIPUK2vHAO_!!4611686018427383026-0-fleamarket.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01gFYvKhtUNWE2vHAO_!!4611686018427383026-0-fleamarket.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01VRYY7cCgbDJ2vHAO_!!4611686018427383026-0-fleamarket.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN01ahZNjFVwpoF2vHAO_!!4611686018427383026-0-fleamarket.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/O1CN01szCMkFVm0pI2vHAO_!!4611686018427383026-0-fleamarket.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/O1CN016RmE5qT7bcL2vHAO_!!4611686018427383026-0-fleamarket.jpg_220x10000Q90.jpg_.webp"
      ]
    },
    {
      id:"1076615980193", categoria:"base-xbox", estado:"aprobado",
      titulo:"IINE L727 — base con ventilador",
      titulo_zh:"良值IINE L727 XboxSeries X/S主机散热风扇底座支架 双手柄座充",
      url:"https://www.goofish.com/item?id=1076615980193",
      precio_cny:32, envio:"incluido",
      material:"Plástico", color:"Negro", condicion:"Caja abierta, marcas de uso leves",
      spec:"2 mandos · contactos de batería · ventilador · 3 USB",
      vendedor:{ nombre:"任索微游戏配件", ciudad:"Nanjing", antiguedad:"10 años", ventas:13230, reputacion:"98%" },
      resumen:"Refrigeración y carga en una sola pieza, a menos de la mitad que tu referencia. Le falta una batería.",
      descripcion:"Marca IINE (良值), modelo L727, con etiqueta técnica visible: 'Charging Stand with Cooling Fan for Xbox Series Console and Controller', entrada y salida 5V/1A. La consola se para encima, lleva ventilador y tres puertos USB al frente. Carga por contactos de batería, no por cable: eso es compatible con tus mandos de One porque la bahía de pilas es la misma. Cuesta ¥32 contra los ¥67 de tu referencia y el vendedor tiene 13.230 ventas con 98%.",
      verificacion:[
        "Fotos 4 y 9: etiqueta del fabricante con marca, modelo L727 y especificación eléctrica 5V/1A.",
        "Fotos 3 y 8: los tres puertos USB en el canto frontal de la base.",
        "Fotos 5 y 10: el soporte de carga del mando en un lateral, con la batería recargable puesta.",
        "Fotos 1 y 6: contenido real desplegado — base, una batería y el cable."
      ],
      reservas:[
        "SOLO TRAE UNA BATERÍA. El producto es de dos y el vendedor lo dice: 'incluye una batería'. Para dos mandos hay que comprar otra.",
        "Caja abierta y marcas de uso leves. No es nuevo.",
        "Carga 2 mandos, no 4. Sigue haciendo falta un segundo cargador.",
        "Refrigerar una Series X es discutible: la consola aspira por abajo y expulsa por arriba, y su propio ventilador está bien dimensionado."
      ],
      imagenes:[
        "https://img.alicdn.com/bao/uploaded/i1/2023778554/O1CN01vxBQcHqq4pD2vHAO_!!4611686018427382010-0-xy_item.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/2023778554/O1CN01K0eoOemxI2D2vHAO_!!4611686018427382010-0-xy_item.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/2023778554/O1CN01ybHyPDtmAtF3thGS_!!4611686018427382010-0-xy_item.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/2023778554/O1CN010fFBj33aTJH2vHAO_!!4611686018427382010-0-xy_item.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i2/2023778554/O1CN01jBFoW11lXkJ2vHAO_!!4611686018427382010-0-xy_item.jpg_220x10000Q90.jpg_.webp"
      ]
    },
    {
      id:"1075653955750", categoria:"base-xbox", estado:"aprobado",
      titulo:"iPlay — tu referencia",
      titulo_zh:"全新Xbox Series X多功能底座 RGB 双风扇 手柄双充",
      url:"https://www.goofish.com/item?id=1075653955750",
      precio_cny:67, envio:"incluido",
      material:"Plástico", color:"Negro con RGB", condicion:"Nuevo, sin abrir",
      spec:"2 mandos · 2 baterías 1400mAh · doble ventilador · RGB",
      vendedor:{ nombre:"万物闲置屋", ciudad:"Jieyang", antiguedad:"176 días", ventas:111, reputacion:"100%" },
      resumen:"La más completa y la más cara. Incluye las dos baterías, pero trae el soporte de discos que no querés.",
      descripcion:"El que mandaste como referencia. Es el más equipado: doble ventilador, iluminación RGB, alimentación por USB, indicadores de carga y las dos baterías de 1400 mAh incluidas — eso resuelve el problema de tener que comprarlas aparte. Sellado y sin abrir. Los peros son el precio, más del doble que la IINE, y que buena parte de su volumen está dedicado al soporte de discos que dijiste que no te interesa.",
      verificacion:[
        "Caja sellada, rotulada 'Multifunctional Charging Stand-Cooling Fan Set For X-BOX SX' (fotos 1, 5 y 10).",
        "Fotos 4, 8 y 9: el dorso de la caja detalla el contenido — soporte refrigerador, ranura de discos, ventilador RGB y dos packs de batería.",
        "Fotos 2, 3, 6 y 7: los laterales muestran el ventilador, el diseño de carga del mando y la doble interfaz USB.",
        "Fotos 8 y 9: parámetros eléctricos entrada 5V/2000mA, salida 5V/2000mA."
      ],
      reservas:[
        "El doble de caro que la IINE por dos funciones que no pediste: RGB y almacenaje de discos.",
        "Sigue cargando solo 2 mandos.",
        "Vendedor con apenas 176 días y 111 ventas, aunque con 100%. El menos rodado de los tres.",
        "Todas las fotos son de la caja cerrada: nadie ha visto el producto real."
      ],
      imagenes:[
        "https://img.alicdn.com/bao/uploaded/i1/2222134607863/O1CN01F3RamcBI0UG2vHAO_!!4611686018427387895-0-xy_item.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i4/2222134607863/O1CN01me5RJFNFnvH2vHAO_!!4611686018427387895-0-xy_item.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i3/2222134607863/O1CN01pDjr0FhXkRL2vHAO_!!4611686018427387895-0-xy_item.jpg_220x10000Q90.jpg_.webp",
        "https://img.alicdn.com/bao/uploaded/i1/2222134607863/O1CN01oPjwQTUKWHH2vHAO_!!4611686018427387895-0-xy_item.jpg_220x10000Q90.jpg_.webp"
      ]
    }
  ],

  descartados: [
    { id:"909429995079", url:"https://www.goofish.com/item?id=909429995079", titulo:"Base 4-en-1 Xbox One ¥25", precio_cny:25,
      motivo:"El '4-en-1' son CUATRO PUERTOS USB, no cuatro mandos: la caja dice 'can charge up to two Xbox One controllers'. Y peor, se abrocha al costado de una consola Xbox One con enganches ('snap joints'). No se monta en una Series X." },
    { id:"899536886280", url:"https://www.goofish.com/item?id=899536886280", titulo:"Base KJH 4-en-1 ¥8.90", precio_cny:8.90,
      motivo:"La caja dice 'FOR XBOXONES 4-in-1': es para la consola Xbox One S, no para Series X. El anuncio la lista bajo 'Series X' pero las fotos del empaque muestran la One S. Además dos de sus fotos son un selfie y un meme." },
    { id:"1058087644676", url:"https://www.goofish.com/item?id=1058087644676", titulo:"Soporte vertical XSX 4 ventiladores ¥32.20", precio_cny:32.20,
      motivo:"Sí es para Series X y tiene 4 ventiladores, pero NO carga mandos: son 3 puertos USB y 18 ranuras de discos, justo lo que no querés. Encima viene sin fuente de alimentación." },
    { id:"1079501886618", url:"https://www.goofish.com/item?id=1079501886618", titulo:"Base Series X con carga Type-C ¥19", precio_cny:19,
      motivo:"Conector Type-C. Sirve para mandos de Series X|S pero NO para los tuyos de Xbox One, que son micro USB. Es exactamente la trampa de compatibilidad que hay que evitar en esta categoría." },
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

/* --- Fotos y categoría de los descartados.
   Se guardan solo los tramos variables de la URL; X() reconstruye la completa. --- */
(function(){
  var P='https://img.alicdn.com/bao/uploaded/', S='_220x10000Q90.jpg_.webp';
  var X=function(a){ return (a||[]).map(function(v){ return P+v+S; }); };
  var IM={
"804675975389":["i2/O1CN01pt4vkr1UbzmYOtWpR_!!53-fleamarket.heic","i2/O1CN01iOXh6s1UbzmbVwsuA_!!53-fleamarket.heic","i4/O1CN01GiBVrn1UbzmVf1KwV_!!53-fleamarket.heic","i2/O1CN01oCoJe91UbzmYMtXQZ_!!53-fleamarket.heic","i2/O1CN01PWcByL1UbzmVexeDk_!!53-fleamarket.heic"],
"1006598143817":["i3/890754579/O1CN01Ly5YPP1jhEifxsNWU_!!4611686018427385363-0-xy_item.jpg","i3/890754579/O1CN01R5peEf1jhEhtyt3pU_!!4611686018427385363-53-xy_item.heic","i4/890754579/O1CN010sZcjL1jhEhQvWfXA_!!4611686018427385363-53-xy_item.heic","i1/890754579/O1CN01PTCBFo1jhEhRC0sQY_!!4611686018427385363-53-xy_item.heic","i1/890754579/O1CN01R6oEk81jhEhQYhTIV_!!4611686018427385363-53-xy_item.heic","i3/890754579/O1CN01sGl2hv1jhEhQvX4Uf_!!4611686018427385363-53-xy_item.heic"],
"829404094051":["i3/O1CN01GBiNM42CIc8aLmXJL_!!53-fleamarket.heic","i1/O1CN01XW2YWR2CIc8ZmMcru_!!53-fleamarket.heic","i1/O1CN010i5zzo2CIc8Y6uG9l_!!53-fleamarket.heic"],
"1049512704261":["i4/2519555912/O1CN01x1Lo7s1tXkg8g0UIJ_!!4611686018427387720-53-xy_item.heic","i1/2519555912/O1CN01xs4WcJ1tXkg89SqrS_!!4611686018427387720-53-xy_item.heic","i4/2519555912/O1CN01bRSwAh1tXkg8MHeVW_!!4611686018427387720-53-xy_item.heic","i3/2519555912/O1CN01fV2Poy1tXkg8mYyFR_!!4611686018427387720-53-xy_item.heic"],
"1059421800025":["i4/108797613/O1CN01yNUZKR266oOYUzRWu_!!4611686018427387565-53-xy_item.heic","i2/108797613/O1CN01CdPAfb266oOYOWOoT_!!4611686018427387565-53-xy_item.heic","i2/108797613/O1CN01qqlhTl266oOZzvZ8g_!!4611686018427387565-53-xy_item.heic","i4/108797613/O1CN01A9PWgg266oOYdIp7i_!!4611686018427387565-53-xy_item.heic"],
"1075060671689":["i4/O1CN011cesENKp4GC1WPoq_!!4611686018427382943-0-fleamarket.jpg","i3/O1CN01a6RnrOqcdIJ1WPoq_!!4611686018427382943-0-fleamarket.jpg","i2/O1CN0130umFGZJEmG1WPoq_!!4611686018427382943-0-fleamarket.jpg","i4/O1CN01ZBZL5X76u9D1WPoq_!!4611686018427382943-0-fleamarket.jpg"],
"1057346695489":["i4/2220341818241/O1CN01497lHX2AkR7oDTk8Q_!!4611686018427384705-53-xy_item.heic","i4/2220341818241/O1CN01yJXHCx2AkR7nxstNB_!!4611686018427384705-53-xy_item.heic","i4/2220341818241/O1CN01eUSe6c2AkR7oE9DYP_!!4611686018427384705-53-xy_item.heic"],
"1049179949293":["i3/2220341109392/O1CN01I3ow6ZveYJE2BxV2_!!4611686018427380368-0-xy_item.jpg","i3/2220341109392/O1CN01Ry19rkHNxzJ2BxV2_!!4611686018427380368-0-xy_item.jpg"],
"976261957842":["i2/O1CN016FX1kg1STB39La3wl_!!4611686018427380023-0-fleamarket.jpg","i4/O1CN01eMX7T31STB38ttyJV_!!4611686018427380023-0-fleamarket.jpg","i3/O1CN01vHabbA1STB37XhQRk_!!4611686018427380023-0-fleamarket.jpg"],
"974810903058":["i1/O1CN017PI2x71YtBELvwcYl_!!4611686018427384604-53-fleamarket.heic","i2/O1CN01ilkkcm1YtBEMmtEHM_!!4611686018427384604-53-fleamarket.heic","i3/O1CN01Ayy3Va1YtBENCnm4y_!!4611686018427384604-53-fleamarket.heic"],
"1068776062728":[],
"702861413513":["i3/O1CN01vn8vNt2M6NXoLe4x4_!!0-fleamarket.jpg","i2/O1CN017VWji22M6NXrX8jMT_!!0-fleamarket.jpg","i3/O1CN01gnVlvY2M6NXse3ANe_!!0-fleamarket.jpg"],
"909429995079":["i1/O1CN01MOwQbq1icpCdqBQZD_!!4611686018427385506-0-fleamarket.jpg","i3/O1CN01ugPrph1icpCf8dSYE_!!4611686018427385506-0-fleamarket.jpg","i2/O1CN01rB2GHG1icpCgomjtI_!!4611686018427385506-0-fleamarket.jpg"],
"899536886280":["i4/O1CN01vof1s62HEYmXVN5s7_!!4611686018427386079-0-fleamarket.jpg","i3/O1CN01rddoGV2HEYmZdsy7S_!!4611686018427386079-0-fleamarket.jpg","i2/O1CN01GMt7jA2HEYmXb35P5_!!4611686018427386079-0-fleamarket.jpg"],
"1058087644676":["i2/2212071193419/O1CN01lwhe2f1b7xIHq1TNw_!!4611686018427386699-0-xy_item.jpg","i2/2212071193419/O1CN01aWMD5J1b7xIIaQDiJ_!!4611686018427386699-0-xy_item.jpg","i1/2212071193419/O1CN01u5DQ751b7xIHq1GuZ_!!4611686018427386699-0-xy_item.jpg"],
"1079501886618":["i1/2214349725640/O1CN01Bv6mvetNaKB2BxNI_!!4611686018427387848-0-xy_item.jpg"]
  };
  var XBOX={"909429995079":1,"899536886280":1,"1058087644676":1,"1079501886618":1};
  window.CATALOGO.descartados.forEach(function(d){
    d.imagenes = X(IM[d.id]);
    d.categoria = XBOX[d.id] ? "base-xbox" : "estuche-gamecube";
    d.estado = "descartado";
  });
})();
