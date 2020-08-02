class Calculator{
    constructor(a, b){
        this.a = a;
		this.b = b;
    }
    add(){ 
	let add = this.a + this.b; 
	return add;
	}
    subtract(){
	let sub =this.a - this.b;
	return sub;
	}
    multiply(){
	let mul = this.a * this.b; 
	return mul; 
	}
    divide(){ 
	let div=this.a / this.b;
	return div;
	}
	sqrrt(){
	let sqrt = Math.sqrt(this.a);
	return sqrt;
	}
   
}

let calc = new Calculator(8,4);
console.log(calc.add());
console.log(calc.subtract());
console.log(calc.multiply());
console.log(calc.divide());
console.log(calc.sqrrt());
