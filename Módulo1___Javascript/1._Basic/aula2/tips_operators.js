// TIPOS DE DADOS
// 1. string
// 2. number
// 3. undefined
// 4. null
// 5. boolean
// 7. object
// 8. array


// Operadores lógicos
//  &&    e
//  ||    ou
//  ==    igual
//  ===   igual(valor)-igual(tipo)
//  !==   Diferente
//  <     menor que
//  >     maior que
//  <=    menor ou igual a
//  >=    maior ou igual a
//  +     soma
//  -     subtração
//  *     multiplicação
//  /     divisão
//  %     modulo



// STRING
let string = 'Marcos Alberto'




// NUMBER examples
let number = 1
let idade = 29
let gols = 1000
let pi = 3.14  // ponto para decimal
let exp = 2e10 // 20000000000 (exponencial antes do 'e' o valor e depois a quantidade de '0')

// "e" para indicar a potência de 10. para representar 2x10^10 em JavaScript,
// você pode usar a notação 2e10. significa que o número 2 vezes 10 elevado à 10ª potência
// =  20 000 000 000



// NULL EXAMPLE
let value = null; // ausência de valor
console.log(value)

// UNDEFINED EXAMPLE
let valueUndefined;
console.log(valueUndefined.value)

let valorNulo = null;
let valorIndefinido;

console.log(typeof valorNulo);         // Saída: object
console.log(typeof valorIndefinido);   // Saída: undefined

// A diferença entre NULL & UNDEFINED
// null e undefined são diferentes, embora ambos representem a ausência de valor.
// No primeiro exemplo, é atribuído o valor null, indicando que a variável contém a ausência de valor.
// No segundo exemplo, não é atribuído um valor, o que resulta em 'undefined'.




// BOOLEANO => true or false
let boolean = true
boolean = false

// Example
if(boolean == true)
  console.log('verdadeiro')
else
  console.log('falso')





// OBJECT
// SEMPRE => { Chave : Valor }
let object = {}
let ex1 = { name: "Pedro", "idade": 28, 'end': "Rua Casa da Esquina", number: 18 }
console.log(ex1.name)

let error = {
  name: {
    idades: [1, 2, 3, 4]
  },
}




// ARRAY
// UM ARRAY GUARDA TUDO
let array = []

let arrayNumber = [1, 2, 3, 4, 5, 6]

console.log(arrayNumber[2])

let arrayString = ["name", "name1", "name2", "name3", "name4"]
let arrayBoolean = [true, false, true, false]
let arrayUndefined = [undefined, undefined, undefined, undefined]
let arrayNull = [null, null, null, null]
let arrayObject = [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ]
let arrayArray = [ [], [], [], [], [], [], [], [] ]
let arrayFuck = [ "name", true, undefiNed, null, {}, [] ]

let arrayEx = [
  1,
  [[], [], [], [], [], [], [], [],
  [{}, {}, {}, {}, {}, {}, {}, {},
    [
      [1], [2], [3], [4],
      {}, {}, {}, {}, {},
    ]
  ]
]]

let info = [
  { "id": 1, "name": "Gilberto Coelho Neto JEI**" },
  { "id": 2, "name": "Alana Botelho JANETE GIU**" },
  { "id": 3, "name": "Marcos Danilho PedROSa MGU *" }
]


// // Template String
let idade1 = 29
let template = `Eduardo tem ${idade1} anos` // console => myTemplateString 1;
console.log(template)

// typeof
// para descobrir o tipo/tipagem da variável
let tipo = typeof 1                   // number
let tipo2 = typeof "1"                // string
let tipo3 = typeof true               // boolean
let tipo4 = typeof false              // boolean
let tipo5 = typeof {}                 // object
let tipo6 = typeof []                 // object => array
let tipo7 = typeof new Date()         // object => date
let tipo9 = typeof function () { }    // function






// descobrir tipo da variável => typeof
console.log(typeof(date=>{}))
