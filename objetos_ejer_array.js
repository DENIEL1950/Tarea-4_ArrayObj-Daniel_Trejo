const dataest = require("./dataest")
const {data} = require("./dataest")

console.log("Datos de estudiantes", data);

//1. Devuelve el array de objetos estudiantes
//resultado esperado: [{estudiantes: "Juan Perez"}, {estduiante: "Jose de la cuadra"}]
const arrayObjetosEstudiantes = data.map(estudiantes =>({estudiantes: estudiantes.estudiante}));
console.log();
console.log("Ejercicio #1")
console.log("Convertir el array de personas en una array que tenga objetos con los campos ", arrayObjetosEstudiantes);


//2. Devuelve el array de estudiantes
//resultado esperado: [Juan Perez", "Jose de la cuadra"]
const arrayEsudinate2 = data.map(item =>{
    return item.estudiante
})
console.log()
console.log("Ejercicio #2")
console.log("Devuelve el array de estudiantes, Resultado esperado:",arrayEsudinate2); 

//3.Devuelve en un array la sumatoria de parciales
//resultado esperado: [93,150,43]
const ArraySumaParciales= data.map(est => {
    return est.parciales.reduce((acum,parcial)=> acum+parcial,0) 
});
console.log()
console.log("Ejercicio #3")
console.log("La sumatoria de los parciales es de:", ArraySumaParciales);

//4. Devuelve el promedio de los parciales haciendo (un solo bloque de codigo)
//resultado esperado:
const arrayPromedioParciales= data.map(est => { return est.parciales.reduce((acum,parcial)=> acum+parcial,0)
}).reduce((acum,parcial)=> acum+parcial,0)/data.length;
console.log()
console.log("Ejercicio #4")
console.log("El promedio de los parciales es de:", arrayPromedioParciales);

//5. Devuelve  un array de objetos que contiene el nombre del estudiante, la materia y la sumatoria de los parciales
/*Resultado esperado: [
    {estudiante: "Juana", materia: "Algoritmos", sumaparciales:120},
    {estudiante: "Pedro", materia: "Algoritmos", sumaparciales:120}, 
]*/

const materiaSumaParciales = data.map(item => {
    return {
        estudiante:item.estudiante, materia:item.materia,
        sumatoriaPacial: item.parciales.reduce((acum, valor)=> acum+valor, 0)
    }
});
console.log()
console.log("Ejercicio #5")
console.log("Estudiantes con la sumatoria de parciales", materiaSumaParciales);

//6. Devuelve un array de objetos que incluye el nombre del estudiante,
//la materia, la suma de parciales y la nota final
//la nota final es igual a la sumatoria de los parciales + nota teórica + nota práctica
//(un solo bloque de codigo)
/*Resultado esperado:
[
    {estudiante: "Juana", materia: "Algoritmos", sumaparciales:120, notafinal:160},
    {estudiante: "Pedro", materia: "Algoritmos", sumaparciales:120, notafinal:175},
]
*/
const arrayObjEst2 = data.map(persona=>{
    return ({estudiante:persona.estudiante, materia:persona.materia,sumaparciales: persona.parciales.reduce((acumulador,valor)=> 
        acumulador+valor,0), notafinal: persona.parciales.reduce((acumulador,valor)=> 
        acumulador+valor,0) + persona.examen_final.teoria + persona.examen_final.practica})
})
console.log()
console.log("Ejercicio #6")
console.log("Resultado esperado: ", arrayObjEst2);

//7. Agregue 2 registros al array data para la asignatura Física. A continuación, 
//devuelva el promedio del campo notafinal de la materia Algoritmos.
//Resultado esperado: { materia : "Algoritmos" , promedio: 178.22}



const {suma, contador} = data.reduce(
    (acumulador, item) =>{
if(item.materia === "Algoritmos"){
return {
    suma: acumulador.suma + item.parciales.reduce((suma, num) => suma + num) + item.examen_final.teoria + item.examen_final.practica,
    contador: acumulador.contador + 1,
    };
    }
return acumulador;
    },
    {suma: 0, contador: 0}
    );
console.log()
console.log("Ejercicio #7")
console.log("Resultado esperado: ", {materia: "Algoritmos", promedio: (suma/contador).toFixed(2)});

/*8. Diseñe  la función que recibe como parámetro una letra del alfabeto(puede estar en mayúsculas o minúsculas). La función devuelve el array data para aquellos estudiantes que empiezan con esa letra (se deben incluir todos los campos)
por ejemplo si la letra es la A o la a:
el resultado esperado sería:
[
    
    {
        matricula: "10123",
        estudiante: "Andrade Marco",
        materia: "Algoritmos",
        parciales: [25,33,22],
        examen_final: {  teoria: 20,  practica: 18  }
    },
  
    {
        matricula: "10128",
        estudiante: "Alcívar Rosa",
        materia: "Algoritmos",
        parciales: [10,11,22],
        examen_final: { teoria: 15, practica: 15 }
    }
] */

function estudiantePorLetra(letras, data) {
    return data.filter(estu => estu.estudiante.toLowerCase().startsWith(letras.toLowerCase()));
  }
let resultoFuncionLetra = estudiantePorLetra('A', data);

console.log()
console.log("Ejercicio #8")
console.log("Funcion que recibe letra y devuelve los estudiantes con apellido de esa letra: ",resultoFuncionLetra);

console.log("FIN DEL PROGRAMA");
