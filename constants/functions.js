"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePerimeter = exports.calculateArea = void 0;
const calculateArea = (rectangle) => {
    return `Rectangle area is ${rectangle.width * rectangle.height}`;
};
exports.calculateArea = calculateArea;
const calculatePerimeter = (rectangle) => {
    return `Rectangle perimeter is ${2 * (rectangle.width + rectangle.height)}`;
};
exports.calculatePerimeter = calculatePerimeter;
