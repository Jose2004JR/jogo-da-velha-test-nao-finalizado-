const btns=document.querySelectorAll(".btnGameBoard");
const reset = document.getElementById("reset")
let arr = new Array(btns.length);
const h1 = document.querySelector("h1")

let initial = true;

btns.forEach((btn,index)=>{
    btn.addEventListener("click",(e)=>{
    
            if(initial){
                e.target.textContent = "X"
                arr[index] = "X"
                initial = false;
                winner()
            }else{
                e.target.textContent ="O"
                arr[index] = "O"
                initial = true;
                winner()
            }
            console.log(arr)
        
    })
})




reset.addEventListener("click",()=>{
    btns.forEach((btn)=>{
        btn.textContent = " ";

        for(let i = 0; i < arr.length;i++){
            arr[i] = '';
        }

        h1.textContent = "Jogo Da Velha"
    })
})

function winner(){
    //PLAYER 1
    if(arr[0] == "X" && arr[1] == "X" && arr[2] == "X"){
        h1.textContent = "Player 1 ganhou"
    }
    if(arr[0] == "X" && arr[3] == "X" && arr[6] == "X"){
        h1.textContent = "Player 1 ganhou"
    }
    if(arr[1] == "X" && arr[4] == "X" && arr[7] == "X"){
        h1.textContent = "Player 1 ganhou"
    }
    if(arr[2] == "X" && arr[5] == "X" && arr[8] == "X"){
            h1.textContent = "Player 1 ganhou"
        }
     if(arr[6] == "X" && arr[7] == "X" && arr[8] == "X"){
            h1.textContent = "Player 1 ganhou"
        }    
    if(arr[3] == "X" && arr[4] == "X" && arr[5] == "X"){
            h1.textContent = "Player 1 ganhou"
        }    
     if(arr[0] == "X" && arr[4] == "X" && arr[8] == "X"){
            h1.textContent = "Player 1 ganhou"
        }
     if(arr[2] == "X" && arr[4] == "X" && arr[6] == "X"){
            h1.textContent = "Player 1 ganhou"
        }    
    // PLAYER 2    

    if(arr[0] == "O" && arr[1] == "O" && arr[2] == "O"){
        h1.textContent = "Player 2 ganhou"
    }
    if(arr[0] == "O" && arr[3] == "O" && arr[6] == "O"){
        h1.textContent = "Player 2 ganhou"
    }
    if(arr[1] == "O" && arr[4] == "O" && arr[7] == "O"){
        h1.textContent = "Player 2 ganhou"
    }
    if(arr[2] == "O" && arr[5] == "O" && arr[8] == "O"){
            h1.textContent = "Player 2 ganhou"
        }
     if(arr[6] == "O" && arr[7] == "O" && arr[8] == "O"){
            h1.textContent = "Player 2 ganhou"
        }    
    if(arr[3] == "O" && arr[4] == "O" && arr[5] == "O"){
            h1.textContent = "Player 2 ganhou"
        }    
     if(arr[0] == "O" && arr[4] == "O" && arr[8] == "O"){
            h1.textContent = "Player 2 ganhou"
        }
     if(arr[2] == "O" && arr[4] == "O" && arr[6] == "O"){
            h1.textContent = "Player 2 ganhou"
        }
     
}