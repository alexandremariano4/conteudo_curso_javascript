function hide(){
    //Esconde a tela de informações do usuário ao abrir o site
    section = document.querySelector('section#res')
    section.style.display = "none"
}
function cadastrar(){
    //Mostra a tela de informações do usuário
    section = document.querySelector('section#res')
    //Dados do usuário
    nome = document.querySelector('input#nome')
    sobrenome = document.querySelector('input#sobrenome')
    endereco = document.querySelector('input#endereco')
    email = document.querySelector('input#email')
    if (nome.value == '' || sobrenome.value == '' || endereco.value == '' || email== '') {
        alert('Preencha as informações corretamente!!!')
    }
    else{
        section.style.display = "block"
    //Pegar o Sexo e atribuir ao genero
        sexo = document.getElementsByName('radiosex')
        genero = ''
        if (sexo[0].checked){
            genero = 'Masculino'
        }
        else{
            genero = 'Feminino'
        }
        let pessoa = document.createElement('div')
        pessoa.setAttribute('id','pessoa')
        section.innerHTML = `<p>Bem vindo <strong>${nome.value} ${sobrenome.value}</strong>!</p>`
        section.innerHTML += `<p>Email registrado: <strong>${email.value}</strong></p>`
        section.innerHTML += `<p>Endereço: <strong>${endereco.value}</strong></p>`
        section.innerHTML += `<p>Sexo: <strong>${genero}</strong></p>`
        //Inserindo GIF
        let imagem = document.createElement('img')
        imagem.setAttribute('id','imagem')
        if (genero == 'Masculino'){
            imagem.setAttribute('src','../images/naruto.gif')
        }
        else{
            imagem.setAttribute('src','../images/nezuko.gif')
        }
        imagem.setAttribute('width','300px')
        imagem.style.boxShadow = '5px 5px 20px'
        section.appendChild(imagem)
    }
}