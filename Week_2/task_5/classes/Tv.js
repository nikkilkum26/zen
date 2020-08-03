class TV_class{
    constructor(brand,channel=1,price,inches,OnOFF,volume=50){
        this.brand = brand;
		this.channel = channel;
		this.price = price; 
		this.inches = inches;
		this.OnOFF = OnOFF 
		this.volume = volume;
    }

    increaseVolume(){
        if(this.volume > 100){
		
		this.volume = 100 - 1;
		}
		
		
    }

    decreaseVolume(){
        if(this.volume < 0) {
		this.volume = 1;
		}
    }
	
	setChannel(){
        if(this.channel > 50) {
		this.channel = 50 ;
		}
    }

    resetTV(){
		this.channel = 1;
        this.volume = 50;   
    }

    status(){
        return this.brand + ' at channel ' + this.channel + ', volume' + this.volume;
    }

    
}

class LED_TV extends TV_class{
    constructor(screenThickness, energyUse, LifeSpan, RefreshRate){
        super();
        this.screenThickness = screenThickness;
        this.energyUse = energyUse;
        this.lifeSpan = LifeSpan;
        this.refreshRate = RefreshRate;
    }

    viewingAngel(){ 
	return "horizontal viewing angle between 120 and 160 degrees and a vertical angle between 120 and 160 degrees";
	}
    backLight(){
	return "Yes it has backLight ";
	}
    displayDetials(){
	return [this.screenThickness,this.energyUse,this.lifeSpan,this.refreshRate];
	}
}

class Plasma_TV extends TV_class{
    constructor(screenThickness, energyUse, LifeSpan, RefreshRate){
        super();
        this.screenThickness = screenThickness;
        this.energyUse = energyUse;
        this.lifeSpan = LifeSpan;
        this.refreshRate = RefreshRate;
    }

    viewingAngel(){
	return "Above 160 degrees";
	}
    backLight(){
	return "Doesnot have blacklighting instead phosphors lights up the screen" ;
	}
    displayDetials(){
	[this.screenThickness,this.energyUse,this.lifeSpan,this.refreshRate]; 
	}
}

let tv = new TV_class("samsung",2,24000,45,"ON",75)
console.log(tv);
let tv2 = new LED_TV(5,220,10,160);
console.log(tv2);
let tv3 = new Plasma_TV(50,230,50000,17,90);
console.log(tv3);


