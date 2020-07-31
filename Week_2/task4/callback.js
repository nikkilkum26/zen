function something(a,b){
    var val1=10,val2=40;
    let op=b[a](val1,val2);
    return op;
}
let add=(c,d)=>{
  return c+d;
}
let sub=(c,d)=>{
  return c-d;
}
let mul=(c,d)=>{
    return c*d;
}
oper=[add,sub,mul];
let a = something(0,oper);
console.log(a);
let b = something(1,oper);
console.log(b);
let c= something(2,oper);
console.log(c);