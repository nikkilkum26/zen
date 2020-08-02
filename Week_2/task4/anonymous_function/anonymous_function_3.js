let aaa=[1,2,3,4,5];

((aaa)=>{
    let b=[];
    for(let i=0;i<aaa.length;i++){
        b= aaa[i]*aaa[i];
    }
    console.log(b);
})(aaa);
