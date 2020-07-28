var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
 let arr = [];
 for(let i in obj){
     arr.push(obj[i]);
 }
 return arr
}

console.log(printAllValues(obj));
