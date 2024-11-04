
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Star extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 150, y ?? 97, texture || "atlas", frame ?? "star/star-1");

		scene.physics.add.existing(this, false);
		this.body.gravity.y = 500;
		this.body.drag.x = 10;
		this.body.drag.y = 10;
		this.body.bounce.x = 0.8;
		this.body.bounce.y = 0.8;
		this.body.setSize(13, 13, false);
		this.play("star");

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	bounceCount = 0;
	able = false;

	preUpdate(time, delta) {

		super.preUpdate(time, delta);

		if (this.body.onFloor()) {

			this.bounceCount++;
		}

		if (this.bounceCount >= 3) {

			this.able = true;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
