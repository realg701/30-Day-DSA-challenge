"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    name;
    area;
    radius;
    calculateArea() {
        throw new Error("Method not valid");
    }
    constructor(name, area, radius) {
        this.name = name;
        this.area = area;
        this.radius = radius;
    }
}
exports.Circle = Circle;
