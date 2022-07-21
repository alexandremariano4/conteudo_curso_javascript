function validar(){
    let data = new Date()
    let ano = data.getFullYear()
    let nasc = document.querySelector('input#ano')
    let res = document.querySelector('div#res')
    if (nasc.value.length == 0 || Number(nasc.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else{
        let sexo = document.getElementsByName('radiogroup')
        let idade = ano - Number(nasc.value)
        let genero = ''
        let imagem = document.createElement('img')
        imagem.setAttribute('id','foto')
        if(sexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <10){
            //Criança
                imagem.setAttribute('src','criançahomem.png')
            }
            else if(idade < 21){
                imagem.setAttribute('src','jovemhomem.png')
            //Jovem
            }
            else if(idade < 50){
                imagem.setAttribute('src','adultohomem.png')
            //Adulto
            }
            else{
                imagem.setAttribute('src','idosohomem.png')
            //Idoso
            }
        }
        else if (sexo[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <10){
                imagem.setAttribute('src','criançamulher.png')
            //Criança
            }
            else if(idade < 21){
                imagem.setAttribute('src','jovemmulher.png')
            //Jovem
            }
            else if(idade < 50){
                imagem.setAttribute('src','adultomulher.png')
            //Adulto
            }
            else{
                imagem.setAttribute('src','idosomulher.png')
            //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos<br>`
        //
        res.appendChild(imagem)
    }
}