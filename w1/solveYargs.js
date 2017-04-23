var argv=require('yargs')
  .usage('Usage:node $0 --l=[num] --b=[num]')
  .demand(['l','b'])
  .argv;                                                      //argv predefined




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


solveRect(argv.l,argv.b);                                     //run it like node solveYargs --l=5 --b=23
