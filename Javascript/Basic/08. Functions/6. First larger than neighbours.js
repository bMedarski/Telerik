function largerThanNeightbours(input) {
    var n = +input[0],
        number = input[1].split(' ').map(Number),
        count = -1;

    for(var i = 0; i < n - 1; i += 1) {
        if (number[i] > number[i - 1] && number[i] > number[i + 1]) {
            count = i;
            //console.log(count);
            return count;
        }
    }
}
largerThanNeightbours(['6','-26 -25 -28 31 2 27']);

//6
//-26 -25 -28 31 2 27