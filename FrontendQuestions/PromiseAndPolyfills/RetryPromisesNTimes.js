// Retry Promises at a specific number of times

// Input:
// retry(asyncFn, retries = 3, delay = 50, finalError = 'Failed');

// Output:
// ... attempt 1 -> failed
// ... attempt 2 -> retry after 50ms -> failed
// ... attempt 3 -> retry after 50ms -> failed
// ... Failed.

// Simpler Version
function RetryNTimes(
    fn,
    retries = 3,
    interval = 50,
    finalErr = "Retry failed"
) {
    return new Promise((resolve, reject) => {
        function retry(retryCount) {
            if (retryCount === 0) {
                return reject(finalErr);
            }

            fn()
                .then(resolve)
                .catch(() => {
                    setTimeout(() => {
                        retry(retryCount - 1);
                    }, interval);
                });
        }

        retry(retries);
    });
}

//delay func
const wait = (ms) =>
    new Promise((resolve) => {
        setTimeout(() => resolve(), ms);
    });

// Using Async Await
const retryWithDelay = async (
    fn,
    retries = 3,
    interval = 50,
    finalErr = "Retry failed"
) => {
    try {
        // try
        await fn();
    } catch (err) {
        // if no retries left
        // throw error
        if (retries <= 0) {
            return Promise.reject(finalErr);
        }

        //delay the next call
        await wait(interval);

        //recursively call the same func
        return retryWithDelay(fn, retries - 1, interval, finalErr);
    }
};

// Advanced Version

const retryWithDelayAdvanced = (
    operation,
    retries = 3,
    delay = 50,
    finalErr = "Retry failed"
) =>
    new Promise((resolve, reject) => {
        return operation()
            .then(resolve)
            .catch((reason) => {
                //if retries are left
                if (retries > 0) {
                    //delay the next call
                    return (
                        wait(delay)
                            //recursively call the same function to retry with max retries - 1
                            .then(
                                retryWithDelay.bind(
                                    null,
                                    operation,
                                    retries - 1,
                                    delay,
                                    finalErr
                                )
                            )
                            .then(resolve)
                            .catch(reject)
                    );
                }

                // throw final error
                return reject(finalErr);
            });
    });
