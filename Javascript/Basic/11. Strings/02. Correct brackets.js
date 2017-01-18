function Solve(args) {

    var input = args[0];
//var input = "((a+b)/5-d)";
    var openBracket = "(";
    var closeBracket = ")";
    var countOpen = 0;
    var countClose = 0;

    if(input.indexOf(openBracket)>input.indexOf(closeBracket)){
        console.log("Incorrect");
    }else{

        for(var i=0; i<input.length; i+=1){
            if(input[i]==openBracket){

                countOpen +=1;
            }
            if (input[i]==closeBracket) {
                countClose +=1;
            }
        }
        if(countOpen==countClose){
            console.log("Correct");
        }else{
            console.log("Incorrect");
        }
    }
}

Solve([ '((a+b)/5-d)' ]);
Solve([ ')(a+b))' ]);
