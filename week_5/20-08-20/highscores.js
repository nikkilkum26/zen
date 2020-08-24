function info()
    {
        let flag = localStorage.getItem('user');
        if(!flag)
           flag = document.querySelector('.name').value;

        let arr =[];
        arr[flag] = str;
        localStorage.setItem('user', JSON.stringify(arr));
    }

function actionn(e)
{
    if(e.length > 0)
    {
        document.querySelector('.save').disabled = false;
    }
    else
        document.querySelector('.save').disabled = true;
}

function gohome(){
    localStorage.setItem('user', null);
    window.open('index.html');
}


function playagain(){
    localStorage.setItem('score', null);
    window.open('game.html');
}

let c = document.createElement('div');
c.classList.add('container','text-center');

let b = document.createElement('div');
b.classList.add('row');
let dd = document.createElement('div');
dd.id = 'score';

b.append(dd);

let c1 = document.createElement('div');
c1.classList.add('row');
let user = document.createElement('input');
user.type = 'text';
user.id = 'name';
user.classList.add('name');
user.placeholder = 'User Name';
user.addEventListener('input',function(){actionn(user.value)});
c1.append(user);

let d = document.createElement('div');
d.classList.add('row');
let s = document.createElement('button');
s.id= 'savescorebtn';
s.innerHTML = "<b style = 'color:blue !important'>Save<b>";
s.classList.add('btn','save');
s.disabled = true;
s.addEventListener('click', function(){info()});
d.append(s);

let e = document.createElement('div');
e.classList.add('row');
let p = document.createElement('button');
p.id= 'playagain';
p.innerHTML = "<b style = 'color:blue !important'>Try Again<b>";
p.classList.add('btn');
p.setAttribute('onclick','playagain()');
e.append(p);

let f = document.createElement('div');
f.classList.add('row');
let i = document.createElement('button');
i.id= 'Go Home';
i.innerHTML = "<b style = 'color:blue !important'>Home Page<b>";
i.classList.add('btn');
i.setAttribute('onclick','gohome()');
f.append(i);

c.append(b,c1,d,e,f);
document.body.append(c);

let str = decodeURIComponent(window.location.search);
str = str.substring(1);
str = str.split('=')[1];

document.getElementById('score').innerHTML ="<b style = 'color:blue !important'>Highscore :</b>" + str;

       

    
