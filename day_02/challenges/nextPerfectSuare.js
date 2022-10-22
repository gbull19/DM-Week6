// const perfectSquare = (num) => {
//     let sqaureRoot = Math.sqrt(num);
//     if (sqaureRoot % 1 == 0) {
//         return (sqaureRoot + 1) ** 2
//      } return -1
// }

// const perfectSquare = (num) => {
//     let sqaureRoot = Math.sqrt(num);
//     return (sqaureRoot % 1 == 0) ? ((sqaureRoot + 1) ** 2) : (-1);
// }

const perfectSquare = num => (Math.sqrt(num) % 1 == 0) ? ((Math.sqrt(num) + 1) ** 2) : (-1);

// const perfectSquare = (num) => {
//     let sqaureRoot = Math.sqrt(num);
//     return (Number.isInteger(sqaureRoot)) ? ((sqaureRoot + 1) ** 2) : (-1);
// }

// const perfectSquare = num => (Number.isInteger(Math.sqrt(num))) ? ((Math.sqrt(num) + 1) ** 2) : (-1);

console.log(perfectSquare(9)) // should return 16
console.log(perfectSquare(289)) // should return 324
console.log(perfectSquare(3000)) // should return -1