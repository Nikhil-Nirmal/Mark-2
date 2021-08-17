var chalk = require('chalk');
var readlineSync = require("readline-sync");
let score = 0;
console.log(chalk.bgRed('Welcome To Dr Stone!!!'));
console.log(chalk.yellow('Lets See How Well You Know "Dr Stone"!!!!!!'));
// Question 1
let a = readlineSync.question(chalk.magentaBright('1. Who is the lead character? \n 1. Kohaku \t 2. Chrome \n 3.Senku \t 4. Magma \n Input Option Number As The Answer : '));
if (a=='3') {
  score = score + 5;
 console.log(chalk.green('You Are Absolutely Correct'));
  console.log(chalk.green('Your Score is = '+score));
}
else {
  console.log(chalk.red('Wrong Answer!!!!'));
}
// Question 2
console.log(chalk.yellow('To the next question'));
let b = readlineSync.question(chalk.magentaBright('2. After Senku, how much time did taiju take to wake up? \n 1. Two Months \t 2. Six Months  \n 3. One year \t 4. Never Woke Up \n Input Option Number As The Answer : '));

if (b == '2') {
  score = score + 5;
 console.log(chalk.green('You Are Absolutely Correct'));
  console.log(chalk.green('Your Score is = '+score));
}
else {
  console.log(chalk.red('Wrong Answer!!!!'));
}
// Question 3
console.log(chalk.yellow(' to the Third Question!!!'));
let c = readlineSync.question(chalk.magentaBright('3. Who is Physically Strogest Character in Dr. Stone \n 1. Magma \t 2. Hyoga \n 3. Yuzuriha \t 4. Tsukasa \n Input Option Number As The Answer : '));

if (c == '4') {
  score = score + 5;
 console.log(chalk.green('You Are Absolutely Correct'));
  console.log(chalk.green('Your Score is = '+score));
}
else {
  console.log(chalk.red('Wrong Answer!!!!'));
}
// Question 4
console.log(chalk.yellow('To the next question'));
let d = readlineSync.question(chalk.magentaBright('4. Where was Lillian Wienberg original from? \n 1. USA \t 2. Canada  \n 3. India \t 4. Antartica \n Input Option Number As The Answer : '));

if (d == '1') {
  score = score + 5;
 console.log(chalk.green('You Are Absolutely Correct'));
  console.log(chalk.green('Your Score is = '+score));
}
else {
  console.log(chalk.red('Wrong Answer!!!!'));
}
// Question 5
console.log(chalk.yellow('To the next question'));
let e = readlineSync.question(chalk.magentaBright('5. What did Senku\'s father wanted to become? \n 1. Racer \t 2. Astranout  \n 3. Scientist \t 4. Singer \n Input Option Number As The Answer : '));

if (e == '2') {
  score = score + 5;
 console.log(chalk.green('You Are Absolutely Correct'));
  console.log(chalk.green('Your Score is = '+score));
}
else {
  console.log(chalk.red('Wrong Answer!!!!'));
}
// Question 6
console.log(chalk.yellow('To the next question'));
let f = readlineSync.question(chalk.magentaBright('6. Which coloured beam caused the petrification on earth \n 1. Red \t 2. Blue  \n 3. Green \t 4. Orange \n Input Option Number As The Answer : '));

if (f == '3') {
  score = score + 5;
 console.log(chalk.green('You Are Absolutely Correct'));
  console.log(chalk.green('Your Score is = '+score));
}
else {
  console.log(chalk.red('Wrong Answer!!!!'));
}
// question 7
console.log(chalk.yellow('To the next question'));
let g = readlineSync.question(chalk.magentaBright('7. What is the name of their village? \n 1. Shinagami \t 2. Ishigami \n 3. Kitashihobara \t 4.Asahikawa   \n Input Option Number As The Answer : '));

if (g == '2') {
  score = score + 5;
 console.log(chalk.green('You Are Absolutely Correct'));
  console.log(chalk.green('Your Score is = '+score));
}
else {
  console.log(chalk.red('Wrong Answer!!!!'));
}
// question 8
console.log(chalk.yellow('To the next question'));
let h = readlineSync.question(chalk.magentaBright('8. Who won the fight tournament of Ishigami Village? \n 1. Magma \t 2. Tsukasa  \n 3. Senku \t 4. Kohaku \n Input Option Number As The Answer : '));

if (h == '3') {
  score = score + 5;
 console.log(chalk.green('You Are Absolutely Correct'));
  console.log(chalk.green('Your Score is = '+score));
}
else {
  console.log(chalk.red('Wrong Answer!!!!'));
}
// Question 9
console.log(chalk.yellow('To the next question'));
let i = readlineSync.question(chalk.magentaBright('9. For what purpose was the silver speare used? \n 1. To fight \t 2. To hunt \n 3. Mining \t 4. To detect H2S04. \n Input Option Number As The Answer : '));

if (i == '4') {
  score = score + 5;
 console.log(chalk.green('You Are Absolutely Correct'));
  console.log(chalk.green('Your Score is = '+score));
}
else {
  console.log(chalk.red('Wrong Answer!!!!'));
}
// Question 10
console.log(chalk.yellow('To the next question'));
let j = readlineSync.question(chalk.magentaBright('Hwow was Hyoga defeated \n 1. Stun Gun \t 2. Knife  \n 3.Missile \t 4. Katana \n Input Option Number As The Answer : '));

if (j == '1') {
  score = score + 5;
 console.log(chalk.green('You Are Absolutely Correct'));
  console.log(chalk.green('Your Score is = '+score));
}
else {
  console.log(chalk.red('Wrong Answer!!!!'));
}

if (score==50)
{
 console.log(chalk.bgRed('Congrats For Getting the High Score Bruv You are a true fan of Dr. Stone ;)  HAHA!!!!!!')) 
}

else {
  console.log(chalk.bgRed('thanks for playing the quiz :) '));
}