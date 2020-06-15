import * as Phaser from 'phaser';
import { MainMenuScene } from './scenes/main-menu';
import { MainScene } from './scenes/main-scene';


const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Tetris?',
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    parent: 'game',
    backgroundColor: '#000000',
    scene: [MainMenuScene, MainScene]
};

export const game = new Phaser.Game(gameConfig);
