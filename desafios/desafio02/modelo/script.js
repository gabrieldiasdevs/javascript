function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '../img/Crianca_Mas.png')
            } else if (idade < 21) {
                img.setAttribute('src', '../img/Jovem_Mas.png')
            } else if (idade < 50) {
                img.setAttribute('src', '../img/Adulto_Mas.png')
            } else {
                img.setAttribute('src', '../img/Idoso_Mas.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '../img/Crianca_Fem.png')
            } else if (idade < 21) {
                img.setAttribute('src', '../img/Jovem_Fem.png')
            } else if (idade < 50) {
                img.setAttribute('src', '../img/Adulto_Fem.png')
            } else {
                img.setAttribute('src', '../img/Idoso_Fem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}