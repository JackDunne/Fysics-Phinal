var exports = module.exports = {};

//use this prototype to create the other functions
exports.distance = function(v,t){
  let d = 0;
  d = v*t;
  return d;
};

//distance function with acceleration
exports.distance2 = function(a,t,v){
  let d = 0;
  d = a(t*t);
  d = d/2;
  d += v*t;
  return d;
};

exports.velocity = function(d,t){
  let v = 0;
  v = d/t;
  return v;
};

exports.velocity2 = function(d,t,a){
  let v = 0;
  v += 2*d;
  v = v/(a(t*t*t));
  return v;
};

exports.time = function(d,v){
  let t = 0;
  t += d/v;
  return t;
};

//equation using initial and final velocity for time
exports.time2 = function(Vf,Vi,a){
  let t = 0;
  t += Vf - Vi;
  t = t/a;
  return t;
};

exports.acceleration = function(d,t,v){
  let a = 0;
  a += 2*d;
  a = a/(t*t*v*t);
  return a;
};
