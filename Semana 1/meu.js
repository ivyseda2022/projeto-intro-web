// 1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
// Você precisará criar pelo menos:
//   * uma característica String;
//   * uma característica Number;
//   * uma característica Boolean;
// Exemplos abaixo
// const nome; //string
// const idade; //number 
// const verificouEmail; //boolean 
// Recomendamos, pensando no futuro, que você também pense em dados que podem receber múltiplos valores de uma só vez. Não vamos usar estes dados até mais pra frente, mas é legal já ter uma ideia.
const comida1= 'lasanha'
const ingredientes1= 5 
const boleano1 = ingredientes1==5
const temperaturaesabor1=['quente','frango'] 
console.log (comida1.toUpperCase(), ingredientes1,boleano1, temperaturaesabor1)
// 2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.
// Exemplo:
// const nome1 = "Fulano";
// const idade1 = 33;
// const verificouEmail1 = false;

// const nome2 = "Sicrano";
// const idade2 = 41;
// const verificouEmail2 = true;

// const nome3 = "Beltrano";
// const idade3 = 27;
// const verificouEmail3 = true;
const comida2='Hamburguer'
const ingredientes2= 3
const boleano2 = ingredientes2 < 3
const temperaturaesabor2=['quente','frio'] 
console.log (comida2.toUpperCase(), ingredientes2, boleano2, temperaturaesabor2)

const comida3='Hot dog'
const ingredientes3= 6
const boleano3 = ingredientes3 != 7
const temperaturaesabor3=['quente','linguiça'] 
console.log (comida3.toUpperCase(), ingredientes3, boleano3, temperaturaesabor3)

const comida4='Batata Rostie'
const ingredientes4= 2
const boleano4= ingredientes4 >= 5
const temperaturaesabor4=['quente','napoletana'] 
console.log (comida4.toUpperCase(), ingredientes4, boleano4, temperaturaesabor4)

// 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const
// 💡A média deve ser igual à soma dos itens, dividida pelo total de itens.

const somadosingredientes= (ingredientes1+ingredientes2+ingredientes3+ingredientes4)/4
console.log ('a média dos ingredientes é:',somadosingredientes)

// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
// 💡 Exemplo
// const verificaEmails = verificouEmail1 && verificouEmail2 && verificouEmail3;
// console.log(verificaEmails);
// // nesse caso, vai imprimir false, pois verificouEmail1 === false
const verificarboleano = boleano1 && boleano2 && boleano3 && boleano4 
console.log('a verificação dos boleanos é:',verificarboleano)


// 5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.
// const nome; //string
// const idade; //number
// const verificouEmail; //boolean
// const projetos; //array de strings

// 6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
//   1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.
// FULANO
// idade: 33
// verificou email?: false
// projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"] 

