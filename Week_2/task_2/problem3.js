var object = {name: "ISRO", age: 35, role: "Scientist"};

function convertListToObject(obj) {
    let arr = []
    for(let i in object){
        arr.push([i,object[i]])
    }
    return(arr)
}
console.log(convertListToObject(object))