// Leer de un registro el nombre de un empleado, su salario básico por hora, 
// el número de horas trabajadas en el período y el porcentaje de retención en la fuente. 
// Calcular el salario bruto, el valor de la retención y su salario neto.

import { calcularSalarioBruto, calcularSalarioNeto, calcularValorRetencion } from "../utils/functions.js"

export const ejercicio19 = ({nombre_empleado, salario_hora, horas_trabajadas, porcentaje_retencion}) => {
    const salarioBruto = calcularSalarioBruto (salario_hora, horas_trabajadas)
    const valorRetencion = calcularValorRetencion (salarioBruto, porcentaje_retencion)
    const salarioNeto = calcularSalarioNeto (salarioBruto, valorRetencion)
    return {nombre_empleado, salarioBruto, valorRetencion, salarioNeto }
}