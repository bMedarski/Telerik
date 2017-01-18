function subString(args) {

    var toSearch = args[0].toLowerCase();
    var toSearchIn = args[1].toLowerCase();
    var count = 0;

    while(toSearchIn.indexOf(toSearch)!=-1){
        toSearchIn = toSearchIn.replace(toSearch,"asd");
    }
    let match = /(asd)/g;
    let res;
    while ((res=match.exec(toSearchIn))!==null){
    count++;
    }
    console.log(count);
}

subString([
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);