
export const analyzer = { /*exportando analizer, es necesario para que las funciones puedan ser derivadas a donde se requieran*/

  getWordCount: (text) => { /*variable de recuento de palabras*/
    if (text.trim() === '') { /* elimina los espacios en blanco al principip y final */
      return 0; /*retorna cero si elimina los espacios en blanco*//**/
    }

    return text.trim().split(/\s+/).length; /*length: calcula la longitud del array*/
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    let count = 0;
    for (let i = 0; i < text.length; i++) { /*crea una iteracion*/
      if (!/\s|[^a-zA-Z0-9]/.test(text[i])) { /*excluye espacio y filtra que solo letras y numeros sean mostrados*/
        count++;
      }
    }
    return count;
  },
  /*La función getNumberCount recorre cada carácter de 
  una cadena y cuenta cuántos de esos caracteres son dígitos */
  getNumberCount: (text) => {
    if (text.slice(-1) === '.'){ /*slice extrae un array y devuelve otro */
      text = text.slice(0, -1);
    }
    const numbers = text.split(/\s+/).map(element => { /*deivide en array y itera srbre cada elemento del mismo */
      if (!isNaN(parseFloat(element)) && isFinite(element)){ /*la funcion esta creada arriba */
        return parseFloat(element);
      }
    }).filter( Number );/*filtra lo que no sea undefined */
    return numbers ? numbers.length : 0; /*verifica si numbers no es null ,undefined, vacio o 0 */
  },
  getNumberSum: (text) => {
    let sum = 0;
    if (text.slice(-1) === '.'){
      text = text.slice(0, -1);
    }
    const numbers = text.split(/\s+/).map(element => {/*/\d+\.\d+\./g , */
      if (!isNaN(parseFloat(element)) && isFinite(element)){
        return parseFloat(element);
      }
    }).filter( Number );
    for (let i = 0; i < numbers.length; i++) {
      /*condicion ? valor_si_cierto : valor_si_falso; */
      sum += parseFloat(numbers[i]); /* parseFloat convierte un flotante en valor numerico */
    }
    return sum;
  },
  getAverageWordLength: (text) => {
    /*split se usa para dividir y manipular cadena de caracteres */
    const words = text.trim().split(/\s+/);
    if (words.length === 0) {
      return 0;
    }
    let totalLength = 0;
    for (let i = 0; i < words.length; i++) {
      totalLength += words[i].length;
    }
    return parseFloat((totalLength / words.length).toFixed(2));
  }/*toFixed, formatear números en JavaScript, asegurando que se muestren con el número deseado */
};
