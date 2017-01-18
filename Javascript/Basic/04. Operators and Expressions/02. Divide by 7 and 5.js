
function Solve(args){

    let input = args[0]*1;

    if((input%5==0)&&(input%7==0))
    {
        console.log("true "+input);
    }
    else
    {
        console.log("false "+input);
    }

}
Solve(['35']);