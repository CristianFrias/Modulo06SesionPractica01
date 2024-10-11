// Imprimir cuatro columnas. En la primera columna los enteros del 1 al 50. 
// En las otras columnas, la segunda, la tercera y la cuarta potencia de los enteros de la primera columna.

export const ejercicio28 = () => {
    // const arreglo = [
    //     [1, 1, 1, 1], 
    //     [2, 4, 8, 16]
    // ]

    // const arreglo = [
    //     {numero: 1, p2: 1, p3: 1, p4: 1},
    //     {numero: 2, p2: 4, p3: 8, p4: 16}
    // ]

    const arreglo = []

    for (let i = 1; i <= 50; i++) {
        const fila = {
            numero: i,
            p2: i ** 2,
            p3: i ** 3,
            p4: i ** 4
        }
        arreglo.push(fila)
    }

    console.table(arreglo);
}