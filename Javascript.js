var data = new Date

function zero_esquerda(n) {
    if (n < 10) {
        n = '0' + n
    }
    return n
}

function dia_semana() {
    const dia_semana = document.querySelector('.dia_semana')
    let semana = data.getDay()

    if (semana == 0){ semana = 'Dom' } 
    else if (semana == 1){ semana = 'Seg' }
    else if (semana == 2){ semana = 'Ter' }
    else if (semana == 3){ semana = 'Qua' }
    else if (semana == 4){ semana = 'Qui' }
    else if (semana == 5){ semana = 'Sex' }
    else if (semana == 6){ semana = 'Sab' }
    
    dia_semana.innerHTML = semana
}

function data_ano() {    
    const data_anual = document.querySelector('.data_ano')
    let dia = zero_esquerda(data.getDate())
    let mes = zero_esquerda(data.getMonth())

    let dia_mes_ano = `${dia} - ${mes}`

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