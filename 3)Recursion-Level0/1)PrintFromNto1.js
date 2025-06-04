function printFromNTo1(n) {
    if (n === 0) {
        return;
    }

    console.log(n);
    printFromNTo1(n - 1);
}

printFromNTo1(10);
