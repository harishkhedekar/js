function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addtwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addtwoNumbers(number1, number2){
    // let result = number1 + number2
    // console.log("Hitesh");
    // return result
    // console.log("Hitesh"); // cant print anything after result
    return number1 + number2
}

const result = addtwoNumbers(3, 4)
// console.log("Result ", result);

function loginUserMessage(username = "user"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage());

//rest operator
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

//passing objects and arrays in fucntion

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));