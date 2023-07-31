const fs = require('fs');

const filename = 'static/data.txt';

//Read file
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading the file: ${err.message}`);
    } else {
        const wordCount = countWords(data);
        console.log(`Total word count: ${wordCount}`);
    }
});

// Used to count the words
function countWords(text) {
    const words = text.split(/\s+/);
    const wordCount = words.filter(word => word !== '').length;
    return wordCount;
}
