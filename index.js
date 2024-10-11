import { ejercicio19 } from "./requirements/ejercicio19.js";
import { ejercicio28 } from "./requirements/ejercicio28.js";
import { ejercicio52 } from "./requirements/ejercicio52.js";
import { ejercicio35 } from "./requirements/ejercicio35.js";
import { ejercicio37 } from "./requirements/ejercicio37.js";

// console.log("********** Ejercicio 19 *********");
// const trabajador = {
//     nombre_empleado: "Cristián Frías",
//     salario_hora: 5_600,
//     horas_trabajadas: 180,
//     porcentaje_retencion: 15
// }

// const calculo = ejercicio19(trabajador)
// const respuesta = {...trabajador, ...calculo}
// console.log(respuesta)

// console.log("********** Ejercicio 28 *********");
// ejercicio28()

// console.log("********** Ejercicio 52 *********");
// ejercicio52()

// console.log("********** Ejercicio 35 *********");
// const series = [
//     {n1: 5, n2: 1, n3: 9}, // 1, 9
//     {n1: 3, n2: 3, n3: 4}, // al menos 2 números iguales
//     {n1: 15, n2: 11, n3: 19}, // 11, 19
//     {n1: 0, n2: 9, n3: 1}, // 0, 9 
//     {n1: 0, n2: 9, n3: 0} // al menos 2 números iguales
// ]
// const result = ejercicio35(series)
// console.table(result)

console.log("********** Ejercicio 37 *********");
// Para el campo id_sexo (1=Masculino, 2=Femenino, 3=NoDefinido)
const personas = [
    { id_sexo: 1, edad: 18}, 
    { id_sexo: 1, edad: 15}, 
    { id_sexo: 1, edad: 25}, 
    { id_sexo: 2, edad: 30},
    { id_sexo: 2, edad: 20},
    { id_sexo: 1, edad: 20},
    { id_sexo: 1, edad: 17},
    { id_sexo: 2, edad: 17},
    { id_sexo: 2, edad: 18},
    { id_sexo: 1, edad: 37},
]
const totales = ejercicio37(personas)
console.log(totales);

