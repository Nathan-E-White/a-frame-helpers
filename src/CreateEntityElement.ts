import {Scene} from "three";

let sceneEl: Element = document.querySelector('a-scene');

const CreateEntityElement = (doc: Document, eName: String, eAttrs: JSON, sName: String, scene: Element) => {
    let entityEl = doc.createElement(eName.toString());

    for (let key in eAttrs) {
        entityEl.setAttribute(key, eAttrs[key]);
    }

    scene.appendChild(entityEl);
}