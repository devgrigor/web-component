import { Shape } from "./Shape";
import { Selection } from "d3";
export declare class AssemblyLine implements Shape {
    type: 'assembly_line';
    width: number;
    height: number;
    title: Selection<SVGElement, unknown, null, undefined>;
    line: Selection<SVGElement, unknown, null, undefined>;
    constructor(width: number, height: number);
    /**
     * Getting halal box for adding to scene
     * @param width width
     * @param height height
     */
    draw(scene: Selection<SVGElement, unknown, null, undefined>): Selection<SVGElement, unknown, null, undefined>;
    /**
     * Setting info panel
     * @param data that has all fields of info panel at this times
     */
    setInfo(data: {
        wrongAmount: number;
        halalCount: number;
        haramCount: number;
    }): void;
    /**
     * Setting line color
     * @param color Color name of the line
     */
    setLineColor(color: 'red' | 'green' | 'yellow'): void;
    /**
     * Setting the custom title with color
     * @param title string of the title
     * @param color color of the title
     */
    setTitle(title: string, color: 'red' | 'green' | 'yellow'): void;
}
//# sourceMappingURL=AssemblyLine.d.ts.map