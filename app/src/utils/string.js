export const ucFirst = (s) => {
    if (!(typeof s === 'string' || s instanceof String)) {
        return s;
    }

    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}