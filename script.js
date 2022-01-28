 // Crie um array que receba 5 itens e exiba no console.
const produtos=["Cenoura","trigo","ovos","leite","Manteiga"]
console.log(typeof(produtos))
console.log(produtos)

// Utilize um método para adicionar um nome ao inicio do array.
produtos.unshift("Ghislain")
console.log(produtos)

// Utilize um método para remover o último nome do array.
produtos.pop()
console.log(produtos)

// Utilize um método para adicionar dois nomes ao fim do array.
produtos.push("forma","Forno")
console.log(produtos)

// Utilize um método para remover o primeiro nome do array.
produtos.shift()
console.log(produtos)

// Utilize um método para organizar em ordem crescente o seguinte array:
 let numbers = [7,5,6,3,8,9,2,1,4]
 numbers.sort(function(a,b){return a-b})
 console.log(numbers)
