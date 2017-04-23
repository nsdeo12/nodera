var rect=require("./rectangle.js");
function solveRect(l,b){

console.log("solving for rectangle with length="+l+"and breadth="+b+'\n');

rect(l,b,function(err,rectangle){

  if (err) {
    console.log(err);

  } else {
    console.log("area   "+rectangle.area());
    console.log("perimeter "+rectangle.perimeter());

  }

});
};


solveRect(-5,6);
solveRect(2,5);
solveRect(0,2);
