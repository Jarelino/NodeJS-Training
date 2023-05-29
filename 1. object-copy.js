// DEEP COPY

const objectCopy = (obj) => {
    const cloneObj = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = obj[key];
        }
    }

    return cloneObj;
}

const original = {
    string: '1',
    numb: 1,
    object: {
        asd: 'asd',
    },
    func: function () {
        return 1;
    }
}

const copy = objectCopy(original);

original.string = '123'
original.numb = 123
original.object = {
    asd: 'qwerty',
}
original.func = function () {
    return 2;
}

console.log('Deep copy')
console.log(copy.string);
console.log(copy.numb);
console.log(copy.object);
console.log(copy.func());
console.log('\n');

// SELECTION COPY

const ruleKeys = ['string', 'numb', 'object'];

const copyRule = (key) => {
    return ruleKeys.includes(key);
}

const selectionCopyFunc = (obj, rule) => {
    const cloneObj = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key) && rule(key)) {
            cloneObj[key] = obj[key];
        }
    }

    return cloneObj;
}


console.log('Selection copy')
console.log(selectionCopyFunc(original, copyRule));
console.log('\n');
