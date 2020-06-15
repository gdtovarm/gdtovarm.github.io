import * as Phaser from 'phaser';
import { FRAGMENT_SIZE, MATRIX_CONFIGURATIONS } from '../conf/constants';
import { MatrixConfiguration, Center } from '../conf/intefaces';

export class Piece  {
    private currentRotation = 0;
    private matrix: MatrixConfiguration;

    private rotatedMatrices: Array<MatrixConfiguration> = new Array<MatrixConfiguration>(4);
    private fragments: Array<Phaser.GameObjects.Rectangle> = [];

    constructor(private matrixConfiguration: MatrixConfiguration, private scene: Phaser.Scene) {
        this.matrix = matrixConfiguration;
        this.rotatedMatrices[0] = this.matrix;
        this.calculateRotations();

        for (const arr of this.matrix) {
            for (const num of arr) {
                if (num === 1) {
                    const rect = scene.add.rectangle(200, 200, FRAGMENT_SIZE, FRAGMENT_SIZE, 0xFFFFFF, 1);
                    rect.setStrokeStyle(1, 0x000000)
                    rect.setOrigin(0, 0);
                    this.fragments.push(rect)
                }
            }
        }
    }

    calculateRotations() {
        for (let n = 1; n < 4; n++) {
            const currentMatrix = this.rotatedMatrices[n - 1];

            const newMatrix: MatrixConfiguration = [];

            const cols = currentMatrix[0].length;
            const rows = currentMatrix.length;
            
            for (let i = cols - 1; i >= 0; i--) {
                const newArray = [];
                newMatrix.push(newArray);
                for (let j = 0; j < rows; j++) {
                    newArray.push(currentMatrix[j][i]);
                }
            }

            this.rotatedMatrices[n] = newMatrix;
        }
    }

    get currentMatrix(): MatrixConfiguration {
        return this.rotatedMatrices[this.currentRotation];
    }

    static makePiece(scene: Phaser.Scene, index: number): Piece {
        if (index == null) {
            index = Math.floor(Math.random() * MATRIX_CONFIGURATIONS.length)
        }
        return new Piece(MATRIX_CONFIGURATIONS[index], scene);
    }

    public drawPiece(center: Center) {
        const mat = this.currentMatrix;
        let countPiece = 0;
        const pieceCenter: Center = {
            x: Math.floor(mat[0].length / 2),
            y: Math.floor(mat.length / 2),
        };

        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[i].length; j++) {
                if(mat[i][j] === 1) {
                    const rect = this.fragments[countPiece];
                    rect.x = (j * FRAGMENT_SIZE) + (center.x - pieceCenter.x);
                    rect.y = (i * FRAGMENT_SIZE) + (center.y - pieceCenter.y);
                    countPiece ++;
                }
            }
        }
    }

    public rotate() {
        //this.currentRotation = (this.currentRotation - 1) % 4;

        const rotation = this.currentRotation - 1;
        this.currentRotation = (rotation < 0) ? 3 : rotation;
    }
}
