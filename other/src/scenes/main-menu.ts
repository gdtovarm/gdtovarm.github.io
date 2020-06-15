import * as Phaser from 'phaser';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'MainMenu',
};
  
export class MainMenuScene extends Phaser.Scene {
    private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
    private grid = {
        x: 10, y: 20
    };

    constructor() {
        super(sceneConfig);
    }

    public create() {
        this.add.text(100, 75, 'Tetris?', {
            fontSize: '36px'
        });

        const start = this.add.text(100, 120, 'Start');
        const customize = this.add.text(100, 140, 'Customize');

        start.setInteractive();
        customize.setInteractive();

        start.addListener('pointerdown', () => {
            this.scene.start('MainScene', {grid: this.grid})
        });
        customize.addListener('pointerdown', () => {
            this.add.text(250, 250, "YOU'VE CLICKED ME");
        });
    }

    public update() {
        // TODO
    }
}