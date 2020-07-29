var securityQuestions = [
    {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
   ]
   
   function chksecurityQuestions(securityQuestions,question,answer) {
    let flag = false;
    let flag2 = false;
    for(let i of securityQuestions){
        if(i["question"] === question){
            flag = true;
            if(i["expectedAnswer"] === answer){
                flag2 = true;
            }
        }
    }
    if(!flag){
        return false;
    }
    if(flag && flag2){
        return true;
    } 
    else{
        return false;
    }
   }
   //Test case1:
   var ques = "What was your first pet’s name?";
   var ans  =  "FlufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); // true
   //Test case2:
   var ques = "What was your first pet’s name?";
   var ans  =  "DufferNutter";
   var status = chksecurityQuestions(securityQuestions, ques, ans);
   console.log(status); // flase