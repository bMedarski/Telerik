function solve(args) {
    var x = args[0]*1;
    var y = args[1]*1;
    var middle = 0;
    if(x>y){
        middle = y;
        y = x;
        x = middle;
    }

    console.log(x + " " + y);

}