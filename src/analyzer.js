export const analyzer = {
  getWordCount(text) {
      return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  },
  getCharacterCount(text) {
      return text.length;
  },
  getCharacterCountExcludingSpaces(text) {
      return text.replace(/\s+/g, '').length;
  },
  getNumbersCount(text) {
      return (text.match(/\d+/g) || []).length;
  },
  getNumbersSum(text) {
      return (text.match(/\d+/g) || []).reduce((sum, num) => sum + Number(num), 0);
  },
  getAverageWordLength(text) {
      const words = text.trim().split(/\s+/).filter(word => word.length > 0);
      const totalLength = words.reduce((sum, word) => sum + word.length, 0);
      return words.length ? (totalLength / words.length).toFixed(2) : 0;
  }
};