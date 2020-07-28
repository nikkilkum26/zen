var obj = {name : "RajiniKanth", age : 33, hasPets : true};
function printAllValues(obj) {
 let arr = []
 for(let i in obj){
     arr.push(i);
 }
 return arr
}

console.log(printAllValues(obj));
