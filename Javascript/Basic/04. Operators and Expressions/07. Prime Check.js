function solve(args) {
    var x = parseInt(args[0]);

    if(x<=1){
        return console.log("false");
    }else if((x===2)
        ||(x===3)
        ||(x===5)
        ||(x===7)){
        return console.log("true");
    }
    else{
        if ((x%2===0)
            ||(x%3===0)
            ||(x%5===0)
            ||(x%7===0))
        {
            return console.log("false");
        }
        else{
            return console.log("true");
        }
    }
}