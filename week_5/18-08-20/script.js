let h2= document.createElement('h2');
h2.innerHTML="Rest Countries";



let c= new Promise(function (resolve,reject){
    let xml= new XMLHttpRequest();
    xml.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",true);
    xml.send();
    xml.onload= () => {
        if (xml.status >= 200 && xml.status < 300) {
            resolve(JSON.parse(xml.response));
        } else {
            reject(xml.statusText);
        }
    };
    
    

});

c.then(function(execute){
    execute.forEach(element => {
        let container =document.createElement('div');
        container.setAttribute('class','card');
        let image =document.createElement('img');
        image.setAttribute('class','card-img-top');
        image.setAttribute('src',element.flag);
        image.setAttribute('alt','Card image cap');
        let cardBody =document.createElement('div');
        cardBody.setAttribute('class','card-body');
        let name=document.createElement('h5');
        name.setAttribute('class','card-title');
        name.innerHTML= element.name;
        let listG=document.createElement('ul');
        listG.setAttribute('class','list-group list-group-flush');
        let capital=document.createElement('li');
        capital.setAttribute('class','list-group-item');
        capital.innerHTML=`Capital : ${element.capital}`;
        let reg=document.createElement('li');
        reg.setAttribute('class','list-group-item');
        reg.innerHTML=`Region : ${element.region}`;
        let li=document.createElement('li');
        li.setAttribute('class','list-group-item');
        let li2=document.createElement('li');
        li2.setAttribute('class','list-group-item');
        let li3=document.createElement('li');
        li3.setAttribute('class','list-group-item');
        let li4=document.createElement('li');
        li4.setAttribute('class','list-group-item');
        li4.innerHTML=`latlng : ${element.latlng}`
        element.currencies.forEach(e=>{
        li.innerHTML=`Currency Name : ${e.name}`;
        li2.innerHTML=`Currency Code : ${e.code} `;
        li3.innerHTML=`Currency Symbol : ${e.symbol}`
        
        });
        listG.append(capital,reg,li,li2,li3,li4);

        document.body.append(container);
        container.append(image);
        container.append(cardBody);
        cardBody.append(name,listG);

    });
    
})

document.body.append(h2);