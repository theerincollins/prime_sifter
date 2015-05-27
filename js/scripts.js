var primeSift = function(number) {

  var newArray = [2];

  for(var i = 3; i <= number; i+=2) {
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


$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    var number = $("input#number").val();
    start = performance.now();
    var result = primeSift(number);
    end = performance.now();
    console.log(end - start)
    $("#primes").text(result);
    $("#results").show();

    event.preventDefault();
  });
});
