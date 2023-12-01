//Hola mundo

/*
esto es un comentario
Variables
*/
let myString="Dinora"

function test(){

    console.log(myString2)
}
let myString2= "Esto es un hola mundo"
console.log(typeof myString2)
myString2=6
console.log(typeof myString2)
let myNumber=6.5

test()
console.log(myNumber)
console.log(typeof myNumber)
let myBool=false
myBool=true
//console.log(myBool)
//console.log(typeof myBool)

//myBool=null
//console.log(myBool+myNumber)

let myUndefined
console.log(myUndefined)

//Constantes
const MY_CONST="Mi propiedad constante"
console.log(MY_CONST)
console.log(typeof MY_CONST)
myBool=false
//Control de flujo
if (myNumber==10||myBool==true)
{
    console.log("el valor es 10 o true")
}
else if(myNumber==6.5 && myBool==false){
console.log("el valor es 6.5 y false")}
else
console.log("No es asi")

myBool=null
if(myBool)
{
    console.log("null")
}

//Funciones
function myFunction(i)
{
    return ("Mi funcion #"+i)
}

console.log(myFunction(1))

//Listas
let myList=["Dinora","Cadena","49","Ing"]
//myList=myList+[,"Sistemas"]
console.log(myList)

//Set
let mySet=new Set(["Dinora","Chaparro", "22","Marzo","22"])
mySet.add("Marzo")
console.log(mySet)

//Mapas
let myMap=new Map([["Milu",2012],["Kira",2022],["Cacaracho",2005]])
myMap.set("Negro",2020)
console.log(myMap)
console.log(myMap.get("Kira"))

//Bucles
console.log("Bucles:")
for(const value of myMap){
    console.log(value)
}

let myCounter=0

while(myCounter < myList.length){
    console.log(myList[myCounter])
    myCounter++
}

//Clases

class MyClass{
    constructor(name, age){
    this.name=name
    this.age=age}
}

let myClass=new MyClass("Brais", 36)
console.log(myClass)
console.log(myClass.name)

//Enum
const MY_ENUM={
    DART:"dart",
    PYTHON:"python",
    SWIFT:"swift",
    JAVA:"jave",
    KOTLIN:"kotlin",
    JAVASCRIPT:"javascript"
}

    const myEnum=MY_ENUM.PYTHON
    console.log(myEnum)