let seuVotoPara = document.querySelector('.tela--top--left-1 span');
let cargo = document.querySelector('.tela--top--left-2 span');
let descricao = document.querySelector('.tela--top--left-4');
let aviso = document.querySelector('.tela--down');
let fotosCandidatos = document.querySelector('.tela--top--right');
let numeros = document.querySelector('.tela--top--left-3');


let etapaAtual = 0;
let numero = '';

function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';
   for (let i=0;i<etapa.numeros;i++) {
       if(i === 0) {
            numeroHtml += '<div class="numero pisca"></div>';
       }else {
            numeroHtml += '<div class="numero"></div>';
        
    }
}

    seuVotoPara.getElementsByClassName.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.getElementsByClassName.display = 'none';
    fotosCandidatos.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}
function atualizaInterface(){
        let etapa = etapas[etapaAtual];
        let candidato = etapa.candidatos.filter((item)=> {
            if (item.numero === numero){
                return true;
            }else {
                return false;
            }
        });

        if(candidato.length > 0) {
            candidato = candidato[0];
            seuVotoPara.getElementsByClassName.display = 'block';
            aviso.getElementsByClassName.display = 'block';
            descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;


            let fotosHtml = '';

            for(let i in candidato.fotos){
                fotosHtml += `<div class="tela--top--right-image"><img src="images/${candidato.fotos[i].url}" alt=""/>${candidato.fotos[i].legenda}</div>`;
            }

            fotosCandidatos.innerHTML = fotosHtml;
        }
}

function clicou(n){
    let elemNumero = document.querySelector('.numero.pisca');
    if(elemNumero != null){
        elemNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elemNumero.classList.remove('pisca');
        if(elemNumero.nextElementSibling != null) {
        elemNumero.nextElementSibling.classList.add('pisca');
    }else {
        atualizaInterface();
    }
}
}
function branco(){
    alert("Clicou em BRANCO!");
}
function corrige(){
    alert("clicou em CORRIGE!");
}
function confirma(){
    alert("clicou em CONFIRMA!");
}

comecarEtapa();