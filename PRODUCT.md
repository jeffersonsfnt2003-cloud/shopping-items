# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Estático sin framework, publicado por GitHub Pages desde la raíz de `main`. Hoy: un solo `index.html` + `data/items.js`. El usuario está **abierto a reestructurar** (separar CSS/JS en archivos propios, o build si el diseño lo amerita), pero el contrato de datos es intocable: `data/items.js` expone `window.CATALOGO` y agregar un ítem edita solo ese archivo.

## Users

Dos personas: el dueño (Jefferson, @jeffersonsfnt2003-cloud) y un colaborador (@alexandro-fuentes-intellbits). Uso principal: **iPhone, como PWA instalada**. Escenario: decidir compras en Goofish — revisar candidatos verificados, comparar encaje y costo real, copiar links/listas para pegarlos en el chat con Claude. Escritorio es secundario. Confirmado por el usuario el 2026-09-04.

## Product Purpose

Catálogo personal de compras verificadas en goofish.com (mercado chino de segunda mano). Cada ítem pasó una verificación manual foto por foto; el catálogo responde dos preguntas: **¿entra?** (diagramas de encaje a escala contra objetos de referencia) y **¿cuánto cuesta de verdad?** (desglose vía proxy Superbuy hasta el flete internacional). Éxito = decidir una compra con confianza sin re-verificar nada.

## Positioning

No es una tienda ni un wishlist: es un registro de **due diligence de compras**. Lo que un catálogo vecino no puede copiar: cada ítem trae verificación fotográfica, reservas explícitas, motivo de descarte cuando no pasó, y matemática de encaje/flete calculada, no estimada.

## Operating Context

- Fuente única: goofish.com. Imágenes servidas por el CDN de Goofish (`referrerpolicy="no-referrer"` requerido).
- Cotización vía Superbuy (comisión por ítem, flete EUB postal o exprés, consolidación de paquetes). Destino: El Salvador. Aranceles locales quedan explícitamente fuera.
- Flujo de curaduría: el usuario oculta ítems en el dispositivo (localStorage) y copia la lista para pedirle a Claude que los borre permanentemente de `data/items.js`.
- Categorías activas: estuches GameCube, desk pads, casas contenedor. Cada una con objetivo, requisito mínimo y términos de búsqueda en chino copiables.

## Capabilities and Constraints

- PWA instalable en iOS: manifest, safe-areas, banner de instalación, intercepción de links externos en modo standalone (hoja de salida controlada).
- Funciones que el rebrand debe preservar completas: filtros (orden, precio máximo), navegación por categorías, carrusel táctil con discriminación tap-vs-arrastre, lightbox con zoom, modal de detalle, diagramas SVG de encaje (planta y alzado, a escala), bloque de costos Superbuy (incl. estados eub/exprés/bloqueado), aviso "comprarlos juntos", ocultar/restaurar ítems, descartados colapsables, copiado al portapapeles con fallback, términos de búsqueda zh/en copiables.
- Sin backend, sin analytics, sin cuentas. Todo el estado del usuario vive en localStorage.
- Idioma: español rioplatense/salvadoreño con voseo ("tocá", "pegálo", "ocultaste vos"). El voseo es voz confirmada del producto.

## Brand Commitments

Nombre confirmado: **"Catálogo"** — se mantiene tal cual (título, manifest). Sin logo ni identidad visual heredada que preservar.

**Preferencia permanente (2026-09-04, del usuario):** dirección visual = **canon de e-commerce marketplace al estilo Amazon**, ejecutado con fidelidad total y sin ironía. El usuario rechazó explícitamente una dirección expresiva ("La Ficha de Aduana") pidiendo "estilo Amazon" para esta app de shopping. La vara de oficio es Amazon: tarjetas producto-primero sobre fondo claro, header oscuro, precio protagonista, CTAs amarillo/naranja, tipografía utilitaria. Señales de confianza solo con datos reales (verificación fotográfica, reservas); nunca inventar ratings ni reviews. Futuras superficies heredan este canon salvo que el usuario lo cambie.

## Evidence on Hand

- `data/items.js`: ~14 ítems verificados + descartados con motivo, metadata de barrido real (487 vistos, 173 con medidas, 14 que encajan, 4 verificados), tarifas Superbuy leídas de la calculadora oficial con fecha.
- Medidas de referencia con fuente (mando GameCube, MacBook 13", adaptador) en README y `meta.referencias`.
- No existen testimonios, usuarios externos ni métricas de tráfico; nada de eso debe inventarse.

## Product Principles

1. **La verdad verificada manda**: nada entra sin fotos revisadas; la incertidumbre se muestra (reservas, "a confirmar"), nunca se esconde.
2. **El costo real, no el precio de vitrina**: siempre hasta el flete; lo que no está contado se declara.
3. **Decisión en el teléfono**: cada interacción debe funcionar con el pulgar, en una app instalada, sin hover.
4. **Los datos viven en un solo lugar**: la vista se puede rehacer entera; `window.CATALOGO` no se toca.
5. **Dos usuarios, cero fricción**: sin login, sin onboarding, sin estados que dependan de un servidor.
