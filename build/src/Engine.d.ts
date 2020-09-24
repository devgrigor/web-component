import { Scene } from "./Scene";
import { AssemblyLine } from "./Shapes/AssemblyLine";
import { Product } from "./Shapes/Product";
export declare class Engine {
    scene: Scene;
    direction: 'halal' | 'haram';
    speed: number;
    assemblyLine: AssemblyLine;
    timeOut: any;
    usedProducts: Product[];
    currentProducts: Product[];
    frequency: number;
    newProductInterval: any;
    halalBoxCount: number;
    haramBoxCount: number;
    wrongCount: number;
    wrongLimit: number;
    goal: number;
    constructor(scene: Scene, frequency: number, wrongLimit: number, goal: number);
    /**
     * Starting all of the drawing and animation
     */
    start(): void;
    /**
     * Stops the motion completely by removing all time intervals present
     */
    stop(color: 'red' | 'green'): void;
    /**
     * checkAndUpdate and update info panel
     */
    checkAndUpdate(): void;
    /**
     * Handling click on box with index of the product in current produc
     * @param prod object containing product and the click type
     * @param ind index in current products so it can be managed correctly
     */
    boxClicked(prod: {
        clickType: string;
        product: Product;
    }, ind: number): void;
}
//# sourceMappingURL=Engine.d.ts.map