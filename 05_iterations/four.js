//iteration in objects
// forin loop

const myObj = {
    js : 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for (const key in myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`);
// }


// forin loop in array
const programming = ['js', 'rb', 'py', 'java', 'cpp']

// for (const key in programming) {
//     // console.log(key);
//     console.log(programming[key]);
// }

// forin loop on maps -> maps are not iterable
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// for (const key in map) {
//     console.log(key);
// }

