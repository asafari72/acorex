export function AXFetchProp(obj, prop: string) {
    if (typeof obj === 'undefined') {
        return false;
    }
    const index = prop.indexOf('.');

    if (index > -1) {
        return AXFetchProp(obj[prop.substring(0, index)], prop.substr(index + 1));
    }

    return obj[prop];
}
