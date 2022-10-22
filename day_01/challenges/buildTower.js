// const buildTower = (num) => {
//     let brick = "*";
//     let space = " ";
//     for (let i = 0; i <= num; i++) {
//         console.log((space.repeat(num-i)) + brick + (space.repeat(num-i)));
//         brick += "**";    
//     };    
// };

// buildTower(4);

const buildTower = (num) => {
    let tower = [];
    for (let i = 0; i < num; i++) {
        tower.push((" ").repeat(num-1-i) + "*".repeat((i*2)+1) + (" ").repeat(num-1-i));        
    }return tower
};

console.table(buildTower(5));