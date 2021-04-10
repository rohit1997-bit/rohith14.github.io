function factorial(number){
     if(number !== 0){
         return number * factorial(number-1);
     }
     else{
         return 1;
     }
     }
      console.log(factorial(4));