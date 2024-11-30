class Hotel {
    constructor(nombre, habitacion, plantas, superficie) {
        this.nombre = nombre;
        this.habitacion = habitacion;
        this.plantas = plantas;
        this.superficie = superficie;
    }
    getNombre() {
        return this.nombre;
    }
    getHabitacion() {
        return this.habitacion;
    }
    getPlantas() {
        return this.plantas;
    }
    getSuperficie() {
        return this.superficie;
    }
    setNombre(newNombre) {
        this.nombre = newNombre;
    }
    setHabitacion(habitacionNum) {
        this.habitacion = habitacionNum;
    }
    setPlantas(plantasNum) {
        this.plantas = plantasNum;
    }
    setSuperficie(area) {
        this.superficie = area;
    }
    toString() {
        let mostrar = ` El Hotel ${this.nombre} <br>
                      Tiene numero de habitaciones es:${this.habitacion}<br>
                      Tiene total plantas: ${this.plantas} <br>
                      Tiene total superficie es: ${this.superficie} `;
        return mostrar;
    }

    calcularMantenimiento() {
        const servicioDePersona = 20;
        const costDeServicio = 1500;
        const personasNecesitas = Math.ceil(this.habitacion / servicioDePersona);
        const total = personasNecesitas * costDeServicio;
        let mostrar = `Para servicio total persona necesita es: ${personasNecesitas}<br>
                        El coste de mantenimiento es: ${total} €.`;                
        return mostrar;
    }
}