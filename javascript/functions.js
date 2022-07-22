// testando os codigos das ficões 


/*function createPhrases(){
    console.log("Estudar é muito bom")
    console.log("Paciência e persistência")
    console.log("Revisão é a mãe do aprendizado")
}


createPhrases()

console.log('fim do programa')*/


/* Exercicio de Java Script */

/* Transformar notas escolares */
/* Crie um algoritmo que transforme as notas do sistema númerico para sistema de notas em caracteres tipo A B C

* 90 para cima - letra A 
* entre 80 e 89 - letra B
* entre 70 e 79 - letra C
* entre 60 e 69 - letra D
* entre 50 e 59 - letra E 
*/


/* let nota = 88

if(nota >= 90){

    console.log('Letra A')
    
}else if(nota > 80 && nota < 89){
    
    console.log('Letra B')
} */


function calcularNota(valorNota){


    let nota

    switch(valorNota){

        case  nota => 90:
            console.log('Aprovado parabéns você tirou um A')
            break
        default:
            console.log('numero indefindo')
            break

    }

    return nota
}

console.log(calcularNota(90))


    
  

