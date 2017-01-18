function sort(args) {

    //let input = args[0].split('\n');

       let n = +args[0],
        numbers = args.slice(1);
        numbers.sort();
        //min = numbers[0];
    //console.log(numbers.join('\n'));
    ///*for (let j = 0; j < n; j += 1) {
    //    min = numbers[j];
    //    for (let i = j; i < n; i += 1) {
    //
    //        if (+numbers[i] < min) {
    //            min = +numbers[i];
    //            numbers[i] = +numbers[j];
    //            numbers[j] = min;
    //        }
    //    }
    //}
    console.log(numbers.join('\n'));
}
sort(['6', '3', '4', '1', '5', '2', '6']);