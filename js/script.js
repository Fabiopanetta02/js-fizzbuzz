//Stampaggio in console 100 numeri
for (let i = 1; i <= 100; i++){
    //Se il numero non è un multiplo ne di 3 e ne di 5
    if(( i % 3 != 0 ) && ( i % 5 != 0 )){
        console.log(i)
    }
    //Se il numero è un multiplo di 3 e di 5
    else if(( i % 3 == 0 && i % 5 == 0 )){
        console.log("FizzBuzz")
    }
    //Se il numero è un multiplo di 3
    else if( i % 3 == 0 ){
        console.log("Fizz")
    }
    //Se il numero è un multiplo di 5
    else if( i % 5 == 0 ){
        console.log("Buzz")
    }
}

