var a=[1,2,3,4,5];

((a)=>{
    var b=[];
    for(var i=0;i<a.length;i++){
        if(a[i]%2==0){
            continue;
        }
        else{
            b.push(a[i]);
        }
    }
    console.log(b);
})(a);