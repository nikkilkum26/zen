let anon = [1,2,3,4,5,6];

(function(){
    let a = anon.reduce((total,num)=>{
        return total + num;
    },0)
    console.log("Sum of Array:",a);
})();
