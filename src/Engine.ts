import { Scene } from "./Scene";
import { AssemblyLine } from "./Shapes/AssemblyLine";
import { Product } from "./Shapes/Product";

export class Engine {
    scene: Scene;
    direction: 'halal' | 'haram' = 'halal';
    speed: number = 100;
    assemblyLine: AssemblyLine;
    timeOut: any;
    usedProducts: Product[] = [];
    currentProducts: Product[] = [];
    frequency: number;
    newProductInterval: any;
    halalBoxCount: number = 0;
    haramBoxCount: number = 0;
    wrongCount: number = 0;
    wrongLimit: number;
    goal: number;

    
    constructor(scene: Scene, frequency: number, wrongLimit: number, goal: number) {
        this.scene = scene;
        this.frequency = 10000/frequency;
        this.wrongLimit = wrongLimit;
        this.goal = goal;
    }

    /**
     * Starting all of the drawing and animation
     */
    start() {
        const width = this.scene.width;
        const height = this.scene.height;
        this.assemblyLine = new AssemblyLine(width, height);
        this.scene.draw(this.assemblyLine);
        this.assemblyLine.setLineColor('yellow');
        this.checkAndUpdate();

        this.newProductInterval = setInterval(() => {
            const boxType = Math.floor(Math.random() * 2) + 1;
            let box: Product;

            // Object pool of the products to not create new ones every time
            if(!this.usedProducts || !this.usedProducts.length) {
                if(boxType == 1) {
                    box = new Product(width/5, width/5, 'halal');
                } else {
                    box = new Product(width/5, width/5, 'haram');
                }
            } else {
                box = this.usedProducts.pop();
                box.type = boxType == 1 ? 'halal' : 'haram';
            }

            this.scene.draw(box);
            box.setX(width/1 + this.currentProducts.length*width/5);

            let i;
            for(i = 0; i < this.currentProducts.length; i++) {
                if(!this.currentProducts[i]) {
                    break;
                }
            }

            box.subscribtion = box.clicked.subscribe((ev) => this.boxClicked(ev, i));

            if(i == this.currentProducts.length) {
                this.currentProducts.push(box);
            } else {
                this.currentProducts[i] = box;
            }
            
        }, this.frequency);

        this.timeOut = setInterval(() => {
            this.currentProducts.forEach((box: Product, ind: number) => {
                // This product was moved to used ones
                if(box == null) {
                    return ;
                }
                if(box.x < 10) {
                    box.remove();
                    this.usedProducts.push(box);
                    this.currentProducts[ind] = null;

                    this.wrongCount++;
                    this.checkAndUpdate();
                } else {
                    box.moveLeft(this.speed, this.frequency);
                }
            })
        }, this.frequency);
    }

    /**
     * Stops the motion completely by removing all time intervals present
     */
    stop(color: 'red' | 'green') {
        clearTimeout(this.timeOut);
        clearTimeout(this.newProductInterval);

        for(let prod of this.currentProducts) {
            if(prod) {
                prod.remove();
            }
        }

        this.assemblyLine.setLineColor(color);
    }

    /**
     * checkAndUpdate and update info panel
     */
    checkAndUpdate() {
        const tens = Math.floor(this.halalBoxCount + this.haramBoxCount / 10);
        const speedTens = Math.floor((this.speed - 100) / 10);

        if(tens > speedTens) {
            this.speed += tens * 10;
        }

        this.assemblyLine.setInfo({
            wrongAmount: this.wrongCount,
            halalCount: this.halalBoxCount,
            haramCount: this.haramBoxCount
        });

        if(this.halalBoxCount + this.haramBoxCount >= this.goal) {
            // this.assemblyLine.setTitle('Success', 'green');
            this.stop('green');            
        }

        if(this.wrongCount >= this.wrongLimit) {
            // this.assemblyLine.setTitle('You failed', 'red');
            this.stop('red');            
        }
    }

    /**
     * Handling click on box with index of the product in current produc
     * @param prod object containing product and the click type
     * @param ind index in current products so it can be managed correctly
     */
    boxClicked(prod: {clickType: string, product: Product}, ind: number) {

        if(prod.clickType == 'left') {
            if(prod.product.type == 'halal') {
                this.halalBoxCount++;
            } else {
                this.wrongCount++;
            }
        } else {
            if(prod.product.type == 'haram') {
                this.haramBoxCount++;
            } else {
                this.wrongCount++;
            }
        }

        prod.product.remove();                
        this.currentProducts[ind] = null;
        this.usedProducts.push(prod.product);
        this.checkAndUpdate();
    }
}