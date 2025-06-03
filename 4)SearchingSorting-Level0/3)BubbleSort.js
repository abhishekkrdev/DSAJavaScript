function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no two elements were swapped in inner loop, array is sorted
        if (!swapped) break;
    }

    return arr;
}

// Example usage:
const array = [1, 2, 3, 4, 5]; // Already sorted
console.log("Sorted array:", bubbleSort(array));
