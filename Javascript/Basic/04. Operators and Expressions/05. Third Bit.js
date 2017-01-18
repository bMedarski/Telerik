function solve(args) {
    var number = parseInt(args[0]);
    var bitShift = number >> 3
    var result = bitShift & 1;

    if(result){
        console.log("1");

    }else{
        console.log("0");
    }
}