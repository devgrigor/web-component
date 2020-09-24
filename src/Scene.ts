import { select, Selection } from  "d3";
import { Subject } from "rxjs";
import { Shape } from "./Shapes/Shape";

/**
 * Scene that will contain all the action in the component
 */
export class Scene {
    scene: Selection<SVGElement, unknown, null, undefined>;
    container: HTMLElement;
    clicked: Subject<String>;

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
        this.scene.node().onclick = (ev) => this.onClick(ev);
        this.scene.node().oncontextmenu  = (ev) => this.onClick(ev);
        this.clicked = new Subject();

        // Drawing the assembly line
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

    /**
     * Just a click handler
     * @param ev mouse event of the click
     */
    onClick(ev: MouseEvent) {
        ev.stopPropagation();
        ev.preventDefault();
        
        if(ev.type == 'contextmenu') {
            this.clicked.next('right');
        } else {
            this.clicked.next('left');
        }
    }
}