let mainDiv= document.createElement('div');
let divPatch1= document.createElement('div');
divPatch1.setAttribute('class','head');
divPatch1.setAttribute('style','border-style: solid;')
let div2= document.createElement('div');
div2.setAttribute('class','setImage');
let img= document.createElement('img');
img.setAttribute('src',"https://img2.pngio.com/bio-data-curriculum-vitae-cv-job-application-profile-resume-icon-curriculum-icon-png-512_512.png");
img.setAttribute('class','setPic');
div2.append(img);
let div3= document.createElement('div');
div3.setAttribute('class','setImage');
div3.setAttribute('style','background-color: lightgray; height: 0px; width: 100%');
let div4= document.createElement('div');
div4.setAttribute('class','setFont')
div4.innerText='NIKKIL KUMAR';
div3.append(div4);
divPatch1.append(div2,div3);
let divPatch2= document.createElement('div');
divPatch2.setAttribute('class','setImage');
divPatch2.setAttribute('style','height: 1px; padding: 10px 10px 10px;');
let p=document.createElement('p');
p.innerHTML="Phone Number: 7010471061&emsp;&emsp;EmailId: nikkilkumar26@gmail.com&emsp;&emsp;City: Chennai";
divPatch2.append(p);
let hr =document.createElement('HR');
divpatch3= document.createElement('div');
divpatch3.setAttribute('class','row');
divpatch3.setAttribute('style','border-style: solid;');
let smallPatch= document.createElement('div');
smallPatch.setAttribute('class','column');
smallPatch.setAttribute('style','border-right-style: outset;');
let img2=document.createElement('img');
img2.setAttribute('id','profile');
img2.setAttribute('class','setPic border');
img2.setAttribute('src',"https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095055-stock-illustration-profile-icon-male-avatar.jpg");
divpatch3.append(smallPatch);
let newDiv=document.createElement('div');
newDiv.setAttribute('class','setTitle');
let label=document.createElement('label');
label.setAttribute=('for',"Profile");
label.innerHTML="Profile";
newDiv.append(label);


let br =document.createElement('BR');
let br2 =document.createElement('BR');


let setText= document.createElement('div');
setText.setAttribute('class',setText);
let para =document.createElement('p');
para.innerHTML="To achieve high career growth through a continuous learning process and keep myself dynamic,visionary and competitive with the changing scenario of the world";
setText.append(para);
let br3 =document.createElement('BR');
let br4 =document.createElement('BR');
let img3=document.createElement('img');
img3.setAttribute('id','Skills');
img3.setAttribute('src',"https://cdn0.iconfinder.com/data/icons/hr-and-management/100/people-15-512.png");
img3.setAttribute('class',"setPic border");


let setTitle=document.createElement('div');
setTitle.setAttribute('class','setTitle');
let label2=document.createElement('label');
label2.setAttribute=('for',"Skills");
label2.innerHTML="Skills";
setTitle.append(label2);

let br5 =document.createElement('BR');
let br6 =document.createElement('BR');

let setText2=document.createElement('div');
setText2.setAttribute('class','setText');



let l1= document.createElement('label');
l1.setAttribute('for',"py");
l1.innerHTML="Python &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

let pymeter= document.createElement('meter');
pymeter.setAttribute('id',"py");
pymeter.setAttribute('value',"6");
pymeter.setAttribute('min',"0");
pymeter.setAttribute('max',"10");
let brm =document.createElement('BR');
setText2.append(l1,pymeter,brm);
let l2= document.createElement('label');
l2.setAttribute('for',"py");

l2.innerHTML="R &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;";
let rmeter= document.createElement('meter');
rmeter.setAttribute('id',"R");
rmeter.setAttribute('value',"2");
rmeter.setAttribute('min',"0");
rmeter.setAttribute('max',"10");
let brm2 =document.createElement('BR');
setText2.append(l2,rmeter,brm2);
let l3= document.createElement('label');
l3.setAttribute('for',"cpp");
l3.innerHTML="C++  &nbsp&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;";
let cpmeter= document.createElement('meter');
cpmeter.setAttribute('id',"cpp");
cpmeter.setAttribute('value',"9");
cpmeter.setAttribute('min',"0");
cpmeter.setAttribute('max',"10");
let brm3 =document.createElement('BR');
setText2.append(l3,cpmeter,brm3);
let l4= document.createElement('label');
l4.setAttribute('for',"j");
l4.innerHTML="Java &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;";
let jmeter= document.createElement('meter');
jmeter.setAttribute('id',"j");
jmeter.setAttribute('value',"5");
jmeter.setAttribute('min',"0");
jmeter.setAttribute('max',"10");
let brm4 =document.createElement('BR');
setText2.append(l4,jmeter,brm4);
let l5= document.createElement('label');
l5.setAttribute('for',"js");
l5.innerHTML="Javascript &nbsp&ensp;";
let jsmeter= document.createElement('meter');
jsmeter.setAttribute('id',"js");
jsmeter.setAttribute('value',"7");
jsmeter.setAttribute('min',"0");
jsmeter.setAttribute('max',"10");
let brm5 =document.createElement('BR');
setText2.append(l5,jsmeter,brm5);
let l6= document.createElement('label');
l6.setAttribute('for',"htmlcss");
l6.innerHTML="Html & CSS ";
let hmeter= document.createElement('meter');
hmeter.setAttribute('id',"py");
hmeter.setAttribute('value',"6");
hmeter.setAttribute('min',"0");
hmeter.setAttribute('max',"10");
let brm6 =document.createElement('BR');
setText2.append(l6,hmeter,brm6);


let br7 =document.createElement('BR');
let br8 =document.createElement('BR');

let newimg= document.createElement('img');
newimg.setAttribute('id',"Skills");
newimg.setAttribute('src',"https://icon-library.com/images/projects-icon/projects-icon-0.jpg");
newimg.setAttribute('class',"setPic border");

let newsetTitle= document.createElement('div');
newsetTitle.setAttribute('class',"setTitle");
let newlabel= document.createElement('label');
newlabel.setAttribute('for',"Skills");
newlabel.innerHTML="Projects";
newsetTitle.append(newlabel);

let br9 =document.createElement('BR');

let st= document.createElement('div');
st.setAttribute('class','setText');
let b= document.createElement('b');
b.innerHTML="Engineer &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;";
st.append(b);
let ul= document.createElement('ul');
let li =document.createElement('li');
li.innerHTML= "B.E Final year project is based on “Self-power generating cell phone screen” ";
let li2 =document.createElement('li');
li2.innerHTML = "MTech Final year project is “Shadow Detection in Video Sequences” based on Image Processing";
ul.append(li,li2);
st.append(ul);
smallPatch.append(img2,newDiv,br,br2,setText,br3,br4,img3,setTitle,br5,br6,setText2,br7,br8,newimg,newsetTitle,br9,st);


let smallPatch2= document.createElement('div');
smallPatch2.setAttribute('class','column');

let pimg= document.createElement('img');
pimg.setAttribute('id',"Skills");
pimg.setAttribute('src',"https://i.pinimg.com/originals/68/03/fb/6803fbdcc02ae9197aa60ad8abb8898a.png");
pimg.setAttribute('class',"setPic border");

let psetTitle= document.createElement('div');
psetTitle.setAttribute('class',"setTitle");
let plab=document.createElement('label');
plab.setAttribute('for',"Skills");
plab.innerHTML="Activities and interest";
psetTitle.append(plab);


let psetText= document.createElement('div');
psetText.setAttribute('class',"setText")
let pul=document.createElement("ul");
let pli= document.createElement('li');
pli.innerHTML="Interested in playing Cricket and chess";
let pli2= document.createElement('li');
pli2.innerHTML="Watching TV and movies and listening to music";
let pli3= document.createElement('li');
pli3.innerHTML="Like to explore any small electronic device which are in working/ unused/ broken to understand it’s functionality.";
pul.append(pli,pli2,pli3);
psetText.append(pul);

let pimg2= document.createElement('img');
pimg2.setAttribute('id',"Skills");
pimg2.setAttribute('src',"https://image.flaticon.com/icons/svg/1414/1414305.svg");
pimg2.setAttribute('class',"setPic border");

let psetTitle2= document.createElement('div');
psetTitle2.setAttribute('class',"setTitle");
let plab2=document.createElement('label');
plab2.setAttribute('for',"Skills");
plab2.innerHTML="Academic Profile";
psetTitle2.append(plab2);


let brz =document.createElement('BR');

let psetText2= document.createElement('div');
psetText2.setAttribute('class',"setText")
let pul2=document.createElement("ul");
let plii= document.createElement('li');
plii.innerHTML="Participated Workshop in National Level Technical Symposium in SSN";
let plii2= document.createElement('li');
plii2.innerHTML="Mini project implementation on solar mobile charger";
let plii3= document.createElement('li');
plii3.innerHTML="Completed BEC Vantage certification by Cambridge university with Level B1";
pul2.append(plii,plii2,plii3);
psetText2.append(pul2);
smallPatch2.append(pimg,psetTitle,psetText,pimg2,psetTitle2,brz,psetText2);

divpatch3.append(smallPatch2);


mainDiv.append(divPatch1,divPatch2,hr,divpatch3);
document.body.append(mainDiv);

document.body.append(mainDiv);


