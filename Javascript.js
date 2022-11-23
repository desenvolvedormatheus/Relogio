/*Gerenciador do relogio*/
let data = new Date()
function zero_esquerda(n = 0) {
    if (n < 10) {
        n = '0' + n
    }
    return n
}
function dia_semana() {
    const dia_semana = document.querySelector('.dia_semana')
    let semana = data.getDay()
    switch(semana){ 
        case 0: semana = 'Domingo'; break
        case 1: semana = 'Segunda'; break
        case 2: semana = 'Terça'; break
        case 3: semana = 'Quarta'; break
        case 4: semana = 'Quinta'; break
        case 5: semana = 'Sexta'; break
        case 6: semana = 'Sábado'
        default: semana = '[Erro] DIA NÃO ENCONTRADO'
    }
    dia_semana.innerHTML = semana
}
function data_ano() {    
    const data_anual = document.querySelector('.data_ano')
    let dia = zero_esquerda(data.getDate())
    let mes = zero_esquerda(data.getMonth()+1)
    let dia_mes_ano = `${dia} - ${mes}`

    data_anual.innerHTML = dia_mes_ano
}
function pegar_hora() {
    const relogio = document.querySelector('.hora')
    let horas = new Date().toLocaleTimeString('pt-br')

    dia_semana()
    data_ano()
    relogio.innerHTML = horas
}
setInterval(pegar_hora, 500)

/*modo noturno*/
function mudar_cinza(){
    const body = document.querySelector('body')
    body.style.background = 'gray'
}
function mudar_rosa(){
    const body = document.querySelector('body')
    body.style.background = '#ff4ea1'
}
function mudar_preto(){
    const body = document.querySelector('body')
    body.style.background = '#000'
}
