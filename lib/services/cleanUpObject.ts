export const cleanUpObject = (obj) => {
    // if a field in object is null, undefined, or empty string, remove it
    Object.keys(obj).forEach((key) => (obj[key] == null || obj[key] === '') && delete obj[key]);
    return obj;
};