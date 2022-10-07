var data = new Date()

function zero_esquerda(n) {
    if (n < 10) {
        n = '0' + n
    }
    return n
}

function dia_semana() {
    const dia_semana = document.querySelector('.dia_semana')
    let semana = data.getDay()

    switch(semana){ 
        case 0: semana = 'Dom'
        break
        case 1: semana = 'Seg'
        break
        case 2: semana = 'Ter'
        break
        case 3: semana = 'Qua'
        break
        case 4: semana = 'Qui'
        break
        case 5: semana = 'Sex'
        break
        case 6: semana = 'Sab'
        default: semana = '[Erro] DIA NÂO ENCONTRADO'
    }

    dia_semana.innerHTML = semana
}

function data_ano() {    
    const data_anual = document.querySelector('.data_ano')
    let dia = zero_esquerda(data.getDate())
    let mes = zero_esquerda(data.getMonth()+1)

    let dia_mes_ano = `${dia} ${mes}`

    data_anual.innerHTML = dia_mes_ano
}

function pegar_hora() {
    const relogio = document.querySelector('.hora')
    horas = new Date().toLocaleTimeString('pt-br')

    dia_semana()
    data_ano()
    relogio.innerHTML = horas
}

setInterval(pegar_hora, 800)