const inquirer = require('inquirer');

const play = async () => {
  const { playGame } = await inquirer.prompt([{
    type: 'list',
    name: 'playGame',
    message: 'Would you like to play a game?',
    default: true,
    choices: [
      { name: 'Yes', value: true },
      { name: 'No', value: false}
    ]
  }]);

  console.clear();
  if (!playGame) return; 
 
  console.log("Let's play!");

}

play();