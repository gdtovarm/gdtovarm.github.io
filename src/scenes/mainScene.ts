import * as Phaser from 'phaser';
import { FONT_SIZE } from '../conf/constants';

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
    public enemies: Phaser.GameObjects.Group;
    public enemyLasers: Phaser.GameObjects.Group;

    public redParticles: Phaser.GameObjects.Particles.ParticleEmitterManager;
    public fireParticles: Phaser.GameObjects.Particles.ParticleEmitterManager;

    public playerShootDelay = 30;
    public playerShootTick = 0;

    public enemyCreationTick = 0;
    public enemyCreationDelay = 10;

    public verticalCenter: number;

    public scoreText: Phaser.GameObjects.Text;
    private score = 0;
    private boundaries: { top: number, bottom: number, left: number, right: number };

    constructor() {
        super(sceneCfg);
    }

    public preload ()
    {
        //this.load.image('spaceship', 'assets/sprites/spaceship-1.png');
        this.load.image('enemy', 'assets/sprites/enemy-1.png');
        this.load.spritesheet('ship', 'assets/sprites/spaceship-1-sheet.png', {frameWidth: 64, frameHeight: 64});

        this.load.image('fireball', 'assets/sprites/fireball.png');
        this.load.image('red-laser', 'assets/sprites/enemy-laser.png');
        this.load.image('fire-small', 'assets/particles/fire-small.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    public create() {
        const height = Number(this.game.config.height);
        const width = Number(this.game.config.width);

        this.verticalCenter = height / 2;
        this.boundaries = {
            top: 32, bottom: height - 32,
            left: 32, right: width - 32
        }

        this.anims.create({
            key: "ship",
            frames: this.anims.generateFrameNumbers('ship', {}),
            frameRate: 0,
            repeat: -1
        });
    
        this.player = this.physics.add.sprite(70, this.verticalCenter, 'ship');
        
        this.KeyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.KeyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.KeyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.KeyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.KeyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    
        this.playerLasers = this.add.group();
        this.enemies = this.add.group();
        this.enemyLasers = this.add.group();

        this.redParticles = this.add.particles('red');
        this.fireParticles = this.add.particles('fire-small');

        this.add.text(
            32,
            32,
            'Move with arrow keys, shoot with Z',
            {
                fontFamily: "Arcadepix",
                fontSize: FONT_SIZE,
                align: "left"
            }
        );

        this.add.text(
            32,
            64,
            'Coming soon... ?',
            {
                fontFamily: "Arcadepix",
                fontSize: FONT_SIZE,
                align: "left"
            }
        );

        this.scoreText = this.add.text(
            400,
            32,
            'Enemies destroyed: 0',
            {
                fontFamily: "Arcadepix",
                fontSize: FONT_SIZE,
                align: "center"
            }
        );

        this.physics.add.overlap(this.playerLasers, this.enemies, (laser: any, enemy: any) => {
            if (laser) {
                laser.particleRef.explode();
                laser.destroy();
                const emitter = this.fireParticles.createEmitter({
                    speed: {min: 20, max: 60},
                    scale: {start: 1.5, end: 0},
                    blendMode: 'ADD',
                }).startFollow(laser);

                this.time.delayedCall(400, () => {
                    emitter.explode(0, 0, 0);
                });
            }
            if (enemy) {
                this.score++;
                this.scoreText.setText('Enemies destroyed: ' + this.score)
                enemy.destroy();
            }
        });

        this.updatePlayerMovement();
        this.updatePlayerShooting();
        this.updateLasers();
        this.attemptMakeEnemy();
        this.updateEnemiesShooting();
    }

    public update() {
        // Where angels fear to tread...
        for (const e of this.enemies.getChildren()) {
            const enemy = (e as Phaser.GameObjects.Sprite);
            enemy.x -= 5;

            if (enemy.x < -64) {
                enemy.destroy();
            }
        }
    }
    
    private updatePlayerMovement() {
        this.time.addEvent({
            delay: 30,
            callback: () => {
                if (this.KeyUp.isDown && this.player.y > this.boundaries.top) {
                    this.player.y -= 6;
                    this.player.setFrame(1);
                }
                if (this.KeyDown.isDown && this.player.y < this.boundaries.bottom) {
                    this.player.y += 6;
                    this.player.setFrame(2);
                }
                if (this.KeyRight.isDown && this.player.x < this.boundaries.right) {
                    this.player.x += 6;
                }
                if (this.KeyLeft.isDown && this.player.x > this.boundaries.left) {
                    this.player.x -= 6;
                }
                if (!this.KeyUp.isDown && !this.KeyDown.isDown) {
                    this.player.setFrame(0);
                }
            },
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
                        const laser = this.physics.add.sprite(this.player.x, this.player.y, 'fireball');
                        this.playerLasers.add(laser);
    
                        const laserParticles = this.fireParticles.createEmitter({
                            speedY: {min: -20, max: 20},
                            scale: {start: 1, end: 0},
                            speedX: {min: 50, max: 100},
                            blendMode: 'ADD',
                            lifespan: 250
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
            delay: 15,
            callback: function() {
                for (var i = 0; i < this.playerLasers.getChildren().length; i++) {
                    var laser = this.playerLasers.getChildren()[i];
                
                    laser.x += laser.displayWidth / 2;
                
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
        
        this.time.addEvent({
            delay: 15,
            callback: () => {
                for (var i = 0; i < this.enemyLasers.getChildren().length; i++) {
                    var laser = this.enemyLasers.getChildren()[i] as Phaser.GameObjects.Sprite;
                    laser.x -= 15;
                    if (laser.x < 10) {
                        laser.destroy();
                    }
                }
            },
            callbackScope: this,
            loop: true
        });
    }

    private attemptMakeEnemy() {
        this.time.addEvent({
            delay: 30,
            callback: function() {
                if (this.enemyCreationTick < this.enemyCreationDelay) {
                    this.enemyCreationTick ++;
                } else {
                    const rand = Math.random();

                    if (rand > 0.5) {
                        const offset = (Math.random() - 0.5) * this.verticalCenter;
                        const enemy = this.physics.add.sprite(this.game.config.width + 150, this.verticalCenter + offset, 'enemy');
                        this.enemies.add(enemy);
                    }
                    this.enemyCreationTick = 0;
                }
            },
            callbackScope: this,
            loop: true
        });
    }

    private updateEnemiesShooting() {
        this.time.addEvent({
            delay: 300,
            callback: () => {
                for (var i = 0; i < this.enemies.getChildren().length; i++) {
                    const enemy = this.enemies.getChildren()[i] as Phaser.GameObjects.Sprite;
            
                    if (Phaser.Math.Between(0, 100) > 95) {
                        var laser = this.physics.add.sprite(enemy.x, enemy.y, 'red-laser');
                        this.enemyLasers.add(laser);
            
                        //this.sfx.laserEnemy.play();
                    }
                }
            },
            loop: true
        });
    }
}

