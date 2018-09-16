function Game(options){
  options=options || {};
  this._id=options._id;
  this.title=options.title;
  this.description=options.description;
  this.imageUrl=options.imageUrl;
}

Game.prototype.getGameDetails=function(){
  var that=this;  
  //console.log("ID joc", this._id);
  return $.get('https://games-world.herokuapp.com/games/'+this._id)
  .then(function(response){
    that._id=response._id;
    that.title=response.title;
    that.description=response.description;
    that.imageUrl=response.imageUrl;
  });  
}