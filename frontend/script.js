
const button = document.querySelector("button")

button.addEventListener("click", recerberMensagemDoBackend)

const pessoaDiv = document.querySelector(".pessoa")

async function recerberMensagemDoBackend (){
    const response = await fetch("http://localhost:3333").then(response => response.json())

    response.map((person) =>{
        pessoaDiv.innerHTML += `
        <div>
             <h2>Nome:${person.name}</h2>
             <h3>Idade:${person.age}</h3>
             <h3>CPF:${person.cpf}</h3>
             <hr>
        </div>
    `
    })

    console.log(response)
}