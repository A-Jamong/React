export function typeOf(data){
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
  // return ((data.constructor+'').slice(9, -20).toLowerCase());
}
