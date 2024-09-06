let root = document.getElementById('root')

function soma() {
    let soma = 0;
    let indice = 13;
    let k = 0;

    while (k < indice) {
        k++;
        soma += k;
    }

    let p = document.createElement('p');
    p.textContent = `Soma : ${soma}`;
    root.appendChild(p);
}

soma();

//FIBONACCI

function verificarFibonaci() {

    const num = parseInt(document.getElementById('inputNumber').value);
    let a = 0
    let b = 1
    let c = 1

    while (c < num) {
        c = a + b;
        a = b;
        b = c;
    }

    // if(c === num) {
    //     ''
    // }

    const resultado = (c === num || num === 0) ? "O número está na sequência de Fibonacci." : "O número não está na sequência de Fibonacci.";

    document.getElementById('resultado').innerText = resultado;
}

//DISTRIBUIDORA

function calculoDistribuidora() {

let renderDist1 = document.getElementById('renderDist1')
let renderDist2 = document.getElementById('renderDist2')
let renderDist3 = document.getElementById('renderDist3')

let valorFaturamentoMensal = {
    "dia 1" :  154859.00,
    "dia 2" :  154859.00,
    "dia 3" :  252859.00,
    "dia 4" :  355859.00,
    "dia 5" :  259859.00,
    "dia 6" :  0.0,
    "dia 7" :  0.0,
    "dia 8" :  159859.00,
    "dia 9" :  552359.00,
    "dia 10" : 154829.00,
    "dia 11" : 744898.00,
    "dia 12" : 154549.00,
    "dia 13" : 0.0,
    "dia 14" : 0.0,
    "dia 15" : 853859.00,
    "dia 16" : 754859.00,
    "dia 17" : 324259.00,
    "dia 18" : 891859.00,
    "dia 19" : 715689.00,
    "dia 20" : 0.0,
    "dia 21" : 0.0,
    "dia 22" : 757853.00,
    "dia 23" : 752359.00,
    "dia 24" : 758576.00,
    "dia 25" : 754832.00,
    "dia 26" : 754822.00,
    "dia 27" : 0.0,
    "dia 28" : 0.0,
    "dia 29" : 752159.00,
}

let menorFaturamento = Infinity;
let maiorFaturamento = -Infinity;
let somaFaturamento = 0;
let diasComFaturamento = 0;

for (let dia in valorFaturamentoMensal) {
    let valor = valorFaturamentoMensal[dia];
    if (valor > 0) {
        if (valor < menorFaturamento) {
            menorFaturamento = valor;
        }
        if (valor > maiorFaturamento) {
            maiorFaturamento = valor;
        }
        somaFaturamento += valor;
        diasComFaturamento++;
    }
}

let mediaMensal = somaFaturamento / diasComFaturamento;
let diasAcimaDaMedia = 0;

for (let dia in valorFaturamentoMensal) {
    let valor = valorFaturamentoMensal[dia];
    if (valor > mediaMensal) {
        diasAcimaDaMedia++;
    }
}

renderDist1.textContent = `Menor valor de faturamento : ${menorFaturamento}`;
renderDist2.textContent = `Maior valor de faturamento: ${maiorFaturamento}`;
renderDist3.textContent = `Dias acima da média mensal: ${diasAcimaDaMedia}`;
}

calculoDistribuidora()  


// PERCENTUAL DE CADA ESTADO

const valorVenda = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "OUTROS": 19165.53
}

let sp = document.getElementById('SP')
let rj = document.getElementById('RJ')
let mg = document.getElementById('MG')
let es = document.getElementById('ES')
let outros = document.getElementById('OUTROS')

let total = valorVenda.SP + valorVenda.RJ + valorVenda.MG + valorVenda.ES + valorVenda.OUTROS;

let percentualSP = valorVenda.SP / total * 100;
sp.textContent = 'SP: '+ " " + percentualSP.toFixed(2) + '%'

let percentualRJ = valorVenda.RJ / total * 100;
rj.textContent = 'RJ: ' + " " + percentualRJ.toFixed(2) + '%' 

let percentualMG = valorVenda.MG / total * 100;
mg.textContent = 'MG: ' + " " + percentualMG.toFixed(2) + '%'

let percentualES = valorVenda.ES / total * 100;
es.textContent = 'ES: ' + " " + percentualES.toFixed(2) + '%'

let percentualOUTROS = valorVenda.OUTROS / total * 100;
outros.textContent = 'OUTROS: ' + " " + percentualOUTROS.toFixed(2) + '%'



//INVERTER STRING

let invert = document.getElementById('invert')

invert.addEventListener('click', () => {
    let str = document.getElementById('stringInp').value
    let strInvertida = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        strInvertida += str[i];
    }
    
    let stringInvertida = document.getElementById('stringInvertida')
    stringInvertida.textContent = strInvertida;
})


