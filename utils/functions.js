// Función que recibe dos parametros (sh y ht) y con ellos podemos obtener el salario bruto
export const calcularSalarioBruto = (salario_hora, horas_trabajadas) => salario_hora * horas_trabajadas

export const calcularValorRetencion = (salario_bruto, porcentaje_retencion) => (salario_bruto * porcentaje_retencion) / 100

export const calcularSalarioNeto = (salario_bruto, valor_retencion) => salario_bruto - valor_retencion