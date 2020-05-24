const gameState = {
	score: 0
};



function preload() {
this.load.image('resident', 'https://lh3.googleusercontent.com/proxy/iNJjk_B1OH5fDzZF91p0l8LgwOHWZxS2_IL30a6ITowvnJVMoZZ1oeTcbxJOZrSCBKPhI6njI0B-jktUKxRNbjute48CxrORctRvGA4Q_gTx')
}


function create() {
	const resident = this.physics.add.staticGroup();

	resident.create(200, 200, 'resident').setScale(.5);
}

function update() {

}


const config = {
	type: Phaser.AUTO,
	width: 1300,
	height: 550,
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
