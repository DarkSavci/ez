import fs from "fs";

const checkIfEz = (word: string): boolean  => {
    return word.endsWith('ez');
}

const wordFinder = () => {
    // Import words.txt and use it to check each word if word ends with "ez" add it to string.
    const words = fs.readFileSync('words.txt', 'utf8').split('\n');
    let result = '';
    for (const word of words) {
        if (checkIfEz(word)) {
            result += word + '\n';
        }
    }
    fs.writeFileSync('ez.txt', result);
}

const wordCommar = () => {
    // Import words.txt and use it to check each word if word ends with "ez" add it to string.
    const words = fs.readFileSync('ez.txt', 'utf8').split('\n');
    let result = '';
    for (const word of words) {
            result += word + ', ';
    }
    fs.writeFileSync('ez_comma.txt', result);
}


wordCommar();