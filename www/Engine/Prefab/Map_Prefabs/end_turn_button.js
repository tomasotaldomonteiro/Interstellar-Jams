
// You can write more code here

/* START OF COMPILED CODE */

class end_turn_button extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 93, y ?? 37, texture || "LeaveMatchButton", frame);

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 186, 75), Phaser.Geom.Rectangle.Contains);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
