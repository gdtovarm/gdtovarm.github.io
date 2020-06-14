import * as Phaser from 'phaser';
import { GameScene } from './scenes/mainScene';

const gameCfg: Phaser.Types.Core.GameConfig = {
    title: 'Space shooter',
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight
    },

    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },

    parent: 'game',
    backgroundColor: '#000000',
    scene: GameScene
};

export const game = new Phaser.Game(gameCfg);
