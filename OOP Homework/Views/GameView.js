window.addEventListener("load", function(){
  var containerEl=document.getElementById("game-details");
  
  var game=new Game();
  var gameId=getUrlParameter("gameId");
  console.log("Game id=", gameId);
  game._id=gameId;
  game.getGameDetails().then(function(response){
      displayGameDetails(game);
  });
  
  function displayGameDetails(gameDetails) {
        var titleEl = document.createElement('h1');
        titleEl.innerHTML = gameDetails.title;
        containerEl.appendChild(titleEl);
		console.log("Game title",titleEl);
        
		var descriptionEl = document.createElement('p');
		descriptionEl.innerHTML = gameDetails.description;
		containerEl.appendChild(descriptionEl);
	   
		var imageUrlEl = document.createElement('div');
		imageUrlEl.innerHTML = '<img src="'+gameDetails.imageUrl+'" alt="Game picture">';
		containerEl.appendChild(imageUrlEl);
		
    }
	
	
	$('#editGame').on('click', editGameTitle());
	function editGameTitle(){
	alert("S-a apasat");
	var gameTitle=$('[name="editGame"]').val();
	$.ajax({
    url: "https://games-world.herokuapp.com/games/"+gameId,
    method: "PUT",
    data: {
      title: gameTitle,
      },
    success: function(data){
      console.log("Update post");
    },
	}); 
	}
  
  
  function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
 }
  
});