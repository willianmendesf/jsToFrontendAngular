// Laço "for"
// Exibir os números de 1 a 10 na tela
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let item = 1
let data = []
for (data.length; data.length <= 100; item++) {
  data.push(`Object ${item}`)
}

console.log(data)

let myDataIn = [1,2,3,4,5,6,7,8,9,10]
for (index in myDataIn) {
  console.log(index)
}

let myDataOf = [1,2,3,4,5,6,7,8,9,10]
for (item of myDataOf) {
  console.log(item)
}


// Laço "while"
// Exibir os números de 1 a 10 na tela
let gamePoints = 0
while (gamePoints <= 10) {
  console.log('Gamer Over - You Looser!')
  gamePoints++
}

// Laço "do-while"
// Exibir os números de 1 a 10 na tela
let item3 = 1;
do {
  console.log('teste')
  console.log(item3);
  item3++;
} while (item3 <= 10);
