import * as phaser from 'phaser';

const sceneCfg: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game'
};

export class GameScene extends Phaser.Scene {

    public player: Phaser.GameObjects.Sprite;
    public KeyUp: Phaser.Input.Keyboard.Key;
    public KeyDown: Phaser.Input.Keyboard.Key;
    public KeyLeft: Phaser.Input.Keyboard.Key;
    public KeyRight: Phaser.Input.Keyboard.Key;
    public KeyZ: Phaser.Input.Keyboard.Key;

    public playerLasers: Phaser.GameObjects.Group;

    public redParticles: Phaser.GameObjects.Particles.ParticleEmitterManager;

    public playerShootDelay = 30;
    public playerShootTick = 0;

    constructor() {
        super(sceneCfg);
    }

    public preload ()
    {
        this.load.image('spaceship', 'assets/sprites/spaceship-1.png');
        this.load.spritesheet('ship', 'assets/sprites/spaceship-1-sheet.png', {frameWidth: 64, frameHeight: 64});
        this.load.image('fireball', 'assets/sprites/fireball.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    public create() {
        this.anims.create({
            key: "ship",
            frames: this.anims.generateFrameNumbers('ship', {}),
            frameRate: 0,
            repeat: -1
        });
    
        const initYPos = (this.game.config.height as number) / 2;
        this.player = this.physics.add.sprite(70, initYPos, 'ship');
        
        this.KeyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.KeyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.KeyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.KeyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.KeyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    
        this.playerLasers = this.add.group();
        this.redParticles = this.add.particles('red');
    
        this.updatePlayerMovement();
        this.updatePlayerShooting();
        this.updateLasers();
    }

    public update() {
        // Where angels fear to thread...
    }
    
    private updatePlayerMovement() {
        this.time.addEvent({
            delay: 30,
            callback: function() {
                if (this.KeyUp.isDown) {
                    this.player.y -= 6;
                    this.player.setFrame(1);
                }
                if (this.KeyDown.isDown) {
                    this.player.y += 6;
                    this.player.setFrame(2);
                }
                if (this.KeyRight.isDown) {
                    this.player.x += 6;
                }
                if (this.KeyLeft.isDown) {
                    this.player.x -= 6;
                }
                if (!this.KeyUp.isDown && !this.KeyDown.isDown) {
                    this.player.setFrame(0);
                }
            },
            callbackScope: this,
            loop: true
        });
    }
    private updatePlayerShooting() {
        this.time.addEvent({
            delay: 15,
            callback: function() {
                this.playerShootTick++;
                if (this.KeyZ.isDown && this.player.active) {
                    if (this.playerShootTick > this.playerShootDelay) {
                        var laser = this.physics.add.sprite(this.player.x, this.player.y, 'fireball');
                        this.playerLasers.add(laser);
    
                        var laserParticles = this.redParticles.createEmitter({
                            speed: 100,
                            scale: { start: 1, end: 0 },
                            blendMode: 'ADD'
                        });
                        //this.sfx.laserPlayer.play();
                        laserParticles.startFollow(laser);
                        laser.particleRef = laserParticles;
                        this.playerShootTick = 0;
                    }
                }	
            },
            callbackScope: this,
            loop: true
        });
    }
    
    private updateLasers() {
        this.time.addEvent({
            delay: 30,
            callback: function() {
                for (var i = 0; i < this.playerLasers.getChildren().length; i++) {
                    var laser = this.playerLasers.getChildren()[i];
                
                    laser.x += laser.displayWidth;
                
                    if (laser.x > this.game.config.width) {
                        //this.createExplosion(laser.x, laser.y);
                
                        if (laser) {
                            laser.particleRef.explode();
                            laser.destroy();
                        }
                    }
                }
            },
            callbackScope: this,
            loop: true
        });
        
        /* this.time.addEvent({
            delay: 128,
            callback: function() {
                for (var i = 0; i < this.enemyLasers.getChildren().length; i++) {
                var laser = this.enemyLasers.getChildren()[i];
            
                laser.y += laser.displayHeight;
                }
            },
            callbackScope: this,
            loop: true
        }); */
    }
}
 
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
