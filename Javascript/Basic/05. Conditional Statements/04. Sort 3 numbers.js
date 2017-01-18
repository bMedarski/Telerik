function solve(args) {
    var x = args[0]*1;
    var y = args[1]*1;
    var z = args[2]*1;

    if((x>=y)&&(x>=z)){
        if(y>=z){
            return console.log(x + " " + y + " " + z);
        }else{
            return console.log(x + " " + z + " " + y);
        }
    }
    if((z>=y)&&(z>=y)){
        if(y>=x){
            return console.log(z + " " + y + " " + x);
        }else{
            return console.log(z + " " + x + " " + y);
        }
    }
    if((y>=x)&&(y>=z)){
        if(z>=x){
            return console.log(y + " " + z + " " + x);
        }else{
            return console.log(y + " " + x + " " + z);
        }
    }
}