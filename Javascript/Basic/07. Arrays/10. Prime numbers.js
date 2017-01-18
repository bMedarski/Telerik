function solve(args) {
    var n = +args[0];//works like int parse
    var value = 0;
    for (var i = n; i >= 0; i--) {
        var isPrime = true;

        for (var divider = 2; divider <= Math.sqrt(i); divider++) {
            if (i % divider === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            value = i;
            break;
        }
    }
    console.log(value);
}
solve(['5']);