
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Player extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 145, y ?? 112, texture || "atlas", frame ?? "player-idle/player-idle-1");

		scene.physics.add.existing(this, false);
		this.body.gravity.y = 300;
		this.body.setOffset(10, 6);
		this.body.setSize(12, 26, false);
		this.play("player-idle");

		/* START-USER-CTR-CODE */

		this.initX = x;
		this.initY = y;

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	initX = 0;
	initY = 0;

	alive = true;
	health = 3;
	onLadder = false;

	preUpdate(time, delta) {

		super.preUpdate(time, delta);

		if (this.onLadder) {

			this.body.gravity.y = 0;

		} else {

			this.body.gravity.y = 300;
		}

		this.onLadder = false;
	}

	reset() {

		this.x = this.initX;
		this.y = this.initY;

		this.body.velocity.y = 0;

		this.health = 3;
		this.alive = true;
		this.hurtFlag = false;

		this.play("player-idle");
	}

	death() {

		this.alive = false;

		this.body.velocity.x = 0;
		this.body.velocity.y = -400;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
