/*
Given 2 numbers N and Q followed by N numbers and Q inputs of 2 Numbers U and V are given. U indicates the starting index and V indicates the ending index. So for each U,V find the sum of all values of the array from the index U to V(1 based indexing).


Input size: N<=100000

sample input :

5 3
1 1 1 1 1
1 3
2 4
3 4
sample output :

3
3
2
*/





// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {

let a= userInput[0].split(" ").map(Number);
let b= userInput[1].split(" ").map(Number);
let arr=[];

let rows=2;
for (let i=0;i<a[1];i++){
    
    arr[i]=[userInput[rows].split(" ").map(Number)];
    rows++;
    
}
 
  let sum=0;
  for(let i=0; i<a[1];i++){
  for (let j=arr[i][0][0] ;j<=arr[i][0][1] ; j++)
  {
      
       sum +=b[j];
       
  }
      console.log(sum);
      sum=0;
  }
  
});
