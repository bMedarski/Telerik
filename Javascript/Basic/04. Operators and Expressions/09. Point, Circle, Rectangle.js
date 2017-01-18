function solve(args) {
    var x = args[0]*1;
    var y = args[1]*1;

    var output = "";
    var circleFormule = ((x-1)*(x-1)) + ((y-1)*(y-1));
    if (circleFormule <= (1.5*1.5)){
        output += "inside circle ";
    }else {
        output += "outside circle ";
    }

    if((x<-1)||(x>5)||(y<-1)||(y>1)){
        output += "outside rectangle";
    }else{
        output += "inside rectangle";
    }
    console.log(output);

}