// Async Await based solution

const asyncSeriesExecuter = async function (promises) {
    for (let promise of promises) {
        try {
            const result = await promise();
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    }
};

// Reduce Based Solution
const asyncSeriesExecuterAnother = function (promises) {
    promises.reduce((acc, curr) => {
        return acc.then(() => {
            return curr().then((val) => {
                console.log(val);
            });
        });
    }, Promise.resolve());
};

// Recursion based Solution
const asyncSeriesExecuterAnotherOne = function (promises) {
    function fn(promises, i) {
        if (i === promises.length) {
            return;
        }

        return promises[i]().then(() => {
            fn(promises, i + 1);
        });
    }

    return fn(promises, 0);
};

const asyncTask = function (i) {
    return function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(`Completing ${i}`), 100 * i);
        });
    };
};

const promises = [
    asyncTask(3),
    asyncTask(1),
    asyncTask(7),
    asyncTask(2),
    asyncTask(5),
];

asyncSeriesExecuter(promises);

// Output:
// "Completing 3"
// "Completing 1"
// "Completing 7"
// "Completing 2"
// "Completing 5"
