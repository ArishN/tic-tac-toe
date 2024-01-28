var cells = document.querySelectorAll('.cell');
var result = document.getElementById("result");
var reset = document.getElementById("reset");
var currentPlayer = 'X';
var gameActive = true;
var winningPattern = [

[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]

];

cells.forEach((cell)=>{
    cell.addEventListener("click", ()=>{
        if(cell.innerText == '' && gameActive){
       cell.innerText = currentPlayer;
        playerCurrent();
        winnerCheck();
    }
    })
})



const playerCurrent = () =>{
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}

const winnerCheck = () =>{

    for(const pattern of winningPattern){

        const [a,b,c] = pattern;

        if (cells[a].innerText != '' && cells[b].innerText != '' && cells[c].innerText != '') {
            
            if(cells[a].innerText === cells[b].innerText && cells[b].innerText === cells[c].innerText){
                showWinner(cells[a].innerText);
                gameActive = false;
                return;
            }


        }
    }

    if([...cells].every((cell)=>cell.innerText != '')){
        matchDraw();
    }

}


const showWinner = (winner) =>{

    result.style.display = "block";
    result.innerText = `${winner} is a Winner`;
    reset.style.display = "block";
}

const matchDraw = () =>{
    result.style.display = "block";
    gameActive = false;
    result.innerText = "Draw Match!";
    reset.style.display = "block";
}


reset.addEventListener("click",()=>{
 currentPlayer = 'X';
 gameActive = true;
 cells.forEach((cell)=>{
    cell.innerText = '';
 });
 result.style.display = "none";
 reset.style.display = "none";
});