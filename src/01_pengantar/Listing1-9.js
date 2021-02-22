var primeNumbers = [2, 3, 5, 7, 11];

for (var i = 0; i < primeNumbers.length; i++) {
    console.log(primeNumbers[i]);
}

console.log("The value of i is " + i);

{
    for (var j = 0; j < primeNumbers.length; j++) {
        console.log(primeNumbers[j]);
    }
}

console.log("The value of j is " + j);

(function() {
    for (var k = 0; k < primeNumbers.length; k++) {
        console.log(primeNumbers[k]);
    }
})();

console.log("The value of k is " + k);