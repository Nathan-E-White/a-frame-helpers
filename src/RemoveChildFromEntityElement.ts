// noinspection JSUnusedGlobalSymbols
export const RemoveChildFromEntityElement: (entity: Element) => Element = (entity: Element) => {
    return entity.parentNode.removeChild<Element>(entity);
}