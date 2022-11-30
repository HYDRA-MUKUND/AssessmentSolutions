
const X = parseInt(prompt("Enter number (positive)"));


    if ( primeNumberChecker(X) ) {
        console.log(`${X} is a prime number`);
    } 
    else {
        console.log(`${X} is not a prime number`);
    }
    
    //Below code to calculate next prime number

    let nextPrimeNumber=X+1;
     
    while( !primeNumberChecker(nextPrimeNumber) ){
      nextPrimeNumber++;
    }
    
    console.log(`The difference between X(${X}) and nextPrimeNumber(${nextPrimeNumber}) is ${nextPrimeNumber-X}`);
 


 function primeNumberChecker(number){

    let isPrimeNumber = true;

    for (let i = 2; i <= number/2; i++) {

        if (number % i == 0) {
            isPrimeNumber = false;
            break;
        }
    }
    return isPrimeNumber;
 }
