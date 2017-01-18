
function Solve(args){

    let width = args[0]*1;
    let height = args[1]*1;

    let area = width*height;
    let perimeter = 2*width+2*height;

    console.log(area.toFixed(2)+" "+perimeter.toFixed(2));
}
Solve([ '2.5', '3' ]);