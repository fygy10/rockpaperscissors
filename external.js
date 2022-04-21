 //   let play = ["Rock", "Paper", "Scissors"];//
   
  //  let computerPlay = play[Math.floor(Math.random()*play.length)];//

  //  console.log(computerPlay);


    let play = ["Rock", "Paper", "Scissors"];
    let computerPlay = play[Math.floor(Math.random()*play.length)];
    let greeting = prompt("What would you like to play?")
        humanPlay = play
    switch (computerPlay) {
              case 'Scissors':
                (humanPlay === "Rock" && computerPlay === "Scissors") 
                    alert("You win!");
                    break;
              case 'Rock':
                (humanPlay === "Rock" && computerPlay === "Rock") 
                    alert("It is a tie.");
                    break;
              case 'Paper':
                (humanPlay === "Rock" && computerPlay === "Paper") 
                    alert("You lose.");
                    break;
    }
    
    
