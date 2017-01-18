var numbers = [5, 1, 2, 4, 6];
numbers.sort(function(x, y) {
    return y - x;
});
console.log(numbers);             //[ 6, 5, 4, 2, 1 ]


var people = [createPerson('Peter', 13), createPerson('John', 18)];
people.sort(function(p1, p2) {
    return p1.name > p2.name;
});
console.log(people);              // John, Peter, Susan