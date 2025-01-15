function findLongestWord(text) {
    
    const words = text.split(' ');

    
    let longestWord = ''; 

    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];

        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    }

    return longestWord;
}

