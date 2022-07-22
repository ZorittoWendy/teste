//Aqui eu tenho um comentario em linha 
/*Aqui eu tenho um comentario multilinha 

o código abaixo escreve alguma mensagem no devtools*/

    console.log('Bem vindos ao Starter')
    console.log("Nao iria ignorar")*/

    /**tipos de dados obejtos */
    console.log({
        name:"zoritto",
        idade: 45,
        andar: function(){
            console.log('andar')
        }
    
    })

    /** tipos de dados  array pu listas*/


    console.log([Leite, morango, frago, carne, cebola])


    /**variaveis do e tipos de dados  */

    //object

    const person ={
        name: 'jonje',
        age: 20,
        weight:88,6,
        isAdmin: true
    }

    console.log(person)*/


    //Array

    const animals =[
        'lion',
        'Monkey',
       
    {
        name:'cat'
        age: 3
    }

    ]
    console.log(animals)


    // Exercicio

    //1. Declare uma variável de nome weight
   // let weight;
    
    //2. Que tipo de dado é a variável acima?
    //console.log(typeof weight)

    //3. Declare uma variável e atribua valores para cada um dos dadoslet name = 'adam'let age = '20'let stars = 2.5let isSubscribed = true

    //4. A variável student abaixo é de que tipo de dados?

    //4.1 Atribua a ela as mesmas propriedades e valores do exercio 3

    let student = {
        name: 'adam',
        age: 20,
        stars: 45.3,
        isSubscribed: true
    }
   /*console.log(` nome ${student.name} idade ${student.age} peso${student.stars}kg`)/*
    

    /*5.Declare uma variável do array, de nome studentes e atribua a ela nenhum valor, ou seja, somente o Array vazio */

    const student []

    /**6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4(Não copiar e color o objeto, mas usar o objeto criado e inserir ele no array) */

    students=[
        student
    ]
    console.log(students)


    /**
     7. Coloque no console o valor da posição zero do Array acima 
     */

     console.log(students[0])

     /**8. Crie um novo student e coloque na posição 1 do Array students */

     let student = {
        name: 'adam',
        age: 20,
        stars: 45.3,
        isSubscribed: true
    }

    const john = {
        nome: "john",
        age: 23,
        weight: 67.4,
        isSubscribed: true,
    }

    students = {
        student,
        john
    }
/*
    /** 9. Sem rodar o codigo responda qual é a resposta do codigo abaixo e porque? Após sua resposta, rode o código  e veja se vacê acetou*/

    


    /** aula manipilando dados */

      let string = "123"
        console.log(Number(string))


    /** Manipulando dados */

    /** Manipulando Strings e numeros */

    /**Transformando com duas casas decimais e trocar ponto por vírgula */

     let number = 44445646.5555
    console.log(number.toFixed(2)) 

    /**Transformando letras minúsculas em maiúscula  e faça o contrário disso também */

    let word = 'programar é muito bom'
    console.log(word.thuUppercase)

    /** Manipulando Strings*/

    /**Verificando se tem a palavra Amor */

    let phrease = 'eu querio viver o amor'
    console.log(phrease.includes('amor'))

    /**Manipulando strings e Arrays  */

    /**Separe um texto que contem espaços, em um novo array onde cada é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços coloque_ */

    let pherse = 'Eu quero viver o amor !'
    let myArray = pherse.split(" ")
    let pherseWindScore = myArray.join("_")
        console.log(pherseWindScore)

    /**Criando array com construtor */
    
    let myArray = new Array ("a", "b", "c")
        console.log(myArray)
   
    /**Contando arrays */

    console.log(["a",
        {type:'array'},
        function(){ retutn: "alo"}][2])


    /**Transformando uma cadeia de caracteres elementos em um array */

    let word = 'manipulando'
        console.log(Array.from(word))

        
/**Adionando coisas no array */

let techs = (['html', 'css', 'js',])

/**adicionando um item no fim  */

techs.push('NodeJS')

/**Adicionando no começo  */

techs.splice('TypeScript')

/**Remover do fim */

techs.pop('NodeJS')

/**Remover do começo */

techs.shift('js')

/**Pegar somente alguns elementos do array */

console.log(techs.slice(1, 3))

/* Remover um item ou mais de qualquer posição de um array */

techs.splice(1, 2)

/* Encontra a posição de um elemento num array */

let.index = techs.indexOf('js')

/* EXPRESSÕES E OPERADORES */

/*
    *comando new
    *cria um novo objeto 
 */

let name = new string('mario')
console.log(name)

let date =  new date(25-03-2022)
console.log(date)

/* Operaores Unários /typeof e delete */

const person = {
    name: 'joão',
    age: 25
}
delete person.age
console.log(person)

/* Operadores Aritimeticos */

/* Muitiplicação (*) */
console.log(3 * 3)

/* Divisão (/) */
console.log(4.3 / 5.6)

/* Adição */
console.log(6 + 2)

/* Subtração */
console.log( 5 - 6)

/* resto da divisão (%) */

let rameider
remeider = 11 % 8
console.log(remeider)

/* incremento (++) */

let increment = 0
increment = ++increment
console.log(increment)

/* decremento (--) */

let decrement = 0
decrement--
console.log(decrement) 

/* exponecial (**) */

console.log(3 ** 4)

/* Grouping Operado ou Agrupamento */

let total = (3 + 5) * 3
console.log(total)

/* Operadores de comparação */

/* Irá compara valores e retorna um Bollean como à reposta a comparação */

let one =  1 
let two = 2 

/* igual a  == */

console.log(two = 1)
console.log(one = '1')

/* Diferente de != */

console.log(one != 1)
console.log(two != 1)
console.log(one != '1')


/* Estritamrnte igual a (===) */

console.log(one ==='1')
console.log(one ===1)

/* Estritamente diferente de !== */

console.log(one !=='1')
console.log(one !==1)

/* maior que > */

console.log(one > two)

/* maior ou igual >= */

console.log(one >= 1)
console.log(two >= 1)

/* Menor que < */

console.log(one < two)

/* manor ou igual <= */

console.log(one <= two)
console.log(one <= 1)
console.log(two <= 0)

/* Operdores de atrbuição  */

let = (x)

/* assigement */

x = 1

/* addition assignment */
/* x = x + 2 */

x += 2

/* subtraction assignment */
/* x = x + 1 */

x -= 1

/* Mutiplication assignment */
/* x = x * 2 */

x *= 2

/* Divison assegnment */

x /= 2

/* remainder exponention */

x %= 2 

x **= 2

/* Operadores lógicos (Loigical Operators) */

/* Dois valores Bolleanos, quando verificados resultará em verdadeiro ou falso */

/* Operador condicional Ternário */

/* Dependendo da condição, nós rerceberemos valores diferentes */

/* Condição valor 1 se não valor 2 */

/* Codition ? value 1 : value 2 */

/* Exemplos  */

/* café da manja top */
let pao = true 
let queijo = true

const niceBreakfest = pao && queijo 'Café top ' : 'Café ruim'

console.log(niceBreakfest)

/* Mair de 18 anos  */

let age =  18

const driver = age >= 18 ? 'Can driver' : "can't driver" 
console.log(driver)

/* Operador de string */

/* coparação compartion */
console.log('a' == 'a')

/* Concatenation (concatenação) */
/* Retorna a união de duas strings */

let alpha = 'alpha'
console.log(alpha + 'bet')

/* Type conversion (typecasting ) vs type coersion */

console(number('9') + 5)

/* Falsy  
Quando um valor é considerado em contextos onde bolleano é obrigtório (condicionais e loop) 
false 
0 
-0
""
Null
undefined
NaN*/

console.log(false ? 'verdadeiro' : 'false')



/* THURTY
Quando um valor é considerado true (verdaeiro) em contexto onde um bolleano é obrigátorio (condicionais e loops) 
true 
{}
[]
1
3.23
"0"
"false"
"-1"
Infinty
-Infinty*/

console.log(true ? 'verdadeiro' : 'false')


/* CONDICIONAIS */

/* If e Else */

let temperature = 34

if(temperature >= 37.6){
    console.log('febre alta')

}else if(temperature == 35.6){
    
    console.log('febre moderada')

}else{
    console.log('saudável')
}

/* Switch */

let expresion = 'a'

switch(expresion){
    //caso 
    case 'a':
        console.log('a')
        break
    case 'b':
        console.log('b')
        break
    default:
        console.log('default')
        break
}

/* calculadora simples */

function calculate(number1, operator, number2){

    let result
    
    switch(operator){

      case '+':
          result = number1 + number2
          break
      case '-': 
        result = number1 - number2
        break
      case '*':
        result = number1 * number2
        break
      case '/':
          result = number1 / number2
          break
       default:
           console.log('número indefinido') 
           break           

    }
      return result
}

console.log(calculate(7, '+', 8)) 

/* Throw */

function sayMyname(name = ''){

    if (name === ''){
        throw new Error("")
    }

    console.log('depois do erro')

    //Try e Cacth

    try{
        sayMyname()
    }catch{
        console.log(e)
    }
}



/* Estrutura de repetição */
/* For */
/* Break-pausa a execução do loop */
/* Continue - a execução do momento */

for(let i = 10; i > 0; i--){
    if(i === 5){
        //break;
        continue;
    }

    console.log(i)

}


/* While */

let i = 0;
while(i < 10){
    console.log(i)


    i /= 10
    //i++;
}



/* for of */

let name = 'Draogon'
let names = ['shivas', 'lion', 'Giuld']

for(let name of names){
    console.log(name)
}

/* for in */

let person = {  

    neme:'john',
    age: 30,
    whight: 88.6
}

for(let property in person){

    console.log(property)
    console.log(person[property])
}