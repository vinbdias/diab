"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Convenio = function () {
    function Convenio() {
        _classCallCheck(this, Convenio);
    }

    _createClass(Convenio, [{
        key: "limpa",
        value: function limpa() {

            this._convenio = undefined;
        }
    }, {
        key: "convenio",
        set: function set(convenio) {

            this._convenio = convenio;
        },
        get: function get() {

            return this._convenio;
        }
    }]);

    return Convenio;
}();
//# sourceMappingURL=Convenio.js.map