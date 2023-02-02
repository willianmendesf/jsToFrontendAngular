// 1. Escopo - o principal motivo para evitar var



// function run() {
//   var foo = "Foo";
//   let bar = "Bar";
//   console.log(foo, bar); // Foo Bar

//   {
//     var moo = "Mooo"
//     let baz = "Bazz";
//     console.log(moo, baz); // Mooo Bazz
//   }
  
//   console.log(moo); // Mooo
//   console.log(baz); // ReferenceError
// }

// run();



// // 2. Referencia - referir antes de existir

// function run() { 
  
//   console.log(foo); // indefinido 
//   // Içamento em ação! 
  
//   var foo = "Foo"; 
//   console.log(foo); // Foo 
// } 

// run();

// function checkHoisting() { 
//   console.log(foo); // ReferenceError 
//   let foo = "Foo"; 
//   console.log(foo); // Foo 
// } 

// checkHoisting();



// 3. Vinculação de Objeto Global
// No nível superior let, ao contrário var de , não cria uma propriedade no objeto global.


// 4. Redeclaração
// No modo estrito, [var] permitirá que você declare novamente a mesma variável no mesmo escopo enquanto [let] gera um SyntaxError.

// 'use strict';
// var foo = "foo1";
// var foo = "foo2"; // No problem, 'foo1' is replaced with 'foo2'.

// let bar = "bar1"; 
// let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared
