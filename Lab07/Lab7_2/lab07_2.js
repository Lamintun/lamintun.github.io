
function sum(a) {
    return a.reduce((accumulator, num) => accumulator + num, 0);
}

function multiply(a) {
    return a.reduce((accumulator, num) => accumulator * num, 1);
}

console.log('Sum for [1,2,3,4,5] : ' + sum([1, 2, 3, 4, 5]));

console.log('Multiply for [1,2,3,4,5] : ' + multiply([1, 2, 3, 4, 5]));


function reverse(a) {
    return a.split('').reverse().reduce((accumulator, char) => accumulator + char, '')
}

console.log("Reversing 'Hello World' : '" + reverse('Hello World') + "'");

function filterLongWords(a, len) {
    return a.filter(str => { if (str.length > len) return str; });
}

console.log("Filtering words longer than 5 from ['hello','hi','whatsup'] : " + filterLongWords(['hello','hi', 'whatsup'],5));