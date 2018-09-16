function play() {
  var pos = ["rock","paper","sccissors"];
  var computer;
  var user;
  
 function pion(){
   var i=Math.random();
//    console.log("i=",i);
    if(i<0.33){computer=0;}
    else if(i<0.66){computer=1;}
    else {computer=2;}  
   i=Math.random();
//    console.log("i=",i);
    if(i<0.33){user=0;}
    else if(i<0.66){user=1;}
    else {user=2;}
    }
  
  function game(x,y)
  {if(x===0)
     {if(y===0){user=0;}
      else if(y==1){user=2;}
      else {user=1;}
     } 
   else if(x==1)
     {if(y===0){user=1;}
      else if(y==1){user=0;}
      else {user=2;}       
     }
   else
     {if(y===0){user=2;}
      else if(y==1){user=1;}
      else{user=0;}     
     }
   }
  
 function winner(x)
  {if(x===0){console.log("It's a tie!")}
   else if(x==1){console.log("Computer wins!")}
   else {console.log("User wins!")}    
  }

pion();
console.log("Computer choice:",pos[computer],"!");
console.log("User choice:",pos[user],"!");
game(computer,user);
winner(user);
}
play();