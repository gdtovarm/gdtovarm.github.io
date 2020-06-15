import * as Phaser from 'phaser';
import { VERSION, MATRIX_CONFIGURATIONS } from '../conf/constants';

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
    private pieceIndex = null;
    private testElement: any;
    private selectedIndexText: Phaser.GameObjects.Text;

    constructor() {
        super(sceneConfig);
    }

    public create() {
        this.add.text(100, 75, `Tetris? ver ${VERSION}`, {
            fontSize: '36px'
        });

        const start = this.add.text(100, 120, 'Start');
        const customize = this.add.text(100, 140, 'Customize');
        this.testElement = this.add.rectangle(100, 400, 16, 16, 0xFF00FF);

        start.setInteractive();
        customize.setInteractive();

        start.addListener('pointerdown', () => {
            const data: any = {grid: this.grid};
            if (this.pieceIndex != null) {
                data.pieceIndex = this.pieceIndex
            }
            this.scene.start('MainScene', data)
        });
        customize.addListener('pointerdown', () => {
            this.add.text(250, 250, "Press an index");
        });

        for (let i = 0; i < MATRIX_CONFIGURATIONS.length; i++) {
            const selector = this.add.text(100 + (i * 20), 160, `${i}`, {
                fontSize: '24 px'
            });
            selector.setInteractive();
            selector.addListener('pointerdown', () => {
                this.pieceIndex = i;
                this.selectedIndexText.setText(`Pieza seleccionada: ${this.pieceIndex}`);
            });
        }

        this.selectedIndexText = this.add.text(100, 180, '', {
            fontSize: '24 px'
        });
    }

    public update() {
        if (this.testElement.x < 600) {
            this.testElement.x += 2;
        } else {
            this.testElement.x = 100;
        }
    }
}