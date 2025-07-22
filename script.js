let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector(".rst");
let turnO = "true";
const winnings = [
    [0, 1, 2],
    [3 ,4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
let move = boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.style.backgroundColor = "#C0C9EE";
        if (turnO === "true"){
            box.innerText = "O";
            turnO = "false";
        }else{
            box.innerText = "X";
            turnO ="true";
        }
        box.disabled = true;
        checkWinner();
    });
});
const freazeBox = () => {
    for(box of boxes){
        box.disabled = true;
    }
}
const enblBox = () => {
    for(box of boxes){
        box.disabled = false;
    }
}

const checkWinner = () => {
    for(let win of winnings ){
        let postn1Val = boxes[win[0]].innerText;
        let postn2Val = boxes[win[1]].innerText;
        let postn3Val = boxes[win[2]].innerText;
        
        if ( postn1Val != "" && postn2Val != "" && postn3Val != "" ){
            if(postn1Val == postn2Val && postn2Val == postn3Val){
                document.querySelector(".wiNam").innerText = `THE WINNER IS ${postn1Val}`;
                rstBtn.innerText = "Play Again";
                rstBtn.style.width = "120px";
                freazeBox();
            }
        }
    }
}
rstBtn.addEventListener("click",() => {
    for(win of winnings){
        boxes[win[0]].innerText = "";
        boxes[win[1]].innerText = "";
        boxes[win[2]].innerText = "";
    }
    enblBox();
    for(box of boxes){
        box.style.backgroundColor = "#D7D7D7";
    };
    document.querySelector(".wiNam").innerText = "";
    rstBtn.innerText = "Reset!";
})

// const gameOvr = () => {for(win of winnings){
//    if(boxes[win[0]].innerText != boxes[win[1]].innerText &&  boxes[win[1]].innerText != boxes[win[2]].innerText &&
//      boxes[win[0]].innerText != "" && boxes[win[1]].innerText != "" && boxes[win[2]].innerText != ""){
//          document.querySelector(".wiNam").innerText = "GAME OVER NO WINNER";
//     }
// }
// }

