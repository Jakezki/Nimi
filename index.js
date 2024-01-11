let omanimi = "Nimesi";
let tervehdys = "Hei, ";
let hymio = "🙂";
let omatervehdys = tervehdys + omanimi;

String.prototype.lisaaHymio = function() {
  return this + hymio;
};

console.log(omatervehdys.lisaaHymio());
console.log(omatervehdys.lisaaHymio().lisaaHymio());
console.log(omatervehdys.lisaaHymio().lisaaHymio().lisaaHymio())
