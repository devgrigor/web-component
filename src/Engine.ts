import { Scene } from "./Scene";
import { Shape } from "./Shapes/Shape";
import { AssemblyLine } from "./Shapes/AssemblyLine";
import { Product } from "./Shapes/Product";

export class Engine {
    scene: Scene;
    direction: 'halal' | 'haram' = 'halal';
    speed: number = 10;
    halalBoxCount: number;
    haramBoxCount: number;
    assemblyLine: AssemblyLine;
    timeOut: any;
    
    constructor(scene: Scene) {
        this.scene = scene;
    }

    start(width: number, height: number, frequency: number) {
        const allBoxes = [];

        for(let i = 0; i < frequency; i++) {
            const boxType = Math.floor(Math.random() * 2) + 1;
            console.log(boxType);
            let box: Product;
            if(boxType == 1) {
                box = new Product(width/frequency, width/frequency, 'halal');
            } else {
                box = new Product(width/frequency, width/frequency, 'haram');
            }

            allBoxes.push(box);
            this.scene.draw(box);
            box.setX((i * (width/frequency)) + width/1);
        }

        this.assemblyLine = new AssemblyLine(width, height);
        this.scene.draw(this.assemblyLine);
        this.setDirection('halal');
        
        this.scene.clicked.subscribe((type: string) => {
            console.log(type + ' is clicked');
            this.setDirection(type == 'right' ? 'halal' : 'haram');
            this.speed += 10; 
        });

        this.timeOut = setInterval(() => {
            allBoxes.forEach((box:Product) => {
                if(box.x < 10) {
                    box.remove();
                    this.scene.draw(box);
                    box.setX(width);
                    const boxType = Math.floor(Math.random() * 2) + 1;
                    box.type = boxType == 1 ? 'halal' : 'haram';                    
                } else {
                    box.moveLeft(this.speed);
                }
            })
        }, 500);
    }

    /**
     * Setting assembli line direction
     * @param dir 
     */
    setDirection(dir: 'halal' | 'haram') {
        this.direction = dir;
        this.assemblyLine.setLineColor(dir == 'halal' ? 'green' : 'red');
        this.assemblyLine.setTitle(dir);
    }

    stop() {
        clearTimeout(this.timeOut);
    }
}