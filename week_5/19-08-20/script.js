var h =document.createElement('h2');
h.innerHTML="Rest Countries with weather info";
document.body.append(h)

async function restCountries () {
    try {
        var c = document.createElement("div");
        c.setAttribute('class','container');

        var r = document.createElement("div");
        r.setAttribute('class','row');

        var allCountries = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
        var result = await allCountries.json();

        result.forEach(element => {
            var data = getData(element);
            r.append(data);
        });
        c.append(r);
        document.body.append(c);
    } 
    catch (err) {
        alert("can't fetch information right now!");
    }
}

restCountries();

function getData(country) {
    
  
    let div = document.createElement("div");
    div.classList.add("col", "col-lg-4", "col-sm-12");

    let skew = document.createElement("div");
    skew.setAttribute('class','card');
    skew.setAttribute('class','skew');
 
    let skew2 = document.createElement("div");
    skew2.setAttribute('class','card-header');
    
    skew2.innerHTML = `<h6><b style="color:white;"> ${country.name} </b></h6>`;

    let skew3 = document.createElement("div");
    skew3.setAttribute('class','card-body')
    
    let skew4 = document.createElement("div");
    skew4.setAttribute('class','list-group list-group-flush');

    let image = document.createElement("img");
    image.setAttribute("src", country.flag);
    image.setAttribute('alt','Card image cap');

    let li = document.createElement("li");
    li.setAttribute('class','list list-group-item');
    li.innerText = `Capital : ${country.capital}`;

    let li1 = document.createElement("li");
    li1.setAttribute('class','list list-group-item');
    li1.innerText = `Region : ${country.region}`;

    let li2 = document.createElement("li");
    li2.setAttribute('class','list list-group-item');
    li2.innerText = `Country Code : ${country.alpha3Code}`;

    let li3 = document.createElement("li");
    li3.setAttribute('class','list list-group-item');
    li3.innerText = `LatLng :  ${country.latlng}`;
    skew4.append(image,li,li1,li2,li3);

    let button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.innerText = "Check for Weather";
    button.addEventListener("click",function(){getWeather(country.name )}, true);

    skew3.append(skew4, button);
    skew.append(skew2, skew3);
    div.append(skew);

    return div;
}

async function getWeather(execute) {
    try {
        let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+execute+"&appid=5f2eb7f1592d5c091119373a1906dab4");
        let fetchData = await data.json();
        alert(fetchData.weather[0].description);
        
    } 
    catch (error) {
        alert("Unavailable");
    }
}
