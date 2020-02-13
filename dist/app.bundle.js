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

/***/ "./src/entities/player.ts":
/*!********************************!*\
  !*** ./src/entities/player.ts ***!
  \********************************/
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
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(scene, x, y, boundaries) {
        var _this = _super.call(this, scene, x, y, 'ship') || this;
        _this.boundaries = boundaries;
        scene.anims.create({
            key: "ship",
            frames: scene.anims.generateFrameNumbers('ship', {}),
            frameRate: 0,
            repeat: -1
        });
        _this.scene.add.existing(_this);
        _this.scene.physics.world.enableBody(_this, 0);
        _this.addMovementKeys();
        _this.updatePlayerMovement();
        _this.updatePlayerShooting();
        return _this;
    }
    Player.prototype.addMovementKeys = function () {
        this.KeyUp = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.KeyDown = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.KeyLeft = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.KeyRight = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.KeyZ = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    };
    Player.prototype.updatePlayerMovement = function () {
        var _this = this;
        this.scene.time.addEvent({
            delay: 30,
            callback: function () {
                if (_this.KeyUp.isDown && _this.y > _this.boundaries.top) {
                    _this.y -= 6;
                    _this.setFrame(1);
                }
                if (_this.KeyDown.isDown && _this.y < _this.boundaries.bottom) {
                    _this.y += 6;
                    _this.setFrame(2);
                }
                if (_this.KeyRight.isDown && _this.x < _this.boundaries.right) {
                    _this.x += 6;
                }
                if (_this.KeyLeft.isDown && _this.x > _this.boundaries.left) {
                    _this.x -= 6;
                }
                if (!_this.KeyUp.isDown && !_this.KeyDown.isDown) {
                    _this.setFrame(0);
                }
            },
            loop: true
        });
    };
    Player.prototype.updatePlayerShooting = function () {
        var player = this;
        this.scene.time.addEvent({
            delay: 15,
            callback: function () {
                this.playerShootTick++;
                if (player.KeyZ.isDown && player.active) {
                    if (this.playerShootTick > this.playerShootDelay) {
                        var laser = this.physics.add.sprite(player.x, player.y, 'fireball');
                        this.playerLasers.add(laser);
                        var laserParticles = this.fireParticles.createEmitter({
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
    };
    return Player;
}(Phaser.GameObjects.Sprite));
exports.Player = Player;


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
var player_1 = __webpack_require__(/*! ../entities/player */ "./src/entities/player.ts");
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
        this.load.image('red-laser', 'assets/sprites/enemy-laser.png');
        this.load.image('fire-small', 'assets/particles/fire-small.png');
        this.load.image('red', 'assets/particles/red.png');
    };
    GameScene.prototype.create = function () {
        var _this = this;
        var height = Number(this.game.config.height);
        var width = Number(this.game.config.width);
        this.verticalCenter = height / 2;
        var boundaries = {
            top: 32, bottom: height - 32,
            left: 32, right: width - 32
        };
        this.player = new player_1.Player(this, 70, this.verticalCenter, boundaries);
        this.playerLasers = this.add.group();
        this.enemies = this.add.group();
        this.enemyLasers = this.add.group();
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
        this.updateLasers();
        this.attemptMakeEnemy();
        this.updateEnemiesShooting();
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
    GameScene.prototype.updateLasers = function () {
        var _this = this;
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
            callback: function () {
                for (var i = 0; i < _this.enemyLasers.getChildren().length; i++) {
                    var laser = _this.enemyLasers.getChildren()[i];
                    laser.x -= 15;
                    if (laser.x < 10) {
                        laser.destroy();
                    }
                }
            },
            callbackScope: this,
            loop: true
        });
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
    GameScene.prototype.updateEnemiesShooting = function () {
        var _this = this;
        this.time.addEvent({
            delay: 300,
            callback: function () {
                for (var i = 0; i < _this.enemies.getChildren().length; i++) {
                    var enemy = _this.enemies.getChildren()[i];
                    if (Phaser.Math.Between(0, 100) > 95) {
                        var laser = _this.physics.add.sprite(enemy.x, enemy.y, 'red-laser');
                        _this.enemyLasers.add(laser);
                        //this.sfx.laserEnemy.play();
                    }
                }
            },
            loop: true
        });
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmYvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdGllcy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFD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QUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUN4RCxJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBOEIsQ0FBQztvQkFFekUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO3dCQUNsQyxJQUFJLEtBQUssR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO3dCQUNuRSxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFFNUIsNkJBQTZCO3FCQUNoQztpQkFDSjtZQUNMLENBQUM7WUFDRCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQ0FyTjhCLE1BQU0sQ0FBQyxLQUFLLEdBcU4xQztBQXJOWSw4QkFBUyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnQgY29uc3QgRk9OVF9TSVpFID0gMTI7IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSB7XHJcbiAgICBwdWJsaWMgS2V5VXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcbiAgICBwdWJsaWMgS2V5RG93bjogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHB1YmxpYyBLZXlMZWZ0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG4gICAgcHVibGljIEtleVJpZ2h0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG4gICAgcHVibGljIEtleVo6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcblxyXG4gICAgcHJpdmF0ZSBib3VuZGFyaWVzOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGJvdW5kYXJpZXM6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCB4LCB5LCAnc2hpcCcpO1xyXG4gICAgICAgIHRoaXMuYm91bmRhcmllcyA9IGJvdW5kYXJpZXM7XHJcblxyXG4gICAgICAgIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogXCJzaGlwXCIsXHJcbiAgICAgICAgICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3NoaXAnLCB7fSksXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMCxcclxuICAgICAgICAgICAgcmVwZWF0OiAtMVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cdFx0dGhpcy5zY2VuZS5waHlzaWNzLndvcmxkLmVuYWJsZUJvZHkodGhpcywgMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hZGRNb3ZlbWVudEtleXMoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBsYXllck1vdmVtZW50KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJTaG9vdGluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkTW92ZW1lbnRLZXlzKCkge1xyXG4gICAgICAgIHRoaXMuS2V5VXAgPSB0aGlzLnNjZW5lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuVVApO1xyXG4gICAgICAgIHRoaXMuS2V5RG93biA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5ET1dOKTtcclxuICAgICAgICB0aGlzLktleUxlZnQgPSB0aGlzLnNjZW5lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuTEVGVCk7XHJcbiAgICAgICAgdGhpcy5LZXlSaWdodCA9IHRoaXMuc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5SSUdIVCk7XHJcbiAgICAgICAgdGhpcy5LZXlaID0gdGhpcy5zY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlopO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlUGxheWVyTW92ZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuS2V5VXAuaXNEb3duICYmIHRoaXMueSA+IHRoaXMuYm91bmRhcmllcy50b3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgLT0gNjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZyYW1lKDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuS2V5RG93bi5pc0Rvd24gJiYgdGhpcy55IDwgdGhpcy5ib3VuZGFyaWVzLmJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSArPSA2O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RnJhbWUoMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5LZXlSaWdodC5pc0Rvd24gJiYgdGhpcy54IDwgdGhpcy5ib3VuZGFyaWVzLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IDY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5LZXlMZWZ0LmlzRG93biAmJiB0aGlzLnggPiB0aGlzLmJvdW5kYXJpZXMubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCAtPSA2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLktleVVwLmlzRG93biAmJiAhdGhpcy5LZXlEb3duLmlzRG93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RnJhbWUoMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVBsYXllclNob290aW5nKCkge1xyXG4gICAgICAgIGNvbnN0IHBsYXllciA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zY2VuZS50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDE1LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNob290VGljaysrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5LZXlaLmlzRG93biAmJiBwbGF5ZXIuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyU2hvb3RUaWNrID4gdGhpcy5wbGF5ZXJTaG9vdERlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc2VyID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUocGxheWVyLngsIHBsYXllci55LCAnZmlyZWJhbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJMYXNlcnMuYWRkKGxhc2VyKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXNlclBhcnRpY2xlcyA9IHRoaXMuZmlyZVBhcnRpY2xlcy5jcmVhdGVFbWl0dGVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkWToge21pbjogLTIwLCBtYXg6IDIwfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiB7c3RhcnQ6IDEsIGVuZDogMH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZFg6IHttaW46IDUwLCBtYXg6IDEwMH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibGVuZE1vZGU6ICdBREQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlmZXNwYW46IDI1MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnNmeC5sYXNlclBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc2VyUGFydGljbGVzLnN0YXJ0Rm9sbG93KGxhc2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzZXIucGFydGljbGVSZWYgPSBsYXNlclBhcnRpY2xlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpY2sgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cdFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWxsYmFja1Njb3BlOiB0aGlzLnNjZW5lLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gJy4vc2NlbmVzL21haW5TY2VuZSc7XHJcblxyXG5jb25zdCBnYW1lQ2ZnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG4gICAgdGl0bGU6ICdTcGFjZSBzaG9vdGVyJyxcclxuICAgIHR5cGU6IFBoYXNlci5BVVRPLFxyXG4gICAgc2NhbGU6IHtcclxuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgIH0sXHJcblxyXG4gICAgcGh5c2ljczoge1xyXG4gICAgICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxyXG4gICAgICAgIGFyY2FkZToge1xyXG4gICAgICAgICAgICBkZWJ1ZzogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHBhcmVudDogJ2dhbWUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICBzY2VuZTogR2FtZVNjZW5lXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ2ZnKTtcclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IEZPTlRfU0laRSB9IGZyb20gJy4uL2NvbmYvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vZW50aXRpZXMvcGxheWVyJztcclxuXHJcbmNvbnN0IHNjZW5lQ2ZnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiAnR2FtZSdcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXI6IFBsYXllcjtcclxuICAgIHB1YmxpYyBLZXlVcDogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuICAgIHB1YmxpYyBLZXlEb3duOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xyXG4gICAgcHVibGljIEtleUxlZnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcbiAgICBwdWJsaWMgS2V5UmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XHJcbiAgICBwdWJsaWMgS2V5WjogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyTGFzZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcbiAgICBwdWJsaWMgZW5lbWllczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG4gICAgcHVibGljIGVuZW15TGFzZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcblxyXG4gICAgcHVibGljIHJlZFBhcnRpY2xlczogUGhhc2VyLkdhbWVPYmplY3RzLlBhcnRpY2xlcy5QYXJ0aWNsZUVtaXR0ZXJNYW5hZ2VyO1xyXG4gICAgcHVibGljIGZpcmVQYXJ0aWNsZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5QYXJ0aWNsZXMuUGFydGljbGVFbWl0dGVyTWFuYWdlcjtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyU2hvb3REZWxheSA9IDMwO1xyXG4gICAgcHVibGljIHBsYXllclNob290VGljayA9IDA7XHJcblxyXG4gICAgcHVibGljIGVuZW15Q3JlYXRpb25UaWNrID0gMDtcclxuICAgIHB1YmxpYyBlbmVteUNyZWF0aW9uRGVsYXkgPSAxMDtcclxuXHJcbiAgICBwdWJsaWMgdmVydGljYWxDZW50ZXI6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgc2NvcmVUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICAgIHByaXZhdGUgc2NvcmUgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ2ZnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJlbG9hZCAoKVxyXG4gICAge1xyXG4gICAgICAgIC8vdGhpcy5sb2FkLmltYWdlKCdzcGFjZXNoaXAnLCAnYXNzZXRzL3Nwcml0ZXMvc3BhY2VzaGlwLTEucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdlbmVteScsICdhc3NldHMvc3ByaXRlcy9lbmVteS0xLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnc2hpcCcsICdhc3NldHMvc3ByaXRlcy9zcGFjZXNoaXAtMS1zaGVldC5wbmcnLCB7ZnJhbWVXaWR0aDogNjQsIGZyYW1lSGVpZ2h0OiA2NH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2ZpcmViYWxsJywgJ2Fzc2V0cy9zcHJpdGVzL2ZpcmViYWxsLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncmVkLWxhc2VyJywgJ2Fzc2V0cy9zcHJpdGVzL2VuZW15LWxhc2VyLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZmlyZS1zbWFsbCcsICdhc3NldHMvcGFydGljbGVzL2ZpcmUtc21hbGwucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdyZWQnLCAnYXNzZXRzL3BhcnRpY2xlcy9yZWQucG5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBOdW1iZXIodGhpcy5nYW1lLmNvbmZpZy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gTnVtYmVyKHRoaXMuZ2FtZS5jb25maWcud2lkdGgpO1xyXG5cclxuICAgICAgICB0aGlzLnZlcnRpY2FsQ2VudGVyID0gaGVpZ2h0IC8gMjtcclxuICAgICAgICBjb25zdCBib3VuZGFyaWVzID0ge1xyXG4gICAgICAgICAgICB0b3A6IDMyLCBib3R0b206IGhlaWdodCAtIDMyLFxyXG4gICAgICAgICAgICBsZWZ0OiAzMiwgcmlnaHQ6IHdpZHRoIC0gMzJcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcywgNzAsIHRoaXMudmVydGljYWxDZW50ZXIsIGJvdW5kYXJpZXMpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJMYXNlcnMgPSB0aGlzLmFkZC5ncm91cCgpO1xyXG5cclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSB0aGlzLmFkZC5ncm91cCgpO1xyXG4gICAgICAgIHRoaXMuZW5lbXlMYXNlcnMgPSB0aGlzLmFkZC5ncm91cCgpO1xyXG5cclxuICAgICAgICB0aGlzLnJlZFBhcnRpY2xlcyA9IHRoaXMuYWRkLnBhcnRpY2xlcygncmVkJyk7XHJcbiAgICAgICAgdGhpcy5maXJlUGFydGljbGVzID0gdGhpcy5hZGQucGFydGljbGVzKCdmaXJlLXNtYWxsJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkLnRleHQoXHJcbiAgICAgICAgICAgIDMyLFxyXG4gICAgICAgICAgICAzMixcclxuICAgICAgICAgICAgJ01vdmUgd2l0aCBhcnJvdyBrZXlzLCBzaG9vdCB3aXRoIFonLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkFyY2FkZXBpeFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IEZPTlRfU0laRSxcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGQudGV4dChcclxuICAgICAgICAgICAgMzIsXHJcbiAgICAgICAgICAgIDY0LFxyXG4gICAgICAgICAgICAnQ29taW5nIHNvb24uLi4gPycsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQXJjYWRlcGl4XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogRk9OVF9TSVpFLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnNjb3JlVGV4dCA9IHRoaXMuYWRkLnRleHQoXHJcbiAgICAgICAgICAgIDQwMCxcclxuICAgICAgICAgICAgMzIsXHJcbiAgICAgICAgICAgICdFbmVtaWVzIGRlc3Ryb3llZDogMCcsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQXJjYWRlcGl4XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogRk9OVF9TSVpFLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLnBsYXllckxhc2VycywgdGhpcy5lbmVtaWVzLCAobGFzZXI6IGFueSwgZW5lbXk6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGFzZXIpIHtcclxuICAgICAgICAgICAgICAgIGxhc2VyLnBhcnRpY2xlUmVmLmV4cGxvZGUoKTtcclxuICAgICAgICAgICAgICAgIGxhc2VyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtaXR0ZXIgPSB0aGlzLmZpcmVQYXJ0aWNsZXMuY3JlYXRlRW1pdHRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IHttaW46IDIwLCBtYXg6IDYwfSxcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZToge3N0YXJ0OiAxLjUsIGVuZDogMH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRNb2RlOiAnQUREJyxcclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0Rm9sbG93KGxhc2VyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUuZGVsYXllZENhbGwoNDAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1pdHRlci5leHBsb2RlKDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlVGV4dC5zZXRUZXh0KCdFbmVtaWVzIGRlc3Ryb3llZDogJyArIHRoaXMuc2NvcmUpXHJcbiAgICAgICAgICAgICAgICBlbmVteS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVMYXNlcnMoKTtcclxuICAgICAgICB0aGlzLmF0dGVtcHRNYWtlRW5lbXkoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVuZW1pZXNTaG9vdGluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgLy8gV2hlcmUgYW5nZWxzIGZlYXIgdG8gdHJlYWQuLi5cclxuICAgICAgICBmb3IgKGNvbnN0IGUgb2YgdGhpcy5lbmVtaWVzLmdldENoaWxkcmVuKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZW5lbXkgPSAoZSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKTtcclxuICAgICAgICAgICAgZW5lbXkueCAtPSA1O1xyXG5cclxuICAgICAgICAgICAgaWYgKGVuZW15LnggPCAtNjQpIHtcclxuICAgICAgICAgICAgICAgIGVuZW15LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVMYXNlcnMoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IDE1LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGxheWVyTGFzZXJzLmdldENoaWxkcmVuKCkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzZXIgPSB0aGlzLnBsYXllckxhc2Vycy5nZXRDaGlsZHJlbigpW2ldO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzZXIueCArPSBsYXNlci5kaXNwbGF5V2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc2VyLnggPiB0aGlzLmdhbWUuY29uZmlnLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jcmVhdGVFeHBsb3Npb24obGFzZXIueCwgbGFzZXIueSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXNlci5wYXJ0aWNsZVJlZi5leHBsb2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXNlci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXMsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICAgICAgICBkZWxheTogMTUsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZW5lbXlMYXNlcnMuZ2V0Q2hpbGRyZW4oKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXNlciA9IHRoaXMuZW5lbXlMYXNlcnMuZ2V0Q2hpbGRyZW4oKVtpXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc2VyLnggLT0gMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc2VyLnggPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXNlci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWxsYmFja1Njb3BlOiB0aGlzLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhdHRlbXB0TWFrZUVuZW15KCkge1xyXG4gICAgICAgIHRoaXMudGltZS5hZGRFdmVudCh7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMCxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5lbXlDcmVhdGlvblRpY2sgPCB0aGlzLmVuZW15Q3JlYXRpb25EZWxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlDcmVhdGlvblRpY2sgKys7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLnJhbmRvbSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmFuZCA+IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiB0aGlzLnZlcnRpY2FsQ2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmVteSA9IHRoaXMucGh5c2ljcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS5jb25maWcud2lkdGggKyAxNTAsIHRoaXMudmVydGljYWxDZW50ZXIgKyBvZmZzZXQsICdlbmVteScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMuYWRkKGVuZW15KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteUNyZWF0aW9uVGljayA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IHRoaXMsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUVuZW1pZXNTaG9vdGluZygpIHtcclxuICAgICAgICB0aGlzLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmVuZW1pZXMuZ2V0Q2hpbGRyZW4oKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZW15ID0gdGhpcy5lbmVtaWVzLmdldENoaWxkcmVuKClbaV0gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFBoYXNlci5NYXRoLkJldHdlZW4oMCwgMTAwKSA+IDk1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYXNlciA9IHRoaXMucGh5c2ljcy5hZGQuc3ByaXRlKGVuZW15LngsIGVuZW15LnksICdyZWQtbGFzZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVteUxhc2Vycy5hZGQobGFzZXIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnNmeC5sYXNlckVuZW15LnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==