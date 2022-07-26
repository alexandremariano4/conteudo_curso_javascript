function adicionar(){
    //Pega o que foi digitado e transforma em string
    numero = document.querySelector('input#numero')
    num = numero.value
    //Pega o select que vai entrar os valores
    lista = document.querySelector('select#tabela')
    //Valida se existe elementos dentro da tabela pois se não existir, deixa ela em branco
    if (lista.childElementCount == 0){
        lista.innerHTML = ''
    }

    if (num.length == 0 || num > 100 || num < 1){
        window.alert('Informe um valor válido!')
    }
    else{
        var item = document.createElement('option')
        item.setAttribute('id',`${num}`)
        lista.appendChild(item)
        item.text = ``
        item.text = `Valor ${num} adicionado`
    }
    numero.focus()
}
function finalizar(){
    items = []
    for (var i = 0 ; i < lista.childElementCount ; i++){
        items.push(Number(document.querySelector('option').value.replace('Valor ','').replace(' adicionado','')))
    }
    var tot = items.length
    resultado = document.querySelector('div#resultados')
    var res = document.createElement('p')
    resultado.appendChild(res)
    res.innerText = `Ao todo temos ${tot} itens cadastrados.`
    
}