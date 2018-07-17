'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringHelper = function () {
    function StringHelper() {
        _classCallCheck(this, StringHelper);
    }

    _createClass(StringHelper, null, [{
        key: 'uppercaseWords',
        value: function uppercaseWords(string) {

            return (string + '').replace(/^(.)|\s+(.)/g, function ($1) {
                return $1.toUpperCase();
            });
        }
    }, {
        key: 'ucWordsSanitizeRemoverEspacosEmBranco',
        value: function ucWordsSanitizeRemoverEspacosEmBranco(string) {

            return StringHelper.uppercaseWords(string).normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[^A-Z0-9]/ig, "");
        }
    }]);

    return StringHelper;
}();
//# sourceMappingURL=StringHelper.js.map