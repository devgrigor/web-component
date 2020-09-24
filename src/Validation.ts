import { MainComponent } from "./MainComponent";

/**
 * Parses data and validates it
 * @param obj MainComponent object
 */
export const parseAndValidateData = (obj: MainComponent): boolean => {
    for(let i = 0; i <  obj.attributes.length; i++) {
        const attr = obj.attributes[i];
        if(!obj[attr.nodeName]) {
            obj[attr.nodeName] = attr.nodeValue;
        }            
    }

    if(!obj.width) {
        console.error('No width was setted up');
        return false;
    }

    if(!obj.height) {
        console.error('No height was setted up');
        return false;
    }

    if(!obj.frequancy) {
        console.error('No frequancy was setted up');
        return false;
    }

    if(!obj.goal) {
        console.error('No goal was setted up');
        return false;
    }

    if(!obj.wrong_limit) {
        console.error('No wrong_limit was setted up');
        return false;
    }

    return true;
}