import { MatrixConfiguration } from "./intefaces";

export const VERSION = '0.0.1-beta-01'
export const FRAGMENT_SIZE = 32;
export const MAX_GRID_HEIGHT = 40;
export const MAX_GRID_WIDTH = 40;

export const MATRIX_CONFIGURATIONS: Array<MatrixConfiguration> = [
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
