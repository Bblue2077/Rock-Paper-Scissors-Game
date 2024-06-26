// JavaScript code
let playerName = "Player"; // Default name
let playerScore = 0;
let computerScore = 0;
let gameRound = 0; // Track the current round in the game
let tournamentGames = 0; // Track the current game in the tournament
let playerWins = 0; // Track player wins in the current tournament game
let computerWins = 0; // Track computer wins in the current tournament game
let tournamentWinsPlayer = 0; // Track player wins in the tournament
let tournamentWinsComputer = 0; // Track computer wins in the tournament
let tournamentWinner = null; // Track the winner of the tournament

// Function to update player name
function updatePlayerName() {
  playerName = document.getElementById('player-name').value || "Player"; // Default to "Player" if no name is entered
  document.getElementById('player-score').textContent = `${playerName}: ${playerScore}`;
}

// Function to start a single game
function playGame(playerChoice) {
  // Generate computer's choice (random)
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Determine winner for this round
  let result;
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `${playerName} wins this round!`;
    playerScore++;
  } else {
    result = "Player 2 wins this round!";
    computerScore++;
  }

  // Update scoreboard
  document.getElementById('player-score').textContent = `${playerName}: ${playerScore}`;
  document.getElementById('computer-score').textContent = `Player 2: ${computerScore}`;

  // Display results
  document.getElementById('round-result').textContent = `Round ${gameRound + 1}: You chose ${playerChoice}. Player 2 chose ${computerChoice}. ${result}`;

  // Check if game is over (best of 3 rounds)
  if (gameRound === 2) {
    endSingleGame();
  } else {
    gameRound++;
  }
}

// Function to end a single game
function endSingleGame() {
  let winner;
  if (playerScore > computerScore) {
    winner = playerName;
    document.getElementById('game-result').textContent = `${winner} has won the game!`;
  } else {
    winner = "Player 2";
    document.getElementById('game-result').textContent = `${winner} has won the game!`;
  }

  // Reset scores for single game
  playerScore = 0;
  computerScore = 0;
  gameRound = 0;
  document.getElementById('player-score').textContent = `${playerName}: ${playerScore}`;
  document.getElementById('computer-score').textContent = `Player 2: ${computerScore}`;

  // Reset UI elements
  document.getElementById('round-result').textContent = "";
  document.getElementById('score').textContent = "";
}

// Function to start a tournament
function startTournament() {
  document.getElementById('game').style.display = 'none'; // Hide single game section
  document.getElementById('tournament').style.display = 'block'; // Show tournament section
  tournamentGames = 0; // Reset tournament games count
  tournamentWinsPlayer = 0; // Reset player wins in tournament
  tournamentWinsComputer = 0; // Reset computer wins in tournament
  tournamentWinner = null; // Reset tournament winner
  playTournamentGame(); // Start the first game of the tournament
}

// Function to play a game in the tournament
function playTournamentGame() {
  // Generate computer's choice (random)
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Generate player's choice (random for CPU in tournament mode)
  const playerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Determine winner for this round
  let result;
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `${playerName} wins this round!`;
    playerWins++;
  } else {
    result = "Player 2 wins this round!";
    computerWins++;
  }

  // Display results
  document.getElementById('round-result').textContent = `Round ${gameRound + 1}: You chose ${playerChoice}. Player 2 chose ${computerChoice}. ${result}`;

  // Update scoreboard for tournament game
  updateTournamentScoreboard();

  // Check if game is over (best of 3 rounds)
  if (gameRound === 2) {
    endTournamentGame();
  } else {
    gameRound++;
  }
}

// Function to end a game in the tournament
function endTournamentGame() {
  if (playerWins > computerWins) {
    tournamentWinsPlayer++;
    document.getElementById('tournament-result').textContent = `${playerName} has won Game ${tournamentGames + 1}!`;
  } else {
    tournamentWinsComputer++;
    document.getElementById('tournament-result').textContent = `${playerName} has lost Game ${tournamentGames + 1}!`;
  }

  // Check if tournament is over (3 games)
  if (tournamentGames === 3) {
    endTournament();
  } else {
    tournamentGames++;
    playerWins = 0;
    computerWins = 0;
    gameRound = 0;
    playTournamentGame();
  }
}

// Function to end the tournament
function endTournament() {
  if (tournamentWinsPlayer > tournamentWinsComputer) {
    tournamentWinner = playerName;
    document.getElementById('tournament-result').textContent = `${tournamentWinner} is the world champion!!!`;
  } else {
    tournamentWinner = "Player 2";
    document.getElementById('tournament-result').textContent = `${tournamentWinner} is the world champion!!!`;
  }

  // Reset scores for tournament
  tournamentGames = 0;
  tournamentWinsPlayer = 0;
  tournamentWinsComputer = 0;
  tournamentWinner = null;
  document.getElementById('player-score').textContent = `${playerName}: ${playerScore}`;
  document.getElementById('computer-score').textContent = `Player 2: ${computerScore}`;

  // Reset UI elements
  document.getElementById('round-result').textContent = "";
  document.getElementById('score').textContent = "";

  // Show single game section
  document.getElementById('game').style.display = 'block';
  document.getElementById('tournament').style.display = 'none';
}

// Function to update tournament scoreboard
function updateTournamentScoreboard() {
  document.getElementById('player-score').textContent = `${playerName}: ${playerWins}`;
  document.getElementById('computer-score').textContent = `Player 2: ${computerWins}`;
}

// Function to reset game or tournament
function resetGame() {
  playerName = "Player";
  playerScore = 0;
  computerScore = 0;
  gameRound = 0;
  tournamentGames = 0;
  playerWins = 0;
  computerWins = 0;
  tournamentWinsPlayer = 0;
  tournamentWinsComputer = 0;
  tournamentWinner = null;

  // Function to reset game or tournament
function resetGame() {
  playerName = "Player";
  playerScore = 0;
  computerScore = 0;
  gameRound = 0;
  tournamentGames = 0;
  playerWins = 0;
  computerWins = 0;
  tournamentWinsPlayer = 0;
  tournamentWinsComputer = 0;
  tournamentWinner = null;
}
  // Reset UI elements
  document.getElementById('player-name').value = "";
  document.getElementById('player-score').textContent = `${playerName}: ${playerScore}`;
  document.getElementById('computer-score').textContent = `Player 2: ${computerScore}`;
  document.getElementById('game-result').textContent = "";
  document.getElementById('tournament-result').textContent = "";
  document.getElementById('round-result').textContent = "";
  document.getElementById('score').textContent = "";

  // Show single game section
  document.getElementById('game').style.display = 'block';
  document.getElementById('tournament').style.display = 'none';
}
