let anon=[1,2,3,4,5];

((anon)=>{
    let a=[];
    for(let i=0;i<anon.length;i++){
        a[i]= anon[i]*anon[i];
    }
    console.log(a);
})(anon);
