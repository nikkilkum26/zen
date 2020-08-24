 const chunk = (arr:[], size:number,n=[]) =>{   
    let a = [...arr];
    const op = Math.ceil(a.length / size); 
    for (let i = 0; i < op; i++) {
        n.push(a.splice(0, size));
    }
    return n;

}

let reduce = (c: []) => c.reduce((add, n) => add + n ,0);

let filter = (b : []) => b.filter(n =>  (n%2==0) );  

let find =(d:[]) => d.filter(e => e==0);

let sum = (a : []) => a.reduce((add, n) => add += n,0);



  

