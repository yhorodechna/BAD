function getUniqueSymbolFromWord(word) {
    for (let i = 0; i < word.length; i++) {
        if (word.indexOf(word[0], 1) === -1) {
            return word[0]
        } else {
            word = word.replaceAll(word[0], '');
            i = -1;
        }
    }
    return undefined
}

function getUniqueSymbolFromSentence(sentence) {
    const words = sentence.split(' ');
    const uniqueSymbols = words.map(word => getUniqueSymbolFromWord(word)).filter(symbol => symbol).join('');
    return getUniqueSymbolFromWord(uniqueSymbols)
}
