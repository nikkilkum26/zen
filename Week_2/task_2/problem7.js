var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
    
    let flag = false;
 // your code here
 for(let i in actual){
     if(actual[i]!=expected[i]){
    
      flag = true;
     }
 }
 if(flag === true){
    console.log("FAILED "+testName+" Expected "+expected+" but got "+actual);
 }
 else{
    console.log("PASSED "+testName+" Expected "+JSON.stringify(expected)+" and got "+JSON.stringify(actual));
 }
}

assertObjectsEqual(actual,expected,"detect objects are equal");