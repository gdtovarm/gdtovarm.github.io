import * as Phaser from 'phaser';

export const MATRIX_CONFIGURATIONS = [
    [[1, 1, 1, 1]],

    [[1, 1],
     [1, 1]],

    [[1, 1, 0],
     [0, 1, 1]],
    [[0, 1, 1],
     [1, 1, 0]],

    [[1, 0, 0],
     [1, 1, 1]],
    [[0, 0, 1],
     [1, 1, 1]],
    
    [[0, 1, 0],
     [1, 1, 1]],
];

export class Piece  {
    private currentRotation = 0;
    private matrix: MatrixConfiguration;

    private rotatedMatrices: Array<MatrixConfiguration> = new Array<MatrixConfiguration>(4);

    constructor(private matrixConfiguration: MatrixConfiguration) {
        this.matrix = matrixConfiguration;
        this.rotatedMatrices[0] = this.matrix;
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
                    newArray.push(currentMatrix[i][j]);
                }
            }
        }
    }

    get currentMatrix(): MatrixConfiguration {
        return this.rotatedMatrices[this.currentRotation];
    } 
}

type MatrixConfiguration = Array<Array<number>>;