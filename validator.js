const validator = {
  isValid: (creditCardNumber) => {
    /*función recursiva llamada invertirCadena que invierte una cadena de texto dada. 
    La función toma un argumento, creditCardNumber, que representa la cadena de texto que se desea invertir.
*/
    function invertirCadena(creditCardNumber) {
      if (creditCardNumber === "")//La función comprueba si la cadena de entrada está vacía.
        return "";//Si está vacía, devuelve una cadena vacía. 
        
      else
        return invertirCadena(creditCardNumber.substr(1)) + creditCardNumber.charAt(0);/*Si no ,se llama  a sí misma con una subcadena de
         la cadena original que excluye el primer carácter. La subcadena resultante se concatena con el 
        primer carácter de la cadena original. Esta operación se repite hasta que se haya concatenado toda la cadena original, de manera 
        que los caracteres originales se han invertido en el orden.*/
    }
    const reverseCreditCardNumber=invertirCadena(creditCardNumber);// La variable reverseCreditCardNumber contiene la cadena invertida.*/
    const amountOfTours=creditCardNumber.length;
    let SumOffOddPositions=0;
    let SumOffEvenPositions=0;
    let i;
    /*El código realiza un bucle for se repetirá tantas veces como se indique en "amountOfTours", y en cada iteración, 
    el valor de "i" se incrementará en 1.
    ,*/
    for (i=0;i<amountOfTours;i++){ 
      const CharacterValue = parseInt( reverseCreditCardNumber.charAt(i)) ; /* En cada iteración, se extrae un carácter (un dígito) de la
       cadena reverseCreditCardNumber y se convierte a un entero con la función parseInt.*/
      if (i%2===0){ /*Luego, se realiza una comprobación para ver si la posición i es par o impar. Si la posición es 
        par, se suma el valor entero del carácter a la variable SumOffOddPositions. */
        SumOffOddPositions +=CharacterValue; //human is odd=par ;compu dberia * pq es un posicion par , pero no pq esta comenzando desde la posicion
        //0,asi que por ende esta cumpliendo la funcion de la impar que es solo sumarse :c ,aqui vole 
      }
      if (i%2===1){
        //Si la posición es impar, se multiplica el valor entero del carácter por 2
        let OddValue;
        OddValue=CharacterValue*2;
        if (OddValue>9){/* si el resultado es mayor que 9, se le resta 9.
*/
          OddValue -= 9;
        }
        //se suma el resultado a SumOffEvenPositions
        SumOffEvenPositions +=OddValue;
      }
    }
     
    //al final del bucle, las var SumOffOddPositions y SumOffEvenPositions contienen la suma de los dígitos en posiciones impares y pares
    const TotalAmount=SumOffEvenPositions+SumOffOddPositions;
    const ValEnds= TotalAmount%10; 
    if (ValEnds===0){ /*Si la suma total de ambas variables es un número múltiplo de 10, retorna true*/
      return true;
    } else {
      return false;
    }
  }, 
  maskify: (creditCardNumber) => {
    // Oculta todos los dígitos de la tarjeta de crédito excepto los últimos 4
    const length = creditCardNumber.length; //se asigna la longitud de caracteres ingresados a la variable lenght
    if(length<5){  // si la longitud es menor a 5 ,retorna el numero original sin maskify
      return creditCardNumber;
    }  
    return "#".repeat(length - 4) + creditCardNumber.substring(length - 4);
    /* ¿DE QUE MANERA ACTUA EL SUBSTRING, como sabe que son 4 nmeros de la derecha los que debe cortar?
El substringmétodo toma dos argumentos: el índice inicial y el índice final (que es opcional). El índice inicial se define como length - 4, 
lo que significa que comienza 4 caracteres antes del final de la cadena. 
No se especifica el índice final, por lo que el método predeterminado es el final de la cadena.
Entonces, el substringmétodo comienza en el índice length - 4 y va hasta el final de la cadena, devolviendo los últimos 4 caracteres de 
la creditCardNumbercadena.*/
  }
} 
export default validator;
