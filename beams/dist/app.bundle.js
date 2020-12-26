/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/conf/constants.ts":
/*!*******************************!*\
  !*** ./src/conf/constants.ts ***!
  \*******************************/
/*! exports provided: FONT_SIZE, TITLE_SIZE, TEXT_SPACING, ARCADE_PIX_FONT, ARCADE_PIX_TITLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_SIZE", function() { return FONT_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_SIZE", function() { return TITLE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_SPACING", function() { return TEXT_SPACING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARCADE_PIX_FONT", function() { return ARCADE_PIX_FONT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARCADE_PIX_TITLE", function() { return ARCADE_PIX_TITLE; });
const FONT_SIZE = 16;
const TITLE_SIZE = 40;
const TEXT_SPACING = 32;
const ARCADE_PIX_FONT = {
    fontFamily: "Arcadepix",
    fontSize: FONT_SIZE,
    align: "left"
};
const ARCADE_PIX_TITLE = {
    fontFamily: "Arcadepix",
    fontSize: TITLE_SIZE,
    align: "left"
};


/***/ }),

/***/ "./src/entities/player.ts":
/*!********************************!*\
  !*** ./src/entities/player.ts ***!
  \********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _conf_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../conf/constants */ "./src/conf/constants.ts");


class Player extends phaser__WEBPACK_IMPORTED_MODULE_0__["GameObjects"].Sprite {
    constructor(scene, x, y, boundaries) {
        super(scene, x, y, 'ship');
        this.playerShootDelay = 30;
        this.playerShootTick = 0;
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
        this.textHealth = this.scene.add.text(32, 64, '', _conf_constants__WEBPACK_IMPORTED_MODULE_1__["ARCADE_PIX_FONT"]);
        this.updateHealth();
    }
    getHealth() {
        return this.health;
    }
    getMaxHealth() {
        return this.maxHealth;
    }
    updateHealth() {
        this.textHealth.text = `Health: ${this.getHealth()}/${this.getMaxHealth()}`;
    }
    takeDamage(damage) {
        this.health -= damage;
        this.updateHealth();
        if (this.health <= 0) {
            this.scene.scene.start('Game over');
        }
    }
    addMovementKeys() {
        this.KeyUp = this.scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0__["Input"].Keyboard.KeyCodes.UP);
        this.KeyDown = this.scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0__["Input"].Keyboard.KeyCodes.DOWN);
        this.KeyLeft = this.scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0__["Input"].Keyboard.KeyCodes.LEFT);
        this.KeyRight = this.scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0__["Input"].Keyboard.KeyCodes.RIGHT);
        this.KeyZ = this.scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0__["Input"].Keyboard.KeyCodes.Z);
    }
    updatePlayerMovement() {
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
    updatePlayerShooting() {
        const player = this;
        this.scene.time.addEvent({
            delay: 15,
            callback: () => {
                const gscene = this.scene;
                this.playerShootTick++;
                if (player.KeyZ.isDown && player.active) {
                    if (this.playerShootTick > this.playerShootDelay) {
                        const laser = gscene.physics.add.sprite(player.x, player.y, 'fireball');
                        gscene.playerLasers.add(laser);
                        const laserParticles = gscene.fireParticles.createEmitter({
                            speedY: { min: -20, max: 20 },
                            scale: { start: 1, end: 0 },
                            speedX: { min: 50, max: 100 },
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game", function() { return game; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scenes_gameOverScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/gameOverScene */ "./src/scenes/gameOverScene.ts");
/* harmony import */ var _scenes_mainMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/mainMenu */ "./src/scenes/mainMenu.ts");
/* harmony import */ var _scenes_mainScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/mainScene */ "./src/scenes/mainScene.ts");




const gameCfg = {
    title: 'Space shooter',
    type: phaser__WEBPACK_IMPORTED_MODULE_0__["AUTO"],
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
        _scenes_mainMenu__WEBPACK_IMPORTED_MODULE_2__["MainMenuScene"],
        _scenes_mainScene__WEBPACK_IMPORTED_MODULE_3__["GameScene"],
        _scenes_gameOverScene__WEBPACK_IMPORTED_MODULE_1__["GameOverScene"]
    ]
};
const game = new phaser__WEBPACK_IMPORTED_MODULE_0__["Game"](gameCfg);


/***/ }),

/***/ "./src/scenes/gameOverScene.ts":
/*!*************************************!*\
  !*** ./src/scenes/gameOverScene.ts ***!
  \*************************************/
/*! exports provided: GameOverScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOverScene", function() { return GameOverScene; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _conf_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../conf/constants */ "./src/conf/constants.ts");


const sceneCfg = {
    active: false,
    visible: false,
    key: 'Game over'
};
class GameOverScene extends phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"] {
    constructor() {
        super(sceneCfg);
    }
    create() {
        const width = Number(this.game.config.width);
        const height = Number(this.game.config.height);
        const mainText = this.add.text(Math.floor(width / 2), Math.floor(height / 2), 'GAME OVER', _conf_constants__WEBPACK_IMPORTED_MODULE_1__["ARCADE_PIX_TITLE"]);
        mainText.x = mainText.x - (mainText.width / 2);
        const instructionText = this.add.text(Math.floor(width / 2), Math.floor(height / 2) + (_conf_constants__WEBPACK_IMPORTED_MODULE_1__["TEXT_SPACING"] * 3), 'Press any key to continue.', _conf_constants__WEBPACK_IMPORTED_MODULE_1__["ARCADE_PIX_FONT"]);
        instructionText.x = instructionText.x - (instructionText.width / 2);
        this.input.keyboard.on('keyup', () => {
            this.scene.start('Main menu');
        });
    }
}


/***/ }),

/***/ "./src/scenes/mainMenu.ts":
/*!********************************!*\
  !*** ./src/scenes/mainMenu.ts ***!
  \********************************/
/*! exports provided: MainMenuScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuScene", function() { return MainMenuScene; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _conf_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../conf/constants */ "./src/conf/constants.ts");


const sceneCfg = {
    active: false,
    visible: false,
    key: 'Main menu'
};
class MainMenuScene extends phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"] {
    constructor() {
        super(sceneCfg);
        this.cursorPointer = 0;
        this.menuData = {
            title: 'BEAMS!',
            options: [
                {
                    label: 'Start',
                    action: () => {
                        this.scene.start('Game');
                    }
                },
                {
                    label: 'Load',
                    action: () => { }
                },
                {
                    label: 'Credits',
                    action: () => { }
                }
            ]
        };
        this.menuStartingY = _conf_constants__WEBPACK_IMPORTED_MODULE_1__["TEXT_SPACING"] * 3;
        this.menuStartingX = _conf_constants__WEBPACK_IMPORTED_MODULE_1__["TEXT_SPACING"] * 2;
    }
    create() {
        this.add.text(_conf_constants__WEBPACK_IMPORTED_MODULE_1__["TEXT_SPACING"] * 2, _conf_constants__WEBPACK_IMPORTED_MODULE_1__["TEXT_SPACING"], this.menuData.title, _conf_constants__WEBPACK_IMPORTED_MODULE_1__["ARCADE_PIX_TITLE"]);
        this.cursor = this.add.text(this.menuStartingX - _conf_constants__WEBPACK_IMPORTED_MODULE_1__["TEXT_SPACING"], this.menuStartingY, '>', _conf_constants__WEBPACK_IMPORTED_MODULE_1__["ARCADE_PIX_FONT"]);
        for (const [index, opt] of this.menuData.options.entries()) {
            const menuItem = this.add.text(this.menuStartingX, this.menuStartingY + (index * _conf_constants__WEBPACK_IMPORTED_MODULE_1__["TEXT_SPACING"]), opt.label, _conf_constants__WEBPACK_IMPORTED_MODULE_1__["ARCADE_PIX_FONT"]);
        }
        const keyArrowUp = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0__["Input"].Keyboard.KeyCodes.UP);
        const keyArrowDown = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0__["Input"].Keyboard.KeyCodes.DOWN);
        const KeyEnter = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0__["Input"].Keyboard.KeyCodes.ENTER);
        keyArrowUp.addListener(phaser__WEBPACK_IMPORTED_MODULE_0__["Input"].Keyboard.Events.DOWN, () => {
            this.cursorPointer = (this.cursorPointer === 0) ? this.menuData.options.length - 1 : this.cursorPointer - 1;
            this.cursor.y = (this.menuStartingY + (this.cursorPointer * _conf_constants__WEBPACK_IMPORTED_MODULE_1__["TEXT_SPACING"]));
        });
        keyArrowDown.addListener(phaser__WEBPACK_IMPORTED_MODULE_0__["Input"].Keyboard.Events.DOWN, () => {
            this.cursorPointer = (this.cursorPointer === this.menuData.options.length - 1) ? 0 : this.cursorPointer + 1;
            this.cursor.y = (this.menuStartingY + (this.cursorPointer * _conf_constants__WEBPACK_IMPORTED_MODULE_1__["TEXT_SPACING"]));
        });
        KeyEnter.addListener(phaser__WEBPACK_IMPORTED_MODULE_0__["Input"].Keyboard.Events.DOWN, () => {
            const fn = this.menuData.options[this.cursorPointer].action;
            if (fn) {
                fn();
            }
        });
    }
}


/***/ }),

/***/ "./src/scenes/mainScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/mainScene.ts ***!
  \*********************************/
/*! exports provided: GameScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScene", function() { return GameScene; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _conf_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../conf/constants */ "./src/conf/constants.ts");
/* harmony import */ var _entities_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/player */ "./src/entities/player.ts");



const sceneCfg = {
    active: false,
    visible: false,
    key: 'Game'
};
class GameScene extends phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"] {
    constructor() {
        super(sceneCfg);
        this.enemyCreationTick = 0;
        this.enemyCreationDelay = 10;
        this.score = 0;
    }
    preload() {
        //this.load.image('spaceship', 'assets/sprites/spaceship-1.png');
        this.load.image('enemy', 'assets/sprites/enemy-1.png');
        this.load.spritesheet('ship', 'assets/sprites/spaceship-1-sheet.png', { frameWidth: 64, frameHeight: 64 });
        this.load.image('fireball', 'assets/sprites/fireball.png');
        this.load.image('red-laser', 'assets/sprites/enemy-laser.png');
        this.load.image('fire-small', 'assets/particles/fire-small.png');
        this.load.image('red', 'assets/particles/red.png');
    }
    create() {
        const height = Number(this.game.config.height);
        const width = Number(this.game.config.width);
        this.verticalCenter = height / 2;
        const boundaries = {
            top: 32, bottom: height - 32,
            left: 32, right: width - 32
        };
        this.player = new _entities_player__WEBPACK_IMPORTED_MODULE_2__["Player"](this, 70, this.verticalCenter, boundaries);
        this.playerLasers = this.add.group();
        this.enemies = this.add.group();
        this.enemyLasers = this.add.group();
        this.redParticles = this.add.particles('red');
        this.fireParticles = this.add.particles('fire-small');
        this.add.text(32, 32, 'Move with arrow keys, shoot with Z', _conf_constants__WEBPACK_IMPORTED_MODULE_1__["ARCADE_PIX_FONT"]);
        this.scoreText = this.add.text(480, 32, 'Enemies destroyed: 0', _conf_constants__WEBPACK_IMPORTED_MODULE_1__["ARCADE_PIX_FONT"]);
        this.physics.add.overlap(this.playerLasers, this.enemies, (laser, enemy) => {
            if (laser) {
                laser.getData('particleRef').explode();
                laser.destroy();
                const emitter = this.fireParticles.createEmitter({
                    speed: { min: 20, max: 60 },
                    scale: { start: 1.5, end: 0 },
                    blendMode: 'ADD',
                }).startFollow(laser);
                this.time.delayedCall(200, () => {
                    emitter.explode(0, 0, 0);
                });
            }
            if (enemy) {
                this.score++;
                this.scoreText.setText('Enemies destroyed: ' + this.score);
                enemy.destroy();
            }
        });
        this.physics.add.overlap(this.player, this.enemyLasers, (player, laser) => {
            this.player.takeDamage(1);
            laser.destroy();
        });
        this.updateLasers();
        this.attemptMakeEnemy();
        this.updateEnemiesShooting();
    }
    update() {
        // Where angels fear to tread...
        for (const e of this.enemies.getChildren()) {
            const enemy = e;
            enemy.x -= 5;
            if (enemy.x < -64) {
                enemy.destroy();
            }
        }
    }
    updateLasers() {
        this.time.addEvent({
            delay: 15,
            callback: function () {
                for (var i = 0; i < this.playerLasers.getChildren().length; i++) {
                    var laser = this.playerLasers.getChildren()[i];
                    laser.x += laser.displayWidth / 2;
                    if (laser.x > this.game.config.width) {
                        //this.createExplosion(laser.x, laser.y);
                        if (laser) {
                            laser.getData('particleRef').explode();
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
                    var laser = this.enemyLasers.getChildren()[i];
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
    attemptMakeEnemy() {
        this.time.addEvent({
            delay: 30,
            callback: function () {
                if (this.enemyCreationTick < this.enemyCreationDelay) {
                    this.enemyCreationTick++;
                }
                else {
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
    updateEnemiesShooting() {
        this.time.addEvent({
            delay: 300,
            callback: () => {
                for (var i = 0; i < this.enemies.getChildren().length; i++) {
                    const enemy = this.enemies.getChildren()[i];
                    if (phaser__WEBPACK_IMPORTED_MODULE_0__["Math"].Between(0, 100) > 95) {
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmYvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdGllcy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9nYW1lT3ZlclNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbk1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUFDLEVBQUUsRUFBRTtvQkFDeEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQThCLENBQUM7b0JBRXpFLElBQUksMkNBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTt3QkFDbEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQzt3QkFDbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBRTVCLDZCQUE2QjtxQkFDaEM7aUJBQ0o7WUFDTCxDQUFDO1lBQ0QsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0oiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0IGNvbnN0IEZPTlRfU0laRSA9IDE2O1xyXG5leHBvcnQgY29uc3QgVElUTEVfU0laRSA9IDQwO1xyXG5leHBvcnQgY29uc3QgVEVYVF9TUEFDSU5HID0gMzI7XHJcblxyXG5leHBvcnQgY29uc3QgQVJDQURFX1BJWF9GT05UID0ge1xyXG4gICAgZm9udEZhbWlseTogXCJBcmNhZGVwaXhcIixcclxuICAgIGZvbnRTaXplOiBGT05UX1NJWkUsXHJcbiAgICBhbGlnbjogXCJsZWZ0XCJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBUkNBREVfUElYX1RJVExFID0ge1xyXG4gICAgZm9udEZhbWlseTogXCJBcmNhZGVwaXhcIixcclxuICAgIGZvbnRTaXplOiBUSVRMRV9TSVpFLFxyXG4gICAgYWxpZ246IFwibGVmdFwiXHJcbn07XHJcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBBUkNBREVfUElYX0ZPTlQgfSBmcm9tICcuLi9jb25mL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gJy4uL3NjZW5lcy9tYWluU2NlbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUge1xyXG4gICAgcHVibGljIEtleVVwOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG4gICAgcHVibGljIEtleURvd246IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcbiAgICBwdWJsaWMgS2V5TGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHB1YmxpYyBLZXlSaWdodDogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHB1YmxpYyBLZXlaOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXJTaG9vdERlbGF5ID0gMzA7XHJcbiAgICBwdWJsaWMgcGxheWVyU2hvb3RUaWNrID0gMDtcclxuXHJcbiAgICBwcml2YXRlIG1heEhlYWx0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBoZWFsdGg6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgdGV4dEhlYWx0aDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgICBwcml2YXRlIGJvdW5kYXJpZXM6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogR2FtZVNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgYm91bmRhcmllczogYW55KSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIHgsIHksICdzaGlwJyk7XHJcbiAgICAgICAgdGhpcy5ib3VuZGFyaWVzID0gYm91bmRhcmllcztcclxuXHJcbiAgICAgICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiBcInNoaXBcIixcclxuICAgICAgICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnc2hpcCcsIHt9KSxcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiAwLFxyXG4gICAgICAgICAgICByZXBlYXQ6IC0xXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy53b3JsZC5lbmFibGVCb2R5KHRoaXMsIDApO1xyXG5cclxuICAgICAgICB0aGlzLm1heEhlYWx0aCA9IDM7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSB0aGlzLm1heEhlYWx0aDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmFkZE1vdmVtZW50S2V5cygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGxheWVyTW92ZW1lbnQoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllclNob290aW5nKCk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnRleHRIZWFsdGggPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDMyLCA2NCwgJycsIEFSQ0FERV9QSVhfRk9OVCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVIZWFsdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGVhbHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWx0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TWF4SGVhbHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heEhlYWx0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUhlYWx0aCgpIHtcclxuICAgICAgICB0aGlzLnRleHRIZWFsdGgudGV4dCA9IGBIZWFsdGg6ICR7dGhpcy5nZXRIZWFsdGgoKX0vJHt0aGlzLmdldE1heEhlYWx0aCgpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRha2VEYW1hZ2UoZGFtYWdlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmhlYWx0aCAtPSBkYW1hZ2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVIZWFsdGgoKTtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnNjZW5lLnN0YXJ0KCdHYW1lIG92ZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRNb3ZlbWVudEtleXMoKSB7XHJcbiAgICAgICAgdGhpcy5LZXlVcCA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5VUCk7XHJcbiAgICAgICAgdGhpcy5LZXlEb3duID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkRPV04pO1xyXG4gICAgICAgIHRoaXMuS2V5TGVmdCA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5MRUZUKTtcclxuICAgICAgICB0aGlzLktleVJpZ2h0ID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlJJR0hUKTtcclxuICAgICAgICB0aGlzLktleVogPSB0aGlzLnNjZW5lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuWik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVQbGF5ZXJNb3ZlbWVudCgpIHtcclxuICAgICAgICB0aGlzLnNjZW5lLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICAgICAgICBkZWxheTogMzAsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5LZXlVcC5pc0Rvd24gJiYgdGhpcy55ID4gdGhpcy5ib3VuZGFyaWVzLnRvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSAtPSA2O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RnJhbWUoMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5LZXlEb3duLmlzRG93biAmJiB0aGlzLnkgPCB0aGlzLmJvdW5kYXJpZXMuYm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IDY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRGcmFtZSgyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLktleVJpZ2h0LmlzRG93biAmJiB0aGlzLnggPCB0aGlzLmJvdW5kYXJpZXMucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLktleUxlZnQuaXNEb3duICYmIHRoaXMueCA+IHRoaXMuYm91bmRhcmllcy5sZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54IC09IDY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuS2V5VXAuaXNEb3duICYmICF0aGlzLktleURvd24uaXNEb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRGcmFtZSgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlUGxheWVyU2hvb3RpbmcoKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDE1LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3NjZW5lID0gKHRoaXMuc2NlbmUgYXMgR2FtZVNjZW5lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2hvb3RUaWNrKys7XHJcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLktleVouaXNEb3duICYmIHBsYXllci5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJTaG9vdFRpY2sgPiB0aGlzLnBsYXllclNob290RGVsYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzZXIgPSBnc2NlbmUucGh5c2ljcy5hZGQuc3ByaXRlKHBsYXllci54LCBwbGF5ZXIueSwgJ2ZpcmViYWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdzY2VuZS5wbGF5ZXJMYXNlcnMuYWRkKGxhc2VyKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXNlclBhcnRpY2xlcyA9IGdzY2VuZS5maXJlUGFydGljbGVzLmNyZWF0ZUVtaXR0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWRZOiB7bWluOiAtMjAsIG1heDogMjB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtzdGFydDogMSwgZW5kOiAwfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkWDoge21pbjogNTAsIG1heDogMTAwfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsZW5kTW9kZTogJ0FERCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWZlc3BhbjogMjUwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2Z4Lmxhc2VyUGxheWVyLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzZXJQYXJ0aWNsZXMuc3RhcnRGb2xsb3cobGFzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXNlci5zZXREYXRhKCdwYXJ0aWNsZVJlZicsIGxhc2VyUGFydGljbGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpY2sgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cdFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWxsYmFja1Njb3BlOiB0aGlzLnNjZW5lLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IEdhbWVPdmVyU2NlbmUgfSBmcm9tICcuL3NjZW5lcy9nYW1lT3ZlclNjZW5lJztcclxuaW1wb3J0IHsgTWFpbk1lbnVTY2VuZSB9IGZyb20gJy4vc2NlbmVzL21haW5NZW51JztcclxuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9zY2VuZXMvbWFpblNjZW5lJztcclxuXHJcbmNvbnN0IGdhbWVDZmc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XHJcbiAgICB0aXRsZTogJ1NwYWNlIHNob290ZXInLFxyXG4gICAgdHlwZTogUGhhc2VyLkFVVE8sXHJcbiAgICBzY2FsZToge1xyXG4gICAgICAgIHdpZHRoOiAxNjAwLFxyXG4gICAgICAgIGhlaWdodDogOTAwXHJcbiAgICB9LFxyXG5cclxuICAgIHBoeXNpY3M6IHtcclxuICAgICAgICBkZWZhdWx0OiAnYXJjYWRlJyxcclxuICAgICAgICBhcmNhZGU6IHtcclxuICAgICAgICAgICAgZGVidWc6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBwYXJlbnQ6ICdNYWluIG1lbnUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICBzY2VuZTogW1xyXG4gICAgICAgIE1haW5NZW51U2NlbmUsIFxyXG4gICAgICAgIEdhbWVTY2VuZSxcclxuICAgICAgICBHYW1lT3ZlclNjZW5lXHJcbiAgICBdXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ2ZnKTtcclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IEFSQ0FERV9QSVhfVElUTEUsIEFSQ0FERV9QSVhfRk9OVCwgVEVYVF9TUEFDSU5HIH0gZnJvbSAnLi4vY29uZi9jb25zdGFudHMnO1xyXG5cclxuY29uc3Qgc2NlbmVDZmc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6ICdHYW1lIG92ZXInXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZU92ZXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNmZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IE51bWJlcih0aGlzLmdhbWUuY29uZmlnLndpZHRoKTtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBOdW1iZXIodGhpcy5nYW1lLmNvbmZpZy5oZWlnaHQpO1xyXG5cclxuICAgICAgICBjb25zdCBtYWluVGV4dCA9IHRoaXMuYWRkLnRleHQoXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3Iod2lkdGggLyAyKSxcclxuICAgICAgICAgICAgTWF0aC5mbG9vcihoZWlnaHQgLyAyKSxcclxuICAgICAgICAgICAgJ0dBTUUgT1ZFUicsXHJcbiAgICAgICAgICAgIEFSQ0FERV9QSVhfVElUTEVcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIG1haW5UZXh0LnggPSBtYWluVGV4dC54IC0gKG1haW5UZXh0LndpZHRoIC8gMik7XHJcblxyXG4gICAgICAgIGNvbnN0IGluc3RydWN0aW9uVGV4dCA9IHRoaXMuYWRkLnRleHQoXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3Iod2lkdGggLyAyKSxcclxuICAgICAgICAgICAgTWF0aC5mbG9vcihoZWlnaHQgLyAyKSArIChURVhUX1NQQUNJTkcgKiAzKSxcclxuICAgICAgICAgICAgJ1ByZXNzIGFueSBrZXkgdG8gY29udGludWUuJyxcclxuICAgICAgICAgICAgQVJDQURFX1BJWF9GT05UXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBpbnN0cnVjdGlvblRleHQueCA9IGluc3RydWN0aW9uVGV4dC54IC0gKGluc3RydWN0aW9uVGV4dC53aWR0aCAvIDIpO1xyXG5cclxuICAgICAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXl1cCcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnTWFpbiBtZW51Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IEFSQ0FERV9QSVhfRk9OVCwgQVJDQURFX1BJWF9USVRMRSwgVEVYVF9TUEFDSU5HIH0gZnJvbSAnLi4vY29uZi9jb25zdGFudHMnO1xyXG5cclxuY29uc3Qgc2NlbmVDZmc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6ICdNYWluIG1lbnUnXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNmZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3Vyc29yOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICAgIGN1cnNvclBvaW50ZXIgPSAwO1xyXG5cclxuICAgIG1lbnVEYXRhID0ge1xyXG4gICAgICAgIHRpdGxlOiAnQkVBTVMhJyxcclxuICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnU3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnR2FtZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0xvYWQnLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7fVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0NyZWRpdHMnLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgbWVudVN0YXJ0aW5nWSA9IFRFWFRfU1BBQ0lORyAqIDM7XHJcbiAgICBtZW51U3RhcnRpbmdYID0gVEVYVF9TUEFDSU5HICogMjtcclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMuYWRkLnRleHQoVEVYVF9TUEFDSU5HICogMiwgVEVYVF9TUEFDSU5HLCB0aGlzLm1lbnVEYXRhLnRpdGxlLCBBUkNBREVfUElYX1RJVExFKTtcclxuICAgICAgICB0aGlzLmN1cnNvciA9IHRoaXMuYWRkLnRleHQodGhpcy5tZW51U3RhcnRpbmdYIC0gVEVYVF9TUEFDSU5HLCB0aGlzLm1lbnVTdGFydGluZ1ksICc+JywgQVJDQURFX1BJWF9GT05UKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBbaW5kZXgsIG9wdF0gb2YgdGhpcy5tZW51RGF0YS5vcHRpb25zLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbSA9IHRoaXMuYWRkLnRleHQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVTdGFydGluZ1gsXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVTdGFydGluZ1kgKyAoaW5kZXggKiBURVhUX1NQQUNJTkcpLFxyXG4gICAgICAgICAgICAgICAgb3B0LmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgQVJDQURFX1BJWF9GT05UXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qga2V5QXJyb3dVcCA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5VUCk7XHJcbiAgICAgICAgY29uc3Qga2V5QXJyb3dEb3duID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkRPV04pO1xyXG4gICAgICAgIGNvbnN0IEtleUVudGVyID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkVOVEVSKTtcclxuXHJcbiAgICAgICAga2V5QXJyb3dVcC5hZGRMaXN0ZW5lcihQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuRXZlbnRzLkRPV04sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJzb3JQb2ludGVyID0gKHRoaXMuY3Vyc29yUG9pbnRlciA9PT0gMCkgPyB0aGlzLm1lbnVEYXRhLm9wdGlvbnMubGVuZ3RoIC0gMSA6IHRoaXMuY3Vyc29yUG9pbnRlciAtIDE7XHJcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yLnkgPSAodGhpcy5tZW51U3RhcnRpbmdZICsgKHRoaXMuY3Vyc29yUG9pbnRlciAqIFRFWFRfU1BBQ0lORykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBrZXlBcnJvd0Rvd24uYWRkTGlzdGVuZXIoUGhhc2VyLklucHV0LktleWJvYXJkLkV2ZW50cy5ET1dOLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yUG9pbnRlciA9ICh0aGlzLmN1cnNvclBvaW50ZXIgPT09IHRoaXMubWVudURhdGEub3B0aW9ucy5sZW5ndGggLSAxKSA/IDAgOiB0aGlzLmN1cnNvclBvaW50ZXIgKyAxO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnNvci55ID0gKHRoaXMubWVudVN0YXJ0aW5nWSArICh0aGlzLmN1cnNvclBvaW50ZXIgKiBURVhUX1NQQUNJTkcpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgS2V5RW50ZXIuYWRkTGlzdGVuZXIoUGhhc2VyLklucHV0LktleWJvYXJkLkV2ZW50cy5ET1dOLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZuID0gdGhpcy5tZW51RGF0YS5vcHRpb25zW3RoaXMuY3Vyc29yUG9pbnRlcl0uYWN0aW9uO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZuKSB7XHJcbiAgICAgICAgICAgICAgICBmbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IEFSQ0FERV9QSVhfRk9OVCB9IGZyb20gJy4uL2NvbmYvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vZW50aXRpZXMvcGxheWVyJztcclxuXHJcbmNvbnN0IHNjZW5lQ2ZnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiAnR2FtZSdcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXI6IFBsYXllcjtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyTGFzZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcbiAgICBwdWJsaWMgZW5lbWllczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG4gICAgcHVibGljIGVuZW15TGFzZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcblxyXG4gICAgcHVibGljIHJlZFBhcnRpY2xlczogUGhhc2VyLkdhbWVPYmplY3RzLlBhcnRpY2xlcy5QYXJ0aWNsZUVtaXR0ZXJNYW5hZ2VyO1xyXG4gICAgcHVibGljIGZpcmVQYXJ0aWNsZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5QYXJ0aWNsZXMuUGFydGljbGVFbWl0dGVyTWFuYWdlcjtcclxuXHJcbiAgICBwdWJsaWMgZW5lbXlDcmVhdGlvblRpY2sgPSAwO1xyXG4gICAgcHVibGljIGVuZW15Q3JlYXRpb25EZWxheSA9IDEwO1xyXG5cclxuICAgIHB1YmxpYyB2ZXJ0aWNhbENlbnRlcjogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBzY29yZVRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICAgIHByaXZhdGUgc2NvcmUgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ2ZnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJlbG9hZCAoKVxyXG4gICAge1xyXG4gICAgICAgIC8vdGhpcy5sb2FkLmltYWdlKCdzcGFjZXNoaXAnLCAnYXNzZXRzL3Nwcml0ZXMvc3BhY2VzaGlwLTEucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdlbmVteScsICdhc3NldHMvc3ByaXRlcy9lbmVteS0xLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnc2hpcCcsICdhc3NldHMvc3ByaXRlcy9zcGFjZXNoaXAtMS1zaGVldC5wbmcnLCB7ZnJhbWVXaWR0aDogNjQsIGZyYW1lSGVpZ2h0OiA2NH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ZpcmViYWxsJywgJ2Fzc2V0cy9zcHJpdGVzL2ZpcmViYWxsLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncmVkLWxhc2VyJywgJ2Fzc2V0cy9zcHJpdGVzL2VuZW15LWxhc2VyLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZmlyZS1zbWFsbCcsICdhc3NldHMvcGFydGljbGVzL2ZpcmUtc21hbGwucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdyZWQnLCAnYXNzZXRzL3BhcnRpY2xlcy9yZWQucG5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBOdW1iZXIodGhpcy5nYW1lLmNvbmZpZy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gTnVtYmVyKHRoaXMuZ2FtZS5jb25maWcud2lkdGgpO1xyXG5cclxuICAgICAgICB0aGlzLnZlcnRpY2FsQ2VudGVyID0gaGVpZ2h0IC8gMjtcclxuICAgICAgICBjb25zdCBib3VuZGFyaWVzID0ge1xyXG4gICAgICAgICAgICB0b3A6IDMyLCBib3R0b206IGhlaWdodCAtIDMyLFxyXG4gICAgICAgICAgICBsZWZ0OiAzMiwgcmlnaHQ6IHdpZHRoIC0gMzJcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcywgNzAsIHRoaXMudmVydGljYWxDZW50ZXIsIGJvdW5kYXJpZXMpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJMYXNlcnMgPSB0aGlzLmFkZC5ncm91cCgpO1xyXG5cclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSB0aGlzLmFkZC5ncm91cCgpO1xyXG4gICAgICAgIHRoaXMuZW5lbXlMYXNlcnMgPSB0aGlzLmFkZC5ncm91cCgpO1xyXG5cclxuICAgICAgICB0aGlzLnJlZFBhcnRpY2xlcyA9IHRoaXMuYWRkLnBhcnRpY2xlcygncmVkJyk7XHJcbiAgICAgICAgdGhpcy5maXJlUGFydGljbGVzID0gdGhpcy5hZGQucGFydGljbGVzKCdmaXJlLXNtYWxsJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkLnRleHQoMzIsIDMyLCAnTW92ZSB3aXRoIGFycm93IGtleXMsIHNob290IHdpdGggWicsIEFSQ0FERV9QSVhfRk9OVCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcmVUZXh0ID0gdGhpcy5hZGQudGV4dCg0ODAsIDMyLCAnRW5lbWllcyBkZXN0cm95ZWQ6IDAnLCBBUkNBREVfUElYX0ZPTlQpO1xyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5wbGF5ZXJMYXNlcnMsIHRoaXMuZW5lbWllcywgKGxhc2VyOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlLCBlbmVteTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsYXNlcikge1xyXG4gICAgICAgICAgICAgICAgbGFzZXIuZ2V0RGF0YSgncGFydGljbGVSZWYnKS5leHBsb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBsYXNlci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbWl0dGVyID0gdGhpcy5maXJlUGFydGljbGVzLmNyZWF0ZUVtaXR0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkOiB7bWluOiAyMCwgbWF4OiA2MH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtzdGFydDogMS41LCBlbmQ6IDB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kTW9kZTogJ0FERCcsXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydEZvbGxvdyhsYXNlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lLmRlbGF5ZWRDYWxsKDIwMCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIuZXhwbG9kZSgwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbmVteSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZVRleHQuc2V0VGV4dCgnRW5lbWllcyBkZXN0cm95ZWQ6ICcgKyB0aGlzLnNjb3JlKVxyXG4gICAgICAgICAgICAgICAgZW5lbXkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLnBsYXllciwgdGhpcy5lbmVteUxhc2VycywgKHBsYXllcjogYW55LCBsYXNlcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnRha2VEYW1hZ2UoMSk7XHJcbiAgICAgICAgICAgIGxhc2VyLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVMYXNlcnMoKTtcclxuICAgICAgICB0aGlzLmF0dGVtcHRNYWtlRW5lbXkoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVuZW1pZXNTaG9vdGluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgLy8gV2hlcmUgYW5nZWxzIGZlYXIgdG8gdHJlYWQuLi5cclxuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgdGhpcy5lbmVtaWVzLmdldENoaWxkcmVuKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZW5lbXkgPSAoZSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKTtcclxuICAgICAgICAgICAgZW5lbXkueCAtPSA1O1xyXG5cclxuICAgICAgICAgICAgaWYgKGVuZW15LnggPCAtNjQpIHtcclxuICAgICAgICAgICAgICAgIGVuZW15LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVMYXNlcnMoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDE1LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGxheWVyTGFzZXJzLmdldENoaWxkcmVuKCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzZXIgPSB0aGlzLnBsYXllckxhc2Vycy5nZXRDaGlsZHJlbigpW2ldO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzZXIueCArPSBsYXNlci5kaXNwbGF5V2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc2VyLnggPiB0aGlzLmdhbWUuY29uZmlnLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jcmVhdGVFeHBsb3Npb24obGFzZXIueCwgbGFzZXIueSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXNlci5nZXREYXRhKCdwYXJ0aWNsZVJlZicpLmV4cGxvZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc2VyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbGJhY2tTY29wZTogdGhpcyxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGltZS5hZGRFdmVudCh7XHJcbiAgICAgICAgICAgIGRlbGF5OiAxNSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lbmVteUxhc2Vycy5nZXRDaGlsZHJlbigpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhc2VyID0gdGhpcy5lbmVteUxhc2Vycy5nZXRDaGlsZHJlbigpW2ldIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzZXIueCAtPSAxNTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzZXIueCA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc2VyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXMsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGF0dGVtcHRNYWtlRW5lbXkoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmVteUNyZWF0aW9uVGljayA8IHRoaXMuZW5lbXlDcmVhdGlvbkRlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteUNyZWF0aW9uVGljayArKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZCA9IE1hdGgucmFuZG9tKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyYW5kID4gMC41KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIHRoaXMudmVydGljYWxDZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZW15ID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUodGhpcy5nYW1lLmNvbmZpZy53aWR0aCArIDE1MCwgdGhpcy52ZXJ0aWNhbENlbnRlciArIG9mZnNldCwgJ2VuZW15Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5hZGQoZW5lbXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15Q3JlYXRpb25UaWNrID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbGJhY2tTY29wZTogdGhpcyxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlRW5lbWllc1Nob290aW5nKCkge1xyXG4gICAgICAgIHRoaXMudGltZS5hZGRFdmVudCh7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZW5lbWllcy5nZXRDaGlsZHJlbigpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5lbXkgPSB0aGlzLmVuZW1pZXMuZ2V0Q2hpbGRyZW4oKVtpXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUGhhc2VyLk1hdGguQmV0d2VlbigwLCAxMDApID4gOTUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhc2VyID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUoZW5lbXkueCwgZW5lbXkueSwgJ3JlZC1sYXNlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15TGFzZXJzLmFkZChsYXNlcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2Z4Lmxhc2VyRW5lbXkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9