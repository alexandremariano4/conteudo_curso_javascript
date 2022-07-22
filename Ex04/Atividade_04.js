function gerar(){
    var numero = document.querySelector('input#numero')
    var tabuada = document.querySelector('select#tabuada')
    if (numero.value.length == 0){
        window.alert('Por favor digite um número!')
    }
    else{
        var n = Number(numero.value)
        var c = 1
        tabuada.innerHTML = ''
        while (c <= 10){
            //criando o elemento no html
            var item = document.createElement('option')
            item.setAttribute('value',`num${c}`)
            tabuada.appendChild(item)
            item.text = `${n} x ${c} = ${n*c}`
            c++
        }
    }
}
function mudarcor(){
    background = document.querySelector('.body')
    background.style.backgroundColor = 'pink'
}