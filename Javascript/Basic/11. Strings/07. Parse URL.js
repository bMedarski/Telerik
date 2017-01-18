function solve(args) {
    var text = args[0];

    var result1 = text.split("://");
    console.log("protocol: " + result1[0]);
    var result2 = result1[1].split('/');
    console.log("server: " + result2[0]);
    var result3 = text.split(result2[0]);
    console.log("resource: " + result3[1]);

}