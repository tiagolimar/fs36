const users = [
    'tiagolimar',
    'edmaralbneto',
    'angelolustosa',
    'Gustavo1701',
    'miguelalves10',
    'antoniowgaldino',
    'breno-oliveira98',
    'rafaeoTW4',
    'JoaoRoberto1',
    'Breno-arauj',
]

async function getRepos(user){
    const response = await fetch(`https://api.github.com/users/${user}/repos?per_pages=100`);
    const data = await response.json();
    // const data = [1,2,3]
    return data
}

async function getUser(user){
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    // const data = {name:user,html_url:`https://github.com/${user}`,avatar_url:"https://avatars.githubusercontent.com/u/47084105?v=4"}
    return data
}

function writeTBody(content) {
    const tbody = document.getElementsByTagName('tbody')[0];
    tbody.innerHTML = content;
}

async function main(){
    let tbodyContent = '';
    
    for(const user of users){
        const repos = await getRepos(user);
        const {name, html_url,avatar_url} = await getUser(user);
        tbodyContent += `
        <tr>
            <td><a href="${html_url}" target="_blank">
            <img class="rounded rounded-5 shadow border border-primary" src="${avatar_url}" alt="logo digital college" style="height: 5em;">
        </a></td>
            <td>${name}</td>
            <td>${user}</td>
            <td>${repos.length}</td>
            <td><a href="${html_url}" class="btn btn-dark">Acessar</a></td>
        </tr>
        `;
    }

    writeTBody(tbodyContent);
}

main()