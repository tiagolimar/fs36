function incrementarID() {
    let numId = parseInt(localStorage.getItem('id'));

    if (isNaN(numId)) {
        numId = 0;
    }

    numId += 1;

    localStorage.setItem('id', numId);

    return numId;
}

function cadastrarFilme(event) {
    event.preventDefault();

    const id = incrementarID();

    const titulo = document.getElementById('titulo').value;
    const diretor = document.getElementById('diretor').value;
    const orcamento = parseFloat(document.getElementById('orcamento').value);
    const tipo = document.getElementById('tipo').value;

    const filme = { id, titulo, diretor, orcamento, tipo };

    let filmes = JSON.parse(localStorage.getItem('filmes')) || [];
    filmes.push(filme);
    localStorage.setItem('filmes', JSON.stringify(filmes));

    alert('Filme cadastrado com sucesso!');
    event.target.reset();
}