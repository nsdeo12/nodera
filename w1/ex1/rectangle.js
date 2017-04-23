module.exports=function(x,y,callback){

  try {
    if (x<=0 || y<=0) {
      throw new Error("length should be greater than zero,length="+x+"breadth="+y+'\n');

    } else {
      callback(null,{
        area:function(){
          return area=x*y;
        },
        perimeter:function(){
          return perimeter=2*(x+y)
        }
      });

    }

  } catch (e) {
    callback(e,null);
  }



};
