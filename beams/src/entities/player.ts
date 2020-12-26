import * as Phaser from 'phaser';
import { ARCADE_PIX_FONT } from '../conf/constants';
import { GameScene } from '../scenes/mainScene';

export class Player extends Phaser.GameObjects.Sprite {
    public KeyUp: Phaser.Input.Keyboard.Key;
    public KeyDown: Phaser.Input.Keyboard.Key;
    public KeyLeft: Phaser.Input.Keyboard.Key;
    public KeyRight: Phaser.Input.Keyboard.Key;
    public KeyZ: Phaser.Input.Keyboard.Key;

    public playerShootDelay = 30;
    public playerShootTick = 0;

    private maxHealth: number;
    private health: number;

    public textHealth: Phaser.GameObjects.Text;
    private boundaries: any;

    constructor(scene: GameScene, x: number, y: number, boundaries: any) {
        super(scene, x, y, 'ship');
        this.boundaries = boundaries;

        scene.anims.create({
            key: "ship",
            frames: scene.anims.generateFrameNumbers('ship', {}),
            frameRate: 0,
            repeat: -1
        });

        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);

        this.maxHealth = 3;
        this.health = this.maxHealth;
        
        this.addMovementKeys();
        this.updatePlayerMovement();
        this.updatePlayerShooting();
    
        this.textHealth = this.scene.add.text(32, 64, '', ARCADE_PIX_FONT);
        this.updateHealth();
    }

    public getHealth() {
        return this.health;
    }

    public getMaxHealth() {
        return this.maxHealth;
    }

    private updateHealth() {
        this.textHealth.text = `Health: ${this.getHealth()}/${this.getMaxHealth()}`;
    }

    public takeDamage(damage: number) {
        this.health -= damage;
        this.updateHealth();
        if (this.health <= 0) {
            this.scene.scene.start('Game over');
        }
    }

    private addMovementKeys() {
        this.KeyUp = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.KeyDown = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.KeyLeft = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.KeyRight = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.KeyZ = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    }

    private updatePlayerMovement() {
        this.scene.time.addEvent({
            delay: 30,
            callback: () => {
                if (this.KeyUp.isDown && this.y > this.boundaries.top) {
                    this.y -= 6;
                    this.setFrame(1);
                }
                if (this.KeyDown.isDown && this.y < this.boundaries.bottom) {
                    this.y += 6;
                    this.setFrame(2);
                }
                if (this.KeyRight.isDown && this.x < this.boundaries.right) {
                    this.x += 6;
                }
                if (this.KeyLeft.isDown && this.x > this.boundaries.left) {
                    this.x -= 6;
                }
                if (!this.KeyUp.isDown && !this.KeyDown.isDown) {
                    this.setFrame(0);
                }
            },
            loop: true
        });
    }

    private updatePlayerShooting() {
        const player = this;

        this.scene.time.addEvent({
            delay: 15,
            callback: () => {
                const gscene = (this.scene as GameScene);
                this.playerShootTick++;
                if (player.KeyZ.isDown && player.active) {
                    if (this.playerShootTick > this.playerShootDelay) {
                        const laser = gscene.physics.add.sprite(player.x, player.y, 'fireball');
                        gscene.playerLasers.add(laser);
    
                        const laserParticles = gscene.fireParticles.createEmitter({
                            speedY: {min: -20, max: 20},
                            scale: {start: 1, end: 0},
                            speedX: {min: 50, max: 100},
                            blendMode: 'ADD',
                            lifespan: 250
                        });
                        //this.sfx.laserPlayer.play();
                        laserParticles.startFollow(laser);
                        laser.setData('particleRef', laserParticles);
                        this.playerShootTick = 0;
                    }
                }	
            },
            callbackScope: this.scene,
            loop: true
        });
    }
}
