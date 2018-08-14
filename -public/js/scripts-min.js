(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _example = require("./modules/example");

var _activeMenu = require("./modules/active-menu");

// saludo()
// despedida()
(0, _activeMenu.activeMenu)();

},{"./modules/active-menu":2,"./modules/example":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var activeMenu = exports.activeMenu = function activeMenu() {
    var menu = document.getElementById('main-menu');
    if (menu) {
        var links = Array.from(menu.querySelectorAll('a'));
        links.map(function (link) {
            if (link.href === location.href) link.classList.add('active');
        });
    }
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Este es un ejemplo de como exportar funciones desde un archivo
// En index.js se importan estas funciones

var saludo = exports.saludo = function saludo() {
  console.log('Hola mundo');
};

var despedida = exports.despedida = function despedida() {
  console.log('Adiós mundo');
};

},{}]},{},[1]);

//# sourceMappingURL=scripts-min.js.map
