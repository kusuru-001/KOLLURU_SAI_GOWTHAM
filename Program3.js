function generateSeries(input) {
    let i = 1;
    let series = [1];
    if (input % 2 == 0) {
        input = input-1;
    }
    while (input != series.length) {
        i = i + 2;
        series.push(i);
    }
    return series.join();
}

console.log(generateSeries(6))