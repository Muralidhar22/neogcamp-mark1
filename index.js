// setting up readlinSync, chalk packages and variables
var readlineSync = require("readline-sync");
var chalk = require("chalk");
var questions =[
  {question: "What is his age? ",
  choices: ['21','22','20','23'],
  answer: '22'},
  {question: "Does he watch Anime? ",
  choices: ['Yes','No'],
  answer: 'Yes'},
  {question: "Is he Vegeterian? ",
  choices: ['Yes','No'],
  answer: 'No'},
  {question: "what is he currently doing? ",
  choices: ['Full Time Job','Masters','Gaming','Hacking'],
  answer: 'Full Time Job'},
  {question: "In which branch he completed his B.Tech? ",
  choices: ['Computer Science','Mechanical','Electrical','Civil'],
  answer: 'Mechanical'},
  {question: "Does he have a girlfriend? ",
   choices: ['Yes','No'],
  answer: 'No'},
  {question: "In which location he's living now? ",
  choices: ['Hyderabad','Goa','Vizag','Bangalore'],
  answer: 'Vizag'}
];
var score = 0;
var randomThoughts = [
  "...Oh I see🙂","...ooh","...well well well","...🧐","...Hmm, okay"
];
// welcome message
console.log(chalk.cyanBright(`Hey! it's Muralidhar and this is a small questionnaire on ${chalk.magentaBright(`"How well do you know me"`)}`));
 
answer = readlineSync.question('Do you want to proceed? ', {
  trueValue: ['yes', 'yeah', 'yep','y'],
  falseValue: ['no', 'nah', 'nope','n']
});
if (answer === true) {
  console.log('Let\'s go!');
  start();
} else if (answer === false) {
  console.log('Oh, It\'s ok...Have a nice day!');
} else {
  console.log('Sorry. What does "' + answer + '" you said mean?,please try running again...');
}

// start the quiz
function start(){
  // asking for a name to proceed
  var name = readlineSync.question(chalk.greenBright('please type in your name and press enter key, to proceed: '),{
  defaultInput: 'anonymous'
  })
  console.log(chalk.bgWhiteBright.black.bold(`${chalk.red(name)},😀 you can start answering by selecting an option number`))
  displayQuestions()
}
// display questions
function displayQuestions(){
  for (var i=0; i<questions.length; i++){
      var quiz = (questions[i])
      play(quiz.question, quiz.choices, quiz.answer)
  }
  console.log(chalk.bgBlueBright.black(`Thanks for answering...😁 Your score: ${score}`))
}
// play quiz
function play(question, choices, answer){
  var selectedOption = readlineSync.keyInSelect(choices, chalk.inverse.bold(question))
  console.log('----------------')
   console.log(chalk.italic.cyan(randomThoughts[Math.floor(Math.random() * randomThoughts.length)]))
  console.log('----------------')
  if (choices[selectedOption] === answer){
    score++;
  }
}
