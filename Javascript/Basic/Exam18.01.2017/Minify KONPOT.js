function Solve(args){

    let replaceArr = ['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a'];

    let input = args.join("");  //Combine the output

    let match = /([a-zA-Z0-9_]+)/g;
    let matchEmpty = /\s/g;
    let matchBracers = /;;+/g;
    let matchOpen = /;{/g;
    let matchClose = /;}/g;
    let matchOpen1 = /{;/g;
    let matchClose2 = /};/g;
    let matchX = /x/g;
    let matchStartSemiComa = /^;/g;
    let matchEndSemiComa = /;$/g;

    let cutString = input                                   //Clear repeated ;, empty {}, ;{, ;}, {;, };, starting ;, and ending ;
                            .replace(matchEmpty,"")
                            .replace(matchBracers,";")
                            .replace(matchOpen,"{")
                            .replace(matchClose,"}")
                            .replace(matchOpen1,"{")
                            .replace(matchClose2,"}")
                            .replace(matchStartSemiComa,"")
                            .replace(matchEndSemiComa,"");
    //console.log(cutString);

    let matches = [],found;

    while (found= match.exec(cutString)){
        matches.push(found[0]);
    }
    //matches.sort(x => x);
    matches.sort(function(a, b){return b*1 - a*1}).sort(function(a, b){return b.length - a.length});
    //console.log(matches);
    let symbolsCount = 0;

    for(let i = 1; i<matches.length; i+=1){
        let countToRemove = 0;
        matches[0]="x";
        //console.log(matches[i]);
        //console.log(matches[i-1]);
        if(matches[i]==matches[i-1]){
            countToRemove+=1;
            //console.log(matches[i]);
        }
        //matches[i]=replaceArr[i-countToRemove];
        if(i-countToRemove<63){
            symbolsCount+=1;
        }else{
            symbolsCount+=2;
        }
    }


    console.log(symbolsCount);
    //var string = 'A1B1Y:A1B2Y:A1B3Y:A1B4Z:A1B5Y:A1B6Y:A1B7Y:A1B8Z:A1B9Y:A1B10Y:A1B11Y';
    //var reg = /A[0-9]+B[0-9]+Y:A[0-9]+B[0-9]+Y/g;
    //var matches = [], found;
    //while (found = reg.exec(string)) {
    //    matches.push(found[0]);
    //    reg.lastIndex -= found[0].split(':')[1].length;
    //}
    //let countx = cutString.match(matchX).length;
    //if(countx>63)
    //{
    //    let doubleIndentifierCount = countx - 63;
    //
    //    //console.log(cutString.length+doubleIndentifierCount);
    //}
    //else{
    //    //console.log(cutString.length);
    //}
}
//       .replace(match,"x")

Solve([
    'hello;',
    '{this; is',
    ' ; an;;;example;',
    '}',
    'of;',
    '{',
    'KONPOT;',
    '{',
    'Some_numbers;',
    '42;5;3}',
    '_}'
]);
Solve([
    '1; 2; 3; 4; 5; 6; 7; 8; 9; 10; 11; 12; 13; 14;',
    '15; 1; 1; 18; 19; 20; 21; 22; 23; 24; 25; 26; 27; 28;',
    '29; 30; 31; 32; 33; 34; 35; 35; 37; 38; 39; 40; 41; 42;',
    '43; 44; 45; 46; 47; 48; 49; 50; 51; 52; 53; 54; 55; 56;',
    '57; 58; 59; 60; 61; 62; 63; 64; 65; 66; 67; 70; 70; 70;'
]);