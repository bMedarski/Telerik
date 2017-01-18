function Solve (args)
{
    let len = args.length;
    let count = 1;
    let maxCount = 0;
    for(let i=1; i<len;i=i+1){
        if(args[i]*1>args[i-1]*1){
            count++;
            if(maxCount<count){
                maxCount=count;
            }
        }else{
            count=1;
        }
    }
    console.log(maxCount);

}

Solve(['8', '7', '3', '2', '3', '4', '2', '2', '4']);
Solve(['1', '2', '1', '0', '3', '5', '6', '2', '2', '2', '1']);