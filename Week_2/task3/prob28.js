function findMax(ar)
{
// your code here
var maxi=ar[0];
for(var i=0;i<ar.length;i++){
    if(ar[i]>maxi){
        maxi=ar[i];
    }
}
return maxi;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);