console.log('Here is the game based on the American TV-Sitcom named F.R.I.E.N.D.S \n');

const chalk = require('chalk');
console.log(chalk.green('Which "Friends" Character Said It? \n'));

console.log('use smallcase alphabet to answer the multiple choice  questions for example if the answer is option d type as d')

var questions = [{
    question: `Who said this memorable line: "Welcome to the real world". It sucks. You are gonna love it.
a) Monica
b) ross 
c)chandler 
d) Phoebe \n`,
    answer: `a`
  },
  {
    question: `Who said this memorable line: I am hopeless and awkward and desperate for love!
a) Chandler
b) Monica
c) Ross 
d) Phoebe \n`,
    answer: `a`
  },
  {
    question: `Who said this memorable line: "Every day is lesbian lover day!"
a) Chandler
b) ross 
c) Minica 
d) Phoebe \n`,
    answer: `b`
  },
  {
    question: `Who said this memorable line: "Look at me! I'm Chandler! Could I BE wearing any more clothes??"
a) Joey
b) Chandler 
c) Monica 
d) Phoebe \n`,
    answer: `a`
  },
  {
    question: `Who said this memorable line: "They don't know that we know they know we know."
a) Monica
b) ross 
c) chandler 
d) Phoebe \n`,
    answer: `d`
  },
  {
    question: `Who said this memorable line: "You know, on second thought, gum would be perfection."
a) Monica
b) ross 
c) chandler 
d) Phoebe \n`,
    answer: `c`
  },
  {
    question: `Who said this memorable line: "Sometimes I wish I was a lesbian. Did I say that out loud?"."
a) Monica
b) ross 
c) chandler 
d) Phoebe \n`,
    answer: `c`
  }
];


var score = 0;

var highScore = [{
  name: "Amit",
  score: 2
}, {
  name: "Caly",
  score: 1
}];

function playGame() {
  for (var i = 0; i < questions.length; i = i + 1) {
    var readlineSync = require('readline-sync');
    var userAnswer = readlineSync.question(questions[i].question);
    if (userAnswer === questions[i].answer) {
      console.log("Superb! That was the right answer");
      score = score + 1;
      console.log(score);
    } else {
      console.log("That was incorrect.");
      score = score + 0;
      console.log(score);
    }
  }
}

function outputScore() {
  const chalk = require('chalk');
  console.log(chalk.greenBright("Your total score is: " + score));
  console.log("If your score is above or equal to high score ping me I will update the score")
  console.log("High score so far 👇 ")
  const newScore = highScore.map(points => {
    return console.log("Name: " + points.name + " & Score: " + points.score);
  });
}


playGame();
outputScore();