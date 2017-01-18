function Solve(args){
    let n = args[0]*1;
    let numbers = args.slice(1).map(Number);
    let result = 1;
    for(let i=0; i<n; i+=1){

        if(numbers[i]%2===0){
            result += numbers[i];
            i++;
        }else{
            result *= numbers[i];
        }
        result %=1024;
    }
    console.log(result);
}
Solve([
    '10',
    '0',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0'
]);

Solve([
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9'
]);