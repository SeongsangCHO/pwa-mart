function createElements(root, _a) {
    var length = _a.length;
    return Array.from({ length: length }, function () {
        var element = document.createElement("div");
        element.className = "confetti";
        root.appendChild(element);
        return element;
    });
}
export default function confetti(root, config) {
    var elements = createElements(root, config);
}
