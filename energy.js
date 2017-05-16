var exports = module.exports = {};

//use this prototype to create the other functions
exports.kineticEnergy = function(m,v){};
let Ke = 0;
Ke += m*v*v;
Ke = Ke/2;
return Ke;
