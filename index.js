function produceDrivingRange(blockRange){
 return function(start, end){
  let result = parseInt(end) - parseInt(start);//10
  let range = Math.abs(blockRange - result);//2
  let block = (range > 1) ? "blocks" : "block";

  return (result > blockRange) ? `${range} ${block} out of range` : `within range by ${result}`
  }
}

function produceTipCalculator(tipPercent){
  return function(total){
    return tipPercent * total;
  }
}

function createDriver(){
  let driverId = 0;
  return class{
    constructor(name){
      this.id = driverId++;
      this.name = name;
    }
  }
}
