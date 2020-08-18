let div=document.createElement('div');
div.setAttribute('id','value');
document.body.append(div);

// recursion
// function countDown(s) {
// let callBack = document.getElementById("value");
// callBack.innerHTML = "Please wait for "+s+" seconds";
// if(s < 1) {
//     clearTimeout(timer);
//     callBack.innerHTML = '<div>Happy Independence day</div>';
    
// }
// s--;
//  timer = setTimeout('countDown('+s+',"'+value+'")',1000);
// }
// countDown(10);
//without recursion
setTimeout(function(){ 
setTimeout(function(){
setTimeout(function(){
setTimeout(function(){
setTimeout(function(){
setTimeout(function(){
setTimeout(function(){
setTimeout(function(){
setTimeout(function(){
setTimeout(function(){
setTimeout(function(){
div.innerHTML = '<h1>Happy Independence day</h1>';
 });
 div.innerText="Please wait for 1 seconds";
},1000)
div.innerText="Please wait for 2 seconds";
},1000)
div.innerText="Please wait for 3 seconds";
 },1000)
div.innerText="Please wait for 4 seconds";
},1000)
div.innerText="Please wait for 5 seconds";
},1000)
div.innerText="Please wait for 6 seconds";
 },1000);
div.innerText="Please wait for 7 seconds";
},1000);
div.innerText="Please wait for 8 seconds";
},1000);
div.innerText="Please wait for 9 seconds";
},1000);
div.innerText="Please wait for 10 seconds";
}, 1000);
