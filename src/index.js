import { analyzer } from './analyzer.js';

// Seleccionar elementos del DOM
const textarea = document.getElementById('input-text');
const resetButton = document.getElementById('reset-button');
const wordCountSpan = document.getElementById('word-count');
const charCountSpan = document.getElementById('char-count');
const charCountNoSpacesSpan = document.getElementById('char-count-no-spaces');
const numCountSpan = document.getElementById('num-count');
const numSumSpan = document.getElementById('num-sum');
const avgWordLengthSpan = document.getElementById('avg-word-length');

// Función para actualizar las métricas
function actualizarMetricas() {
    const text = textarea.value;
    wordCountSpan.textContent = analyzer.getWordCount(text);
    charCountSpan.textContent = analyzer.getCharacterCount(text);
    charCountNoSpacesSpan.textContent = analyzer.getCharacterCountExcludingSpaces(text);
    numCountSpan.textContent = analyzer.getNumbersCount(text);
    numSumSpan.textContent = analyzer.getNumbersSum(text);
    avgWordLengthSpan.textContent = analyzer.getAverageWordLength(text);
}

// Registrar event listener para el evento input del textarea
textarea.addEventListener('input', actualizarMetricas);

// Registrar event listener para el evento click del botón de reset
resetButton.addEventListener('click', () => {
    textarea.value = '';
    actualizarMetricas();
});