const SelectionCopy = (obj, rule) => {
    const cloneObj = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key) && rule(key)) {
            cloneObj[key] = obj[key];
        }
    }

    return cloneObj;
}