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

class Player extends phaser__WEBPACK_IMPORTED_MODULE_0__["GameObjects"].Sprite {
    constructor(scene, x, y, boundaries) {
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
        this.addMovementKeys();
        this.updatePlayerMovement();
        this.updatePlayerShooting();
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
            callback: function () {
                this.playerShootTick++;
                if (player.KeyZ.isDown && player.active) {
                    if (this.playerShootTick > this.playerShootDelay) {
                        const laser = this.physics.add.sprite(player.x, player.y, 'fireball');
                        this.playerLasers.add(laser);
                        const laserParticles = this.fireParticles.createEmitter({
                            speedY: { min: -20, max: 20 },
                            scale: { start: 1, end: 0 },
                            speedX: { min: 50, max: 100 },
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
        this.input.keyboard.on('keydown', () => {
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
        this.playerShootDelay = 30;
        this.playerShootTick = 0;
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
        this.add.text(32, 64, 'Coming soon... ?', _conf_constants__WEBPACK_IMPORTED_MODULE_1__["ARCADE_PIX_FONT"]);
        this.scoreText = this.add.text(480, 32, 'Enemies destroyed: 0', _conf_constants__WEBPACK_IMPORTED_MODULE_1__["ARCADE_PIX_FONT"]);
        this.physics.add.overlap(this.playerLasers, this.enemies, (laser, enemy) => {
            if (laser) {
                laser.particleRef.explode();
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
            this.scene.start('Game over');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmYvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdGllcy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9nYW1lT3ZlclNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbk1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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Q1AsQ0FBQztJQUVPLHFCQUFxQjtRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNmLEtBQUssRUFBRSxHQUFHO1lBQ1YsUUFBUSxFQUFFLEdBQUcsRUFBRTtnQkFDWCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3hELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUE4QixDQUFDO29CQUV6RSxJQUFJLDJDQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUU7d0JBQ2xDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7d0JBQ25FLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUU1Qiw2QkFBNkI7cUJBQ2hDO2lCQUNKO1lBQ0wsQ0FBQztZQUNELElBQUksRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydCBjb25zdCBGT05UX1NJWkUgPSAxNjtcclxuZXhwb3J0IGNvbnN0IFRJVExFX1NJWkUgPSA0MDtcclxuZXhwb3J0IGNvbnN0IFRFWFRfU1BBQ0lORyA9IDMyO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFSQ0FERV9QSVhfRk9OVCA9IHtcclxuICAgIGZvbnRGYW1pbHk6IFwiQXJjYWRlcGl4XCIsXHJcbiAgICBmb250U2l6ZTogRk9OVF9TSVpFLFxyXG4gICAgYWxpZ246IFwibGVmdFwiXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQVJDQURFX1BJWF9USVRMRSA9IHtcclxuICAgIGZvbnRGYW1pbHk6IFwiQXJjYWRlcGl4XCIsXHJcbiAgICBmb250U2l6ZTogVElUTEVfU0laRSxcclxuICAgIGFsaWduOiBcImxlZnRcIlxyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlIHtcclxuICAgIHB1YmxpYyBLZXlVcDogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHB1YmxpYyBLZXlEb3duOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG4gICAgcHVibGljIEtleUxlZnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcbiAgICBwdWJsaWMgS2V5UmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcbiAgICBwdWJsaWMgS2V5WjogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuXHJcbiAgICBwcml2YXRlIGJvdW5kYXJpZXM6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgYm91bmRhcmllczogYW55KSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIHgsIHksICdzaGlwJyk7XHJcbiAgICAgICAgdGhpcy5ib3VuZGFyaWVzID0gYm91bmRhcmllcztcclxuXHJcbiAgICAgICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiBcInNoaXBcIixcclxuICAgICAgICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnc2hpcCcsIHt9KSxcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiAwLFxyXG4gICAgICAgICAgICByZXBlYXQ6IC0xXHJcbiAgICAgICAgfSk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLndvcmxkLmVuYWJsZUJvZHkodGhpcywgMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hZGRNb3ZlbWVudEtleXMoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllck1vdmVtZW50KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJTaG9vdGluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkTW92ZW1lbnRLZXlzKCkge1xyXG4gICAgICAgIHRoaXMuS2V5VXAgPSB0aGlzLnNjZW5lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuVVApO1xyXG4gICAgICAgIHRoaXMuS2V5RG93biA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5ET1dOKTtcclxuICAgICAgICB0aGlzLktleUxlZnQgPSB0aGlzLnNjZW5lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuTEVGVCk7XHJcbiAgICAgICAgdGhpcy5LZXlSaWdodCA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5SSUdIVCk7XHJcbiAgICAgICAgdGhpcy5LZXlaID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlopO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlUGxheWVyTW92ZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuS2V5VXAuaXNEb3duICYmIHRoaXMueSA+IHRoaXMuYm91bmRhcmllcy50b3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgLT0gNjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZyYW1lKDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuS2V5RG93bi5pc0Rvd24gJiYgdGhpcy55IDwgdGhpcy5ib3VuZGFyaWVzLmJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSArPSA2O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RnJhbWUoMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5LZXlSaWdodC5pc0Rvd24gJiYgdGhpcy54IDwgdGhpcy5ib3VuZGFyaWVzLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IDY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5LZXlMZWZ0LmlzRG93biAmJiB0aGlzLnggPiB0aGlzLmJvdW5kYXJpZXMubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCAtPSA2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLktleVVwLmlzRG93biAmJiAhdGhpcy5LZXlEb3duLmlzRG93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RnJhbWUoMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVBsYXllclNob290aW5nKCkge1xyXG4gICAgICAgIGNvbnN0IHBsYXllciA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zY2VuZS50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDE1LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNob290VGljaysrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5LZXlaLmlzRG93biAmJiBwbGF5ZXIuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyU2hvb3RUaWNrID4gdGhpcy5wbGF5ZXJTaG9vdERlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc2VyID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUocGxheWVyLngsIHBsYXllci55LCAnZmlyZWJhbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJMYXNlcnMuYWRkKGxhc2VyKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXNlclBhcnRpY2xlcyA9IHRoaXMuZmlyZVBhcnRpY2xlcy5jcmVhdGVFbWl0dGVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkWToge21pbjogLTIwLCBtYXg6IDIwfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7c3RhcnQ6IDEsIGVuZDogMH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZFg6IHttaW46IDUwLCBtYXg6IDEwMH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibGVuZE1vZGU6ICdBREQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlmZXNwYW46IDI1MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnNmeC5sYXNlclBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc2VyUGFydGljbGVzLnN0YXJ0Rm9sbG93KGxhc2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzZXIucGFydGljbGVSZWYgPSBsYXNlclBhcnRpY2xlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpY2sgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cdFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWxsYmFja1Njb3BlOiB0aGlzLnNjZW5lLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IEdhbWVPdmVyU2NlbmUgfSBmcm9tICcuL3NjZW5lcy9nYW1lT3ZlclNjZW5lJztcclxuaW1wb3J0IHsgTWFpbk1lbnVTY2VuZSB9IGZyb20gJy4vc2NlbmVzL21haW5NZW51JztcclxuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9zY2VuZXMvbWFpblNjZW5lJztcclxuXHJcbmNvbnN0IGdhbWVDZmc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XHJcbiAgICB0aXRsZTogJ1NwYWNlIHNob290ZXInLFxyXG4gICAgdHlwZTogUGhhc2VyLkFVVE8sXHJcbiAgICBzY2FsZToge1xyXG4gICAgICAgIHdpZHRoOiAxNjAwLFxyXG4gICAgICAgIGhlaWdodDogOTAwXHJcbiAgICB9LFxyXG5cclxuICAgIHBoeXNpY3M6IHtcclxuICAgICAgICBkZWZhdWx0OiAnYXJjYWRlJyxcclxuICAgICAgICBhcmNhZGU6IHtcclxuICAgICAgICAgICAgZGVidWc6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBwYXJlbnQ6ICdNYWluIG1lbnUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICBzY2VuZTogW1xyXG4gICAgICAgIE1haW5NZW51U2NlbmUsIFxyXG4gICAgICAgIEdhbWVTY2VuZSxcclxuICAgICAgICBHYW1lT3ZlclNjZW5lXHJcbiAgICBdXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ2ZnKTtcclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IEFSQ0FERV9QSVhfVElUTEUsIEFSQ0FERV9QSVhfRk9OVCwgVEVYVF9TUEFDSU5HIH0gZnJvbSAnLi4vY29uZi9jb25zdGFudHMnO1xyXG5cclxuY29uc3Qgc2NlbmVDZmc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6ICdHYW1lIG92ZXInXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZU92ZXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNmZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IE51bWJlcih0aGlzLmdhbWUuY29uZmlnLndpZHRoKTtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBOdW1iZXIodGhpcy5nYW1lLmNvbmZpZy5oZWlnaHQpO1xyXG5cclxuICAgICAgICBjb25zdCBtYWluVGV4dCA9IHRoaXMuYWRkLnRleHQoXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3Iod2lkdGggLyAyKSxcclxuICAgICAgICAgICAgTWF0aC5mbG9vcihoZWlnaHQgLyAyKSxcclxuICAgICAgICAgICAgJ0dBTUUgT1ZFUicsXHJcbiAgICAgICAgICAgIEFSQ0FERV9QSVhfVElUTEVcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIG1haW5UZXh0LnggPSBtYWluVGV4dC54IC0gKG1haW5UZXh0LndpZHRoIC8gMik7XHJcblxyXG4gICAgICAgIGNvbnN0IGluc3RydWN0aW9uVGV4dCA9IHRoaXMuYWRkLnRleHQoXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3Iod2lkdGggLyAyKSxcclxuICAgICAgICAgICAgTWF0aC5mbG9vcihoZWlnaHQgLyAyKSArIChURVhUX1NQQUNJTkcgKiAzKSxcclxuICAgICAgICAgICAgJ1ByZXNzIGFueSBrZXkgdG8gY29udGludWUuJyxcclxuICAgICAgICAgICAgQVJDQURFX1BJWF9GT05UXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBpbnN0cnVjdGlvblRleHQueCA9IGluc3RydWN0aW9uVGV4dC54IC0gKGluc3RydWN0aW9uVGV4dC53aWR0aCAvIDIpO1xyXG5cclxuICAgICAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXlkb3duJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdNYWluIG1lbnUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgQVJDQURFX1BJWF9GT05ULCBBUkNBREVfUElYX1RJVExFLCBURVhUX1NQQUNJTkcgfSBmcm9tICcuLi9jb25mL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBzY2VuZUNmZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIGtleTogJ01haW4gbWVudSdcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ2ZnKTtcclxuICAgIH1cclxuXHJcbiAgICBjdXJzb3I6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gICAgY3Vyc29yUG9pbnRlciA9IDA7XHJcblxyXG4gICAgbWVudURhdGEgPSB7XHJcbiAgICAgICAgdGl0bGU6ICdCRUFNUyEnLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdTdGFydCcsXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnTG9hZCcsXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICgpID0+IHt9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnQ3JlZGl0cycsXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICgpID0+IHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBtZW51U3RhcnRpbmdZID0gVEVYVF9TUEFDSU5HICogMztcclxuICAgIG1lbnVTdGFydGluZ1ggPSBURVhUX1NQQUNJTkcgKiAyO1xyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5hZGQudGV4dChURVhUX1NQQUNJTkcgKiAyLCBURVhUX1NQQUNJTkcsIHRoaXMubWVudURhdGEudGl0bGUsIEFSQ0FERV9QSVhfVElUTEUpO1xyXG4gICAgICAgIHRoaXMuY3Vyc29yID0gdGhpcy5hZGQudGV4dCh0aGlzLm1lbnVTdGFydGluZ1ggLSBURVhUX1NQQUNJTkcsIHRoaXMubWVudVN0YXJ0aW5nWSwgJz4nLCBBUkNBREVfUElYX0ZPTlQpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IFtpbmRleCwgb3B0XSBvZiB0aGlzLm1lbnVEYXRhLm9wdGlvbnMuZW50cmllcygpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtID0gdGhpcy5hZGQudGV4dChcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudVN0YXJ0aW5nWCxcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudVN0YXJ0aW5nWSArIChpbmRleCAqIFRFWFRfU1BBQ0lORyksXHJcbiAgICAgICAgICAgICAgICBvcHQubGFiZWwsXHJcbiAgICAgICAgICAgICAgICBBUkNBREVfUElYX0ZPTlRcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBrZXlBcnJvd1VwID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlVQKTtcclxuICAgICAgICBjb25zdCBrZXlBcnJvd0Rvd24gPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuRE9XTik7XHJcbiAgICAgICAgY29uc3QgS2V5RW50ZXIgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuRU5URVIpO1xyXG5cclxuICAgICAgICBrZXlBcnJvd1VwLmFkZExpc3RlbmVyKFBoYXNlci5JbnB1dC5LZXlib2FyZC5FdmVudHMuRE9XTiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnNvclBvaW50ZXIgPSAodGhpcy5jdXJzb3JQb2ludGVyID09PSAwKSA/IHRoaXMubWVudURhdGEub3B0aW9ucy5sZW5ndGggLSAxIDogdGhpcy5jdXJzb3JQb2ludGVyIC0gMTtcclxuICAgICAgICAgICAgdGhpcy5jdXJzb3IueSA9ICh0aGlzLm1lbnVTdGFydGluZ1kgKyAodGhpcy5jdXJzb3JQb2ludGVyICogVEVYVF9TUEFDSU5HKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGtleUFycm93RG93bi5hZGRMaXN0ZW5lcihQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuRXZlbnRzLkRPV04sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJzb3JQb2ludGVyID0gKHRoaXMuY3Vyc29yUG9pbnRlciA9PT0gdGhpcy5tZW51RGF0YS5vcHRpb25zLmxlbmd0aCAtIDEpID8gMCA6IHRoaXMuY3Vyc29yUG9pbnRlciArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yLnkgPSAodGhpcy5tZW51U3RhcnRpbmdZICsgKHRoaXMuY3Vyc29yUG9pbnRlciAqIFRFWFRfU1BBQ0lORykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBLZXlFbnRlci5hZGRMaXN0ZW5lcihQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuRXZlbnRzLkRPV04sICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZm4gPSB0aGlzLm1lbnVEYXRhLm9wdGlvbnNbdGhpcy5jdXJzb3JQb2ludGVyXS5hY3Rpb247XHJcblxyXG4gICAgICAgICAgICBpZiAoZm4pIHtcclxuICAgICAgICAgICAgICAgIGZuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgQVJDQURFX1BJWF9GT05UIH0gZnJvbSAnLi4vY29uZi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9lbnRpdGllcy9wbGF5ZXInO1xyXG5cclxuY29uc3Qgc2NlbmVDZmc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6ICdHYW1lJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgcHVibGljIHBsYXllcjogUGxheWVyO1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXJMYXNlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuICAgIHB1YmxpYyBlbmVtaWVzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcbiAgICBwdWJsaWMgZW5lbXlMYXNlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuXHJcbiAgICBwdWJsaWMgcmVkUGFydGljbGVzOiBQaGFzZXIuR2FtZU9iamVjdHMuUGFydGljbGVzLlBhcnRpY2xlRW1pdHRlck1hbmFnZXI7XHJcbiAgICBwdWJsaWMgZmlyZVBhcnRpY2xlczogUGhhc2VyLkdhbWVPYmplY3RzLlBhcnRpY2xlcy5QYXJ0aWNsZUVtaXR0ZXJNYW5hZ2VyO1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXJTaG9vdERlbGF5ID0gMzA7XHJcbiAgICBwdWJsaWMgcGxheWVyU2hvb3RUaWNrID0gMDtcclxuXHJcbiAgICBwdWJsaWMgZW5lbXlDcmVhdGlvblRpY2sgPSAwO1xyXG4gICAgcHVibGljIGVuZW15Q3JlYXRpb25EZWxheSA9IDEwO1xyXG5cclxuICAgIHB1YmxpYyB2ZXJ0aWNhbENlbnRlcjogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBzY29yZVRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gICAgcHJpdmF0ZSBzY29yZSA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDZmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmVsb2FkICgpXHJcbiAgICB7XHJcbiAgICAgICAgLy90aGlzLmxvYWQuaW1hZ2UoJ3NwYWNlc2hpcCcsICdhc3NldHMvc3ByaXRlcy9zcGFjZXNoaXAtMS5wbmcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2VuZW15JywgJ2Fzc2V0cy9zcHJpdGVzL2VuZW15LTEucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdzaGlwJywgJ2Fzc2V0cy9zcHJpdGVzL3NwYWNlc2hpcC0xLXNoZWV0LnBuZycsIHtmcmFtZVdpZHRoOiA2NCwgZnJhbWVIZWlnaHQ6IDY0fSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZmlyZWJhbGwnLCAnYXNzZXRzL3Nwcml0ZXMvZmlyZWJhbGwucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdyZWQtbGFzZXInLCAnYXNzZXRzL3Nwcml0ZXMvZW5lbXktbGFzZXIucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdmaXJlLXNtYWxsJywgJ2Fzc2V0cy9wYXJ0aWNsZXMvZmlyZS1zbWFsbC5wbmcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3JlZCcsICdhc3NldHMvcGFydGljbGVzL3JlZC5wbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCkge1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IE51bWJlcih0aGlzLmdhbWUuY29uZmlnLmhlaWdodCk7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBOdW1iZXIodGhpcy5nYW1lLmNvbmZpZy53aWR0aCk7XHJcblxyXG4gICAgICAgIHRoaXMudmVydGljYWxDZW50ZXIgPSBoZWlnaHQgLyAyO1xyXG4gICAgICAgIGNvbnN0IGJvdW5kYXJpZXMgPSB7XHJcbiAgICAgICAgICAgIHRvcDogMzIsIGJvdHRvbTogaGVpZ2h0IC0gMzIsXHJcbiAgICAgICAgICAgIGxlZnQ6IDMyLCByaWdodDogd2lkdGggLSAzMlxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLCA3MCwgdGhpcy52ZXJ0aWNhbENlbnRlciwgYm91bmRhcmllcyk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnBsYXllckxhc2VycyA9IHRoaXMuYWRkLmdyb3VwKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IHRoaXMuYWRkLmdyb3VwKCk7XHJcbiAgICAgICAgdGhpcy5lbmVteUxhc2VycyA9IHRoaXMuYWRkLmdyb3VwKCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVkUGFydGljbGVzID0gdGhpcy5hZGQucGFydGljbGVzKCdyZWQnKTtcclxuICAgICAgICB0aGlzLmZpcmVQYXJ0aWNsZXMgPSB0aGlzLmFkZC5wYXJ0aWNsZXMoJ2ZpcmUtc21hbGwnKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGQudGV4dCgzMiwgMzIsICdNb3ZlIHdpdGggYXJyb3cga2V5cywgc2hvb3Qgd2l0aCBaJywgQVJDQURFX1BJWF9GT05UKTtcclxuICAgICAgICB0aGlzLmFkZC50ZXh0KDMyLCA2NCwgJ0NvbWluZyBzb29uLi4uID8nLCBBUkNBREVfUElYX0ZPTlQpO1xyXG5cclxuICAgICAgICB0aGlzLnNjb3JlVGV4dCA9IHRoaXMuYWRkLnRleHQoNDgwLCAzMiwnRW5lbWllcyBkZXN0cm95ZWQ6IDAnLCBBUkNBREVfUElYX0ZPTlQpO1xyXG5cclxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5wbGF5ZXJMYXNlcnMsIHRoaXMuZW5lbWllcywgKGxhc2VyOiBhbnksIGVuZW15OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGxhc2VyKSB7XHJcbiAgICAgICAgICAgICAgICBsYXNlci5wYXJ0aWNsZVJlZi5leHBsb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBsYXNlci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbWl0dGVyID0gdGhpcy5maXJlUGFydGljbGVzLmNyZWF0ZUVtaXR0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkOiB7bWluOiAyMCwgbWF4OiA2MH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtzdGFydDogMS41LCBlbmQ6IDB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kTW9kZTogJ0FERCcsXHJcbiAgICAgICAgICAgICAgICB9KS5zdGFydEZvbGxvdyhsYXNlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lLmRlbGF5ZWRDYWxsKDIwMCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtaXR0ZXIuZXhwbG9kZSgwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbmVteSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZVRleHQuc2V0VGV4dCgnRW5lbWllcyBkZXN0cm95ZWQ6ICcgKyB0aGlzLnNjb3JlKVxyXG4gICAgICAgICAgICAgICAgZW5lbXkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLnBsYXllciwgdGhpcy5lbmVteUxhc2VycywgKHBsYXllcjogYW55LCBsYXNlcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0dhbWUgb3ZlcicpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUxhc2VycygpO1xyXG4gICAgICAgIHRoaXMuYXR0ZW1wdE1ha2VFbmVteSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRW5lbWllc1Nob290aW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBXaGVyZSBhbmdlbHMgZmVhciB0byB0cmVhZC4uLlxyXG4gICAgICAgIGZvciAoY29uc3QgZSBvZiB0aGlzLmVuZW1pZXMuZ2V0Q2hpbGRyZW4oKSkge1xyXG4gICAgICAgICAgICBjb25zdCBlbmVteSA9IChlIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpO1xyXG4gICAgICAgICAgICBlbmVteS54IC09IDU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZW5lbXkueCA8IC02NCkge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHVwZGF0ZUxhc2VycygpIHtcclxuICAgICAgICB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICAgICAgICBkZWxheTogMTUsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJMYXNlcnMuZ2V0Q2hpbGRyZW4oKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXNlciA9IHRoaXMucGxheWVyTGFzZXJzLmdldENoaWxkcmVuKClbaV07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsYXNlci54ICs9IGxhc2VyLmRpc3BsYXlXaWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzZXIueCA+IHRoaXMuZ2FtZS5jb25maWcud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmNyZWF0ZUV4cGxvc2lvbihsYXNlci54LCBsYXNlci55KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc2VyLnBhcnRpY2xlUmVmLmV4cGxvZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc2VyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbGJhY2tTY29wZTogdGhpcyxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGltZS5hZGRFdmVudCh7XHJcbiAgICAgICAgICAgIGRlbGF5OiAxNSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lbmVteUxhc2Vycy5nZXRDaGlsZHJlbigpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhc2VyID0gdGhpcy5lbmVteUxhc2Vycy5nZXRDaGlsZHJlbigpW2ldIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzZXIueCAtPSAxNTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzZXIueCA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc2VyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXMsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGF0dGVtcHRNYWtlRW5lbXkoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmVteUNyZWF0aW9uVGljayA8IHRoaXMuZW5lbXlDcmVhdGlvbkRlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteUNyZWF0aW9uVGljayArKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZCA9IE1hdGgucmFuZG9tKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyYW5kID4gMC41KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIHRoaXMudmVydGljYWxDZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZW15ID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUodGhpcy5nYW1lLmNvbmZpZy53aWR0aCArIDE1MCwgdGhpcy52ZXJ0aWNhbENlbnRlciArIG9mZnNldCwgJ2VuZW15Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5hZGQoZW5lbXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15Q3JlYXRpb25UaWNrID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbGJhY2tTY29wZTogdGhpcyxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlRW5lbWllc1Nob290aW5nKCkge1xyXG4gICAgICAgIHRoaXMudGltZS5hZGRFdmVudCh7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZW5lbWllcy5nZXRDaGlsZHJlbigpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5lbXkgPSB0aGlzLmVuZW1pZXMuZ2V0Q2hpbGRyZW4oKVtpXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUGhhc2VyLk1hdGguQmV0d2VlbigwLCAxMDApID4gOTUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhc2VyID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUoZW5lbXkueCwgZW5lbXkueSwgJ3JlZC1sYXNlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15TGFzZXJzLmFkZChsYXNlcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2Z4Lmxhc2VyRW5lbXkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9