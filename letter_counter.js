function letter_counter(sentence) {
    let alnumRegex = /^[a-z0-9]+$/i;

    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        let valid = alnumRegex.test(sentence[i]);

        count = valid ? count + 1 : count;
    }
    return count;
}

exports.letter_counter = letter_counter;