function compare(args) {

    var arr1 = args[0]; //strings are arrays
    var arr2 = args[1];
    if (arr1 > arr2) {
        console.log(">");
    }
    else if (arr1 < arr2) {
        console.log("<");
    }
    else {
        console.log("=");
    }
}
compare(['food', 'food']);