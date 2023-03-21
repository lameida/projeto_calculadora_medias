const form  =   document.getElementById("form-atividade");
const imgAprovado = '<img src="./images/images/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./images/images/reprovado.png" alt="Emoji chorando"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class = "resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class = "resultado reprovado">Reprovado</span>';
const notaMinina = parseFloat(prompt ("Digite a nota minima"));

let linhas ='';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela(); 
    atualizaMediaFinal();   
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`)
    }else{

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat( inputNotaAtividade.value));

    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinina ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
    
        linhas += linha
    }    
        
        inputNomeAtividade.value = '';
        inputNotaAtividade.value = '';
    
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediafinal = calculamediaFinal();

    document.getElementById('media-final-valor').innerHTML=mediafinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediafinal >= notaMinina ? spanAprovado : spanReprovado; 
}


function calculamediaFinal(){
    let somaDasNotas = 0;

    for (let i=0; i < notas.length;i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;

}