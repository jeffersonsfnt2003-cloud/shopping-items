/* Catálogo — vista. Los datos viven en data/items.js (window.CATALOGO). */
let C,M;
const ICO='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
const CHL='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square"><path d="M14 5l-7 7 7 7"/></svg>';
const CHR='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square"><path d="M10 5l7 7-7 7"/></svg>';
const CHL2='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><path d="M14 5l-7 7 7 7"/></svg>';
const CHR2='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><path d="M10 5l7 7-7 7"/></svg>';
const VCHK='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';
const OKI='<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="square"><path d="M4 12.5l5.5 5.5L20 6.5"/></svg>';
const hi=u=>String(u).replace(/_\d+x\d+Q90/i,'_Q90');
const usd=c=>(c*M.tasa_cny_usd).toFixed(2);
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));

/* Iconos de categoría. La categoría elige el suyo con el campo "icono" en data/items.js. */
const SVG=d=>'<svg class="ci" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+d+'</svg>';
const ICONOS={
  todos:   SVG('<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>'),
  pesa:    SVG('<path d="M6.5 6.5v11M3.5 9v6M17.5 6.5v11M20.5 9v6M6.5 12h11"/>'),
  caja:    SVG('<path d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8"/>'),
  alfombra:SVG('<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 6v12"/>'),
  casa:    SVG('<path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>'),
  base:    SVG('<rect x="4" y="14" width="16" height="6" rx="2"/><path d="M9 14V7a3 3 0 0 1 6 0v7"/>'),
  ocultos: SVG('<path d="M3 3l18 18"/><path d="M10.6 10.6a2 2 0 0 0 2.8 2.8"/><path d="M9.4 5.2A9.6 9.6 0 0 1 12 5c5 0 9 4.5 9 7a12 12 0 0 1-2.2 3.1"/><path d="M6.2 6.7A12.4 12.4 0 0 0 3 12c0 2.5 4 7 9 7a9.6 9.6 0 0 0 3.4-.6"/>')
};
const icoCat=k=>ICONOS[k]||ICONOS.todos;

async function alPortapapeles(txt){
  try{ await navigator.clipboard.writeText(txt); return true; }
  catch(_){
    try{ const t=document.createElement('textarea'); t.value=txt;
      t.style.cssText='position:fixed;opacity:0;pointer-events:none'; document.body.appendChild(t);
      t.select(); const ok=document.execCommand('copy'); t.remove(); return ok; }
    catch(__){ return false; }
  }
}
function cablearCopias(root){
  root.querySelectorAll('[data-copy]').forEach(b=>{
    b.onclick=async e=>{
      e.stopPropagation();
      if(_arrastro) return;
      const orig=b.innerHTML, ok=await alPortapapeles(b.dataset.copy);
      b.classList.add('ok');
      b.innerHTML = b.dataset.corto!==undefined
        ? (ok?OKI:'!')
        : (ok?OKI+' Copiado':'Copialo a mano');
      setTimeout(()=>{ b.classList.remove('ok'); b.innerHTML=orig; }, 1600);
    };
  });
}

const SINFOTO='<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">'
  +'<rect x="3" y="4" width="18" height="15" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/>'
  +'<path d="M21 15l-4.5-4.5L9 18"/><path d="M3 3l18 18"/></svg>';
function carr(it,cls,grande){
  const im=it.imagenes||[];
  if(!im.length) return '<div class="'+cls+' sinfoto"><span>'+SINFOTO
    +'<b>Sin foto cargada</b><i>el anuncio sí tiene fotos</i></span></div>';
  return '<div class="'+cls+'" data-c>'
    +'<div class="tr">'+im.map((u,i)=>'<div class="sl"><img src="'+esc(grande?hi(u):u)+'" data-i="'+i+'" loading="lazy" alt="'+esc(it.titulo)+' '+(i+1)+'" referrerpolicy="no-referrer"></div>').join('')+'</div>'
    +'<span class="pill"><b data-cur>1</b>/'+im.length+'</span>'
    +(im.length>1?'<button class="ar p" data-d="-1" aria-label="Anterior">'+CHL+'</button><button class="ar n" data-d="1" aria-label="Siguiente">'+CHR+'</button>':'')
    +'</div>';
}

const LAYOUTS={
  flat2x2:{u:[14,10],  cols:2, rows:2, alto:6.5, nom:'4 acostados en 2×2'},
  stack2 :{u:[14,10],  cols:1, rows:2, alto:13,  nom:'2 capas de 2', capas:2},
  edge4  :{u:[14,6.5], cols:2, rows:2, alto:10,  nom:'4 de canto, como libros'}
};
const P2=()=>M.proxy;
const fleteEUB=g=>{const P=P2();return g<=1000?P.eub.g1000:Math.round(P.eub.g1000+(g-1000)/1000*(P.eub.g2000-P.eub.g1000));};
const n2=v=>Math.round(v*100)/100;
function costoSB(it){
  const P=P2(); if(!P||!it.sb||it.sb==='na') return null;
  const e1=n2(it.precio_cny+P.comision_cny);
  if(it.sb==='bloqueado') return {estado:'bloqueado', e1};
  const f = it.sb==='expres' ? P.expres.desde_cny : fleteEUB(it.peso_g||1000);
  return {estado:it.sb, e1, flete:f, total:n2(e1+f),
          dias: it.sb==='expres'?P.expres.dias:P.eub.dias};
}
const volumen=it=>Math.round(it.interior[0]*it.interior[1]*it.interior[2]);

function diagramaPad(it){
  const [W,D]=it.pad, mb=M.referencias.macbook, rt=M.referencias.raton, m=2;
  const okD = D >= mb.ancho + m;
  const libreDer = +(W - mb.largo - m*2).toFixed(1);
  const libreFre = +(D - mb.ancho - m).toFixed(1);
  const okR = libreDer >= rt.largo + 6;
  const col = (okD&&okR) ? '#007600' : '#c45500';
  const s=Math.min(400/W, 210/D), P=30, px=n=>(n*s).toFixed(1);
  const lx=P+m*s, ly=P+m*s;
  const rx=lx+mb.largo*s+((W-mb.largo-m*2-rt.largo)/2)*s, ry=ly+(mb.ancho-rt.ancho)/2*s;
  const F="'Source Sans 3',sans-serif";
  const svg='<svg viewBox="0 0 '+(W*s+P*2).toFixed(0)+' '+(D*s+P*2+14).toFixed(0)+'" width="'+(W*s+P*2).toFixed(0)+'">'
    +'<rect x="'+P+'" y="'+P+'" width="'+px(W)+'" height="'+px(D)+'" fill="rgba(15,17,17,.02)" stroke="'+col+'" stroke-width="2" rx="5"/>'
    +'<rect x="'+lx.toFixed(1)+'" y="'+ly.toFixed(1)+'" width="'+px(mb.largo)+'" height="'+px(mb.ancho)+'" fill="rgba(44,95,138,.08)" stroke="#2c5f8a" stroke-width="1.5" rx="3"/>'
    +'<text x="'+(lx+mb.largo*s/2).toFixed(1)+'" y="'+(ly+mb.ancho*s/2+4).toFixed(1)+'" text-anchor="middle" font-family="'+F+'" font-size="10" fill="#2c5f8a">MacBook 13"</text>'
    +'<rect x="'+rx.toFixed(1)+'" y="'+ry.toFixed(1)+'" width="'+px(rt.largo)+'" height="'+px(rt.ancho)+'" fill="rgba(196,85,0,.08)" stroke="#c45500" stroke-width="1.5" rx="7"/>'
    +'<text x="'+(rx+rt.largo*s/2).toFixed(1)+'" y="'+(ry+rt.ancho*s+13).toFixed(1)+'" text-anchor="middle" font-family="'+F+'" font-size="9" fill="#c45500">ratón</text>'
    +'<text x="'+(P+W*s/2).toFixed(1)+'" y="'+(P-10)+'" text-anchor="middle" font-family="'+F+'" font-size="11" fill="#565959">'+W+' cm</text>'
    +'<text x="'+(P-11)+'" y="'+(P+D*s/2).toFixed(1)+'" text-anchor="middle" font-family="'+F+'" font-size="11" fill="#565959" transform="rotate(-90 '+(P-11)+' '+(P+D*s/2).toFixed(1)+')">'+D+' cm</text>'
    +'<line x1="'+lx.toFixed(1)+'" y1="'+(ly+mb.ancho*s+9).toFixed(1)+'" x2="'+(P+W*s-m*s).toFixed(1)+'" y2="'+(ly+mb.ancho*s+9).toFixed(1)+'" stroke="#6f7373" stroke-width="1" stroke-dasharray="3 3"/>'
    +'<text x="'+(P+W*s/2).toFixed(1)+'" y="'+(P+D*s+20).toFixed(1)+'" text-anchor="middle" font-family="'+F+'" font-size="10" fill="#6f7373">'+libreFre+' cm libres delante del portátil</text>'
    +'</svg>';
  const t = (okD&&okR)
    ? 'ENTRA — quedan '+libreDer+' cm a la derecha del MacBook para mover el ratón y '+libreFre+' cm delante para apoyar la muñeca.'
    : (!okD ? 'JUSTO — el fondo de '+D+' cm apenas cubre los '+mb.ancho+' del MacBook: no queda sitio para la muñeca.'
            : 'JUSTO — solo '+libreDer+' cm a la derecha: el ratón cabe pero casi sin recorrido.');
  return '<div class="diag"><h4>Anexo técnico · encaje a escala · '+it.grosor_mm+' mm de grosor</h4>'
    +'<p class="verd" style="color:'+col+'">'+t+'</p>'+svg+'</div>';
}

function diagrama(it){
  const [L,W,H]=it.interior, a=M.referencias.adaptador;
  const Y=LAYOUTS[it.encaje.layout]||LAYOUTS.flat2x2;
  const fw=Y.cols*Y.u[0], fh=Y.rows*Y.u[1], alto=Y.alto, sw=L-fw, sh=W-fh;
  const PA=[[a.largo,a.ancho,a.alto],[a.largo,a.alto,a.ancho],[a.ancho,a.largo,a.alto],
            [a.ancho,a.alto,a.largo],[a.alto,a.largo,a.ancho],[a.alto,a.ancho,a.largo]];
  const como=q=>q[2]<=a.alto?'acostado':'de canto';
  let ad=null;
  for(const q of PA) if(q[0]<=sw&&q[1]<=W&&q[2]<=H){ ad={x:fw+(sw-q[0])/2,y:(W-q[1])/2,w:q[0],h:q[1],z:q[2],note:como(q)+' en la franja lateral'}; break; }
  if(!ad) for(const q of PA) if(q[0]<=L&&q[1]<=sh&&q[2]<=H){ ad={x:(L-q[0])/2,y:fh+(sh-q[1])/2,w:q[0],h:q[1],z:q[2],note:como(q)+' en la franja de atrás'}; break; }
  if(!ad) for(const q of PA) if(q[0]<=L&&q[1]<=W&&q[2]<=H-alto){ ad={above:1,z:q[2],note:'encima, en el hueco de la tapa'}; break; }
  const ok=fw<=L&&fh<=W&&alto<=H&&ad, col=ok?'#007600':'#b12704';
  const s=Math.min(380/L,215/W), P=30, px=n=>(n*s).toFixed(1);
  const F="'Source Sans 3',sans-serif";
  let mn='';
  for(let r=0;r<Y.rows;r++)for(let c=0;c<Y.cols;c++){
    const x=P+c*Y.u[0]*s, y=P+r*Y.u[1]*s;
    mn+='<rect x="'+x.toFixed(1)+'" y="'+y.toFixed(1)+'" width="'+px(Y.u[0])+'" height="'+px(Y.u[1])+'" fill="rgba(44,95,138,.08)" stroke="#2c5f8a" stroke-width="1.5" rx="3"/>'
      +'<text x="'+(x+Y.u[0]*s/2).toFixed(1)+'" y="'+(y+Y.u[1]*s/2+4).toFixed(1)+'" text-anchor="middle" font-family="'+F+'" font-size="10" fill="#2c5f8a">'+(Y.capas===2?'×2':'mando')+'</text>';
  }
  const adr=(ad&&!ad.above)?'<rect x="'+(P+ad.x*s).toFixed(1)+'" y="'+(P+ad.y*s).toFixed(1)+'" width="'+px(ad.w)+'" height="'+px(ad.h)+'" fill="rgba(196,85,0,.08)" stroke="#c45500" stroke-width="1.5" rx="2"/><text x="'+(P+(ad.x+ad.w/2)*s).toFixed(1)+'" y="'+(P+(ad.y+ad.h/2)*s+4).toFixed(1)+'" text-anchor="middle" font-family="'+F+'" font-size="9" fill="#c45500">adapt.</text>':'';
  const planta='<svg viewBox="0 0 '+(L*s+P*2).toFixed(0)+' '+(W*s+P*2+14).toFixed(0)+'" width="'+(L*s+P*2).toFixed(0)+'">'
    +'<rect x="'+P+'" y="'+P+'" width="'+px(L)+'" height="'+px(W)+'" fill="rgba(15,17,17,.02)" stroke="'+col+'" stroke-width="2" rx="4"/>'+mn+adr
    +'<text x="'+(P+L*s/2).toFixed(1)+'" y="'+(P-10)+'" text-anchor="middle" font-family="'+F+'" font-size="11" fill="#565959">'+L+' cm</text>'
    +'<text x="'+(P-11)+'" y="'+(P+W*s/2).toFixed(1)+'" text-anchor="middle" font-family="'+F+'" font-size="11" fill="#565959" transform="rotate(-90 '+(P-11)+' '+(P+W*s/2).toFixed(1)+')">'+W+' cm</text>'
    +'<text x="'+(P+L*s/2).toFixed(1)+'" y="'+(P+W*s+20).toFixed(1)+'" text-anchor="middle" font-family="'+F+'" font-size="10" fill="#6f7373">planta</text></svg>';
  const s2=Math.min(380/L,110/H), Q=30, hb=alto*s2, ah=(ad&&ad.z?ad.z:a.alto)*s2;
  const adA=ad?(ad.above
    ?'<rect x="'+(Q+4)+'" y="'+(Q+H*s2-hb-ah-3).toFixed(1)+'" width="'+((ad&&ad.w?ad.w:a.largo)*s2).toFixed(1)+'" height="'+ah.toFixed(1)+'" fill="rgba(196,85,0,.08)" stroke="#c45500" stroke-width="1.5" rx="2"/>'
    :'<rect x="'+(Q+fw*s2+4).toFixed(1)+'" y="'+(Q+H*s2-ah-2).toFixed(1)+'" width="'+((ad&&ad.w?ad.w:a.largo)*s2).toFixed(1)+'" height="'+ah.toFixed(1)+'" fill="rgba(196,85,0,.08)" stroke="#c45500" stroke-width="1.5" rx="2"/>'):'';
  const alz='<svg viewBox="0 0 '+(L*s2+Q*2).toFixed(0)+' '+(H*s2+Q*2+14).toFixed(0)+'" width="'+(L*s2+Q*2).toFixed(0)+'">'
    +'<rect x="'+Q+'" y="'+Q+'" width="'+(L*s2).toFixed(1)+'" height="'+(H*s2).toFixed(1)+'" fill="rgba(15,17,17,.02)" stroke="'+col+'" stroke-width="2" rx="4"/>'
    +'<rect x="'+(Q+2)+'" y="'+(Q+H*s2-hb-2).toFixed(1)+'" width="'+(fw*s2).toFixed(1)+'" height="'+hb.toFixed(1)+'" fill="rgba(44,95,138,.08)" stroke="#2c5f8a" stroke-width="1.5" rx="3"/>'
    +'<text x="'+(Q+fw*s2/2).toFixed(1)+'" y="'+(Q+H*s2-hb/2+4).toFixed(1)+'" text-anchor="middle" font-family="'+F+'" font-size="10" fill="#2c5f8a">'+alto+' cm</text>'+adA
    +'<text x="'+(Q+L*s2+11)+'" y="'+(Q+H*s2/2+4).toFixed(1)+'" font-family="'+F+'" font-size="11" fill="#565959">'+H+' cm</text>'
    +'<text x="'+(Q+L*s2/2).toFixed(1)+'" y="'+(Q+H*s2+20).toFixed(1)+'" text-anchor="middle" font-family="'+F+'" font-size="10" fill="#6f7373">alzado</text></svg>';
  const t=ok?('ENTRA — '+Y.nom+': ocupan '+fw+' × '+fh+' × '+alto+' cm. Adaptador '+ad.note+'. Sobran '+(L-fw).toFixed(1)+' / '+(W-fh).toFixed(1)+' / '+(H-alto).toFixed(1)+' cm.')
    :('NO ENTRA en esta disposición.');
  return '<div class="diag"><h4>Anexo técnico · planta y alzado, a escala · '+volumen(it).toLocaleString('es')+' cm³</h4><p class="verd" style="color:'+col+'">'+t+'</p>'+planta+alz+'</div>';
}

function bloqueSB(it){
  const c=costoSB(it), P=P2(); if(!c) return '';
  if(c.estado==='bloqueado')
    return '<div class="sb"><h4>Costo vía '+esc(P.nombre)+'</h4>'
      +'<span class="aviso-bloq">No disponible vía '+esc(P.nombre)+'</span>'
      +'<p class="obs rojo">Superbuy NO puede comprar este artículo. Al pegar su enlace responde '
      +'<em>"Unable to Purchase: restricted by customs and security check policies"</em>. Verificado el '+P.verificado+'.</p></div>';
  const fila=(k,v)=>'<tr><td>'+k+'</td><td>'+v+'</td></tr>';
  const pct=Math.round(it.precio_cny/c.total*100);
  const ojo=c.estado==='expres';
  return '<div class="sb"><h4>Costo vía '+esc(P.nombre)+' — hasta el flete internacional</h4>'
    +(ojo?'<span class="aviso-expres">Solo courier exprés</span>':'')
    +'<table>'
    + fila('Producto en Goofish','¥'+it.precio_cny)
    + fila('Envío dentro de China', it.envio==='incluido'?'¥0':'a confirmar')
    + fila('Comisión '+esc(P.nombre)+' (por ítem)','¥'+P.comision_cny)
    + fila('Flete '+(ojo?'exprés':'EUB postal')+(it.peso_g?' · '+it.peso_g+' g':'')+' · '+c.dias+' días','¥'+c.flete)
    + '<tr class="tot"><td>Total que cotiza '+esc(P.nombre)+'</td><td>¥'+c.total+'  (US$ '+usd(c.total)+')</td></tr>'
    + '</table>'
    + (ojo
        ? '<p class="obs azul">No cabe en el correo económico: EUB limita el lado más largo a '+P.eub.limite_lado_cm+' cm y este artículo enrollado mide más. Obliga a courier exprés, que además cobra por peso volumétrico. Por eso el flete casi se duplica.</p>'
        : '<p class="obs">El producto es el '+pct+'% del total. El flete es el resto.</p>')
    + '<p class="obs">Estimación con tarifas leídas de la calculadora oficial de '+esc(P.nombre)+' el '+P.verificado+'. El flete definitivo lo fija la factura del transportista y se ajusta después.</p>'
    + '<p class="obs">Hasta aquí llega la cotización del proxy: es lo que '+esc(P.nombre)+' te cobra al pegar el enlace. Aranceles, IVA y cualquier gasto de aduana en El Salvador van aparte y no están contados.</p></div>';
}

function tarjeta(it){
  const no = it.estado==='descartado', oc = ocEs(it.id);
  return '<article class="prod'+(no?' no':'')+(oc?' oculto':'')+'" data-open="'+it.id+'">'
    +(no?'<span class="tagno">Descartado</span>':'')+carr(it,'ph')+'<div class="body">'
    +'<h3 class="tt">'+esc(it.titulo)+'</h3>'
    +(no?'':(it.imagenes&&it.imagenes.length)
        ? '<p class="vcard">'+VCHK+' Ficha y fotos revisadas</p>'
        : '<p class="vcard parcial">'+VCHK+' Ficha revisada · sin fotos</p>')
    +'<p class="dm">'+(it.interior?it.interior.join('&times;')+' cm <span class="vol">'+volumen(it).toLocaleString('es')+' cm&sup3;</span>':esc(it.spec||''))+'</p>'
    +(function(){const c=costoSB(it); if(!c) return '';
      return c.estado==='bloqueado'
        ? '<p class="sv mal"><b>Superbuy no lo puede comprar</b></p>'
        : '<p class="sv"><b>US$ '+usd(c.total)+'</b> vía '+esc(P2().nombre)+'</p>';})()
    +'<p class="rs">'+esc(it.resumen||it.motivo||it.descripcion||'')+'</p>'
    +'<div class="pr"><span class="y">&yen;'+it.precio_cny+'</span><span class="d">(US$ '+usd(it.precio_cny)+')</span>'
    +(function(){const r=rangoVar(it); if(!r) return '';
      return '<span class="opc">'+r.n+' opciones · ¥'+r.min+'–'+r.max+'</span>';})()
    +(it.envio==='incluido'?'<span class="free">envío incl.</span>':'')+'</div>'
    +'<div class="acts"><button class="btn neutro" data-ver="'+it.id+'">Detalle</button>'
    +'<a class="btn go" href="'+esc(it.url)+'" target="_blank" rel="noopener" data-stop>Goofish</a>'
    +'<button class="btn cp" data-copy="'+esc(it.url)+'" data-corto title="Copiar link de Goofish" aria-label="Copiar link de Goofish">'+ICO+'</button>'
    +(oc ? '<button class="btn re" data-rest="'+it.id+'">Restaurar</button>'
         : editando ? '<button class="btn oc" data-oc="'+it.id+'">Ocultar</button>' : '')
    +'</div>'
    +'</div></article>';
}

const VX='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
function detalleNo(it){
  return '<button class="x" id="cx" aria-label="Cerrar">'+VX+'</button>'+carr(it,'mph',1)+'<div class="mb">'
    +'<h2>'+esc(it.titulo)+'</h2>'
    +'<p class="vbadge mal">'+VX+' Descartado en la inspección</p>'
    +'<div class="cajaprecio"><span class="y">&yen;'+it.precio_cny+'</span><span class="d">(US$ '+usd(it.precio_cny)+')</span></div>'
    +'<div class="motivo"><h4>Por qué no pasó</h4><p>'+esc(it.motivo)+'</p></div>'
    +'<a class="btn go" style="display:inline-block;padding:10px 18px" href="'+esc(it.url)+'" target="_blank" rel="noopener">Ver en Goofish &rarr;</a>'
    +'<button class="cplink" data-copy="'+esc(it.url)+'">'+ICO+' Copiar link</button>'
    +(ocEs(it.id)
        ? '<button class="cplink" data-rest="'+it.id+'">Restaurar este ítem</button>'
        : '<button class="cplink" data-oc="'+it.id+'">Ocultar este ítem</button>')
    +'<div class="raw">'+esc(it.url)+'</div></div>';
}

function rangoVar(it){
  const p=(it.variantes||[]).map(v=>v.precio_cny).filter(Boolean);
  if(p.length<2) return null;
  const min=Math.min.apply(null,p), max=Math.max.apply(null,p);
  return min===max?null:{min:min,max:max,n:it.variantes.length};
}

function bloqueGym(it){
  let h='';
  if(it.peso_txt){
    const nd=/^No publicado/.test(it.peso_txt);
    h+='<div class="peso'+(nd?' nd':'')+'"><span>Peso del producto</span><b>'
      +esc(it.peso_txt)+(it.peso_nota?' <em>('+esc(it.peso_nota)+')</em>':'')
      +(nd?' <em>— pedíselo antes de cotizar flete</em>':'')+'</b></div>';
  }
  if(it.funciones && it.funciones.length){
    h+='<div class="fnx"><h4>Funciones <b>'+it.funciones.length+'</b> <span class="fo">'
      +esc(it.funciones_origen||'declaradas')+'</span></h4><ol>'
      +it.funciones.map(f=>'<li>'+esc(f)+'</li>').join('')+'</ol></div>';
  } else if(it.funciones_origen){
    h+='<div class="fnx nd"><h4>Funciones <span class="fo">'+esc(it.funciones_origen)+'</span></h4>'
      +'<p>El anuncio no enumera ninguna. Preguntáselas al vendedor antes de pagar.</p></div>';
  }
  if(it.variantes && it.variantes.length){
    const sku = it.variantes_tipo==='sku';
    h+='<div class="vrx'+(sku?' sku':' chat')+'">'
      +'<h4>'+(sku?'Opciones del mismo anuncio':'Configuraciones que cotiza el vendedor')
      +' <b>'+it.variantes.length+'</b></h4>'
      +'<p class="vq">'+(sku
          ? 'Goofish las muestra en un selector dentro de este mismo producto'
            +(it.variantes_campo?' — campo <em>'+esc(it.variantes_campo)+'</em>':'')
            +'. El precio cambia según cuál elijas.'
          : 'No son un selector de Goofish: '+esc(it.variantes_campo||'el vendedor las describe en el texto')
            +'. Hay que pedirle precio por chat.')
      +'</p><ul>'
      +it.variantes.map(v=>'<li'+(v.base?' class="base"':'')+'><span>'+esc(v.nombre)
        +(v.base?'<i>precio publicado</i>':'')+'</span><b>'
        +(v.precio_cny?'¥'+v.precio_cny+' · US$ '+usd(v.precio_cny):esc(v.nota||'a cotizar'))
        +'</b></li>').join('')
      +'</ul></div>';
  }
  if(it.carga_pesada && M.proxy){
    const cp=M.proxy.carga_pesada||{};
    h+='<div class="sb"><h4>Costo vía '+esc(M.proxy.nombre)+'</h4>'
      +'<span class="aviso-bloq">Fuera del correo económico</span>'
      +'<p class="obs rojo">Este equipo excede el límite de EUB: '+M.proxy.eub.limite_peso_g+' g y US$'
      +M.proxy.eub.limite_valor_usd+'. Va por '+esc(cp.servicio||'carga pesada')+' ('+esc(cp.modo||'marítimo')
      +', desde '+(cp.desde_kg||30)+' kg), que '+esc(M.proxy.nombre)+' no tarifa en línea: hay que pedir cotización '
      +'con el peso bruto embalado y los metros cúbicos, y contestan en '+esc(cp.respuesta||'3 días hábiles')+'.</p>'
      +'<p class="obs">Aranceles, IVA y aduana en El Salvador van aparte y no están contados.</p></div>';
  }
  return h;
}

function detalle(it){
  if(it.estado==='descartado') return detalleNo(it);
  const v=it.vendedor||{};
  const vend=(v.nombre&&v.nombre!=='no declarado en la ficha')
    ? esc(v.nombre)+' · '+esc(v.ciudad)+(Number(v.ventas)>0?' · '+Number(v.ventas).toLocaleString('es')+' ventas':'')+' · '+esc(v.reputacion)
    : 'no declarado en el anuncio';
  return '<button class="x" id="cx" aria-label="Cerrar">'+VX+'</button>'+carr(it,'mph',1)+'<div class="mb">'
    +'<h2>'+esc(it.titulo)+'</h2><p class="zh">'+esc(it.titulo_zh)+'</p>'
    +'<p class="vbadge'+((it.imagenes&&it.imagenes.length)?'':' parcial')+'">'+VCHK+' '
      +((it.imagenes&&it.imagenes.length)?'Ficha y fotos del anuncio revisadas':'Ficha del anuncio revisada · sin fotos cargadas')+'</p>'
    +'<div class="cajaprecio"><span class="y">&yen;'+it.precio_cny+'</span><span class="d">(US$ '+usd(it.precio_cny)+')</span>'
    +(it.moneda_origen==='USD'?'<span class="d orig">precio de lista US$ '+it.precio_origen+' en '+esc(it.tienda||'Amazon')+'</span>':'')
    +(function(){const r=rangoVar(it); if(!r) return '';
      return '<span class="d orig">es una de '+r.n+' opciones · el anuncio va de ¥'+r.min+' a ¥'+r.max
        +' (US$ '+usd(r.min)+'–'+usd(r.max)+')</span>';})()
    +(function(){const c=costoSB(it); return (c&&c.estado!=='bloqueado')?'<span class="d via"><b>US$ '+usd(c.total)+'</b> total vía '+esc(P2().nombre)+'</span>':'';})()
    +(it.envio==='incluido'?'<span class="free">Envío incluido dentro de China</span>':'')+'</div>'
    +'<div class="sp">'
      +(it.interior?'<div><div class="k">Interior</div><div class="v mono">'+it.interior.join(' × ')+' cm · '+volumen(it).toLocaleString('es')+' cm³</div></div>'
                          :'<div><div class="k">Características</div><div class="v">'+esc(it.spec||'')+'</div></div>')
      +'<div><div class="k">Material</div><div class="v">'+esc(it.material)+'</div></div>'
      +'<div><div class="k">Color</div><div class="v">'+esc(it.color)+'</div></div>'
      +'<div><div class="k">Condición</div><div class="v">'+esc(it.condicion)+'</div></div>'
      +'<div><div class="k">Vendedor</div><div class="v" style="font-size:11.5px">'+vend+'</div></div>'
    +'</div>'+(it.interior_detalle?'<p class="fine">'+esc(it.interior_detalle)+'</p>':'')
    +'<p class="dsc">'+esc(it.descripcion)+'</p>'+(it.pad?diagramaPad(it):(it.interior&&it.encaje)?diagrama(it):'')+bloqueGym(it)+bloqueSB(it)
    +'<div class="lists">'
      +'<div class="acta-lista v"><h4>Verificado en las fotos</h4><ul>'+it.verificacion.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></div>'
      +'<div class="acta-lista r"><h4>Reservas</h4><ul>'+it.reservas.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></div>'
    +'</div>'
    +'<a class="btn go" style="display:inline-block;padding:10px 18px" href="'+esc(it.url)+'" target="_blank" rel="noopener">Ver en Goofish &rarr;</a>'
    +'<button class="cplink" data-copy="'+esc(it.url)+'">'+ICO+' Copiar link</button>'
    +(ocEs(it.id)
        ? '<button class="cplink" data-rest="'+it.id+'">Restaurar este ítem</button>'
        : '<button class="cplink" data-oc="'+it.id+'">Ocultar este ítem</button>')
    +'<div class="raw">'+esc(it.url)+'</div></div>';
}

function activarCarr(root){
  root.querySelectorAll('[data-c]').forEach(c=>{
    const tr=c.querySelector('.tr'), cur=c.querySelector('[data-cur]');
    const i=()=>Math.round(tr.scrollLeft/tr.clientWidth);
    c.querySelectorAll('.ar').forEach(b=>b.onclick=e=>{
      e.stopPropagation(); const n=tr.children.length;
      tr.scrollTo({left:((i()+Number(b.dataset.d)+n)%n)*tr.clientWidth});
    });
    tr.addEventListener('scroll',()=>{if(cur)cur.textContent=i()+1;},{passive:true});
  });
}

/* ---------- ítems ocultos (solo en este dispositivo) ---------- */
const OC_KEY='ocultos_v1';
let OC_FALLA=false;
let OCULTOS=(function(){ try{ const a=JSON.parse(localStorage.getItem(OC_KEY)||'[]');
  return Array.isArray(a)?a.filter(x=>typeof x==='string'):[]; }catch(_){ return []; } })();
function ocGuardar(){ try{ localStorage.setItem(OC_KEY,JSON.stringify(OCULTOS)); OC_FALLA=false; }
  catch(_){ OC_FALLA=true; } }
const ocEs=id=>OCULTOS.indexOf(id)>=0;
function ocAdd(id){ if(!ocEs(id)){ OCULTOS.push(id); ocGuardar(); } }
function ocDel(id){ const i=OCULTOS.indexOf(id); if(i>=0){ OCULTOS.splice(i,1); ocGuardar(); } }
function ocTodos(){ return C.items.concat(C.descartados||[]).filter(x=>ocEs(x.id)); }
function ocPurgar(){ const v={}; C.items.concat(C.descartados||[]).forEach(x=>v[x.id]=1);
  const n=OCULTOS.filter(id=>v[id]); if(n.length!==OCULTOS.length){ OCULTOS=n; ocGuardar(); } }
function ocTexto(){ return 'Ocultar permanentemente del catálogo:\n'
  + ocTodos().map(x=>'- '+x.id+'  ('+x.titulo+')').join('\n'); }
let editando=false;

const ORDENES=[
  {v:'precio_asc',  t:'Precio: de menor a mayor'},
  {v:'precio_desc', t:'Precio: de mayor a menor'},
  {v:'vol',         t:'Tamaño: más compacto primero'}
];
const TOPES=[0,20,30,40,60];

function controles(vis,vistaOc,cat){
  const viv=C.items.filter(i=>!ocEs(i.id));
  const lk=(v,txt,n,ik)=>'<button class="navlink'+(filtro===v?' on':'')+'" data-cat="'+v+'">'+icoCat(ik||v)+'<span>'+esc(txt)+' ('+n+')</span></button>';
  const nav='<nav class="subnav" aria-label="Categorías"><div class="subnav-fila">'
    + lk('todos','Todo',viv.length)
    + C.categorias.map(c=>lk(c.id,c.tab||c.nombre,viv.filter(i=>i.categoria===c.id).length,c.icono)).join('')
    + (OCULTOS.length?lk('__ocultos','Ocultos por mí',OCULTOS.length):'')
    +'</div></nav>';
  const activos = (pmax?1:0) + (orden!=='vol'?1:0);
  const btn='<button class="bsec'+(panel?' abierto':'')+'" id="fbtn">'
    +(activos?'<span class="pt"></span>':'')+'Filtros'+(activos?' ('+activos+')':'')+'</button>';
  const eb='<button class="bsec'+(editando?' abierto':'')+'" id="ebtn">'+(editando?'Listo':'Editar')+'</button>';
  const res = vistaOc ? '' :
    '<div class="resbar"><span class="cuenta"><b>'+vis.length+'</b> resultado'+(vis.length===1?'':'s')+'</span>'
    +'<span class="objetivo">'+esc(cat?cat.objetivo:'Todo lo verificado, en todas las categorías.')+'</span>'
    +'<span class="accs">'+btn+eb+'</span></div>';
  const resOc = vistaOc ? '<div class="resbar"><span class="cuenta"><b>'+vis.length+'</b> ítem'+(vis.length===1?'':'s')+' oculto'+(vis.length===1?'':'s')+'</span><span class="accs">'+btn+eb+'</span></div>' : '';
  let pan='';
  if(panel){
    pan='<div class="panel">'
      +'<h5>Ordenar por</h5><div class="opts">'
      + ORDENES.map(o=>'<button class="opt'+(orden===o.v?' on':'')+'" data-ord="'+o.v+'"><span class="mk"></span>'+o.t+'</button>').join('')
      +'</div>'
      +'<h5 style="margin-top:16px">Precio máximo</h5><div class="chips">'
      + TOPES.map(v=>'<button class="chip2'+(pmax==v?' on':'')+'" data-tope="'+v+'">'
          +(v?'¥'+v+' <span class="cu">(US$ '+usd(v)+')</span>':'Sin límite')+'</button>').join('')
      +'</div>'
      + (activos?'<button class="limpiar" id="limpiar">Quitar filtros</button>':'')
      +'</div>';
  }
  return nav+(vistaOc?resOc:res)+pan;
}

let panel=false;
let pmax=0, orden='vol';
let filtro='todos';
function pintar(){
  const cat=C.categorias.find(c=>c.id===filtro);
  const ordenar=arr=>arr.slice().sort((a,b)=>
    orden==='precio_asc'  ? a.precio_cny-b.precio_cny :
    orden==='precio_desc' ? b.precio_cny-a.precio_cny :
    ((a.interior?volumen(a):1e9)-(b.interior?volumen(b):1e9))||a.precio_cny-b.precio_cny);
  const vistaOc = filtro==='__ocultos';
  let vis = vistaOc
    ? ocTodos()
    : C.items.filter(i=>!ocEs(i.id)&&(filtro==='todos'||i.categoria===filtro)&&(!pmax||i.precio_cny<=pmax));
  vis = ordenar(vis);
  document.getElementById('app').innerHTML=
    '<header class="cabecera"><div class="cab-fila">'
    +'<h1 class="logo">Catálogo<span class="tag">compras verificadas en Goofish</span></h1>'
    +'<div class="cab-datos">Tasa <b>1 ¥ = US$ '+M.tasa_cny_usd+'</b> · '+M.tasa_fecha+'<br>fuente única: goofish.com</div>'
    +'</div></header>'
    +controles(vis,vistaOc,cat)
    +(vistaOc
        ? '<div class="ocbar">'
          +(OC_FALLA?'<p class="ocaviso">No se pudo guardar en este navegador (modo privado o almacenamiento bloqueado). Lo que ocultes se pierde al recargar.</p>':'')
          +'<p>Estos <b>'+vis.length+'</b> ítem'+(vis.length===1?'':'s')+' los ocultaste vos. Se guardan <b>solo en este dispositivo</b>: si reinstalás la app o borrás los datos del sitio, vuelven a aparecer. Para que sea permanente, copiá la lista y pegámela en el chat.</p>'
          +'<div class="hb"><button class="btn neutro" data-copy="'+esc(ocTexto())+'">Copiar lista para Claude</button>'
          +'<button class="btn re" id="restall">Restaurar todos</button></div></div>'
        : '')
    +(function(){
        const P=M.proxy; if(!P||vistaOc) return '';
        const el=vis.filter(i=>i.sb==='eub'&&i.peso_g).slice().sort((x,y)=>y.peso_g-x.peso_g);
        if(el.length<2) return '';
        const prod=n2(el.reduce((a,i)=>a+i.precio_cny,0));
        const com=P.comision_cny*el.length;
        const peso=el.reduce((a,i)=>a+i.peso_g,0);
        const paq=[];                                   // reparto voraz en cajas de <=2 kg
        el.forEach(i=>{ const c=paq.find(x=>x.g+i.peso_g<=P.eub.limite_peso_g);
                        if(c){c.g+=i.peso_g;} else paq.push({g:i.peso_g}); });
        const fl=paq.reduce((a,x)=>a+fleteEUB(x.g),0);
        const juntos=n2(prod+com+fl);
        const sueltos=n2(el.reduce((a,i)=>a+costoSB(i).total,0));
        const ahorro=n2(sueltos-juntos);
        if(ahorro<=0) return '';
        return '<details class="carro"><summary><b>Comprarlos juntos sale más barato:</b> ahorro de <b>US$ '+usd(ahorro)+'</b> ('+el.length+' artículos, '+paq.length+' paquete'+(paq.length>1?'s':'')+')</summary><p>'
          +esc(P.nombre)+' consolida varios ítems en un paquete sin costo. Los <b>'+el.length+'</b> artículos que viajan por correo económico pesan <b>'+peso+' g</b> y entran en <b>'+paq.length+' paquete'+(paq.length>1?'s':'')+'</b> de hasta '+(P.eub.limite_peso_g/1000)+' kg: '
          +'<b>US$ '+usd(juntos)+'</b> en total, contra <b>US$ '+usd(sueltos)+'</b> comprados uno por uno. '
          +'La comisión de ¥'+P.comision_cny+' se paga igual por cada ítem; lo que se reparte es el flete.</p></details>';
      })()
    +((!vistaOc&&cat&&cat.busquedas&&cat.busquedas.length)
      ? '<details class="busq"><summary>Buscar por mi cuenta en Goofish ('+cat.busquedas.length+' términos)</summary>'
        +'<p class="ayuda">Tocá un término y se copia en chino. Pegálo en el buscador de goofish.com.</p>'
        +'<div class="terms">'+cat.busquedas.map(t=>
            '<button class="term" data-zh="'+esc(t.zh)+'">'+esc(t.zh)+'<span class="en">'+esc(t.en)+'</span></button>').join('')
        +'</div></details>'
      : '')
    +'<div class="grid">'+(vis.length?vis.map(tarjeta).join(''):(vistaOc?'<div class="empty">No hay ítems ocultos.</div>':'<div class="empty">Nada coincide con estos filtros.</div>'))+'</div>'
    +(function(){
        if(vistaOc) return '';
        const d=ordenar(C.descartados.filter(x=>!ocEs(x.id)&&(filtro==='todos'||x.categoria===filtro)&&(!pmax||x.precio_cny<=pmax)));
        if(!d.length) return '';
        return '<details class="rejs"><summary>Descartados y por qué ('+d.length+')</summary>'
          +'<div class="grid" style="margin-top:16px">'+d.map(tarjeta).join('')+'</div></details>';
      })()
    +'<footer>Miniaturas servidas por el CDN de Goofish. Última actualización: '+M.tasa_fecha+'.</footer>';
  activarCarr(document.getElementById('app'));
  document.querySelectorAll('[data-ver]').forEach(b=>b.onclick=e=>{e.stopPropagation();abrir(b.dataset.ver);});
  document.querySelectorAll('[data-stop]').forEach(a=>a.onclick=e=>e.stopPropagation());
  cablearCopias(document.getElementById('app'));
  cablearOcultar(document.getElementById('app'), false);
  const eb=document.getElementById('ebtn');
  if(eb) eb.onclick=()=>{ editando=!editando; pintar(); };
  const ra=document.getElementById('restall');
  if(ra) ra.onclick=()=>{ OCULTOS=[]; ocGuardar(); filtro='todos'; pintar(); window.scrollTo({top:0}); };
  document.querySelectorAll('[data-open]').forEach(c=>{
    c.onclick=()=>{ if(_arrastro) return; abrir(c.dataset.open); };
    const ph=c.querySelector('.ph');
    if(ph) ph.onclick=e=>{
      if(e.target.closest('.ar')) return;          // las flechas hacen lo suyo
      e.stopPropagation();                          // no abrir el detalle
      if(_arrastro) return;                         // fue un deslizamiento
      const it=C.items.find(x=>x.id===c.dataset.open)||C.descartados.find(x=>x.id===c.dataset.open);
      if(!it||!it.imagenes||!it.imagenes.length) return;
      const tr=ph.querySelector('.tr');
      const i=tr&&tr.clientWidth?Math.round(tr.scrollLeft/tr.clientWidth):0;
      verFoto(it.imagenes, Math.min(i, it.imagenes.length-1));
    };
  });
  document.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{
    filtro=b.dataset.cat||'todos'; pintar(); window.scrollTo({top:0}); });
  document.querySelectorAll('[data-zh]').forEach(b=>b.onclick=async e=>{
    e.stopPropagation();
    const zh=b.dataset.zh, orig=b.innerHTML;
    const ok=await alPortapapeles(zh);
    b.classList.add('ok');
    b.innerHTML = ok ? 'Copiado<span class="en">'+esc(zh)+'</span>'
                     : zh+'<span class="en">copialo a mano</span>';
    setTimeout(()=>{ b.classList.remove('ok'); b.innerHTML=orig; }, 1600);
  });

  const fb=document.getElementById('fbtn');
  if(fb) fb.onclick=()=>{ panel=!panel; pintar(); };
  document.querySelectorAll('[data-ord]').forEach(b=>b.onclick=()=>{ orden=b.dataset.ord; pintar(); });
  document.querySelectorAll('[data-tope]').forEach(b=>b.onclick=()=>{ pmax=Number(b.dataset.tope)||0; pintar(); });
  const lp=document.getElementById('limpiar');
  if(lp) lp.onclick=()=>{ pmax=0; orden='vol'; pintar(); };
}

// --- distinguir un toque de un arrastre, para que deslizar no abra el detalle ---
let _x0=0,_y0=0,_arrastro=false;
addEventListener('pointerdown',e=>{_x0=e.clientX;_y0=e.clientY;_arrastro=false;},{capture:true,passive:true});
addEventListener('pointermove',e=>{ if(Math.abs(e.clientX-_x0)>8||Math.abs(e.clientY-_y0)>8) _arrastro=true; },{capture:true,passive:true});

const ov=document.getElementById('ov'), md=document.getElementById('md');
const lb=document.getElementById('lb'), lbimg=document.getElementById('lbimg'), lbc=document.getElementById('lbc');
let lbFotos=[], lbIdx=0;
function verFoto(imgs,i){
  lbFotos=imgs.map(hi); lbIdx=i; lb.classList.add('on'); lb.classList.remove('zm');
  document.body.style.overflow='hidden'; pintarFoto();
}
function pintarFoto(){ lbimg.src=lbFotos[lbIdx]; lbc.textContent=(lbIdx+1)+' / '+lbFotos.length;
  lb.querySelector('.lbw').scrollTo(0,0);
  lb.querySelectorAll('.lba').forEach(b=>b.style.display=lbFotos.length>1?'flex':'none'); }
function moverFoto(d){ lbIdx=(lbIdx+d+lbFotos.length)%lbFotos.length; lb.classList.remove('zm'); pintarFoto(); }
function cerrarFoto(){ lb.classList.remove('on','zm'); lbimg.src=''; if(!ov.classList.contains('on')) document.body.style.overflow=''; }
lb.querySelectorAll('.lba').forEach(b=>b.onclick=e=>{e.stopPropagation();moverFoto(Number(b.dataset.ld));});
document.getElementById('lbx').onclick=cerrarFoto;
lbimg.onclick=e=>{ e.stopPropagation(); if(_arrastro) return; lb.classList.toggle('zm'); };
lb.onclick=e=>{ if(_arrastro) return; if(e.target===lb||e.target.classList.contains('lbw'))cerrarFoto(); };
// deslizar con el dedo dentro del visor
let _tx=null,_ty=null;
lb.addEventListener('touchstart',e=>{ if(e.touches.length===1){_tx=e.touches[0].clientX;_ty=e.touches[0].clientY;} },{passive:true});
lb.addEventListener('touchend',e=>{
  if(_tx===null||lb.classList.contains('zm')){_tx=null;return;}
  const dx=e.changedTouches[0].clientX-_tx, dy=e.changedTouches[0].clientY-_ty; _tx=null;
  if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)) moverFoto(dx<0?1:-1);
  else if(dy>70&&Math.abs(dy)>Math.abs(dx)) cerrarFoto();
},{passive:true});
// arrastrar con el ratón en escritorio
let _mx=null;
lb.addEventListener('pointerdown',e=>{ if(e.pointerType==='mouse'&&!lb.classList.contains('zm')) _mx=e.clientX; });
lb.addEventListener('pointerup',e=>{ if(_mx===null)return; const dx=e.clientX-_mx; _mx=null;
  if(Math.abs(dx)>60) moverFoto(dx<0?1:-1); });
function cablearOcultar(root, desdeModal){
  const tras=()=>{ if(desdeModal) cerrar();
    if(filtro==='__ocultos' && !OCULTOS.length) filtro='todos';
    pintar(); };
  root.querySelectorAll('[data-oc]').forEach(b=>b.onclick=e=>{
    e.stopPropagation(); if(_arrastro) return; ocAdd(b.dataset.oc); tras(); });
  root.querySelectorAll('[data-rest]').forEach(b=>b.onclick=e=>{
    e.stopPropagation(); if(_arrastro) return; ocDel(b.dataset.rest); tras(); });
}
function abrir(id){
  const it=C.items.find(x=>x.id===id)||C.descartados.find(x=>x.id===id); if(!it)return;
  md.innerHTML=detalle(it); ov.classList.add('on'); document.body.style.overflow='hidden';
  activarCarr(md); document.getElementById('cx').onclick=cerrar; md.scrollIntoView();
  cablearCopias(md);
  cablearOcultar(md, true);
  md.querySelectorAll('.mph .sl img').forEach(im=>im.onclick=e=>{
    e.stopPropagation(); verFoto(it.imagenes, Number(im.dataset.i)||0); });
}
function cerrar(){ov.classList.remove('on');md.innerHTML='';document.body.style.overflow='';}
ov.onclick=e=>{if(e.target===ov)cerrar();};
document.addEventListener('keydown',e=>{
  if(lb.classList.contains('on')){
    if(e.key==='Escape')cerrarFoto();
    if(e.key==='ArrowRight')moverFoto(1);
    if(e.key==='ArrowLeft')moverFoto(-1);
    return;
  }
  if(e.key==='Escape')cerrar();
});
/* ---------- PWA: instalado, links externos ---------- */
const APP_STANDALONE = (function(){
  try{ return window.matchMedia('(display-mode: standalone)').matches
       || window.matchMedia('(display-mode: minimal-ui)').matches
       || window.navigator.standalone === true; }catch(_){ return false; }
})();
const ES_IOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
if(APP_STANDALONE) document.documentElement.classList.add('app');

const hoja=document.getElementById('hoja'), hojau=document.getElementById('hojau'),
      hojaa=document.getElementById('hojaa');
function abrirHoja(u){ hojau.textContent=u; hojaa.href=u; hoja.classList.add('on'); }
function cerrarHoja(){ hoja.classList.remove('on'); }
document.getElementById('hojax').onclick=cerrarHoja;
hoja.onclick=e=>{ if(e.target===hoja) cerrarHoja(); };
hojaa.onclick=()=>setTimeout(cerrarHoja,150);
document.getElementById('hojac').onclick=async function(){
  const b=this, o=b.textContent;
  b.textContent = (await alPortapapeles(hojau.textContent)) ? 'Copiado' : 'No se pudo';
  setTimeout(()=>{ b.textContent=o; },1400);
};

/* En la app instalada interceptamos los enlaces externos: nunca navegamos el
   webview de la app (en iOS eso te deja sin botón de volver). Pedimos al sistema
   que lo abra en su capa in-app; si el navegador lo bloquea, mostramos la hoja. */
document.addEventListener('click', e=>{
  if(!APP_STANDALONE) return;
  const a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
  if(!a || a.id==='hojaa') return;   /* el botón de la propia hoja sí sale */
  let d; try{ d=new URL(a.getAttribute('href'), location.href); }catch(_){ return; }
  if(d.protocol!=='http:' && d.protocol!=='https:') return;
  if(d.origin===location.origin) return;
  e.preventDefault(); e.stopPropagation();
  let w=null; try{ w=window.open(d.href,'_blank','noopener'); }catch(_){}
  if(!w) abrirHoja(d.href);
}, true);

/* iOS no ofrece prompt de instalación: se lo recordamos una vez. */
(function(){
  if(APP_STANDALONE || !ES_IOS) return;
  let off=false; try{ off = localStorage.getItem('inst_off')==='1'; }catch(_){}
  if(off) return;
  const b=document.getElementById('inst');
  setTimeout(()=>b.classList.add('on'), 1200);
  document.getElementById('instx').onclick=()=>{
    b.classList.remove('on');
    try{ localStorage.setItem('inst_off','1'); }catch(_){}
  };
})();

(function cargar(){
  const s=document.createElement('script');
  s.src='data/items.js?v='+Math.floor(Date.now()/300000);
  s.onload=()=>{ C=window.CATALOGO; M=C.meta; ocPurgar(); pintar(); };
  s.onerror=()=>{ document.getElementById('app').innerHTML=
    '<p class="err">No se pudieron cargar los datos del catálogo (data/items.js).</p>'; };
  document.head.appendChild(s);
})();
