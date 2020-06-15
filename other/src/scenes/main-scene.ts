import * as Phaser from 'phaser';
import { Grid } from '../entities/board';
import { FRAGMENT_SIZE } from '../conf/constants';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'MainScene',
};

export class MainScene extends Phaser.Scene {
    private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
    private grid: Grid;

    private lock: boolean = false;
    private moveLock: boolean = false;

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

        const width = data.grid.x * FRAGMENT_SIZE;
        const height = data.grid.y * FRAGMENT_SIZE;
    
        this.add.text(100, 115, `${width}, ${height}`);

        this.grid = new Grid(this, 100, 140, data.grid.x, data.grid.y, data.pieceIndex);
        this.cursorKeys = this.input.keyboard.createCursorKeys();
    }

    public update() {
        this.checkPieceMovement();
    }

    private checkPieceMovement() {
        if (this.cursorKeys.up.isDown && !this.lock) {
            this.grid.rotatePiece();
            this.lock = true;
        } else if (this.cursorKeys.up.isUp && this.lock) {
            this.lock = false;
        }

        if (!this.moveLock) {
            if (this.cursorKeys.left.isDown) {
                this.grid.move(true);
                this.moveLock = true;
            }
            if (this.cursorKeys.right.isDown) {
                this.grid.move(false);
                this.moveLock = true;
            }
        } else if (this.cursorKeys.left.isUp && this.cursorKeys.right.isUp) {
            this.moveLock = false;
        }
    }
}
