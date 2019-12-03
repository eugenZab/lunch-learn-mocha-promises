function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function devideBy10(value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (value === 0) {
                reject('value can\'t be 0')
            }
            else resolve(value / 10)
        }, 500);
    });
}

async function multiplyBy2(value) {
        await timeout(500);
        if (value === 0) {
            return 'value is equal to 0';
        }
        else return(value * 2);
}


module.exports = {
    devideBy10,
    multiplyBy2
};