const input = document.querySelector("input")
const addBoton = document.querySelector(".btn_add")
const ul = document.querySelector("ul")
const empty = document.querySelector(".empty")
const contenedor = document.querySelector(".li__container")

addBoton.addEventListener("click",(e)=>{
    e.preventDefault()
    const text = input.value

    if (text !== ""){
        const li = document.createElement("li")
        const p = document.createElement("p")
        const ul = document.createElement("ul")
        p.textContent = text
        li.appendChild(p)
        ul.appendChild(li)
        ul.appendChild(addBotonBorrar())
        contenedor.appendChild(ul)
        input.value = ""
        empty.style.display = "none"
    }
})

const addBotonBorrar = ()=>{
    const botonBorrar = document.createElement("button")
    const i = document.createElement("i")
    i.classList.add("fa-solid", "fa-trash")
    botonBorrar.appendChild(i)
    botonBorrar.className = "btn_trash"

    i.addEventListener("click",(e)=>{
        const item = e.target.parentElement
        const boton = item.parentNode
        contenedor.removeChild(boton)
        const items = document.querySelectorAll("li")
        if (items.length === 0){
            empty.style.display = "block"
        }
    })
    botonBorrar.addEventListener("click",(e)=>{
        try {
            const item = e.target.parentElement
            contenedor.removeChild(item)
            const items = document.querySelectorAll("li")
            if (items.length === 0){
                empty.style.display = "block"
            }
        } catch {
            console.log("Eliminado")
        }
    })
    return botonBorrar
}