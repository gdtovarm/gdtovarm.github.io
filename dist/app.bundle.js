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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FONT_SIZE = 12;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var mainScene_1 = __webpack_require__(/*! ./scenes/mainScene */ "./src/scenes/mainScene.ts");
var gameCfg = {
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
    scene: mainScene_1.GameScene
};
exports.game = new Phaser.Game(gameCfg);


/***/ }),

/***/ "./src/scenes/mainScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/mainScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var constants_1 = __webpack_require__(/*! ../conf/constants */ "./src/conf/constants.ts");
var sceneCfg = {
    active: false,
    visible: false,
    key: 'Game'
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneCfg) || this;
        _this.playerShootDelay = 30;
        _this.playerShootTick = 0;
        _this.enemyCreationTick = 0;
        _this.enemyCreationDelay = 10;
        _this.score = 0;
        return _this;
    }
    GameScene.prototype.preload = function () {
        //this.load.image('spaceship', 'assets/sprites/spaceship-1.png');
        this.load.image('enemy', 'assets/sprites/enemy-1.png');
        this.load.spritesheet('ship', 'assets/sprites/spaceship-1-sheet.png', { frameWidth: 64, frameHeight: 64 });
        this.load.image('fireball', 'assets/sprites/fireball.png');
        this.load.image('fire-small', 'assets/particles/fire-small.png');
        this.load.image('red', 'assets/particles/red.png');
    };
    GameScene.prototype.create = function () {
        var _this = this;
        this.verticalCenter = this.game.config.height / 2;
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
        this.redParticles = this.add.particles('red');
        this.fireParticles = this.add.particles('fire-small');
        this.add.text(32, 32, 'Move with arrow keys, shoot with Z', {
            fontFamily: "Arcadepix",
            fontSize: constants_1.FONT_SIZE,
            align: "left"
        });
        this.add.text(32, 64, 'Coming soon... ?', {
            fontFamily: "Arcadepix",
            fontSize: constants_1.FONT_SIZE,
            align: "left"
        });
        this.scoreText = this.add.text(400, 32, 'Enemies destroyed: 0', {
            fontFamily: "Arcadepix",
            fontSize: constants_1.FONT_SIZE,
            align: "center"
        });
        this.physics.add.overlap(this.playerLasers, this.enemies, function (laser, enemy) {
            if (laser) {
                laser.particleRef.explode();
                laser.destroy();
                var emitter_1 = _this.fireParticles.createEmitter({
                    speed: { min: 20, max: 60 },
                    scale: { start: 1.5, end: 0 },
                    blendMode: 'ADD',
                }).startFollow(laser);
                _this.time.delayedCall(400, function () {
                    emitter_1.explode(0, 0, 0);
                });
            }
            if (enemy) {
                _this.score++;
                _this.scoreText.setText('Enemies destroyed: ' + _this.score);
                enemy.destroy();
            }
        });
        this.updatePlayerMovement();
        this.updatePlayerShooting();
        this.updateLasers();
        this.attemptMakeEnemy();
    };
    GameScene.prototype.update = function () {
        // Where angels fear to tread...
        for (var _i = 0, _a = this.enemies.getChildren(); _i < _a.length; _i++) {
            var e = _a[_i];
            var enemy = e;
            enemy.x -= 5;
            if (enemy.x < -64) {
                enemy.destroy();
            }
        }
    };
    GameScene.prototype.updatePlayerMovement = function () {
        this.time.addEvent({
            delay: 30,
            callback: function () {
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
    };
    GameScene.prototype.updatePlayerShooting = function () {
        this.time.addEvent({
            delay: 15,
            callback: function () {
                this.playerShootTick++;
                if (this.KeyZ.isDown && this.player.active) {
                    if (this.playerShootTick > this.playerShootDelay) {
                        var laser = this.physics.add.sprite(this.player.x, this.player.y, 'fireball');
                        this.playerLasers.add(laser);
                        var laserParticles = this.fireParticles.createEmitter({
                            speedY: { min: -20, max: 20 },
                            scale: { start: 1, end: 0 },
                            speedX: { min: 50, max: 100 },
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
    };
    GameScene.prototype.updateLasers = function () {
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
    };
    GameScene.prototype.attemptMakeEnemy = function () {
        this.time.addEvent({
            delay: 30,
            callback: function () {
                if (this.enemyCreationTick < this.enemyCreationDelay) {
                    this.enemyCreationTick++;
                }
                else {
                    var rand = Math.random();
                    if (rand > 0.5) {
                        var offset = (Math.random() - 0.5) * this.verticalCenter;
                        var enemy = this.physics.add.sprite(this.game.config.width + 150, this.verticalCenter + offset, 'enemy');
                        this.enemies.add(enemy);
                    }
                    this.enemyCreationTick = 0;
                }
            },
            callbackScope: this,
            loop: true
        });
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmYvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpblNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2SmEsaUJBQVMsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0E1QixzRkFBaUM7QUFDakMsNkZBQStDO0FBRS9DLElBQU0sT0FBTyxHQUFpQztJQUMxQyxLQUFLLEVBQUUsZUFBZTtJQUN0QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7SUFDakIsS0FBSyxFQUFFO1FBQ0gsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVO1FBQ3hCLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVztLQUM3QjtJQUVELE9BQU8sRUFBRTtRQUNMLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLE1BQU0sRUFBRTtZQUNKLEtBQUssRUFBRSxLQUFLO1NBQ2Y7S0FDSjtJQUVELE1BQU0sRUFBRSxNQUFNO0lBQ2QsZUFBZSxFQUFFLFNBQVM7SUFDMUIsS0FBSyxFQUFFLHFCQUFTO0NBQ25CLENBQUM7QUFFVyxZQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkI3QyxzRkFBaUM7QUFDakMsMEZBQThDO0FBRTlDLElBQU0sUUFBUSxHQUF1QztJQUNqRCxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLE1BQU07Q0FDZCxDQUFDO0FBRUY7SUFBK0IsNkJBQVk7SUEwQnZDO1FBQUEsWUFDSSxrQkFBTSxRQUFRLENBQUMsU0FDbEI7UUFiTSxzQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIscUJBQWUsR0FBRyxDQUFDLENBQUM7UUFFcEIsdUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLHdCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUt2QixXQUFLLEdBQUcsQ0FBQyxDQUFDOztJQUlsQixDQUFDO0lBRU0sMkJBQU8sR0FBZDtRQUVJLGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsc0NBQXNDLEVBQUUsRUFBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBRXpHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSwwQkFBTSxHQUFiO1FBQUEsaUJBaUZDO1FBaEZHLElBQUksQ0FBQyxjQUFjLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBaUIsR0FBRyxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDZCxHQUFHLEVBQUUsTUFBTTtZQUNYLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7WUFDbkQsU0FBUyxFQUFFLENBQUM7WUFDWixNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ2IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV6RSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FDVCxFQUFFLEVBQ0YsRUFBRSxFQUNGLG9DQUFvQyxFQUNwQztZQUNJLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLFFBQVEsRUFBRSxxQkFBUztZQUNuQixLQUFLLEVBQUUsTUFBTTtTQUNoQixDQUNKLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FDVCxFQUFFLEVBQ0YsRUFBRSxFQUNGLGtCQUFrQixFQUNsQjtZQUNJLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLFFBQVEsRUFBRSxxQkFBUztZQUNuQixLQUFLLEVBQUUsTUFBTTtTQUNoQixDQUNKLENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUMxQixHQUFHLEVBQ0gsRUFBRSxFQUNGLHNCQUFzQixFQUN0QjtZQUNJLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLFFBQVEsRUFBRSxxQkFBUztZQUNuQixLQUFLLEVBQUUsUUFBUTtTQUNsQixDQUNKLENBQUM7UUFFRixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBVSxFQUFFLEtBQVU7WUFDN0UsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDNUIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNoQixJQUFNLFNBQU8sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztvQkFDN0MsS0FBSyxFQUFFLEVBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDO29CQUN6QixLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUM7b0JBQzNCLFNBQVMsRUFBRSxLQUFLO2lCQUNuQixDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUV0QixLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7b0JBQ3ZCLFNBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUNELElBQUksS0FBSyxFQUFFO2dCQUNQLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDO2dCQUMxRCxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbkI7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sMEJBQU0sR0FBYjtRQUNJLGdDQUFnQztRQUNoQyxLQUFnQixVQUEwQixFQUExQixTQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUExQixjQUEwQixFQUExQixJQUEwQixFQUFFO1lBQXZDLElBQU0sQ0FBQztZQUNSLElBQU0sS0FBSyxHQUFJLENBQStCLENBQUM7WUFDL0MsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFYixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2YsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ25CO1NBQ0o7SUFDTCxDQUFDO0lBRU8sd0NBQW9CLEdBQTVCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDZixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRTtnQkFDTixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMzQjtnQkFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO29CQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMzQjtnQkFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO29CQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3RCO2dCQUNELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7b0JBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMzQjtZQUNMLENBQUM7WUFDRCxhQUFhLEVBQUUsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyx3Q0FBb0IsR0FBNUI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNmLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFO2dCQUNOLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtvQkFDeEMsSUFBSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDOUMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO3dCQUNoRixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFFN0IsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7NEJBQ3BELE1BQU0sRUFBRSxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDOzRCQUMzQixLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUM7NEJBQ3pCLE1BQU0sRUFBRSxFQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQzs0QkFDM0IsU0FBUyxFQUFFLEtBQUs7eUJBQ25CLENBQUMsQ0FBQzt3QkFDSCw4QkFBOEI7d0JBQzlCLGNBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2xDLEtBQUssQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO3dCQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztxQkFDNUI7aUJBQ0o7WUFDTCxDQUFDO1lBQ0QsYUFBYSxFQUFFLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sZ0NBQVksR0FBcEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNmLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFO2dCQUNOLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDN0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFL0MsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztvQkFFbEMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTt3QkFDbEMseUNBQXlDO3dCQUV6QyxJQUFJLEtBQUssRUFBRTs0QkFDUCxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDOzRCQUM1QixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7eUJBQ25CO3FCQUNKO2lCQUNKO1lBQ0wsQ0FBQztZQUNELGFBQWEsRUFBRSxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFDO1FBRUg7Ozs7Ozs7Ozs7O2NBV007SUFDVixDQUFDO0lBRU8sb0NBQWdCLEdBQXhCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDZixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRTtnQkFDTixJQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7b0JBQ2xELElBQUksQ0FBQyxpQkFBaUIsRUFBRyxDQUFDO2lCQUM3QjtxQkFBTTtvQkFDSCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBRTNCLElBQUksSUFBSSxHQUFHLEdBQUcsRUFBRTt3QkFDWixJQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO3dCQUMzRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFDM0csSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQzNCO29CQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7aUJBQzlCO1lBQ0wsQ0FBQztZQUNELGFBQWEsRUFBRSxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJO1NBQ2IsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxDQXpQOEIsTUFBTSxDQUFDLEtBQUssR0F5UDFDO0FBelBZLDhCQUFTIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydCBjb25zdCBGT05UX1NJWkUgPSAxMjsiLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9zY2VuZXMvbWFpblNjZW5lJztcclxuXHJcbmNvbnN0IGdhbWVDZmc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XHJcbiAgICB0aXRsZTogJ1NwYWNlIHNob290ZXInLFxyXG4gICAgdHlwZTogUGhhc2VyLkFVVE8sXHJcbiAgICBzY2FsZToge1xyXG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgfSxcclxuXHJcbiAgICBwaHlzaWNzOiB7XHJcbiAgICAgICAgZGVmYXVsdDogJ2FyY2FkZScsXHJcbiAgICAgICAgYXJjYWRlOiB7XHJcbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcGFyZW50OiAnZ2FtZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyxcclxuICAgIHNjZW5lOiBHYW1lU2NlbmVcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDZmcpO1xyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgRk9OVF9TSVpFIH0gZnJvbSAnLi4vY29uZi9jb25zdGFudHMnO1xyXG5cclxuY29uc3Qgc2NlbmVDZmc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6ICdHYW1lJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgcHVibGljIHBsYXllcjogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICAgIHB1YmxpYyBLZXlVcDogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHB1YmxpYyBLZXlEb3duOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG4gICAgcHVibGljIEtleUxlZnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcbiAgICBwdWJsaWMgS2V5UmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcbiAgICBwdWJsaWMgS2V5WjogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyTGFzZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcbiAgICBwdWJsaWMgZW5lbWllczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG5cclxuICAgIHB1YmxpYyByZWRQYXJ0aWNsZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5QYXJ0aWNsZXMuUGFydGljbGVFbWl0dGVyTWFuYWdlcjtcclxuICAgIHB1YmxpYyBmaXJlUGFydGljbGVzOiBQaGFzZXIuR2FtZU9iamVjdHMuUGFydGljbGVzLlBhcnRpY2xlRW1pdHRlck1hbmFnZXI7XHJcblxyXG4gICAgcHVibGljIHBsYXllclNob290RGVsYXkgPSAzMDtcclxuICAgIHB1YmxpYyBwbGF5ZXJTaG9vdFRpY2sgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBlbmVteUNyZWF0aW9uVGljayA9IDA7XHJcbiAgICBwdWJsaWMgZW5lbXlDcmVhdGlvbkRlbGF5ID0gMTA7XHJcblxyXG4gICAgcHVibGljIHZlcnRpY2FsQ2VudGVyOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIHNjb3JlVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgICBwcml2YXRlIHNjb3JlID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNmZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZWxvYWQgKClcclxuICAgIHtcclxuICAgICAgICAvL3RoaXMubG9hZC5pbWFnZSgnc3BhY2VzaGlwJywgJ2Fzc2V0cy9zcHJpdGVzL3NwYWNlc2hpcC0xLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZW5lbXknLCAnYXNzZXRzL3Nwcml0ZXMvZW5lbXktMS5wbmcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3NoaXAnLCAnYXNzZXRzL3Nwcml0ZXMvc3BhY2VzaGlwLTEtc2hlZXQucG5nJywge2ZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjR9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdmaXJlYmFsbCcsICdhc3NldHMvc3ByaXRlcy9maXJlYmFsbC5wbmcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ZpcmUtc21hbGwnLCAnYXNzZXRzL3BhcnRpY2xlcy9maXJlLXNtYWxsLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncmVkJywgJ2Fzc2V0cy9wYXJ0aWNsZXMvcmVkLnBuZycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbENlbnRlciA9ICh0aGlzLmdhbWUuY29uZmlnLmhlaWdodCBhcyBudW1iZXIpIC8gMjtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6IFwic2hpcFwiLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3NoaXAnLCB7fSksXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICAgICAgcmVwZWF0OiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBoeXNpY3MuYWRkLnNwcml0ZSg3MCwgdGhpcy52ZXJ0aWNhbENlbnRlciwgJ3NoaXAnKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLktleVVwID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlVQKTtcclxuICAgICAgICB0aGlzLktleURvd24gPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuRE9XTik7XHJcbiAgICAgICAgdGhpcy5LZXlMZWZ0ID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkxFRlQpO1xyXG4gICAgICAgIHRoaXMuS2V5UmlnaHQgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuUklHSFQpO1xyXG4gICAgICAgIHRoaXMuS2V5WiA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5aKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMucGxheWVyTGFzZXJzID0gdGhpcy5hZGQuZ3JvdXAoKTtcclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSB0aGlzLmFkZC5ncm91cCgpO1xyXG4gICAgICAgIHRoaXMucmVkUGFydGljbGVzID0gdGhpcy5hZGQucGFydGljbGVzKCdyZWQnKTtcclxuICAgICAgICB0aGlzLmZpcmVQYXJ0aWNsZXMgPSB0aGlzLmFkZC5wYXJ0aWNsZXMoJ2ZpcmUtc21hbGwnKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGQudGV4dChcclxuICAgICAgICAgICAgMzIsXHJcbiAgICAgICAgICAgIDMyLFxyXG4gICAgICAgICAgICAnTW92ZSB3aXRoIGFycm93IGtleXMsIHNob290IHdpdGggWicsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQXJjYWRlcGl4XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogRk9OVF9TSVpFLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmFkZC50ZXh0KFxyXG4gICAgICAgICAgICAzMixcclxuICAgICAgICAgICAgNjQsXHJcbiAgICAgICAgICAgICdDb21pbmcgc29vbi4uLiA/JyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJBcmNhZGVwaXhcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBGT05UX1NJWkUsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcmVUZXh0ID0gdGhpcy5hZGQudGV4dChcclxuICAgICAgICAgICAgNDAwLFxyXG4gICAgICAgICAgICAzMixcclxuICAgICAgICAgICAgJ0VuZW1pZXMgZGVzdHJveWVkOiAwJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJBcmNhZGVwaXhcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBGT05UX1NJWkUsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKHRoaXMucGxheWVyTGFzZXJzLCB0aGlzLmVuZW1pZXMsIChsYXNlcjogYW55LCBlbmVteTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsYXNlcikge1xyXG4gICAgICAgICAgICAgICAgbGFzZXIucGFydGljbGVSZWYuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgICAgICAgbGFzZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1pdHRlciA9IHRoaXMuZmlyZVBhcnRpY2xlcy5jcmVhdGVFbWl0dGVyKHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVlZDoge21pbjogMjAsIG1heDogNjB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7c3RhcnQ6IDEuNSwgZW5kOiAwfSxcclxuICAgICAgICAgICAgICAgICAgICBibGVuZE1vZGU6ICdBREQnLFxyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnRGb2xsb3cobGFzZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudGltZS5kZWxheWVkQ2FsbCg0MDAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbWl0dGVyLmV4cGxvZGUoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZW5lbXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVUZXh0LnNldFRleHQoJ0VuZW1pZXMgZGVzdHJveWVkOiAnICsgdGhpcy5zY29yZSlcclxuICAgICAgICAgICAgICAgIGVuZW15LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllck1vdmVtZW50KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJTaG9vdGluZygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGFzZXJzKCk7XHJcbiAgICAgICAgdGhpcy5hdHRlbXB0TWFrZUVuZW15KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBXaGVyZSBhbmdlbHMgZmVhciB0byB0cmVhZC4uLlxyXG4gICAgICAgIGZvciAoY29uc3QgZSBvZiB0aGlzLmVuZW1pZXMuZ2V0Q2hpbGRyZW4oKSkge1xyXG4gICAgICAgICAgICBjb25zdCBlbmVteSA9IChlIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpO1xyXG4gICAgICAgICAgICBlbmVteS54IC09IDU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZW5lbXkueCA8IC02NCkge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHVwZGF0ZVBsYXllck1vdmVtZW50KCkge1xyXG4gICAgICAgIHRoaXMudGltZS5hZGRFdmVudCh7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMCxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuS2V5VXAuaXNEb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIueSAtPSA2O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldEZyYW1lKDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuS2V5RG93bi5pc0Rvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci55ICs9IDY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0RnJhbWUoMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5LZXlSaWdodC5pc0Rvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci54ICs9IDY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5LZXlMZWZ0LmlzRG93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnggLT0gNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5LZXlVcC5pc0Rvd24gJiYgIXRoaXMuS2V5RG93bi5pc0Rvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRGcmFtZSgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbGJhY2tTY29wZTogdGhpcyxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlUGxheWVyU2hvb3RpbmcoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDE1LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNob290VGljaysrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuS2V5Wi5pc0Rvd24gJiYgdGhpcy5wbGF5ZXIuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyU2hvb3RUaWNrID4gdGhpcy5wbGF5ZXJTaG9vdERlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc2VyID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUodGhpcy5wbGF5ZXIueCwgdGhpcy5wbGF5ZXIueSwgJ2ZpcmViYWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyTGFzZXJzLmFkZChsYXNlcik7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzZXJQYXJ0aWNsZXMgPSB0aGlzLmZpcmVQYXJ0aWNsZXMuY3JlYXRlRW1pdHRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZFk6IHttaW46IC0yMCwgbWF4OiAyMH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZToge3N0YXJ0OiAxLCBlbmQ6IDB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWRYOiB7bWluOiA1MCwgbWF4OiAxMDB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxlbmRNb2RlOiAnQUREJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnNmeC5sYXNlclBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc2VyUGFydGljbGVzLnN0YXJ0Rm9sbG93KGxhc2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzZXIucGFydGljbGVSZWYgPSBsYXNlclBhcnRpY2xlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpY2sgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cdFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWxsYmFja1Njb3BlOiB0aGlzLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgdXBkYXRlTGFzZXJzKCkge1xyXG4gICAgICAgIHRoaXMudGltZS5hZGRFdmVudCh7XHJcbiAgICAgICAgICAgIGRlbGF5OiAxNSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBsYXllckxhc2Vycy5nZXRDaGlsZHJlbigpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhc2VyID0gdGhpcy5wbGF5ZXJMYXNlcnMuZ2V0Q2hpbGRyZW4oKVtpXTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc2VyLnggKz0gbGFzZXIuZGlzcGxheVdpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXNlci54ID4gdGhpcy5nYW1lLmNvbmZpZy53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuY3JlYXRlRXhwbG9zaW9uKGxhc2VyLngsIGxhc2VyLnkpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzZXIucGFydGljbGVSZWYuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWxsYmFja1Njb3BlOiB0aGlzLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogdGhpcy50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDEyOCxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVuZW15TGFzZXJzLmdldENoaWxkcmVuKCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBsYXNlciA9IHRoaXMuZW5lbXlMYXNlcnMuZ2V0Q2hpbGRyZW4oKVtpXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsYXNlci55ICs9IGxhc2VyLmRpc3BsYXlIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXMsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWVcclxuICAgICAgICB9KTsgKi9cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGF0dGVtcHRNYWtlRW5lbXkoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmVteUNyZWF0aW9uVGljayA8IHRoaXMuZW5lbXlDcmVhdGlvbkRlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteUNyZWF0aW9uVGljayArKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZCA9IE1hdGgucmFuZG9tKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyYW5kID4gMC41KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIHRoaXMudmVydGljYWxDZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZW15ID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUodGhpcy5nYW1lLmNvbmZpZy53aWR0aCArIDE1MCwgdGhpcy52ZXJ0aWNhbENlbnRlciArIG9mZnNldCwgJ2VuZW15Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5hZGQoZW5lbXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15Q3JlYXRpb25UaWNrID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbGJhY2tTY29wZTogdGhpcyxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9