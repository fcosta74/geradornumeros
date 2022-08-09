function gerar() {
    var min = 1
    var max = 100
    var dif = max - min
    var aleatorio = Math.random() // Essa função gera um valor Real aleatório entre 0 e 1
    var num = min + Math.trunc(dif * aleatorio)
    
    var res = document.querySelector('#result')
    res.innerHTML += ` <p>Acabei de pensar no número <strong>${num}</strong>!</p> `
}

function limpar() { // Essa é a funcionalidade do outro botão, pra limpar tudo
    var res = document.querySelector('#result')
    res.innerHTML = null // Vai esvaziar a section toda
}
