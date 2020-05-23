const gameState = {

};

//preload images, sounds, and sprites
function preload() {

};

//Create all game elements here. Code will be run on page load.
function create() {

};

//Code here runs each frame.
function update() {

};

//game configuration
const config = {
  type: phaser.AUTO,
  width: 450,
  height: 500,
  backgroundColor: 'ffffff',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      enableBody: true,
    },
    scene: { preload, create, update }
  };
};

//makes the game
const game = new Phaser.Game(config);
