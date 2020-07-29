var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function getPositives(ar)
{
 // your code here
 var a=[];
 for(var i=0;i<ar.length;i++){
     if(ar[i]>=0){
         a.push(ar[i]);
     }
 }
 console.log(a);
}
getPositives(ar);