async function obterDados(cep){
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    return data
}

async function fillInputs(event){
    event.preventDefault();
    const dado_cep = cep.value;
    
    if (dado_cep.length == 8){
        cep.classList.remove('is-invalid');
        cep.classList.add('is-valid');

        const dados = await obterDados(dado_cep);
        const campos = ['complemento','logradouro','estado','bairro'];
        
        for(const campo of campos){
            const input = document.getElementById(campo);
            if (campo == 'estado'){
                input.value = dados['uf'];
                preencherMunicipios();
                localidade.value = dados['uf'];
            }else{
                input.value = dados[campo];
            }
        }

    }else{
        cep.classList.add('is-invalid');
    }
}

async function obterMunicipios() {
    const UF = document.getElementById('estado').value;
    
    const response = await fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${UF}`);
    const dados = await response.json();

    return dados
}

async function obterEstados() {
    const response = await fetch(`https://brasilapi.com.br/api/ibge/uf/v1`);
    const dados = await response.json();
    return dados
}

async function preencherEstados(){
    const dados_estados = await obterEstados();
    let options = ``;

    for (const estado of dados_estados){
        options += `<option value="${estado.sigla}">${estado.nome}</option>`;
    }

    estado.innerHTML = options.replace('value','selected value')
    preencherMunicipios();
}

async function preencherMunicipios(){
    const dadosMunicipios = await obterMunicipios();
    let options = ``;

    for (const municipio of dadosMunicipios){
        options += `<option value="${municipio.nome}">${municipio.nome}</option>`;
    }

    localidade.innerHTML = options
}

async function main(){
    preencherEstados();
}

main();