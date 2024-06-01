
// La actividad es el concepto del mundo real que estamos representando en esta clase
class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl
    }
}

//Las respuesta que obtengamos, las vamos a guardar en un repositorio
class Repository{
    constructor () {

    }
}

//A la clase Repositorio vamos a tener que crearle algunos métodos, que reciba los datos de la actividad, la cree y la guarde


//Debe haber otro método que le permita retornar todas las activiades que están dentro del array


//Por último, otro método que permita filtrar las actividades, para por ejemplo elimiar actividades de la lista