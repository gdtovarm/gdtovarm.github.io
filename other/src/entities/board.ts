import * as Phaser from 'phaser';

export const GRID_SIZE = 32

export class Grid extends Phaser.GameObjects.Rectangle {
    constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number) {
        super(scene, x, y, width * GRID_SIZE, height * GRID_SIZE);
        
        this.setOrigin(0, 0);
        this.setStrokeStyle(1, 0xFFFFFF, 1);
        scene.add.existing(this);
    }

    public addPiece() {
        this.scene.add.rectangle();
    }
}