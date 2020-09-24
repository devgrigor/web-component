import '@webcomponents/custom-elements/src/native-shim';
import { Scene } from "./Scene";
import { Engine } from "./Engine";
import { parseAndValidateData } from "./Validation";

export class MainComponent extends HTMLElement {
    frequency: number;
    width: number;
    height: number;
    goal: number;
    wrong_limit: number;

    constructor() {
        super();
        if(!parseAndValidateData(this)) {
            return ;
        }

        this.render();
        this.init();                
    }

    /**
     * Renders the view by adding innerHtml to the component
     */
    render() {
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
        const scene = new Scene(this.width, this.height, this);
        scene.setStyleAttribute('background-color', 'grey');
        
        const engine = new Engine(scene, this.frequency, this.wrong_limit, this.goal);
        engine.start();
    }
}

window.customElements.define('suleimans-warehouse', MainComponent);