/* variáveis*/

var nome= 'Gi'
let sobrenome = 'Ferreira' // vamos utilizar essa forma
nomedomeio = 'Silva'

let n1 = 2
let n2 = 10
let comida = 'maçã'
let fumante = false

console.log(n1, n2, comida, fumante)

//  tipos de dados //

console.log( typeof n1) // Typeof é o tipo de variável que está a frente dele
console.log( typeof n2)
console.log( typeof comida)
console.log( typeof fumante) 

//  dado é uma informação detalhada //
//informação dado trabalhado de alguma forma//

let veiculos =[ 'carro', 'moto', 'avião'] // array
console.log( typeof veiculos) // todo array é do tipo object em js

let salvar = function(){

}
console.log( typeof salvar)// salvar é do tipo funtion//

// string = nome //
// boolean = verdadeiro ou falso

// estruturas de decisão //
// if(condição){
   // valor se a confição for verdadeiro
// }else{//
   // valor se a condição for falso} //

   let nota = 2
   if(nota >5 ){
    console.log( "passou")
   }else{
    console.log( "reprovou")
   }

   if (nota>=5){
    console.log( "parabéns, está aprovado")
   }

   if(nota>=7){ // if com mais condições//
    console.log( "aprovado")

   } else if (nota >=5){
    console.log( "recuperação")
   }else{
    console.log( "reprovado")
   }

   let dia = 9
   switch (dia) {

    case 1:
        console.log( "Domingo")

        break
        case 2: 
        console.log( "Segunda")

        break
        case 3:
            console.log( "Terça")

            break
case 4:
    console.log( "Quarta")

    break
    console.log( "Quinta")

    break
case 5:
    console.log( "Sexta")

    break
    case 6: 
    console.log( "Sábado")

    break
    default: // predefinição, estrutura padrão//
        console.log( "Dia inválido")
   }

//    Estrutura de repetição//

let contador =1 
while(contador <=10){
    console.log( contador)
    contador = contador + 1 // ou contador ++
}

for(let contador2= 10; contador2<=20; contador2++) {
    console.log( contador2)  
}