import { Selection, easeLinear } from "d3";
import { Shape } from "./Shape";

export class Product implements Shape {
    type: 'halal' | 'haram';
    width: number;
    height: number;
    x: number;
    mainBox: Selection<SVGElement, unknown, null, undefined>;

    constructor(width: number, height: number, type: 'halal' | 'haram') {
        this.width = width;
        this.height = height;
        this.type = type;
    }

    /**
     * Getting halal box for adding to scene
     * @param width width
     * @param height height
     */
    draw(scene: Selection<SVGElement, unknown, null, undefined>): void {
        this.mainBox = scene.append('svg')
                        .attr('width', this.width)
                        .attr('height', this.height)
                        .attr('y', this.height * 2);
        
        this.mainBox.append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', this.width)
            .attr('height', this.height);

        if(this.type == 'haram') {
            this.mainBox.append('line')
                .attr('x1', this.width/4)
                .attr('y1', this.height/2)
                .attr('stroke-width', 2)
                .attr('x2', this.width - this.width/4)
                .attr('y2', this.height/2)
                .attr('stroke', 'red');
        } else {
            this.mainBox.append('line')
                .attr('x1', this.width/2)
                .attr('y1', this.height/4)
                .attr('stroke-width', 2)
                .attr('x2', this.width/2)
                .attr('y2', this.height - this.height/4)
                .attr('stroke', 'green');

            this.mainBox.append('line')
                .attr('x1', this.width/4)
                .attr('y1', this.height/2)
                .attr('stroke-width', 2)
                .attr('x2', this.width - this.width/4)
                .attr('y2', this.height/2)
                .attr('stroke', 'green');
        }
        
    }

    /**
     * Moving the box to left by step using animation
     * @param step amount of pixels that box will move
     */
    moveLeft(step: number) {
        this.x -= step;
        this.mainBox.transition('leftmove')
            .ease(easeLinear)
            .duration(500)
            .attr('x', this.x);
    }

    /**
     * Setting position horizontally
     * @param x position on horizontal line
     */
    setX(x: number) {
        if(!this.mainBox) {
            console.error('The element is not drawn yet');
            return ;
        }
        this.x = x;
        this.mainBox.attr('x', x);
    }

    remove() {
        this.mainBox.transition('leftmove').duration(0);
        this.mainBox.remove();
        this.mainBox = null;
    }
}