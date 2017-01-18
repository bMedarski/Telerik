function equasion(args) {

    var n = args[0]*1;
    var numbers = "";
    var i = 1;

    for (i=1; i<=n; i+=1){
        numbers += i;
        numbers += " ";
    }
    console.log(numbers);
}