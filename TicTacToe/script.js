let msg = document.querySelector(".display");
let boxes = document.querySelectorAll(".btns");

let Xturn = true;

const winnPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (Xturn) {
            box.innerText = "X";
            Xturn = false;
        } else {
            box.innerText = "0";
            Xturn = true;
        }
        box.disabled = true;
        winCheck();
    });
});

function winCheck() {
    let pos1, pos2, pos3;
    for (let pattern of winnPattern) {
        pos1 = boxes[pattern[0]].innerText;
        pos2 = boxes[pattern[1]].innerText;
        pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                msg.innerText = `${pos1} won`;
                boxes.forEach((box) => {
                    box.disabled = true;
                });
                return; // Exit function after a win
            }
        }
    }

    if (isBoardFull()) {
        msg.innerText = "It's a draw!";
    }
}

function isBoardFull() {
    return Array.from(boxes).every(box => box.innerText !== "");
}

let reset = document.getElementById("resetbtn");

reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msg.innerText = ""; // Clear the message when resetting the game
});
