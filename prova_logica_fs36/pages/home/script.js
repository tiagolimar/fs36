let filmes = JSON.parse(localStorage.getItem('filmes'));

function ordenarProducoes(event) {
    const tipoDeOrdem = event.target.value;
    
    if (tipoDeOrdem == 'ascendente'){
        filmes.sort((a,b)=>a.orcamento-b.orcamento);
    }else if(tipoDeOrdem == 'descendente'){
        filmes.sort((a,b)=>b.orcamento-a.orcamento);
    }
    carregarFilmes(filmes);
}

function filtrarFilmes() {
    document.getElementById('order').value = '';
    const filterValue = document.getElementById('filter').value.toLowerCase();
    const filmesArmazenados = JSON.parse(localStorage.getItem('filmes')) || [];

    const filmesFiltrados = filmesArmazenados.filter(filme => Object.values(filme).join(' ').toLowerCase().includes(filterValue));
    filmes = filmesFiltrados;

    if(filterValue.length < 1){
        filmes = JSON.parse(localStorage.getItem('filmes'));
        carregarFilmes();
    }

    carregarFilmes(filmesFiltrados);
}

function carregarFilmes(filmes=null) {

    const filmesArmazenados = filmes == null? JSON.parse(localStorage.getItem('filmes')) : filmes;
    const tabelaCorpo = document.getElementsByTagName('tbody')[0];

    tabelaCorpo.innerHTML = '';

    if (filmesArmazenados) {
        filmesArmazenados.forEach(filme => {
            const novaLinha = document.createElement('tr');

            novaLinha.innerHTML = `
                <td>${filme.id}</td>
                <td>${filme.titulo}</td>
                <td>${filme.diretor}</td>
                <td>${filme.orcamento}</td>
                <td>${filme.tipo}</td>
                <td><button class="btn btn-outline-danger" onclick="excluirFilme(${filme.id})">Excluir</button></td>
            `;

            tabelaCorpo.appendChild(novaLinha);
        });
    }
}

function excluirFilme(index) {
    
    if (filmes) {
        filmes.splice(index, 1);
        localStorage.setItem('filmes', JSON.stringify(filmes));
    }
    carregarFilmes();
}

carregarFilmes();