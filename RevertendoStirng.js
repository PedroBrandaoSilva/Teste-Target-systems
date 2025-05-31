// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua 
// preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;


let palavra = "targetsistemas"

let novaPalavra = ""

for (let i = palavra.length - 1; i >= 0; i--) {
    novaPalavra += palavra[i]
    
    
}


console.log(`${novaPalavra} -- palavra invertida`);
console.log(`${palavra} -- palavra Original`);
