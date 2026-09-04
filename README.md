# Shopping Items

Catálogo de compras verificadas. **Fuente única: [goofish.com](https://www.goofish.com/)** — no se buscan ni se listan ítems de ningún otro sitio.

- Dueño: @jeffersonsfnt2003-cloud
- Colaborador: @alexandro-fuentes-intellbits

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | La vista. No contiene datos: los lee y los dibuja. |
| `data/items.js` | **Los datos.** Un solo objeto `window.CATALOGO` con `meta`, `categorias`, `items` y `descartados`. |

Para agregar un ítem se edita **solo** `data/items.js`. El HTML no se toca.

## Reglas de inclusión

Un ítem entra al catálogo únicamente si:

1. Viene de goofish.com.
2. Se abrieron **todas** sus fotos y se revisaron una por una.
3. El interior es **libre**, sin bandeja ni espuma moldeada para un aparato concreto.
4. No es metálico, no es tipo flight case y no es desproporcionado.
5. Sus medidas permiten el contenido objetivo, demostrado con el diagrama de encaje.

Lo que se revisa y no pasa queda registrado en `descartados` con el motivo, para no volver a evaluarlo.

## Medidas de referencia

| Objeto | Medidas | Fuente |
|---|---|---|
| Mando GameCube (DOL-003) | 14.0 × 10.0 × 6.5 cm, 200 g | [dimensions.com](https://www.dimensions.com/element/gamecube-controller) |
| Adaptador GameCube→Switch | 12 × 6 × 3 cm | provista por el dueño |
| 4 mandos en 2×2 plano | 28 × 20 × 6.5 cm | calculado |
| 4 mandos en 2 capas de 2 | 14 × 20 × 13 cm | calculado |

> Al apilar, poner un mando **invertido** sobre el otro: encastran por los grips y ningún stick analógico carga peso.

## Publicación

GitHub Pages sirve `index.html` desde la raíz de `main`.

## Requisito para GitHub Pages

En cuentas gratuitas, **Pages solo funciona con el repositorio público**. Este repo
está privado ahora mismo. Hay que cambiarlo en
Settings → General → Danger Zone → Change visibility → Public.
