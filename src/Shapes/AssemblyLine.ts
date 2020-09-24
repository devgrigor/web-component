import { Shape } from "./Shape";
import { Selection } from "d3";

export class AssemblyLine implements Shape {
    type: 'assembly_line';
    width: number;
    height: number;
    title: Selection<SVGElement, unknown, null, undefined>;
    line: Selection<SVGElement, unknown, null, undefined>

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    /**
     * Getting halal box for adding to scene
     * @param width width
     * @param height height
     */
    draw(scene: Selection<SVGElement, unknown, null, undefined>): Selection<SVGElement, unknown, null, undefined> {
        const mainBox = scene.append('svg').attr('width', this.width).attr('height', this.height);

        this.line = mainBox.append('line')
            .attr('x1', 10)
            .attr('y1', this.height/10)
            .attr('stroke-width', 4)
            .attr('x2', 10)
            .attr('y2', this.height - this.height/10)
            .attr('stroke', 'green');

        this.title = mainBox.append('text')
            .attr('x', 10)
            .attr('y', this.height/10 - 10)
            .attr('storke', 'black')
            .attr('context', '');

        return mainBox;
    }

    /**
     * Setting the title
     * @param title The new title
     */
    setTitle(title: string) {
        this.title.html(title);
    }
    
    /**
     * Setting line color
     * @param color Color name of the line
     */
    setLineColor(color: 'red' | 'green') {
        this.line.attr('stroke', color);
    }
}