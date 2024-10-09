function addLinha() {
    console.log('vamos adicionar uma linha na tabela')


    //seleciona a tabela e adiciona uma nova linha
    const tabela = document.querySelector("#minhaTabela tbody");
    const novaLinha = tabela.insertRow();


    // adiciona tres novas celulas
    const celulaID = novaLinha.insertCell(0);
    const celulaNome = novaLinha.insertCell(1);
    const celulaIdade = novaLinha.insertCell(2);
    const celulaTelefone = novaLinha.insertCell(3);


// o conteudo da celula será digitado pelo usuário
celulaID.innerText=tabela.rows.length;
celulaNome.innerText = prompt("Digite o nome:");
celulaIdade.innerText = prompt("Digite a idade:");
celulaTelefone.innerText = prompt("Digite o telefone:");
}

