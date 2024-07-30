const currentPlayer = document.querySelector(".currentPlayer");
let selected;
let player = "X";

let positions = [
    [1, 2, 3]
    [4, 5, 6]
    [7, 8, 9]
    [1, 4, 7]
    [2, 5, 8]
    [3, 6, 9]
    [1, 5, 9]
    [3, 5, 7]
];
function init() {
    selected = [];
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`; /*utilizar acento crazeado*/
    document.querySelectorAll(".game button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", newMove);
    });
}

function newMove(e) {
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML = player;
    e.target.removeEventListener("click", newMove);
    selected[index] = player;
    /*intercala entre os jogadores X e O*/
    player = player === "X" ? "O" : "X";
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

init();