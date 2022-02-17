
        let num1=document.querySelector('#first');
        let num=document.querySelector('#second');
        let hours=document.querySelector('#hours');
        let bttn=document.querySelector('.btn');
        let reset=document.querySelector('.bn');
        let contain=document.querySelector('#container');
        let clk=true;
        let start;
        
        
        let offset2=0;
        reset.addEventListener("click",()=>{
            num.innerHTML=0;
            clk=true;
            offset2=0;
            num1.innerHTML=0;
            hours.innerHTML=0;
        })
        let check=bttn.addEventListener("click",()=>{
           if(clk===true){ 
               clk=false;
            start=new Date().getTime();
           }else{
               clk=true;
               offset2=Number(num.innerHTML);
            }
        })
        bttn.addEventListener("click",()=>{
         let mytime= setInterval(()=>{
            if(Number(num.innerHTML)==60){
                
                    num.innerHTML=0;
                    offset2=0;
                    start=new Date().getTime();
                    num1.innerHTML=Number(num1.innerHTML)+1;
                    if(Number(num1.innerHTML)==60){
                       num1.innerHTML=0;
                       hours.innerHTML=Number(hours.innerHTML)+1;
                    }
             
                }
            else if(clk===true){
                    clearInterval(mytime);
                 }
            else{
                    num.innerHTML=parseInt((new Date().getTime()-start)/1000)+offset2;
                      
                 }
            },100)
        });