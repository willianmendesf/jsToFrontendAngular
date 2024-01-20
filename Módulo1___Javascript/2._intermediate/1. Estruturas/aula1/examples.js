// if...else:

//Exemplo 1:
var numero = 10;

if (numero % 2 === 0) {
    console.log("O número  é par.");
} else {
    console.log("O número é ímpar.");
}

// Exemplo 2:
var temperatura = 25;

if (temperatura < 18) {
    console.log("Está frio.");
} else if (temperatura >= 18 && temperatura <= 24) {
    console.log("Está agradável.");
} else {
    console.log("Está quente.");
}

// Exemplo 3:
var permission = "admin"
var subPermission = "guest"

if (permission === "admin" && subPermission === "guest") {
    console.log("Bem-vindo, Cliente!");
} else {
    console.log("Usuário não autorizado.");
}

// Exemplo 4:
var numero1 = 5;
var numero2 = 10;

if (numero1 > numero2) {
    console.log("O primeiro número é maior.");
} else if (numero1 < numero2) {
    console.log("O segundo número é maior.");
} else {
    console.log("Os números são iguais.");
}

// Exemplo 5:
var saldo = 2000;
var valorCompra = 1200;

if (valorCompra <= saldo) {
    saldo -= valorCompra;
    console.log("Compra efetuada com sucesso!");
    console.log("Seu saldo é: " + saldo)
} else {
    console.log("Saldo insuficiente.");
}






// switch...case:
// Exemplo 1:
var diaDaSemana = "segunda-feira";

switch (diaDaSemana) {
    case "segunda-feira":
        console.log("Hoje é segunda-feira.");
        break;
    case "terça-feira":
        console.log("Hoje é terça-feira.");
        break;
    case "quarta-feira":
        console.log("Hoje é quarta-feira.");
        break;
    case "quinta-feira":
        console.log("Hoje é quinta-feira.");
        break;
    case "sexta-feira":
        console.log("Hoje é sexta-feira.");
        break;
    case "sábado":
        console.log("Hoje é sábado.");
        break;
    case "domingo":
        console.log("Hoje é domingo.");
        break;
    default:
        console.log("Dia inválido.");
        break;
}


// Exemplo 2:
var mes = 4;

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Mês inválido.");
        break;
}


// Exemplo 3:
var opcao = 4;
var valor1 = 10;
var valor2 = 5;
var resultado;

switch (opcao) {
    case 1:
        resultado = valor1 + valor2;
        console.log(`A soma de ${valor1} e ${valor2} é ${resultado}.`);
        break;
    case 2:
        resultado = valor1 - valor2;
        console.log(`A subtração de ${valor1} e ${valor2} é ${resultado}.`);
        break;
    case 3:
        resultado = valor1 * valor2;
        console.log(`A multiplicação de ${valor1} e ${valor2} é ${resultado}.`);
        break;
    case 4:
        resultado = valor1 / valor2;
        console.log(`A divisão de ${valor1} por ${valor2} é ${resultado}.`);
        break;
    default:
        console.log("Opção inválida.");
        break;
}

// Exemplo 4:
var idade = 20;
var possuiCNH = true;

switch (true) {
    case idade >= 18 && possuiCNH:
        console.log("Pode dirigir.");
        break;
    case idade < 18:
        console.log("Não pode dirigir por ser menor de idade.");
        break;
    case possuiCNH:
        console.log("Não pode dirigir por não possuir CNH.");
        break;
    default:
        console.log("Dados inválidos.");
        break;
}


// Exemplo 5:
var nome = "João";
switch (nome) {
    case "João":
    case "José":
    case "Pedro":
        console.log("Usuário cadastrado.");
        break;
    case "Ana":
    case "Maria":
    case "Juliana":
        console.log("Usuária cadastrada.");
        break;
    default:
        console.log("Usuário(a) não cadastrado(a).");
        break;
}



// Ternário

// Exemplo 1:
var saldo = 1000;
var valorCompra = 800;
var mensagem = (valorCompra <= saldo) ? "Compra efetuada com sucesso!" : "Saldo insuficiente.";
console.log(mensagem);


// Exemplo 2:
var idade = 20;
var categoria = (idade >= 18) ? "Adulto" : "Menor de idade";
console.log(`A categoria do usuário é ${categoria}.`);


// Exemplo 3:
var nota = 7.5;
var situacao = (nota >= 6) ? "Aprovado" : "Reprovado";
console.log(`O aluno foi ${situacao}.`);


// Exemplo 4:
var numero1 = 8;
var numero2 = 8;
var maiorNumero = (numero1 > numero2) ? numero1 : numero2;
console.log(`O maior número é ${maiorNumero}`)

// Exemplo 5:
var nome = "Maria";
var mensagem = (nome === "João") ? "Usuário cadastrado." : "Usuário não cadastrado.";
console.log(mensagem);

// Exemplo 1:
var erro = { message: "O recuso não existe ou não funciona adequadamente." }

try {
    var numero = 10;
    console.log(numero.toFixed(10)); // Essa função não existe para números inteiros
} catch (erro) {
    console.log("Ocorreu um erro: " + erro.message);
}

// Exemplo 2:
try {
    var nome = "Lucas";
    console.log(nome.toUpperCase()); // Transforma todas as varras da string em maiúsculas
} catch (erro) {
    console.log("Ocorreu um erro: " + erro.message);
}

// Exemplo 3:
try {
    var vetor = [1, 2, 3];
    console.log(vetor[5]); // A posição 5 não existe no vetor
} catch (erro) {
    console.log("Ocorreu um erro: " + erro.message);
}

// Exemplo 4:
try {
    var valor = "10.5";
    console.log(parseInt(valor)); // Não é possível converter a string para inteiro
} catch (erro) {
    console.log("Ocorreu um erro: " + erro.message);
}


// Exemplo 5:
try {
    var granada = null;
    console.log(granada.NaoExplodir); // O objeto não possui a propriedade "propriedade"
} catch (granada) {
    console.log("Ocorreu um erro: " + granada.message);
}