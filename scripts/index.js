const repository = new Repository()

// Ahora vamos a seleccionar los elementos con los que queremos trabajar
const titleInput = document.getElementById("title")
const descriptionInput = document.getElementById("description")
const imgUrlInput = document.getElementById("imgUrl")
const submitButton = document.getElementById("buttonSubmit")
const container = document.querySelector(".containercards")

submitButton.addEventListener("click", handlerClick)

function handlerClick(event) {
    event.preventDefault()
    const title = titleInput.value.trim()
    const description = descriptionInput.value.trim()
    const imgUrl = imgUrlInput.value.trim()

    if (!title || !description || !imgUrl) {
        return alert("Todos los campos son obligatorios.")
    }
    
    repository.createActivity(title, description, imgUrl)

    submitSound.play()
    
    titleInput.value = ""
    descriptionInput.value = ""
    imgUrlInput.value = ""

    renderActivities()
}

function renderActivities() {
    const cardContainer = document.querySelector(".containercards")
    cardContainer.innerHTML = ""; // Clear existing content

    const listActivitiesJs = repository.getAllActivities()
    const listActivitiesHtml = listActivitiesJs.map(createCard)

    listActivitiesHtml.forEach(activityHtml => cardContainer.appendChild(activityHtml))
}

function createCard(activity) {
    const { id, title, description, imgUrl } = activity

    const divCard = document.createElement("div")
    const h4Title = document.createElement("h4")
    const span = document.createElement("span")
    const img = document.createElement("img")
    const p = document.createElement("p")

    h4Title.textContent = title
    span.textContent = "X"
    span.classList.add("delete-btn")
    span.setAttribute("data-id", id)
    img.src = imgUrl
    img.alt = title
    p.textContent = description

    divCard.appendChild(h4Title)
    divCard.appendChild(span)
    divCard.appendChild(img)
    divCard.appendChild(p)

    return divCard
}

function removeActivity(id) {
    repository.deleteActivity(id)
    deleteSound.play()
    renderActivities()
}

container.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const id = parseInt(event.target.getAttribute("data-id"), 10)
        removeActivity(id)
    }
});

const submitSound = new Audio('assets/Submit.mp3')
const deleteSound = new Audio('assets/Delete.mp3')




// Ejecución de la función handler, que toma los valores de los inputs
// Hacer chequeo de que los campos no estén vacíos y retornar alerta en caso de que suceda
// Añadir la actividad con repository.createActivity(title, description, imgUrl)
// Convertir todas las actividades a tarjetas de HTML y agregarlas al contenedor de tarjetas
// Limpiar los campos del formulario
// Función para crear el HTML de una tarjeta
// Añadir evento para eliminar la actividad cuando se hace clic en el botón X