import { Selection } from "d3";
import { Shape } from "./Shape";
export declare class Product implements Shape {
    type: 'halal' | 'haram';
    width: number;
    height: number;
    x: number;
    mainBox: Selection<SVGElement, unknown, null, undefined>;
    constructor(width: number, height: number, type: 'halal' | 'haram');
    /**
     * Getting halal box for adding to scene
     * @param width width
     * @param height height
     */
    draw(scene: Selection<SVGElement, unknown, null, undefined>): void;
    /**
     * Moving the box to left by step using animation
     * @param step amount of pixels that box will move
     */
    moveLeft(step: number): void;
    /**
     * Setting position horizontally
     * @param x position on horizontal line
     */
    setX(x: number): void;
    remove(): void;
}
//# sourceMappingURL=Product.d.ts.map