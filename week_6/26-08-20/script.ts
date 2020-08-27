class Tv{
    playlist: string[];
    i : number;
    playOpt: HTMLVideoElement;
    flag:boolean;
    constructor(val){
        let vid= document.querySelector('video');
        vid.setAttribute("id", "placeFrame");
        vid.setAttribute("type", "video/mp4");
        document.querySelector("#gh").append(vid);
        this.playlist= val;
        this.i=0;
        this.playOpt = vid;
        this.flag=true;
        this.playOpt.volume=0;

    }
    playvid =()=>{
        this.playOpt.play();
    }
    pausevid=()=>{
        this.playOpt.pause();
    }
    mute =()=>{
        if(this.flag){
            this.playOpt.muted = true;
            this.flag=false;
            }
            else{
               this.playOpt.muted = false;
                this.flag= true;   
            }
        
    }
    next =()=>{
        this.playOpt.setAttribute('src',this.playOpt[this.i]);
        this.playOpt.play();
        this.i++;
        if(this.i>1){
            this.i=0;
        }
    }
    tvOff =()=>{
        this.playOpt.setAttribute('src','#');
    }
    tvOn =()=>{
        this.next();
    }
    volUP =()=>{
        this.playOpt.volume += 0.2;
    }
    volDW =()=>{
        this.playOpt.volume -= 0.2;
    }
};
let veo=['./sample-mp4-file.mp4','./toystory.mp4'];

let a= new Tv(veo);

let options =(passVal) =>{
    switch (passVal){
        case "playvid":
            a.playvid();
            break;
        case "pausevid":
            a.pausevid();
            break;
        case "mute":
            a.mute();
            break;
        case "next":
            a.next();
            break;
        case "tvOff":
            a.tvOff();
            break;
        case "tvOn":
            a.tvOn();
            break;
        case "volUP":
            a.volUP();
            break;
        case "volDW":
            a.volDW();   
            break;                        
    }
};