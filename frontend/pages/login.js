const button = document.querySelector("button")

button.onclick = (event) => {
    event.preventDefault()
    login()
}

async function login() {
    const email = document.querySelector("#email").value
    const password = document.querySelector("#senha").value

    const user = {
        email,
        password
    }

    const response = await fetch("https://backend-marcielo-hr21.vercel.app/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user }) 
    })

    if(response.menssage){
        alert(response.mensage)
        return
    }

    const {id, name} = response

    sessionStorage.setItem("user", JSON.stringify({id, name}))

    const data = await response.json()
    alert("login realizado com sucesso")

    window.location.href = "../index.html"
}
