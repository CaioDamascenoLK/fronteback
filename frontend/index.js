function init(){
    const navUl = document.querySelector("nav ul")

    const user = JSON.parse(sessionStorage.getItem("user"))

    if(user){
        navUl.innerHTML += `
        <h2> Usuario: ${user.name}</h2>
        <li><button> Sair </button></li>
        
        
        `
        return
    }

    navUl.innerHTML += `
            <li>
                    <a href="./pages/login.html">Login</a>
                </li>
    `
}

init()