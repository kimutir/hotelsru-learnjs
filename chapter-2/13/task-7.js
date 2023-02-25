const n = 10;

a: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (!(i % j)) continue a;
    }

    console.log(i);
}
