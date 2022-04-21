 //   let play = ["Rock", "Paper", "Scissors"];//
   
  //  let computerPlay = play[Math.floor(Math.random()*play.length)];//

  //  console.log(computerPlay);


  //  let play = ["Rock", "Paper", "Scissors"];
  //  let computerPlay = play[Math.floor(Math.random()*play.length)];

  //  let greeting = prompt("What would you like to play?")
  //  let humanPlay = play
  //           if (humanPlay === "Rock" && computerPlay === "Scissors") {
  //              alert("You win!");
  //          } if (humanPlay === "Rock" && computerPlay === "Rock") {
  //              alert("It is a tie.")
    //        } if (humanPlay === "Rock" && computerPlay === "Scissors") 
  //              alert("You lose.");
            
   
    
function playround(humanPlay, computerPlay){
    let humanPlay = ["Rock", "Paper", "Scissors"];
    let computerPlay = ["Rock", "Paper", "Scissors"];

    let greeting = prompt("What do you choose?")

     if (humanPlay === "Rock" && computerPlay === "Scissors") {
        alert("You win!");
    } else if (humanPlay === "Rock" && computerPlay === "Rock") {
        alert("It is a tie.")
    } else (humanPlay === "Rock" && computerPlay === "Scissors") 
        alert("You lose.");

    const computerPlay = play[Math.floor(Math.random()*play.length)];




}