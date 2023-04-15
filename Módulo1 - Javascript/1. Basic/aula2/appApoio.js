// // TIPOS DE DADOS

1. string
2. number
3. undefined
4. null
5. any
6. boolean
7. object
8. array


// descobrir tipo => typeof
console.log(typeof "1")


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
let string = "Pedro Marcos"


// NUMBER
let number = 1
let idade = 29
let gols = 1000
let pi = 3.14  // ponto para decimal
let exp = 2e10 // 20000000000000000

// BOOLEANO => true or false
let boolean = true
let meta = false


// UNDEFINED
let undefiNed = undefined

// NULL 
let Null = null


// OBJECT
// SEMPRE => Chave Valor
let object = {}
let ex1 = { name: "Pedro", idade: 28, end: "Rua Casa da Esquina", number: 18 }
let error =
{
  name: {
    idades: [1, 2, 3, 4]
  },
  { },
[],
}


// ARRAY 
// UM ARRAY GUARDA TUDO
let array = []

let arrayNumber = [1, 2, 3, 4, 5, 6]

let arrayString = ["name", "name1", "name2", "name3", "name4"]
let arrayBoolean = [true, false, true, false]
let arrayUndefined = [undefined, undefined, undefined, undefined]
let arrayNull = [null, null, null, null]
let arrayObject = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
let arrayArray = [[], [], [], [], [], [], [], []]
let arrayFuck = ["name", true, undefiNed, null, {}, []]

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
let item = 1

let template = `myTemplateString ${item}` // console => myTemplateString 1;


// typeof 
// para descobrir o tipo/tipagem da variável
let tipo = typeof 1                 // number
let tipo2 = typeof "1"              // string
let tipo3 = typeof true             // boolean
let tipo4 = typeof false            // bolean
let tipo5 = typeof {}               // object
let tipo6 = typeof []               // object => array
let tipo7 = typeof new Date()       // object => date
let tipo9 = typeof function () { }    // function