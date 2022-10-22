const greetingMachine = (name,greeting) => {
    if(typeof greeting(name) === 'string') {
        return greeting(name);
    } else {
        return "That's not a greeting.";
    }
};

const hello = name => {
    return `Hello ${name}!`;
};

const sup = name => {
    return `Sup ${name}`;
};

const yo = name => {
    return `Yo ${name}`;
};

const goodmorning = name => {
    return `Goodmorning ${name}`;
};

const addTen = num => {
    return num + 10;
}

const hasUniqueChars = (str) => {
    let set = new Set(str);
    return set = [...set];
}

module.exports = {
    greetingMachine, 
    hello, 
    sup, 
    yo, 
    goodmorning, 
    addTen,
    hasUniqueChars
};