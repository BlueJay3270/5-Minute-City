const gameState = {
	score: 0
};



function preload() {

}


function create() {

}

function update() {

}


const config = {
	type: Phaser.AUTO,
	width: 900,
	height: 500,
	backgroundColor: "0fb83c",
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			enableBody: true,
		}
	},
	scene: { preload, create, update }
};

const game = new Phaser.Game(config);
