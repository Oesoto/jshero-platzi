/**
 * En este desafío tienes un array de números, usando la función map debes retornar todos los números del array multiplicados por dos.

La solución debería tener un input y output como los siguientes:

Input

solution([2, 4, 5, 6]);

Output

[4,8,10,12]
 */

function multiplyByTwo(array) {
    return array.map(element=>element*2)
};

const input = [2, 4, 5, 6];
const result = multiplyByTwo(input);

module.exports = multiplyByTwo;
