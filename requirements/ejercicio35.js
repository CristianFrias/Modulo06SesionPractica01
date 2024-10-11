// Leer una serie de grupos de tres números y obtener el número mayor y el menor de cada terna. 
// Escriba un mensaje especial si por lo menos dos de cada tres números son iguales.

export const ejercicio35 = (series) => {
    for (const fila of series) {
        if (fila.n1 == fila.n2 || fila.n2 == fila.n3 || fila.n1 == fila.n3){
            fila.response = "Al menos dos números son iguales"
            continue // el continue aplica para los ciclos no al if
        }
        let menor = null
        let mayor = null

        if (fila.n1 < fila.n2 && fila.n1 < fila.n3)
            menor = fila.n1
        else if (fila.n2 < fila.n1 && fila.n2 < fila.n3)
                menor = fila.n2
        else
            menor = fila.n3

        if (fila.n1 > fila.n2 && fila.n1 > fila.n3)
            mayor = fila.n1
        else if (fila.n2 > fila.n1 && fila.n2 > fila.n3)
                mayor = fila.n2
        else
            mayor = fila.n3

        fila.response = `Menor: ${menor}, Mayor: ${mayor}`
    }
    return series
}