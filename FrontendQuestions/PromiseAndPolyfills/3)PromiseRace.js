Promise.race = function promiseRace(iterable) {
    return new Promise((resolve, reject) => {
        if (iterable.length === 0) {
            return;
        }

        iterable.forEach((item) =>
            // Incorrect to use `catch()`, use onReject in `then()`.
            Promise.resolve(item).then(resolve).catch(reject)
        );
    });
};
