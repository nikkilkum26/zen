

let isPalindrome = function(arr){
    return arr.filter(data =>{
        
        let str = data.split('').reverse();
        
        return data == str.join('');
    });
}

let myarr = ["anna","Nikkil","madam","little","mom","dog"];
console.log("Palindrome", isPalindrome(myarr));