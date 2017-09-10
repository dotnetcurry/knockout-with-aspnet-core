webpackJsonp([3],{

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(2);
var CounterExampleViewModel = (function () {
    function CounterExampleViewModel() {
        this.currentCount = ko.observable(0);
    }
    CounterExampleViewModel.prototype.incrementCounter = function () {
        var prevCount = this.currentCount();
        this.currentCount(prevCount + 1);
    };
    return CounterExampleViewModel;
}());
exports.default = { viewModel: CounterExampleViewModel, template: __webpack_require__(38) };


/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = "<h1>Counter</h1>\r\n\r\n<p>This is a simple example of a Knockout component.</p>\r\n\r\n<p>Current count: <strong data-bind='text: currentCount'></strong></p>\r\n\r\n<button data-bind='click: incrementCounter'>Increment</button>\r\n"

/***/ })

});
//# sourceMappingURL=3.js.map