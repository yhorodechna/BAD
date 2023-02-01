function getUniqueSymbolFromWord(word) {
    for (let i = 0; i < word.length; i++) {
        if (word.indexOf(word[0], 1) === -1) {
            return word[0]
        } else {
            word = word.replaceAll(word[0], '');
            i = 0;
        }
    }
    return undefined
}

function getUniqueSymbolFromSentence(sentence) {
    const words = sentence.trim().split(' ')
    const uniqueSymbols = words.filter(word => word).map(word => getUniqueSymbolFromWord(word)).filter(word => word).join('');
    return getUniqueSymbolFromWord(uniqueSymbols)
}
