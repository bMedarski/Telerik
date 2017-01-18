function Solve(args){

        let input = args;
    //console.log(input);
        let newString = "";
    for(let i=0; i<input.length;i+=1){
        newString+=input[i];
    }

    //console.log(newString);
    let match = /[a-zA-Z0-9_]+/g;
    let matchEmpty = /\s/g;
    let matchBracers = /;;+/g;
    let matchOpen = /;{/g;
    let matchClose = /;}/g;
    let matchOpen1 = /{;/g;
    let matchClose2 = /};/g;
    let matchX = /x/g;
    let cut = newString.replace(match,"x").replace(matchEmpty,"").replace(matchBracers,";").replace(matchOpen,"{").replace(matchClose,"}").replace(matchOpen1,"{").replace(matchClose2,"}");

    let cut1 = cut;
    //let brackers = cut.indexOf(";");
    if(cut.startsWith(";")){
        //console.log("da");
        cut1 = cut.substr(1);
    }
   // console.log(part1);
    //console.log(final);
    let countx = cut1.match(matchX).length;
    let part1 = countx%64;
    let final = part1*2+cut1.length-part1;
    console.log(final);

}


Solve([
    '1; 2; 3; 4; 5; 6; 7; 8; 9; 10; 11; 12; 13; 14;',
    '15; 16; 17; 18; 19; 20; 21; 22; 23; 24; 25; 26; 27; 28;',
    '29; 30; 31; 32; 33; 34; 35; 36; 37; 38; 39; 40; 41; 42;',
    '43; 44; 45; 46; 47; 48; 49; 50; 51; 52; 53; 54; 55; 56;',
    '57; 58; 59; 60; 61; 62; 63; 64; 65; 66; 67; 68; 69; 70;'
]);