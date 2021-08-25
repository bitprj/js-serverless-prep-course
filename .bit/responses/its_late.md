## Running Late ⏰
1. Create a new branch from `main` named `late`. 
2. Create a function `running_late()` in JavaScript that returns `It is late!` if the time is at or after 10:00 PM, and `It is still early!` if it is not. 
3. Commit your code to the `late` branch. 
4. Create a pull request to merge the `late` branch onto `main`, and only merge the pull request when the bot approves your changes. 



### 🔨 Function Specs:
**Function name**: `running_late()`

**Arguments:**
- `date` - a string that the `new Date()` is created from.
> Do NOT use `Date.now()`

**Return:**
- Either `It is late!` or `It is still early!`, depending on the time.

### 🧠 Resources:
- [Date() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)
- Google


### 📝 Test your work:
⭐ if the time is 8:00 AM, your function should return `It is still early!`
⭐ if the time is 11:30 PM, your function should return `It is late!`

💡 Make sure to put the line `module.exports = running_late` at the end of your file so we can test your code!