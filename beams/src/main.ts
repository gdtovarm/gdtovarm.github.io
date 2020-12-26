import * as Phaser from 'phaser';
import { GameOverScene } from './scenes/gameOverScene';
import { MainMenuScene } from './scenes/mainMenu';
import { GameScene } from './scenes/mainScene';

const gameCfg: Phaser.Types.Core.GameConfig = {
    title: 'Space shooter',
    type: Phaser.AUTO,
    scale: {
        width: 1600,
        height: 900
    },

    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },

    parent: 'Main menu',
    backgroundColor: '#000000',
    scene: [
        MainMenuScene, 
        GameScene,
        GameOverScene
    ]
};

export const game = new Phaser.Game(gameCfg);
