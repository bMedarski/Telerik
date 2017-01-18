function getName(args){

    var arr = args[0].split(' ');
    // var arr = [8,3,6];
    var x = arr[0]*1;
    var y = arr[1]*1;
    var z = arr[2]*1;
    var a,
        b,
        c;
    function GetMax(a,b) {
        if (a >= b) {
            return a;
        } else {
            return b;
        }
    }
    a = GetMax(+arr[0],+arr[1]);
    b = GetMax(+arr[1],+arr[2]);
    c = GetMax(+arr[2],+arr[0]);

    if((a>=b)&&(a>=c)){
        console.log(a);
    }else if ((b>=a)&&(b>=c)){
        console.log(b);
    }else if ((c>=a)&&(c>=b)){
        console.log(c);
    }
}
getName(['8 3 6']);