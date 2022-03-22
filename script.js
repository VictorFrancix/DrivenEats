let price = 0;
let bebida = 0;
let comida = 0;
let sobremesa = 0;
let nomeprato;
let nomebebida;
let nomesobremesa;

const ativarBotaoFinalizar = () => {
    const botao = document.getElementById('botao-finalizar');
    if (botao !== null){
        if (comida != 0 && bebida != 0 && sobremesa != 0){
            botao.classList.add('bottom-bar-texto-habilitado');
            botao.classList.remove('bottom-bar-texto-desabilitado');
            botao.innerHTML = 'Fechar pedido';
        }
    }
}

const escolherComida = (option) => {
    nomeprato = document.querySelector(`#${option} h4`).innerHTML
    comida = parseFloat(document.querySelector(`#${option} span`).innerHTML.slice(2))

    let listfood = document.querySelectorAll(".food .option");
    let listcheck = document.querySelectorAll(".food .option .check")

    for(let i = 0; i < listfood.length; i++){
        listfood[i].classList.remove("choiced")
    }

    for(let i = 0; i < listcheck.length; i++){
        listcheck[i].classList.add("escondido")
    }

    const optPrato = document.getElementById(option)
    const check = document.querySelector(`#${option} .check`)
    check.classList.remove("escondido")
    optPrato.classList.add("choiced")
    ativarBotaoFinalizar()

}

const escolherBebida = (option) => {
    nomebebida = document.querySelector(`#${option} h4`).innerHTML
    bebida = parseFloat(document.querySelector(`#${option} span`).innerHTML.slice(2))

    let listdrink = document.querySelectorAll(".drink .option");
    let listcheck = document.querySelectorAll(".drink .option .check")

    for(let i = 0; i < listdrink.length; i++){
        listdrink[i].classList.remove("choiced")
    }

    for(let i = 0; i < listcheck.length; i++){
        listcheck[i].classList.add("escondido")
    }

    const optdrink = document.getElementById(option)
    optdrink.classList.add("choiced")
    const check = document.querySelector(`#${option} .check`)
    check.classList.remove("escondido")
    ativarBotaoFinalizar()
}

const escolherSobremesa = (option) => {
    nomesobremesa = document.querySelector(`#${option} h4`).innerHTML
    sobremesa = parseFloat(document.querySelector(`#${option} span`).innerHTML.slice(2))
    
    let listdessert = document.querySelectorAll(".dessert .option");
    let listcheck = document.querySelectorAll(".dessert .option .check")

    for(let i = 0; i < listdessert.length; i++){
        listdessert[i].classList.remove("choiced")
        
    }

    for(let i = 0; i < listcheck.length; i++){
        listcheck[i].classList.add("escondido")
    }

    const optdessert = document.getElementById(option)
    optdessert.classList.add("choiced")
    const check = document.querySelector(`#${option} .check`)
    check.classList.remove("escondido")
    ativarBotaoFinalizar()
}
