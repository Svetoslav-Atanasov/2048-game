// game board
var game = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

var r1, c1, r2, c2;
var isMoved = false;
var excludeIds = [];

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
changeColor();


function updateNumbers() {
    for (let r = 0; r < game.length; r++) {
        for (let c = 0; c < game[r].length; c++) {
            var coordinate = r.toString() + c.toString();
            var box = document.getElementById(coordinate);
            box.textContent = game[r][c];
        }
    }
}

document.onkeydown = function(e) {
    e.preventDefault(); //to prevent scroll of screen
    switch (e.keyCode) {
        case 37:
            left();
            break;
        case 38:
            up();
            break;
        case 39:
            right();
            break;
        case 40:
            down();
            break;
    }
};

function right() {
    isMoved = false;
    excludeIds = [];
    for (var i = 0; i < game.length; i++) {
        for (var j = game.length - 1; j >= 0; j--) {
            var id = i + "" + j;
            if (document.getElementById(id).innerHTML != 0) {
                moveRight(id);
            }
        }
    }
    if (isMoved === true) {
        update()
    }
    return false;
}


function moveRight(id) {
    if (!id.endsWith(game.length - 1)) {
        var arr = id.split("");
        var i = parseInt(arr[0]);
        var j = parseInt(arr[1]);
        for (var k = (j + 1); k < game.length; k++) {
            var nId = i + "" + k;
            if (document.getElementById(nId).innerHTML != 0) {
                var val = parseInt(document.getElementById(i + "" + (k - 1)).innerHTML);
                var nVal = parseInt(document.getElementById(nId).innerHTML);
                if (val === nVal) {
                    // if(excludeIds.indexOf(nId) == -1){
                    //     excludeIds.push(nId);

                    document.getElementById(nId).innerHTML = (val + nVal);

                    document.getElementById(i + "" + (k - 1)).innerHTML = 0;

                    isMoved = true;

                    //}
                    break;
                }
            } else {
                document.getElementById(nId).innerHTML = document.getElementById(i + "" + (k - 1)).innerHTML;

                document.getElementById(i + "" + (k - 1)).innerHTML = 0;

                isMoved = true;
            }
        }
    }
    changeColor();
    return false;
}

function up() {
    isMoved = false;
    excludeIds = [];
    for (var j = 0; j < game.length; j++) {
        for (var i = 0; i < game.length; i++) {
            var id = i + "" + j;
            if (document.getElementById(id).innerHTML != 0) {
                moveUp(id);
            }
        }
    }
    if (isMoved === true) {
        update();
    }
    return false;
}

function moveUp(id) {
    if (!id.startsWith(0)) {
        var arr = id.split("");
        var i = parseInt(arr[0]);
        var j = parseInt(arr[1]);
        for (var k = (i - 1); k >= 0; k--) {
            var nId = k + "" + j;
            if (document.getElementById(nId).innerHTML != 0) {
                var val = parseInt(document.getElementById((k + 1) + "" + j).innerHTML);
                var nVal = parseInt(document.getElementById(nId).innerHTML);
                if (val == nVal) {
                    // if(excludeIds.indexOf(nId) == -1){
                    //     excludeIds.push(nId);
                    document.getElementById(nId).innerHTML = (val + nVal);
                    document.getElementById((k + 1) + "" + j).innerHTML = 0;
                    isMoved = true;
                    //}
                    break;
                }
            } else {
                document.getElementById(nId).innerHTML = document.getElementById((k + 1) + "" + j).innerHTML;
                document.getElementById((k + 1) + "" + j).innerHTML = 0;
                isMoved = true;
            }
        }
    }
    changeColor();
    return false;
}


function down() {
    isMoved = false;
    excludeIds = [];
    for (var i = 0; i < game.length; i++) {
        for (var j = game.length - 1; j >= 0; j--) {
            var id = j + "" + i;
            if (document.getElementById(id).innerHTML != 0) {
                moveDown(id);
            }
        }
    }
    if (isMoved === true) {
        update();
    }
    return false;
}

function moveDown(id) {
    if (!id.startsWith(game.length - 1)) {
        var arr = id.split("");
        var i = parseInt(arr[0]);
        var j = parseInt(arr[1]);

        for (var k = (i + 1); k < game.length; k++) {
            var nId = k + "" + j;
            if (document.getElementById(nId).innerHTML != 0) {
                var val = parseInt(document.getElementById((k - 1) + "" + j).innerHTML);
                var nVal = parseInt(document.getElementById(nId).innerHTML);
                if (val == nVal) {
                    // if(excludeIds.indexOf(nId) == -1){
                    //     excludeIds.push(nId);
                    document.getElementById(nId).innerHTML = (val + nVal);
                    document.getElementById((k - 1) + "" + j).innerHTML = 0;
                    isMoved = true;
                    // console.log(excludeIds);
                    //}
                    break;
                }
            } else {
                document.getElementById(nId).innerHTML = document.getElementById((k - 1) + "" + j).innerHTML;
                document.getElementById((k - 1) + "" + j).innerHTML = 0;
                isMoved = true;
            }
        }
    }
    changeColor();
    return false;
}

function update() {
    //Add new value
    var ids = [];
    for (var i = 0; i < game.length; i++) {
        for (var j = 0; j < game.length; j++) {
            var id = i + "" + j;
            if (document.getElementById(id).innerHTML == 0) {
                ids.push(id);
            }
        }

    }
    var id = ids[Math.floor(Math.random() * ids.length)];
    document.getElementById(id).innerHTML = "2";

    //Check if no move space available
    var allFilled = true;
    for (var i = 0; i < game.lenght; i++) {
        for (var j = 0; j < game.length; j++) {
            var id = i + "" + j;
            if (document.getElementById(id).innerHTML == 0) {
                allFilled = false;
                break;
            }
        }
        if (allFilled) {
            checkGameOver();
        }
    }
    //Update score
    // document.getElementById("score").innerHTML = score;
    // if(allFilled) {
    //     checkGameOver();
    // }
}


function left() {
    isMoved = false;
    excludeIds = [];
    for (var i = 0; i < game.length; i++) {
        for (var j = 0; j < game.length; j++) {
            var id = i + "" + j;
            if (document.getElementById(id).innerHTML != 0) {
                moveLeft(id);
            }
        }
    }
    if (isMoved === true) {
        update();
    }
    return false;
}

function moveLeft(id) {
    if (!id.endsWith(0)) {
        var arr = id.split("");
        var i = parseInt(arr[0]);
        var j = parseInt(arr[1]);
        for (var k = (j - 1); k >= 0; k--) {
            var nId = i + "" + k;
            if (document.getElementById(nId).innerHTML != 0) {
                var val = parseInt(document.getElementById(i + "" + (k + 1)).innerHTML);
                var nVal = parseInt(document.getElementById(nId).innerHTML);
                if (val === nVal) {
                    // if(excludeIds.indexOf(nId) === -1){
                    //     excludeIds.push(nId);
                    document.getElementById(nId).innerHTML = (val + nVal);
                    document.getElementById(i + "" + (k + 1)).innerHTML = 0;
                    isMoved = true;
                    //}
                    break;
                }
            } else {
                document.getElementById(nId).innerHTML = document.getElementById(i + "" + (k + 1)).innerHTML;
                document.getElementById(i + "" + (k + 1)).innerHTML = 0;
                isMoved = true;
            }
        }
    }
    changeColor();
    return false;
}

function checkGameOver() {
    var isOver = true;
    for (var j = 0; j < game.length; j++) {
        for (var i = min; i < (game.length - 1); i++) {

            var val = parseInt(document.getElementById(i + "" + j).innerHTML);
            var nVal = parseInt(document.getElementById((i + 1) + "" + j).innerHTML);
            if (val == nVal) {
                isOver = false;
                break;
            }
        }
    }
    if (isOver == true) {
        for (var i = 0; i < game.length; i++) {
            for (var j = 0; j < (game.length - 1); j++) {

                var val = parseInt(document.getElementById(i + "" + j).innerHTML);
                var nVal = parseInt(document.getElementById(i + "" + (j + 1)).innerHTML);
                if (val == nVal) {
                    isOver = false;
                    break;
                }
            }
        }
    }
    if (isOver) {
        alert("Game over!");
    }
    return false;
}

// function showScreen() {
//     for (let row = 0; row < igra.length; row++) {
//         console.log(igra[row])
//     }
// }

function changeColor() {
    for (let r = 0; r < game.length; r++) {
        for (let c = 0; c < game[r].length; c++) {
            var coordinate = r.toString() + c.toString();
            var box = document.getElementById(coordinate);

            if (box.textContent == '') {
                box.style.backgroundColor = '#eee4da';
            }
            if (box.textContent == '0') {
                box.style.backgroundColor = '#CDC1B4';
                box.style.color = '#CDC1B4';
            }
            if (box.textContent == '2') {
                box.style.backgroundColor = '#eee4da';
                box.style.color = '#776e65';
            }
            if (box.textContent == '4') {
                box.style.backgroundColor = '#E8E1C6';
                box.style.color = '#776e65';
            }

            if (box.textContent == '8') {
                box.style.backgroundColor = '#F1AE79';
                box.style.color = '#F9F6F2';
            }

            if (box.textContent == '16') {
                box.style.backgroundColor = '#F69465';
                box.style.color = '#F9F6F2';
            }

            if (box.textContent == '32') {
                box.style.backgroundColor = '#F47B61';
                box.style.color = '#F9F6F2';
            }
            if (box.textContent == '64') {
                box.style.backgroundColor = '#F75C34';
                box.style.color = '#F9F6F2';
            }
            if (box.textContent == '128') {
                box.style.backgroundColor = '#EDCF72';
                box.style.color = '#F9F6F2';
            }
            if (box.textContent == '256') {
                box.style.backgroundColor = '#EDCC61';
                box.style.color = '#F9F6F2';
            }
            if (box.textContent == '512') {
                box.style.backgroundColor = '#EDC850';
                box.style.color = '#F9F6F2';
            }
            if (box.textContent == '1024') {
                box.style.backgroundColor = '#EDC53F';
                box.style.color = '#F9F6F2';
            }
            if (box.textContent == '2048') {
                box.style.backgroundColor = '#EDC22E';
                box.style.color = '#F9F6F2';
            }
            if (box.textContent == '4096') {
                box.style.backgroundColor = '#3C3A32';
                box.style.color = '#F9F6F2';
            }
            if (box.textContent == '8192') {
                box.style.backgroundColor = '#3C3A32';
                box.style.color = '#F9F6F2';
            }
        }
    }
}