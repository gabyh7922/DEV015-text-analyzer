import { analyzer } from './analyzer.js';
document.addEventListener('DOMContentLoaded', () => {
  const textArea = document.querySelector('textarea[name="user-input"]');
  const wordCountElem = document.querySelector('[data-testid="word-count"]');
  const charCountElem = document.querySelector('[data-testid="character-count"]');
  const charNoSpacesCountElem = document.querySelector('[data-testid="character-no-spaces-count"]');
  const numberCountElem = document.querySelector('[data-testid="number-count"]');
  /*querySelector=  permite manipulación y acceso a los elementos de la página web.(dom)*/
  const numberSumElem = document.querySelector('[data-testid="number-sum"]');
  const wordLengthAverageElem = document.querySelector('[data-testid="word-length-average"]');
  /*getElementById= es un método rápido y eficiente para seleccionar un solo elemento del DOM por su atributo id*/
  const resetButton = document.getElementById('reset-button');

  const updateMetrics = () => {
    const text = textArea.value; /*se utiliza para obtener el contenido actual de un textarea */
    wordCountElem.textContent = `Recuento de palabras: ${analyzer.getWordCount(text)}`;/*actualiza el contenido de texto de un elemento*/
    charCountElem.textContent = `Recuento de caracteres: ${analyzer.getCharacterCount(text)}`;
    charNoSpacesCountElem.textContent = `Recuento de caracteres (sin espacios ni puntuación): ${analyzer.getCharacterCountExcludingSpaces(text)}`;
    numberCountElem.textContent = `Recuento de números: ${analyzer.getNumberCount(text)}`;
    numberSumElem.textContent = `Suma total de números: ${analyzer.getNumberSum(text)}`;
    wordLengthAverageElem.textContent = `Longitud media de palabras: ${analyzer.getAverageWordLength(text)}`;
  };
  //"addEventListener" elemento para diferentes eventos
  textArea.addEventListener('input', updateMetrics);
  resetButton.addEventListener('click', () => {
    textArea.value = '';
    updateMetrics();
  });
  // Inicializa las métricas en 0
});
