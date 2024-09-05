async function obterDados(cep){
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    return data
}

async function fillInputs(event){
    event.preventDefault();
    const dado_cep = cep.value;
    console.log(dado_cep);
    
    if (dado_cep.length == 8){
        cep.classList.remove('is-invalid');
        cep.classList.add('is-valid');

        const dados = await obterDados(dado_cep);
        const campos = ['complemento','logradouro','estado','uf','bairro','localidade'];
        console.log(dados);
        
        for(const campo of campos){
            const input = document.getElementById(campo);
            console.log(input);
            
            input.value = dados[campo];
        }

    }else{
        cep.classList.add('is-invalid');
    }
}