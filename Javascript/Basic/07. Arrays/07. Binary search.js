

//doesn't work -> have to fixed it



function search(args) {

    var arr = args.map(Number),
        n = arr[0],
        x = arr[arr.length - 1],
        min = 0,
        max = n - 1,
        mid = 0;

    arr.shift();
    arr.pop();
    while (min <= max) {

        mid = ((min + max) / 2) | 0;

        if (x === +arr[mid]) {
            return mid;
        }
        else if (x < +arr[mid]) {
            max = mid - 1;
        }
        else {
            min = mid + 1;
        }
    }
    console.log('-1');
}
search(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);