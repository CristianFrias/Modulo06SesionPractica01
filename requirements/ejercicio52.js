// Calcule e imprima las tablas de multiplicar del 17 al 30.
// Se debe imprimir el multiplicando, el multiplicador y el producto.

export const ejercicio52 = () => {
    for (let multiplicando = 17; multiplicando <= 30; multiplicando++) {
        const tabla = []
        for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
            tabla.push({
                multiplicando,
                multiplicador,
                producto: multiplicando * multiplicador
            })
        }
        console.table(tabla);
    }
}