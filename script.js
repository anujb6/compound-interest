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

     result.innerHTML= "If you deposit is" + " " +principal+"<br>"+
        
                        "at an interest rate of"+ " " +rate +"<br>"+
                        
                        "You will recieve an amount of" + " " +(principal*years*rate/100)+"<br>"+
                         
                         "in"+ " " +years+ " " +"years";  
}
