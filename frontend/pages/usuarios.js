const main = document.querySelector("main")

async function recerberMensagemDoBackend () {
    const response = await fetch("http://localhost:3333")
    const data = await response.json()

    data.forEach(person => {
        main.innerHTML += `
        <section>
            <h2>Nome:${person.name}</h2>
            <p>Email:${person.email}</p>
        </section>
        `
    })
}

recerberMensagemDoBackend()
