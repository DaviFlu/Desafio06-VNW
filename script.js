/* - - QUESTÃO 1 - - */
let pessoal = {
    nome: "Davi", 
    idade: 22,
    bairro: "Engenho Novo"
}
console.log (pessoal)

/* - - QUESTÃO 2 - - */
pessoal.curso = "Ciência da Computação"
console.log(pessoal)

/* - - QUESTÃO 3 - - */
delete pessoal.bairro

/* - - QUESTÃO 4 - - */
console.log (pessoal)

/* - - QUESTÃO 5 - - */

let cadastro = [
    objeto1={nome: "Davi", idade:22,telefone:"9999-9999",amigos:"Yuri"},
    objeto2={nome: "Luis", idade:25,telefone:"8888-8888",amigos:""},
    objeto3={nome: "Vitor", idade:31,telefone:"7777-7777",amigos:""},
    objeto4={nome: "Ronaldo", idade:15,telefone:"6666-6666",amigos:""},
    objeto5={nome: "Erick", idade:44,telefone:"5555-5555",amigos:""}
   
]
cadastro[1].amigos = "Alberto"
cadastro[2].amigos = "Michel"
cadastro[3].amigos = "Felipe"
cadastro[4].amigos = "Roberto"

for (i = 0; i <= 4; i++){
    console.log(`Nome: ${cadastro[i].nome} tem o amigo: ${cadastro[i].amigos}`)
}