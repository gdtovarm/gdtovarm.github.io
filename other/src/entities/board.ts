import * as Phaser from 'phaser';
import { Piece } from './piece';
import { FRAGMENT_SIZE } from '../conf/constants';
import { Center } from '../conf/intefaces';

export class Grid extends Phaser.GameObjects.Rectangle {
    public currentPiece: Piece;
    public currentPosition: Center = {
        x: 0, y: 0
    };
    public gridSize: Center = {
        x: 0, y: 0
    };

    constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number, startPiece?: number) {
        super(scene, x, y, width * FRAGMENT_SIZE, height * FRAGMENT_SIZE);
        this.setOrigin(0, 0);
        this.setStrokeStyle(1, 0xFFFFFF, 1);
        
        this.gridSize.x = width;
        this.gridSize.y = height;
        scene.add.existing(this);

        this.addPiece(startPiece);
    }

    public addPiece(startPiece: number) {
        this.currentPiece = Piece.makePiece(this.scene, startPiece);
        this.resetPosition();
        this.drawPiece();
    }

    public drawPiece() {
        const relativePosition: Center = {
            x: (this.currentPosition.x * FRAGMENT_SIZE) + this.x,
            y: (this.currentPosition.y * FRAGMENT_SIZE) + this.y,
        }
        this.currentPiece.drawPiece(relativePosition);
    }

    private resetPosition() {
        this.currentPosition.y = 0;
        this.currentPosition.x = Math.round(this.gridSize.x / 2);
    }

    public rotatePiece() {
        this.currentPiece.rotate();
        const diff = (this.currentPosition.x + this.currentPiece.currentMatrix[0].length) - this.gridSize.x;
        if (diff > 0) {
            this.currentPosition.x -= diff;
        }
        this.drawPiece();
    }

    public move(left: boolean) {
        if (left && this.currentPosition.x > 0) {
            this.currentPosition.x -= 1;
        } else if (!left && this.currentPosition.x + this.currentPiece.currentMatrix[0].length < this.gridSize.x) {
            this.currentPosition.x += 1;
        }
        this.drawPiece();
    }
}
