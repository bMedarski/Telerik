function solve(args) {
    var x = args[0]*1;
    var y = args[1]*1;
    var z = args[2]*1;

    if((x>=y)&&(x>=z)){
        return console.log(x);
    }
    if((z>=y)&&(z>=y)){
        return console.log(z);
    }
    if((y>=x)&&(y>=z)){
        return console.log(y);
    }
}