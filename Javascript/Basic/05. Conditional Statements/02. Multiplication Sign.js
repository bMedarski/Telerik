/**
 * Created by BoyanMedarski on 17.1.2017 ã..
 */
function Solve(args){

    let numberOne = args[0]*1;
    let numberTwo = args[1]*1;
    let numberThree = args[2]*1;
    let countMinus = 0;

    if(numberOne===0||numberTwo===0||numberThree===0)
    {
        console.log("0");
    }else if(numberOne<0&&numberTwo<0&&numberThree<0){
        console.log("-");
    }
    else if(numberOne>0&&numberTwo>0&&numberThree<0){
        console.log("-");
    }else if(numberOne>0&&numberTwo<0&&numberThree>0){
        console.log("-");
    }else if(numberOne<0&&numberTwo>0&&numberThree>0){
        console.log("-");
    }else{
        console.log("+");
    }
}

Solve(['5', '2', '2']);
Solve(['-2', '-2', '1']);
Solve(['-2', '4', '3']);
Solve(['0', '-2.5', '4']);
Solve(['-1', '-0.5', '-5.1']);
