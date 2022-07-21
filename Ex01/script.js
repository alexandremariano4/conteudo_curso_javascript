function carregar(){
    let cabeçalho = document.querySelector('h1')
    let mensagem = document.getElementById('msg')
    let imagem = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    mensagem.innerHTML = `Agora são ${hora}:${min} horas.`
    if (hora >= 0 && hora < 12 ) {
        //BOM DIA!!
        cabeçalho.innerText = 'Bom Dia!'
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#edb869'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!!
        cabeçalho.innerText = 'Boa Tarde!'
        imagem.src = 'fototarde.png'
        document.body.style.background = '#feb415'
    }
    else{
        cabeçalho.innerText = 'Boa Noite!'
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#9c7fb9'
        //BOA NOITE!!
    }
}