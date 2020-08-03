class Circle{
    constructor(radius,color){
        this.radius =radius;
		this.color = color;
    }
    getRadius()
	{
	return this.radius;
	}
    getcolor(){
	return this.color;
	}
    setRadius(){
	this.radius = 2;
	return this.radius;
	}
    setColor(){
	this.color = "yellow";
	return this.color;
	}
    toString(){
	return "Radius :" + this.radius ;
	}
    getArea(){
	return "Area :" +  2 * this.radius * Math.PI;;
	}
}

let a = new Circle(1,"red");
