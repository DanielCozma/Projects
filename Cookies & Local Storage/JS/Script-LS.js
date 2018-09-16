document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded(){
  
fetch("https://api.wunderground.com/api/cfbfc5f603141e07/conditions/q/RO/Cluj_Napoca.json")
    .then((response) => {
      const data=response.json();
      console.log("data",data);
      return data;
    })
  .then((data) => {    
  let tempc;
  let tempf;
    tempc=data.current_observation.feelslike_c;
    tempf=data.current_observation.feelslike_f;     
  
let temp=document.getElementById('temperature');
let temperature=localStorage.getItem('temperature');
let radio=document.querySelector('[value='+temperature+']');
  console.log("Radio", radio);
if(radio) radio.setAttribute('checked','checked');
if (temperature=='celsius') temp.innerHTML='<p>The temperature in Cluj-Napoca is '+tempc+' degrees Celsius.</p>';
else temp.innerHTML='<p>The temperature in Cluj-Napoca is '+tempf+' degrees Fahrenheit.</p>';
  
var radios=document.querySelectorAll('[name=temperature]'); 
  
  radios.forEach(function(radio){
    radio.addEventListener('click', function() {
    console.log("ELEMENTUL CLICK ", this);
    console.log("ELEMENTUL CLICK ", this.value); 
    localStorage.setItem("temperature",this.value);
   if (this.value=='celsius') temp.innerHTML='<p>The temperature in Cluj-Napoca is '+tempc+' degrees Celsius.</p>';
   else temp.innerHTML='<p>The temperature in Cluj-Napoca is '+tempf+' degrees Fahrenheit.</p>';
      });
     });  
  }); 
}