import { Scene } from "./Scene";
import { AssemblyLine } from "./Shapes/AssemblyLine";
export declare class Engine {
    scene: Scene;
    direction: 'halal' | 'haram';
    speed: number;
    halalBoxCount: number;
    haramBoxCount: number;
    assemblyLine: AssemblyLine;
    timeOut: any;
    constructor(scene: Scene);
    start(width: number, height: number, frequency: number): void;
    /**
     * Setting assembli line direction
     * @param dir
     */
    setDirection(dir: 'halal' | 'haram'): void;
    stop(): void;
}
//# sourceMappingURL=Engine.d.ts.map