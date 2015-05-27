var primeSift = function(number) {

  var newArray = [];
  var loopArray = [];
  for(var i = 2; i <= number; ++i) {
    newArray.push(i);
  }

  for(var i = 2; i <= number; ++i) {
    newArray = findPrime(i, newArray);

  }


  return newArray;
};

var findPrime = function(prime, newArray) {
  var primeArray = [];
  newArray.forEach(function(number){
    if (number % prime !== 0 || number === prime) {
      primeArray.push(number);
    }
  });
  return primeArray;
};


// if (number % 2 !== 0 || number === 2){
//   if (number % 3 !== 0 || number === 3){

// var findPrime = function(array) {
//   array.forEach(function(number){
//     prime = 2; prime <= number; ++prime){
//       if (number % prime !== 0){
//         primeArray.push(number);
//       }
//     }
//   });
//   return findPrime(primeArray);
// }


// for(var i = 3; i <= number; ++i){
//   if (i % prime !== 0)
//     primeArray.push(i);
//   }
// }
// return primeArray;

//   var start = 2
//   numberArray.forEach(function(number) {

//       ++start;
//     }
//   });
//   return primeArray;
// }
