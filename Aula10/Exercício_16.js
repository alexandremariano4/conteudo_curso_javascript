var num = [5,8,4]
num[3] = 6
num.push(9)

console.log(`Tamanho do vetor ${num.length}`);
console.log(`Nosso vetor é o ${num}`);
console.log(`Organizando com sort do menor para maior ${num.sort()}`);
/*
for (let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`);
    
}*/
/*
for (var pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
*/
console.log(`Posição do número 6: ${num.indexOf(6)}`)
console.log(`Quando não há o elemento dentro do array: ${num.indexOf(10)}`)

var dicionario = {id:[1,2,3],nome:['alexandre','patolina','patolinu']}
dicionario.id.push(dicionario.id.length+1)
dicionario.nome.push('Creu')
console.log(dicionario);
