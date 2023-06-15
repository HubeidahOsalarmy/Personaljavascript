const nums = [1,2,3,4,5]
const newArr = []
for (let i=0; i<= 5; i++){
    //console.log(nums[i] * nums[i])
    newArr.push(nums[i] * nums[i])
}
//console.log(newArr)
nums.map(function(item, index){
   // console.log(item * item)
})
const numsSquared = nums.map((item)=> item * item)
console.log(numsSquared)
const evens = nums.filter((item) => item % 2 == 0)
console.log(evens)
const odd = nums.filter((item) => item % 2 == 1)
console.log(odd)
const total =nums.reduce(function(a,b){
    return a + b
})
console.log(total)
const totals = nums.reduce((acc,curr) => acc + curr)
console.log(totals)
let totald = 0
for (const num of nums){
    console.log(num, totald + num)
    totald = totald + num
}
console.log(totald)
let four = nums.find((item)=>item>3)
console.log(four)
let oneTwo = nums.find((item)=>item<3)
console.log(oneTwo)
let number = nums.some((num)=>num>0)
console.log(number)
let numbers = nums.every((num)=>num>0)
console.log(numbers)
let numberss = nums.every((num)=>num>3)
console.log(numberss)
let numberN = nums.some((num)=>num>3)
console.log(numberN)
let dateOfToday = new Date()
console.log(dateOfToday)
console.log(dateOfToday.getDate())
console.log(dateOfToday.getDay())
console.log(dateOfToday.getFullYear())
console.log(dateOfToday.getHours())
console.log(dateOfToday.getMonth())
let year = dateOfToday.getFullYear()
let month = dateOfToday.getMonth()
let date = dateOfToday.getDate()
console.log(`${year}/${month}/${date}`)
function makeSquare(n){
  return n*n
}
console.log(makeSquare(3))
console.log(makeSquare(4))
console.log(makeSquare(5))
console.log(makeSquare(1))
console.log(makeSquare(2))
//function makeCube(n){
    //return n**3
  //}
  //console.log(makeCube(3))
  //console.log(makeCube(4))
  //console.log(makeCube(1))
 // console.log(makeCube(2))
//const makeCube = (func, (n)) => func() * n
//console.log(makeCube(makeSquare, 5))
function makeCube(func, n){
    return makeSquare(n) * (n)
}
console.log(makeCube(makeSquare, 4))
console.log(makeCube(makeSquare, 5))
console.log(makeCube(makeSquare, 2))
console.log(makeCube(makeSquare, 3))
const numberNu =[1,2,3,4,5]
//const callback = function(item,inex,arr){
  //  console.log(item)
//}
//numberNu.forEach(callback)
numberNu.forEach((item)=> console.log(item*item))
const squaredNums = numberNu.map((item) => item * item)
console.log(squaredNums)
const evenS = numberNu.filter((item)=> item % 2 !== 1)
 console.log(evenS)
 








































