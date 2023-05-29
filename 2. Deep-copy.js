const DeepCopy = (obj) => {
    const cloneObj = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = obj[key];
        }
    }

    return cloneObj;
}

export default DeepCopy;