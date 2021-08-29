## Part 1: Sentence Analyzer - Letter Counter
1. Create a new branch from `main` named `letter`. 
2. Create a function named `letter_counter` that takes in a `sentence` string as a parameter and returns how many letters there are in that entire sentence.
3. Once the function is created, export it at the bottom of your file: `exports.letter_counter = letter_counter` (so we can test your code!)
4. Commit your code to the `letter` branch. 
5. Create a pull request to merge the `letter` branch onto `main`, and only merge the pull request when the bot approves your changes. 
In the follow 3 steps, you will create a program that analyzes a sentence (how cool is that 😎)

> ❗ for this step, edit the `letter_counter.js` file

### 🔨 Function Specs:
**Function name:** `letter_counter()`

Create a function that takes in `sentence` as a parameter and returns how many letters there are in that entire sentence.
> Punctuation (.,!#$%..etc) don't count as letters. Only alphanumeric characters count!


### 📝 Test your work:
⭐ if the `sentence` parameter is "Bit Project is the best!", the function should return `19`

⭐ if the `sentence` parameter is "Good luck on your application", the function should return `25`

