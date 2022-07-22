function contar(){
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var resultado = document.querySelector('div.res>p')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Dados inválidos, preencha novamente!')
    }
    else{
        if (Number(passo.value) <= 0){
            window.alert('Passo inválido, considerando PASSO = 1')
            passo.value = '1'
        }
        resultado.innerHTML = ''
        if(Number(inicio.value)<Number(fim.value)){
        for (var i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)){
            resultado.innerHTML += `${i} \u{1F449}`
            }
        }
        else{
        for (var i = Number(inicio.value); i >= Number(fim.value); i -= Number(passo.value)){
            resultado.innerHTML += `${i} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}