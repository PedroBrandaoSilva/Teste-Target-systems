// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será
//  a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um 
//  programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci 
//  e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou 
// pode ser previamente definido no código;


let number = 10 // pode ser o input do usuário
let listNumbers





function Fibonacci(num){
    

    if(num < 0 ){
        return `O número ${num} não pertence a tabela Fibonacci`
    }

    let num1 = 0
    let num2 = 1




    while(num2 < num){
       let total = num1 + num2

       num1 = num2
       num2 = total
       
       

    }

    if(num2 === num || num === 0){
        return `o número ${num} pertence a tabela Fibonacci`
    }else{
        return `o número ${num} não pertence a tabela Fibonacci`
    }
    

}


console.log(Fibonacci(number));
