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
exports.MATRIX_CONFIGURATIONS = exports.MAX_GRID_WIDTH = exports.MAX_GRID_HEIGHT = exports.FRAGMENT_SIZE = exports.VERSION = void 0;
exports.VERSION = '0.0.1-beta-01';
exports.FRAGMENT_SIZE = 32;
exports.MAX_GRID_HEIGHT = 40;
exports.MAX_GRID_WIDTH = 40;
exports.MATRIX_CONFIGURATIONS = [
    [[1, 1, 1, 1]],
    [[1, 1],
        [1, 1]],
    [[1, 1, 0],
        [0, 1, 1]],
    [[0, 1, 1],
        [1, 1, 0]],
    [[1, 0, 0],
        [1, 1, 1]],
    [[0, 0, 1],
        [1, 1, 1]],
    [[0, 1, 0],
        [1, 1, 1]],
];


/***/ }),

/***/ "./src/entities/board.ts":
/*!*******************************!*\
  !*** ./src/entities/board.ts ***!
  \*******************************/
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
exports.Grid = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var piece_1 = __webpack_require__(/*! ./piece */ "./src/entities/piece.ts");
var constants_1 = __webpack_require__(/*! ../conf/constants */ "./src/conf/constants.ts");
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid(scene, x, y, width, height, startPiece) {
        var _this = _super.call(this, scene, x, y, width * constants_1.FRAGMENT_SIZE, height * constants_1.FRAGMENT_SIZE) || this;
        _this.currentPosition = {
            x: 0, y: 0
        };
        _this.gridSize = {
            x: 0, y: 0
        };
        _this.setOrigin(0, 0);
        _this.setStrokeStyle(1, 0xFFFFFF, 1);
        _this.gridSize.x = width;
        _this.gridSize.y = height;
        scene.add.existing(_this);
        _this.addPiece(startPiece);
        return _this;
    }
    Grid.prototype.addPiece = function (startPiece) {
        this.currentPiece = piece_1.Piece.makePiece(this.scene, startPiece);
        this.resetPosition();
        this.drawPiece();
    };
    Grid.prototype.drawPiece = function () {
        var relativePosition = {
            x: (this.currentPosition.x * constants_1.FRAGMENT_SIZE) + this.x,
            y: (this.currentPosition.y * constants_1.FRAGMENT_SIZE) + this.y,
        };
        this.currentPiece.drawPiece(relativePosition);
    };
    Grid.prototype.resetPosition = function () {
        this.currentPosition.y = 0;
        this.currentPosition.x = Math.round(this.gridSize.x / 2);
    };
    Grid.prototype.rotatePiece = function () {
        this.currentPiece.rotate();
        var diff = (this.currentPosition.x + this.currentPiece.currentMatrix[0].length) - this.gridSize.x;
        if (diff > 0) {
            this.currentPosition.x -= diff;
        }
        this.drawPiece();
    };
    Grid.prototype.move = function (left) {
        if (left && this.currentPosition.x > 0) {
            this.currentPosition.x -= 1;
        }
        else if (!left && this.currentPosition.x + this.currentPiece.currentMatrix[0].length < this.gridSize.x) {
            this.currentPosition.x += 1;
        }
        this.drawPiece();
    };
    return Grid;
}(Phaser.GameObjects.Rectangle));
exports.Grid = Grid;


/***/ }),

/***/ "./src/entities/piece.ts":
/*!*******************************!*\
  !*** ./src/entities/piece.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var constants_1 = __webpack_require__(/*! ../conf/constants */ "./src/conf/constants.ts");
var Piece = /** @class */ (function () {
    function Piece(matrixConfiguration, scene) {
        this.matrixConfiguration = matrixConfiguration;
        this.scene = scene;
        this.currentRotation = 0;
        this.rotatedMatrices = new Array(4);
        this.fragments = [];
        this.matrix = matrixConfiguration;
        this.rotatedMatrices[0] = this.matrix;
        this.calculateRotations();
        for (var _i = 0, _a = this.matrix; _i < _a.length; _i++) {
            var arr = _a[_i];
            for (var _b = 0, arr_1 = arr; _b < arr_1.length; _b++) {
                var num = arr_1[_b];
                if (num === 1) {
                    var rect = scene.add.rectangle(200, 200, constants_1.FRAGMENT_SIZE, constants_1.FRAGMENT_SIZE, 0xFFFFFF, 1);
                    rect.setStrokeStyle(1, 0x000000);
                    rect.setOrigin(0, 0);
                    this.fragments.push(rect);
                }
            }
        }
    }
    Piece.prototype.calculateRotations = function () {
        for (var n = 1; n < 4; n++) {
            var currentMatrix = this.rotatedMatrices[n - 1];
            var newMatrix = [];
            var cols = currentMatrix[0].length;
            var rows = currentMatrix.length;
            for (var i = cols - 1; i >= 0; i--) {
                var newArray = [];
                newMatrix.push(newArray);
                for (var j = 0; j < rows; j++) {
                    newArray.push(currentMatrix[j][i]);
                }
            }
            this.rotatedMatrices[n] = newMatrix;
        }
    };
    Object.defineProperty(Piece.prototype, "currentMatrix", {
        get: function () {
            return this.rotatedMatrices[this.currentRotation];
        },
        enumerable: false,
        configurable: true
    });
    Piece.makePiece = function (scene, index) {
        if (index == null) {
            index = Math.floor(Math.random() * constants_1.MATRIX_CONFIGURATIONS.length);
        }
        return new Piece(constants_1.MATRIX_CONFIGURATIONS[index], scene);
    };
    Piece.prototype.drawPiece = function (center) {
        var mat = this.currentMatrix;
        var countPiece = 0;
        var pieceCenter = {
            x: Math.floor(mat[0].length / 2),
            y: Math.floor(mat.length / 2),
        };
        for (var i = 0; i < mat.length; i++) {
            for (var j = 0; j < mat[i].length; j++) {
                if (mat[i][j] === 1) {
                    var rect = this.fragments[countPiece];
                    rect.x = (j * constants_1.FRAGMENT_SIZE) + (center.x - pieceCenter.x);
                    rect.y = (i * constants_1.FRAGMENT_SIZE) + (center.y - pieceCenter.y);
                    countPiece++;
                }
            }
        }
    };
    Piece.prototype.rotate = function () {
        //this.currentRotation = (this.currentRotation - 1) % 4;
        var rotation = this.currentRotation - 1;
        this.currentRotation = (rotation < 0) ? 3 : rotation;
    };
    return Piece;
}());
exports.Piece = Piece;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.game = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var main_menu_1 = __webpack_require__(/*! ./scenes/main-menu */ "./src/scenes/main-menu.ts");
var main_scene_1 = __webpack_require__(/*! ./scenes/main-scene */ "./src/scenes/main-scene.ts");
var gameConfig = {
    title: 'Tetris?',
    type: Phaser.AUTO,
    scale: {
        width: 1600,
        height: 900,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    parent: 'game',
    backgroundColor: '#000000',
    scene: [main_menu_1.MainMenuScene, main_scene_1.MainScene]
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ "./src/scenes/main-menu.ts":
/*!*********************************!*\
  !*** ./src/scenes/main-menu.ts ***!
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
exports.MainMenuScene = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var constants_1 = __webpack_require__(/*! ../conf/constants */ "./src/conf/constants.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'MainMenu',
};
var MainMenuScene = /** @class */ (function (_super) {
    __extends(MainMenuScene, _super);
    function MainMenuScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.grid = {
            x: 10, y: 20
        };
        _this.pieceIndex = null;
        return _this;
    }
    MainMenuScene.prototype.create = function () {
        var _this = this;
        this.add.text(100, 75, "Tetris? ver " + constants_1.VERSION, {
            fontSize: '36px'
        });
        var start = this.add.text(100, 120, 'Start');
        var customize = this.add.text(100, 140, 'Customize');
        this.testElement = this.add.rectangle(100, 400, 16, 16, 0xFF00FF);
        start.setInteractive();
        customize.setInteractive();
        start.addListener('pointerdown', function () {
            var data = { grid: _this.grid };
            if (_this.pieceIndex != null) {
                data.pieceIndex = _this.pieceIndex;
            }
            _this.scene.start('MainScene', data);
        });
        customize.addListener('pointerdown', function () {
            _this.add.text(250, 250, "Press an index");
        });
        var _loop_1 = function (i) {
            var selector = this_1.add.text(100 + (i * 20), 160, "" + i, {
                fontSize: '24 px'
            });
            selector.setInteractive();
            selector.addListener('pointerdown', function () {
                _this.pieceIndex = i;
                _this.selectedIndexText.setText("Pieza seleccionada: " + _this.pieceIndex);
            });
        };
        var this_1 = this;
        for (var i = 0; i < constants_1.MATRIX_CONFIGURATIONS.length; i++) {
            _loop_1(i);
        }
        this.selectedIndexText = this.add.text(100, 180, '', {
            fontSize: '24 px'
        });
    };
    MainMenuScene.prototype.update = function () {
        if (this.testElement.x < 600) {
            this.testElement.x += 2;
        }
        else {
            this.testElement.x = 100;
        }
    };
    return MainMenuScene;
}(Phaser.Scene));
exports.MainMenuScene = MainMenuScene;


/***/ }),

/***/ "./src/scenes/main-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/main-scene.ts ***!
  \**********************************/
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
exports.MainScene = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var board_1 = __webpack_require__(/*! ../entities/board */ "./src/entities/board.ts");
var constants_1 = __webpack_require__(/*! ../conf/constants */ "./src/conf/constants.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'MainScene',
};
var MainScene = /** @class */ (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.lock = false;
        _this.moveLock = false;
        return _this;
    }
    MainScene.prototype.create = function (data) {
        var _this = this;
        var back = this.add.text(300, 75, '< Back');
        back.setInteractive();
        back.addListener('pointerdown', function () {
            _this.scene.start('MainMenu');
        });
        this.add.text(100, 75, 'Tetris?');
        this.add.text(100, 100, JSON.stringify(data));
        var width = data.grid.x * constants_1.FRAGMENT_SIZE;
        var height = data.grid.y * constants_1.FRAGMENT_SIZE;
        this.add.text(100, 115, width + ", " + height);
        this.grid = new board_1.Grid(this, 100, 140, data.grid.x, data.grid.y, data.pieceIndex);
        this.cursorKeys = this.input.keyboard.createCursorKeys();
    };
    MainScene.prototype.update = function () {
        this.checkPieceMovement();
    };
    MainScene.prototype.checkPieceMovement = function () {
        if (this.cursorKeys.up.isDown && !this.lock) {
            this.grid.rotatePiece();
            this.lock = true;
        }
        else if (this.cursorKeys.up.isUp && this.lock) {
            this.lock = false;
        }
        if (!this.moveLock) {
            if (this.cursorKeys.left.isDown) {
                this.grid.move(true);
                this.moveLock = true;
            }
            if (this.cursorKeys.right.isDown) {
                this.grid.move(false);
                this.moveLock = true;
            }
        }
        else if (this.cursorKeys.left.isUp && this.cursorKeys.right.isUp) {
            this.moveLock = false;
        }
    };
    return MainScene;
}(Phaser.Scene));
exports.MainScene = MainScene;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmYvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdGllcy9ib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXRpZXMvcGllY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLW1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLXNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDeEI7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3hCO1NBQ0o7YUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLENBeEQ4QixNQUFNLENBQUMsS0FBSyxHQXdEMUM7QUF4RFksOEJBQVMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgTWF0cml4Q29uZmlndXJhdGlvbiB9IGZyb20gXCIuL2ludGVmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnMC4wLjEtYmV0YS0wMSdcclxuZXhwb3J0IGNvbnN0IEZSQUdNRU5UX1NJWkUgPSAzMjtcclxuZXhwb3J0IGNvbnN0IE1BWF9HUklEX0hFSUdIVCA9IDQwO1xyXG5leHBvcnQgY29uc3QgTUFYX0dSSURfV0lEVEggPSA0MDtcclxuXHJcbmV4cG9ydCBjb25zdCBNQVRSSVhfQ09ORklHVVJBVElPTlM6IEFycmF5PE1hdHJpeENvbmZpZ3VyYXRpb24+ID0gW1xyXG4gICAgW1sxLCAxLCAxLCAxXV0sXHJcblxyXG4gICAgW1sxLCAxXSxcclxuICAgICBbMSwgMV1dLFxyXG5cclxuICAgIFtbMSwgMSwgMF0sXHJcbiAgICAgWzAsIDEsIDFdXSxcclxuICAgIFtbMCwgMSwgMV0sXHJcbiAgICAgWzEsIDEsIDBdXSxcclxuXHJcbiAgICBbWzEsIDAsIDBdLFxyXG4gICAgIFsxLCAxLCAxXV0sXHJcbiAgICBbWzAsIDAsIDFdLFxyXG4gICAgIFsxLCAxLCAxXV0sXHJcbiAgICBcclxuICAgIFtbMCwgMSwgMF0sXHJcbiAgICAgWzEsIDEsIDFdXSxcclxuXTtcclxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IFBpZWNlIH0gZnJvbSAnLi9waWVjZSc7XHJcbmltcG9ydCB7IEZSQUdNRU5UX1NJWkUgfSBmcm9tICcuLi9jb25mL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IENlbnRlciB9IGZyb20gJy4uL2NvbmYvaW50ZWZhY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmlkIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSB7XHJcbiAgICBwdWJsaWMgY3VycmVudFBpZWNlOiBQaWVjZTtcclxuICAgIHB1YmxpYyBjdXJyZW50UG9zaXRpb246IENlbnRlciA9IHtcclxuICAgICAgICB4OiAwLCB5OiAwXHJcbiAgICB9O1xyXG4gICAgcHVibGljIGdyaWRTaXplOiBDZW50ZXIgPSB7XHJcbiAgICAgICAgeDogMCwgeTogMFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHN0YXJ0UGllY2U/OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgeCwgeSwgd2lkdGggKiBGUkFHTUVOVF9TSVpFLCBoZWlnaHQgKiBGUkFHTUVOVF9TSVpFKTtcclxuICAgICAgICB0aGlzLnNldE9yaWdpbigwLCAwKTtcclxuICAgICAgICB0aGlzLnNldFN0cm9rZVN0eWxlKDEsIDB4RkZGRkZGLCAxKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmdyaWRTaXplLnggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmdyaWRTaXplLnkgPSBoZWlnaHQ7XHJcbiAgICAgICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFBpZWNlKHN0YXJ0UGllY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRQaWVjZShzdGFydFBpZWNlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZSA9IFBpZWNlLm1ha2VQaWVjZSh0aGlzLnNjZW5lLCBzdGFydFBpZWNlKTtcclxuICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLmRyYXdQaWVjZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3UGllY2UoKSB7XHJcbiAgICAgICAgY29uc3QgcmVsYXRpdmVQb3NpdGlvbjogQ2VudGVyID0ge1xyXG4gICAgICAgICAgICB4OiAodGhpcy5jdXJyZW50UG9zaXRpb24ueCAqIEZSQUdNRU5UX1NJWkUpICsgdGhpcy54LFxyXG4gICAgICAgICAgICB5OiAodGhpcy5jdXJyZW50UG9zaXRpb24ueSAqIEZSQUdNRU5UX1NJWkUpICsgdGhpcy55LFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5kcmF3UGllY2UocmVsYXRpdmVQb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldFBvc2l0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uLnkgPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uLnggPSBNYXRoLnJvdW5kKHRoaXMuZ3JpZFNpemUueCAvIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByb3RhdGVQaWVjZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5yb3RhdGUoKTtcclxuICAgICAgICBjb25zdCBkaWZmID0gKHRoaXMuY3VycmVudFBvc2l0aW9uLnggKyB0aGlzLmN1cnJlbnRQaWVjZS5jdXJyZW50TWF0cml4WzBdLmxlbmd0aCkgLSB0aGlzLmdyaWRTaXplLng7XHJcbiAgICAgICAgaWYgKGRpZmYgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uLnggLT0gZGlmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmF3UGllY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZShsZWZ0OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKGxlZnQgJiYgdGhpcy5jdXJyZW50UG9zaXRpb24ueCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24ueCAtPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIWxlZnQgJiYgdGhpcy5jdXJyZW50UG9zaXRpb24ueCArIHRoaXMuY3VycmVudFBpZWNlLmN1cnJlbnRNYXRyaXhbMF0ubGVuZ3RoIDwgdGhpcy5ncmlkU2l6ZS54KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uLnggKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmF3UGllY2UoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgRlJBR01FTlRfU0laRSwgTUFUUklYX0NPTkZJR1VSQVRJT05TIH0gZnJvbSAnLi4vY29uZi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBNYXRyaXhDb25maWd1cmF0aW9uLCBDZW50ZXIgfSBmcm9tICcuLi9jb25mL2ludGVmYWNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGllY2UgIHtcclxuICAgIHByaXZhdGUgY3VycmVudFJvdGF0aW9uID0gMDtcclxuICAgIHByaXZhdGUgbWF0cml4OiBNYXRyaXhDb25maWd1cmF0aW9uO1xyXG5cclxuICAgIHByaXZhdGUgcm90YXRlZE1hdHJpY2VzOiBBcnJheTxNYXRyaXhDb25maWd1cmF0aW9uPiA9IG5ldyBBcnJheTxNYXRyaXhDb25maWd1cmF0aW9uPig0KTtcclxuICAgIHByaXZhdGUgZnJhZ21lbnRzOiBBcnJheTxQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlPiA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbWF0cml4Q29uZmlndXJhdGlvbjogTWF0cml4Q29uZmlndXJhdGlvbiwgcHJpdmF0ZSBzY2VuZTogUGhhc2VyLlNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5tYXRyaXggPSBtYXRyaXhDb25maWd1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMucm90YXRlZE1hdHJpY2VzWzBdID0gdGhpcy5tYXRyaXg7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVSb3RhdGlvbnMoKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBhcnIgb2YgdGhpcy5tYXRyaXgpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBudW0gb2YgYXJyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMjAwLCAyMDAsIEZSQUdNRU5UX1NJWkUsIEZSQUdNRU5UX1NJWkUsIDB4RkZGRkZGLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICByZWN0LnNldFN0cm9rZVN0eWxlKDEsIDB4MDAwMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlY3Quc2V0T3JpZ2luKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJhZ21lbnRzLnB1c2gocmVjdClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVSb3RhdGlvbnMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbiA9IDE7IG4gPCA0OyBuKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudE1hdHJpeCA9IHRoaXMucm90YXRlZE1hdHJpY2VzW24gLSAxXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01hdHJpeDogTWF0cml4Q29uZmlndXJhdGlvbiA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29scyA9IGN1cnJlbnRNYXRyaXhbMF0ubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCByb3dzID0gY3VycmVudE1hdHJpeC5sZW5ndGg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29scyAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbmV3TWF0cml4LnB1c2gobmV3QXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGN1cnJlbnRNYXRyaXhbal1baV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJvdGF0ZWRNYXRyaWNlc1tuXSA9IG5ld01hdHJpeDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGN1cnJlbnRNYXRyaXgoKTogTWF0cml4Q29uZmlndXJhdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlZE1hdHJpY2VzW3RoaXMuY3VycmVudFJvdGF0aW9uXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWFrZVBpZWNlKHNjZW5lOiBQaGFzZXIuU2NlbmUsIGluZGV4OiBudW1iZXIpOiBQaWVjZSB7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IG51bGwpIHtcclxuICAgICAgICAgICAgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNQVRSSVhfQ09ORklHVVJBVElPTlMubGVuZ3RoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFBpZWNlKE1BVFJJWF9DT05GSUdVUkFUSU9OU1tpbmRleF0sIHNjZW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhd1BpZWNlKGNlbnRlcjogQ2VudGVyKSB7XHJcbiAgICAgICAgY29uc3QgbWF0ID0gdGhpcy5jdXJyZW50TWF0cml4O1xyXG4gICAgICAgIGxldCBjb3VudFBpZWNlID0gMDtcclxuICAgICAgICBjb25zdCBwaWVjZUNlbnRlcjogQ2VudGVyID0ge1xyXG4gICAgICAgICAgICB4OiBNYXRoLmZsb29yKG1hdFswXS5sZW5ndGggLyAyKSxcclxuICAgICAgICAgICAgeTogTWF0aC5mbG9vcihtYXQubGVuZ3RoIC8gMiksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKG1hdFtpXVtqXSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmZyYWdtZW50c1tjb3VudFBpZWNlXTtcclxuICAgICAgICAgICAgICAgICAgICByZWN0LnggPSAoaiAqIEZSQUdNRU5UX1NJWkUpICsgKGNlbnRlci54IC0gcGllY2VDZW50ZXIueCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjdC55ID0gKGkgKiBGUkFHTUVOVF9TSVpFKSArIChjZW50ZXIueSAtIHBpZWNlQ2VudGVyLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50UGllY2UgKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJvdGF0ZSgpIHtcclxuICAgICAgICAvL3RoaXMuY3VycmVudFJvdGF0aW9uID0gKHRoaXMuY3VycmVudFJvdGF0aW9uIC0gMSkgJSA0O1xyXG5cclxuICAgICAgICBjb25zdCByb3RhdGlvbiA9IHRoaXMuY3VycmVudFJvdGF0aW9uIC0gMTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRSb3RhdGlvbiA9IChyb3RhdGlvbiA8IDApID8gMyA6IHJvdGF0aW9uO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBNYWluTWVudVNjZW5lIH0gZnJvbSAnLi9zY2VuZXMvbWFpbi1tZW51JztcclxuaW1wb3J0IHsgTWFpblNjZW5lIH0gZnJvbSAnLi9zY2VuZXMvbWFpbi1zY2VuZSc7XHJcblxyXG5cclxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcclxuICAgIHRpdGxlOiAnVGV0cmlzPycsXHJcbiAgICB0eXBlOiBQaGFzZXIuQVVUTyxcclxuICAgIHNjYWxlOiB7XHJcbiAgICAgICAgd2lkdGg6IDE2MDAsXHJcbiAgICAgICAgaGVpZ2h0OiA5MDAsXHJcbiAgICB9LFxyXG4gICAgcGh5c2ljczoge1xyXG4gICAgICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxyXG4gICAgICAgIGFyY2FkZToge1xyXG4gICAgICAgICAgICBkZWJ1ZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBhcmVudDogJ2dhbWUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXHJcbiAgICBzY2VuZTogW01haW5NZW51U2NlbmUsIE1haW5TY2VuZV1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpO1xyXG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgVkVSU0lPTiwgTUFUUklYX0NPTkZJR1VSQVRJT05TIH0gZnJvbSAnLi4vY29uZi9jb25zdGFudHMnO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6ICdNYWluTWVudScsXHJcbn07XHJcbiAgXHJcbmV4cG9ydCBjbGFzcyBNYWluTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgc3F1YXJlOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlICYgeyBib2R5OiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSB9O1xyXG4gICAgcHJpdmF0ZSBncmlkID0ge1xyXG4gICAgICAgIHg6IDEwLCB5OiAyMFxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgcGllY2VJbmRleCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHRlc3RFbGVtZW50OiBhbnk7XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkSW5kZXhUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcclxuICAgICAgICB0aGlzLmFkZC50ZXh0KDEwMCwgNzUsIGBUZXRyaXM/IHZlciAke1ZFUlNJT059YCwge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogJzM2cHgnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5hZGQudGV4dCgxMDAsIDEyMCwgJ1N0YXJ0Jyk7XHJcbiAgICAgICAgY29uc3QgY3VzdG9taXplID0gdGhpcy5hZGQudGV4dCgxMDAsIDE0MCwgJ0N1c3RvbWl6ZScpO1xyXG4gICAgICAgIHRoaXMudGVzdEVsZW1lbnQgPSB0aGlzLmFkZC5yZWN0YW5nbGUoMTAwLCA0MDAsIDE2LCAxNiwgMHhGRjAwRkYpO1xyXG5cclxuICAgICAgICBzdGFydC5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgICAgIGN1c3RvbWl6ZS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cclxuICAgICAgICBzdGFydC5hZGRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHtncmlkOiB0aGlzLmdyaWR9O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5waWVjZUluZGV4ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEucGllY2VJbmRleCA9IHRoaXMucGllY2VJbmRleFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ01haW5TY2VuZScsIGRhdGEpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY3VzdG9taXplLmFkZExpc3RlbmVyKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGQudGV4dCgyNTAsIDI1MCwgXCJQcmVzcyBhbiBpbmRleFwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNQVRSSVhfQ09ORklHVVJBVElPTlMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLmFkZC50ZXh0KDEwMCArIChpICogMjApLCAxNjAsIGAke2l9YCwge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcyNCBweCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yLmFkZExpc3RlbmVyKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGllY2VJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXhUZXh0LnNldFRleHQoYFBpZXphIHNlbGVjY2lvbmFkYTogJHt0aGlzLnBpZWNlSW5kZXh9YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4VGV4dCA9IHRoaXMuYWRkLnRleHQoMTAwLCAxODAsICcnLCB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjQgcHgnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy50ZXN0RWxlbWVudC54IDwgNjAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVzdEVsZW1lbnQueCArPSAyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVzdEVsZW1lbnQueCA9IDEwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uL2VudGl0aWVzL2JvYXJkJztcclxuaW1wb3J0IHsgRlJBR01FTlRfU0laRSB9IGZyb20gJy4uL2NvbmYvY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiAnTWFpblNjZW5lJyxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBjdXJzb3JLZXlzOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcclxuICAgIHByaXZhdGUgZ3JpZDogR3JpZDtcclxuXHJcbiAgICBwcml2YXRlIGxvY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgbW92ZUxvY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZShkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBiYWNrID0gdGhpcy5hZGQudGV4dCgzMDAsIDc1LCAnPCBCYWNrJyk7XHJcbiAgICAgICAgYmFjay5zZXRJbnRlcmFjdGl2ZSgpO1xyXG5cclxuICAgICAgICBiYWNrLmFkZExpc3RlbmVyKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnTWFpbk1lbnUnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGQudGV4dCgxMDAsIDc1LCAnVGV0cmlzPycpO1xyXG4gICAgICAgIHRoaXMuYWRkLnRleHQoMTAwLCAxMDAsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuXHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBkYXRhLmdyaWQueCAqIEZSQUdNRU5UX1NJWkU7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gZGF0YS5ncmlkLnkgKiBGUkFHTUVOVF9TSVpFO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5hZGQudGV4dCgxMDAsIDExNSwgYCR7d2lkdGh9LCAke2hlaWdodH1gKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEdyaWQodGhpcywgMTAwLCAxNDAsIGRhdGEuZ3JpZC54LCBkYXRhLmdyaWQueSwgZGF0YS5waWVjZUluZGV4KTtcclxuICAgICAgICB0aGlzLmN1cnNvcktleXMgPSB0aGlzLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tQaWVjZU1vdmVtZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1BpZWNlTW92ZW1lbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3Vyc29yS2V5cy51cC5pc0Rvd24gJiYgIXRoaXMubG9jaykge1xyXG4gICAgICAgICAgICB0aGlzLmdyaWQucm90YXRlUGllY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2NrID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3Vyc29yS2V5cy51cC5pc1VwICYmIHRoaXMubG9jaykge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5tb3ZlTG9jaykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJzb3JLZXlzLmxlZnQuaXNEb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQubW92ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUxvY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnNvcktleXMucmlnaHQuaXNEb3duKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWQubW92ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVMb2NrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJzb3JLZXlzLmxlZnQuaXNVcCAmJiB0aGlzLmN1cnNvcktleXMucmlnaHQuaXNVcCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVMb2NrID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=