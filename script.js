function show_value(x)
{
 document.getElementById("slider_value").innerHTML=x;
}


function compute()
{
     var principal = document.getElementById("principal").value;
     var years = document.getElementById("years").value;
     var rate = document.getElementById("rate").value;
     var result = document.getElementById("result");
     if(!principal){
          alert("please enter a satisfying amount");
     }else if( principal < 0 ){
          alert("please enter a satisfying amount");
          return;
     }



     result.innerHTML= "If you deposit is" + " "+ "<span style=\"background-color:yellow\">"+principal +"</span>"+"<br>"+
        
                     "at an interest rate of"+ " " +"<span style=\"background-color:yellow\">"+rate +"</span>"+"<br>"+
                        
                        "You will recieve an amount of" + " "+"<span style=\"background-color:yellow\">"+(principal*years*rate/100)+"</span>"+"<br>"+
                         
                         "in"+ " " +"<span style=\"background-color:yellow\">"+years+ " " +"</span>"+"years";
               
}
