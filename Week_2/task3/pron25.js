var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

var ar2 = function countPositivesSumNegatives(arr) {
    let sum1=0,sum2=0;
  for(let i=0;i<arr.length;i++){
      if(arr[i]>=0){
          sum1++
      }
      else{
          sum2++;
      }
  }
  arr2.push(sum1);
  arr2.push(sum2);
}
console.log(ar2);