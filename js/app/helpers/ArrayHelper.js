"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArrayHelper = function () {
        function ArrayHelper() {
                _classCallCheck(this, ArrayHelper);
        }

        _createClass(ArrayHelper, null, [{
                key: "shuffle",
                value: function shuffle(array) {

                        var currentIndex = array.length,
                            temporaryValue = void 0,
                            randomIndex = void 0;

                        // While there remain elements to shuffle...
                        while (0 !== currentIndex) {

                                // Pick a remaining element...
                                randomIndex = Math.floor(Math.random() * currentIndex);
                                currentIndex -= 1;

                                // And swap it with the current element.
                                temporaryValue = array[currentIndex];
                                array[currentIndex] = array[randomIndex];
                                array[randomIndex] = temporaryValue;
                        }

                        return array;
                }
        }]);

        return ArrayHelper;
}();
//# sourceMappingURL=ArrayHelper.js.map