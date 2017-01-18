
function Solve(args){

    let input = args[0]*1;

    let left = input%1000;

    let thirdDigit = (left - left%100)/100;


    if(thirdDigit===7){
        console.log("true");
    }else{
        console.log("false "+thirdDigit);
    }
}
Solve(['877']);