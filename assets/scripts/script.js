// game board
var game = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

var r1, c1, r2, c2;

// 4 random numbers between 0 - 3; give coordinate for first two numbers;  
function firstRandomCoordinates() {
    r1 = Math.floor(Math.random() * 4);
    c1 = Math.floor(Math.random() * 4);
    r2 = Math.floor(Math.random() * 4);
    c2 = Math.floor(Math.random() * 4);
    // if there are 2 identical coordinates; give another random number
    if (r1 === r2) {
        r1 = Math.floor(Math.random() * 4);
    }
    game[r1][c1] = 2;
    game[r2][c2] = 2;
}
firstRandomCoordinates();

var firstNumber = game[r1][c1];
console.log(firstNumber);
var secondNumber = game[r2][c2];
console.log(secondNumber);

var firstCoordinate = r1.toString() + c1.toString();
console.log(firstCoordinate);
var secondCoordinate = r2.toString() + c2.toString();
console.log(secondCoordinate);

function addTwos() {
    //takes coordinate; with commas - id name
    var first = document.getElementById(firstCoordinate);
    var second = document.getElementById(secondCoordinate);

    first.textContent = 2;
    second.textContent = 2;

}
addTwos();

function updateNumbers() {
    for (let r = 0; r < game.length; r++) {
        for (let c = 0; c < game[r].length; c++) {
            var coordinate = r.toString() + c.toString();
            var box = document.getElementById(coordinate);
            box.textContent = game[r][c];
        }
    }
}


// s tazi funkciq generiram novoto chislno, sled vseki hod
function throwNum() {
    q = Math.floor(Math.random() * 4);
    j = Math.floor(Math.random() * 4);
    for (let count = 1; count < 1000; count++) {
        if (igra[q][j] === 0) {
            igra[q][j] = 2;
            return;
        } else {
            q = Math.floor(Math.random() * 4);
            j = Math.floor(Math.random() * 4);
        }
    }
}


// function showScreen() {
//     for (let row = 0; row < igra.length; row++) {
//         console.log(igra[row])
//     }
// }

// function startGame() {
//     random();
//     igra[x][y] = 2;
//     igra[z][w] = 2;
//     showScreen();
// }


// function left() {
//     // ostavqm v masivite samo chisla != 0
//     igra[0] = igra[0].filter(num => num != 0);
//     igra[1] = igra[1].filter(num => num != 0);
//     igra[2] = igra[2].filter(num => num != 0);
//     igra[3] = igra[3].filter(num => num != 0);

//     // subiram sysednite ednakvi chisla
//     for (let row = 0; row < igra.length; row++) {
//         for (let col = 0; col < igra[row].length; col++) {
//             if (igra[row][col - 1] === igra[row][col]) {
//                 igra[row][col - 1] *= 2;
//                 igra[row][col] = 0;
//             }
//         }
//     }
//     //zapulvam praznite mesta s 0-li
//     for (let row = 0; row < igra.length; row++) {
//         while (igra[row].length < igra.length) {
//             igra[row].push(0);
//         }
//     }
//     throwNum();
//     console.log();
//     showScreen();
// }

// function right() {
//     igra[0] = igra[0].filter(num => num != 0);
//     igra[1] = igra[1].filter(num => num != 0);
//     igra[2] = igra[2].filter(num => num != 0);
//     igra[3] = igra[3].filter(num => num != 0);

//     for (let row = 0; row < igra.length; row++) {
//         for (let col = 0; col < igra[row].length; col++) {
//             if (igra[row][col + 1] === igra[row][col]) {
//                 igra[row][col + 1] *= 2;
//                 igra[row][col] = 0;
//             }
//         }
//     }
//     for (let row = 0; row < igra.length; row++) {
//         while (igra[row].length < igra.length) {
//             igra[row].unshift(0);
//         }
//     }
//     throwNum();
//     console.log();
//     showScreen();
// }