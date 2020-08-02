class Movie{
    constructor(title, studio, rating){
        this.title = title;
		this.studio = studio;
		this.rating = rating;
		
		
    } 
    getPg(){
		
        if(this.rating == "PG13")
		return [this.title,'Parental guidance suggested for under 17'];
		
		else
        return [this.title,'Not recommended for kids'];
		
    }
}

let m = new Movie("Casino Royale", "Eon Production", "PG13");
let m2 = new Movie("Deadpool", "20th Century Fox", "R");
let m3= new Movie("The Avengers", "MCU","PG13");
let m4= new Movie("Joker", "DC","R");
console.log(m.getPg());
console.log(m2.getPg());
console.log(m3.getPg());
console.log(m4.getPg());
