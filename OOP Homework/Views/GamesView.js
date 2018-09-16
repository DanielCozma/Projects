window.addEventListener("load", function(){
  var containerEl=document.getElementById("games-list");
  
  var gamesModel=new Games();
  gamesModel.getAll().then(function(response){
    displayAllGames(response);
  });
  
 function displayAllGames(gamesData) {
    for(var i=0; i<gamesData.length; i++) {
      var game= new Game(gamesData[i]);
      console.log(game);
      displayGame(game);
    }
  }
  
  function displayGame(game) {
    var liEl = document.createElement('li');
    
    var titleEl = document.createElement('h1');
    titleEl.innerHTML = game.title;
    
    var idEl = document.createElement('h1');
    idEl.innerHTML = game._id;
    
    titleEl.addEventListener("click", function(){
      window.location="http://cursuri-cozmaedaniel108043.codeanyapp.com/ObjectsAndClasses_Homework/Templates/Game.html?gameId="+game._id;
    })
    
    var descriptionEl = document.createElement('p');
    descriptionEl.innerHTML = game.description;
    
    var imageUrlEl = document.createElement('div');
    console.log('game', game.imageUrl);
    imageUrlEl.innerHTML = '<img src="'+game.imageUrl+'" alt="Game picture">';
    
    liEl.appendChild(titleEl);
    // liEl.appendChild(idEl);
    liEl.appendChild(descriptionEl);
    liEl.appendChild(imageUrlEl);
        
    containerEl.appendChild(liEl); 
  }
});