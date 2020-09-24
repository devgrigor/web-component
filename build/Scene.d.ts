import { Selection } from "d3";
import { Subject } from "rxjs";
import { Shape } from "./Shapes/Shape";
/**
 * Scene that will contain all the action in the component
 */
export declare class Scene {
    scene: Selection<SVGElement, unknown, null, undefined>;
    container: HTMLElement;
    clicked: Subject<String>;
    /**
     * Creates a scene with given width and height and adds it to container
     * @param width Width of the scene
     * @param height Height of the scene
     * @param container element that will contain the scene
     */
    constructor(width: number, height: number, container: HTMLElement);
    /**
     * Sets style attributes to current scene
     * @param attrName Name of the style property
     * @param attrValue value of the style propery
     */
    setStyleAttribute(attrName: string, attrValue: string): void;
    /**
     * Draws a given shape into the scene with given attributes
     * @param type shape type
     * @param attributes object with attributes
     */
    draw(shape: Shape): any;
    /**
     * Just a click handler
     * @param ev mouse event of the click
     */
    onClick(ev: MouseEvent): void;
}
//# sourceMappingURL=Scene.d.ts.map