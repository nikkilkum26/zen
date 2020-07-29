function powersOfTwo(n){
  let a=1;
  let b=[];
   for(let i=1;i<=n;i++){
    b.push(a);
       a*=2;
       
   }
    return b;
  }
  let c = powersOfTwo(3);
  console.log(c);