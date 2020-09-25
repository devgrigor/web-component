import '@webcomponents/custom-elements/src/native-shim';
import '@webcomponents/custom-elements/src/custom-elements';
import { Scene } from "./Scene";
import { Engine } from "./Engine";
export declare class MainComponent extends HTMLElement {
    frequency: number;
    width: number;
    height: number;
    goal: number;
    wrong_limit: number;
    scene: Scene;
    engine: Engine;
    constructor();
    /**
     * Renders the view by adding innerHtml to the component
     */
    private render;
    /**
     * Adds the scene and the engine that will run it
     */
    init(): void;
    /**
     * Separated start of the engine to start from outside of the component
     */
    start(): void;
    /**
     * Separated stop of the engine to stop from outside of the component
     */
    stop(): void;
    /**
     * Returning current results of the user
     */
    getData(): {
        halalAmount: number;
        haramAmount: number;
        wrongCount: number;
    };
}
//# sourceMappingURL=MainComponent.d.ts.map