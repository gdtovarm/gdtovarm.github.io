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
            }
            if (enemy) {
                this.score++;
                this.scoreText.setText('Enemies destroyed: ' + this.score);
                enemy.destroy();
            }
        }, null, this);
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
            delay: 30,
            callback: function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmYvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpblNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlD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QUNOLElBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtvQkFDbEQsSUFBSSxDQUFDLGlCQUFpQixFQUFHLENBQUM7aUJBQzdCO3FCQUFNO29CQUNILElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFFM0IsSUFBSSxJQUFJLEdBQUcsR0FBRyxFQUFFO3dCQUNaLElBQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7d0JBQzNELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO3dCQUMzRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDM0I7b0JBQ0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztpQkFDOUI7WUFDTCxDQUFDO1lBQ0QsYUFBYSxFQUFFLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLENBaFA4QixNQUFNLENBQUMsS0FBSyxHQWdQMUM7QUFoUFksOEJBQVMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0IGNvbnN0IEZPTlRfU0laRSA9IDEyOyIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL3NjZW5lcy9tYWluU2NlbmUnO1xyXG5cclxuY29uc3QgZ2FtZUNmZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcclxuICAgIHRpdGxlOiAnU3BhY2Ugc2hvb3RlcicsXHJcbiAgICB0eXBlOiBQaGFzZXIuQVVUTyxcclxuICAgIHNjYWxlOiB7XHJcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICB9LFxyXG5cclxuICAgIHBoeXNpY3M6IHtcclxuICAgICAgICBkZWZhdWx0OiAnYXJjYWRlJyxcclxuICAgICAgICBhcmNhZGU6IHtcclxuICAgICAgICAgICAgZGVidWc6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBwYXJlbnQ6ICdnYW1lJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgc2NlbmU6IEdhbWVTY2VuZVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNmZyk7XHJcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBGT05UX1NJWkUgfSBmcm9tICcuLi9jb25mL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBzY2VuZUNmZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIGtleTogJ0dhbWUnXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gICAgcHVibGljIEtleVVwOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG4gICAgcHVibGljIEtleURvd246IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcbiAgICBwdWJsaWMgS2V5TGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHB1YmxpYyBLZXlSaWdodDogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHB1YmxpYyBLZXlaOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXJMYXNlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuICAgIHB1YmxpYyBlbmVtaWVzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcblxyXG4gICAgcHVibGljIHJlZFBhcnRpY2xlczogUGhhc2VyLkdhbWVPYmplY3RzLlBhcnRpY2xlcy5QYXJ0aWNsZUVtaXR0ZXJNYW5hZ2VyO1xyXG4gICAgcHVibGljIGZpcmVQYXJ0aWNsZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5QYXJ0aWNsZXMuUGFydGljbGVFbWl0dGVyTWFuYWdlcjtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyU2hvb3REZWxheSA9IDMwO1xyXG4gICAgcHVibGljIHBsYXllclNob290VGljayA9IDA7XHJcblxyXG4gICAgcHVibGljIGVuZW15Q3JlYXRpb25UaWNrID0gMDtcclxuICAgIHB1YmxpYyBlbmVteUNyZWF0aW9uRGVsYXkgPSAxMDtcclxuXHJcbiAgICBwdWJsaWMgdmVydGljYWxDZW50ZXI6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgc2NvcmVUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICAgIHByaXZhdGUgc2NvcmUgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ2ZnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJlbG9hZCAoKVxyXG4gICAge1xyXG4gICAgICAgIC8vdGhpcy5sb2FkLmltYWdlKCdzcGFjZXNoaXAnLCAnYXNzZXRzL3Nwcml0ZXMvc3BhY2VzaGlwLTEucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdlbmVteScsICdhc3NldHMvc3ByaXRlcy9lbmVteS0xLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnc2hpcCcsICdhc3NldHMvc3ByaXRlcy9zcGFjZXNoaXAtMS1zaGVldC5wbmcnLCB7ZnJhbWVXaWR0aDogNjQsIGZyYW1lSGVpZ2h0OiA2NH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ZpcmViYWxsJywgJ2Fzc2V0cy9zcHJpdGVzL2ZpcmViYWxsLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZmlyZS1zbWFsbCcsICdhc3NldHMvcGFydGljbGVzL2ZpcmUtc21hbGwucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdyZWQnLCAnYXNzZXRzL3BhcnRpY2xlcy9yZWQucG5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsQ2VudGVyID0gKHRoaXMuZ2FtZS5jb25maWcuaGVpZ2h0IGFzIG51bWJlcikgLyAyO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogXCJzaGlwXCIsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnc2hpcCcsIHt9KSxcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiAwLFxyXG4gICAgICAgICAgICByZXBlYXQ6IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMucGh5c2ljcy5hZGQuc3ByaXRlKDcwLCB0aGlzLnZlcnRpY2FsQ2VudGVyLCAnc2hpcCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuS2V5VXAgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuVVApO1xyXG4gICAgICAgIHRoaXMuS2V5RG93biA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5ET1dOKTtcclxuICAgICAgICB0aGlzLktleUxlZnQgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuTEVGVCk7XHJcbiAgICAgICAgdGhpcy5LZXlSaWdodCA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5SSUdIVCk7XHJcbiAgICAgICAgdGhpcy5LZXlaID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlopO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJMYXNlcnMgPSB0aGlzLmFkZC5ncm91cCgpO1xyXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IHRoaXMuYWRkLmdyb3VwKCk7XHJcbiAgICAgICAgdGhpcy5yZWRQYXJ0aWNsZXMgPSB0aGlzLmFkZC5wYXJ0aWNsZXMoJ3JlZCcpO1xyXG4gICAgICAgIHRoaXMuZmlyZVBhcnRpY2xlcyA9IHRoaXMuYWRkLnBhcnRpY2xlcygnZmlyZS1zbWFsbCcpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZC50ZXh0KFxyXG4gICAgICAgICAgICAzMixcclxuICAgICAgICAgICAgMzIsXHJcbiAgICAgICAgICAgICdNb3ZlIHdpdGggYXJyb3cga2V5cywgc2hvb3Qgd2l0aCBaJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJBcmNhZGVwaXhcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBGT05UX1NJWkUsXHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkLnRleHQoXHJcbiAgICAgICAgICAgIDMyLFxyXG4gICAgICAgICAgICA2NCxcclxuICAgICAgICAgICAgJ0NvbWluZyBzb29uLi4uID8nLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkFyY2FkZXBpeFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IEZPTlRfU0laRSxcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY29yZVRleHQgPSB0aGlzLmFkZC50ZXh0KFxyXG4gICAgICAgICAgICA0MDAsXHJcbiAgICAgICAgICAgIDMyLFxyXG4gICAgICAgICAgICAnRW5lbWllcyBkZXN0cm95ZWQ6IDAnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkFyY2FkZXBpeFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IEZPTlRfU0laRSxcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKHRoaXMucGxheWVyTGFzZXJzLCB0aGlzLmVuZW1pZXMsIGZ1bmN0aW9uKGxhc2VyOiBhbnksIGVuZW15OiBhbnkpIHtcclxuICAgICAgICAgICAgaWYgKGxhc2VyKSB7XHJcbiAgICAgICAgICAgICAgICBsYXNlci5wYXJ0aWNsZVJlZi5leHBsb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBsYXNlci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlVGV4dC5zZXRUZXh0KCdFbmVtaWVzIGRlc3Ryb3llZDogJyArIHRoaXMuc2NvcmUpXHJcbiAgICAgICAgICAgICAgICBlbmVteS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBudWxsLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJNb3ZlbWVudCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGxheWVyU2hvb3RpbmcoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxhc2VycygpO1xyXG4gICAgICAgIHRoaXMuYXR0ZW1wdE1ha2VFbmVteSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgLy8gV2hlcmUgYW5nZWxzIGZlYXIgdG8gdHJlYWQuLi5cclxuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgdGhpcy5lbmVtaWVzLmdldENoaWxkcmVuKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZW5lbXkgPSAoZSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKTtcclxuICAgICAgICAgICAgZW5lbXkueCAtPSA1O1xyXG5cclxuICAgICAgICAgICAgaWYgKGVuZW15LnggPCAtNjQpIHtcclxuICAgICAgICAgICAgICAgIGVuZW15LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVQbGF5ZXJNb3ZlbWVudCgpIHtcclxuICAgICAgICB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICAgICAgICBkZWxheTogMzAsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLktleVVwLmlzRG93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnkgLT0gNjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRGcmFtZSgxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLktleURvd24uaXNEb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIueSArPSA2O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldEZyYW1lKDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuS2V5UmlnaHQuaXNEb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIueCArPSA2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuS2V5TGVmdC5pc0Rvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci54IC09IDY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuS2V5VXAuaXNEb3duICYmICF0aGlzLktleURvd24uaXNEb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0RnJhbWUoMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXMsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVBsYXllclNob290aW5nKCkge1xyXG4gICAgICAgIHRoaXMudGltZS5hZGRFdmVudCh7XHJcbiAgICAgICAgICAgIGRlbGF5OiAxNSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpY2srKztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLktleVouaXNEb3duICYmIHRoaXMucGxheWVyLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllclNob290VGljayA+IHRoaXMucGxheWVyU2hvb3REZWxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXNlciA9IHRoaXMucGh5c2ljcy5hZGQuc3ByaXRlKHRoaXMucGxheWVyLngsIHRoaXMucGxheWVyLnksICdmaXJlYmFsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckxhc2Vycy5hZGQobGFzZXIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc2VyUGFydGljbGVzID0gdGhpcy5maXJlUGFydGljbGVzLmNyZWF0ZUVtaXR0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWRZOiB7bWluOiAtMjAsIG1heDogMjB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHtzdGFydDogMSwgZW5kOiAwfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkWDoge21pbjogNTAsIG1heDogMTAwfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsZW5kTW9kZTogJ0FERCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5zZngubGFzZXJQbGF5ZXIucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXNlclBhcnRpY2xlcy5zdGFydEZvbGxvdyhsYXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc2VyLnBhcnRpY2xlUmVmID0gbGFzZXJQYXJ0aWNsZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2hvb3RUaWNrID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbGJhY2tTY29wZTogdGhpcyxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHVwZGF0ZUxhc2VycygpIHtcclxuICAgICAgICB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICAgICAgICBkZWxheTogMzAsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJMYXNlcnMuZ2V0Q2hpbGRyZW4oKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXNlciA9IHRoaXMucGxheWVyTGFzZXJzLmdldENoaWxkcmVuKClbaV07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsYXNlci54ICs9IGxhc2VyLmRpc3BsYXlXaWR0aDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXNlci54ID4gdGhpcy5nYW1lLmNvbmZpZy53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuY3JlYXRlRXhwbG9zaW9uKGxhc2VyLngsIGxhc2VyLnkpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzZXIucGFydGljbGVSZWYuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWxsYmFja1Njb3BlOiB0aGlzLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogdGhpcy50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDEyOCxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVuZW15TGFzZXJzLmdldENoaWxkcmVuKCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBsYXNlciA9IHRoaXMuZW5lbXlMYXNlcnMuZ2V0Q2hpbGRyZW4oKVtpXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsYXNlci55ICs9IGxhc2VyLmRpc3BsYXlIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXMsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWVcclxuICAgICAgICB9KTsgKi9cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGF0dGVtcHRNYWtlRW5lbXkoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmVteUNyZWF0aW9uVGljayA8IHRoaXMuZW5lbXlDcmVhdGlvbkRlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteUNyZWF0aW9uVGljayArKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZCA9IE1hdGgucmFuZG9tKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyYW5kID4gMC41KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIHRoaXMudmVydGljYWxDZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZW15ID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUodGhpcy5nYW1lLmNvbmZpZy53aWR0aCArIDE1MCwgdGhpcy52ZXJ0aWNhbENlbnRlciArIG9mZnNldCwgJ2VuZW15Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5hZGQoZW5lbXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15Q3JlYXRpb25UaWNrID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbGJhY2tTY29wZTogdGhpcyxcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9