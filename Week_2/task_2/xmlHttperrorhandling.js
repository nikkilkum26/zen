
var request = new XMLHttpRequest()


try{
    request.open('GET', 'http://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com', true);
}
catch{
    console.log("Error !");
}
try {
    request.send(null); 
}
catch(err) {
    document.getElementById("body").innerHTML += "\nXMLHttprequest error: " + err.description; 
}

request.onload = function() {
    
  var data = JSON.parse(this.response)
  console.log(data)
  }
  
  
  request.send()
