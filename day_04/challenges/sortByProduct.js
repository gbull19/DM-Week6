const sortByProduct = (...num) => {
    let arr = [...num];
    let arr2 = []
    for (let i = 1; i <= arr.length; i++) {
        let obj = { original: arr[i-1], new: (arr[i-1]*i)};
        arr2 = [...arr2, obj];
    } 
    arr2 = arr2.sort((a, b) => (a.new - b.new));
    return arr2.map(a => a.original);
}

console.log(sortByProduct(23, 2, 3, 4, 5))