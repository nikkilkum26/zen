let inp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', '*', '-', '+'];
        
        document.addEventListener('keyup', keyBoardInput)
        function keyBoardInput(event) {
            if(event.key == "Enter") equal();
            if(event.key == "Backspace" ) back();
            if(event.key == "Delete")cl();
            else insert(event.key);
        }
      
        function insert(n){
            if(inp.includes(n.toString())){
            document.form.textview.value =document.form.textview.value+n;
        }}
        function equal(){
            let ans= document.form.textview.value;
            if(ans){
                document.form.textview.value= eval(ans);
            }
        }
        function cl(){
            document.form.textview.value=" ";
        }
        function back(){
            let ans= document.form.textview.value;
            document.form.textview.value= ans.substring(0,ans.length-1);
        }