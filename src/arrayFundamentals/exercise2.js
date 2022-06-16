/**
 * En este desafío tienes un array de objetos que representan datos de personas con los siguientes atributos:

    name
    lastName
    age

El reto aquí es retornar un array de strings con los nombres, la solución debería tener un input y output como los siguientes:

Input

solution([
  {
    name: 'Nicolas',
    lastName: 'Molina',
    age: 28
  },
  {
    name: 'Valentina',
    lastName: 'Molina',
    age: 19
  },
  ...
]);

Output

['Nicolas', 'Valentina']
 */

function extractNames(array) {
    return array.map(person => person.name)
};

function extractNamesAlternative (array) {
	const names = [];
	array.forEach(element => {
		names.push(element.name);
	});
	return names;
};

module.exports = {
    extractNames,
    extractNamesAlternative
}