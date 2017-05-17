var exports = module.exports = {};

//use this prototype to create the other functions
exports.kineticEnergy = function(m,v){};
let Ke = 0;
Ke += m*v*v;
Ke = Ke/2;
return Ke;

exports.mass = function(Ke,v){
  let m = 0;
  m += 2*Ke;
  m = m/(v*v);
  return m;
};

exports.velocity = function(Ke,m){
  let v = 0;
  v += 2*Ke;
  v = v/m;
  v = Math.sqrt(v);
  return v;
};
