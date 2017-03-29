function Solve(args){
    let n = args[0]*1;
    let numbers = args.slice(1);
    let result ;
    if (numbers[0] % 2 == 1)
    {
        result = 1;
    }
    else {
        result = 0;
    }


    for(let i=0; i<n;){

        if(numbers[i]*1%2===0){
            result += numbers[i]*1;
            i+=2;
        }else{
            result *= numbers[i]*1;
            i+=1;
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