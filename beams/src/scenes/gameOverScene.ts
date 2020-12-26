import * as Phaser from 'phaser';
import { ARCADE_PIX_TITLE, ARCADE_PIX_FONT, TEXT_SPACING } from '../conf/constants';

const sceneCfg: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game over'
};

export class GameOverScene extends Phaser.Scene {
    constructor() {
        super(sceneCfg);
    }

    public create() {
        const width = Number(this.game.config.width);
        const height = Number(this.game.config.height);

        const mainText = this.add.text(
            Math.floor(width / 2),
            Math.floor(height / 2),
            'GAME OVER',
            ARCADE_PIX_TITLE
        )

        mainText.x = mainText.x - (mainText.width / 2);

        const instructionText = this.add.text(
            Math.floor(width / 2),
            Math.floor(height / 2) + (TEXT_SPACING * 3),
            'Press any key to continue.',
            ARCADE_PIX_FONT
        )

        instructionText.x = instructionText.x - (instructionText.width / 2);

        this.input.keyboard.on('keyup', () => {
            this.scene.start('Main menu');
        });
    }
}
