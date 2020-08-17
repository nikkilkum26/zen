let div=document.createElement('div');
div.setAttribute('id','value');
document.body.append(div);
function countDown(s) {
let callBack = document.getElementById("value");
callBack.innerHTML = "Please wait for "+s+" seconds";
if(s < 1) {
    clearTimeout(timer);
    callBack.innerHTML = '<h1>Happy Independence day</h1>';
    
}
s--;
 timer = setTimeout('countDown('+s+',"'+value+'")',1000);
}
countDown(10);

