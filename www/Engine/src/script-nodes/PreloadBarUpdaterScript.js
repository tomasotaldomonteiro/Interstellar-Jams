
// You can write more code here

/* START OF COMPILED CODE */

class PreloadBarUpdaterScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */


	 awake() {

		const fullWidth = this.gameObject.width;

		this.scene.load.on(Phaser.Loader.Events.PROGRESS, p => {

			this.gameObject.width = fullWidth * p;
		});
	}


	

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */
// butt_arrow_R.setInteractive();

//         // Обработчик события 'pointerdown' (нажатие на кнопку)
//         butt_arrow_R.on('pointerdown', () => {
//             this.movePrefab();
//         });

//         // Обработчики событий для изменения внешнего вида кнопки при наведении и нажатии
//         butt_arrow_R.on('pointerover', () => {
//             butt_arrow_R.setTint(0x44ff44);
//         });

//         butt_arrow_R.on('pointerout', () => {
//             butt_arrow_R.clearTint();
//         });

//         butt_arrow_R.on('pointerup', () => {
//             butt_arrow_R.setTint(0xff0000);
//         });
// You can write more code here
