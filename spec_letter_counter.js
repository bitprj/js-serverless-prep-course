function spec_letter_counter(sentence) {
    let counter = {};
    for (let i = 0; i < sentence.length; i++) {
        let alnumRegex = /^[a-z0-9]+$/i;
        let valid = alnumRegex.test(sentence[i]);

        if (valid) {
            if (sentence[i] in counter) {
                counter[sentence[i]] += 1;
            }
            else {
                counter[sentence[i]] = 1;
            }
        }

    }

    return counter;
}

exports.spec_letter_counter = spec_letter_counter;