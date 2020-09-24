import '@webcomponents/custom-elements/src/native-shim';
export declare class MainComponent extends HTMLElement {
    frequency: number;
    width: number;
    height: number;
    goal: number;
    wrong_limit: number;
    constructor();
    /**
     * Renders the view by adding innerHtml to the component
     */
    render(): void;
    /**
     * Adds the scene and the engine that will run it
     */
    init(): void;
}
//# sourceMappingURL=MainComponent.d.ts.map