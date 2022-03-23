let price = 0;
let bebida = 0;
let comida = 0;
let sobremesa = 0;
let nomeprato;
let nomebebida;
let nomesobremesa;
let total;
const confirmacao = document.querySelector('.confirmacao');
let listdrink = document.querySelectorAll(".drink .option");
let listcheckd = document.querySelectorAll(".drink .option .check");
let listfood = document.querySelectorAll(".food .option");
let listcheckf = document.querySelectorAll(".food .option .check");
let listdessert = document.querySelectorAll(".dessert .option");
let listchecks = document.querySelectorAll(".dessert .option .check");




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

    for(let i = 0; i < listfood.length; i++){
        listfood[i].classList.remove("choiced")
    }

    for(let i = 0; i < listcheckf.length; i++){
        listcheckf[i].classList.add("escondido")
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

    for(let i = 0; i < listdrink.length; i++){
        listdrink[i].classList.remove("choiced")
    }

    for(let i = 0; i < listcheckd.length; i++){
        listcheckd[i].classList.add("escondido")
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

    for(let i = 0; i < listdessert.length; i++){
        listdessert[i].classList.remove("choiced")
        
    }

    for(let i = 0; i < listchecks.length; i++){
        listchecks[i].classList.add("escondido")
    }

    const optdessert = document.getElementById(option)
    optdessert.classList.add("choiced")
    const check = document.querySelector(`#${option} .check`)
    check.classList.remove("escondido")
    ativarBotaoFinalizar()
}

const finalizarpedido = () => {
    if (comida != 0 && bebida != 0 && sobremesa != 0){
        total = comida + bebida + sobremesa;
        const confirmacao = document.querySelector('.confirmacao');
        confirmacao.classList.remove('escondido');
        document.querySelector('.opcao-prato').innerHTML = nomeprato;
        document.querySelector('.preco-prato').innerHTML = comida.toFixed(2).toString().replace('.', ',');
        document.querySelector('.opcao-bebida').innerHTML = nomebebida;
        document.querySelector('.preco-bebida').innerHTML = bebida.toFixed(2).toString().replace('.', ',');
        document.querySelector('.opcao-sobremesa').innerHTML = nomesobremesa;
        document.querySelector('.preco-sobremesa').innerHTML = sobremesa.toFixed(2).toString().replace('.', ',');
        document.querySelector('.preco-total').innerHTML = total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
        document.querySelector(".opaco").style.opacity = "0.3"
    }
}

const cancelar = () => {
    document.querySelector(".opaco").style.opacity = "1"
    confirmacao.classList.add('escondido');

    for(let i = 0; i < listfood.length; i++){
        listfood[i].classList.remove("choiced")
    }

    for(let i = 0; i < listcheckf.length; i++){
        listcheckf[i].classList.add("escondido")
    }

    for(let i = 0; i < listdrink.length; i++){
        listdrink[i].classList.remove("choiced")
    }

    for(let i = 0; i < listcheckd.length; i++){
        listcheckd[i].classList.add("escondido")
    }

    for(let i = 0; i < listdessert.length; i++){
        listdessert[i].classList.remove("choiced")
        
    }

    for(let i = 0; i < listchecks.length; i++){
        listchecks[i].classList.add("escondido")
    }

}

function enviarPedido(){
    if (comida != 0 && bebida != 0 && sobremesa != 0){
        total = total.toFixed(2);
        let nome = prompt('Qual seu nome?');
        let endereco = prompt('Qual seu endereço?');
        console.log(nome)
        let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${nomeprato}\n- Bebida: ${nomebebida}\n- Sobremesa: ${nomesobremesa}\nTotal: R$ ${total}\n\nNome: ${nome}\nEndereço: ${endereco}`;
        while (nome === "" || nome === null || endereco=== "" || endereco === null){
            alert("Não foi possível finalizar seu pedido, insira nome e endereços válidos")
            nome = prompt('Qual seu nome?');
            endereco = prompt('Qual seu endereço?');
        } 
        window.open(`https://wa.me/5521990876042?text=${encodeURIComponent(mensagem)}`)
    }
}