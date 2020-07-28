var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
    let a = arr[0];

    let json = {};
    json[a] = arr[arr.length-1];
 return json;
}

console.log(transformFirstAndLast(arr));