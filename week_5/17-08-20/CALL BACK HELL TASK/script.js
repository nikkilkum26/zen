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
                                         div.innerText="1";
                                      },1000)
                                      div.innerText="2";
                                  },1000)
                                  div.innerText="3";
                              },1000)
                              div.innerText="4";
                          },1000)
                          div.innerText="5";
                      },1000)
                      div.innerText="6";
                  },1000);
                  div.innerText="7";
             },1000);
             div.innerText="8";
        },1000);
        div.innerText="9";
    },1000);
    div.innerText="10";
}, 1000);
