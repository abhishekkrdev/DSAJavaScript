function memoize(fn) {
    let cache = {};
    return function (...args) {
        let key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            cache[key] = fn(...args);
            return cache[key];
        }
    };
}
