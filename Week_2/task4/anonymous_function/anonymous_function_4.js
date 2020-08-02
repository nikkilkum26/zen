let aaa=[1,2,3,4,5];

((aaa)=>{
    let a=[];
    for(let i=0;i<aaa.length;i++){
        a[i]= 2*aaa[i]; // 2n
    }
    console.log(a);
})(aaa);
