let anon=[1,2,3,4,5];

((anon)=>{
    let b=[];
    for(let i=0;i<anon.length;i++){
        b[i]= anon[i]*anon[i];
    }
    console.log(b);
})(anon);
