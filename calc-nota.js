/** Pssst: Recuerda leer el fichero README.md */

function calcNota(input, solution) {
  let aciertos = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === solution[i]) {
      aciertos++;
    } else {
      fallos++;
    }
  }
  return aciertos/solution.length * 100;
}

console.log(calcNota("ABCDBBACAD", "ABCDBBACAD")); // 100 (el examen está perfecto)
console.log(calcNota("CBCDBBACAC", "ABCDBBACAD")); // 80 (hay 2 errores)
console.log(calcNota("CCACCCCAVV", "ABCDBBACAD")); // 0 (todo mal...)
