const RESULT_TEXT_EL = document.getElementById("result__text")

function showUniqueSymbolOfTextarea() {
    const textareaValue = document.getElementById("form__textarea").value;
    const uniqueSymbol = getUniqueSymbolFromSentence(textareaValue);
    RESULT_TEXT_EL.innerHTML = uniqueSymbol 
    ? uniqueSymbol 
    : "Unique symbol not found!"
}