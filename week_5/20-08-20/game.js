let count =0;
async function getApiData() {
    
    try {
      let fdata = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
  
      let data = await fdata.json();
      f = data.results;     
  
      console.log(data.results);
      answers();
      questions(count);
      
    } catch (err) {
      console.log(err);
    }
  }
  
  getApiData();
  
    function answers()
    {
        let a = document.createElement('div');
        a.classList.add('container','text-center');

        let b = document.createElement('div');
        b.classList.add('row','row-cols-2');

        let c = document.createElement('div');
        c.classList.add('col');        

        let d = document.createElement('div');
        d.setAttribute('class','labelquestion');
        
        let e =document.createElement('div');
        e.classList.add('progress');
        e.id = 'progresstext';
        let fa = document.createElement('div');
        fa.classList.add('progress-bar');
        fa.setAttribute('role','progressbar');
        fa.setAttribute('aria-valuemin','0');
        fa.setAttribute('aria-valuemax','100');
        
        e.append(fa);

        c.append(d,e);

        let s = document.createElement('div');
        s.classList.add('col','score');
        s.innerText =  'Score : '; 
        b.append(c,s);

        let g = document.createElement('div');
        g.classList.add('row');
        let q = document.createElement('div');
        q.classList.add('question');
        g.append(q);

        let k = document.createElement('div');
        k.classList.add('row','answerblock'); 
   
        a.append(b,g,k);
        document.body.append(a);
    }


    let closet =[];
    function questions(count)
    {
        let lL = document.querySelector('.labelquestion');
        lL.innerText = 'Question' +(count+1) +'/'+'10';

        let progess = document.querySelector('.progress-bar');
        progess.setAttribute('aria-valuenow',((count+1)*10));
        progess.setAttribute('style','width:'+((count+1)*10)+'%');     

        let qn = document.querySelector('.question');
        qn.innerHTML = f[count].question;

        closet = [].concat(f[count].incorrect_answers, f[count].correct_answer);
        console.log(closet);
        closet = random(closet);

        let k = document.querySelector('.answerblock');        
        let soln;
        for(let index =0;index<4;index++)
        {
         soln = trigger(index,closet[index]);
         k.append(soln);
         soln.addEventListener('click',function(){checkcorrectans(soln["innerText"].substr(2,soln.length))});
        }
        
   
    }   
    function clearScreen(e) { 
        let newScreen = document.getElementsByClassName(e); 
        newScreen[0].innerHTML ="";
    }
    
    function random(element) {
        let rand = element.length; 
    
        while (rand > 0) {    
            let index = Math.floor(Math.random() * rand);   
            rand--;
            let temp = element[rand];
            element[rand] = element[index];
            element[index] = temp;
        }
        return element;
    }

    let s = 0;

    function checkcorrectans(answer)
    {   
        let scoreCount = document.querySelector('.score');   
        let correctAns = f[count].correct_answer;
        if(answer == correctAns){ 
            scoreCount.innerText = 'Score : '  + (s+=10);
        }
        clearScreen('answerblock');
      
       if(count == 9 )
       {       
        let q = "?=" + (s+10) ;
       
           localStorage.setItem('currentScore', s);
           window.open('highscores.html'+ q);
       }
       else
        questions(++count);
        
    }
        

    function trigger(val,str)
    {      

        let x = document.createElement('div');
        x.classList.add('input-group');
     
        let x2 =  document.createElement('div');
        x2.classList.add('input-group-prepend')
      
        let x3 = document.createElement('x3');
        x3.classList.add('input-group-text');
        x3.innerHTML = String.fromCharCode(65 + val);

        x2.append(x3);

        let x4 = document.createElement('div');
        x4.innerHTML = str;
        x.append(x2,x4);
        return x;
        
    }


       

       
  