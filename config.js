// CONFIGURACIÓN COMPARTIDA: editá acá y se aplica a index.html y buffet.html
const FIREBASE = null; // Pegá acá tu config: {apiKey:"...",authDomain:"...",projectId:"...",appId:"..."}
const PIN_BUFFET = '4321';   // PIN del buffet (cambialo)
const CIERRE_MIN = 10;       // minutos antes del turno en que se cierran pedidos/cancelaciones
const MAX_ITEMS = 8;         // máximo de productos por pedido
const TURNOS = [
  {id:'t1',n:'1° turno · Primer recreo',d:'08:50',h:'09:00'},
  {id:'t2',n:'2° turno · Última oportunidad',d:'10:20',h:'10:30'}];
const MENU = [
  {id:'biz',c:'Facturas',e:'🥖',n:'Bizcocho',d:'Salado, de grasa',p:500,s:30},
  {id:'med',c:'Facturas',e:'🥐',n:'Medialuna',d:'De manteca',p:600,s:30},
  {id:'vig',c:'Facturas',e:'🥧',n:'Vigilante',d:'Con dulce de membrillo',p:700,s:20},
  {id:'cre',c:'Facturas',e:'🍩',n:'Cremona',d:'Rellena de dulce de leche',p:800,s:15},
  {id:'agu',c:'Bebidas',e:'💧',n:'Agua mineral',d:'500 ml',p:900,s:30},
  {id:'jug',c:'Bebidas',e:'🧃',n:'Jugo en caja',d:'200 ml',p:800,s:30},
  {id:'cho',c:'Bebidas',e:'🥛',n:'Chocolatada',d:'Fría, 200 ml',p:1100,s:20}];
const CATS = ['Facturas','Bebidas'];
const KEY='b4p_pedidos_v2', MY='b4p_codes_v2';
