import { Selection } from "d3";
import { Shape } from "./Shape";
import { Subject, Subscription } from "rxjs";
/**
 * Class product implement Shape for drawing the product box on the scene
 */
export declare class Product implements Shape {
    type: 'halal' | 'haram';
    width: number;
    height: number;
    x: number;
    mainBox: Selection<SVGElement, unknown, null, undefined>;
    clicked: Subject<any>;
    subscribtion: Subscription;
    previousProduct: Product;
    nextProduct: Product;
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
    moveLeft(step: number, duration: number): void;
    /**
     * Setting position horizontally
     * @param x position on horizontal line
     */
    setX(x: number): void;
    /**
     * Removes product from the view and from the list
     */
    remove(): void;
    /**
     * Just a click handler
     * @param ev mouse event of the mousedown
     */
    onClick(ev: MouseEvent): void;
}
//# sourceMappingURL=Product.d.ts.map