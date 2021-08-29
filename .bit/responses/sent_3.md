## Part 3: Sentence Analyzer - Specific Letter Counter
Oooh, this step is a little bit harder! Don't worry if you can't finish this step entirely, do the best you can :)

1. Create a new branch from `main` named `specific`. 
2. Create a function named `spec_letter_counter` that takes in a `sentence` string as a parameter and returns a JSON object with the count of each letter.
3. Once the function is created, export it at the bottom of your file: `exports.spec_letter_counter = spec_letter_counter` (so we can test your code!)
4. Commit your code to the `specific` branch. 
5. Create a pull request to merge the `specific` branch onto `main`, and only merge the pull request when the bot approves your changes. 

> ❗ for this step, edit the `spec_letter_counter.js` file

### 🔨 Function Specs:
**Function name:** `spec_letter_counter()`

Create a function that takes in `sentence` as a parameter and returns a JSON object with the count of each letter.
> Punctuation does not count as letters. 

> Letters with no occurances in the sentence should NOT to be included in the JSON object. 

> Uppercase and lowercase are NOT the same character!

Example Output:
```json=
{
    "a": 12,
    "d": 1,
    "r": 2
}
```

### 📝 Test your work:
⭐ If the `sentence` paramter is "Ganning is cooll!!", the function should return `{ G: 1, a: 1, n: 3, i: 2, g: 1, s: 1, c: 1, o: 2, l: 2 }`

⭐ If the `sentence` paramter is "I really like food", the function should return `{ I: 1, r: 1, e: 2, a: 1, l: 3, y: 1, i: 1, k: 1, f: 1, o: 2, d: 1 }`
