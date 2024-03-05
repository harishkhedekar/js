// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//      console.log(num);
// }

// const greetings = "Hello world!"
// for (const i of greetings) {
//     if (i == " ") {
//         continue
//     }
//     console.log(i);
// }

// Maps -> unique values and not repetative 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
// console.log(map);

// for of loop on maps
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// for of loop on objects -> does not work on objects
const myObj = {
    game1 : 'NFS',
    game2 : 'GTA'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }
