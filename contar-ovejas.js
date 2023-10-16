/**
 * Esta función recibe un string por parámetro. Una "O" representa una oveja, y una "L", un lobito.
 *
 * Crea una función que recibe un string con lobos y ovejas, y devuelve el número de ovejas que hay en él
 */

// function contarOvejas(ovejas) {
//     let total = ovejas.match(/O/g);
//     if (!total) {
//         return 0;
//     }
//     return total.length;
// }

function contarOvejas(ovejas) {
    let total = 0;
    for (let i = 0; i < ovejas.length; i++) {
        if (ovejas[i] === 'O') {
            total++;
        }
    }
    return total;
}

(mainStr.split(",").length - 1)

console.log(contarOvejas("O")); // 1 🐑
console.log(contarOvejas("OLLO")); // 2 🐑🐑
console.log(contarOvejas("LOOOL")); // 3 🐑🐑🐑
console.log(contarOvejas("LLL")); // 0
