

document.getElementById("tp").addEventListener("click",
async (element)=>{
    element.preventDefault();
    let data= await fetch("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?locale=en-US&id=40008598", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key": "01b3aaa370msh42d4391c2d3c509p146cb8jsn1bd83ad3e3b3"
        }
    })
let  a= await data.json();
let b= document.getElementById('list');
b.innerHTML="<br>";
for(let song of a['tracks']){
    new playTrack(song);
}
});

document.getElementById("rr").addEventListener("click",
async (element)=>{
    element.preventDefault(); 
    let data= await fetch("https://shazam.p.rapidapi.com/songs/list-recommendations?locale=en-US&key=484129036", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key": "01b3aaa370msh42d4391c2d3c509p146cb8jsn1bd83ad3e3b3"
        }
    })
let  a= await data.json();
let b= document.getElementById('list');
b.innerHTML="<br>";
for(let song of a['tracks']){
    new playTrack(song);
}
});


document.getElementById("ss").addEventListener("click",
async (element)=>{
    element.preventDefault();
    let ss= (<HTMLInputElement>document.getElementById("nm")).value;
    let data= await fetch(`https://shazam.p.rapidapi.com/search?locale=en-US&offset=0&limit=5&term=${ss}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "shazam.p.rapidapi.com",
              "x-rapidapi-key": "01b3aaa370msh42d4391c2d3c509p146cb8jsn1bd83ad3e3b3"
              
        }
});





let  a= await data.json();
let b= document.getElementById('list');
b.innerHTML="<br>";
for(let song of a['tracks']['hits']){
    new playTrack(song['track']);
}
});

import {Track} from './merge'

class playTrack{
    constructor(song:Track){
        if(song.hub && song.hub.actions && song.hub.actions[1].uri){
            let c= document.getElementById('list');
            let div= document.createElement('div');
            div.id="iddiv";

            let div1=document.createElement('div');
            div1.classList.add('card','mb-5','border');
            div1.id='iddiv1';

            let div2 = document.createElement('div');
            div2.classList.add('row', 'no-gutters');

            let div3 = document.createElement('div');
            div3.classList.add('col-md-4');

            let img = document.createElement('img');
            img.src = song.images.coverart;   
            img.setAttribute('class','img_thumbnail');
            img.setAttribute('style','width:56px;height:56px; object-fit: cover;') 
    
            div3.append(img);

            let div4= document.createElement('div');
            div4.classList.add('col-md-4');

            let div5= document.createElement('div');
            div5.classList.add('card-body');

            let div6=document.createElement('div');
            div6.classList.add('titlecard');
            div6.innerHTML = song.title;

            div5.append(div6);
            let s=document.createElement('audio');
            s.src = song.hub.actions[1].uri;
            s.setAttribute('controls','controls');
            s.id='sound';

            div5.append(s);

            div4.append(div5);

            div2.append(div3,div4);

            div1.append(div2);

            div.append(div1);

            c.append(div);


        }
    }

}