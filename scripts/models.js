// La actividad es el concepto del mundo real que estamos representando en esta clase o molde
class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id
        this.title = title
        this.description = description
        this.imgUrl = imgUrl
    }
}

// Las respuestas que obtengamos, las vamos a guardar en un repositorio, en este caso en un array
class Repository {
    constructor() {
        this.activities = []
        this.id = 1
    }

    // Método que retorna todas las actividades dentro del array
    getAllActivities() {
        return this.activities
    }

    // Método que crea y guarda una nueva actividad
    createActivity(title, description, imgUrl) {
        const activity = new Activity(this.id++, title, description, imgUrl);
        this.activities.push(activity)
    }

    // Método que elimina una actividad por id
    deleteActivity(id) {
        this.activities = this.activities.filter((act) => act.id !== id)
    }
}

module.exports = {Activity, Repository}