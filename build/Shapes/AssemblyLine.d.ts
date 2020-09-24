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
     * Setting the title
     * @param title The new title
     */
    setTitle(title: string): void;
    /**
     * Setting line color
     * @param color Color name of the line
     */
    setLineColor(color: 'red' | 'green'): void;
}
//# sourceMappingURL=AssemblyLine.d.ts.map