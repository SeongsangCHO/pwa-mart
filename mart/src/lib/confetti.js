"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createElements(root, _a) {
    var length = _a.length;
    return Array.from({ length: length }, function () {
        var element = document.createElement("div");
        element.className = "confetti";
        root.appendChild(element);
        return element;
    });
}
function confetti(root, config) {
    var elements = createElements(root, config);
}
exports.default = confetti;
// var config = {
//     length: 100, // 예: 100개의 confetti 생성
// };``
// var root = document.getElementById("confetti-container"); // confetti를 표시할 요소 선택
// confetti(root, config); // confetti 함수 호출
