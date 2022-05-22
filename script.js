// Trocar fundo background

let btnChange = document.querySelector('#changeColor')
let colorBackground = document.querySelector('.model-box')
btnChange.addEventListener('click', ()=>{
    let r = Math.floor(Math.random()*255),
        g = Math.floor(Math.random()*255),
        b = Math.floor(Math.random()*255)
    colorBackground.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')'
})

// Calculadora 

const num1 = document.getElementById('txtnum1')
const num2 = document.getElementById('txtnum2')
const operator = document.getElementById('oper')
const btnCalc = document.getElementById('calcular')

function calcular(){

    if (operator.value === 'adicao'){
        let resAdicao = Number(num1.value) + Number(num2.value)
        alert (`O resultado da soma entre ${num1.value} e ${num2.value} é igual a ${resAdicao}`)
    } else if (operator.value === 'subtracao'){
        let resSubtracao = Number(num1.value) - Number(num2.value)
        alert (`O resultado da subtração entre ${num1.value} e ${num2.value} é igual a ${resSubtracao}`)
    } else if (operator.value === 'multiplicacao'){
        let resMultiplicacao = Number(num1.value) * Number(num2.value)
        alert (`O resultado da multiplicação entre ${num1.value} e ${num2.value} é igual a ${resMultiplicacao}`)
    } else{
        let resDivisão = Number(num1.value) / Number(num2.value)
        alert (`O resultado da divisão entre ${num1.value} e ${num2.value} é igual a ${resDivisão}`)
    }
}

btnCalc.addEventListener('click', calcular)

// Adivinhe o número

let btnChute = document.getElementById('btnChute')
let usuarioChute = document.getElementById('chuteNum')
const randomSecretNum = Math.round(Math.random()*10)
console.log(randomSecretNum)

function verificSecretNum(){
    if (usuarioChute.value == randomSecretNum){
        alert(`PARABÉNS! Você acertou o número aleatório. ${randomSecretNum}`)
    }
}

btnChute.addEventListener('click', verificSecretNum)

// Botao para rolar suavemente até o topo da pagina

const paginaTopo = document.getElementById("back-to-top")
paginaTopo.addEventListener('click', function() {
    window.scrollTo(0, 0)
})
