let roman = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5, 
    "I": 1
}

const toRoman = num => {
    let romanNumeral = "";
    for (let key in roman) {
        if (num >= roman[key]) {
            romanNumeral + key;
            num -= roman[key];
        } romanNumeral + "";
    } return romanNumeral;
}

console.log(toRoman(5));

