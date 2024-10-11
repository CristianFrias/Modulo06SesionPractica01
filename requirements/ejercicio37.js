// El Dane está interesado en saber el número de personas mayores de 18 años, tanto hombres como mujeres en la ciudad de Medellín. 
// Calcule e imprima el resultado de esta investigación. Se deben leer registros que contiene cada uno el sexo y el número de años.

export const ejercicio37 = (datos) => {
    let totalMasculinos = 0
    let totalFemeninas = 0
    for (const fila of datos) {
        if(fila.edad >= 18) {
            if(fila.id_sexo === 1) {
                totalMasculinos++
            } else {
                totalFemeninas++
            }
        }
    }
    return { totalMasculinos, totalFemeninas}
}