//var count = 6,
//    arr = Array.from({length: count}) // [ [ 1, 2, 3, 4, 5 ],
//        .fill();         // [ 1, 2, 3, 4, 5 ],
//                                        // [ 1, 2, 3, 4, 5 ],
//arr.fill([1, 2, 3, 4, 9]);          // [ 1, 2, 3, 4, 5 ],
//console.log(arr);                   // [ 1, 2, 3, 4, 5 ] ]

//var n = 10;
//function getRandomDigit() { return (Math.random() * 10) | 0; }
//function isOdd(item) { return !!(item % 2); }
//function digitToDigitName(digit) {
//    return ['Zero', 'One','2','3','4','five','six','7','8', 'Nine'][digit];
//}
//var digitNames = Array.from({length: n})
//    .fill(0)
//    .map(getRandomDigit)
//    .filter(isOdd)
//    .map(digitToDigitName);
//console.log(digitNames);
//
//var digitNamess = digits.fill(0)
//    .map(x => Math.random()*10 | 0)
//    .filter(x=> !!(x%2))
//    .map(x=> ['Zero', 'One','2','3','4','five','six','7','8', 'Nine'][x]);
//console.log(digitNamess);

var text = "asddddf s";
var x  = text.search(/s/g);
console.log(x);