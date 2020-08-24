let a = document.createElement('div');
a.setAttribute('class','box');

let b= document.createElement('div');
b.classList.add("skew1","skew2");


let h= document.createElement('h1');
h.innerHTML="Quick Quiz";

b.append(h);

let a1=document.createElement('A');
a1.setAttribute('class','button');
a1.innerHTML="Play";
a1.setAttribute('href','game.html')



let a2=document.createElement('A');
a2.setAttribute('class','button');
a2.setAttribute('href','highscores.html')
a2.innerText="High Scores";

b.append(a1,a2);

a.append(b);

document.body.append(a);

