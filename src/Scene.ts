import { select, Selection } from  "d3";
import { Shape } from "./Shapes/Shape";

/**
 * Scene that will contain all the action in the component
 */
export class Scene {
    scene: Selection<SVGElement, unknown, null, undefined>;
    container: HTMLElement;
    width: number;
    height: number;

    /**
     * Creates a scene with given width and height and adds it to container
     * @param width Width of the scene
     * @param height Height of the scene
     * @param container element that will contain the scene
     */
    constructor(width: number, height: number, container: HTMLElement) {
        this.container = container;
        this.scene = select(container).append('svg');
        this.container.appendChild(this.scene.node());
        this.setStyleAttribute('width', width + 'px');
        this.setStyleAttribute('height', height + 'px');
        this.width = width;
        this.height = height;

        this.scene.node().oncontextmenu = (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
        }
    }

    /**
     * Sets style attributes to current scene
     * @param attrName Name of the style property
     * @param attrValue value of the style propery
     */
    setStyleAttribute(attrName: string, attrValue: string) {
        this.scene.node().style[attrName] = attrValue;
    }

    /**
     * Draws a given shape into the scene with given attributes
     * @param type shape type
     * @param attributes object with attributes
     */
    draw(shape: Shape) {
        return shape.draw(this.scene);
    }
}