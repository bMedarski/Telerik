function Solve (args)
{
    let len = args.length;
    let count = 1;
    let maxAcount = 0;
    for(let i=1; i<len;i=i+1){
        if(args[i]*1===args[i-1]*1){
            count++;
            if(maxAcount<count){
                maxAcount=count;
            }
        }else{
            count=1;
        }
    }
    console.log(maxAcount);

}

Solve(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);
Solve(['1', '2', '1', '1', '2', '5', '6', '2', '2', '2', '1']);