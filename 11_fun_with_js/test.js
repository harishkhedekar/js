const myArr = []
// %DebugPrint(myArr)

//Continuous(Packed), Holey
//types-
//1.SMI (small integer)
//2.Packed element
//3.Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5] 
//Packet_SMI_Elements - default

arrTwo.push(6.0)
//Packed_Double_Elements 

arrTwo.push("7")
//Packed_Elements

arrTwo[10] = 11
//Holey_Elements

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

//bound check
//hasOwnProperty(arrTwo, 9)
//hasOwnProperty(arrTwo.prototype, 10)
//hasOwnProperty(Object.prototype, 10)

//holes are very expensive in js

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2]);

// SMI > Double > Packed
// H_SMI > H_Double > H_Packed

const arrFour = new Array(3)
// just 3 holes - Holey_SMI_Elements
arrFour[0] = "1" //Holey_Elements
arrFour[1] = "2" //Holey_Elements
arrFour[2] = "3" //Holey_Elements

//better approach
const arrFive = []
arrFive.push('1') //Packed_Elemets
arrFive.push('2') //Packed_Elemets
arrFive.push('3') //Packed_Elemets


const arrSix = [1, 2, 3, 4, 5]
arrSix.push(NaN) //Packed_Double_Elements
arrSix.push(Infinity) //Packed_Double_Elements

// for, for-of, forEach