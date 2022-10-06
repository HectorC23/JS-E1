class Pizza {
    constructor(id, nombre,ingredientes,precio){
        this.id = id
        this.nombre = nombre
        this.ingredientes = ingredientes
        this.precio = precio
    }
}
let pizza1 = new Pizza (1, "Pizza nucbaZappi", ["salsa de tomate", "oregano", "aceitunas","queso mozarela"], 200)
let pizza2 = new Pizza (2, "Pizza cuatro quesos", ["salsa de tomate", "oregano", "aceitunas","queso mozarela", "queso gorgonzola", "queso fontina", "queso parmesano"], 400)
let pizza3 = new Pizza (3, "Pizza fugazzeta", ["salsa de tomate", "oregano", "aceitunas","queso mozarela", "cebolla"], 600)
let pizza4 = new Pizza (4, "Pizza con jamon", ["salsa de tomate", "oregano", "aceitunas","queso mozarela", "jamon"], 800)
let pizza5 = new Pizza (5, "Pizza calabresa", ["salsa de tomate", "oregano", "aceitunas","queso mozarela", "queso provolone", "morron", "calabresa"], 1000)
let pizza6 = new Pizza (6, "Pizza napolitana", ["salsa de tomate", "oregano", "aceitunas","queso mozarela", "tomate fresco", "anchoas", "orégano", "alcaparras", ], 1200)



const Pizzas = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6]
// console.log(Pizzas);
// console.log(pizza1);


// a)  Las pizzas que tengan un id impar.

const pizzasConIdImpar = Pizzas.filter((pizza) => pizza.id % 2 !== 0)

console.log("Las Pizzas con un ID impar son:" + pizzasConIdImpar.map((pizza,i) => `\n ${(i+1)}: ${pizza.nombre}, que tiene id = ${pizza.id}`));



// b) ¿Hay alguna pizza que valga menos de $600?


const pizzaMenorA600 = Pizzas.filter((pizza) => pizza.precio < 600)

// console.log(pizzaMenorA600);
console.log("Las Pizzas que tienen un valor menor a 600 son: " + pizzaMenorA600.map((pizza,i) => `\n ${(i+1)}: ${pizza.nombre}, que tiene un valor de $${pizza.precio}`))



// c) El nombre de cada pizza con su respectivo precio.



const pizzaNombreYPrecio = Pizzas.map((pizza) => {
    const pizzaNYP = [pizza.nombre, pizza.precio]
    return pizzaNYP
})

console.log("Menú de pizzas: " + pizzaNombreYPrecio.map((pizza,i) => `\n ${(i+1)}: ${pizza[0]} ------------- tiene un valor de  $${pizza[1]}`));



// d) Todos los ingredientes de cada pizza

const ingredientesDePizzas = Pizzas.map((pizza) => [pizza.nombre , pizza.ingredientes])


console.log("Estos son los ingredientes de cada pizza: " + ingredientesDePizzas.map((pizza,i) => `\n ${(i+1)}: ${pizza[0]}, \n      ingredientes: ${pizza[1].map((ingr, i) => `\n           ${(i+1)}_ ${ingr}`)}`));


