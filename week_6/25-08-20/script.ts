class isAvailable{
    name: String;
    age:number;
    category: String;
    location: String;
    history: String;
    constructor(p){
        this.name=p.name;
        this.age=p.age;
        this.category=p.category;
        this.location=p.location;
        this.history=p.history;
    }
}

class request{
    check=[];
    status: String;
    constructor(para){
        this.check.push(para);
    }
}

let insert =(p)=>{
    let pet = new isAvailable(p);
    return pet;
}

let statusCheck =(paras)=>{
    let res=[];
    for(let i=0;i<5;i++){
        res.push(paras[i].status);
    }
    return res;
}

let count=(p)=>{
    return p.length;
}

let dog = new isAvailable({
    name: 'abc',
    age: 1,
    category: "dog",
    location: "chennai",
    history:'new born'

});

let cat = new isAvailable({
    name: 'bak',
    age: 2,
    category: "cat",
    location: "chennai",
    history:'new born'

});

let fish= new isAvailable({
    name: 'ghj',
    age: 2,
    category: "fish",
    location: "chennai",
    history:'new born'

});

let dog2= new isAvailable({
    name: 'abc3',
    age: 5,
    category: "dog",
    location: "chennai",
    history:'Already owned'

});

let cat2 = new isAvailable({
    name: 'bak2',
    age: 4,
    category: "cat",
    location: "chennai",
    history:'Already owned'

});