Array.prototype.extraProperty = "hitesh"

const myNewArr = [1, 2, 3, 4, 5]
// for(let v in myNewArr){
//     console.log(v);
// }
for(let v in myNewArr){
    if(myNewArr.hasOwnProperty(v)){
        console.log(v);
    }
}

