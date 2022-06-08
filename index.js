function calcularTempo() {
    const tempoAmpulheta1 = parseInt(document.getElementById("tempo-ampulheta1").value)
    const tempoAmpulheta2 = parseInt(document.getElementById("tempo-ampulheta2").value)

    // no começo virar as 2 ampulhetas
    let menorValor = 0
    let maiorValor = 0
    if (tempoAmpulheta1 > tempoAmpulheta2) {
        maiorValor = tempoAmpulheta1
        menorValor = tempoAmpulheta2
    } else {
        menorValor = tempoAmpulheta1
        maiorValor = tempoAmpulheta2
    }
    let somaMenorValor = menorValor * 2
    let diferenca = somaMenorValor - maiorValor
    const tempoCozimento = parseInt(document.getElementById("tempo-miojo").value)
    // menor valor ter que rodar de novo
    // começa a cozir
    if (tempoCozimento == diferenca) {
        document.getElementById("resultado").innerHTML = `
           tempo mínimo para fazer todo processo é de ${somaMenorValor}
        `
    } else {
        document.getElementById("resultado").innerHTML = `
           para esse processo não foi possível calcular
        `
    }

    document.getElementById("resultado").style = "display:block"
}