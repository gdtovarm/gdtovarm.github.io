import * as Phaser from 'phaser';
import { Grid } from '../entities/board';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'MainScene',
};

export class MainScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }

    public create(data: any) {
        const back = this.add.text(300, 75, '< Back');
        back.setInteractive();

        back.addListener('pointerdown', () => {
            this.scene.start('MainMenu');
        });

        this.add.text(100, 75, 'Tetris?');
        this.add.text(100, 100, JSON.stringify(data));

        const width = data.grid.x * 32
        const height = data.grid.y * 32
    
        this.add.text(100, 115, `${width}, ${height}`);

        const grid = new Grid(this, 100, 140, data.grid.x, data.grid.y);
    }
}
