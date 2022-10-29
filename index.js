var readlineSync = require("readline-sync");
var score = 0;

var highScores = [
  {
    name: "Dhruvik",
    score: 3,
  },
  {
    name: "Dhruvi",
    score: 2,
  },
]

var questions = [
{
  question: `1.What's the git command that downloads your repository from GitHub to your computer? 
  A:git push 
  B:git fork 
  C:git clone 
  D:git commit
  `,
  answer: "C"
}, 
{
  question: `2.How do you check the state of your local git repository since your last commit?
    A:git check
    B:git status
    C:git commit
    D:git diff
    `,
  answer: "B"
},
{
  question:`3.What's a shortcut to staging all the changes you have?
    A:git commit add .
    B:git commit .
    C:git add .
    D:git push -am "Message"
`,
  answer: "C"
},
{
  question:`4.How do you supply a commit message to a commit?
    A:git message "I'm coding"
    B:git add "I'm coding"
    C:git commit "I'm coding"
    D:git commit -m "I'm coding
    `,
  answer: "D"
},
{
  question:`5.What's the opposite of git clone, instead of downloading your code from GitHub, uploads your changes and code back to GitHub?
    A:git push
    B:git add
    C:git upload
    D:git status
    `,
  answer: "A"
}
];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to Git Github Quiz");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("---------------------------------------------------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();

