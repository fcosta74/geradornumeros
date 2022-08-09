function gerar() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random() // Essa função gera um valor Real aleatório entre 0 e 1
    let num = min + Math.trunc(dif * aleatorio)
    
    let res = document.querySelector('#result')
    res.innerHTML += ` <p>Acabei de pensar no número <strong>${num}</strong>!</p> `
}

function limpar() { // Essa é a funcionalidade do outro botão, pra limpar tudo
    let res = document.querySelector('#result')
    res.innerHTML = null // Vai esvaziar a section toda
}
