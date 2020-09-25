import '@webcomponents/custom-elements/src/native-shim';
import '@webcomponents/custom-elements/src/custom-elements';
import { Scene } from "./Scene";
import { Engine } from "./Engine";
import { parseAndValidateData } from "./Validation";

export class MainComponent extends HTMLElement {
    frequency: number;
    width: number;
    height: number;
    goal: number;
    wrong_limit: number;
    scene: Scene;
    engine: Engine;

    constructor() {
        super();
        if(!parseAndValidateData(this)) {
            return ;
        }
    }

    /**
     * Renders the view by adding innerHtml to the component
     */
    private render() {
        parseAndValidateData(this);
        
        this.innerHTML = `
            <p>Frequency: ${this.frequency}</p>
            <p>Wrong limit: ${this.wrong_limit}</p>
        `;
    }

    /**
     * Adds the scene and the engine that will run it
     */
    init() {
        if(this.engine) {
            console.error('The component had been initialized');
            return ;
        }
        
        this.render();

        this.scene = new Scene(this.width, this.height, this);
        this.scene.setStyleAttribute('background-color', 'grey');
        
        this.engine = new Engine(this.scene, this.frequency, this.wrong_limit, this.goal);
        this.start();
    }

    /**
     * Separated start of the engine to start from outside of the component
     */
    start() {
        this.engine.start();
    }

    /**
     * Separated stop of the engine to stop from outside of the component
     */
    stop() {
        this.engine.stop('red');
    }

    /**
     * Returning current results of the user
     */
    getData() {
        return {
            halalAmount: this.engine.halalBoxCount,
            haramAmount: this.engine.haramBoxCount,
            wrongCount: this.engine.wrongCount
        }
    }
}

window.customElements.define('suleimans-warehouse', MainComponent);