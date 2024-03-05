// for each loop

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

//created a separate function and passed it in forEach
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach((item, index, array) => {
//     console.log(item, index, array);
// })

// foreach loop in array containing objects
const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})

