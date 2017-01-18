function solve(args) {
    var x = args[0]*1;
    var y = args[1]*1;
    var z = args[2]*1;
    var a = args[3]*1;
    var b = args[4]*1;

    if((x>=y)&&(x>=z)&&(x>=a)&&(x>=b)){
        return console.log(x);
    }
    if((z>=y)&&(z>=x)&&(z>=a)&&(z>=b)){
        return console.log(z);
    }
    if((y>=x)&&(y>=z)&&(y>=a)&&(y>=b)){
        return console.log(y);
    }
    if((a>=x)&&(a>=z)&&(a>=y)&&(a>=b)){
        return console.log(a);
    }
    if((b>=x)&&(b>=z)&&(b>=a)&&(b>=y)){
        return console.log(b);
    }
}