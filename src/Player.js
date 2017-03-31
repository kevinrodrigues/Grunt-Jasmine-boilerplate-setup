function Player() {
    console.log('start');

    this.play();
}

Player.prototype.play = function(song) {
  this.baz = $('body');

  this.pause();

  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};


Player.prototype.pause = function() {
  this.isPlaying = false;
};

Player.prototype.resume = function() {
  if (this.isPlaying) {

    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};

new Player();

