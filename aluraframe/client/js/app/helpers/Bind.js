"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bind =
// ... rest operator, todos os paramtros passados apartir do terceiro caem dentro de Props como um array
function Bind(model, view) {
    _classCallCheck(this, Bind);

    for (var _len = arguments.length, props = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        props[_key - 2] = arguments[_key];
    }

    var proxy = ProxyFactory.create(model, props, function (model) {
        return view.update(model);
    });
    view.update(model);
    return proxy;
};
//# sourceMappingURL=Bind.js.map