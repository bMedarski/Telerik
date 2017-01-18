function Solve(args) {

    let positions = args[0].split(' ').map(Number);
    let matrix = args.splice(1).map(x=>x.split(' '));
    let finish = true;
    let maze = {
        row: positions[0],
        col: positions[1]
    };
    let prisoner = {
        row: Math.floor(positions[0] / 2),
        col: Math.floor(positions[1] / 2)
    };


    var checked = new Array(maze.row);
    for (var i = 0; i < maze.row; i++) {
        checked[i] = new Array(maze.col);
    }
    for(let x = 0; x<maze.row;x+=1){
        for (let y=0; y<maze.col;y+=1){
            checked[x][y] = true;
        }

    }
    while (finish) {

        checked[prisoner.row][prisoner.col] = false;
        let position = matrix[prisoner.row][prisoner.col];                                      //current position of prisonerue;
        //console.log(prisoner);
        //console.log(checked[prisoner.row1][prisoner.col]);


        if ((position == 1 || position == 3 || position == 5 || position == 7 ||position==9||position==11||position==13||position==15)&&(prisoner.row == 0)){
            console.log(`No rakiya, only JavaScript ${prisoner.row} ${prisoner.col}`);
            finish = false;
        }
        else if ((position == 2 || position == 6 || position == 10 || position == 14 ||position==3||position==7||position==11||position==15)&&(prisoner.col==maze.col-1)){
                console.log(`No rakiya, only JavaScript ${prisoner.row} ${prisoner.col}`);
                finish = false;
        }
        else if ((position == 4 || position == 5 || position == 6 || position == 7 ||position==12||position==13||position==14||position==15)&&(prisoner.row == maze.row-1)){
                console.log(`No rakiya, only JavaScript ${prisoner.row} ${prisoner.col}`);
                finish = false;
        }
        else if((position == 8 || position == 9 || position == 10 || position == 11 ||position==12||position==13||position==14||position==15)&&(prisoner.col==0)){
            console.log(`No rakiya, only JavaScript ${prisoner.row} ${prisoner.col}`);
            finish = false;
        }


        else if ((position == 1 || position == 3 || position == 5 || position == 7 ||position==9||position==11||position==13||position==15)&&(checked[prisoner.row-1][prisoner.col])) {
            //up


            //if (prisoner.row == 0) {
            //
            //    console.log(`No rakiya, only JavaScript ${prisoner.row} ${prisoner.col}`);
            //    finish = false;
            //}
            prisoner.row -= 1;
        }

        else if ((position == 2 || position == 6 || position == 10 || position == 14 ||position==3||position==7||position==11||position==15)&&(checked[prisoner.row][prisoner.col+1])) {       // right

            //if(prisoner.col==maze.col-1){
            //    console.log(`No rakiya, only JavaScript ${prisoner.row} ${prisoner.col}`);
            //    finish = false;
            //}
            prisoner.col += 1;
            //checked[prisoner.row][prisoner.col]=true;
        } else if ((position == 4 || position == 5 || position == 6 || position == 7 ||position==12||position==13||position==14||position==15)&&(checked[prisoner.row+1][prisoner.col])) {                                         ///down

            //if (prisoner.row == maze.row-1) {
            //
            //    console.log(`No rakiya, only JavaScript ${prisoner.row} ${prisoner.col}`);
            //    finish = false;
            //}
            prisoner.row += 1;
            //checked[prisoner.row][prisoner.col]=true;
        }
        else if((position == 8 || position == 9 || position == 10 || position == 11 ||position==12||position==13||position==14||position==15)&&(checked[prisoner.row][prisoner.col-1])){

            //if(prisoner.col==0){
            //    console.log(`No rakiya, only JavaScript ${prisoner.row} ${prisoner.col}`);
            //    finish = false;
            //}
            prisoner.col -= 1;
            //checked[prisoner.row][prisoner.col]=true;
        }
        else {
            console.log(`No JavaScript, only rakiya ${prisoner.row} ${prisoner.col}`);
            finish = false;
        }
    }


}

Solve([
    '5 7',
    '9 5 3 11 9 5 3',
    '10 11 10 12 4 3 10',
    '10 10 12 7 13 6 10',
    '12 4 3 9 5 5 2',
    '13 5 4 6 13 5 6'
]);
Solve([
    '7 5',
    '9 3 11 9 3',
    '10 12 4 6 10',
    '12 3 13 1 6',
    '9 6 11 12 3',
    '10 9 6 13 6',
    '10 12 5 5 3',
    '12 5 5 5 6'
]);